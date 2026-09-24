# NemaFarms website strategy and delivery plan

Prepared 22 September 2026. Planning deliverable only; no website has been built or published. “June 2026 grade” is interpreted as a quality benchmark, not a future launch date. USD 230,000 is a proposed investment envelope, not an external quotation, market valuation, or guarantee of awards or returns.

## Firm recommendation

Build a premium editorial farm website under the creative direction **Rooted here. Growing tomorrow.** Combine authentic Gambian photography, the existing olive-and-sand identity, expressive typography, quiet motion, and fast mobile journeys into product and wholesale enquiries. The site should make NemaFarms memorable, help buyers understand its offer, and make its community mission credible through documented evidence.

Initial commercial assumption: enquiries and recurring wholesale relationships matter more than online checkout. Validate this in discovery. Prioritize local households, retailers, hotels/restaurants and distributors; give prospective partners a separate route. Do not add a customer portal, live inventory, payment checkout, AI assistant or investor dashboard to the first release without an established operational need.

## Source interpretation

Reviewed all 12 pages of the supplied visual-language PDF and the three supplied photographs. The PDF supplies brand references and business statements; its embedded examples and future plans are not execution instructions.

- Existing palette: olive #464B3A, sand #E8D6BD, sage #536251.
- Existing typography: Playlist Script, Bobby Jones Condensed Soft, Archivo Black.
- The document identifies establishment in 2019 and Ramatoulie M Ceesay as CEO. Confirm current public wording and spelling before publication.
- Vision and mission concern Gambian food supply, food security and training local producers.
- Halal, vegetarian-fed and locally farmed appear in the identity. Confirm current evidence and which products each statement covers; do not imply certification from a logo alone.
- Layer/broiler growth numbers and greenhouse/land expansion are aspirations in this document. Never present them as current capacity, completed projects or measured impact without updated evidence.
- Confirm current telephone numbers, location, product availability, purchasing units and delivery terms before publication.

## Research and design references

Research was conducted in September 2026. Reference publication dates are not uniformly available, so this is not a historical reconstruction of what existed by June. The following applications are design recommendations, not measured evidence of conversion performance. Research used accessible listings and descriptions; live animation and device behavior have not been audited.

