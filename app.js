/* NemaFarms — a local, accessible design preview. */
(() => {
  'use strict';
  function start() {
    const main = document.querySelector('#page-content');
    const home = document.querySelector('#home-template');
    if (!main || !home) return;
    const menu = document.querySelector('#menu-toggle');
    const nav = document.querySelector('#site-nav');
    const header = document.querySelector('#site-header');
    const titles = { missing:'Page Not Found — NemaFarms', home: 'NemaFarms — From our land to your table.', farm: 'Our Farm — NemaFarms', products: 'Our Products — NemaFarms', approach: 'Our Approach — NemaFarms', contact: 'Let’s Talk — NemaFarms', chicken:'Whole Chicken — NemaFarms',eggs:'Eggs — NemaFarms',produce:'Farm Produce — NemaFarms',wholesale:'Wholesale — NemaFarms',buying:'Buying Guide — NemaFarms',community:'Community — NemaFarms',journal:'Field Notes — NemaFarms',story:'Photo Essay — NemaFarms',gallery:'Photo Collection — NemaFarms',partners:'Partnerships — NemaFarms' };
    let currentRoute = null;
    let selectedProduct = '';
    let selectedQuantity = '';
    let observer;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const closeMenu = () => {
      menu?.setAttribute('aria-expanded', 'false');
      nav?.classList.remove('is-open');
      header?.classList.remove('menu-open');
      document.body.classList.remove('menu-open');
      main.inert=false;
      const footer=document.querySelector('.site-footer');if(footer)footer.inert=false;
    };
    menu?.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      nav?.classList.toggle('is-open', open);
      header?.classList.toggle('menu-open', open);
      document.body.classList.toggle('menu-open', open);
      window.NemaMotion?.menu(open, nav);
      main.inert=open;
      const footer=document.querySelector('.site-footer');if(footer)footer.inert=open;
      if(open)nav?.querySelector('a')?.focus();
    });
    window.matchMedia('(max-width:900px)').addEventListener('change',closeMenu);
    document.addEventListener('keydown', event => {
      if(event.key==='Tab' && menu?.getAttribute('aria-expanded')==='true'){
        const items=[menu,...nav.querySelectorAll('a')],first=items[0],last=items[items.length-1];
        if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
        else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
      }
      if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menu.focus();
      }
    });
    function reveal() {
      observer?.disconnect();
      const elements = main.querySelectorAll('.reveal');
      if (reducedMotion.matches || !('IntersectionObserver' in window)) {
        elements.forEach(element => element.classList.add('is-visible'));
        return;
      }
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      elements.forEach(element => observer.observe(element));
    }
    function selectProduct() {
      const quantity = main.querySelector('[name="quantity"]');
      if (quantity && selectedQuantity) quantity.value = selectedQuantity;
      const product = main.querySelector('[data-enquiry-form] [name="product"], [data-enquiry-form] [name="interest"]');
      if (!product || !selectedProduct) return;
      if (product.tagName === 'SELECT') {
        const match = Array.from(product.options).find(option => option.value.toLowerCase() === selectedProduct.toLowerCase() || option.textContent.toLowerCase().includes(selectedProduct.toLowerCase()));
        if (match) product.value = match.value;
      } else product.value = selectedProduct;
    }
    function hydrate() {
      const form = main.querySelector('[data-enquiry-form]');
      if (form) {
        selectProduct();
        if (window.NemaEnquiry) window.NemaEnquiry.mount(form);
        else form.addEventListener('submit', event => {
          event.preventDefault();
          if (!form.reportValidity()) return;
          let status = form.querySelector('[role="status"]');
          if (!status) {
            status = document.createElement('p');
            status.setAttribute('role', 'status');
            status.className = 'form-status';
            form.append(status);
          }
          const values = new FormData(form);
          const summary = [['Name', 'name'], ['Contact', 'contact'], ['Product', 'product'], ['Quantity','quantity'],['Business','business'],['Message', 'message']]
            .map(([label, key]) => `${label}: ${String(values.get(key) || 'Not specified').trim()}`).join('\n');
          status.textContent = `Preview complete — this enquiry has not been sent.\n\n${summary}`;
          status.hidden = false;
        });
      }
      reveal();
    }
    function render(initial = false) {
      const hash = window.location.hash;
      if (hash && !hash.startsWith('#/')) return;
      const [path, query = ''] = hash.replace(/^#\/?/, '').split('?');
      let [raw, section] = path.replace(/\/$/, '').split('/');
      const aliases = { approach: 'farm', partners: 'community', buying: 'wholesale', gallery: 'journal' };
      if (aliases[raw]) {
        window.location.hash = `#/${aliases[raw]}`;
        return;
      }
      if(raw==='products' && ['poultry','eggs','produce'].includes(section)){raw=section==='poultry'?'chicken':section;section=undefined;}
      const route = !raw ? 'home' : Object.prototype.hasOwnProperty.call(titles, raw) ? raw : 'missing';
      const params = new URLSearchParams(query);
      const requestedProduct = params.get('product');
      if (requestedProduct) selectedProduct = requestedProduct;
      if(params.has('quantity')) selectedQuantity=params.get('quantity');
      const entry = params.get('entry') || 'everyday';
      const renderKey = route==='story' ? route+':'+entry : route;
      function goToSection() {
        if (!section) return;
        const target = document.getElementById(section);
        if (target) {
          target.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
          if (!initial) {
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
          }
        }
      }
      if (renderKey === currentRoute) {
        closeMenu();
        selectProduct();
        goToSection();
        return;
      }
      currentRoute = renderKey;
      const pages = window.NemaPages || {};
      pages.missing = '<section class="at-missing at-shell"><p class="at-kicker">404 / A DIFFERENT PATH</p><h1>A little off<br><em>the beaten track.</em></h1><p>This page could not be found. Let’s get you back to the farm.</p><div><a class="at-button at-button-dark" href="#/">Back to NemaFarms <span>↗</span></a><a class="at-quiet-link" href="#/products">Explore the products →</a></div><img src="assets/farm-wide-1200.webp" width="1200" height="900" alt="A path through NemaFarms"></section>';
      window.NemaMotion?.destroy();
      main.innerHTML = route === 'home' ? home.innerHTML : (route==='story' && window.NemaStoryEntries?.[entry] ? window.NemaStoryEntries[entry] : pages[route] || home.innerHTML);
      document.title = titles[route];
      document.body.dataset.page = route;
      document.querySelectorAll('[data-route]').forEach(link => {
        const key = link.dataset.route.replace(/^#?\//, '') || 'home';
        const active = key === route || (key==='products' && ['chicken','eggs','produce','buying'].includes(route)) || (key==='journal' && ['story','gallery'].includes(route)) || (key==='community' && route==='partners');
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
      closeMenu();
      hydrate();
      if (!initial) {
        window.scrollTo({ top: 0, behavior: 'instant' });
        main.setAttribute('tabindex', '-1');
        main.focus({ preventScroll: true });
      }
      window.NemaContact?.mount(main);
      window.NemaMotion?.mount(main);
      if (section) requestAnimationFrame(goToSection);
    }
    let gallery;
    let galleryTrigger;
    let galleryItems = [];
    let galleryIndex = 0;
    function updateGallery(index) {
      galleryIndex=(index+galleryItems.length)%galleryItems.length;
      const trigger=galleryItems[galleryIndex];
      galleryTrigger=trigger;
      const img=gallery.querySelector('img');
      img.src=trigger.dataset.gallerySrc;
      img.alt=trigger.dataset.galleryCaption || trigger.querySelector('img')?.alt || 'Farm photograph';
      gallery.querySelector('figcaption').textContent=img.alt;
      gallery.querySelector('.gallery-position').textContent=`${String(galleryIndex+1).padStart(2,'0')} / ${String(galleryItems.length).padStart(2,'0')}`;
      gallery.querySelector('.gallery-controls').hidden=galleryItems.length<2;
    }
    function openGallery(trigger) {
      if (!gallery) {
        gallery = document.createElement('dialog');
        gallery.className = 'gallery-dialog';
        gallery.setAttribute('aria-label', 'Farm photograph');
        gallery.innerHTML = '<button class="gallery-close" type="button" aria-label="Close photograph">Close <span aria-hidden="true">×</span></button><figure><img alt=""><figcaption></figcaption></figure><div class="gallery-controls"><button type="button" class="gallery-previous" aria-label="Previous photograph">←</button><span class="gallery-position" role="status"></span><button type="button" class="gallery-next" aria-label="Next photograph">→</button></div>';
        document.body.append(gallery);
        gallery.querySelector('.gallery-previous').addEventListener('click',()=>updateGallery(galleryIndex-1));
        gallery.querySelector('.gallery-next').addEventListener('click',()=>updateGallery(galleryIndex+1));
        gallery.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();updateGallery(galleryIndex+(event.key==='ArrowRight'?1:-1));}});
        gallery.querySelector('button').addEventListener('click', () => gallery.close());
        gallery.addEventListener('click', event => { if (event.target === gallery) gallery.close(); });
        gallery.addEventListener('close', () => galleryTrigger?.focus());
      }
      galleryItems=[...main.querySelectorAll('[data-gallery-src]')];
      updateGallery(galleryItems.indexOf(trigger));
      gallery.showModal();
      window.NemaMotion?.gallery(gallery);
    }
    document.addEventListener('click', event => {
      const target = event.target instanceof Element ? event.target : null;
      const step = target?.closest('[data-quantity-step]');
      if(step){const input=main.querySelector('#order-quantity'); if(input){input.value=String(Math.max(1,Math.min(999,(Number(input.value)||1)+Number(step.dataset.quantityStep))));input.dispatchEvent(new Event('change',{bubbles:true}));}}
      const order=target?.closest('[data-order-enquiry]');
      if(order){const quantity=main.querySelector('#order-quantity');if(quantity && !quantity.reportValidity()){event.preventDefault();return;}selectedQuantity=quantity?.value||'1';selectedProduct=order.dataset.orderEnquiry;order.href='#/contact?product='+encodeURIComponent(selectedProduct)+'&quantity='+encodeURIComponent(selectedQuantity);}
      const product = target?.closest('[data-product]');
      if (product) selectedProduct = product.dataset.product;
      const galleryButton = target?.closest('[data-gallery-src]');
      if (galleryButton && typeof HTMLDialogElement !== 'undefined') {
        event.preventDefault();
        openGallery(galleryButton);
      }
      const routeLink = target?.closest('a[href^="#/"]');
      if (routeLink && routeLink.hash === window.location.hash) {
        closeMenu();
        if(routeLink.hash==='#/' || routeLink.closest('.site-footer')) {
          window.scrollTo({top:0,behavior:reducedMotion.matches?'instant':'smooth'});
          main.focus({preventScroll:true});
        }
      }
    });
    window.addEventListener('hashchange', () => render());
    window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 24), { passive: true });
    header?.classList.toggle('is-scrolled', window.scrollY > 24);
    reducedMotion.addEventListener?.('change', reveal);
    render(true);
    // A plain in-page hash on a fresh load still needs the home template.
    if (currentRoute === null) {
      main.innerHTML = home.innerHTML;
      currentRoute = 'home';
      hydrate();
      requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView());
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
