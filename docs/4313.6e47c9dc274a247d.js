"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[4313,9127],{24499:(T,h,e)=>{e.d(h,{c:()=>t});var n=e(5565),r=e(94650);const d=["header"];let t=(()=>{class m extends n.V{constructor(a,l){super(),this.element=a,this.renderer=l,this.lastScrollTop=0}onContentScroll(a){const l=a.detail.scrollTop;l>=50&&this.lastScrollTop<l?this.renderer.addClass(this.header.el,"top-toolbar-hide"):this.renderer.removeClass(this.header.el,"top-toolbar-hide"),this.lastScrollTop=l}}return m.\u0275fac=function(a){return new(a||m)(r.Y36(r.SBq),r.Y36(r.Qsj))},m.\u0275cmp=r.Xpm({type:m,selectors:[["ng-component"]],viewQuery:function(a,l){if(1&a&&r.Gf(d,5),2&a){let o;r.iGM(o=r.CRH())&&(l.header=o.first)}},features:[r.qOj],decls:0,vars:0,template:function(a,l){},encapsulation:2}),m})()},24313:(T,h,e)=>{e.r(h),e.d(h,{MemberModule:()=>F});var n=e(36895),r=e(24006),d=e(95133),t=e(54463),m=e(44466),s=e(81212),a=e(82722),l=e(24499),o=e(94650),x=e(56889),y=e(46032),C=e(52646),c=e(70957),f=e(49127),g=e(44336),v=e(38323),P=e(45210),w=e(18215),b=e(71832),Z=e(93426),u=e(93774);function A(i,M){if(1&i&&(o._uU(0),o.ALo(1,"translate")),2&i){const p=o.oxw().$implicit;o.Oqu(o.lcZ(1,1,p.name))}}function B(i,M){1&i&&(o.TgZ(0,"app-tab",15),o.YNc(1,A,2,3,"ng-template"),o.qZA()),2&i&&o.Q6J("link",M.$implicit.url)}function Y(i,M){if(1&i&&(o.TgZ(0,"div",12)(1,"app-tabs",13),o.YNc(2,B,2,1,"app-tab",14),o.qZA()()),2&i){const p=o.oxw();o.xp6(1),o.Q6J("matchOptions",p.matchOptions),o.xp6(1),o.Q6J("ngForOf",p.memberPageNavigation)}}const S=function(i){return{"!hidden":i}},I=[{path:"",pathMatch:"full",redirectTo:"my-wishlist"},{path:"",component:(()=>{class i extends l.c{constructor(p,O,D,L,R,J){super(p,O),this.router=D,this.platform=L,this.biddingService=R,this.cdr=J,this.hideFooter=!1,this.matchOptions={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},this.navList=[{url:"/member/my-orders/list",name:"account-menu-orders"},{url:"/member/my-wishlist",name:"account-menu-wishlist"},{url:"/member/store-credits",name:"account-menu-credits"},{url:"/member/aftersales/list",name:"account-menu-aftersales"},{url:"/member/profile",name:"account-menu-info"},{url:"/member/modify-payment-password",name:"order-payment-password"},{url:"/member/address/list",name:"account-menu-shipping"}],this.navListBiding=[{url:"/member/my-entries/list",name:"my-entries"},{url:"/member/my-pools/list",name:"my-pools"},{url:"/member/my-orders/list",name:"account-menu-orders"},{url:"/member/store-credits",name:"account-menu-credits"},{url:"/member/profile",name:"account-menu-info"},{url:"/member/address/list",name:"account-menu-shipping"}],this.router.events.subscribe(E=>{if(E instanceof s.m2){const U=E.url.split("?");this.hideFooter="/member/my-wishlist"!==U[0]&&"/member/store-credits"!==U[0]}})}ngOnInit(){this.biddingService.isBiddingMode$.pipe((0,a.R)(this.destroyStream$)).subscribe(p=>{this.memberPageNavigation=p?this.navListBiding:this.navList,this.cdr.detectChanges()})}}return i.\u0275fac=function(p){return new(p||i)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(s.F0),o.Y36(d.t4),o.Y36(x.g),o.Y36(o.sBO))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-member"]],features:[o.qOj],decls:16,vars:8,consts:[["scrollTop","","fullscreen","true","scrollEvents","true","backToTopBtn","",3,"ionScroll"],["id","member-product-toolbar","appOverflowVisible","",1,"sticky","top-0","shadow-lg","z-50"],["header",""],[3,"hideCart","hideSearch","hideLogo","hidePageName"],["class","member-tabs absolute left-3 hidden lg:flex pr-0",4,"ngIf"],[1,"bg-[#f3f3f3]"],[1,"tyqoon-container","flex","flex-row","px-0","sm:px-3","xl:px-4","pb-5","md:pb-0"],[1,"w-full","md:py-5","md:pt-0","flex","member-content-wrapper"],[1,"member-content","flex-1","md:mt-5"],[1,"hidden","sm:!block","bg-white",3,"ngClass"],[1,"mt-4","md:hidden"],["id","member-bottom-nav"],[1,"member-tabs","absolute","left-3","hidden","lg:flex","pr-0"],["customNavClass","bg-white w-[200px] bg-white custom-rounded sticky top-[15px]","direction","vertical","customTabClass","text-[15px]","customActiveTabClass","active",1,"pt-5","pr-5",3,"matchOptions"],[3,"link",4,"ngFor","ngForOf"],[3,"link"]],template:function(p,O){1&p&&(o.TgZ(0,"ion-content",0),o.NdJ("ionScroll",function(L){return O.onContentScroll(L)}),o._UZ(1,"app-global-customer-service"),o.TgZ(2,"ion-toolbar",1,2),o._UZ(4,"app-top-navbar",3)(5,"app-top-menu"),o.YNc(6,Y,3,2,"div",4),o.qZA(),o.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8),o._UZ(11,"router-outlet"),o.qZA()()(),o._UZ(12,"app-footer",9),o.qZA(),o._UZ(13,"app-new-year-dragons"),o.qZA(),o.TgZ(14,"ion-footer",10),o._UZ(15,"app-bottom-navbar",11),o.qZA()),2&p&&(o.xp6(4),o.Q6J("hideCart",!0)("hideSearch",!0)("hideLogo",!0)("hidePageName",!1),o.xp6(2),o.Q6J("ngIf",O.memberPageNavigation),o.xp6(6),o.Q6J("ngClass",o.VKq(6,S,O.hideFooter)))},dependencies:[n.mk,n.sg,n.O5,s.lC,y.K,C.c,c.V,f.H,g.n,v.i,P.B,w.Z,b.Y,d.W2,d.fr,d.sr,Z.p,u.z,t.X$],styles:[".pink-gradient[_ngcontent-%COMP%]{background:radial-gradient(#ffccf2,#fb85d5)}.purple-gradient[_ngcontent-%COMP%]{background:radial-gradient(#8874ff,#680df0)}.container-ratio[_ngcontent-%COMP%]{position:relative;width:100%;height:unset;padding-top:53.5%}ion-content[_ngcontent-%COMP%]{--background: #f3f3f3}@media only screen and (max-width: 344.9px){.hide-extra-small[_ngcontent-%COMP%]{display:none!important}.big-slide-wrapper[_ngcontent-%COMP%]{width:100%}.container-ratio[_ngcontent-%COMP%]{min-height:100%}}.icon-image[_ngcontent-%COMP%]{width:50px;max-width:58%}@media (min-width: 340px){.icon-image[_ngcontent-%COMP%]{width:80px}}@media (min-width: 640px){.icon-image[_ngcontent-%COMP%]{width:120px;max-width:44%}}@media (min-width: 768px){.member-content-wrapper[_ngcontent-%COMP%]{min-height:500px}}[_nghost-%COMP%]     .home-swiper   .swiper-wrapper{margin-left:-.125rem;margin-right:-.125rem}@media only screen and (min-width: 279px){[_nghost-%COMP%]     .home-swiper   .swiper-wrapper{margin-left:-.25rem;margin-right:-.25rem}}[_nghost-%COMP%]     .home-swiper   .swiper-slide{width:120px;flex-shrink:0;padding-left:.125rem;padding-right:.125rem}@media only screen and (min-width: 260px){[_nghost-%COMP%]     .home-swiper   .swiper-slide{padding-left:.25rem;padding-right:.25rem}}@media (min-width: 768px){[_nghost-%COMP%]     .home-swiper   .swiper-slide{width:20%}}@media (min-width: 1024px){[_nghost-%COMP%]     .home-swiper   .swiper-slide{width:14.2857142857%}}@media (min-width: 1280px){[_nghost-%COMP%]     .home-swiper   .swiper-slide{width:14.2857142857%}}[_nghost-%COMP%]     .home-swiper   .swiper-slide app-product-card .product-title, [_nghost-%COMP%]     .home-swiper   .swiper-slide app-product-card-skeleton .product-title{height:24px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}  .text-extra-small{font-size:10px}ion-toolbar[appOverflowVisible][_ngcontent-%COMP%]{contain:none}.member-content[_ngcontent-%COMP%]{width:100%}@media (min-width: 1024px){.member-content[_ngcontent-%COMP%]{margin-left:220px;width:calc(100% - 220px)}}@media (min-width: 1280px){.member-tabs[_ngcontent-%COMP%]{left:calc((100vw - 1124px)/2)}}@media (min-width: 1440px){.member-tabs[_ngcontent-%COMP%]{left:calc((100vw - 1316px)/2)}}"]}),i})(),children:[{path:"my-pools",loadChildren:()=>Promise.all([e.e(4853),e.e(8592),e.e(4971)]).then(e.bind(e,95031)).then(i=>i.PoolsModule)},{path:"my-entries",loadChildren:()=>Promise.all([e.e(4853),e.e(8592),e.e(1210)]).then(e.bind(e,26925)).then(i=>i.BiddingEntriesModule)},{path:"my-orders",loadChildren:()=>Promise.all([e.e(5439),e.e(4853),e.e(9501),e.e(2655)]).then(e.bind(e,99501)).then(i=>i.OrdersModule)},{path:"store-credits",loadChildren:()=>Promise.all([e.e(9277),e.e(4007),e.e(6227),e.e(9172),e.e(2055),e.e(2495),e.e(3985),e.e(8592),e.e(3352)]).then(e.bind(e,83352)).then(i=>i.CreditModule)},{path:"my-wishlist",loadChildren:()=>e.e(5372).then(e.bind(e,25372)).then(i=>i.WishlistModule)},{path:"aftersales",loadChildren:()=>Promise.all([e.e(6104),e.e(4853),e.e(8592),e.e(8605)]).then(e.bind(e,28605)).then(i=>i.AfterSalesModule)},{path:"modify-payment-password",loadChildren:()=>Promise.all([e.e(9053),e.e(8592),e.e(8363)]).then(e.bind(e,78363)).then(i=>i.PaymentPasswordModule)},{path:"address",loadChildren:()=>Promise.all([e.e(9172),e.e(4045)]).then(e.bind(e,94045)).then(i=>i.ShippingAddressModule)},{path:"profile",loadChildren:()=>Promise.all([e.e(9277),e.e(6104),e.e(4007),e.e(9053),e.e(4620),e.e(8592),e.e(9471)]).then(e.bind(e,49471)).then(i=>i.AccountInfoModule)}]}];let N=(()=>{class i{}return i.\u0275fac=function(p){return new(p||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[s.Bz.forChild(I),s.Bz]}),i})();var j=e(1241);let F=(()=>{class i{}return i.\u0275fac=function(p){return new(p||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[n.ez,N,m.m,r.u5,d.Pc,t.aw,j.x]}),i})()},52646:(T,h,e)=>{e.d(h,{c:()=>w});var n=e(40866);const r={ALIPAY:{image:"assets/images/payment-alipay-dark-min.png",displayText:"Alipay"},WECHAT:{image:"assets/images/payment-wechatpay-dark-min.png",displayText:"WeChat"},VISA_MASTER_AMEX:{image:"assets/images/payment-vise-master-amex-min.png",displayText:"Visa, Mastercard and American Express"}},d=[r.ALIPAY,r.WECHAT,r.VISA_MASTER_AMEX];var t=e(94650),m=e(54463),s=e(36895),a=e(95133),l=e(81212),o=e(93860);function x(b,Z){if(1&b&&t._UZ(0,"img",29),2&b){const u=Z.$implicit;t.Q6J("src",u.image,t.LSH)("alt",u.displayText)}}const y=function(){return["/products"]},C=function(){return["/cart"]},c=function(){return["/auth/login"]},f=function(){return["/auth/register"]},g=function(){return["/member/profile"]},v=function(){return["/member/store-credits"]},P=function(){return["/member/my-orders"]};let w=(()=>{class b{constructor(u){this.i18n=u,this.paymentMethods=d,this.version=n.Ji,this.marketingUrl="https://about.tyqoon.co/marketing-resources"}ngOnInit(){this.setMarketingUrl(),this.i18n.onLangChange.subscribe(u=>{this.setMarketingUrl()})}setMarketingUrl(){switch(this.i18n.currentLang){case"cn":this.marketingUrl="https://about.tyqoon.co/marketing-resources/?lang=zh-hans";break;case"tr":this.marketingUrl="https://about.tyqoon.co/marketing-resources/?lang=zh-hant";break;default:this.marketingUrl="https://about.tyqoon.co/marketing-resources"}}}return b.\u0275fac=function(u){return new(u||b)(t.Y36(m.sK))},b.\u0275cmp=t.Xpm({type:b,selectors:[["app-footer"]],decls:91,vars:88,consts:[[1,"tyqoon-container","flex","flex-col","md:flex-row","py-4","xs:py-6"],[1,"flex","flex-col","items-center","justify-center","lg:items-start","md:pr-6","mb-4"],[1,"block","mb-3",3,"revealHiddenOption"],[1,"text-[14px]","leading-[24px]","w-full","max-w-[300px]","text-center","lg:text-[16px]","lg:text-left"],[1,"grid","grid-cols-2","md:grid-cols-3","xl:grid-cols-4","mt-4","md:mt-0","flex-1","px-2"],[1,"flex","flex-col"],[1,"text-[28px]","font-medium","mb-5"],[1,"flex","flex-col","space-y-1"],[1,"text-[#666666]","text-[14px]","lg:text-[18px]",3,"routerLink"],["href","https://about.tyqoon.co/faq/","target","_blank","rel","noreferrer noopener",1,"text-[#666666]","text-[14px]","lg:text-[18px]"],["href","https://about.tyqoon.co/terms-conditions/","target","_blank","rel","noreferrer noopener",1,"text-[#666666]","text-[14px]","lg:text-[18px]"],["target","_blank","rel","noreferrer noopener",1,"text-[#666666]","text-[14px]","lg:text-[18px]",3,"href"],[1,"mx-1","xs:mx-2","md:mx-auto","grid","grid-cols-3","items-center","gap-8","md:flex","md:justify-between","tyqoon-container","py-5","bg-white"],["src","assets/images/Singapore_Fintech_Association_75px-min.png","srcset","\n      assets/images/Singapore-Fintech-Association-75px-min.png  1x,\n      assets/images/Singapore-Fintech-Association-150px-min.png 2x\n    ","alt","Singapore Fintech Association",1,"col-span-3","h-[75px]","mx-auto","md:mx-0","md:h-[25px]","lg:h-[40px]"],["loading","lazy","class","w-full h-auto md:w-auto md:h-[25px] lg:h-[40px]",3,"src","alt",4,"ngFor","ngForOf"],[1,"bg-[#282828]"],[1,"flex","flex-col","justify-center","items-center","tyqoon-container","py-5","sm:mb-0","xs:mb-5","space-y-4"],[1,"flex","items-center","space-x-1"],["href","https://about.tyqoon.co/?lang=en","target","_blank","rel","noreferrer noopener",1,"text-[#7a7a7a]","text-sm","lg:text-lg"],[1,"text-[#7a7a7a]","text-sm","lg:text-lg"],["href","https://about.tyqoon.co/privacy-policy?lang=en","target","_blank","rel","noreferrer noopener",1,"text-[#7a7a7a]","text-sm","lg:text-lg"],["href","https://about.tyqoon.co/terms-conditions?lang=en","target","_blank","rel","noreferrer noopener",1,"text-[#7a7a7a]","text-sm","lg:text-lg"],[1,"flex","relative"],[1,"text-white","text-xs","text-center"],[1,"sm:hidden","xs:block"],["href","https://beian.miit.gov.cn/","target","_blank","rel","noreferrer noopener",1,"text-white","text-xs"],[1,"text-[#7a7a7a]","text-xs","ml-2","sm:ml-0"],["href","https://wap.scjgj.sh.gov.cn/businessCheck/verifKey.do?showType=extShow&serial=9031000020230117140829000010018823-SAIC_SHOW_310000-b5013f94bdef4040907b9328b1036023655&signData=MEYCIQCg7sSXzdbUGpbzoVdompOHtJBZ65mIDwuq7Y8I6YMxmwIhAI/yGhuTBkWthueA5VUaGMe4Fk5wGoPW1dDZuvSYLzY7","target","__blank",1,"inline-block"],["src","assets/images/footer-logo.png","alt","",1,"h-6","inline-block","ml-0.5"],["loading","lazy",1,"w-full","h-auto","md:w-auto","md:h-[25px]","lg:h-[40px]",3,"src","alt"]],template:function(u,A){1&u&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-tyqoon-icon",2),t.TgZ(3,"p",3),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"h4",6),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"div",7)(12,"a",8),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"a",8),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"a",8),t._uU(19),t.ALo(20,"translate"),t.qZA()()(),t.TgZ(21,"div",5)(22,"h4",6),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.TgZ(25,"div",7)(26,"a",8),t._uU(27),t.ALo(28,"translate"),t.qZA(),t.TgZ(29,"a",8),t._uU(30),t.ALo(31,"translate"),t.qZA(),t.TgZ(32,"a",8),t._uU(33),t.ALo(34,"translate"),t.qZA(),t.TgZ(35,"a",8),t._uU(36),t.ALo(37,"translate"),t.qZA(),t.TgZ(38,"a",8),t._uU(39),t.ALo(40,"translate"),t.qZA()()(),t.TgZ(41,"div",5)(42,"h4",6),t._uU(43),t.ALo(44,"translate"),t.qZA(),t.TgZ(45,"div",7)(46,"a",8),t._uU(47),t.ALo(48,"translate"),t.qZA(),t.TgZ(49,"a",9),t._uU(50),t.ALo(51,"translate"),t.qZA(),t.TgZ(52,"a",10),t._uU(53),t.ALo(54,"translate"),t.qZA(),t.TgZ(55,"a",11),t._uU(56),t.ALo(57,"translate"),t.qZA()()()()(),t.TgZ(58,"div",12),t._UZ(59,"img",13),t.YNc(60,x,1,2,"img",14),t.qZA(),t.TgZ(61,"div",15)(62,"div",16)(63,"div",17)(64,"a",18),t._uU(65),t.ALo(66,"translate"),t.qZA(),t.TgZ(67,"p",19),t._uU(68,"|"),t.qZA(),t.TgZ(69,"a",20),t._uU(70),t.ALo(71,"translate"),t.qZA(),t.TgZ(72,"p",19),t._uU(73,"|"),t.qZA(),t.TgZ(74,"a",21),t._uU(75),t.ALo(76,"translate"),t.qZA()(),t.TgZ(77,"div",22)(78,"p",23),t._uU(79),t.ALo(80,"translate"),t.ALo(81,"translate"),t._UZ(82,"br",24),t._uU(83),t.ALo(84,"translate"),t.TgZ(85,"a",25),t._uU(86,"\u6caaICP\u59072022027392\u53f7-2 "),t.qZA(),t.TgZ(87,"span",26),t._uU(88),t.qZA(),t.TgZ(89,"a",27),t._UZ(90,"img",28),t.qZA()()()()()),2&u&&(t.xp6(2),t.Q6J("revealHiddenOption",!1),t.xp6(2),t.hij(" ",t.lcZ(5,35,"footer-description")," "),t.xp6(5),t.hij(" ",t.lcZ(10,37,"footer-title-shop")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(79,y)),t.xp6(1),t.hij(" ",t.lcZ(14,39,"footer-start-shopping")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(80,C)),t.xp6(1),t.hij(" ",t.lcZ(17,41,"footer-cart")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(81,C)),t.xp6(1),t.hij(" ",t.lcZ(20,43,"footer-checkout")," "),t.xp6(4),t.hij(" ",t.lcZ(24,45,"footer-title-account")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(82,c)),t.xp6(1),t.hij(" ",t.lcZ(28,47,"footer-login")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(83,f)),t.xp6(1),t.hij(" ",t.lcZ(31,49,"register-page-title")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(84,g)),t.xp6(1),t.hij(" ",t.lcZ(34,51,"footer-account")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(85,v)),t.xp6(1),t.hij(" ",t.lcZ(37,53,"gift-codes")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(86,v)),t.xp6(1),t.hij(" ",t.lcZ(40,55,"account-menu-credits")," "),t.xp6(4),t.hij(" ",t.lcZ(44,57,"footer-title-help")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(87,P)),t.xp6(1),t.hij(" ",t.lcZ(48,59,"footer-return")," "),t.xp6(3),t.hij(" ",t.lcZ(51,61,"footer-help")," "),t.xp6(3),t.hij(" ",t.lcZ(54,63,"footer-terms-condition")," "),t.xp6(2),t.Q6J("href",A.marketingUrl,t.LSH),t.xp6(1),t.hij(" ",t.lcZ(57,65,"marketing-page-title")," "),t.xp6(4),t.Q6J("ngForOf",A.paymentMethods),t.xp6(5),t.hij(" ",t.lcZ(66,67,"footer-about")," "),t.xp6(5),t.hij(" ",t.lcZ(71,69,"footer-privacy")," "),t.xp6(5),t.hij(" ",t.lcZ(76,71,"footer-terms")," "),t.xp6(4),t.AsE(" ",t.lcZ(80,73,"footer-copyright-before")," ",t.lcZ(81,75,"TYQOON Enterprises Pte Ltd")," "),t.xp6(4),t.hij(" ",t.lcZ(84,77,"footer-copyright-after")," "),t.xp6(5),t.hij(" v",A.version," "))},dependencies:[s.sg,a.Fo,l.yS,o.R,m.X$],styles:["[_nghost-%COMP%]{display:block;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}app-tyqoon-icon[_ngcontent-%COMP%]{display:block;height:60px}"],changeDetection:0}),b})()},18215:(T,h,e)=>{e.d(h,{Z:()=>m});var n=e(94650),r=e(68514),d=e(54463);function t(s,a){if(1&s){const l=n.EpF();n.TgZ(0,"div",0)(1,"button",1),n.NdJ("click",function(){const y=n.CHM(l).method,C=n.oxw();return n.KtG(C.handleBtnClick(y))}),n._UZ(2,"img",2),n.TgZ(3,"div",3),n._uU(4),n.ALo(5,"translate"),n.qZA()()()}2&s&&(n.xp6(4),n.Oqu(n.lcZ(5,1,"toolkit-official-button")))}let m=(()=>{class s{constructor(){}handleBtnClick(l){l(this.additionalData)}}return s.\u0275fac=function(l){return new(l||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-global-customer-service"]],inputs:{additionalData:"additionalData"},decls:2,vars:0,consts:[[1,"hidden","md:block","rounded-l-2xl","border-y","border-l","border-solid","border-[#e9e9e9]","py-4","px-2","bg-white","shadow-xl","absolute","right-0","w-16","transform","-translate-y-1/2",2,"z-index","999"],[1,"inline",3,"click"],["src","assets/images/toolkit-item1.png","alt","",1,"m-auto","h-10","mb-1"],[1,"text-xs","font-light","text-center"]],template:function(l,o){1&l&&(n.TgZ(0,"app-customer-service"),n.YNc(1,t,6,3,"ng-template"),n.qZA())},dependencies:[r.M,d.X$],styles:["[_nghost-%COMP%]{position:sticky;top:50%;right:0;z-index:100;display:block}"]}),s})()},71832:(T,h,e)=>{e.d(h,{Y:()=>C});var n=e(94650),r=e(56889),d=e(6074),t=e(36895);function m(c,f){1&c&&n._UZ(0,"img",6)}function s(c,f){1&c&&n._UZ(0,"img",7)}function a(c,f){if(1&c&&(n.ynx(0),n.YNc(1,m,1,0,"img",4),n.YNc(2,s,1,0,"img",5),n.BQk()),2&c){const g=n.oxw(2);n.xp6(1),n.Q6J("ngIf",g.showLeft),n.xp6(1),n.Q6J("ngIf",g.showRight)}}function l(c,f){1&c&&n._UZ(0,"img",10)}function o(c,f){1&c&&n._UZ(0,"img",11)}function x(c,f){if(1&c&&(n.YNc(0,l,1,0,"img",8),n.YNc(1,o,1,0,"img",9)),2&c){const g=n.oxw(2);n.Q6J("ngIf",g.showLeft),n.xp6(1),n.Q6J("ngIf",g.showRight)}}function y(c,f){if(1&c&&(n.TgZ(0,"div",1),n.YNc(1,a,3,2,"ng-container",2),n.ALo(2,"async"),n.YNc(3,x,2,2,"ng-template",null,3,n.W1O),n.qZA()),2&c){const g=n.MAs(4),v=n.oxw();n.xp6(1),n.Q6J("ngIf",n.lcZ(2,2,v.biddingService.isBiddingMode$))("ngIfElse",g)}}let C=(()=>{class c{constructor(g,v){this.biddingService=g,this.themeService=v,this.showLeft=!0,this.showRight=!0}}return c.\u0275fac=function(g){return new(g||c)(n.Y36(r.g),n.Y36(d.f))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-new-year-dragons"]],inputs:{showLeft:"showLeft",showRight:"showRight"},decls:1,vars:1,consts:[["class","flex w-full justify-between z-100",4,"ngIf"],[1,"flex","w-full","justify-between","z-100"],[4,"ngIf","ngIfElse"],["shoppingMode",""],["class","left bidding hidden xl:block absolute h-auto dragon-jumping","src","/assets/images/new-year/Mascot-CNY-2024-1.png","alt","Bidding",4,"ngIf"],["class","right bidding hidden xl:block absolute h-auto dragon-scaling","style","--distance: 2px","src","/assets/images/new-year/Mascot-CNY-2024-2.png","alt","Bidding",4,"ngIf"],["src","/assets/images/new-year/Mascot-CNY-2024-1.png","alt","Bidding",1,"left","bidding","hidden","xl:block","absolute","h-auto","dragon-jumping"],["src","/assets/images/new-year/Mascot-CNY-2024-2.png","alt","Bidding",1,"right","bidding","hidden","xl:block","absolute","h-auto","dragon-scaling",2,"--distance","2px"],["class","left shopping hidden xl:block absolute h-auto dragon-scaling","style","--distance: -2px","src","/assets/images/new-year/Mascot-CNY-2024-3.png","alt","Bidding",4,"ngIf"],["class","right shopping hidden xl:block absolute h-auto dragon-jumping","src","/assets/images/new-year/Mascot-CNY-2024-4.png","alt","Bidding",4,"ngIf"],["src","/assets/images/new-year/Mascot-CNY-2024-3.png","alt","Bidding",1,"left","shopping","hidden","xl:block","absolute","h-auto","dragon-scaling",2,"--distance","-2px"],["src","/assets/images/new-year/Mascot-CNY-2024-4.png","alt","Bidding",1,"right","shopping","hidden","xl:block","absolute","h-auto","dragon-jumping"]],template:function(g,v){1&g&&n.YNc(0,y,5,4,"div",0),2&g&&n.Q6J("ngIf",v.themeService.isNewYearMode)},dependencies:[t.O5,t.Ov],styles:["[_nghost-%COMP%]{pointer-events:none;-webkit-user-select:none;user-select:none;z-index:1;position:absolute;top:140px;width:100%;max-width:2000px;margin:auto;left:0;right:0;min-height:calc(100vh - 140px)}.shopping.left[_ngcontent-%COMP%]{max-width:350px;bottom:13%}@media (min-width: 1280px){.shopping.left[_ngcontent-%COMP%]{width:calc(50vw - 545px);margin-left:-12px}}@media (min-width: 1440px){.shopping.left[_ngcontent-%COMP%]{width:calc(50vw - 615px);margin-left:-40px}}.shopping.right[_ngcontent-%COMP%]{max-width:330px;top:0;right:0}@media (min-width: 1280px){.shopping.right[_ngcontent-%COMP%]{width:calc(50vw - 545px);margin-right:-12px}}@media (min-width: 1440px){.shopping.right[_ngcontent-%COMP%]{width:calc(50vw - 620px);margin-right:-35px}}.bidding.left[_ngcontent-%COMP%]{max-width:370px;top:5px}@media (min-width: 1280px){.bidding.left[_ngcontent-%COMP%]{width:calc(50vw - 528px);margin-left:-30px}}@media (min-width: 1440px){.bidding.left[_ngcontent-%COMP%]{width:calc(50vw - 595px);margin-left:-65px}}.bidding.right[_ngcontent-%COMP%]{max-width:340px;bottom:3%;right:0}@media (min-width: 1280px){.bidding.right[_ngcontent-%COMP%]{width:calc(50vw - 545px);margin-right:-12px}}@media (min-width: 1440px){.bidding.right[_ngcontent-%COMP%]{width:calc(50vw - 625px);margin-right:-40px}}.dragon-jumping[_ngcontent-%COMP%]{animation:3s dragon-jumping 2s linear forwards infinite}@keyframes dragon-jumping{0%{transform:translateY(0)}25%{transform:translateY(-10px)}50%{transform:translateY(0)}to{transform:translateY(0)}}.dragon-scaling[_ngcontent-%COMP%]{animation:6s dragon-scaling 4s linear forwards infinite}@keyframes dragon-scaling{0%{transform:scale(1)}15%{transform:scale(1.05) translateY(-3px) translate(var(--distance))}30%{transform:scale(1)}to{transform:scale(1)}}"]}),c})()},45210:(T,h,e)=>{e.d(h,{B:()=>t});var n=e(15861),r=e(24837),d=e(94650);let t=(()=>{class m{constructor(a){this.el=a,this.myValue=!0,this.content=a.nativeElement}ngAfterViewInit(){var a=this;return(0,n.Z)(function*(){r.Z.isServer||(a.btn=document.createElement("button"),a.btn.innerHTML='\n    <svg class="icon__arrow-up" viewBox="0 0 24 24">\n      <title>Back to top</title>\n      <path d="M18.71,11.71a1,1,0,0,1-1.42,0L13,7.41V19a1,1,0,0,1-2,0V7.41l-4.29,4.3a1,1,0,0,1-1.42-1.42l6-6a1,1,0,0,1,1.42,0l6,6A1,1,0,0,1,18.71,11.71Z"/>\n    </svg>',a.btn.classList.add("back-to-top-btn"),a.btn.addEventListener("click",()=>{a.content.scrollToTop(500)}),document.body.appendChild(a.btn),a.el.nativeElement.append(a.btn))})()}onScroll(a){a.detail.scrollTop>200?this.btn.classList.add("show-btn"):this.btn.classList.remove("show-btn")}}return m.\u0275fac=function(a){return new(a||m)(d.Y36(d.SBq))},m.\u0275dir=d.lG2({type:m,selectors:[["","backToTopBtn",""]],hostVars:1,hostBindings:function(a,l){1&a&&d.NdJ("ionScroll",function(x){return l.onScroll(x)}),2&a&&d.Ikx("overflow-scroll",l.myValue)}}),m})()},49127:(T,h,e)=>{e.d(h,{H:()=>d});var n=e(24837),r=e(94650);let d=(()=>{class t{constructor(s){this.toolbar=s.nativeElement}ngAfterViewInit(){if(n.Z.isServer)return;const s=setInterval(()=>{if(this.toolbar.shadowRoot){let a=this.toolbar.shadowRoot.querySelector(".toolbar-container");a&&(a.style.contain="none",a.style.overflow="visible",clearInterval(s))}},100)}}return t.\u0275fac=function(s){return new(s||t)(r.Y36(r.SBq))},t.\u0275dir=r.lG2({type:t,selectors:[["","appOverflowVisible",""]]}),t})()},70957:(T,h,e)=>{e.d(h,{V:()=>m});var n=e(36895),r=e(94650),d=e(81212),t=e(95133);let m=(()=>{class s{constructor(l,o,x){this.content=l,this.router=o,this.platformId=x,(0,n.NF)(this.platformId)&&(this.subscription=this.router.events.subscribe(y=>{y instanceof d.m2&&this.content.scrollToTop(500)}))}ngOnDestroy(){this.subscription?.unsubscribe()}}return s.\u0275fac=function(l){return new(l||s)(r.Y36(t.W2),r.Y36(d.F0),r.Y36(r.Lbi))},s.\u0275dir=r.lG2({type:s,selectors:[["","scrollTop",""]]}),s})()}}]);