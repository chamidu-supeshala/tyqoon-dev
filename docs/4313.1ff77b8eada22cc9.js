"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[4313],{24499:(P,g,t)=>{t.d(g,{c:()=>n});var a=t(5565),s=t(94650);const l=["header"];let n=(()=>{class c extends a.V{constructor(i,e){super(),this.element=i,this.renderer=e,this.lastScrollTop=0}ionViewWillEnter(){this.renderer.setStyle(this.header.el,"webkitTransition","transform 700ms")}onContentScroll(i){const e=i.detail.scrollTop;e>=50&&this.lastScrollTop<e?this.renderer.addClass(this.header.el,"top-toolbar-hide"):this.renderer.removeClass(this.header.el,"top-toolbar-hide"),this.lastScrollTop=e}}return c.\u0275fac=function(i){return new(i||c)(s.Y36(s.SBq),s.Y36(s.Qsj))},c.\u0275cmp=s.Xpm({type:c,selectors:[["ng-component"]],viewQuery:function(i,e){if(1&i&&s.Gf(l,5),2&i){let v;s.iGM(v=s.CRH())&&(e.header=v.first)}},features:[s.qOj],decls:0,vars:0,template:function(i,e){},encapsulation:2}),c})()},24313:(P,g,t)=>{t.r(g),t.d(g,{MemberModule:()=>Z});var a=t(36895),s=t(24006),l=t(95133),n=t(54463),c=t(44466),r=t(7507),i=t(24499),e=t(94650),v=t(52313),M=t(46032),b=t(52646),x=t(5068),y=t(70957),E=t(49127),T=t(44336),B=t(38323),A=t(45210),D=t(18215);function L(o,u){if(1&o&&(e._uU(0),e.ALo(1,"translate")),2&o){const h=e.oxw().$implicit;e.Oqu(e.lcZ(1,1,h.name))}}function p(o,u){1&o&&(e.TgZ(0,"app-tab",14),e.YNc(1,L,2,3,"ng-template"),e.qZA()),2&o&&e.Q6J("link",u.$implicit.url)}const O=function(o){return{"!hidden":o}},m=[{path:"",pathMatch:"full",redirectTo:"my-wishlist"},{path:"",component:(()=>{class o extends i.c{constructor(h,C,w,S){super(h,C),this.router=w,this.platform=S,this.hideFooter=!1,this.matchOptions={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},this.memberPageNavigation=[{url:"/member/my-orders/list",name:"account-menu-orders"},{url:"/member/my-wishlist",name:"account-menu-wishlist"},{url:"/member/store-credits",name:"account-menu-credits"},{url:"/member/aftersales/list",name:"account-menu-aftersales"},{url:"/member/profile",name:"account-menu-info"},{url:"/member/modify-payment-password",name:"order-payment-password"},{url:"/member/address/list",name:"account-menu-shipping"}],this.router.events.subscribe(I=>{if(I instanceof r.m2){const U=I.url.split("?");this.hideFooter="/member/my-wishlist"!==U[0]&&"/member/store-credits"!==U[0]}})}ngOnInit(){}}return o.\u0275fac=function(h){return new(h||o)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(r.F0),e.Y36(l.t4))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-member"]],features:[e.qOj],decls:17,vars:9,consts:[["scrollTop","","fullscreen","true","scrollEvents","true","backToTopBtn","",3,"ionScroll"],["id","member-product-toolbar","appOverflowVisible","",1,"sticky","top-0","shadow-lg","z-50"],["header",""],[3,"hideCart","hideSearch","hideLogo","hidePageName"],[1,"member-tabs","absolute","left-3","hidden","lg:flex","pr-0"],["customNavClass","bg-white w-[200px] bg-white custom-rounded sticky top-[15px]","direction","vertical","customTabClass","text-[15px]","customActiveTabClass","active",1,"pt-5","pr-5",3,"matchOptions"],[3,"link",4,"ngFor","ngForOf"],[1,"bg-[#f3f3f3]"],[1,"tyqoon-container","flex","flex-row","px-0","sm:px-3","xl:px-4","pb-5","md:pb-0"],[1,"w-full","md:py-5","md:pt-0","flex","member-content-wrapper"],[1,"member-content","flex-1","md:mt-5"],[1,"hidden","sm:!block","bg-white",3,"ngClass"],[1,"mt-4","md:hidden"],["id","member-bottom-nav"],[3,"link"]],template:function(h,C){1&h&&(e.TgZ(0,"ion-content",0),e.NdJ("ionScroll",function(S){return C.onContentScroll(S)}),e._UZ(1,"app-global-customer-service"),e.TgZ(2,"ion-toolbar",1,2),e._UZ(4,"app-top-navbar",3)(5,"app-top-menu"),e.TgZ(6,"div",4)(7,"app-tabs",5),e.YNc(8,p,2,1,"app-tab",6),e.qZA()()(),e.TgZ(9,"div",7)(10,"div",8)(11,"div",9)(12,"div",10),e._UZ(13,"router-outlet"),e.qZA()()(),e._UZ(14,"app-footer",11),e.qZA()(),e.TgZ(15,"ion-footer",12),e._UZ(16,"app-bottom-navbar",13),e.qZA()),2&h&&(e.xp6(4),e.Q6J("hideCart",!0)("hideSearch",!0)("hideLogo",!0)("hidePageName",!1),e.xp6(3),e.Q6J("matchOptions",C.matchOptions),e.xp6(1),e.Q6J("ngForOf",C.memberPageNavigation),e.xp6(6),e.Q6J("ngClass",e.VKq(7,O,C.hideFooter)))},dependencies:[a.mk,a.sg,r.lC,v.p,M.K,b.c,x.z,y.V,E.H,T.n,B.i,A.B,D.Z,l.W2,l.fr,l.sr,n.X$],styles:[".pink-gradient[_ngcontent-%COMP%]{background:radial-gradient(#ffccf2,#fb85d5)}.purple-gradient[_ngcontent-%COMP%]{background:radial-gradient(#8874ff,#680df0)}.container-ratio[_ngcontent-%COMP%]{position:relative;width:100%;height:unset;padding-top:53.5%}ion-content[_ngcontent-%COMP%]{--background: #f3f3f3}@media only screen and (max-width: 344.9px){.hide-extra-small[_ngcontent-%COMP%]{display:none!important}.big-slide-wrapper[_ngcontent-%COMP%]{width:100%}.container-ratio[_ngcontent-%COMP%]{min-height:100%}}.icon-image[_ngcontent-%COMP%]{width:50px;max-width:58%}@media (min-width: 340px){.icon-image[_ngcontent-%COMP%]{width:80px}}@media (min-width: 640px){.icon-image[_ngcontent-%COMP%]{width:120px;max-width:44%}}@media (min-width: 768px){.member-content-wrapper[_ngcontent-%COMP%]{min-height:430px}}[_nghost-%COMP%]     .home-swiper   .swiper-wrapper{margin-left:-.125rem;margin-right:-.125rem}@media only screen and (min-width: 279px){[_nghost-%COMP%]     .home-swiper   .swiper-wrapper{margin-left:-.25rem;margin-right:-.25rem}}[_nghost-%COMP%]     .home-swiper   .swiper-slide{width:120px;flex-shrink:0;padding-left:.125rem;padding-right:.125rem}@media only screen and (min-width: 260px){[_nghost-%COMP%]     .home-swiper   .swiper-slide{padding-left:.25rem;padding-right:.25rem}}@media (min-width: 768px){[_nghost-%COMP%]     .home-swiper   .swiper-slide{width:20%}}@media (min-width: 1024px){[_nghost-%COMP%]     .home-swiper   .swiper-slide{width:14.2857142857%}}@media (min-width: 1280px){[_nghost-%COMP%]     .home-swiper   .swiper-slide{width:14.2857142857%}}[_nghost-%COMP%]     .home-swiper   .swiper-slide app-product-card .product-title, [_nghost-%COMP%]     .home-swiper   .swiper-slide app-product-card-skeleton .product-title{height:24px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}  .text-extra-small{font-size:10px}ion-toolbar[appOverflowVisible][_ngcontent-%COMP%]{contain:none}.member-content[_ngcontent-%COMP%]{width:100%}@media (min-width: 1024px){.member-content[_ngcontent-%COMP%]{margin-left:220px;width:calc(100% - 220px)}}@media (min-width: 1280px){.member-tabs[_ngcontent-%COMP%]{left:calc((100vw - 1124px)/2)}}@media (min-width: 1440px){.member-tabs[_ngcontent-%COMP%]{left:calc((100vw - 1316px)/2)}}"]}),o})(),children:[{path:"my-orders",loadChildren:()=>Promise.all([t.e(6424),t.e(7915),t.e(1953),t.e(9501),t.e(2655)]).then(t.bind(t,99501)).then(o=>o.OrdersModule)},{path:"store-credits",loadChildren:()=>Promise.all([t.e(6424),t.e(1537),t.e(5916),t.e(9172),t.e(6227),t.e(1953),t.e(5459),t.e(6380),t.e(8592),t.e(814)]).then(t.bind(t,90814)).then(o=>o.CreditModule)},{path:"my-wishlist",loadChildren:()=>t.e(5372).then(t.bind(t,25372)).then(o=>o.WishlistModule)},{path:"aftersales",loadChildren:()=>Promise.all([t.e(6424),t.e(6104),t.e(1953),t.e(8592),t.e(8605)]).then(t.bind(t,28605)).then(o=>o.AfterSalesModule)},{path:"modify-payment-password",loadChildren:()=>Promise.all([t.e(9053),t.e(8592),t.e(8363)]).then(t.bind(t,78363)).then(o=>o.PaymentPasswordModule)},{path:"address",loadChildren:()=>Promise.all([t.e(9172),t.e(5968)]).then(t.bind(t,94045)).then(o=>o.ShippingAddressModule)},{path:"profile",loadChildren:()=>Promise.all([t.e(6424),t.e(1537),t.e(6104),t.e(9053),t.e(5916),t.e(4620),t.e(8592),t.e(244)]).then(t.bind(t,50244)).then(o=>o.AccountInfoModule)}]}];let f=(()=>{class o{}return o.\u0275fac=function(h){return new(h||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.Bz.forChild(m),r.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(h){return new(h||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.ez,f,c.m,s.u5,l.Pc,n.aw]}),o})()},46032:(P,g,t)=>{t.d(g,{K:()=>L});var a=t(15861),s=t(82722),l=t(5565),n=t(94650),c=t(33243),r=t(94128),i=t(94830),e=t(95133),v=t(36895),M=t(7507),b=t(64293),x=t(40432),y=t(57180),E=t(23672),T=t(60208);function B(p,O){if(1&p&&n._UZ(0,"img",21),2&p){const d=O.ngIf;n.Q6J("src",d.avatar||"/assets/images/sign-up-user.svg",n.LSH)("alt",d.username)}}function A(p,O){1&p&&n._UZ(0,"app-profile-icon",22)}const D=function(p){return{"opacity-0":p}};let L=(()=>{class p extends l.V{constructor(d,m,f,Z){super(),this.sidebarService=d,this.cartService=m,this.userService=f,this.menuController=Z,this.totalNumber=0,this.exactMatchOption={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"ignored"}}ngOnInit(){this.userInfo$=this.userService.userInfo$,this.cartService.cartList$.pipe((0,s.R)(this.destroyStream$)).subscribe(d=>{this.totalNumber=d?.reduce((m,f)=>m+f.quantity,0)||0})}openMenu(d){var m=this;return(0,a.Z)(function*(){yield m.menuController.enable(!0,d),yield m.menuController.open(d),m.sidebarService.setOpen()})()}}return p.\u0275fac=function(d){return new(d||p)(n.Y36(c.P),n.Y36(r.N),n.Y36(i.K),n.Y36(e._q))},p.\u0275cmp=n.Xpm({type:p,selectors:[["app-bottom-navbar"]],inputs:{isSticky:"isSticky"},features:[n.qOj],decls:26,vars:18,consts:[[1,"bottom-nav","relative"],[1,"flex","h-full","base","absolute","inset-0","pointer-events-none"],[1,"bg-white","flex-1","h-full","base-left"],["src","assets/svgs/bottom-notch.svg","alt","",1,"h-full"],[1,"bg-white","flex-1","h-full","base-right"],[1,"absolute","w-full","flex","h-full","z-10","items-center"],["routerLink","/",1,"nav-item","flex-1","flex-shrink-0",3,"routerLinkActive","routerLinkActiveOptions"],[1,"group-[.active]:text-primary"],["routerLink","/member/my-wishlist",1,"nav-item","flex-1","flex-shrink-0",3,"routerLinkActive","routerLinkActiveOptions"],[1,"heart-wrapper","relative"],[1,"nav-item","flex-1","flex-shrink-0","relative"],["routerLink","/cart",1,"cart-icon","w-full","relative","rounded-full","border-[3px]"],[1,"absolute","inset-0","h-full","flex","justify-center","items-center","p-4","pl-3"],[1,"w-8","h-8","xs:h-[35px]","xs:w-[35px]"],[1,"cart-badge","absolute","top-0","right-0","bg-[#0087ff]","rounded-full","text-center","text-xs","cart-pulse",3,"ngClass"],["routerLink","/member/store-credits",1,"nav-item","flex-1","flex-shrink-0",3,"routerLinkActive","routerLinkActiveOptions"],["src","/assets/images/credit-faded.png","alt","",1,"credit-faded"],["src","/assets/images/tyqoon-dollars-cc-small.png","alt","dolars",1,"credit-color"],[1,"nav-item","flex-1","flex-shrink-0","cursor-pointer",3,"click"],["class","rounded-full overflow-hidden",3,"src","alt",4,"ngIf","ngIfElse"],["noInfo",""],[1,"rounded-full","overflow-hidden",3,"src","alt"],[1,"rounded-full","overflow-hidden","border","border-[#B1B1B1]"]],template:function(d,m){if(1&d&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"div",2)(3,"img",3)(4,"div",4),n.qZA(),n.TgZ(5,"div",5)(6,"a",6),n._UZ(7,"app-home-icon",7),n.qZA(),n.TgZ(8,"a",8)(9,"div",9),n._UZ(10,"app-heart-empty")(11,"app-heart-full"),n.qZA()(),n.TgZ(12,"div",10)(13,"a",11)(14,"div",12),n._UZ(15,"app-cart-icon",13),n.TgZ(16,"div",14),n._uU(17),n.qZA()()()(),n.TgZ(18,"a",15),n._UZ(19,"img",16)(20,"img",17),n.qZA(),n.TgZ(21,"div",18),n.NdJ("click",function(){return m.openMenu("sidebar")}),n.YNc(22,B,1,2,"img",19),n.ALo(23,"async"),n.YNc(24,A,1,0,"ng-template",null,20,n.W1O),n.qZA()()()),2&d){const f=n.MAs(25);n.xp6(6),n.Q6J("routerLinkActive","group active")("routerLinkActiveOptions",m.exactMatchOption),n.xp6(2),n.Q6J("routerLinkActive","group active")("routerLinkActiveOptions",m.exactMatchOption),n.xp6(5),n.Tol(m.totalNumber>0?"bg-gradient-primary border-[#fabead]":"bg-white border-white"),n.xp6(1),n.Tol(m.totalNumber>0?"text-white":"text-[#a3acd0]"),n.xp6(2),n.Q6J("ngClass",n.VKq(16,D,!m.totalNumber)),n.xp6(1),n.hij(" ",m.totalNumber," "),n.xp6(1),n.Q6J("routerLinkActive","group active")("routerLinkActiveOptions",m.exactMatchOption),n.xp6(4),n.Q6J("ngIf",n.lcZ(23,14,m.userInfo$))("ngIfElse",f)}},dependencies:[v.mk,v.O5,e.Fo,M.yS,M.Od,b.G,x.l,y.c,E.t,T.E,v.Ov],styles:[".bottom-nav[_ngcontent-%COMP%]{--nav-bottom-size: 50px;height:var(--nav-bottom-size)}.bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#a3acd0}.bottom-nav[_ngcontent-%COMP%]   .fake-click[_ngcontent-%COMP%]{height:var(--nav-bottom-size);width:var(--nav-bottom-size);left:50%;z-index:12;transform:translate(-50%,-40%)}.bottom-nav[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%]   .base-left[_ngcontent-%COMP%]{margin-right:-1px;box-shadow:0 0 16px 2px #0000004a}.bottom-nav[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{z-index:11}.bottom-nav[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%]   .base-right[_ngcontent-%COMP%]{margin-left:-1px;box-shadow:0 0 16px 2px #0000004a}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    >*{height:55%}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    >* svg, .bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    >* img{height:100%}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]     .cart-icon{width:var(--nav-bottom-size);height:var(--nav-bottom-size);transform:translateY(-40%);box-shadow:0 0 16px 2px #0000004d}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]     .cart-icon .cart-badge{transform:translate(50%,-20%);width:24px;height:24px;line-height:22px;border:1px solid #40b7ff;transition:opacity 0ms;transition-delay:.3s}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]     .cart-icon .cart-badge.opacity-0{transition-delay:0s}.nav-item[_ngcontent-%COMP%]   .heart-wrapper[_ngcontent-%COMP%]{height:90%}@media only screen and (min-width: 345px){.bottom-nav[_ngcontent-%COMP%]{--nav-bottom-size: 60px}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .cart-icon[_ngcontent-%COMP%]   .cart-badge[_ngcontent-%COMP%]{width:24px;height:24px;line-height:22px}}.nav-item[_ngcontent-%COMP%]   app-heart-full[_ngcontent-%COMP%]{display:none}.nav-item[_ngcontent-%COMP%]   .credit-color[_ngcontent-%COMP%]{display:none}.nav-item.active[_ngcontent-%COMP%]   app-heart-empty[_ngcontent-%COMP%]{display:none}.nav-item.active[_ngcontent-%COMP%]   app-heart-full[_ngcontent-%COMP%]{display:inline}.nav-item.active[_ngcontent-%COMP%]   .credit-faded[_ngcontent-%COMP%]{display:none}.nav-item.active[_ngcontent-%COMP%]   .credit-color[_ngcontent-%COMP%]{display:block}.cart-pulse[_ngcontent-%COMP%]{animation:blue-pulse 1.5s infinite}"]}),p})()},18215:(P,g,t)=>{t.d(g,{Z:()=>c});var a=t(94650),s=t(12163),l=t(54463);function n(r,i){if(1&r){const e=a.EpF();a.TgZ(0,"div",0)(1,"button",1),a.NdJ("click",function(){const b=a.CHM(e).method,x=a.oxw();return a.KtG(x.handleBtnClick(b))}),a._UZ(2,"img",2),a.TgZ(3,"div",3),a._uU(4),a.ALo(5,"translate"),a.qZA()()()}2&r&&(a.xp6(4),a.Oqu(a.lcZ(5,1,"toolkit-official-button")))}let c=(()=>{class r{constructor(){}handleBtnClick(e){e(this.additionalData)}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-global-customer-service"]],inputs:{additionalData:"additionalData"},decls:2,vars:0,consts:[[1,"hidden","md:block","rounded-l-2xl","border-y","border-l","border-solid","border-[#e9e9e9]","py-4","px-2","bg-white","shadow-xl","absolute","right-0","w-16","transform","-translate-y-1/2",2,"z-index","999"],[1,"inline",3,"click"],["src","assets/images/toolkit-item1.png","alt","",1,"m-auto","h-10","mb-1"],[1,"text-xs","font-light","text-center"]],template:function(e,v){1&e&&(a.TgZ(0,"app-customer-service"),a.YNc(1,n,6,3,"ng-template"),a.qZA())},dependencies:[s.M,l.X$],styles:["[_nghost-%COMP%]{position:sticky;top:50%;right:0;z-index:100;display:block}"]}),r})()},45210:(P,g,t)=>{t.d(g,{B:()=>n});var a=t(15861),s=t(24837),l=t(94650);let n=(()=>{class c{constructor(i){this.el=i,this.myValue=!0,this.content=i.nativeElement}ngAfterViewInit(){var i=this;return(0,a.Z)(function*(){s.Z.isServer||(i.btn=document.createElement("button"),i.btn.innerHTML='\n    <svg class="icon__arrow-up" viewBox="0 0 24 24">\n      <title>Back to top</title>\n      <path d="M18.71,11.71a1,1,0,0,1-1.42,0L13,7.41V19a1,1,0,0,1-2,0V7.41l-4.29,4.3a1,1,0,0,1-1.42-1.42l6-6a1,1,0,0,1,1.42,0l6,6A1,1,0,0,1,18.71,11.71Z"/>\n    </svg>',i.btn.classList.add("back-to-top-btn"),i.btn.addEventListener("click",()=>{i.content.scrollToTop(500)}),document.body.appendChild(i.btn),i.el.nativeElement.append(i.btn))})()}onScroll(i){i.detail.scrollTop>200?this.btn.classList.add("show-btn"):this.btn.classList.remove("show-btn")}}return c.\u0275fac=function(i){return new(i||c)(l.Y36(l.SBq))},c.\u0275dir=l.lG2({type:c,selectors:[["","backToTopBtn",""]],hostVars:1,hostBindings:function(i,e){1&i&&l.NdJ("ionScroll",function(M){return e.onScroll(M)}),2&i&&l.Ikx("overflow-scroll",e.myValue)}}),c})()},49127:(P,g,t)=>{t.d(g,{H:()=>l});var a=t(24837),s=t(94650);let l=(()=>{class n{constructor(r){this.toolbar=r.nativeElement}ngAfterViewInit(){if(a.Z.isServer)return;const r=setInterval(()=>{if(this.toolbar.shadowRoot){let i=this.toolbar.shadowRoot.querySelector(".toolbar-container");i&&(i.style.contain="none",i.style.overflow="visible",clearInterval(r))}},500)}}return n.\u0275fac=function(r){return new(r||n)(s.Y36(s.SBq))},n.\u0275dir=s.lG2({type:n,selectors:[["","appOverflowVisible",""]]}),n})()}}]);