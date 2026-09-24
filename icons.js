/* Use vector arrows instead of platform-dependent Unicode/emoji glyphs. */
(() => {
  const paths = {'↗':'M6 18 18 6M6 6h12v12','→':'M4 12h16m-7-7 7 7-7 7','←':'M20 12H4m7-7-7 7 7 7','↓':'M12 4v16m-7-7 7 7 7-7','↑':'M12 20V4m-7 7 7-7 7 7'};
  const pattern = /[↗→←↓↑]\uFE0F?/g;
  function convert(root){
    if(root.nodeType!==Node.ELEMENT_NODE && root.nodeType!==Node.TEXT_NODE)return;
    const nodes=[];
    if(root.nodeType===Node.TEXT_NODE)nodes.push(root);
    else {const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);while(walker.nextNode())nodes.push(walker.currentNode);}
    for(const node of nodes){
      if(!node.parentElement || node.parentElement.closest('script,style,textarea,input,svg,[contenteditable],.ne-review dl,[role="status"]'))continue;
      const text=node.textContent;
      pattern.lastIndex=0;if(!pattern.test(text))continue;pattern.lastIndex=0;
      const fragment=document.createDocumentFragment();let cursor=0;
      for(const match of text.matchAll(pattern)){
        fragment.append(document.createTextNode(text.slice(cursor,match.index)));
        const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
        svg.setAttribute('class','nf-arrow-icon');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('width','1em');svg.setAttribute('height','1em');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
        const path=document.createElementNS(svg.namespaceURI,'path');path.setAttribute('d',paths[match[0][0]]);svg.append(path);fragment.append(svg);cursor=match.index+match[0].length;
      }
      fragment.append(document.createTextNode(text.slice(cursor)));node.replaceWith(fragment);
    }
  }
  function start(){convert(document.body);new MutationObserver(records=>{for(const record of records){if(record.type==='characterData')convert(record.target);else record.addedNodes.forEach(convert);}}).observe(document.body,{subtree:true,childList:true,characterData:true});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
