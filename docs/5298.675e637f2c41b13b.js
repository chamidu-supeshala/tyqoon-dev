"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[5298],{93679:(x,h,o)=>{o.d(h,{K:()=>a});var e=o(36895),v=o(7507),l=o(95133),f=o(54463),d=o(82722),_=o(5565),t=o(94650),g=o(94830);let a=(()=>{class u extends _.V{constructor(i){super(),this.userService=i,this.fontSize="text-[28px] lg:text-3xl"}ngOnInit(){this.userService.pointStatistic$.pipe((0,d.R)(this.destroyStream$)).subscribe(i=>{this.pointStatistic=i})}}return u.\u0275fac=function(i){return new(i||u)(t.Y36(g.K))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-my-rebate-credit"]],inputs:{fontSize:"fontSize"},standalone:!0,features:[t.qOj,t.jDz],decls:11,vars:9,consts:[["routerLink","/member/store-credits",1,"flex-1","flex","items-center"],[1,"rebate-credit-container","border-gradient-primary","border-2","rounded-lg","w-full","bg-white","py-[2px]","flex"],["src","assets/images/circle-credit-small.png","alt","",1,"h-10","self-center","rebate-logo","ml-2","absolute"],[1,"flex-1","pl-8","text-center","flex","flex-col","justify-between","p-1.5"],[1,"title-txt","text-center","font-bold","whitespace-nowrap","text-lg","sm:text-base"],[1,"point-txt","point-txt","text-center","text-rainbow","font-bold","text-golden","-mt-0.5"]],template:function(i,m){1&i&&(t.TgZ(0,"a",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3)(4,"p",4),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"p",5)(8,"span"),t._uU(9),t.ALo(10,"number"),t.qZA()()()()()),2&i&&(t.xp6(5),t.hij(" ",t.lcZ(6,4,"tqc-discount-credits-v1-1-my")," "),t.xp6(2),t.Tol(m.fontSize),t.xp6(2),t.hij(" ",t.xi3(10,6,(null==m.pointStatistic?null:m.pointStatistic.myRebateCredits)||0,"0.2-2")," "))},dependencies:[e.ez,e.JJ,f.aw,f.X$,l.Pc,l.Fo,v.Bz,v.yS],styles:[".text-golden[_ngcontent-%COMP%]{color:#ffb341}"]}),u})()},10556:(x,h,o)=>{o.d(h,{p:()=>v});var e=o(94650);let v=(()=>{class l{constructor(){this.payload="",this.copied=new e.vpe,this.elementClass="app-copying-directive"}onClick(d){if(d.preventDefault(),d.stopPropagation(),!this.payload)return;let _=g=>{(g.clipboardData||window.clipboardData).setData("text",this.payload.toString()),g.preventDefault(),this.copied.emit(this.payload)};document.addEventListener("copy",_,!1),document.execCommand("copy"),document.removeEventListener("copy",_,!1);const t=d?.target?.closest(".app-copying-directive");t&&(t.classList.add("copied"),setTimeout(()=>{t.classList.remove("copied")},1e3))}}return l.\u0275fac=function(d){return new(d||l)},l.\u0275dir=e.lG2({type:l,selectors:[["","appCopying",""]],hostVars:2,hostBindings:function(d,_){1&d&&e.NdJ("click",function(g){return _.onClick(g)}),2&d&&e.Tol(_.elementClass)},inputs:{payload:["appCopying","payload"]},outputs:{copied:"copied"}}),l})()},13832:(x,h,o)=>{o.d(h,{p:()=>c});var e=o(94650),v=o(5565),l=o(87692),f=o(54463);let d=(()=>{class i{constructor(n,r){this.el=n,this.i18n=r,this.myValue=!0,this.backToTopText="",this.elem=n}onMouseMove(n){let s=(n instanceof MouseEvent?[n.clientX,n.clientY]:[n.touches[0].clientX,n.touches[0].clientY]).concat([this.elem.nativeElement]);window.requestAnimationFrame(()=>{this.transformElement(this.elem.nativeElement,s)})}onMouseLeave(n){setTimeout(()=>{this.elem.nativeElement.style.transform="perspective(50px) rotateX(0deg) rotateY(0deg)"},100)}onMouseEnter(n){this.elem.nativeElement.style.transition="transform 0.3s cubic-bezier(.25,.8,.25,1)"}transforms(n,r,s){let p=s.getBoundingClientRect();return"perspective(50px)    rotateX("+(r-p.y-p.height/2)/150+"deg)    rotateY("+-(n-p.x-p.width/2)/150+"deg) "}transformElement(n,r){n.style.transform=this.transforms.apply(null,r)}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(e.SBq),e.Y36(f.sK))},i.\u0275dir=e.lG2({type:i,selectors:[["","hover3d",""]],hostVars:1,hostBindings:function(n,r){1&n&&e.NdJ("mousemove",function(p){return r.onMouseMove(p)})("touchmove",function(p){return r.onMouseMove(p)})("mouseleave",function(p){return r.onMouseLeave(p)})("touchend",function(p){return r.onMouseLeave(p)})("mouseenter",function(p){return r.onMouseEnter(p)}),2&n&&e.Ikx("overflow-scroll",r.myValue)}}),i})();var _=o(95133),t=o(87457),g=o(65433),a=o(6227);function u(i,m){if(1&i){const n=e.EpF();e.TgZ(0,"div",2)(1,"div",3),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",4),e.NdJ("click",function(){e.CHM(n),e.oxw();const s=e.MAs(1);return e.KtG(s.dismiss())}),e.O4$(),e.TgZ(5,"svg",5),e._UZ(6,"path",6),e.qZA()()(),e.kcU(),e.TgZ(7,"ng-scrollbar",7)(8,"div",8)(9,"div",9),e._UZ(10,"app-dollar-dropdown",10),e.qZA(),e.TgZ(11,"button",11),e.NdJ("click",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.onOpenSendAssetsModal())}),e._UZ(12,"app-send-icon",12),e.TgZ(13,"span",13),e._uU(14),e.ALo(15,"translate"),e.qZA()()(),e._UZ(16,"div",14),e.TgZ(17,"div",15),e._uU(18),e.ALo(19,"translate"),e.qZA(),e.TgZ(20,"div",16)(21,"div",17),e.NdJ("click",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.onConvertCreditsModal())}),e.TgZ(22,"div",18),e._UZ(23,"img",19),e.TgZ(24,"button",20),e._uU(25),e.ALo(26,"translate"),e.qZA()()(),e.TgZ(27,"div",21),e.NdJ("click",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.onConvertOptionsModal())}),e.TgZ(28,"div",22),e._UZ(29,"img",23),e.TgZ(30,"button",20),e._uU(31),e.ALo(32,"translate"),e.qZA()()()()()}2&i&&(e.xp6(2),e.hij(" ",e.lcZ(3,7,"tyqoon-dollars")," "),e.xp6(5),e.Q6J("autoHeightDisabled",!1),e.xp6(3),e.Q6J("showDropdown",!1),e.xp6(4),e.hij(" ",e.lcZ(15,9,"send")," "),e.xp6(4),e.hij(" ",e.lcZ(19,11,"tyqoon-dollar-convert-desc")," "),e.xp6(7),e.hij(" ",e.lcZ(26,13,"get-store-credits")," "),e.xp6(6),e.hij(" ",e.lcZ(32,15,"get-tyqoon-options")," "))}let c=(()=>{class i extends v.V{constructor(){super(),this.isOpenChange=new e.vpe,this.handleOpenConvertModal=new e.vpe,this.handleOpenSendModal=new e.vpe}onOpenSendAssetsModal(){this.handleOpenSendModal.emit(l.p.Points)}onConvertCreditsModal(){this.handleOpenConvertModal.emit(l.K.Credits)}onConvertOptionsModal(){this.handleOpenConvertModal.emit(l.K.Options)}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-dollar-modal"]],inputs:{isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange",handleOpenConvertModal:"handleOpenConvertModal",handleOpenSendModal:"handleOpenSendModal"},features:[e.qOj],decls:3,vars:1,consts:[[3,"isOpen","didDismiss"],["modal",""],[1,"flex","bg-[#f4f4f4]","items-center","p-2"],[1,"fade-in-from-right","flex-1","font-bold","text-3xl",2,"--duration","200ms"],[1,"w-8","p-1","rounded","cursor-pointer","bg-[#ff2145]","text-white",3,"click"],["version","1.1","viewBox","0 0 100 100","overflow","visible","enable-background","new 0 0 100 100"],["stroke","currentColor","stroke-width","12","stroke-linecap","square","d","M 10,10 90,90 M 10,90 90,10"],["visibility","hover",2,"max-height","85vh",3,"autoHeightDisabled"],[1,"px-3","mt-3","flex","flex-col","items-center","justify-center"],[1,"fade-in-from-right","mb-4","dollar-balance",2,"--duration","200ms","--delay","100ms"],[1,"mb-4","cursor-default",3,"showDropdown"],["appRippleEffect","",1,"fade-in-from-top","send-button","relative","font-medium","m-0","h-14","border-2","border-solid","rounded-md",2,"--duration","200ms","--delay","150ms",3,"click"],[1,"absolute","left-6"],[1,"text-xl","xs:text-2xl","sm:ml-7"],[1,"mx-3","fade-in","seperator","mt-4",2,"--duration","200ms","--delay","200ms"],[1,"fade-in-from-left","font-medium","px-3","my-2","w-full","text-left","description",2,"--duration","200ms","--delay","150ms"],[1,"grid","grid-rows-2","sm:grid-rows-1","sm:grid-cols-2","sm:gap-x-3","gap-y-3","sm:gap-y-0","justify-center","w-full","mb-8","px-3"],[1,"fade-in-from-right","w-full","h-full","cursor-pointer",2,"--duration","300ms","--delay","200ms",3,"click"],["hover3d","",1,"credits-convert-card","relative","flex","flex-col","justify-between","items-center","w-full","h-full","overflow-hidden","rounded-xl","p-3","md:py-3","md:px-4","text-white"],["src","assets/images/cny-inverted.png","alt","Store Credits",1,"h-36","mb-2"],["appRippleEffect","",1,"convert-btn","font-medium","text-lg","sm:text-2xl","uppercase","rounded-md","w-full","mx-5","py-5","z-10"],[1,"fade-in-from-left","w-full","h-full","cursor-pointer",2,"--duration","300ms","--delay","200ms",3,"click"],["hover3d","",1,"options-convert-card","relative","flex","flex-col","justify-between","items-center","w-full","h-full","overflow-hidden","rounded-xl","p-3","md:py-3","md:px-4","text-white"],["src","assets/images/tyqoon-options.png","alt","TYQOON Options",1,"h-40","mb-1"]],template:function(n,r){1&n&&(e.TgZ(0,"ion-modal",0,1),e.NdJ("didDismiss",function(){return r.isOpenChange.emit(!1)}),e.YNc(2,u,33,17,"ng-template"),e.qZA()),2&n&&e.Q6J("isOpen",r.isOpen)},dependencies:[d,_.ki,t.C,g.KC,a.j,f.X$],styles:["ion-modal[_ngcontent-%COMP%]{--background: white;--border-radius: 8px;--width: 680px}.dollar-balance[_ngcontent-%COMP%]{width:260px}@media (min-width: 340px){.dollar-balance[_ngcontent-%COMP%]{width:290px}}.send-button[_ngcontent-%COMP%]{width:244px;border:2px solid #0067fe;background:#e5f0fe;color:#0067fe}@media (min-width: 340px){.send-button[_ngcontent-%COMP%]{width:220px}}@media (min-width: 640px){.send-button[_ngcontent-%COMP%]{width:12rem}}.seperator[_ngcontent-%COMP%]{border-bottom:3px solid #eaeaea}.description[_ngcontent-%COMP%]{font-size:17.5px}.credits-convert-card[_ngcontent-%COMP%]{background-color:#d3b8ff}.credits-convert-card[_ngcontent-%COMP%]   .convert-btn[_ngcontent-%COMP%]{background-color:#131313}.options-convert-card[_ngcontent-%COMP%]{background-color:#ffe7bb}.options-convert-card[_ngcontent-%COMP%]   .convert-btn[_ngcontent-%COMP%]{background-color:#f48300}"]}),i})()},81648:(x,h,o)=>{o.d(h,{s:()=>g});var e=o(94650),v=o(94830),l=o(36895),f=o(46364),d=o(54463);function _(a,u){if(1&a&&(e.TgZ(0,"span",7),e._uU(1),e.ALo(2,"currency"),e.qZA()),2&a){const c=u.ngIf;e.xp6(1),e.Oqu(e.lcZ(2,1,(null==c.user?null:c.user.balance)||0))}}const t=function(a){return{user:a}};let g=(()=>{class a{constructor(c){this.userService=c,this.isOpenStoreCreditModal=!1}ngOnInit(){}openStoreCreditModal(){this.isOpenStoreCreditModal=!0}}return a.\u0275fac=function(c){return new(c||a)(e.Y36(v.K))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-my-store-credit"]],inputs:{value:"value"},decls:10,vars:9,consts:[[1,"w-full","cursor-pointer",3,"click"],[1,"store-credit-wrapper","flex-1","flex","items-center","bg-white","rounded-lg"],[1,"w-full","flex","flex-col","justify-between","h-full","p-1.5"],[1,"text-center","text-lg","font-bold","sm:text-base","text-black","whitespace-nowrap"],[1,"text-center","text-[28px]","font-bold","sm:text-3xl","-mt-0.5"],["class","whitespace-nowrap",4,"ngIf"],[3,"isOpen","isOpenChange"],[1,"whitespace-nowrap"]],template:function(c,i){1&c&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return i.isOpenStoreCreditModal=!0}),e.TgZ(1,"div",1)(2,"div",2)(3,"p",3),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"p",4),e.YNc(7,_,3,3,"span",5),e.ALo(8,"async"),e.qZA()()()(),e.TgZ(9,"app-deposit-credit-modal",6),e.NdJ("isOpenChange",function(n){return i.isOpenStoreCreditModal=n}),e.qZA()),2&c&&(e.xp6(4),e.hij(" ",e.lcZ(5,3,"store-credit-my-credit")," "),e.xp6(3),e.Q6J("ngIf",e.VKq(7,t,e.lcZ(8,5,i.userService.userInfo$))),e.xp6(2),e.Q6J("isOpen",i.isOpenStoreCreditModal))},dependencies:[l.O5,f.N,l.Ov,l.H9,d.X$],styles:[".store-credit-wrapper[_ngcontent-%COMP%]{height:76px;border-width:2px;--tw-border-opacity: 1;border-color:rgb(94 94 94 / var(--tw-border-opacity))}"]}),a})()}}]);