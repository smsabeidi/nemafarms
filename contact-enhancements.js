(() => {
  const phones = [{ display: '+220 917 6319', href: '+2209176319', label: 'Farm contact 1' }, { display: '+220 912 2395', href: '+2209122395', label: 'Farm contact 2' }];
  const links = phones.map(phone => `<a class="nc-number" href="tel:${phone.href}"><span>${phone.label}</span><strong>${phone.display}</strong><span class="nc-arrow" aria-hidden="true">↗</span></a>`).join('');
  let initialized = false;
  function initialize() {
    const footer = document.querySelector('.footer-place');
    if (footer && !footer.dataset.ncEnhanced) { footer.dataset.ncEnhanced = 'true'; footer.innerHTML = `<span>The Gambia</span><div class="nc-footer-phones">${phones.map(phone => `<a href="tel:${phone.href}">${phone.display}</a>`).join('')}</div>`; }
    if (initialized || document.querySelector('.nc-float')) return;
    initialized = true;
    const control = document.createElement('div');
    control.className = 'nc-float';
    control.innerHTML = `<div class="nc-popover" id="nc-call-options" hidden><p>Speak with NemaFarms</p>${links}<span class="nc-local">The Gambia · Country code +220</span></div><button class="nc-toggle" type="button" aria-expanded="false" aria-controls="nc-call-options"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3c-1 4-4 5-8 3C7 17 3 12 3 7c0-2 2-4 4-4Z"/></svg><span>Call the farm</span><span class="nc-toggle-sign" aria-hidden="true">+</span></button>`;
    document.body.append(control);
    const toggle = control.querySelector('.nc-toggle');
    const panel = control.querySelector('.nc-popover');
    function close(focus = false) { panel.hidden = true; toggle.setAttribute('aria-expanded', 'false'); if (focus) toggle.focus(); }
    toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); panel.hidden = !open; });
    document.addEventListener('click', event => { if (!control.contains(event.target)) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !panel.hidden) { event.preventDefault(); close(true); } });
    document.addEventListener('focusin', event => { if (!control.contains(event.target)) close(); });
    window.addEventListener('hashchange', () => close());
    // Keep the utility out of the way of forms and footer links while they are in view.
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.target.matches('footer,.site-footer')) control.classList.toggle('nc-at-footer', entry.isIntersecting); }); }, { threshold: 0.05 });
      const footerElement = document.querySelector('footer,.site-footer');
      if (footerElement) observer.observe(footerElement);
    }
  }
  function mount(main = document) {
    initialize();
    const aside = main.querySelector('.pg-contact aside');
    if (aside && !aside.querySelector('.nc-contact-methods')) {
      const block = document.createElement('section');
      block.className = 'nc-contact-methods';
      block.setAttribute('aria-label', 'Call NemaFarms');
      block.innerHTML = `<p class="nc-eyebrow">A direct conversation</p>${links}`;
      const intro = aside.querySelector('h2');
      if (intro) intro.insertAdjacentElement('afterend', block); else aside.prepend(block);
      const note = aside.querySelector('.pg-contact-note p');
      if (note) note.textContent = 'This form is a design preview. For enquiries, call the farm.';
    }
    main.querySelectorAll('.cm-purchase').forEach(panel => {
      if (panel.querySelector('.nc-product-call')) return;
      const line = document.createElement('p');
      line.className = 'nc-product-call';
      line.innerHTML = `Prefer a conversation? <a href="tel:+2209176319">Call the farm <span>+220 917 6319</span> ↗</a>`;
      const button = panel.querySelector('.cm-button');
      if (button) button.insertAdjacentElement('afterend', line); else panel.append(line);
    });
    const utility = document.querySelector('.nc-float');
    if (utility) utility.classList.toggle('nc-on-contact', Boolean(aside));
  }
  window.NemaContact = { mount };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true }); else initialize();
})();
