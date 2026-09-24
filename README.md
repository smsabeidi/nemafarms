# NemaFarms — expanded website design

A responsive, local website design prototype with 17 distinct page views. Uses the supplied NemaFarms logo and farm photographs, with a disclosed AI-assisted studio treatment of the supplied chicken package photograph. The original is preserved in the photo collection.

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
| Buying guide / FAQs | #/buying |
| Our farm | #/farm |
| Our approach | #/approach |
| Community | #/community |
| Partnerships | #/partners |
| Journal | #/journal |
| Everyday growing essay | #/story |
| Growing ground essay | #/story?entry=land |
| Poultry house essay | #/story?entry=poultry |
| Photo gallery | #/gallery |
| Enquiry preview | #/contact |

## Design and interactions

- New photographic homepage with product cards, editorial story sections, business entry points and journal previews.
- Dedicated product layouts with current-price enquiry language; chicken quantity selector carries through to contact.
- Separate wholesale, partnership, community, buying-guide and journal designs.
- Keyboard-operable photo enlargement, native FAQ accordions, mobile navigation, breadcrumb links and active route indication.
- Contact validates input and displays an explicitly unsent enquiry summary. No data transmission, payment, database or operational order system.

## Source structure

- index.html: shared navigation/footer and script loading.
- styles.css and pages.css: shared and original supporting-page styles.
- pages.js: farm, approach and contact.
- design-v2.js / design-v2.css: current homepage, product collection and expanded visual system.
- commerce.js / commerce.css: product detail, wholesale, buying guide.
- editorial.js / editorial.css: community, partners, journal, essays and gallery.
- app.js: routing, product/quantity selection, preview form, navigation and gallery.
- assets/sources.md: photographic provenance, including the generated studio treatment.

## Verification

All 17 views checked at 1440px, 768px, 390px and 320px. No horizontal document overflow or browser JavaScript errors in those checks. Audited internal route destinations and 70 image instances. Tested quantity-to-enquiry, preview summary, mobile navigation, journal entry selection and gallery close. Reviewed desktop/mobile screenshots in tmp/qa/. This is design QA, not a production accessibility or performance certification.

## Publication boundary

This is a local design deliverable. Current availability, weights, prices, contact details and any product claims require owner confirmation before operational publication. The $7.99 overlay in the original supplied photo is not used as a current price. The studio image is a retouched presentation asset and is identified as such. Dates and claims on packaging should be checked against final commercial artwork.

### September motion and imagery update
Both brand-document phone numbers are available via tel links on contact, footer and a global call selector. Generated monochrome scenes are labelled illustrative; original documentary images remain intact. GSAP 3.14.2 and ScrollTrigger are vendored locally with their original notices. Motion is scoped per route and disabled for reduced-motion preferences; menus and image dialogs use native Web Animations. Form remains a local design preview and sends nothing.

References: https://gsap.com/docs/v3/ · https://motion.dev/ · https://developer.apple.com/design/human-interface-guidelines/motion

### Editorial redesign, version 5
Rebuilt homepage with split editorial cover, original farm photography, purpose statement, interactive three-category product explorer, origin story, illustrative photo collection, wholesale paths and journal feature. Product explorer supports keyboard tab navigation and native-dialog quick views. Rebuilt collection page and farm introduction; unified supporting typography, contact form treatment and product surfaces. GSAP selectors updated for new layouts, retaining reduced-motion behavior. Static source validation covers route rendering, headings, local image references and internal destinations; no new browser QA was performed during this pass.

### Design depth, version 6
- Guided two-step enquiry with validation, editable local review and copy action. Form data is neither stored nor sent.
- Wholesale redesign with three buyer paths and a supply brief builder. Business type, products, cadence and quantities carry into the enquiry in memory.
- Full-height mobile navigation with focus isolation, Escape close, route close and photographic editorial detail.
- Gallery sequencing with arrow buttons, keyboard navigation and image counter; dedicated missing-page treatment.
- Browser checks: eight representative routes at four widths (32 layouts), product tabs and quick views, enquiry review/edit, gallery keyboard navigation; no reported page errors or horizontal overflow. Separate wholesale checks at four widths and brief-to-enquiry transfer pass. Menu focus isolation and close behavior pass. These are targeted checks, not a full accessibility certification.
