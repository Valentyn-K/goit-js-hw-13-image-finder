(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OPH6:function(e,t,n){},OenX:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("OPH6"),n("x3rB"),n("OenX"),n("uJ3Q");var a={searchForm:document.querySelector("#search-form"),ulGallery:document.querySelector("#gallery"),loadMoreBtn:document.querySelector("#load-more"),smallImage:document.querySelectorAll(".image"),spiner:document.querySelector(".spiner"),liGridSizer:document.querySelector(".grid-sizer"),ioTarget:document.querySelector("#intersection-observer-target"),modal:document.querySelector(".modal"),largeImage:document.querySelector(".large-image")},r=n("5Zwl"),i=n.n(r),o=n("dcBu");function s(){a.ulGallery.innerHTML=""}n("JBxO"),n("FdtR");var c={page:1,query:"",fetchImages:function(){var e=this,t="?image_type=photo&orientation=horizontal&q="+this.query+"&page="+this.page+"&per_page=12&key=15837694-cfd882bdab50e7e30ec0ef461";return fetch("https://pixabay.com/api/"+t).then((function(e){return e.json()})).then((function(t){return e.incrementPage(),t.hits}))},incrementPage:function(){this.page+=1},get searchQuery(){return this.query},set searchQuery(e){this.query=e},resetPage:function(){this.page=1}},l=(n("lmye"),n("9GzK")),d=n.n(l),u=n("M5ur"),m=n.n(u),p=function(e){var t=e.webformatURL,n=(e.largeImageURL,e.likes),a=e.views,r=e.comments,i=e.downloads,o=document.createElement("li");o.classList.add("grid-item"),o.classList.add("gallery-item");var s=document.createElement("div");s.classList.add("photo-card");var c=document.createElement("img");c.classList.add("image"),c.src=t,c.setAttribute("data-largeurl",t);var l=document.createElement("div");l.classList.add("stats");var d=document.createElement("p");d.classList.add("stats-item"),d.textContent=n;var u=document.createElement("i");u.classList.add("material-icons"),u.textContent="thumb_up",d.appendChild(u);var m=document.createElement("p");m.classList.add("stats-item"),m.textContent=a;var p=document.createElement("i");p.classList.add("material-icons"),p.textContent="visibility",m.appendChild(p);var g=document.createElement("p");g.classList.add("stats-item"),g.textContent=r;var h=document.createElement("i");h.classList.add("material-icons"),h.textContent="comment",g.appendChild(h);var f=document.createElement("p");f.classList.add("stats-item"),f.textContent=i;var v=document.createElement("i");return v.classList.add("material-icons"),v.textContent="cloud_download",f.appendChild(v),l.append(d,m,g,f),s.append(c,l),o.appendChild(s),o},g=new d.a("#gallery",{itemSelector:".grid-item",columnWidth:a.liGridSizer,percentPosition:!0,gutter:10,transitionDuration:"0.8s"});function h(e){var t,n=e.map(p);(t=a.ulGallery).append.apply(t,n),g.appended(n),m()(a.ulGallery).on("progress",(function(){g.layout()}))}var f={show:function(){a.spiner.classList.remove("spiner-hidden")},hide:function(){a.spiner.classList.add("spiner-hidden")}};n("RtS0"),n("3dw1"),n("62jW");var v=function(e){new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(f.show(),c.fetchImages().then((function(e){console.log(e),h(e),f.hide()})))}))}),{rootMargin:"300px 0px",threshold:.01}).observe(e)};function y(e){console.log(e.target),e.target===a.modal&&instance.close()}a.searchForm.addEventListener("input",i()((function(e){e.preventDefault(),s(),c.resetPage();var t=e.target.value;0!==t.length?(c.searchQuery=t,f.show(),c.fetchImages().then((function(e){h(e),f.hide()})).catch((function(e){f.hide(),console.log("Something went wrong!",e)})),v(a.ioTarget)):s()}),500)),a.ulGallery.addEventListener("click",(function(e){if(e.target!==a.ulGallery){var t=e.target.dataset.largeurl;o.create('<div class="modal">\n    <img class="large-image" src="'+t+'" width="800" height="600">\n    </div>').show()}}));instance.visible()&&a.modal.addEventListener("click",y)},uJ3Q:function(e,t,n){},x3rB:function(e,t,n){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.32e731280d8dab474d4e.js.map