import{S as m,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="48273620-0132f44a126025621a132d295",h="https://pixabay.com/api/",y=async s=>{const t=await fetch(`${h}?key=${p}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error(`Error: ${t.status}`);return t.json()},g=(s,t)=>{const o=s.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:u,comments:d,downloads:f})=>`
      <li class="gallery-card">
        <a href="${e}">
          <img src="${i}" alt="${r}" loading="lazy" />
        </a>
          <p>Likes: ${n}</p>
          <p>Views: ${u}</p>
          <p>Comments: ${d}</p>
          <p>Downloads: ${f}</p>
      </li>`).join("");t.innerHTML=o},L=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),l=document.querySelector(".loader"),$=new m(".js-gallery a"),w=()=>l.hidden=!1,E=()=>l.hidden=!0,S=async s=>{s.preventDefault(),c.innerHTML="";const t=s.currentTarget.elements.user_query.value.trim();if(!t){a.error({title:"Ошибка",message:"Please enter a search query!"});return}w();try{const o=await y(t);if(o.hits.length===0){a.warning({title:"Внимание",message:"No images found!"});return}g(o.hits,c),$.refresh()}catch(o){console.error(o),a.error({title:"Ошибка",message:"Failed to fetch images!"})}finally{E()}};L.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
