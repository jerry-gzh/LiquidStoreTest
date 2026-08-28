# Shopify Test Store Project Guidelines

## 1. Project Objective

Build a **Shopify test store** that simulates the intended production architecture as closely as possible, while keeping the implementation simple, maintainable, and aligned with Shopify best practices.

The current direction is:

- Use **Shopify as the commerce backend/platform**
- Use a **customized Shopify Theme**
- Develop with **Liquid + HTML + CSS + JavaScript**
- Avoid a headless storefront unless a real business requirement justifies it
- Avoid building a custom e-commerce backend from scratch
- Use Shopify native functionality first, then add apps/integrations only when necessary

The test store should be useful as both:

1. A technical sandbox for development
2. A realistic proof of concept for the client

---

# 2. Core Architecture

Throughout the project, keep these three layers clearly separated.

## 2.1 Developer Layer — Shopify Partner / Development

This is the technical workspace.

Primary user:
- Developer / implementation team

Responsibilities:
- Create and manage development/test stores
- Manage collaborator access
- Develop and version the custom theme
- Work with Shopify CLI
- Work with Git
- Manage technical integrations
- Configure apps when necessary
- Test new functionality before it reaches production

This layer should not be confused with the merchant's day-to-day operational admin.

Mental model:

```text
Developer
   ↓
Shopify Partner / Dev tooling
   ↓
Theme / integrations / configuration
```

---

## 2.2 Merchant Layer — Shopify Admin

This is the operational backoffice used by the client's business.

Primary users:
- Store owner
- Sales team
- Warehouse/inventory staff
- Marketing staff
- Other authorized users

Typical responsibilities:
- Products
- Prices
- Inventory
- Orders
- Customers
- Discounts
- Payments
- Shipping configuration
- Analytics
- Store content
- Apps
- Business configuration

Important principle:

> We do not need to build this administration panel ourselves. Shopify already provides it.

The theme should be designed so the merchant can modify content without touching code whenever possible.

---

## 2.3 Customer Layer — Storefront

This is the public-facing website.

Primary user:
- End customer / buyer

Typical areas:
- Home
- Catalog
- Collections
- Product pages
- Search
- Cart
- Checkout
- Customer account
- Informational pages

Technology:

```text
Shopify Theme
├── Liquid
├── HTML
├── CSS
└── JavaScript
```

This is the main area where custom visual development will happen.

---

# 3. Terminology to Use During Development

Use these terms consistently:

- **Developer**: technical implementation team
- **Merchant**: client/store owner
- **Customer**: end user who buys from the store
- **Shopify Admin**: merchant backoffice
- **Storefront**: public-facing store
- **Theme**: presentation layer used by the storefront
- **Dev Store**: development/testing Shopify store
- **Collaborator**: external Shopify Partner access to a merchant store

Avoid using the word “client” ambiguously when discussing Shopify internals.

---

# 4. Selected Technical Approach

The chosen approach is:

> **Shopify Theme personalized with Liquid/CSS/JavaScript**

We are intentionally not starting with:

- Headless Shopify
- Next.js storefront
- Custom commerce backend
- Custom order-management system
- Custom inventory backend
- Custom payment backend

Reason:

A headless architecture would add unnecessary complexity for the first implementation unless there is a requirement that Shopify Themes cannot reasonably solve.

Potential extra responsibilities introduced by headless:

- Separate frontend hosting
- API integrations
- Cache strategy
- More deployment complexity
- Additional monitoring
- More failure points
- API-version maintenance
- Increased testing surface
- More complex SEO considerations

Rule:

> Do not introduce headless architecture unless we can clearly identify a client requirement that cannot reasonably be solved with a Shopify Theme.

---

# 5. Theme Strategy

Use an official Shopify theme as the base rather than creating the entire storefront from nothing.

Recommended starting point:

- Dawn or another official free Shopify theme

The base theme is only a foundation.

We should still customize:

- Layout
- Header
- Navigation
- Product cards
- Product pages
- Collection pages
- Home sections
- Typography
- Spacing
- Responsive behavior
- Brand colors
- Interactions
- Footer
- Promotional content
- Custom sections

The desired model is:

```text
Official base theme
      ↓
Custom Liquid sections
      ↓
Custom CSS / JS
      ↓
Merchant-configurable components
```

---

# 6. Important Theme Development Principle

Prefer creating **configurable Shopify sections** rather than hard-coded page content.

Example:

Instead of hard-coding:

```html
<h1>Summer Collection</h1>
```

create a section where the merchant can edit:

- Title
- Subtitle
- Image
- Button text
- Button link
- Alignment
- Visibility
- Number of products
- Collection source

Example conceptual section:

```text
Hero Section
├── Title
├── Subtitle
├── Image
├── CTA text
├── CTA URL
└── Visibility settings
```

The merchant modifies content from Shopify Admin.

The developer controls component behavior and presentation.

---

# 7. Development Environment

The development environment should eventually include:

```text
Node.js
Git
VS Code
Shopify CLI
Shopify Dev Store
Theme source code
Git repository
```

