import{S as m,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",y=async s=>{const o=new URLSearchParams({key:"48273620-0132f44a126025621a132d295",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=await fetch(`${p}?${o.toString()}`);if(!t.ok)throw new Error(`Error: ${t.status}`);return t.json()},h=(s,o)=>{const t=s.map(({webformatURL:a,largeImageURL:e,tags:r,likes:n,views:u,comments:d,downloads:f})=>`
      <li class="gallery-card">
        <a href="${e}">
          <img src="${a}" alt="${r}" loading="lazy" />
        </a>
          <p>Likes: ${n}</p>
          <p>Views: ${u}</p>
          <p>Comments: ${d}</p>
          <p>Downloads: ${f}</p>
      </li>`).join("");o.innerHTML=t},g=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),l=document.querySelector(".loader"),L=new m(".js-gallery a"),w=()=>l.style.display="block",S=()=>l.style.display="none",E=async s=>{s.preventDefault(),c.innerHTML="";const o=s.currentTarget.elements.user_query.value.trim();if(!o){i.error({title:"Error",message:"Please enter a search query!"});return}w();try{const t=await y(o);if(t.hits.length===0){i.warning({title:"Attention",message:"No images found!"});return}h(t.hits,c),L.refresh()}catch(t){console.error(t),i.error({title:"Error",message:"Failed to fetch images!"})}finally{S()}};g.addEventListener("submit",E);
//# sourceMappingURL=index.js.map
