"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[6217],{98667:(Z,L,i)=>{i.d(L,{z:()=>W});var n=i(36895),t=i(94650),e=i(54463),P=i(59361),O=i(24006),v=i(44466),E=i(7507),w=i(5565),b=i(82722),T=i(56889),D=i(94830),I=i(63225),c=i(90147),f=i(94063),_=i(44365),r=i(55896),g=i(59484),m=i(92974);function d(a,u){if(1&a){const o=t.EpF();t.TgZ(0,"div",6)(1,"app-my-tickets",7,8),t.NdJ("dropdownOpenChange",function(p){t.CHM(o);const C=t.oxw();return t.KtG(C.isPopupExpanded=p)}),t.qZA()()}if(2&a){const o=t.oxw();t.xp6(1),t.Q6J("dropdownOpen",o.isPopupExpanded)("dropdownMode",o.isPopup)("elementId",o.elementId)}}function M(a,u){if(1&a){const o=t.EpF();t.ynx(0),t.TgZ(1,"app-my-tickets",7,8),t.NdJ("dropdownOpenChange",function(p){t.CHM(o);const C=t.oxw(2);return t.KtG(C.isPopupExpanded=p)}),t.qZA(),t.BQk()}if(2&a){const o=t.oxw(2);t.xp6(1),t.Q6J("dropdownOpen",o.isPopupExpanded)("dropdownMode",o.isPopup)("elementId",o.elementId)}}function l(a,u){if(1&a){const o=t.EpF();t.TgZ(0,"app-launch-pool-button",22),t.NdJ("click",function(){const C=t.CHM(o).method;return t.KtG(C())}),t.qZA()}if(2&a){const o=t.oxw().ngLet,s=t.oxw(2);t.Q6J("canLaunch",s.allowDirectLaunch||!o)}}function h(a,u){if(1&a){const o=t.EpF();t.TgZ(0,"app-launch-pool",21),t.NdJ("openLaunchPoolModal",function(){t.CHM(o);const p=t.oxw(2);return t.KtG(p.onLaunchPool.emit(!0))}),t.YNc(1,l,1,1,"ng-template"),t.qZA()}if(2&a){const o=u.ngLet,s=t.oxw(2);t.Q6J("allowDirectLaunch",s.allowDirectLaunch)("platformPoolLimitReached",!!o)}}const x=function(a){return{"px-1 md:px-1.5 pb-1.5 pt-4 2xl:pt-6":a}};function A(a,u){if(1&a){const o=t.EpF();t.TgZ(0,"div",9),t.YNc(1,M,3,3,"ng-container",4),t.TgZ(2,"div",10)(3,"span",11),t._uU(4),t.ALo(5,"translate"),t.qZA(),t._UZ(6,"app-bidding-ticket-count",12),t.qZA(),t.TgZ(7,"app-get-tickets",13),t.NdJ("click",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.myTickets.openGetTicketsModal())}),t.qZA(),t.YNc(8,h,2,2,"app-launch-pool",14),t.ALo(9,"async"),t.TgZ(10,"div",10)(11,"button",15),t.NdJ("click",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.openShareModal=!0)}),t._uU(12),t.ALo(13,"translate"),t.O4$(),t.TgZ(14,"svg",16)(15,"g",17),t._UZ(16,"path",18)(17,"path",19),t.qZA()()(),t.kcU(),t.TgZ(18,"a",20),t._uU(19),t.ALo(20,"translate"),t.qZA()()()}if(2&a){const o=t.oxw();t.Q6J("ngClass",t.VKq(14,x,o.isPopup)),t.xp6(1),t.Q6J("ngIf",!o.isPopup),t.xp6(3),t.Oqu(t.lcZ(5,6,"bid-amount")),t.xp6(4),t.Q6J("ngLet",t.lcZ(9,8,o.biddingService.platformPoolLimitReached$)),t.xp6(4),t.hij(" ",t.lcZ(13,10,"share-btn")," "),t.xp6(7),t.hij(" ",t.lcZ(20,12,"view-my-pools")," ")}}function B(a,u){1&a&&t._UZ(0,"img",24)}function y(a,u){if(1&a&&(t.ynx(0),t.YNc(1,B,1,0,"img",23),t.BQk()),2&a){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.isPopup&&!o.isPopupExpanded&&0===o.ticketCount)}}function U(a,u){if(1&a){const o=t.EpF();t.TgZ(0,"app-product-share-modal",25),t.NdJ("isOpenChange",function(p){t.CHM(o);const C=t.oxw();return t.KtG(C.openShareModal=p)}),t.qZA()}if(2&a){const o=t.oxw();t.Q6J("isOpen",o.openShareModal)}}const K=[[["","productHeader",""]]],k=function(a,u,o){return{"absolute mt-11 xl:mt-14 2xl:mt-11 bg-white rounded-b-lg popup-content":a,"scale-y-100 scale-x-100":u,"scale-y-0 scale-x-100":o}},R=["[productHeader]"];let W=(()=>{class a extends w.V{constructor(o,s){super(),this.biddingService=o,this.userService=s,this.isPopup=!1,this.elementId="",this.allowDirectLaunch=!1,this.onLaunchPool=new t.vpe,this.isPopupExpanded=!1,this.openShareModal=!1,this.ticketCount=0}ngOnInit(){this.biddingService.onFindProducts$.pipe((0,b.R)(this.destroyStream$)).subscribe(o=>{this.isPopupExpanded=!1}),this.biddingService.ticketCount$.pipe((0,b.R)(this.destroyStream$)).subscribe(o=>{this.ticketCount=o})}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(T.g),t.Y36(D.K))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-bidding-control-pane"]],viewQuery:function(o,s){if(1&o&&t.Gf(P.r,5),2&o){let p;t.iGM(p=t.CRH())&&(s.myTickets=p.first)}},inputs:{isPopup:"isPopup",elementId:"elementId",allowDirectLaunch:"allowDirectLaunch"},outputs:{onLaunchPool:"onLaunchPool"},standalone:!0,features:[t.qOj,t.jDz],ngContentSelectors:R,decls:8,vars:11,consts:[[1,"content-wrapper","flex","flex-col","justify-start","gap-2","2xl:gap-2.5","items-center","h-fit","w-full","md:w-auto","bg-white","relative",3,"ngClass"],["class","w-full z-1",4,"ngIf"],[1,"w-full","origin-top","transition-transform","duration-300",3,"ngClass"],["class","popup-container flex flex-col justify-start gap-2 items-center h-full w-full",3,"ngClass",4,"ngIf"],[4,"ngIf"],[3,"isOpen","isOpenChange",4,"isBrowser"],[1,"w-full","z-1"],[1,"w-full","z-1",3,"dropdownOpen","dropdownMode","elementId","dropdownOpenChange"],["myTickets",""],[1,"popup-container","flex","flex-col","justify-start","gap-2","items-center","h-full","w-full",3,"ngClass"],[1,"w-full","flex","items-center","justify-between"],[1,"text-sm","font-medium","2xl:text-base","whitespace-nowrap","mr-1"],[1,"w-full"],[1,"w-full",3,"click"],[3,"allowDirectLaunch","platformPoolLimitReached","openLaunchPoolModal",4,"ngLet"],[1,"share-btn","items-center","justify-center","text-sm","font-medium","2xl:text-base","flex","text-white","w-6/12","p-1.5","rounded-lg",3,"click"],["fill","#ffffff","viewBox","0 0 495.003 495.003",0,"xml","space","preserve",1,"h-4","ml-2"],["id","XMLID_51_"],["id","XMLID_53_","d","M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616\n                l-67.6-32.22V456.687z"],["id","XMLID_52_","d","M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422\n                c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414\n                l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956\n                L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"],["routerLink","/member/my-pools/list",1,"text-xs","font-bold","flex-1","text-center","cursor-pointer"],[3,"allowDirectLaunch","platformPoolLimitReached","openLaunchPoolModal"],[1,"block","w-full",3,"canLaunch","click"],["style","height: 115%;","class","transform translate-x-1/4 absolute -right-1 bottom-1 z-10 pointer-events-none","src","assets/images/bidding/onboarding-exclamation.svg","alt","",4,"ngIf"],["src","assets/images/bidding/onboarding-exclamation.svg","alt","",1,"transform","translate-x-1/4","absolute","-right-1","bottom-1","z-10","pointer-events-none",2,"height","115%"],[3,"isOpen","isOpenChange"]],template:function(o,s){1&o&&(t.F$t(K),t.TgZ(0,"div",0),t.Hsn(1),t.YNc(2,d,3,3,"div",1),t.TgZ(3,"div",2),t.YNc(4,A,21,16,"div",3),t.qZA(),t.YNc(5,y,2,1,"ng-container",4),t.ALo(6,"async"),t.qZA(),t.YNc(7,U,1,1,"app-product-share-modal",5)),2&o&&(t.Q6J("ngClass",s.isPopup?"bg-white rounded-lg popup":"non-popup border rounded-lg p-1 2xl:p-1.5"),t.xp6(2),t.Q6J("ngIf",s.isPopup),t.xp6(1),t.Q6J("ngClass",t.kEZ(7,k,s.isPopup,!s.isPopup||s.isPopupExpanded,s.isPopup&&!s.isPopupExpanded)),t.xp6(1),t.Q6J("ngIf",!s.isPopup||s.isPopupExpanded),t.xp6(1),t.Q6J("ngIf",t.lcZ(6,5,s.userService.userInfo$)))},dependencies:[n.ez,n.mk,n.O5,n.Ov,e.aw,e.X$,P.r,O.u5,v.m,I.E,c.h,f.T,_.h,r.h,g.j,m.a,E.Bz,E.yS],styles:[".share-btn[_ngcontent-%COMP%]{background:linear-gradient(to right,rgb(7,121,255),rgb(9,35,255))}.content-wrapper[_ngcontent-%COMP%]{border-color:#ddd}.content-wrapper.popup[_ngcontent-%COMP%]{box-shadow:2.6px 5.1px 5.1px #0000004d}.popup-content[_ngcontent-%COMP%]{width:213px;box-shadow:2.6px 5.1px 5.1px #0000004d}@media (min-width: 1024px){.popup-content[_ngcontent-%COMP%]{width:212px}}ion-icon[_ngcontent-%COMP%]{--ionicon-stroke-width: 60px}"]}),a})()},95030:(Z,L,i)=>{i.d(L,{h:()=>m});var n=i(15861),t=i(36895),e=i(94650),P=i(95133),O=i(54463),v=i(65433),E=i(5565),w=i(44466),b=i(83905),T=i(7507),D=i(56889),I=i(7228),c=i(55896);function f(d,M){if(1&d){const l=e.EpF();e.TgZ(0,"div",18)(1,"app-launch-pool-button",19),e.NdJ("click",function(){e.CHM(l);const x=e.oxw(3),A=e.MAs(1);return e.KtG(x.handleLaunch(A))}),e.qZA()()}}function _(d,M){if(1&d){const l=e.EpF();e.ynx(0),e.TgZ(1,"div",12),e._UZ(2,"img",13),e.TgZ(3,"div",14),e._uU(4),e.ALo(5,"translate"),e.qZA()(),e.TgZ(6,"div",15)(7,"button",16),e.NdJ("click",function(){e.CHM(l),e.oxw(2);const x=e.MAs(1);return e.KtG(x.dismiss())}),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.YNc(10,f,2,0,"div",17),e.qZA(),e.BQk()}if(2&d){const l=e.oxw(2);e.xp6(2),e.Q6J("src",l.canLaunchPool?"assets/images/Mascot TICKETS 512w-min.png":"assets/images/mascot-sad.png",e.LSH),e.xp6(2),e.hij(" ",e.lcZ(5,4,l.canLaunchPool?"launch-initial-pool-desc":"cannot-open-pool")," "),e.xp6(4),e.hij(" ",e.lcZ(9,6,l.canLaunchPool?"cancel":"close")," "),e.xp6(2),e.Q6J("ngIf",l.canLaunchPool)}}function r(d,M){1&d&&(e.TgZ(0,"div",20),e._UZ(1,"app-loading-animation"),e.qZA())}function g(d,M){if(1&d){const l=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4),e._UZ(3,"img",5),e.qZA(),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"button",6),e.NdJ("click",function(){e.CHM(l),e.oxw();const x=e.MAs(1);return e.KtG(x.dismiss())}),e.O4$(),e.TgZ(7,"svg",7),e._UZ(8,"path",8),e.qZA()()(),e.kcU(),e.TgZ(9,"ng-scrollbar",9),e.YNc(10,_,11,8,"ng-container",10),e.YNc(11,r,2,0,"ng-template",null,11,e.W1O),e.qZA()}if(2&d){const l=e.MAs(12),h=e.oxw();e.xp6(4),e.hij(" ",e.lcZ(5,4,"launch-pool")," "),e.xp6(5),e.Q6J("autoHeightDisabled",!1),e.xp6(1),e.Q6J("ngIf",!h.isLoading)("ngIfElse",l)}}let m=(()=>{class d extends E.V{constructor(l,h,x){super(),this.router=l,this.activatedRoute=h,this.biddingService=x,this.isOpenChange=new e.vpe,this.isLoading=!1,this.canLaunchPool=!1}ngOnInit(){var l=this;return(0,n.Z)(function*(){console.log(l.product),l.product?.id&&(l.isLoading=!0,l.canLaunchPool=yield(0,b.z)(l.biddingService.canLaunchPool(l.product.id)),l.isLoading=!1)})()}handleLaunch(l){l.dismiss().then(()=>{this.router.navigate(["/product/detail"],{queryParams:{id:this.product.id,bid:!0,launchPool:!0}})})}}return d.\u0275fac=function(l){return new(l||d)(e.Y36(T.F0),e.Y36(T.gz),e.Y36(D.g))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-bidding-initial-launch-modal"]],inputs:{isOpen:"isOpen",product:"product"},outputs:{isOpenChange:"isOpenChange"},standalone:!0,features:[e.qOj,e.jDz],decls:3,vars:1,consts:[[3,"isOpen","didDismiss"],["modal",""],[1,"flex","bg-[#f4f4f4]","items-center","p-2"],[1,"fade-in-from-right","flex-1","font-bold","text-2xl","xs:text-3xl","flex",2,"--duration","200ms"],[1,"mr-2","mt-0.5","relative","h-8","w-8","flex","justify-center","items-center","bg-black","rounded-full"],["src","assets/images/bidding/star-inverted.png",1,"h-4"],[1,"w-8","p-1","rounded","cursor-pointer","bg-[#ff2145]","text-white",3,"click"],["version","1.1","viewBox","0 0 100 100","overflow","visible","enable-background","new 0 0 100 100"],["stroke","currentColor","stroke-width","12","stroke-linecap","square","d","M 10,10 90,90 M 10,90 90,10"],["visibility","hover",2,"max-height","85vh",3,"autoHeightDisabled"],[4,"ngIf","ngIfElse"],["loader",""],[1,"p-4","flex","flex-col","items-center","justify-center"],[1,"h-72",3,"src"],[1,"text-black","font-medium","text-center","text-base","md:text-xl","my-5"],[1,"flex","flex-wrap","justify-between","gap-4","p-4","pt-2","bg-white"],[1,"fade-in-from-right","border","border-[#dddddd]","bg-slate-100","rounded-lg","font-bold","px-6","py-2","text-lg","2xs:text-2xl","md:text-2xl","capitalize",2,"--duration","200ms","--delay","250ms",3,"click"],["class","fade-in-from-left","style","--duration: 300ms; --delay: 250ms",4,"ngIf"],[1,"fade-in-from-left",2,"--duration","300ms","--delay","250ms"],[1,"block",3,"click"],[1,"w-full","flex","items-center","justify-center","h-full",2,"min-height","496px"]],template:function(l,h){1&l&&(e.TgZ(0,"ion-modal",0,1),e.NdJ("didDismiss",function(){return h.isOpenChange.emit(!1)}),e.YNc(2,g,13,6,"ng-template"),e.qZA()),2&l&&e.Q6J("isOpen",h.isOpen)},dependencies:[t.ez,t.O5,O.aw,O.X$,v.kb,v.KC,P.Pc,P.ki,w.m,I.r,c.h],styles:["ion-modal[_ngcontent-%COMP%]{--background: white;--border-radius: 8px;--width: 600px}.product-image[_ngcontent-%COMP%]{max-width:250px}@media (min-width: 768px){.product-image[_ngcontent-%COMP%]{max-width:100%}}app-bidding-progress-bar[_ngcontent-%COMP%]     .progress-bar{height:2.75rem;border-width:2px}app-order-rating[_ngcontent-%COMP%]     ion-icon{height:1rem;width:1rem}.pool-text[_ngcontent-%COMP%]{font-size:15px}.launch-btn[_ngcontent-%COMP%]{background:linear-gradient(to right,rgb(7,121,255),rgb(9,35,255))}.launch-btn[_ngcontent-%COMP%]:disabled{opacity:.8}app-bidding-ticket-count[_ngcontent-%COMP%]{width:125px}app-bidding-ticket-count[_ngcontent-%COMP%]     .bid-amount{height:100%}app-launch-pool-button[_ngcontent-%COMP%]    {width:180px}@media (min-width: 450px){app-launch-pool-button[_ngcontent-%COMP%]    {width:220px}}@media (min-width: 768px){app-launch-pool-button[_ngcontent-%COMP%]    {width:240px}}app-launch-pool-button[_ngcontent-%COMP%]     .content .title{font-size:1.125rem;line-height:1.75rem}@media (min-width: 450px){app-launch-pool-button[_ngcontent-%COMP%]     .content .title{font-size:1.5rem;line-height:2rem}}@media (min-width: 768px){app-launch-pool-button[_ngcontent-%COMP%]     .content .title{font-size:1.5rem;line-height:2rem}}"]}),d})()},11592:(Z,L,i)=>{i.d(L,{t:()=>I});var n=i(94650),t=i(5565),e=i(7507),P=i(56889),O=i(36895),v=i(95133),E=i(65433),w=i(54463);function b(c,f){if(1&c){const _=n.EpF();n.TgZ(0,"div",15)(1,"button",16),n.NdJ("click",function(){n.CHM(_);const g=n.oxw(2),m=n.MAs(1);return n.KtG(g.closeModal(m))}),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"div",17)(5,"button",18),n.NdJ("click",function(){n.CHM(_);const g=n.oxw(2),m=n.MAs(1);return n.KtG(g.navigateToPool(m))}),n._uU(6),n.ALo(7,"translate"),n.qZA()()()}2&c&&(n.xp6(2),n.hij(" ",n.lcZ(3,2,"stay-here")," "),n.xp6(4),n.hij(" ",n.lcZ(7,4,"go-to-pool")," "))}function T(c,f){if(1&c){const _=n.EpF();n.TgZ(0,"div",19)(1,"button",16),n.NdJ("click",function(){n.CHM(_);const g=n.oxw(2),m=n.MAs(1);return n.KtG(g.closeModal(m))}),n._uU(2),n.ALo(3,"translate"),n.qZA()()}2&c&&(n.xp6(2),n.hij(" ",n.lcZ(3,1,"close")," "))}function D(c,f){if(1&c){const _=n.EpF();n.TgZ(0,"div",2)(1,"div",3)(2,"div",4),n._UZ(3,"img",5),n.qZA(),n._uU(4),n.ALo(5,"translate"),n.qZA(),n.TgZ(6,"button",6),n.NdJ("click",function(){n.CHM(_);const g=n.oxw(),m=n.MAs(1);return n.KtG(g.closeModal(m))}),n.O4$(),n.TgZ(7,"svg",7),n._UZ(8,"path",8),n.qZA()()(),n.kcU(),n.TgZ(9,"ng-scrollbar",9)(10,"div",10),n._UZ(11,"img",11),n.TgZ(12,"div",12),n._uU(13),n.ALo(14,"translate"),n.qZA()(),n.YNc(15,b,8,6,"div",13),n.YNc(16,T,4,3,"ng-template",null,14,n.W1O),n.qZA()}if(2&c){const _=n.MAs(17),r=n.oxw();n.xp6(4),n.hij(" ",n.lcZ(5,5,"tyqoon-fortune")," "),n.xp6(5),n.Q6J("autoHeightDisabled",!1),n.xp6(4),n.hij(" ",n.lcZ(14,7,"missed-the-pool")," "),n.xp6(2),n.Q6J("ngIf",r.showRedirectOption)("ngIfElse",_)}}let I=(()=>{class c extends t.V{constructor(_,r){super(),this.router=_,this.biddingService=r,this.showRedirectOption=!0,this.isOpenChange=new n.vpe}closeModal(_){_.dismiss().then(()=>{this.biddingService.onLaunchFinished$.next(!0)})}navigateToPool(_){_.dismiss().then(()=>{this.router.navigate(["/product/detail"],{queryParams:{id:this.productId,poolId:this.poolId,bid:!0}}).then(()=>{this.biddingService.onLaunchFinished$.next(!0)})})}}return c.\u0275fac=function(_){return new(_||c)(n.Y36(e.F0),n.Y36(P.g))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-missed-pool-modal"]],inputs:{isOpen:"isOpen",productId:"productId",poolId:"poolId",showRedirectOption:"showRedirectOption"},outputs:{isOpenChange:"isOpenChange"},features:[n.qOj],decls:3,vars:1,consts:[[3,"isOpen","didDismiss"],["modal",""],[1,"flex","bg-[#f4f4f4]","items-center","p-2"],[1,"fade-in-from-right","flex-1","font-bold","text-2xl","xs:text-3xl","flex",2,"--duration","200ms"],[1,"mr-2","mt-0.5","relative","h-8","w-8","flex","justify-center","items-center","bg-black","rounded-full"],["src","assets/images/bidding/star-inverted.png",1,"h-4"],[1,"w-8","p-1","rounded","cursor-pointer","bg-[#ff2145]","text-white",3,"click"],["version","1.1","viewBox","0 0 100 100","overflow","visible","enable-background","new 0 0 100 100"],["stroke","currentColor","stroke-width","12","stroke-linecap","square","d","M 10,10 90,90 M 10,90 90,10"],["visibility","hover",2,"max-height","85vh",3,"autoHeightDisabled"],[1,"p-4","flex","flex-col","items-center","justify-center"],["src","assets/images/Mascot TICKETS 512w-min.png",1,"h-72","fade-in-from-left",2,"--duration","200ms","--delay","100ms"],[1,"text-black","font-medium","text-center","text-base","md:text-xl","my-5","fade-in-from-left",2,"--duration","200ms","--delay","150ms"],["class","flex justify-between gap-4 p-4 pt-2 bg-white",4,"ngIf","ngIfElse"],["closeButton",""],[1,"flex","justify-between","gap-4","p-4","pt-2","bg-white"],[1,"fade-in-from-right","border","border-[#dddddd]","bg-slate-100","rounded-lg","font-bold","px-6","py-2.5","text-lg","xs:text-2xl","md:text-3xl","capitalize",2,"--duration","200ms","--delay","250ms",3,"click"],[1,"fade-in-from-left",2,"--duration","300ms","--delay","250ms"],[1,"launch-btn","px-4","xs:px-6","md:px-8","py-2.5","text-lg","xs:text-2xl","md:text-3xl","font-bold","text-white","capitalize","rounded-lg",3,"click"],[1,"flex","justify-center","p-4","pt-2","bg-white"]],template:function(_,r){1&_&&(n.TgZ(0,"ion-modal",0,1),n.NdJ("didDismiss",function(){return r.isOpenChange.emit(!1)}),n.YNc(2,D,18,9,"ng-template"),n.qZA()),2&_&&n.Q6J("isOpen",r.isOpen)},dependencies:[O.O5,v.ki,E.KC,w.X$],styles:["ion-modal[_ngcontent-%COMP%]{--background: white;--border-radius: 8px;--width: 600px}.product-image[_ngcontent-%COMP%]{max-width:250px}@media (min-width: 768px){.product-image[_ngcontent-%COMP%]{max-width:100%}}app-bidding-progress-bar[_ngcontent-%COMP%]     .progress-bar{height:2.75rem;border-width:2px}app-order-rating[_ngcontent-%COMP%]     ion-icon{height:1rem;width:1rem}.pool-text[_ngcontent-%COMP%]{font-size:15px}.launch-btn[_ngcontent-%COMP%]{background:linear-gradient(to right,rgb(7,121,255),rgb(9,35,255))}.launch-btn[_ngcontent-%COMP%]:disabled{opacity:.8}app-bidding-ticket-count[_ngcontent-%COMP%]{width:125px}app-bidding-ticket-count[_ngcontent-%COMP%]     .bid-amount{height:100%}"]}),c})()}}]);