Typical workflow:

```text
VS Code
   ↓
Liquid / CSS / JS
   ↓
Shopify CLI
   ↓
Development Theme
   ↓
Shopify Dev Store
   ↓
Browser preview
```

Use Git from the beginning.

Suggested repository strategy:

```text
main
└── develop
    ├── feature/header
    ├── feature/home
    ├── feature/product-page
    └── feature/cart
```

This structure can be simplified for a one-person project if necessary, but source control is mandatory.

---

# 8. Suggested Theme Structure

A Shopify theme will commonly contain:

```text
assets/
blocks/
config/
layout/
locales/
sections/
snippets/
templates/
```

Prefer creating clearly named custom sections, for example:

```text
sections/
├── hero-custom.liquid
├── featured-products-custom.liquid
├── categories-grid-custom.liquid
├── benefits-custom.liquid
├── testimonials-custom.liquid
└── newsletter-custom.liquid
```

Avoid unnecessary modifications to unrelated base-theme files.

This makes future upgrades and maintenance easier.

---

# 9. Shopify-First Implementation Rule

Before writing custom code or installing an app, check whether Shopify already supports the requirement natively.

Decision hierarchy:

```text
1. Native Shopify feature
2. Theme configuration
3. Custom Liquid/CSS/JS
4. Existing trusted Shopify app
5. Custom app/integration
6. External/headless/custom backend
```

Always try the least complex viable option first.

---

# 10. Business Features Expected in the Test Store

The test store should eventually demonstrate the following areas.

## Catalog

- Products
- Collections
- Product variants
- SKUs
- Product images
- Prices
- Compare-at prices where relevant
- Product availability

## Inventory

- Stock quantities
- Inventory tracking
- One or more locations if useful for testing
- Out-of-stock behavior

## Orders

- Test order creation
- Order states
- Fulfillment workflow
- Cancellation
- Refund flow
- Order notes if relevant

## Customers

- Customer records
- Customer accounts
- Customer contact data

## Discounts

- Discount codes
- Automatic discounts where applicable
- Basic promotion scenarios

## Payments

Use test/sandbox payment mechanisms during development.

The initial production direction is to prefer Shopify Payments when commercially appropriate.

Do not store or process card data directly in custom code.

## Shipping

Test:

- Flat-rate shipping
- Free shipping threshold
- Weight/value-based rules if needed
- Local pickup if relevant

Do not assume carrier-calculated shipping is available in every Shopify plan.

## Store Content

Include representative:

- Home page
- About page
- Contact page
- FAQ
- Shipping policy
- Returns policy
- Privacy policy
- Terms

---

# 11. Shopify Basic Assumption

The project currently assumes **Shopify Basic** as the likely starting plan.

Reasons:

- Appropriate for a small/first online store
- Supports products and inventory
- Supports orders
- Supports checkout
- Supports Shopify Payments
- Includes hosting and SSL
- Supports free themes
- Supports up to 10 inventory locations

Important constraints to validate with the client before production:

## Staff users

Shopify Basic does not include additional staff accounts.

A typical valid Basic scenario is:

```text
Store owner
+
Developer as Collaborator
```

If the merchant requires separate users such as:

```text
Owner
Warehouse
Sales
Marketing
```

a higher Shopify plan may be necessary.

## Carrier-calculated shipping

Basic may not support direct third-party carrier-calculated shipping in the same way as higher plans.

Validate this before committing to real-time DHL/FedEx/etc. rates.

---

# 12. Payments Guidance

Initial preferred model:

```text
Shopify Basic
+
Shopify Payments
```

Current assumptions previously researched for Mexico should always be revalidated against official Shopify pricing before production contracts are signed.

Important principles:

- Payment fees are a merchant operating cost
- Shopify fees should not be absorbed into the developer's project price
- External payment gateways can add both their own fee and additional Shopify transaction fees
- Avoid unnecessary multiple payment providers unless there is a clear commercial reason
- Refunds may not return the original payment processing fee
- Chargebacks can create additional costs

Never hard-code current commercial fees into application logic.

---

# 13. Third-Party Apps

Apps should only be added when necessary.

Potential future categories:

- CFDI invoicing
- Shipping/logistics
- WhatsApp
- Reviews
- Marketing
- CRM
- ERP
- Marketplace synchronization
- Advanced analytics

Guideline:

> Do not assume an app is free.

Apps may charge:

- Monthly subscriptions
- Usage fees
- One-time fees
- External provider fees

Every paid app must be approved before being considered part of the final architecture.

---

# 14. Mexican Market Considerations

The production implementation may need to consider:

- MXN pricing
- RFC data
- CFDI invoicing
- Mexican tax requirements
- Domestic shipping
- Local payment methods
- Mexican card acceptance
- MSI if requested
- Privacy and commercial policies
- Consumer-protection obligations

Shopify itself should not be assumed to fully solve CFDI issuance.

If automatic CFDI is required, evaluate:

```text
Shopify
   ↓
CFDI integration / app
   ↓
Existing invoicing provider
   ↓
SAT
```

