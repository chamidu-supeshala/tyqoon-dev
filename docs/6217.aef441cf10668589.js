"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[6217],{98667:(Z,L,i)=>{i.d(L,{z:()=>J});var n=i(36895),t=i(94650),e=i(54463),P=i(59361),C=i(24006),O=i(44466),v=i(7507),T=i(5565),E=i(82722),b=i(56889),w=i(45329),D=i(63225),d=i(90147),f=i(94063),s=i(44365),u=i(55896),g=i(16879),m=i(92974);function p(a,r){if(1&a){const o=t.EpF();t.TgZ(0,"div",6)(1,"app-my-tickets",7,8),t.NdJ("dropdownOpenChange",function(c){t.CHM(o);const A=t.oxw();return t.KtG(A.isPopupExpanded=c)}),t.qZA()()}if(2&a){const o=t.oxw();t.xp6(1),t.Q6J("dropdownOpen",o.isPopupExpanded)("dropdownMode",o.isPopup)("elementId",o.elementId)}}function M(a,r){if(1&a){const o=t.EpF();t.ynx(0),t.TgZ(1,"app-my-tickets",7,8),t.NdJ("dropdownOpenChange",function(c){t.CHM(o);const A=t.oxw(2);return t.KtG(A.isPopupExpanded=c)}),t.qZA(),t.BQk()}if(2&a){const o=t.oxw(2);t.xp6(1),t.Q6J("dropdownOpen",o.isPopupExpanded)("dropdownMode",o.isPopup)("elementId",o.elementId)}}function l(a,r){if(1&a){const o=t.EpF();t.TgZ(0,"app-launch-pool-button",23),t.NdJ("click",function(){t.CHM(o);const c=t.oxw().method;return t.KtG(c())}),t.qZA()}if(2&a){const o=r.ngLet,_=t.oxw(2).ngLet,c=t.oxw(2);t.Q6J("canLaunch",c.allowDirectLaunch&&!o||!c.allowDirectLaunch&&!_)}}function h(a,r){if(1&a&&(t.YNc(0,l,1,1,"app-launch-pool-button",22),t.ALo(1,"async")),2&a){const o=t.oxw(3);t.Q6J("ngLet",t.lcZ(1,1,o.biddingService.productPoolLimitReached$))}}function x(a,r){if(1&a){const o=t.EpF();t.TgZ(0,"app-launch-pool",21),t.NdJ("openLaunchPoolModal",function(){t.CHM(o);const c=t.oxw(2);return t.KtG(c.onLaunchPool.emit(!0))}),t.YNc(1,h,2,3,"ng-template"),t.qZA()}if(2&a){const o=r.ngLet,_=t.oxw(2);t.Q6J("allowDirectLaunch",_.allowDirectLaunch)("platformPoolLimitReached",!!o)}}const I=function(a){return{"px-1 md:px-1.5 pb-1.5 pt-4 2xl:pt-6":a}};function B(a,r){if(1&a){const o=t.EpF();t.TgZ(0,"div",9),t.YNc(1,M,3,3,"ng-container",4),t.TgZ(2,"div",10)(3,"span",11),t._uU(4),t.ALo(5,"translate"),t.qZA(),t._UZ(6,"app-bidding-ticket-count",12),t.qZA(),t.TgZ(7,"app-get-tickets",13),t.NdJ("click",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.myTickets.openGetTicketsModal())}),t.qZA(),t.YNc(8,x,2,2,"app-launch-pool",14),t.ALo(9,"async"),t.TgZ(10,"div",10)(11,"button",15),t.NdJ("click",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.openShareModal=!0)}),t._uU(12),t.ALo(13,"translate"),t.O4$(),t.TgZ(14,"svg",16)(15,"g",17),t._UZ(16,"path",18)(17,"path",19),t.qZA()()(),t.kcU(),t.TgZ(18,"a",20),t._uU(19),t.ALo(20,"translate"),t.qZA()()()}if(2&a){const o=t.oxw();t.Q6J("ngClass",t.VKq(14,I,o.isPopup)),t.xp6(1),t.Q6J("ngIf",!o.isPopup),t.xp6(3),t.Oqu(t.lcZ(5,6,"bid-amount")),t.xp6(4),t.Q6J("ngLet",t.lcZ(9,8,o.biddingService.platformPoolLimitReached$)),t.xp6(4),t.hij(" ",t.lcZ(13,10,"share-btn")," "),t.xp6(7),t.hij(" ",t.lcZ(20,12,"view-my-pools")," ")}}function y(a,r){1&a&&t._UZ(0,"img",25)}function U(a,r){if(1&a&&(t.ynx(0),t.YNc(1,y,1,0,"img",24),t.BQk()),2&a){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.isPopup&&!o.isPopupExpanded&&0===o.ticketCount)}}function K(a,r){if(1&a){const o=t.EpF();t.TgZ(0,"app-product-share-modal",26),t.NdJ("isOpenChange",function(c){t.CHM(o);const A=t.oxw();return t.KtG(A.openShareModal=c)}),t.qZA()}if(2&a){const o=t.oxw();t.Q6J("isOpen",o.openShareModal)}}const k=[[["","productHeader",""]]],R=function(a,r,o){return{"absolute mt-11 xl:mt-14 2xl:mt-11 bg-white rounded-b-lg popup-content":a,"scale-y-100 scale-x-100":r,"scale-y-0 scale-x-100":o}},W=["[productHeader]"];let J=(()=>{class a extends T.V{constructor(o,_){super(),this.biddingService=o,this.userService=_,this.isPopup=!1,this.elementId="",this.allowDirectLaunch=!1,this.onLaunchPool=new t.vpe,this.isPopupExpanded=!1,this.openShareModal=!1,this.ticketCount=0}ngOnInit(){this.biddingService.onFindProducts$.pipe((0,E.R)(this.destroyStream$)).subscribe(o=>{this.isPopupExpanded=!1}),this.biddingService.ticketCount$.pipe((0,E.R)(this.destroyStream$)).subscribe(o=>{this.ticketCount=o})}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(b.g),t.Y36(w.K))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-bidding-control-pane"]],viewQuery:function(o,_){if(1&o&&t.Gf(P.r,5),2&o){let c;t.iGM(c=t.CRH())&&(_.myTickets=c.first)}},inputs:{isPopup:"isPopup",elementId:"elementId",allowDirectLaunch:"allowDirectLaunch"},outputs:{onLaunchPool:"onLaunchPool"},standalone:!0,features:[t.qOj,t.jDz],ngContentSelectors:W,decls:8,vars:11,consts:[[1,"content-wrapper","flex","flex-col","justify-start","gap-2","2xl:gap-2.5","items-center","h-fit","w-full","md:w-auto","bg-white","relative",3,"ngClass"],["class","w-full z-1",4,"ngIf"],[1,"w-full","origin-top","transition-transform","duration-300",3,"ngClass"],["class","popup-container flex flex-col justify-start gap-2 items-center h-full w-full",3,"ngClass",4,"ngIf"],[4,"ngIf"],[3,"isOpen","isOpenChange",4,"isBrowser"],[1,"w-full","z-1"],[1,"w-full","z-1",3,"dropdownOpen","dropdownMode","elementId","dropdownOpenChange"],["myTickets",""],[1,"popup-container","flex","flex-col","justify-start","gap-2","items-center","h-full","w-full",3,"ngClass"],[1,"w-full","flex","items-center","justify-between"],[1,"text-sm","font-medium","2xl:text-base","whitespace-nowrap","mr-1"],[1,"w-full"],[1,"w-full",3,"click"],[3,"allowDirectLaunch","platformPoolLimitReached","openLaunchPoolModal",4,"ngLet"],[1,"share-btn","items-center","justify-center","text-sm","font-medium","2xl:text-base","flex","text-white","w-6/12","p-1.5","rounded-lg",3,"click"],["fill","#ffffff","viewBox","0 0 495.003 495.003",0,"xml","space","preserve",1,"h-4","ml-2"],["id","XMLID_51_"],["id","XMLID_53_","d","M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616\n                l-67.6-32.22V456.687z"],["id","XMLID_52_","d","M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422\n                c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414\n                l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956\n                L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"],["routerLink","/member/my-pools/list",1,"text-xs","font-bold","flex-1","text-center","cursor-pointer"],[3,"allowDirectLaunch","platformPoolLimitReached","openLaunchPoolModal"],["class","block w-full",3,"canLaunch","click",4,"ngLet"],[1,"block","w-full",3,"canLaunch","click"],["style","height: 115%;","class","transform translate-x-1/4 absolute -right-1 bottom-1 z-10 pointer-events-none","src","assets/images/bidding/onboarding-exclamation.svg","alt","",4,"ngIf"],["src","assets/images/bidding/onboarding-exclamation.svg","alt","",1,"transform","translate-x-1/4","absolute","-right-1","bottom-1","z-10","pointer-events-none",2,"height","115%"],[3,"isOpen","isOpenChange"]],template:function(o,_){1&o&&(t.F$t(k),t.TgZ(0,"div",0),t.Hsn(1),t.YNc(2,p,3,3,"div",1),t.TgZ(3,"div",2),t.YNc(4,B,21,16,"div",3),t.qZA(),t.YNc(5,U,2,1,"ng-container",4),t.ALo(6,"async"),t.qZA(),t.YNc(7,K,1,1,"app-product-share-modal",5)),2&o&&(t.Q6J("ngClass",_.isPopup?"bg-white rounded-lg popup":"non-popup border rounded-lg p-1 2xl:p-1.5"),t.xp6(2),t.Q6J("ngIf",_.isPopup),t.xp6(1),t.Q6J("ngClass",t.kEZ(7,R,_.isPopup,!_.isPopup||_.isPopupExpanded,_.isPopup&&!_.isPopupExpanded)),t.xp6(1),t.Q6J("ngIf",!_.isPopup||_.isPopupExpanded),t.xp6(1),t.Q6J("ngIf",t.lcZ(6,5,_.userService.userInfo$)))},dependencies:[n.ez,n.mk,n.O5,n.Ov,e.aw,e.X$,P.r,C.u5,O.m,D.E,d.h,f.T,s.h,u.h,g.j,m.a,v.Bz,v.yS],styles:[".share-btn[_ngcontent-%COMP%]{background:linear-gradient(to right,rgb(7,121,255),rgb(9,35,255))}.content-wrapper[_ngcontent-%COMP%]{border-color:#ddd}.content-wrapper.popup[_ngcontent-%COMP%]{box-shadow:2.6px 5.1px 5.1px #0000004d}.popup-content[_ngcontent-%COMP%]{width:213px;box-shadow:2.6px 5.1px 5.1px #0000004d}@media (min-width: 1024px){.popup-content[_ngcontent-%COMP%]{width:212px}}ion-icon[_ngcontent-%COMP%]{--ionicon-stroke-width: 60px}"]}),a})()},95030:(Z,L,i)=>{i.d(L,{h:()=>m});var n=i(15861),t=i(36895),e=i(94650),P=i(95133),C=i(54463),O=i(65433),v=i(5565),T=i(44466),E=i(83905),b=i(7507),w=i(56889),D=i(7228),d=i(55896);function f(p,M){if(1&p){const l=e.EpF();e.TgZ(0,"div",18)(1,"app-launch-pool-button",19),e.NdJ("click",function(){e.CHM(l);const x=e.oxw(3),I=e.MAs(1);return e.KtG(x.handleLaunch(I))}),e.qZA()()}}function s(p,M){if(1&p){const l=e.EpF();e.ynx(0),e.TgZ(1,"div",12),e._UZ(2,"img",13),e.TgZ(3,"div",14),e._uU(4),e.ALo(5,"translate"),e.qZA()(),e.TgZ(6,"div",15)(7,"button",16),e.NdJ("click",function(){e.CHM(l),e.oxw(2);const x=e.MAs(1);return e.KtG(x.dismiss())}),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.YNc(10,f,2,0,"div",17),e.qZA(),e.BQk()}if(2&p){const l=e.oxw(2);e.xp6(2),e.Q6J("src",l.canLaunchPool?"assets/images/Mascot TICKETS 512w-min.png":"assets/images/mascot-sad.png",e.LSH),e.xp6(2),e.hij(" ",e.lcZ(5,4,l.canLaunchPool?"launch-initial-pool-desc":"cannot-open-pool")," "),e.xp6(4),e.hij(" ",e.lcZ(9,6,l.canLaunchPool?"cancel":"close")," "),e.xp6(2),e.Q6J("ngIf",l.canLaunchPool)}}function u(p,M){1&p&&(e.TgZ(0,"div",20),e._UZ(1,"app-loading-animation"),e.qZA())}function g(p,M){if(1&p){const l=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4),e._UZ(3,"img",5),e.qZA(),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"button",6),e.NdJ("click",function(){e.CHM(l),e.oxw();const x=e.MAs(1);return e.KtG(x.dismiss())}),e.O4$(),e.TgZ(7,"svg",7),e._UZ(8,"path",8),e.qZA()()(),e.kcU(),e.TgZ(9,"ng-scrollbar",9),e.YNc(10,s,11,8,"ng-container",10),e.YNc(11,u,2,0,"ng-template",null,11,e.W1O),e.qZA()}if(2&p){const l=e.MAs(12),h=e.oxw();e.xp6(4),e.hij(" ",e.lcZ(5,4,"launch-pool")," "),e.xp6(5),e.Q6J("autoHeightDisabled",!1),e.xp6(1),e.Q6J("ngIf",!h.isLoading)("ngIfElse",l)}}let m=(()=>{class p extends v.V{constructor(l,h,x){super(),this.router=l,this.activatedRoute=h,this.biddingService=x,this.isOpenChange=new e.vpe,this.isLoading=!1,this.canLaunchPool=!1}ngOnInit(){var l=this;return(0,n.Z)(function*(){l.product?.id&&(l.isLoading=!0,l.canLaunchPool=yield(0,E.z)(l.biddingService.canLaunchPool(l.product.id)),l.isLoading=!1)})()}handleLaunch(l){l.dismiss().then(()=>{this.router.navigate(["/product/detail"],{queryParams:{id:this.product.id,bid:!0,launchPool:!0}})})}}return p.\u0275fac=function(l){return new(l||p)(e.Y36(b.F0),e.Y36(b.gz),e.Y36(w.g))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-bidding-initial-launch-modal"]],inputs:{isOpen:"isOpen",product:"product"},outputs:{isOpenChange:"isOpenChange"},standalone:!0,features:[e.qOj,e.jDz],decls:3,vars:1,consts:[[3,"isOpen","didDismiss"],["modal",""],[1,"flex","bg-[#f4f4f4]","items-center","p-2"],[1,"fade-in-from-right","flex-1","font-bold","text-2xl","xs:text-3xl","flex",2,"--duration","200ms"],[1,"mr-2","mt-0.5","relative","h-8","w-8","flex","justify-center","items-center","bg-black","rounded-full"],["src","assets/images/bidding/star-inverted.png",1,"h-4"],[1,"w-8","p-1","rounded","cursor-pointer","bg-[#ff2145]","text-white",3,"click"],["version","1.1","viewBox","0 0 100 100","overflow","visible","enable-background","new 0 0 100 100"],["stroke","currentColor","stroke-width","12","stroke-linecap","square","d","M 10,10 90,90 M 10,90 90,10"],["visibility","hover",2,"max-height","85vh",3,"autoHeightDisabled"],[4,"ngIf","ngIfElse"],["loader",""],[1,"p-4","flex","flex-col","items-center","justify-center"],[1,"h-72",3,"src"],[1,"text-black","font-medium","text-center","text-base","md:text-xl","my-5"],[1,"flex","flex-wrap","justify-between","gap-4","p-4","pt-2","bg-white"],[1,"fade-in-from-right","border","border-[#dddddd]","bg-slate-100","rounded-lg","font-bold","px-6","py-2","text-lg","2xs:text-2xl","md:text-2xl","capitalize",2,"--duration","200ms","--delay","250ms",3,"click"],["class","fade-in-from-left","style","--duration: 300ms; --delay: 250ms",4,"ngIf"],[1,"fade-in-from-left",2,"--duration","300ms","--delay","250ms"],[1,"block",3,"click"],[1,"w-full","flex","items-center","justify-center","h-full",2,"min-height","496px"]],template:function(l,h){1&l&&(e.TgZ(0,"ion-modal",0,1),e.NdJ("didDismiss",function(){return h.isOpenChange.emit(!1)}),e.YNc(2,g,13,6,"ng-template"),e.qZA()),2&l&&e.Q6J("isOpen",h.isOpen)},dependencies:[t.ez,t.O5,C.aw,C.X$,O.kb,O.KC,P.Pc,P.ki,T.m,D.r,d.h],styles:["ion-modal[_ngcontent-%COMP%]{--background: white;--border-radius: 8px;--width: 600px}.product-image[_ngcontent-%COMP%]{max-width:250px}@media (min-width: 768px){.product-image[_ngcontent-%COMP%]{max-width:100%}}app-bidding-progress-bar[_ngcontent-%COMP%]     .progress-bar{height:2.75rem;border-width:2px}app-order-rating[_ngcontent-%COMP%]     ion-icon{height:1rem;width:1rem}.pool-text[_ngcontent-%COMP%]{font-size:15px}.launch-btn[_ngcontent-%COMP%]{background:linear-gradient(to right,rgb(7,121,255),rgb(9,35,255))}.launch-btn[_ngcontent-%COMP%]:disabled{opacity:.8}app-bidding-ticket-count[_ngcontent-%COMP%]{width:125px}app-bidding-ticket-count[_ngcontent-%COMP%]     .bid-amount{height:100%}app-launch-pool-button[_ngcontent-%COMP%]    {width:180px}@media (min-width: 450px){app-launch-pool-button[_ngcontent-%COMP%]    {width:220px}}@media (min-width: 768px){app-launch-pool-button[_ngcontent-%COMP%]    {width:240px}}app-launch-pool-button[_ngcontent-%COMP%]     .content .title{font-size:1.125rem;line-height:1.75rem}@media (min-width: 450px){app-launch-pool-button[_ngcontent-%COMP%]     .content .title{font-size:1.5rem;line-height:2rem}}@media (min-width: 768px){app-launch-pool-button[_ngcontent-%COMP%]     .content .title{font-size:1.5rem;line-height:2rem}}"]}),p})()},11592:(Z,L,i)=>{i.d(L,{t:()=>D});var n=i(94650),t=i(5565),e=i(7507),P=i(56889),C=i(36895),O=i(95133),v=i(65433),T=i(54463);function E(d,f){if(1&d){const s=n.EpF();n.TgZ(0,"div",15)(1,"button",16),n.NdJ("click",function(){n.CHM(s);const g=n.oxw(2),m=n.MAs(1);return n.KtG(g.closeModal(m))}),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"div",17)(5,"button",18),n.NdJ("click",function(){n.CHM(s);const g=n.oxw(2),m=n.MAs(1);return n.KtG(g.navigateToPool(m))}),n._uU(6),n.ALo(7,"translate"),n.qZA()()()}2&d&&(n.xp6(2),n.hij(" ",n.lcZ(3,2,"stay-here")," "),n.xp6(4),n.hij(" ",n.lcZ(7,4,"go-to-pool")," "))}function b(d,f){if(1&d){const s=n.EpF();n.TgZ(0,"div",19)(1,"button",16),n.NdJ("click",function(){n.CHM(s);const g=n.oxw(2),m=n.MAs(1);return n.KtG(g.closeModal(m))}),n._uU(2),n.ALo(3,"translate"),n.qZA()()}2&d&&(n.xp6(2),n.hij(" ",n.lcZ(3,1,"close")," "))}function w(d,f){if(1&d){const s=n.EpF();n.TgZ(0,"div",2)(1,"div",3)(2,"div",4),n._UZ(3,"img",5),n.qZA(),n._uU(4),n.ALo(5,"translate"),n.qZA(),n.TgZ(6,"button",6),n.NdJ("click",function(){n.CHM(s);const g=n.oxw(),m=n.MAs(1);return n.KtG(g.closeModal(m))}),n.O4$(),n.TgZ(7,"svg",7),n._UZ(8,"path",8),n.qZA()()(),n.kcU(),n.TgZ(9,"ng-scrollbar",9)(10,"div",10),n._UZ(11,"img",11),n.TgZ(12,"div",12),n._uU(13),n.ALo(14,"translate"),n.qZA()(),n.YNc(15,E,8,6,"div",13),n.YNc(16,b,4,3,"ng-template",null,14,n.W1O),n.qZA()}if(2&d){const s=n.MAs(17),u=n.oxw();n.xp6(4),n.hij(" ",n.lcZ(5,5,"tyqoon-fortune")," "),n.xp6(5),n.Q6J("autoHeightDisabled",!1),n.xp6(4),n.hij(" ",n.lcZ(14,7,"missed-the-pool")," "),n.xp6(2),n.Q6J("ngIf",u.showRedirectOption)("ngIfElse",s)}}let D=(()=>{class d extends t.V{constructor(s,u){super(),this.router=s,this.biddingService=u,this.showRedirectOption=!0,this.isOpenChange=new n.vpe}closeModal(s){s.dismiss().then(()=>{this.biddingService.onLaunchFinished$.next(!0)})}navigateToPool(s){s.dismiss().then(()=>{this.router.navigate(["/product/detail"],{queryParams:{id:this.productId,poolId:this.poolId,bid:!0}}).then(()=>{this.biddingService.onLaunchFinished$.next(!0)})})}}return d.\u0275fac=function(s){return new(s||d)(n.Y36(e.F0),n.Y36(P.g))},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-missed-pool-modal"]],inputs:{isOpen:"isOpen",productId:"productId",poolId:"poolId",showRedirectOption:"showRedirectOption"},outputs:{isOpenChange:"isOpenChange"},features:[n.qOj],decls:3,vars:1,consts:[[3,"isOpen","didDismiss"],["modal",""],[1,"flex","bg-[#f4f4f4]","items-center","p-2"],[1,"fade-in-from-right","flex-1","font-bold","text-2xl","xs:text-3xl","flex",2,"--duration","200ms"],[1,"mr-2","mt-0.5","relative","h-8","w-8","flex","justify-center","items-center","bg-black","rounded-full"],["src","assets/images/bidding/star-inverted.png",1,"h-4"],[1,"w-8","p-1","rounded","cursor-pointer","bg-[#ff2145]","text-white",3,"click"],["version","1.1","viewBox","0 0 100 100","overflow","visible","enable-background","new 0 0 100 100"],["stroke","currentColor","stroke-width","12","stroke-linecap","square","d","M 10,10 90,90 M 10,90 90,10"],["visibility","hover",2,"max-height","85vh",3,"autoHeightDisabled"],[1,"p-4","flex","flex-col","items-center","justify-center"],["src","assets/images/Mascot TICKETS 512w-min.png",1,"h-72","fade-in-from-left",2,"--duration","200ms","--delay","100ms"],[1,"text-black","font-medium","text-center","text-base","md:text-xl","my-5","fade-in-from-left",2,"--duration","200ms","--delay","150ms"],["class","flex justify-between gap-4 p-4 pt-2 bg-white",4,"ngIf","ngIfElse"],["closeButton",""],[1,"flex","justify-between","gap-4","p-4","pt-2","bg-white"],[1,"fade-in-from-right","border","border-[#dddddd]","bg-slate-100","rounded-lg","font-bold","px-6","py-2.5","text-lg","xs:text-2xl","md:text-3xl","capitalize",2,"--duration","200ms","--delay","250ms",3,"click"],[1,"fade-in-from-left",2,"--duration","300ms","--delay","250ms"],[1,"launch-btn","px-4","xs:px-6","md:px-8","py-2.5","text-lg","xs:text-2xl","md:text-3xl","font-bold","text-white","capitalize","rounded-lg",3,"click"],[1,"flex","justify-center","p-4","pt-2","bg-white"]],template:function(s,u){1&s&&(n.TgZ(0,"ion-modal",0,1),n.NdJ("didDismiss",function(){return u.isOpenChange.emit(!1)}),n.YNc(2,w,18,9,"ng-template"),n.qZA()),2&s&&n.Q6J("isOpen",u.isOpen)},dependencies:[C.O5,O.ki,v.KC,T.X$],styles:["ion-modal[_ngcontent-%COMP%]{--background: white;--border-radius: 8px;--width: 600px}.product-image[_ngcontent-%COMP%]{max-width:250px}@media (min-width: 768px){.product-image[_ngcontent-%COMP%]{max-width:100%}}app-bidding-progress-bar[_ngcontent-%COMP%]     .progress-bar{height:2.75rem;border-width:2px}app-order-rating[_ngcontent-%COMP%]     ion-icon{height:1rem;width:1rem}.pool-text[_ngcontent-%COMP%]{font-size:15px}.launch-btn[_ngcontent-%COMP%]{background:linear-gradient(to right,rgb(7,121,255),rgb(9,35,255))}.launch-btn[_ngcontent-%COMP%]:disabled{opacity:.8}app-bidding-ticket-count[_ngcontent-%COMP%]{width:125px}app-bidding-ticket-count[_ngcontent-%COMP%]     .bid-amount{height:100%}"]}),d})()}}]);