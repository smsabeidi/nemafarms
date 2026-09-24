(() => {
  const phones = [{ display: '+220 917 6319', href: '+2209176319', label: 'Farm contact 1' }, { display: '+220 912 2395', href: '+2209122395', label: 'Farm contact 2' }];
  const whatsappContact = {display:'+220 912 2427',href:'+2209122427',label:'WhatsApp the farm'};
  const chatIcon='<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.4-4.7a8.5 8.5 0 1 1 16.1-4.1Z"/><path d="m8.3 7.5 1.3 2.6-1 1a8 8 0 0 0 4.3 4.1l1-1 2.6 1.3c-.4 1.5-1.6 2-3.2 1.4-3.4-1.2-6-3.8-6.6-6.8-.3-1.3.5-2.3 1.6-2.6Z"/></svg>';
  const callIcon='<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3c-1 4-4 5-8 3C7 17 3 12 3 7c0-2 2-4 4-4Z"/></svg>';
  function message(){const product={chicken:'whole chicken',eggs:'egg crates',produce:'farm produce',wholesale:'wholesale supply'}[document.body.dataset.page];return product?`Hello NemaFarms! I would like to enquire about ${product}. Could you help with current availability and pricing?`:'Hello NemaFarms! I would like to find out more about your farm products.';}
  function whatsapp(){return `https://wa.me/${whatsappContact.href.replace('+','')}?text=${encodeURIComponent(message())}`;}
  const links=phones.map(p=>`<a class="nc-number" href="tel:${p.href}"><span>${p.label}</span><strong>${p.display}</strong><span class="nc-arrow" aria-hidden="true">↗</span></a>`).join('');
  const chatLinks=()=>[whatsappContact].map(p=>`<a class="nc-chat-number" href="${whatsapp()}" target="_blank" rel="noopener noreferrer"><span>${chatIcon}</span><span><small>${p.label}</small><strong>${p.display}</strong></span><span aria-hidden="true">↗</span></a>`).join('');
  let initialized=false,closeControl=()=>{};
  function initialize(){
    const footer=document.querySelector('.footer-place');
    if(footer&&!footer.dataset.ncEnhanced){footer.dataset.ncEnhanced='true';footer.innerHTML=`<address class="nc-address">Lamin Mandinary<br>Lamin, WCR<br>The Gambia</address><div class="nc-footer-phones">${phones.map(p=>`<a href="tel:${p.href}">${p.display}</a>`).join('')}</div><a class="nc-footer-chat" href="${whatsapp()}" target="_blank" rel="noopener noreferrer">${chatIcon} WhatsApp the farm ↗</a>`;}
    if(initialized)return;initialized=true;
    const control=document.createElement('div');control.className='nc-float';
    control.innerHTML=`<div class="nc-launcher"><button class="nc-whatsapp-toggle" type="button" aria-expanded="false" aria-controls="nc-call-options">${chatIcon}<span>WhatsApp</span></button><button class="nc-toggle" type="button" aria-expanded="false" aria-controls="nc-call-options">${callIcon}<span>Call the farm</span></button></div><section class="nc-popover" id="nc-call-options" aria-label="Contact NemaFarms" hidden></section>`;
    document.body.append(control);
    const toggles=[...control.querySelectorAll('button')],panel=control.querySelector('.nc-popover');let mode='',opener;
    function close(focus=false){panel.hidden=true;mode='';toggles.forEach(t=>t.setAttribute('aria-expanded','false'));if(focus)opener?.focus();}
    closeControl=close;
    function open(next,button){if(mode===next){close();return;}mode=next;opener=button;toggles.forEach(t=>t.setAttribute('aria-expanded',String(t===button)));panel.innerHTML=`<div class="nc-chat-head"><img src="assets/logo.png" width="45" height="45" alt=""><div><p>NemaFarms</p><span>Good conversations start here.</span></div><button class="nc-dismiss" aria-label="Close contact options" type="button">×</button></div><div class="nc-chat-body"><p class="nc-chat-title">${next==='chat'?'A message away.':'Let’s talk.'}</p><p class="nc-chat-description">${next==='chat'?'Message the farm directly on WhatsApp.':'Choose a number to call the farm.'}</p>${next==='chat'?chatLinks():links}<p class="nc-chat-note">${next==='chat'?'A starter message is ready. Edit it in WhatsApp before you send.':'The Gambia · Country code +220'}</p></div>`;panel.hidden=false;panel.querySelector('.nc-dismiss').addEventListener('click',()=>close(true));if(!matchMedia('(prefers-reduced-motion: reduce)').matches)panel.animate([{opacity:0,transform:'translateY(10px) scale(.98)'},{opacity:1,transform:'none'}],{duration:220,easing:'ease-out'});}
    toggles[0].addEventListener('click',()=>open('chat',toggles[0]));toggles[1].addEventListener('click',()=>open('call',toggles[1]));
    document.addEventListener('click',e=>{if(!control.contains(e.target))close();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){e.preventDefault();close(true);}});
    document.addEventListener('focusin',e=>{if(!control.contains(e.target))close();});
    window.addEventListener('hashchange',()=>close());
    if('IntersectionObserver'in window){const footerElement=document.querySelector('.site-footer');if(footerElement)new IntersectionObserver(entries=>{const visible=entries[0].isIntersecting;control.classList.toggle('nc-at-footer',visible);if(visible)close();},{threshold:.05}).observe(footerElement);}
  }
  function mount(main=document){initialize();closeControl();const aside=main.querySelector('.pg-contact aside');if(aside&&!aside.querySelector('.nc-contact-methods')){const block=document.createElement('section');block.className='nc-contact-methods';block.setAttribute('aria-label','Contact NemaFarms');block.innerHTML=`<p class="nc-eyebrow">A direct conversation</p>${links}<div class="nc-inline-chat"><p>Prefer a message?</p>${chatLinks()}</div><address class="nc-address nc-contact-address"><span class="nc-eyebrow">Find us</span>Lamin Mandinary<br>Lamin, WCR<br>The Gambia</address>`;const intro=aside.querySelector('h2');if(intro)intro.insertAdjacentElement('afterend',block);else aside.prepend(block);const note=aside.querySelector('.pg-contact-note p');if(note)note.textContent='This form is a design preview. For enquiries, call or message the farm on WhatsApp.';}
    main.querySelectorAll('.cm-purchase').forEach(panel=>{if(panel.querySelector('.nc-product-call'))return;const line=document.createElement('div');line.className='nc-product-call';line.innerHTML=`<a class="nc-product-whatsapp" href="${whatsapp()}" target="_blank" rel="noopener noreferrer">${chatIcon} Ask about this on WhatsApp ↗</a><a href="tel:+2209176319">Or call +220 917 6319 ↗</a>`;const button=panel.querySelector('.cm-button');if(button)button.insertAdjacentElement('afterend',line);else panel.append(line);});
    document.querySelector('.nc-float')?.classList.toggle('nc-on-contact',Boolean(aside));
  }
  window.NemaContact={mount};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialize,{once:true});else initialize();
})();