| Reference | Useful evidence | Application to NemaFarms |
| --- | --- | --- |
| [Deluxbury Sea Farm, Awwwards](https://www.awwwards.com/inspiration/desktop-deluxbury-sea-farm) | The listing identifies hand-drawn illustration, farm gallery, mobile layout and motion elements. | Develop original small agricultural drawings and a distinctive documentary gallery; retain ordinary scrolling and simple mobile navigation. |
| [Organic Farm Landing, tubik / Dribbble](https://dribbble.com/shots/27517268-Full-Scroll-Design-Organic-Farm-Landing) | The indexed description highlights warm colors, bold grotesque type, rounded forms and coordinated entrances. Direct page retrieval failed during research. | Combine warm backgrounds with strong headlines and selective soft shapes. Validate the actual composition in the design phase rather than copying it. |
| [Farmcult, Quiet Mischief](https://quietmischief.studio/work/farmcult) | Its May 2026 case-study description emphasizes commercial clarity, editorial content, case studies and mobile structure. | Give buyers and partners distinct journeys, with evidence beside ambitious claims. |

Use these as pattern references. Commission original compositions, illustration, photography and copy; do not reuse other studios' assets.

## Art direction

Aim for a beautifully art-directed field journal with commercial clarity. Preserve the script wordmark as a brand asset, use Archivo Black selectively for major statements, and introduce one highly legible body/UI sans. Keep Bobby Jones for occasional short labels if web licensing and small-screen readability work. Obtain proper font files and licenses; avoid rasterized body text.

Use sand and a proposed light cream #F6F2E9 for most reading surfaces, olive for strong panels, and sage as a supporting accent. Add a proposed dark ink #20251E for body text. Test every actual foreground/background pairing for contrast, including disabled, hover and focus states.

Desktop: 12-column grid, generous 64–96px section breathing room, asymmetric image/text pairings and thin dividers. Mobile: a purposeful single-column layout, 20–24px side spacing, readable 17–18px body text, headlines around 40–56px, and product/contact actions visible early. Desktop headlines may reach 88–128px where copy length permits. These are initial design tokens, to be tested with real content.

Use subtle 150–250ms UI transitions and occasional 450–700ms section reveals. Limit entrances to one coordinated gesture per section; essential content must be visible if JavaScript fails. Respect reduced-motion preferences. Optional film is user-initiated, captioned where needed, and loaded on demand. Avoid blocking intros, forced horizontal scrolling and scroll interception.

## Photography and content production

- IMG_2347.jpeg: leading hero candidate. The open sky provides room for a short headline, while the central subject gives the composition identity. Produce separate desktop and mobile crops so the person remains visible; mobile text can sit above the photo.
- IMG_2315.jpeg: documentary story section about daily work and the people behind the farm. Caption only with confirmed names, activity and location.
- IMG_2280.jpeg: poultry and farming-practices material. The dense composition needs a deliberate crop and accompanying context; it is weaker as the first brand impression.

Keep supplied black-and-white images as documentary material. Commission color photography for appetizing product detail and place: eggs, packaged poultry if sold, actual produce, portraits, farm-wide views, handling and preparation, dispatch and customer handover. Confirm participant permission and truthful captions. Do not artificially colorize the existing photos and represent them as original color documentation.

Production allowance: roughly 30–40 final photographs with responsive crops, one 45–60-second farm film and several short excerpts, founder interview, copy for up to 15 editorial pages, three product-category pages and six initial journal stories. Weather, seasonal availability and local crew logistics are schedule dependencies. Hero still photography is the launch fallback if film is delayed.

## Information architecture and homepage

Top navigation: Our Farm / Our Products / Our Approach / Journal / Contact, with **Enquire about supply** as the principal action. Wholesale has a dedicated landing page reached from the header action and product pages. Community content sits within Our Approach and has its own detail page. Add FAQ and policy pages in the footer.

Homepage sequence:

1. **Arrival:** script wordmark, short navigation, wide farm photograph, proposed headline “Rooted in The Gambia. Growing for tomorrow.” Supporting text should state the verified offer. Actions: “Explore our products” and “Enquire about supply.”
2. **Offer:** eggs, poultry and produce, subject to current availability confirmation. Large photographs, plain buying units and category links.
3. **People and place:** an asymmetric documentary photograph paired with the founder/farm story.
4. **How we farm:** three or four verified practices, each backed by concrete explanation or evidence.
5. **Wholesale:** products, typical order information, service area and a short enquiry route for regular buyers.
6. **Community:** distinguish delivered work from future plans; show dated stories and verified results.
7. **Field notes:** three recent articles with dates and photographs.
8. **Contact:** phone, WhatsApp if confirmed, actual location, hours and a concise enquiry form.

Product pages contain product description, actual format/unit, availability with last-updated date, minimum order if applicable, delivery/collection information, FAQs and a product-specific enquiry action. An unavailable product should offer an enquiry without implying it can be ordered immediately.

## Conversion and operational behavior

Keep the enquiry form short: name, preferred contact, product, approximate quantity and destination; make business name and recurring frequency optional. Preserve entered values on validation failure. Validate server-side, limit abuse, save each accepted enquiry durably and assign a reference before displaying success. Route notifications to the agreed recipient with retry/error monitoring. Handle duplicate submissions. Confirm who owns responses and the response window before publishing a service promise.

Offer WhatsApp with a product-specific draft and a phone/email alternative. A WhatsApp click is an intent event, not proof of an enquiry or sale. Do not send contact details or free-text messages into analytics.

English-first launch; structure content so additional languages can be added. Choose translations only after research with actual customers and agreeing editorial ownership. Publish prices in GMD only if maintained reliably; otherwise use accurate enquiry wording. Online payments require a later decision based on merchant eligibility, settlement, refunds, stock and delivery operations.

## Engineering recommendation

Use Astro with TypeScript and a managed headless CMS. Pre-render editorial and product pages; add interactive islands only for components that require them. This aligns with [Astro's islands architecture](https://docs.astro.build/en/concepts/islands/). Select the CMS and host in week 2 through a short editorial-workflow demonstration and cost/access review. Keep content exportable and domain, repository and vendor accounts owned by NemaFarms.

CMS models: products/categories, availability, farm practices, people, stories, verified impact records with sources/dates, contact details and SEO fields. Require image alt text, focal points and preview before publication. Show content age where commercially relevant. An editor should update availability and publish a story without engineering help.

Use responsive AVIF/WebP images with fallbacks, explicit dimensions, local/subset fonts where licensed, static map previews linking to directions, and lazy-loaded noncritical media. Do not load video on the initial mobile view. Use a small server endpoint and durable store for enquiries, with access control and a defined retention policy. Include previews, automated deployment checks, backups, restore verification, rollback and monitoring.

SEO scope: descriptive page titles, canonical links, XML sitemap, robots configuration, social previews and structured data only for facts actually present. Confirm location before local-business markup. Link useful product and story content internally.

## Quality gates and success measures

- Target [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/): keyboard and screen-reader testing, visible focus, form errors, color contrast, zoom/reflow, reduced motion, and a design target of at least 44px controls.
- Target real-user p75 LCP ≤2.5s, INP ≤200ms and CLS ≤0.1, segmented by mobile/desktop, consistent with [Core Web Vitals](https://web.dev/articles/vitals). Lab testing before launch cannot certify field INP; monitor after release and address regressions.
- Proposed budget: ≤1MB initial mobile transfer excluding user-requested video, ≤120KB compressed initial JavaScript, and approximately ≤250KB mobile hero image. Validate feasibility with final visual assets.
- Test on a midrange Android phone and iPhone, current major browsers, narrow screens, keyboard, slow connections and failed submissions. Agree reproducible network/CPU profiles in discovery.
- Before launch, test actual notification delivery, durable enquiry capture, retries, spam protection, editor permissions, backup restoration, analytics events and rollback. No unresolved critical or high-severity defects.
- Usability gate: at least 4 of 5 representative participants complete product discovery and an enquiry unaided in the final prototype test. This is a directional usability check, not statistical proof.
- Track accepted enquiries, qualified wholesale leads, response time and lead-to-order outcome. Establish a baseline during the first 30 days; set improvement targets from real volume. Do not promise revenue uplift without baseline sales and attribution data.

## Delivery: 16 weeks from kickoff

| Period | Work | Exit evidence |
| --- | --- | --- |
| Weeks 1–2 | Business discovery, 6–8 stakeholder/customer conversations, asset and claims audit, operational mapping | Agreed audience priorities, page inventory, fact sheet, response ownership and technical choices |
| Weeks 3–4 | Sitemap, copy outline, mobile flows, two visual explorations narrowed to one | Reviewed mobile/desktop homepage direction and clickable buying journey |
| Weeks 5–7 | Complete design system, page templates, original production and copy | Content-complete key templates, approved crops, component states and motion storyboard |
| Weeks 8–12 | Frontend, CMS, product catalogue, enquiry processing, SEO and analytics | Working staging site and successful end-to-end enquiry demonstration |
| Weeks 13–14 | Device, usability, accessibility and performance testing; editorial training | Resolved launch blockers and editor task demonstration |
| Week 15 | Final content verification, domain preparation, rollback rehearsal and launch | Signed release checklist and successful live checks |
| Week 16 | Stabilization and handover | Monitoring reviewed, defects triaged, ownership and operating guide delivered |

Allow a further 30 days of post-launch defect support within the launch allowance. Named roles: strategy/project lead, creative director, UX/UI designer, frontend engineer, CMS/backend engineer, local photographer/filmmaker, copywriter and specialist QA/accessibility reviewer. Several roles can be part-time. One empowered NemaFarms decision-maker and one content owner should provide consolidated feedback within two business days; delays move the schedule rather than silently compressing QA.

## Proposed USD 230,000 allocation

| Workstream | USD |
| --- | ---: |
| Discovery, strategy and information architecture | 18,000 |
| Art direction and digital brand system | 24,000 |
| UX, responsive UI and prototypes | 32,000 |
| Photography, film and copy production | 28,000 |
| Frontend and motion implementation | 46,000 |
| CMS, catalogue and enquiry integrations | 26,000 |
| QA, accessibility, performance and SEO | 20,000 |
| Launch, documentation, training and support | 13,000 |
| Contingency, released against agreed scope | 23,000 |
| **Total** | **230,000** |

This envelope includes project coordination within each workstream, two consolidated design revision rounds per major gate, up to 10 product records at launch and one enquiry-routing integration. It excludes sales taxes, ongoing vendor subscriptions, paid media, ongoing editorial production, international travel, payments/ERP integration and subsequent feature expansion. Obtain vendor and local production quotes in discovery. Plan a separate, unquoted operating allowance of USD 500–1,500/month for services and USD 2,000–4,000/month for optional maintenance/content support; actual costs depend on vendors, traffic and service levels.

The budget is justified only if NemaFarms needs this level of original production, strategy, implementation and support. A simple brochure site would not justify spending the full amount. Reserve the contingency until a documented need arises.

## Decisions that discovery must close

Confirm the main revenue journey; current products, buying units, availability and service area; who answers enquiries; current practices and evidence; identity/logo/font rights; photograph permissions; CMS editors; and whether USD 230,000 is an actual spending ceiling or a perceived-quality target. These do not prevent planning, but they must be settled before content and integration scope are locked.

The next build deliverable should be a content-led desktop and mobile homepage prototype plus the complete product-to-enquiry flow. Evaluate it with real buyers before building the rest of the site.
