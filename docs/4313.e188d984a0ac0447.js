"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[4313,9127],{24499:(b,p,e)=>{e.d(p,{c:()=>t});var r=e(5565),a=e(94650);const c=["header"];let t=(()=>{class m extends r.V{constructor(i,l){super(),this.element=i,this.renderer=l,this.lastScrollTop=0}ionViewWillEnter(){this.renderer.setStyle(this.header.el,"webkitTransition","transform 700ms")}onContentScroll(i){const l=i.detail.scrollTop;l>=50&&this.lastScrollTop<l?this.renderer.addClass(this.header.el,"top-toolbar-hide"):this.renderer.removeClass(this.header.el,"top-toolbar-hide"),this.lastScrollTop=l}}return m.\u0275fac=function(i){return new(i||m)(a.Y36(a.SBq),a.Y36(a.Qsj))},m.\u0275cmp=a.Xpm({type:m,selectors:[["ng-component"]],viewQuery:function(i,l){if(1&i&&a.Gf(c,5),2&i){let n;a.iGM(n=a.CRH())&&(l.header=n.first)}},features:[a.qOj],decls:0,vars:0,template:function(i,l){},encapsulation:2}),m})()},24313:(b,p,e)=>{e.r(p),e.d(p,{MemberModule:()=>I});var r=e(36895),a=e(24006),c=e(95133),t=e(54463),m=e(44466),s=e(7507),i=e(82722),l=e(24499),n=e(94650),f=e(56889),y=e(81152),x=e(46032),A=e(52646),T=e(8136),P=e(70957),C=e(49127),O=e(44336),L=e(38323),g=e(45210),v=e(18215);function h(o,u){if(1&o&&(n._uU(0),n.ALo(1,"translate")),2&o){const d=n.oxw().$implicit;n.Oqu(n.lcZ(1,1,d.name))}}function M(o,u){1&o&&(n.TgZ(0,"app-tab",15),n.YNc(1,h,2,3,"ng-template"),n.qZA()),2&o&&n.Q6J("link",u.$implicit.url)}function D(o,u){if(1&o&&(n.TgZ(0,"div",12)(1,"app-tabs",13),n.YNc(2,M,2,1,"app-tab",14),n.qZA()()),2&o){const d=n.oxw();n.xp6(1),n.Q6J("matchOptions",d.matchOptions),n.xp6(1),n.Q6J("ngForOf",d.memberPageNavigation)}}const w=function(o){return{"!hidden":o}},j=[{path:"",pathMatch:"full",redirectTo:"my-wishlist"},{path:"",component:(()=>{class o extends l.c{constructor(d,Z,E,U,H,J){super(d,Z),this.router=E,this.platform=U,this.biddingService=H,this.cdr=J,this.hideFooter=!1,this.matchOptions={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},this.navList=[{url:"/member/my-orders/list",name:"account-menu-orders"},{url:"/member/my-wishlist",name:"account-menu-wishlist"},{url:"/member/store-credits",name:"account-menu-credits"},{url:"/member/aftersales/list",name:"account-menu-aftersales"},{url:"/member/profile",name:"account-menu-info"},{url:"/member/modify-payment-password",name:"order-payment-password"},{url:"/member/address/list",name:"account-menu-shipping"}],this.navListBiding=[{url:"/member/my-entries/list",name:"my-entries"},{url:"/member/my-pools/list",name:"my-pools"},{url:"/member/my-orders/list",name:"account-menu-orders"},{url:"/member/my-wishlist",name:"account-menu-wishlist"},{url:"/member/store-credits",name:"account-menu-credits"},{url:"/member/aftersales/list",name:"account-menu-aftersales"},{url:"/member/profile",name:"account-menu-info"},{url:"/member/modify-payment-password",name:"order-payment-password"},{url:"/member/address/list",name:"account-menu-shipping"}],this.router.events.subscribe(S=>{if(S instanceof s.m2){const B=S.url.split("?");this.hideFooter="/member/my-wishlist"!==B[0]&&"/member/store-credits"!==B[0]}})}ngOnInit(){this.biddingService.isBiddingMode$.pipe((0,i.R)(this.destroyStream$)).subscribe(d=>{this.memberPageNavigation=d?this.navListBiding:this.navList,this.cdr.detectChanges()})}}return o.\u0275fac=function(d){return new(d||o)(n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(s.F0),n.Y36(c.t4),n.Y36(f.g),n.Y36(n.sBO))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-member"]],features:[n.qOj],decls:15,vars:8,consts:[["scrollTop","","fullscreen","true","scrollEvents","true","backToTopBtn","",3,"ionScroll"],["id","member-product-toolbar","appOverflowVisible","",1,"sticky","top-0","shadow-lg","z-50"],["header",""],[3,"hideCart","hideSearch","hideLogo","hidePageName"],["class","member-tabs absolute left-3 hidden lg:flex pr-0",4,"ngIf"],[1,"bg-[#f3f3f3]"],[1,"tyqoon-container","flex","flex-row","px-0","sm:px-3","xl:px-4","pb-5","md:pb-0"],[1,"w-full","md:py-5","md:pt-0","flex","member-content-wrapper"],[1,"member-content","flex-1","md:mt-5"],[1,"hidden","sm:!block","bg-white",3,"ngClass"],[1,"mt-4","md:hidden"],["id","member-bottom-nav"],[1,"member-tabs","absolute","left-3","hidden","lg:flex","pr-0"],["customNavClass","bg-white w-[200px] bg-white custom-rounded sticky top-[15px]","direction","vertical","customTabClass","text-[15px]","customActiveTabClass","active",1,"pt-5","pr-5",3,"matchOptions"],[3,"link",4,"ngFor","ngForOf"],[3,"link"]],template:function(d,Z){1&d&&(n.TgZ(0,"ion-content",0),n.NdJ("ionScroll",function(U){return Z.onContentScroll(U)}),n._UZ(1,"app-global-customer-service"),n.TgZ(2,"ion-toolbar",1,2),n._UZ(4,"app-top-navbar",3)(5,"app-top-menu"),n.YNc(6,D,3,2,"div",4),n.qZA(),n.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8),n._UZ(11,"router-outlet"),n.qZA()()(),n._UZ(12,"app-footer",9),n.qZA()(),n.TgZ(13,"ion-footer",10),n._UZ(14,"app-bottom-navbar",11),n.qZA()),2&d&&(n.xp6(4),n.Q6J("hideCart",!0)("hideSearch",!0)("hideLogo",!0)("hidePageName",!1),n.xp6(2),n.Q6J("ngIf",Z.memberPageNavigation),n.xp6(6),n.Q6J("ngClass",n.VKq(6,w,Z.hideFooter)))},dependencies:[r.mk,r.sg,r.O5,s.lC,y.p,x.K,A.c,T.z,P.V,C.H,O.n,L.i,g.B,v.Z,c.W2,c.fr,c.sr,t.X$],styles:[".pink-gradient[_ngcontent-%COMP%]{background:radial-gradient(#ffccf2,#fb85d5)}.purple-gradient[_ngcontent-%COMP%]{background:radial-gradient(#8874ff,#680df0)}.container-ratio[_ngcontent-%COMP%]{position:relative;width:100%;height:unset;padding-top:53.5%}ion-content[_ngcontent-%COMP%]{--background: #f3f3f3}@media only screen and (max-width: 344.9px){.hide-extra-small[_ngcontent-%COMP%]{display:none!important}.big-slide-wrapper[_ngcontent-%COMP%]{width:100%}.container-ratio[_ngcontent-%COMP%]{min-height:100%}}.icon-image[_ngcontent-%COMP%]{width:50px;max-width:58%}@media (min-width: 340px){.icon-image[_ngcontent-%COMP%]{width:80px}}@media (min-width: 640px){.icon-image[_ngcontent-%COMP%]{width:120px;max-width:44%}}@media (min-width: 768px){.member-content-wrapper[_ngcontent-%COMP%]{min-height:500px}}[_nghost-%COMP%]     .home-swiper   .swiper-wrapper{margin-left:-.125rem;margin-right:-.125rem}@media only screen and (min-width: 279px){[_nghost-%COMP%]     .home-swiper   .swiper-wrapper{margin-left:-.25rem;margin-right:-.25rem}}[_nghost-%COMP%]     .home-swiper   .swiper-slide{width:120px;flex-shrink:0;padding-left:.125rem;padding-right:.125rem}@media only screen and (min-width: 260px){[_nghost-%COMP%]     .home-swiper   .swiper-slide{padding-left:.25rem;padding-right:.25rem}}@media (min-width: 768px){[_nghost-%COMP%]     .home-swiper   .swiper-slide{width:20%}}@media (min-width: 1024px){[_nghost-%COMP%]     .home-swiper   .swiper-slide{width:14.2857142857%}}@media (min-width: 1280px){[_nghost-%COMP%]     .home-swiper   .swiper-slide{width:14.2857142857%}}[_nghost-%COMP%]     .home-swiper   .swiper-slide app-product-card .product-title, [_nghost-%COMP%]     .home-swiper   .swiper-slide app-product-card-skeleton .product-title{height:24px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}  .text-extra-small{font-size:10px}ion-toolbar[appOverflowVisible][_ngcontent-%COMP%]{contain:none}.member-content[_ngcontent-%COMP%]{width:100%}@media (min-width: 1024px){.member-content[_ngcontent-%COMP%]{margin-left:220px;width:calc(100% - 220px)}}@media (min-width: 1280px){.member-tabs[_ngcontent-%COMP%]{left:calc((100vw - 1124px)/2)}}@media (min-width: 1440px){.member-tabs[_ngcontent-%COMP%]{left:calc((100vw - 1316px)/2)}}"]}),o})(),children:[{path:"my-pools",loadChildren:()=>Promise.all([e.e(4853),e.e(8592),e.e(4971)]).then(e.bind(e,95031)).then(o=>o.PoolsModule)},{path:"my-entries",loadChildren:()=>Promise.all([e.e(4853),e.e(8592),e.e(1210)]).then(e.bind(e,26925)).then(o=>o.BiddingEntriesModule)},{path:"my-orders",loadChildren:()=>Promise.all([e.e(4853),e.e(5439),e.e(9501),e.e(2655)]).then(e.bind(e,99501)).then(o=>o.OrdersModule)},{path:"store-credits",loadChildren:()=>Promise.all([e.e(8006),e.e(4007),e.e(6227),e.e(9172),e.e(2055),e.e(2495),e.e(3985),e.e(8592),e.e(8471)]).then(e.bind(e,8471)).then(o=>o.CreditModule)},{path:"my-wishlist",loadChildren:()=>e.e(5372).then(e.bind(e,25372)).then(o=>o.WishlistModule)},{path:"aftersales",loadChildren:()=>Promise.all([e.e(6104),e.e(4853),e.e(8592),e.e(8605)]).then(e.bind(e,28605)).then(o=>o.AfterSalesModule)},{path:"modify-payment-password",loadChildren:()=>Promise.all([e.e(9053),e.e(8592),e.e(8363)]).then(e.bind(e,78363)).then(o=>o.PaymentPasswordModule)},{path:"address",loadChildren:()=>Promise.all([e.e(9172),e.e(4045)]).then(e.bind(e,94045)).then(o=>o.ShippingAddressModule)},{path:"profile",loadChildren:()=>Promise.all([e.e(8006),e.e(4007),e.e(6104),e.e(9053),e.e(4620),e.e(8592),e.e(244)]).then(e.bind(e,50244)).then(o=>o.AccountInfoModule)}]}];let F=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[s.Bz.forChild(j),s.Bz]}),o})(),I=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[r.ez,F,m.m,a.u5,c.Pc,t.aw]}),o})()},52646:(b,p,e)=>{e.d(p,{c:()=>L});var r=e(40866);const a={ALIPAY:{image:"assets/images/payment-alipay-dark-min.png",displayText:"Alipay"},WECHAT:{image:"assets/images/payment-wechatpay-dark-min.png",displayText:"WeChat"},VISA_MASTER_AMEX:{image:"assets/images/payment-vise-master-amex-min.png",displayText:"Visa, Mastercard and American Express"}},c=[a.ALIPAY,a.WECHAT,a.VISA_MASTER_AMEX];var t=e(94650),m=e(54463),s=e(36895),i=e(95133),l=e(7507),n=e(93860);function f(g,v){if(1&g&&t._UZ(0,"img",26),2&g){const h=v.$implicit;t.Q6J("src",h.image,t.LSH)("alt",h.displayText)}}const y=function(){return["/products"]},x=function(){return["/cart"]},A=function(){return["/auth/login"]},T=function(){return["/auth/register"]},P=function(){return["/member/profile"]},C=function(){return["/member/store-credits"]},O=function(){return["/member/my-orders"]};let L=(()=>{class g{constructor(h){this.i18n=h,this.paymentMethods=c,this.version=r.J,this.marketingUrl="https://about.tyqoon.co/marketing-resources"}ngOnInit(){this.setMarketingUrl(),this.i18n.onLangChange.subscribe(h=>{this.setMarketingUrl()})}setMarketingUrl(){switch(this.i18n.currentLang){case"cn":this.marketingUrl="https://about.tyqoon.co/marketing-resources/?lang=zh-hans";break;case"tr":this.marketingUrl="https://about.tyqoon.co/marketing-resources/?lang=zh-hant";break;default:this.marketingUrl="https://about.tyqoon.co/marketing-resources"}}}return g.\u0275fac=function(h){return new(h||g)(t.Y36(m.sK))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-footer"]],decls:88,vars:87,consts:[[1,"tyqoon-container","grid","grid-cols-2","p-4","sm:p-3","xs:p-6","gap-5","bg-white","md:grid-cols-5"],[1,"flex","flex-col","col-span-2","items-center","justify-center","lg:items-start"],[1,"block","mb-3"],[1,"text-[14px]","leading-[24px]","w-full","max-w-[300px]","text-center","lg:text-[16px]","lg:text-left"],[1,"flex","flex-col"],[1,"text-[28px]","font-medium","mb-5"],[1,"flex","flex-col","space-y-1"],[1,"text-[#666666]","text-[14px]","lg:text-[18px]",3,"routerLink"],["href","https://about.tyqoon.co/faq/","target","_blank","rel","noreferrer noopener",1,"text-[#666666]","text-[14px]","lg:text-[18px]"],["href","https://about.tyqoon.co/terms-conditions/","target","_blank","rel","noreferrer noopener",1,"text-[#666666]","text-[14px]","lg:text-[18px]"],["target","_blank","rel","noreferrer noopener",1,"text-[#666666]","text-[14px]","lg:text-[18px]",3,"href"],[1,"mx-1","xs:mx-2","md:mx-auto","grid","grid-cols-3","items-center","gap-8","md:flex","md:justify-between","tyqoon-container","py-5","bg-white"],["src","assets/images/Singapore_Fintech_Association_75px-min.png","srcset","\n      assets/images/Singapore-Fintech-Association-75px-min.png  1x,\n      assets/images/Singapore-Fintech-Association-150px-min.png 2x\n    ","alt","Singapore Fintech Association",1,"col-span-3","h-[75px]","mx-auto","md:mx-0","md:h-[25px]","lg:h-[40px]"],["loading","lazy","class","w-full h-auto md:w-auto md:h-[25px] lg:h-[40px]",3,"src","alt",4,"ngFor","ngForOf"],[1,"bg-[#282828]"],[1,"flex","flex-col","justify-center","items-center","tyqoon-container","py-5","sm:mb-0","xs:mb-5","space-y-4"],[1,"flex","items-center","space-x-1"],["href","https://about.tyqoon.co/?lang=en","target","_blank","rel","noreferrer noopener",1,"text-[#7a7a7a]","text-sm","lg:text-lg"],[1,"text-[#7a7a7a]","text-sm","lg:text-lg"],["href","https://about.tyqoon.co/privacy-policy?lang=en","target","_blank","rel","noreferrer noopener",1,"text-[#7a7a7a]","text-sm","lg:text-lg"],["href","https://about.tyqoon.co/terms-conditions?lang=en","target","_blank","rel","noreferrer noopener",1,"text-[#7a7a7a]","text-sm","lg:text-lg"],[1,"flex","relative"],[1,"text-white","text-xs","text-center"],[1,"sm:hidden","xs:block"],["href","https://beian.miit.gov.cn/","target","_blank","rel","noreferrer noopener",1,"text-white","text-xs"],[1,"text-[#7a7a7a]","text-xs","ml-2","sm:ml-0","sm:absolute","sm:top-0","sm:left-[101%]"],["loading","lazy",1,"w-full","h-auto","md:w-auto","md:h-[25px]","lg:h-[40px]",3,"src","alt"]],template:function(h,M){1&h&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-tyqoon-icon",2),t.TgZ(3,"p",3),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"div",4)(7,"h4",5),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"div",6)(11,"a",7),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"a",7),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"a",7),t._uU(18),t.ALo(19,"translate"),t.qZA()()(),t.TgZ(20,"div",4)(21,"h4",5),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.TgZ(24,"div",6)(25,"a",7),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"a",7),t._uU(29),t.ALo(30,"translate"),t.qZA(),t.TgZ(31,"a",7),t._uU(32),t.ALo(33,"translate"),t.qZA(),t.TgZ(34,"a",7),t._uU(35),t.ALo(36,"translate"),t.qZA(),t.TgZ(37,"a",7),t._uU(38),t.ALo(39,"translate"),t.qZA()()(),t.TgZ(40,"div",4)(41,"h4",5),t._uU(42),t.ALo(43,"translate"),t.qZA(),t.TgZ(44,"div",6)(45,"a",7),t._uU(46),t.ALo(47,"translate"),t.qZA(),t.TgZ(48,"a",8),t._uU(49),t.ALo(50,"translate"),t.qZA(),t.TgZ(51,"a",9),t._uU(52),t.ALo(53,"translate"),t.qZA(),t.TgZ(54,"a",10),t._uU(55),t.ALo(56,"translate"),t.qZA()()()(),t.TgZ(57,"div",11),t._UZ(58,"img",12),t.YNc(59,f,1,2,"img",13),t.qZA(),t.TgZ(60,"div",14)(61,"div",15)(62,"div",16)(63,"a",17),t._uU(64),t.ALo(65,"translate"),t.qZA(),t.TgZ(66,"p",18),t._uU(67,"|"),t.qZA(),t.TgZ(68,"a",19),t._uU(69),t.ALo(70,"translate"),t.qZA(),t.TgZ(71,"p",18),t._uU(72,"|"),t.qZA(),t.TgZ(73,"a",20),t._uU(74),t.ALo(75,"translate"),t.qZA()(),t.TgZ(76,"div",21)(77,"p",22),t._uU(78),t.ALo(79,"translate"),t.ALo(80,"translate"),t._UZ(81,"br",23),t._uU(82),t.ALo(83,"translate"),t.TgZ(84,"a",24),t._uU(85,"\u6caaICP\u59072022027392\u53f7-2 "),t.qZA(),t.TgZ(86,"span",25),t._uU(87),t.qZA()()()()()),2&h&&(t.xp6(4),t.hij(" ",t.lcZ(5,34,"footer-description")," "),t.xp6(4),t.hij(" ",t.lcZ(9,36,"footer-title-shop")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(78,y)),t.xp6(1),t.hij(" ",t.lcZ(13,38,"footer-start-shopping")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(79,x)),t.xp6(1),t.hij(" ",t.lcZ(16,40,"footer-cart")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(80,x)),t.xp6(1),t.hij(" ",t.lcZ(19,42,"footer-checkout")," "),t.xp6(4),t.hij(" ",t.lcZ(23,44,"footer-title-account")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(81,A)),t.xp6(1),t.hij(" ",t.lcZ(27,46,"footer-login")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(82,T)),t.xp6(1),t.hij(" ",t.lcZ(30,48,"register-page-title")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(83,P)),t.xp6(1),t.hij(" ",t.lcZ(33,50,"footer-account")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(84,C)),t.xp6(1),t.hij(" ",t.lcZ(36,52,"gift-codes")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(85,C)),t.xp6(1),t.hij(" ",t.lcZ(39,54,"account-menu-credits")," "),t.xp6(4),t.hij(" ",t.lcZ(43,56,"footer-title-help")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(86,O)),t.xp6(1),t.hij(" ",t.lcZ(47,58,"footer-return")," "),t.xp6(3),t.hij(" ",t.lcZ(50,60,"footer-help")," "),t.xp6(3),t.hij(" ",t.lcZ(53,62,"footer-terms-condition")," "),t.xp6(2),t.Q6J("href",M.marketingUrl,t.LSH),t.xp6(1),t.hij(" ",t.lcZ(56,64,"marketing-page-title")," "),t.xp6(4),t.Q6J("ngForOf",M.paymentMethods),t.xp6(5),t.hij(" ",t.lcZ(65,66,"footer-about")," "),t.xp6(5),t.hij(" ",t.lcZ(70,68,"footer-privacy")," "),t.xp6(5),t.hij(" ",t.lcZ(75,70,"footer-terms")," "),t.xp6(4),t.AsE(" ",t.lcZ(79,72,"footer-copyright-before")," ",t.lcZ(80,74,"TYQOON Enterprises Pte Ltd")," "),t.xp6(4),t.hij(" ",t.lcZ(83,76,"footer-copyright-after")," "),t.xp6(5),t.hij(" v",M.version," "))},dependencies:[s.sg,i.Fo,l.yS,n.R,m.X$],styles:["[_nghost-%COMP%]{display:block;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}app-tyqoon-icon[_ngcontent-%COMP%]{display:block;height:60px}"],changeDetection:0}),g})()},18215:(b,p,e)=>{e.d(p,{Z:()=>m});var r=e(94650),a=e(68514),c=e(54463);function t(s,i){if(1&s){const l=r.EpF();r.TgZ(0,"div",0)(1,"button",1),r.NdJ("click",function(){const y=r.CHM(l).method,x=r.oxw();return r.KtG(x.handleBtnClick(y))}),r._UZ(2,"img",2),r.TgZ(3,"div",3),r._uU(4),r.ALo(5,"translate"),r.qZA()()()}2&s&&(r.xp6(4),r.Oqu(r.lcZ(5,1,"toolkit-official-button")))}let m=(()=>{class s{constructor(){}handleBtnClick(l){l(this.additionalData)}}return s.\u0275fac=function(l){return new(l||s)},s.\u0275cmp=r.Xpm({type:s,selectors:[["app-global-customer-service"]],inputs:{additionalData:"additionalData"},decls:2,vars:0,consts:[[1,"hidden","md:block","rounded-l-2xl","border-y","border-l","border-solid","border-[#e9e9e9]","py-4","px-2","bg-white","shadow-xl","absolute","right-0","w-16","transform","-translate-y-1/2",2,"z-index","999"],[1,"inline",3,"click"],["src","assets/images/toolkit-item1.png","alt","",1,"m-auto","h-10","mb-1"],[1,"text-xs","font-light","text-center"]],template:function(l,n){1&l&&(r.TgZ(0,"app-customer-service"),r.YNc(1,t,6,3,"ng-template"),r.qZA())},dependencies:[a.M,c.X$],styles:["[_nghost-%COMP%]{position:sticky;top:50%;right:0;z-index:100;display:block}"]}),s})()},45210:(b,p,e)=>{e.d(p,{B:()=>t});var r=e(15861),a=e(24837),c=e(94650);let t=(()=>{class m{constructor(i){this.el=i,this.myValue=!0,this.content=i.nativeElement}ngAfterViewInit(){var i=this;return(0,r.Z)(function*(){a.Z.isServer||(i.btn=document.createElement("button"),i.btn.innerHTML='\n    <svg class="icon__arrow-up" viewBox="0 0 24 24">\n      <title>Back to top</title>\n      <path d="M18.71,11.71a1,1,0,0,1-1.42,0L13,7.41V19a1,1,0,0,1-2,0V7.41l-4.29,4.3a1,1,0,0,1-1.42-1.42l6-6a1,1,0,0,1,1.42,0l6,6A1,1,0,0,1,18.71,11.71Z"/>\n    </svg>',i.btn.classList.add("back-to-top-btn"),i.btn.addEventListener("click",()=>{i.content.scrollToTop(500)}),document.body.appendChild(i.btn),i.el.nativeElement.append(i.btn))})()}onScroll(i){i.detail.scrollTop>200?this.btn.classList.add("show-btn"):this.btn.classList.remove("show-btn")}}return m.\u0275fac=function(i){return new(i||m)(c.Y36(c.SBq))},m.\u0275dir=c.lG2({type:m,selectors:[["","backToTopBtn",""]],hostVars:1,hostBindings:function(i,l){1&i&&c.NdJ("ionScroll",function(f){return l.onScroll(f)}),2&i&&c.Ikx("overflow-scroll",l.myValue)}}),m})()},49127:(b,p,e)=>{e.d(p,{H:()=>c});var r=e(24837),a=e(94650);let c=(()=>{class t{constructor(s){this.toolbar=s.nativeElement}ngAfterViewInit(){if(r.Z.isServer)return;const s=setInterval(()=>{if(this.toolbar.shadowRoot){let i=this.toolbar.shadowRoot.querySelector(".toolbar-container");i&&(i.style.contain="none",i.style.overflow="visible",clearInterval(s))}},500)}}return t.\u0275fac=function(s){return new(s||t)(a.Y36(a.SBq))},t.\u0275dir=a.lG2({type:t,selectors:[["","appOverflowVisible",""]]}),t})()}}]);