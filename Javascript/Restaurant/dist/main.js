(()=>{"use strict";const e=function(){const e=document.createElement("section");e.id="home-container";const t=document.createElement("h1");t.innerHTML="Restaurant",t.id="title";const n=document.createElement("img");n.src="../src/assets/restaurant.jpg",n.id="restaurant-img";const a=document.createElement("p");return a.innerHTML="Wow what a great restaurant! Why not come join Jerome & his pals.",e.append(t,n,a),e};function t({target:t}){const n=document.getElementById("main");switch(n.removeChild(n.lastChild),t.id){case"home-nav":main.appendChild(e());break;case"menu-nav":main.appendChild(function(){const e=document.createElement("section");e.id="menu-container";class t{constructor(e,t,n){this.title=e,this.description=t,this.price=Number(n).toFixed(2)}}let n=[];const a=new t("Calzone","Steinbrenner's favorite",9.5),c=new t("Chocolate Babka","The last one",11),r=new t("Jambalaya","Mmm. Soup for you!",6.5),i=new t("Fat free yoghurt","You have waited your whole life for this",4),o=new t("Marble Rye","Make sure it gets home safe",7),s=new t("Junior Mint","Can reach the smallest of places",1.5),d=new t("Mackinaw Peaches","Only available for a limited time",3),m=new t("Kenny Rogers Chicken","The brightest chicken around",8);return n.push(a,c,r,i,o,s,d,m),n.forEach((t=>{let n=function(e){const t=document.createElement("div");t.className="meal-card";const n=document.createElement("p"),a=document.createElement("p"),c=document.createElement("p");return n.className="meal-title",n.innerHTML=`${e.title}`,a.className="meal-description",a.innerHTML=`${e.description}`,c.className="meal-price",c.innerHTML=`$${e.price}`,t.append(n,a,c),t}(t);e.appendChild(n)})),e}());break;case"contact-nav":main.appendChild(function(){const e=document.createElement("section");e.id="contact-container";const t=document.createElement("p"),n=document.createElement("p");return t.innerHTML="Phone: 987 654 321",n.innerHTML="Address: 44 Made Up Street, Town Too Far From You, Snobsville",t.id="phone",n.id="address",e.append(t,n),e}())}}function n({target:e}){const t=document.querySelector("nav");Array.from(t.children).forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}document.getElementById("content").append(function(){const e=document.createElement("header");return e.id="header",e.appendChild(function(){const e=document.createElement("nav"),a=document.createElement("li"),c=document.createElement("li"),r=document.createElement("li");return a.innerHTML="Home",c.innerHTML="Menu",r.innerHTML="Contact",a.id="home-nav",a.classList.add("active"),c.id="menu-nav",r.id="contact-nav",a.addEventListener("click",t),a.addEventListener("click",n),c.addEventListener("click",t),c.addEventListener("click",n),r.addEventListener("click",t),r.addEventListener("click",n),e.append(a,c,r),e}()),e}(),function(){const t=document.createElement("section");return t.id="main",t.appendChild(e()),t}(),function(){const e=document.createElement("footer");e.id="footer";const t=document.createElement("p"),n=document.createElement("p");return n.id="source",t.innerHTML='Made by <a href="https://github.com/arcadesproject"> arcadesproject<img id="git" alt="github icon" src="../src/assets/git.png"></a>',n.innerHTML='<a href="https://github.com/arcadesproject/The_Odin_Project/tree/main/Javascript/Restaurant"> source',e.append(t,n),e}())})();