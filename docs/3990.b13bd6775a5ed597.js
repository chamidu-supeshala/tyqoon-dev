"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[3990],{24499:(f,u,e)=>{e.d(u,{c:()=>t});var d=e(5565),n=e(94650);const l=["header"];let t=(()=>{class i extends d.V{constructor(o,r){super(),this.element=o,this.renderer=r,this.lastScrollTop=0}ionViewWillEnter(){this.renderer.setStyle(this.header.el,"webkitTransition","transform 700ms")}onContentScroll(o){const r=o.detail.scrollTop;r>=50&&this.lastScrollTop<r?this.renderer.addClass(this.header.el,"top-toolbar-hide"):this.renderer.removeClass(this.header.el,"top-toolbar-hide"),this.lastScrollTop=r}}return i.\u0275fac=function(o){return new(o||i)(n.Y36(n.SBq),n.Y36(n.Qsj))},i.\u0275cmp=n.Xpm({type:i,selectors:[["ng-component"]],viewQuery:function(o,r){if(1&o&&n.Gf(l,5),2&o){let g;n.iGM(g=n.CRH())&&(r.header=g.first)}},features:[n.qOj],decls:0,vars:0,template:function(o,r){},encapsulation:2}),i})()},36635:(f,u,e)=>{e.d(u,{Q:()=>i});var d=e(54004),n=e(92340),l=e(94650),t=e(80529);let i=(()=>{class s{constructor(r){this.http=r}getVerifyCode(r){return this.http.get(`${n.N.BASE_URL}/user/basic/getVerifyCode`,{params:{type:r}}).pipe((0,d.U)(g=>g.data))}login(r){return this.http.post(`${n.N.BASE_URL}/user/basic/login`,r,{observe:"response"})}loginByMobilePhone(r){return this.http.post(`${n.N.BASE_URL}/user/basic/loginByMobilePhone`,r,{observe:"response"})}queryMobileSms(r,g){return this.http.post(`${n.N.BASE_URL}/user/basic/queryMobileSms`,r,{headers:g})}registerV2(r){return this.http.post(`${n.N.BASE_URL}/user/basic/register_v2`,r)}SendEmailVerifyCodeParam(r){return this.http.post(`${n.N.BASE_URL}/user/basic/sendEmail`,r)}}return s.\u0275fac=function(r){return new(r||s)(l.LFG(t.eN))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac}),s})()},23990:(f,u,e)=>{e.r(u),e.d(u,{AuthModule:()=>E});var d=e(36895),n=e(7507),l=e(24499),t=e(94650),i=e(95133),s=e(52313),o=e(52646),r=e(5068),g=e(70957),m=e(49127),x=e(45210);const y=[{path:"",component:(()=>{class a extends l.c{constructor(p,h){super(p,h)}ngOnInit(){}}return a.\u0275fac=function(p){return new(p||a)(t.Y36(t.SBq),t.Y36(t.Qsj))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-auth"]],features:[t.qOj],decls:8,vars:2,consts:[["scrollTop","","fullscreen","true","scrollEvents","true","backToTopBtn","",3,"ionScroll"],["appOverflowVisible","",1,"sticky","top-0","shadow-lg","z-50"],["header",""],[3,"hideBackButton","hideMenu"],[1,"flex","flex-col"]],template:function(p,h){1&p&&(t.TgZ(0,"ion-content",0),t.NdJ("ionScroll",function(L){return h.onContentScroll(L)}),t.TgZ(1,"ion-toolbar",1,2),t._UZ(3,"app-top-navbar",3)(4,"app-top-menu"),t.qZA(),t.TgZ(5,"div",4),t._UZ(6,"router-outlet"),t.qZA(),t._UZ(7,"app-footer"),t.qZA()),2&p&&(t.xp6(3),t.Q6J("hideBackButton",!0)("hideMenu",!1))},dependencies:[n.lC,i.W2,i.sr,s.p,o.c,r.z,g.V,m.H,x.B],styles:["ion-toolbar[appOverflowVisible][_ngcontent-%COMP%]{contain:none}"]}),a})(),children:[{path:"login",loadChildren:()=>Promise.all([e.e(9053),e.e(8592),e.e(510)]).then(e.bind(e,10510)).then(a=>a.LoginModule)},{path:"register",loadChildren:()=>Promise.all([e.e(9053),e.e(8592),e.e(9347)]).then(e.bind(e,29347)).then(a=>a.RegisterModule)},{path:"forgotPassword",loadChildren:()=>Promise.all([e.e(9053),e.e(8592),e.e(9688)]).then(e.bind(e,69688)).then(a=>a.ForgotPasswordModule)}]}];let Z=(()=>{class a{}return a.\u0275fac=function(p){return new(p||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[n.Bz.forChild(y),n.Bz]}),a})();var M=e(44466),v=e(36635);let E=(()=>{class a{}return a.\u0275fac=function(p){return new(p||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[v.Q],imports:[d.ez,Z,i.Pc,M.m]}),a})()},52646:(f,u,e)=>{e.d(u,{c:()=>a});var d=e(40866);const n={CRYPTO:{image:"assets/images/payment-crypto-min.png",displayText:"Bitcoin, Ethereum and Tether"},ALIPAY:{image:"assets/images/payment-alipay-dark-min.png",displayText:"Alipay"},WECHAT:{image:"assets/images/payment-wechatpay-dark-min.png",displayText:"WeChat"},VISA_MASTER_AMEX:{image:"assets/images/payment-vise-master-amex-min.png",displayText:"Visa, Mastercard and American Express"}},l=[n.CRYPTO,n.ALIPAY,n.WECHAT,n.VISA_MASTER_AMEX];var t=e(94650),i=e(54463),s=e(36895),o=e(95133),r=e(7507),g=e(93860);function m(c,p){if(1&c&&t._UZ(0,"img",26),2&c){const h=p.$implicit;t.Q6J("src",h.image,t.LSH)("alt",h.displayText)}}const x=function(){return["/products"]},T=function(){return["/cart"]},y=function(){return["/auth/login"]},Z=function(){return["/auth/register"]},M=function(){return["/member/profile"]},v=function(){return["/member/store-credits"]},E=function(){return["/member/my-orders"]};let a=(()=>{class c{constructor(h){this.i18n=h,this.paymentMethods=l,this.version=d.J,this.marketingUrl="https://about.tyqoon.co/marketing-resources"}ngOnInit(){this.setMarketingUrl(),this.i18n.onLangChange.subscribe(h=>{this.setMarketingUrl()})}setMarketingUrl(){switch(this.i18n.currentLang){case"cn":this.marketingUrl="https://about.tyqoon.co/marketing-resources/?lang=zh-hans";break;case"tr":this.marketingUrl="https://about.tyqoon.co/marketing-resources/?lang=zh-hant";break;default:this.marketingUrl="https://about.tyqoon.co/marketing-resources"}}}return c.\u0275fac=function(h){return new(h||c)(t.Y36(i.sK))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-footer"]],decls:88,vars:87,consts:[[1,"tyqoon-container","grid","grid-cols-2","p-4","sm:p-3","xs:p-6","gap-5","bg-white","md:grid-cols-5"],[1,"flex","flex-col","col-span-2","items-center","justify-center","lg:items-start"],[1,"block","mb-3"],[1,"text-[14px]","leading-[24px]","w-full","max-w-[300px]","text-center","lg:text-[16px]","lg:text-left"],[1,"flex","flex-col"],[1,"text-[28px]","font-medium","mb-5"],[1,"flex","flex-col","space-y-1"],[1,"text-[#666666]","text-[14px]","lg:text-[18px]",3,"routerLink"],["href","https://about.tyqoon.co/faq/","target","_blank","rel","noreferrer noopener",1,"text-[#666666]","text-[14px]","lg:text-[18px]"],["href","https://about.tyqoon.co/terms-conditions/","target","_blank","rel","noreferrer noopener",1,"text-[#666666]","text-[14px]","lg:text-[18px]"],["target","_blank","rel","noreferrer noopener",1,"text-[#666666]","text-[14px]","lg:text-[18px]",3,"href"],[1,"grid","grid-cols-4","gap-8","md:flex","md:justify-between","md:items-center","tyqoon-container","py-5","bg-white"],["src","assets/images/Singapore_Fintech_Association_75px-min.png","srcset","\n      assets/images/Singapore-Fintech-Association-75px-min.png  1x,\n      assets/images/Singapore-Fintech-Association-150px-min.png 2x\n    ","alt","Singapore Fintech Association",1,"col-span-4","h-[75px]","mx-auto","md:mx-0","md:h-[25px]","lg:h-[40px]"],["loading","lazy","class","w-full h-auto md:w-auto md:h-[25px] lg:h-[40px]",3,"src","alt",4,"ngFor","ngForOf"],[1,"bg-[#282828]"],[1,"flex","flex-col","justify-center","items-center","tyqoon-container","py-5","sm:mb-0","xs:mb-5","space-y-4"],[1,"flex","items-center","space-x-1"],["href","https://about.tyqoon.co/?lang=en","target","_blank","rel","noreferrer noopener",1,"text-[#7a7a7a]","text-sm","lg:text-lg"],[1,"text-[#7a7a7a]","text-sm","lg:text-lg"],["href","https://about.tyqoon.co/privacy-policy?lang=en","target","_blank","rel","noreferrer noopener",1,"text-[#7a7a7a]","text-sm","lg:text-lg"],["href","https://about.tyqoon.co/terms-conditions?lang=en","target","_blank","rel","noreferrer noopener",1,"text-[#7a7a7a]","text-sm","lg:text-lg"],[1,"flex","relative"],[1,"text-white","text-xs","text-center"],[1,"sm:hidden","xs:block"],["href","https://beian.miit.gov.cn/","target","_blank","rel","noreferrer noopener",1,"text-white","text-xs"],[1,"text-[#7a7a7a]","text-xs","ml-2","sm:ml-0","sm:absolute","sm:top-0","sm:left-[101%]"],["loading","lazy",1,"w-full","h-auto","md:w-auto","md:h-[25px]","lg:h-[40px]",3,"src","alt"]],template:function(h,A){1&h&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-tyqoon-icon",2),t.TgZ(3,"p",3),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"div",4)(7,"h4",5),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"div",6)(11,"a",7),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"a",7),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"a",7),t._uU(18),t.ALo(19,"translate"),t.qZA()()(),t.TgZ(20,"div",4)(21,"h4",5),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.TgZ(24,"div",6)(25,"a",7),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"a",7),t._uU(29),t.ALo(30,"translate"),t.qZA(),t.TgZ(31,"a",7),t._uU(32),t.ALo(33,"translate"),t.qZA(),t.TgZ(34,"a",7),t._uU(35),t.ALo(36,"translate"),t.qZA(),t.TgZ(37,"a",7),t._uU(38),t.ALo(39,"translate"),t.qZA()()(),t.TgZ(40,"div",4)(41,"h4",5),t._uU(42),t.ALo(43,"translate"),t.qZA(),t.TgZ(44,"div",6)(45,"a",7),t._uU(46),t.ALo(47,"translate"),t.qZA(),t.TgZ(48,"a",8),t._uU(49),t.ALo(50,"translate"),t.qZA(),t.TgZ(51,"a",9),t._uU(52),t.ALo(53,"translate"),t.qZA(),t.TgZ(54,"a",10),t._uU(55),t.ALo(56,"translate"),t.qZA()()()(),t.TgZ(57,"div",11),t._UZ(58,"img",12),t.YNc(59,m,1,2,"img",13),t.qZA(),t.TgZ(60,"div",14)(61,"div",15)(62,"div",16)(63,"a",17),t._uU(64),t.ALo(65,"translate"),t.qZA(),t.TgZ(66,"p",18),t._uU(67,"|"),t.qZA(),t.TgZ(68,"a",19),t._uU(69),t.ALo(70,"translate"),t.qZA(),t.TgZ(71,"p",18),t._uU(72,"|"),t.qZA(),t.TgZ(73,"a",20),t._uU(74),t.ALo(75,"translate"),t.qZA()(),t.TgZ(76,"div",21)(77,"p",22),t._uU(78),t.ALo(79,"translate"),t.ALo(80,"translate"),t._UZ(81,"br",23),t._uU(82),t.ALo(83,"translate"),t.TgZ(84,"a",24),t._uU(85,"\u6caaICP\u59072022027392\u53f7-2 "),t.qZA(),t.TgZ(86,"span",25),t._uU(87),t.qZA()()()()()),2&h&&(t.xp6(4),t.hij(" ",t.lcZ(5,34,"footer-description")," "),t.xp6(4),t.hij(" ",t.lcZ(9,36,"footer-title-shop")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(78,x)),t.xp6(1),t.hij(" ",t.lcZ(13,38,"footer-start-shopping")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(79,T)),t.xp6(1),t.hij(" ",t.lcZ(16,40,"footer-cart")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(80,T)),t.xp6(1),t.hij(" ",t.lcZ(19,42,"footer-checkout")," "),t.xp6(4),t.hij(" ",t.lcZ(23,44,"footer-title-account")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(81,y)),t.xp6(1),t.hij(" ",t.lcZ(27,46,"footer-login")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(82,Z)),t.xp6(1),t.hij(" ",t.lcZ(30,48,"register-page-title")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(83,M)),t.xp6(1),t.hij(" ",t.lcZ(33,50,"footer-account")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(84,v)),t.xp6(1),t.hij(" ",t.lcZ(36,52,"gift-codes")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(85,v)),t.xp6(1),t.hij(" ",t.lcZ(39,54,"account-menu-credits")," "),t.xp6(4),t.hij(" ",t.lcZ(43,56,"footer-title-help")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(86,E)),t.xp6(1),t.hij(" ",t.lcZ(47,58,"footer-return")," "),t.xp6(3),t.hij(" ",t.lcZ(50,60,"footer-help")," "),t.xp6(3),t.hij(" ",t.lcZ(53,62,"footer-terms-condition")," "),t.xp6(2),t.Q6J("href",A.marketingUrl,t.LSH),t.xp6(1),t.hij(" ",t.lcZ(56,64,"marketing-page-title")," "),t.xp6(4),t.Q6J("ngForOf",A.paymentMethods),t.xp6(5),t.hij(" ",t.lcZ(65,66,"footer-about")," "),t.xp6(5),t.hij(" ",t.lcZ(70,68,"footer-privacy")," "),t.xp6(5),t.hij(" ",t.lcZ(75,70,"footer-terms")," "),t.xp6(4),t.AsE(" ",t.lcZ(79,72,"footer-copyright-before")," ",t.lcZ(80,74,"TYQOON Enterprises Pte Ltd")," "),t.xp6(4),t.hij(" ",t.lcZ(83,76,"footer-copyright-after")," "),t.xp6(5),t.hij(" v",A.version," "))},dependencies:[s.sg,o.Fo,r.yS,g.R,i.X$],styles:["[_nghost-%COMP%]{display:block;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}app-tyqoon-icon[_ngcontent-%COMP%]{display:block;height:60px}"],changeDetection:0}),c})()},45210:(f,u,e)=>{e.d(u,{B:()=>t});var d=e(15861),n=e(24837),l=e(94650);let t=(()=>{class i{constructor(o){this.el=o,this.myValue=!0,this.content=o.nativeElement}ngAfterViewInit(){var o=this;return(0,d.Z)(function*(){n.Z.isServer||(o.btn=document.createElement("button"),o.btn.innerHTML='\n    <svg class="icon__arrow-up" viewBox="0 0 24 24">\n      <title>Back to top</title>\n      <path d="M18.71,11.71a1,1,0,0,1-1.42,0L13,7.41V19a1,1,0,0,1-2,0V7.41l-4.29,4.3a1,1,0,0,1-1.42-1.42l6-6a1,1,0,0,1,1.42,0l6,6A1,1,0,0,1,18.71,11.71Z"/>\n    </svg>',o.btn.classList.add("back-to-top-btn"),o.btn.addEventListener("click",()=>{o.content.scrollToTop(500)}),document.body.appendChild(o.btn),o.el.nativeElement.append(o.btn))})()}onScroll(o){o.detail.scrollTop>200?this.btn.classList.add("show-btn"):this.btn.classList.remove("show-btn")}}return i.\u0275fac=function(o){return new(o||i)(l.Y36(l.SBq))},i.\u0275dir=l.lG2({type:i,selectors:[["","backToTopBtn",""]],hostVars:1,hostBindings:function(o,r){1&o&&l.NdJ("ionScroll",function(m){return r.onScroll(m)}),2&o&&l.Ikx("overflow-scroll",r.myValue)}}),i})()},49127:(f,u,e)=>{e.d(u,{H:()=>l});var d=e(24837),n=e(94650);let l=(()=>{class t{constructor(s){this.toolbar=s.nativeElement}ngAfterViewInit(){if(d.Z.isServer)return;const s=setInterval(()=>{if(this.toolbar.shadowRoot){let o=this.toolbar.shadowRoot.querySelector(".toolbar-container");o&&(o.style.contain="none",o.style.overflow="visible",clearInterval(s))}},500)}}return t.\u0275fac=function(s){return new(s||t)(n.Y36(n.SBq))},t.\u0275dir=n.lG2({type:t,selectors:[["","appOverflowVisible",""]]}),t})()},70957:(f,u,e)=>{e.d(u,{V:()=>i});var d=e(36895),n=e(94650),l=e(7507),t=e(95133);let i=(()=>{class s{constructor(r,g,m){this.content=r,this.router=g,this.platformId=m,(0,d.NF)(this.platformId)&&(this.subscription=this.router.events.subscribe(x=>{x instanceof l.m2&&this.content.scrollToTop()}))}ngOnDestroy(){this.subscription?.unsubscribe()}}return s.\u0275fac=function(r){return new(r||s)(n.Y36(t.W2),n.Y36(l.F0),n.Y36(n.Lbi))},s.\u0275dir=n.lG2({type:s,selectors:[["","scrollTop",""]]}),s})()}}]);