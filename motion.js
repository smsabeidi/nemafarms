/* NemaFarms motion: native scrolling, scoped GSAP, progressive visibility. */
(() => {
  'use strict';
  let scope, media, abort, root, progress;
  const nativeAnimations = new Set();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  function cancelNative() {
    nativeAnimations.forEach(animation => animation.cancel());
    nativeAnimations.clear();
  }
  function destroy() {
    abort?.abort();
    abort = null;
    media?.revert();
    media = null;
    scope?.revert();
    scope = null;
    cancelNative();
    root = null;
    if (progress) progress.hidden = true;
  }
  function animateNative(element, frames, options) {
    if (!element?.animate || reduce.matches) return;
    const animation = element.animate(frames, options);
    nativeAnimations.add(animation);
    animation.finished.then(() => nativeAnimations.delete(animation), () => nativeAnimations.delete(animation));
  }
  function mount(main) {
    destroy();
    if (!main) return;
    root = main;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap?.context || !gsap?.matchMedia || !ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    abort = new AbortController();
    if (!progress) {
      progress = document.createElement('div');
      progress.className = 'nema-scroll-progress';
      progress.setAttribute('aria-hidden', 'true');
      document.body.append(progress);
    }
    scope = gsap.context(() => {}, main);
    media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 1000px)' }, context => {
      if (!context.conditions.motion) { progress.hidden = true; return; }
      progress.hidden = false;
      const choose = selector => Array.from(main.querySelectorAll(selector));
      const heading = main.querySelector('h1');
      const hero = heading?.closest('.ws-cover-copy,.at-hero-copy,.at-catalog,.v2-hero-content,.pg-intro,.ed-article-head,.ed-journal-head,.ed-gallery-head,.ed-community-hero,.ed-partner-hero,.v2-catalog-head,.cm-purchase,.cm-intro') || heading?.parentElement;
      const intro = hero ? Array.from(hero.querySelectorAll('.at-kicker,.at-hero-note,.at-button,.at-quiet-link,.eyebrow,.pg-eyebrow,.ed-kicker,.cm-kicker,h1,.v2-hero-deck,.ed-lead,.v2-button,.cm-button,.ed-button,.hero-note')).filter(element => !element.parentElement.closest('h1')) : [];
      if (intro.length) gsap.fromTo(intro, { y: 18, opacity: 0 }, {
        y: 0, opacity: 1, duration: .8, stagger: .095, ease: 'power3.out', clearProps: 'transform,opacity', overwrite: 'auto'
      });
      const groups = choose('.v2-product-grid,.product-grid,.ed-three,.ed-story-cards,.cm-process,.pg-principles');
      const grouped = new Set();
      groups.forEach(group => {
        const children = Array.from(group.children);
        children.forEach(child => grouped.add(child));
        gsap.fromTo(children, { y: 18, opacity: 0 }, {
          y: 0, opacity: 1, duration: .75, stagger: .11, ease: 'power3.out', immediateRender: false,
          clearProps: 'transform,opacity', scrollTrigger: { trigger: group, start: 'top 91%', once: true }
        });
      });
      choose('.ws-opening,.ws-sectors article,.ws-brief-layout,.ws-process,.ws-questions,.at-purpose,.at-section-heading,.at-product-panel,.at-origin-copy,.at-lens-grid figure,.at-trade,.at-story,.v2-section-head,.v2-manifesto-grid,.v2-roots-copy,.v2-business-inner,.v2-journal-feature,.v2-journal-links,.v2-close>div,.pg-editorial,.pg-split-copy,.ed-section-top,.ed-manifesto,.ed-pullquote,.ed-article-copy,.ed-partner-rows article,.ed-gallery figure,.cm-next,.cm-detail,.pg-principle').forEach(element => {
        if (grouped.has(element) || hero?.contains(element)) return;
        gsap.fromTo(element, { y: 16, opacity: 0 }, {
          y: 0, opacity: 1, duration: .8, ease: 'power3.out', immediateRender: false,
          clearProps: 'transform,opacity', scrollTrigger: { trigger: element, start: 'top 91%', once: true }
        });
      });
      if (context.conditions.desktop) {
        choose('.at-landscape,.at-origin-photo>img,.v2-hero-photo,.v2-roots-photo>img,.v2-close>img,.hero-image').forEach(image => {
          gsap.fromTo(image, { y: -12, scale: 1.055 }, {
            y: 12, scale: 1.055, ease: 'none', scrollTrigger: {
              trigger: image.parentElement, start: 'top bottom', end: 'bottom top', scrub: .6, invalidateOnRefresh: true
            }
          });
        });
      }
      gsap.fromTo(progress, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: {
        trigger: document.documentElement, start: 0, end: () => Math.max(1, document.documentElement.scrollHeight - window.innerHeight), scrub: .15
      }});
      requestAnimationFrame(() => { if (root === main) ScrollTrigger.refresh(); });
      return () => { progress.hidden = true; };
    }, main);
    main.querySelectorAll('img').forEach(image => {
      if (!image.complete) image.addEventListener('load', () => {
        if (root === main) ScrollTrigger.refresh();
      }, { once: true, signal: abort.signal });
    });
    document.fonts?.ready.then(() => { if (root === main) ScrollTrigger.refresh(); });
  }
  function menu(open, nav) {
    cancelNative();
    if (!open || !nav || window.innerWidth > 900) return;
    animateNative(nav, [{ opacity: 0, transform: 'translateY(-8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 260, easing: 'cubic-bezier(.2,.8,.2,1)' });
    nav.querySelectorAll('a').forEach((link, index) => animateNative(link,
      [{ opacity: 0, transform: 'translateY(9px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 320, delay: Math.min(index * 35, 175), fill: 'backwards', easing: 'cubic-bezier(.16,1,.3,1)' }
    ));
  }
  function gallery(dialog) {
    animateNative(dialog, [{ opacity: 0, transform: 'translateY(12px) scale(.985)' }, { opacity: 1, transform: 'translateY(0) scale(1)' }], { duration: 300, easing: 'cubic-bezier(.16,1,.3,1)' });
  }
  reduce.addEventListener?.('change', cancelNative);
  window.NemaMotion = { mount, destroy, menu, gallery };
})();