---

# 15. Testing Store Strategy

For the current phase, create a realistic test store.

Recommended sample data:

```text
15–30 products
3–5 collections
Several product variants
Realistic prices
Inventory values
Sample customers
Sample discounts
Sample shipping rules
Test orders
```

Do not use a single dummy product only.

The objective is to expose real edge cases early.

Suggested example scenarios:

1. Product with no variants
2. Product with color variants
3. Product with size variants
4. Product with low stock
5. Out-of-stock product
6. Discounted product
7. Free shipping threshold
8. Order with multiple products
9. Partial refund test
10. Cancelled order

---

# 16. Storefront Development Priorities

Suggested order:

```text
1. Global design system
2. Header
3. Footer
4. Home
5. Collection page
6. Product card
7. Product page
8. Search
9. Cart
10. Customer account
11. Informational pages
12. Responsive improvements
```

Do not start by heavily customizing every Shopify page simultaneously.

---

# 17. Responsive Design

The storefront should be developed **mobile-first or at least mobile-priority**.

Assumption:

A meaningful percentage of traffic may come from:

- Instagram
- Facebook
- WhatsApp
- Google mobile search

Test at minimum:

- Small phone
- Typical modern phone
- Tablet
- Laptop
- Desktop

Avoid desktop-only layouts.

---

# 18. SEO and Analytics

Before production, evaluate:

- Page titles
- Meta descriptions
- Product metadata
- Collection metadata
- Clean URLs
- Sitemap
- robots behavior
- Open Graph
- Google Analytics
- Google Search Console
- Meta Pixel if required

Do not overload the first development phase with advanced marketing tooling unless required.

---

# 19. User Roles and Access

Maintain clear ownership boundaries.

Recommended production model:

```text
Merchant
└── Store Owner

Developer
└── Shopify Partner Collaborator
```

The merchant should remain the legal/business owner of the Shopify store.

The developer should not require the merchant's password.

Use collaborator access whenever possible.

---

# 20. Ownership Principle

The merchant should directly own/pay for:

- Shopify subscription
- Domain
- Paid apps
- Payment gateway fees
- Shipping services
- Invoicing services
- Third-party SaaS
- Advertising platforms

The developer should charge separately for:

- Discovery
- Design
- Shopify configuration
- Theme development
- Liquid/CSS/JS customization
- Integrations
- Testing
- Deployment
- Training
- Ongoing support

This separation protects both parties.

---

# 21. Out of Scope by Default

Unless explicitly approved, the following should be considered outside the first implementation:

- Custom ERP
- Custom CRM
- Custom payment processing
- Custom warehouse management platform
- Native mobile apps
- Headless storefront
- Custom Shopify app
- Complex marketplace synchronization
- Multi-country architecture
- Advanced B2B
- Custom POS
- Complex loyalty program
- Fully custom checkout
- Advanced logistics optimization

They can be evaluated as later phases.

---

# 22. Definition of a Successful Test Store

The test store should demonstrate the complete flow:

```text
Developer configures theme
        ↓
Merchant manages product
        ↓
Customer visits storefront
        ↓
Customer selects product
        ↓
Cart
        ↓
Checkout
        ↓
Test payment
        ↓
Order created
        ↓
Inventory updated
        ↓
Merchant sees order
        ↓
Fulfillment simulated
```

If this full flow works correctly, the test environment has fulfilled its main purpose.

---

# 23. Development Philosophy

Use these rules throughout the project:

1. Prefer native Shopify features.
2. Keep the three layers separate: Developer, Merchant, Customer.
3. Avoid unnecessary architectural complexity.
4. Make content configurable by the merchant.
5. Keep business logic out of the theme when possible.
6. Never handle card data directly.
7. Use Git.
8. Test realistic commerce scenarios.
9. Add apps only when justified.
10. Avoid headless unless the requirements demand it.
11. Do not make assumptions about plan limitations—verify against current Shopify documentation.
12. Keep third-party costs separate from development fees.

---

# 24. Immediate Next Technical Phase

Once this document is adopted as the project baseline, the next technical tasks are:

```text
1. Confirm Shopify Dev Store
2. Install/verify Node.js
3. Install/verify Git
4. Install Shopify CLI
5. Select base theme
6. Clone/init theme locally
7. Initialize Git repository
8. Connect Shopify CLI to Dev Store
9. Run local theme preview
10. Create first custom Liquid section
```

At that point, development can proceed iteratively.

---

# 25. Guiding Architecture Summary

```text
                 SHOPIFY PLATFORM
                        │
        ┌───────────────┼───────────────┐
        │               │               │
    DEVELOPER        MERCHANT        CUSTOMER
        │               │               │
 Partner / CLI      Shopify Admin     Storefront
 Git / Liquid       Products          Catalog
 CSS / JS           Inventory         Product
 Integrations       Orders            Cart
                    Customers         Checkout
```

Final principle:

> **Developer configures and develops. Merchant operates. Customer buys.**

This separation should remain clear throughout the entire project.
