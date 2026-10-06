# NemaFarms — expanded website design

A responsive, local website design prototype with a focused canonical page map for NemaFarms. It uses the supplied logo, sticker artwork and farm photography, with the client’s solar, feed and food-forest story integrated into the Farm page. Review-only AI scene injections have been removed from the visible experience.

## Review

Open http://127.0.0.1:4173/?design=2#/ while the local preview server is running. To restart, run `python3 -m http.server 4173 --bind 127.0.0.1` from this folder. No build or package installation required. Google Fonts is used with fallback families.

## Page map

| Page | Route |
| --- | --- |
| Homepage | #/ |
| Product collection | #/products |
| Whole chicken | #/chicken |
| Eggs | #/eggs |
| Farm produce | #/produce |
| Wholesale | #/wholesale |
| Our farm | #/farm |
| Community | #/community |
| Journal | #/journal |
| Everyday growing essay | #/story |
| Growing ground essay | #/story?entry=land |
| Poultry house essay | #/story?entry=poultry |
| Enquiry preview | #/contact |

The former `/approach`, `/partners`, `/buying` and `/gallery` routes redirect to the canonical Farm, Community, Wholesale and Journal destinations so the navigation stays concise while legacy links continue to resolve.

## Design and interactions

- New photographic homepage with product cards, editorial story sections, business entry points and journal previews.
- Dedicated product layouts with current-price enquiry language; chicken quantity selector carries through to contact.
- Wholesale, community and journal designs with product-specific enquiry routes.
- Keyboard-operable photo enlargement, native FAQ accordions, mobile navigation, breadcrumb links and active route indication.
- Contact validates input and displays an explicitly unsent enquiry summary. No data transmission, payment, database or operational order system.

## Source structure

- index.html: shared navigation/footer and script loading.
- styles.css and pages.css: shared and original supporting-page styles.
- pages.js: farm, approach and contact.
- atelier.js / atelier.css: current homepage, product collection and farm systems presentation.
- commerce.js / commerce.css: product detail, wholesale, buying guide.
- editorial.js / editorial.css: community, partners, journal, essays and gallery.
- app.js: routing, product/quantity selection, preview form, navigation and gallery.
- assets/sources.md: photographic provenance for the supplied imagery and the clearly labelled solar stock reference.

## Verification

Canonical routes were checked in the local browser preview, including product enquiries, farm systems anchor navigation, WhatsApp links, legacy-route redirects and journal photography. A client review sheet is available at `docs/nemafarms-page-thumbnails.png`. This is design QA, not a production accessibility or performance certification.

## Publication boundary

This is a local design deliverable. Current availability, weights, prices, contact details and any product claims require owner confirmation before operational publication. The $7.99 overlay in the original supplied photo is not used as a current price. Dates and claims on packaging should be checked against final commercial artwork.

### September motion and imagery update
Both brand-document phone numbers are available via tel links on contact, footer and the call selector. WhatsApp uses the client-provided +220 912 2427 destination with the familiar brand mark and opens the chat directly. GSAP 3.14.2 and ScrollTrigger are vendored locally with their original notices. Motion is scoped per route and disabled for reduced-motion preferences; menus and image dialogs use native Web Animations. The form remains a local design preview and sends nothing.

References: https://gsap.com/docs/v3/ · https://motion.dev/ · https://developer.apple.com/design/human-interface-guidelines/motion

### Client imagery and content pass
Replaced review-stage AI scenes and concept packaging with the supplied NemaFarms sticker, egg crates, poultry-house, layer-cage and produce-bed photographs. Added the solarized-grid and food-forest sections, the commercial-feed/maize note, factual photo captions and a reduced footer/page map. The page thumbnail sheet documents the canonical review set.

### Design depth, version 6
- Guided two-step enquiry with validation, editable local review and copy action. Form data is neither stored nor sent.
- Wholesale redesign with three buyer paths and a supply brief builder. Business type, products, cadence and quantities carry into the enquiry in memory.
- Full-height mobile navigation with focus isolation, Escape close, route close and photographic editorial detail.
- Gallery sequencing with arrow buttons, keyboard navigation and image counter; dedicated missing-page treatment.
- Browser checks: eight representative routes at four widths (32 layouts), product tabs and quick views, enquiry review/edit, gallery keyboard navigation; no reported page errors or horizontal overflow. Separate wholesale checks at four widths and brief-to-enquiry transfer pass. Menu focus isolation and close behavior pass. These are targeted checks, not a full accessibility certification.
