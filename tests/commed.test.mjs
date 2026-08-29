import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const json = (path) => JSON.parse(read(path));

test('COMMED images preserve the supplied originals', () => {
  for (const name of ['commed-logo.png', 'commed-hero.webp', 'commed-social-card.png', 'category-curacion.webp', 'category-quirurgico.webp', 'category-diagnostico.webp', 'category-consumibles.webp']) {
    const output = name.startsWith('category-') ? `commed-${name}` : name;
    const hash = (path) => createHash('sha256').update(readFileSync(new URL(path, root))).digest('hex');
    assert.equal(hash(`assets/${output}`), hash(`assets/brand/${name}`));
  }
});

test('Home references valid configurable sections and category assets', () => {
  const index = json('templates/index.json');
  for (const id of index.order) {
    const section = index.sections[id];
    assert.ok(section);
    const source = read(`sections/${section.type}.liquid`);
    const schema = JSON.parse(source.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
    if (!section.type.startsWith('commed-')) continue;
    assert.equal(schema.limit, 1);
    assert.deepEqual(schema.enabled_on.templates, ['index']);
    for (const blockId of section.block_order || []) {
      const block = section.blocks[blockId];
      const definition = schema.blocks.find((b) => b.type === block.type);
      assert.ok(definition);
      for (const setting of Object.keys(block.settings)) assert.ok(definition.settings.some((s) => s.id === setting));
      assert.ok(readFileSync(new URL(`assets/commed-category-${block.settings.fallback}.webp`, root)).length);
    }
  }
  assert.equal(index.sections.featured_collection.disabled, true);
  assert.equal(json('sections/footer-group.json').sections.footer.type, 'commed-footer');
});

test('Theme uses configurable COMMED branding and Shopify Montserrat', () => {
  const settings = json('config/settings_data.json').current;
  assert.equal(settings.commed_brand_name, 'COMMED');
  assert.equal(settings.type_body_font, 'montserrat_n4');
  assert.equal(settings.type_header_font, 'montserrat_n9');
  assert.equal(settings.color_schemes['scheme-1'].settings.button, '#06275F');
  const fields = json('config/settings_schema.json').flatMap((g) => g.settings || []);
  assert.ok(fields.some((s) => s.id === 'commed_navigation' && s.type === 'checkbox'));
  assert.match(read('layout/theme.liquid'), /'commed.css' \| asset_url/);
  assert.match(read('layout/theme.liquid'), /'commed.js' \| asset_url/);
});

test('WhatsApp is the configurable primary contact across the theme', () => {
  const fields = json('config/settings_schema.json').flatMap((group) => group.settings || []);
  assert.equal(fields.find((setting) => setting.id === 'commed_whatsapp_enabled')?.default, true);
  assert.equal(fields.find((setting) => setting.id === 'commed_whatsapp_number')?.default, '5214431600867');
  assert.equal(fields.find((setting) => setting.id === 'commed_whatsapp_display')?.default, '+52 1 443 160 0867');

  const snippet = read('snippets/commed-whatsapp-link.liquid');
  assert.match(snippet, /https:\/\/wa\.me\/\{\{ whatsapp_number \}\}/);
  assert.match(snippet, /target="_blank"/);
  assert.match(snippet, /aria-label="Contactar por WhatsApp al/);
  assert.match(read('sections/commed-about.liquid'), /render 'commed-whatsapp-link'/);
  assert.match(read('sections/commed-footer.liquid'), /render 'commed-whatsapp-link'/);
  assert.match(read('sections/contact-form.liquid'), /render 'commed-whatsapp-link'/);
  assert.match(read('layout/theme.liquid'), /variant: 'floating'/);
});

function simulateClick({ modified = false, pathname = '/', drawerPresent = true } = {}) {
  let listener;
  const result = { closed: false, focused: false, expanded: 'true' };
  const target = { setAttribute() {}, focus() { result.focused = true; } };
  const summary = { setAttribute(name, value) { if (name === 'aria-expanded') result.expanded = value; } };
  const drawer = { querySelector: () => summary, closeMenuDrawer() { result.closed = true; } };
  const link = { href: 'http://localhost/#commed-categorias', closest: () => drawerPresent ? drawer : null };
  class Element { closest() { return link; } }
  vm.runInNewContext(read('assets/commed.js'), {
    Element, URL,
    location: { origin: 'http://localhost', pathname },
    document: { addEventListener(type, handler) { listener = handler; }, getElementById: () => target }
  });
  listener({ target: new Element(), button: 0, ctrlKey: modified });
  return result;
}

test('Mobile same-page navigation closes the drawer and releases focus', () => {
  assert.deepEqual(simulateClick(), { closed: true, focused: true, expanded: 'false' });
});

test('Modified clicks, other pages and footer links keep native behavior', () => {
  for (const options of [{ modified: true }, { pathname: '/collections/all' }, { drawerPresent: false }]) {
    assert.deepEqual(simulateClick(options), { closed: false, focused: false, expanded: 'true' });
  }
});
