!function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";a.r(e);a(1),a(2)},function(t,e,a){},function(t,e){const a=document.getElementById("tbody");if(!(a instanceof HTMLElement))throw new Error("container is not HTMLElement");function n(t){t.forEach(t=>{a.appendChild(t)})}[{id:26,title:"Побег из Шоушенка",imdb:9.3,year:1994},{id:25,title:"Крёстный отец",imdb:9.2,year:1972},{id:27,title:"Крёстный отец 2",imdb:9,year:1974},{id:1047,title:"Тёмный рыцарь",imdb:9,year:2008},{id:223,title:"Криминальное чтиво",imdb:8.9,year:1994}].forEach(t=>{const e=document.createElement("tr");e.dataset.id=t.id,e.dataset.title=t.title,e.dataset.year=t.year,e.dataset.imdb=t.imdb;const n=document.createElement("td");n.textContent=t.id;const r=document.createElement("td");r.textContent=t.title;const d=document.createElement("td");d.textContent=`(${t.year})`;const i=document.createElement("td");i.textContent=t.imdb.toFixed(2),e.appendChild(n),e.appendChild(r),e.appendChild(d),e.appendChild(i),a.appendChild(e)});let r=0;setInterval(()=>{const t=document.getElementById("id"),e=document.getElementById("title"),a=document.getElementById("year"),d=document.getElementById("imdb"),i=[...document.getElementsByTagName("tr")];i.shift(),0===r&&(i.sort((t,e)=>t.dataset.id-e.dataset.id),n(i),d.classList="",t.classList="darr"),1===r&&(i.sort((t,e)=>e.dataset.id-t.dataset.id),n(i),t.classList="uarr"),2===r&&(i.sort((t,e)=>t.dataset.title.localeCompare(e.dataset.title)),n(i),t.classList="",e.classList="darr"),3===r&&(i.sort((t,e)=>e.dataset.title.localeCompare(t.dataset.title)),n(i),e.classList="uarr"),4===r&&(i.sort((t,e)=>t.dataset.year-e.dataset.year),n(i),e.classList="",a.classList="darr"),5===r&&(i.sort((t,e)=>e.dataset.year-t.dataset.year),n(i),a.classList="uarr"),6===r&&(i.sort((t,e)=>t.dataset.imdb-e.dataset.imdb),n(i),a.classList="",d.classList="darr"),7===r&&(i.sort((t,e)=>e.dataset.imdb-t.dataset.imdb),n(i),d.classList="uarr"),r=7===r?0:r+1},2e3)}]);