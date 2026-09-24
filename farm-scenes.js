/* Illustrative imagery is kept distinct from the farm's documentary collection. */
(() => {
  const scenes = [
    ['poultry-daylight', 'The morning rhythm', 'Chickens gathering around a feeding tray', '#/chicken', 'Explore poultry'],
    ['field-workers', 'Hands in the earth', 'Two adults tending a leafy growing field', '#/produce', 'Explore produce'],
    ['egg-harvest', 'Small everyday rituals', 'Hands arranging eggs in a pulp tray', '#/eggs', 'Explore egg crates']
  ];
  const figure = (scene, index) => `<figure class="nf-scene"><button type="button" data-gallery-src="assets/${scene[0]}.webp" data-gallery-caption="${scene[2]} — AI-created illustrative farm scene" aria-label="Enlarge ${scene[1].toLowerCase()}"><img src="assets/${scene[0]}.webp" srcset="assets/${scene[0]}-800.webp 800w, assets/${scene[0]}.webp 1536w" sizes="(max-width:700px) 100vw, 50vw" width="1536" height="1024" loading="lazy" alt="Illustrative scene: ${scene[2].toLowerCase()}"><span class="nf-enlarge" aria-hidden="true">↗</span></button><figcaption><span>0${index + 1} / ${scene[1]}</span><span>Illustrative scene</span></figcaption></figure>`;
  const collection = `<section class="nf-scenes v2-shell"><div class="v2-section-head"><div><p class="eyebrow">THE RHYTHM OF GROWING</p><h2>Life moves.<br><em>Good things grow.</em></h2></div><p class="nf-intro">A visual celebration of the hands, daily rituals and simple possibilities of farm life.</p></div><div class="nf-scene-grid">${scenes.map(figure).join('')}</div><p class="nf-disclosure">AI-created farm illustrations. <a href="#/gallery">See original NemaFarms photographs ↗</a></p></section>`;
  const home = document.querySelector('#home-template');
  home.innerHTML = home.innerHTML.replace('<section class="v2-business">', collection + '<section class="v2-business">');
  window.NemaPages.gallery += collection;
  [['chicken', 0], ['produce', 1], ['eggs', 2]].forEach(([route, index]) => {
    const scene = scenes[index];
    const section = `<section class="nf-product-scene v2-shell"><div><p class="eyebrow">A FARMING PERSPECTIVE</p><h2>${scene[1].split(' ').slice(0, -1).join(' ')}<br><em>${scene[1].split(' ').slice(-1)}</em></h2><p>Good food begins with a conversation about where it comes from.</p><a class="text-link" href="#/contact">Talk to the farm ↗</a><p class="nf-disclosure">AI-created illustrative farm scene.</p></div>${figure(scene,index)}</section>`;
    window.NemaPages[route] += section;
  });
})();
