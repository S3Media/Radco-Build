# RADCO Air Conditioning & Appliance — Website Build

Static HTML/CSS/JS website for **RADCO Air Conditioning & Appliance**, a family-owned
HVAC and appliance company in Spring Hill, FL (founded 1991). Built by S3 Media Group.

## Structure

```
.
├── ac-split-system-installation.html   # Page(s) built from the live site
└── assets/
    ├── css/main.css                    # All site styles (single stylesheet)
    ├── js/main.js                       # Site JavaScript (accordions, etc.)
    └── images/                          # Optimized .webp images
```

## Design system rules

These are enforced on **every** page:

- **No inline styles.** Zero `style=""` attributes and zero `<style>` blocks. All
  styling lives in `assets/css/main.css`.
- **Brand colors:** green `#08B12A` accent / `#079622` dark; dark blue `#072F64`
  primary / `#051F44`; info blue `#1F6FB2`.
- **Fonts:** Poppins (headings), Inter (body).
- **Internal links** use `https://newradco.mysites.io/` (except the email
  `officeadmin@radcoair.com`).
- **Schedule Service** buttons link to
  `https://newradco.mysites.io/request-hvac-repairs/`. CTA text is
  "Schedule Service" (never "Schedule Online").
- **FAQ / accordion pattern:** `<div class="accordion-item">` +
  `<button class="accordion-header">` + `<div class="accordion-body">`.
  Never `<details>`/`<summary>`. First item has `is-open` and `fa-minus`; the
  rest use `fa-plus`.
- **Every page** includes connected `@graph` JSON-LD schema (WebSite,
  Organization, HVACBusiness + LocalBusiness, WebPage, BreadcrumbList, plus
  page-specific entities such as Service, FAQPage, HowTo, ImageObject).
- **Building from a source URL:** use exact source verbiage and match the source
  heading hierarchy exactly.

## Reusable CSS modules

Reuse these aggressively rather than writing new styles: `page-hero`,
`intro__grid`, `signs` + `sign-card`, `why-choose(--no-image)`,
`repair-services(--alt)`, `service-grid(--2col)`, `feature-strip`,
`brands(--stacked)`, `checklist`, `faq` + `accordion-item`, `cta-band`,
`promo-banner`, `steps`, `coupon`, `offers-close`.

## Business information

- **Address:** 9371 Lakefront Rd, Spring Hill, FL 34613
- **Phones:** Hernando 352-684-7821 · Pasco 727-869-8861 · Citrus 352-513-3539 · Parts 352-596-3369
- **Licenses:** HVAC CAC058388 · Appliance 220996
- **Rating:** 4.9 / 5 (147 reviews)

## Delivery

The finished site is packaged as `radco-site.zip` for delivery.
