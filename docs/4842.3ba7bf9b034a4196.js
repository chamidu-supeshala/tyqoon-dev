"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[4842,9127],{24499:(g,f,o)=>{o.d(f,{c:()=>s});var e=o(5565),r=o(94650);const m=["header"];let s=(()=>{class i extends e.V{constructor(l,c){super(),this.element=l,this.renderer=c,this.lastScrollTop=0}onContentScroll(l){const c=l.detail.scrollTop;c>=50&&this.lastScrollTop<c?this.renderer.addClass(this.header.el,"top-toolbar-hide"):this.renderer.removeClass(this.header.el,"top-toolbar-hide"),this.lastScrollTop=c}}return i.\u0275fac=function(l){return new(l||i)(r.Y36(r.SBq),r.Y36(r.Qsj))},i.\u0275cmp=r.Xpm({type:i,selectors:[["ng-component"]],viewQuery:function(l,c){if(1&l&&r.Gf(m,5),2&l){let b;r.iGM(b=r.CRH())&&(c.header=b.first)}},features:[r.qOj],decls:0,vars:0,template:function(l,c){},encapsulation:2}),i})()},59914:(g,f,o)=>{o.d(f,{D:()=>e});var e=(()=>{return(r=e||(e={})).All="All",r.Direct="Direct",r.Effective="Effective",e;var r})()},63460:(g,f,o)=>{o.d(f,{I:()=>e});class e{constructor(m,s,i){this.directInvites=m,this.earningFrom=s,this.storeLevel=i}}},7847:(g,f,o)=>{o.d(f,{h:()=>A});var e=o(94650),r=o(94830),m=o(7507),s=o(35482),i=o(36895),a=o(95133),l=o(38461);let c=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-check-icon"]],decls:2,vars:0,consts:[["clip-rule","evenodd","fill-rule","evenodd","stroke-linejoin","round","stroke-miterlimit","2","viewBox","0 0 24 24","fill","currentColor"],["d","m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56","fill-rule","nonzero"]],template:function(t,d){1&t&&(e.O4$(),e.TgZ(0,"svg",0),e._UZ(1,"path",1),e.qZA())},encapsulation:2}),n})();var b=o(79060),v=o(54463);function x(n,p){1&n&&e._UZ(0,"hr",34)}function _(n,p){1&n&&e._UZ(0,"hr",35)}function Z(n,p){if(1&n&&(e.TgZ(0,"li",39),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n){const t=p.$implicit;e.xp6(1),e.hij(" - ",e.lcZ(2,1,t)," ")}}function y(n,p){if(1&n&&(e.TgZ(0,"ul"),e.YNc(1,Z,3,3,"li",41),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",t.subBenefits)}}function w(n,p){if(1&n&&(e.TgZ(0,"div",36),e._UZ(1,"app-check-icon",37),e.TgZ(2,"div",38)(3,"p",39),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.YNc(6,y,2,1,"ul",40),e.qZA()()),2&n){const t=p.$implicit,d=e.oxw(2);e.Tol("monthly"===d.activeTab?"border-[3px] border-[#c6c6c6]":"border-rainbow border-rainbow--animated"),e.xp6(4),e.hij(" ",e.lcZ(5,4,t.text)," "),e.xp6(2),e.Q6J("ngIf",t.subBenefits)}}function T(n,p){if(1&n&&e._UZ(0,"img",42),2&n){const t=p.ngIf,d=e.oxw(2);e.Tol("monthly"===d.activeTab?"border-black":"border-[#fbfd2c]"),e.Q6J("src",t.avatar,e.LSH)("alt",t.username)}}function C(n,p){1&n&&e._UZ(0,"img",43)}function M(n,p){1&n&&e._UZ(0,"img",43)}const h=function(n,p){return{"border-b-[3px]":n,"border-primary":p}};function k(n,p){if(1&n){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3),e.NdJ("click",function(){e.CHM(t);const u=e.oxw();return e.KtG(u.activeTabs("monthly"))}),e._UZ(3,"img",4),e.TgZ(4,"p",5),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.YNc(7,x,1,0,"hr",6),e.qZA(),e.TgZ(8,"div",7),e.NdJ("click",function(){e.CHM(t);const u=e.oxw();return e.KtG(u.activeTabs("yearly"))}),e._UZ(9,"img",4),e.TgZ(10,"p",8),e._uU(11),e.ALo(12,"translate"),e.qZA(),e._UZ(13,"img",9),e.YNc(14,_,1,0,"hr",10),e.qZA(),e.TgZ(15,"button",11),e.NdJ("click",function(){e.CHM(t);const u=e.oxw();return e.KtG(u.isOpenChange.emit(!1))}),e._UZ(16,"app-close-icon",12),e.qZA()(),e.TgZ(17,"div",13)(18,"div",14),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.TgZ(21,"div",15),e._UZ(22,"img",16),e.TgZ(23,"div",17),e.YNc(24,w,7,6,"div",18),e.qZA()(),e.TgZ(25,"div",19)(26,"div",20),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"div",21),e.YNc(30,T,1,4,"img",22),e.ALo(31,"async"),e._UZ(32,"app-crown-shining-icon",23),e.qZA()(),e.TgZ(33,"div",24)(34,"div",25),e._uU(35),e.ALo(36,"translate"),e.qZA(),e.TgZ(37,"div",26),e._UZ(38,"img",27),e.qZA()(),e.TgZ(39,"p",28)(40,"span",29),e._uU(41),e.ALo(42,"number"),e.qZA(),e.TgZ(43,"span"),e._uU(44),e.ALo(45,"translate"),e.qZA()(),e.TgZ(46,"div",30),e.NdJ("click",function(){e.CHM(t);const u=e.oxw();return e.KtG(u.openProfileModal())}),e.YNc(47,C,1,0,"img",31),e.TgZ(48,"p",32),e._uU(49),e.ALo(50,"translate"),e.qZA(),e.YNc(51,M,1,0,"img",31),e._UZ(52,"app-crown-shining-icon",33),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("src",t.mvp.monthly.image,e.LSH),e.xp6(1),e.Tol(e.WLB(53,h,"monthly"===t.activeTab,"monthly"===t.activeTab)),e.xp6(1),e.hij(" ",e.lcZ(6,34,t.mvp.monthly.tabTitle)," "),e.xp6(2),e.Q6J("ngIf","yearly"===t.activeTab),e.xp6(2),e.Q6J("src",t.mvp.yearly.image,e.LSH),e.xp6(1),e.Tol(e.WLB(56,h,"yearly"===t.activeTab,"yearly"===t.activeTab)),e.xp6(1),e.hij(" ",e.lcZ(12,36,t.mvp.yearly.tabTitle)," "),e.xp6(3),e.Q6J("ngIf","monthly"===t.activeTab),e.xp6(4),e.Tol("monthly"===t.activeTab?"bg-[#eaeaea]":"bg-[#efe4b0]"),e.xp6(1),e.hij(" ",e.lcZ(20,38,t.selectedMvp.title)," "),e.xp6(3),e.Q6J("src",t.selectedMvp.image,e.LSH),e.xp6(2),e.Q6J("ngForOf",t.selectedMvp.benefits),e.xp6(2),e.Tol("monthly"===t.activeTab?"sm:border-y-[3px] sm:border-black":"sm:border-rainbow-y sm:border-rainbow-y--animated"),e.xp6(1),e.hij(" ",e.lcZ(28,40,t.selectedMvp.purchaseReward)," "),e.xp6(2),e.Tol("monthly"===t.activeTab?"border-[3px] border-black bg-[#e5e5e5]":"border-rainbow border-rainbow--animated get-mvp-modal__profile-super"),e.xp6(1),e.Q6J("ngIf",e.lcZ(31,42,t.userInfo$)),e.xp6(4),e.Tol("monthly"===t.activeTab?"sm:border-y-[3px] sm:border-black":"sm:border-rainbow-y sm:border-rainbow-y--animated"),e.xp6(1),e.hij(" ",e.lcZ(36,44,t.selectedMvp.unlock)," "),e.xp6(2),e.Tol("monthly"===t.activeTab?"border-[3px] border-black":"border-rainbow border-rainbow--animated"),e.xp6(4),e.hij(" \uffe5",e.xi3(42,46,t.selectedMvp.price,"0.2-2")," "),e.xp6(3),e.AsE("/",t.selectedMvp.days," ",e.lcZ(45,49,"game-board-get-prime-days"),""),e.xp6(2),e.Tol("monthly"===t.activeTab?"border-[3px] border-black":"border-rainbow border-rainbow--animated"),e.xp6(1),e.Q6J("ngIf","yearly"===t.activeTab),e.xp6(2),e.hij(" ",e.lcZ(50,51,t.selectedMvp.buttonText)," "),e.xp6(2),e.Q6J("ngIf","yearly"===t.activeTab)}}let A=(()=>{class n{constructor(t,d,u){this.userService=t,this.router=d,this.productService=u,this.isOpen=!1,this.isOpenChange=new e.vpe,this.activeTab="monthly",this.mvp={monthly:{tabTitle:"mvp-tab-title",title:"mvp-title",image:"assets/images/Ticket-Silver-v3-540px-min.png",benefits:[{text:"mvp-benefit-1"},{text:"mvp-benefit-2"},{text:"mvp-benefit-3",subBenefits:["mvp-benefit-3-1","mvp-benefit-3-2","mvp-benefit-3-3","mvp-benefit-3-4"]}],purchaseReward:"mvp-purchase-reward",unlock:"mvp-unlock",buttonText:"mvp-btn",price:500,days:30},yearly:{tabTitle:"super-mvp-tab-title",title:"super-mvp-title",image:"assets/images/Ticket-Gold-v3-540px-min.png",benefits:[{text:"super-mvp-benefit-1"},{text:"super-mvp-benefit-2"},{text:"super-mvp-benefit-3",subBenefits:["super-mvp-benefit-3-1","super-mvp-benefit-3-2","super-mvp-benefit-3-3","super-mvp-benefit-3-4"]}],purchaseReward:"super-mvp-purchase-reward",unlock:"super-mvp-unlock",buttonText:"super-mvp-btn",price:5e3,days:360}},this.item=[{storeId:"",productOrder:[{skuId:"1",quantity:1,cover:"/assets/images/Ticket-Silver-v3-540px-min.png",productName:"mvp-tab-title"}]}],this.productList=[],this.generateOrderConfirmParams=O=>({o:btoa(encodeURIComponent(JSON.stringify(O)))})}ngOnInit(){this.userInfo$=this.userService.userInfo$.asObservable()}get selectedMvp(){return this.mvp[this.activeTab]}activeTabs(t){switch(this.activeTab=t,t){case"monthly":this.item=[{storeId:"",productOrder:[{skuId:"1",quantity:1,cover:"/assets/images/Ticket-Silver-v3-540px-min.png",productName:"mvp-tab-title"}]}];break;case"yearly":this.item=[{storeId:"",productOrder:[{skuId:"2",quantity:1,cover:"/assets/images/Ticket-Gold-v3-540px-min.png",productName:"super-mvp-tab-title"}]}]}}handleClick(t,d){t.preventDefault(),this.activeTab=d}closeModal(){this.isOpenChange.emit(!1)}get productOrder(){return this.item.reduce((t,d)=>(t.push(...d.productOrder.map(u=>({skuId:u.skuId,quantity:u.quantity}))),t),[])}openProfileModal(){this.closeModal(),console.log(this.productList),setTimeout(()=>{console.log(151515,this.item),this.router.navigate(["/order/confirm"],{queryParams:this.generateOrderConfirmParams(this.item)})},500)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r.K),e.Y36(m.F0),e.Y36(s.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-get-mvp-modal"]],inputs:{isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange"},decls:2,vars:1,consts:[[3,"isOpen","didDismiss"],[1,"get-mvp-modal","flex","flex-col","rounded-[12px]","overflow-hidden"],["id","modal-header",1,"flex","items-center","p-2","rounded-t-[12px]","w-full","relative","z-10"],[1,"h-[86px]","border-[3px]","border-black","bg-[#eaeaea]","rounded-xl","px-3","pt-4","pb-6","flex","items-center","gap-2","mr-1","cursor-pointer","relative",3,"click"],["alt","",1,"h-[40px]","w-[40px]",3,"src"],[1,"text-[24px]","leading-[24px]","font-bold","uppercase","hidden","sm:block"],["class","border-b border-black absolute bottom-[.85rem] left-0 w-full",4,"ngIf"],[1,"h-[86px]","border-rainbow","border-rainbow--animated","bg-[#efe4b0]","rounded-xl","px-3","pt-4","pb-6","flex","items-center","gap-2","cursor-pointer","relative",3,"click"],[1,"text-[24px]","leading-[24px]","font-bold","uppercase","whitespace-nowrap","hidden","sm:block"],["src","assets/svgs/fire-animation.svg","alt","",1,"h-[40px]","transform","scale-125"],["class","border-b border-black absolute bottom-4 left-0 w-full",4,"ngIf"],[1,"rounded-[5px]","bg-[#ff2145]","p-1","ml-auto","w-[36px]","h-[36px]","flex","items-center","justify-center","outline-none",3,"click"],[1,"w-[24px]","text-white"],["id","modal-body",1,"bg-white","w-full","rounded-[12px]","h-full","overflow-y-auto","shadow-scroll","-mt-6","relative","z-20"],[1,"sticky","top-0","z-10","text-[32px]","text-center","uppercase","font-bold","xs:px-10","py-4","border-b-[3px]","border-black","sm:text-right","sm:text-[48px]","sm:relative"],[1,"relative","flex","gap-8","flex-col","items-center","mb-4","sm:flex-row","sm:items-start","sm:z-20","sm:mb-0"],["alt","",1,"w-[220px]","h-[220px]","mx-8","mt-4","sm:-mt-12",3,"src"],[1,"flex","flex-col","gap-4","py-4","w-full","px-4"],["class","bg-[#e5e5e5] min-h-[46px] rounded-xl px-2 py-2 flex items-center gap-2",3,"class",4,"ngFor","ngForOf"],[1,"flex","flex-col-reverse","items-center","gap-2","mb-4","sm:gap-0","sm:flex-row","sm:absolute","sm:bottom-36","sm:left-0","sm:mb-0"],[1,"h-[44px]","text-[28px]","sm:text-[20px]","font-bold","py-1","px-3","tracking-tighter","flex","items-center","sm:bg-[#e5e5e5]"],[1,"w-[100px]","h-[100px]","rounded-xl","flex","items-center","justify-center","relative","sm:w-[80px]","sm:h-[80px]"],["class","w-[80px] h-[80px] sm:w-[60px] sm:h-[60px] rounded-full border-[3px]",3,"src","alt","class",4,"ngIf"],[1,"w-[60px]","h-[80px]","-top-8","block","absolute","left-1/2","transform","-translate-x-1/2","sm:w-[40px]","sm:h-[60px]","sm:-top-4"],[1,"flex","flex-col-reverse","items-center","gap-2","mb-4","sm:gap-0","sm:flex-row","sm:absolute","sm:bottom-10","sm:left-0","sm:mb-0"],[1,"h-[52px]","text-[36px]","leading-[38px]","text-center","font-bold","uppercase","py-1","px-3","tracking-tighter","flex","items-center","justify-center","sm:w-[240px]","md:w-[300px]","sm:bg-[#e5e5e5]"],[1,"w-[100px]","h-[100px]","rounded-xl","bg-[#e5e5e5]","flex","items-center","justify-center","relative"],["src","assets/images/franchise-shop-image.png","alt","franchise-shop-image",1,"-mt-4"],[1,"text-center","font-bold","px-4","mb-10","sm:text-right"],[1,"text-[36px]","-mx-2"],[1,"relative","mx-auto","min-w-[240px]","w-max","h-[70px]","max-h-[70px]","bg-gradient-to-r","!from-[#8c0aff]","!to-[#ad51fe]","rounded-xl","cursor-pointer","flex","items-center","mb-6","gap-3","px-3","sm:ml-auto","sm:mr-4",3,"click"],["class","h-[40px] transform scale-125 -mt-2 hidden xs:block","src","assets/svgs/fire-animation.svg","alt","",4,"ngIf"],[1,"text-[24px]","text-white","text-center","font-medium","w-full"],[1,"w-[80px]","h-[100px]","block","absolute","-top-12","left-1/2","transform","-translate-x-1/2"],[1,"border-b","border-black","absolute","bottom-[.85rem]","left-0","w-full"],[1,"border-b","border-black","absolute","bottom-4","left-0","w-full"],[1,"bg-[#e5e5e5]","min-h-[46px]","rounded-xl","px-2","py-2","flex","items-center","gap-2"],[1,"block","w-[20px]","h-[20px]","text-[#4fff50]"],[1,"flex","flex-col"],[1,"font-bold"],[4,"ngIf"],["class","font-bold",4,"ngFor","ngForOf"],[1,"w-[80px]","h-[80px]","sm:w-[60px]","sm:h-[60px]","rounded-full","border-[3px]",3,"src","alt"],["src","assets/svgs/fire-animation.svg","alt","",1,"h-[40px]","transform","scale-125","-mt-2","hidden","xs:block"]],template:function(t,d){1&t&&(e.TgZ(0,"ion-modal",0),e.NdJ("didDismiss",function(){return d.isOpenChange.emit(!1)}),e.YNc(1,k,53,59,"ng-template"),e.qZA()),2&t&&e.Q6J("isOpen",d.isOpen)},dependencies:[i.sg,i.O5,a.ki,l.D,c,b.H,i.Ov,i.JJ,v.X$],styles:[".get-mvp-modal[_ngcontent-%COMP%]{width:826px;max-width:95vw;max-height:95vh;max-height:calc(var(--vh, 1vh) * 95)}.get-mvp-modal__profile-super[_ngcontent-%COMP%]{background:linear-gradient(45deg,#492c52,#2c232f)}"]}),n})()},18215:(g,f,o)=>{o.d(f,{Z:()=>i});var e=o(94650),r=o(68514),m=o(54463);function s(a,l){if(1&a){const c=e.EpF();e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){const x=e.CHM(c).method,_=e.oxw();return e.KtG(_.handleBtnClick(x))}),e._UZ(2,"img",2),e.TgZ(3,"div",3),e._uU(4),e.ALo(5,"translate"),e.qZA()()()}2&a&&(e.xp6(4),e.Oqu(e.lcZ(5,1,"toolkit-official-button")))}let i=(()=>{class a{constructor(){}handleBtnClick(c){c(this.additionalData)}}return a.\u0275fac=function(c){return new(c||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-global-customer-service"]],inputs:{additionalData:"additionalData"},decls:2,vars:0,consts:[[1,"hidden","md:block","rounded-l-2xl","border-y","border-l","border-solid","border-[#e9e9e9]","py-4","px-2","bg-white","shadow-xl","absolute","right-0","w-16","transform","-translate-y-1/2",2,"z-index","999"],[1,"inline",3,"click"],["src","assets/images/toolkit-item1.png","alt","",1,"m-auto","h-10","mb-1"],[1,"text-xs","font-light","text-center"]],template:function(c,b){1&c&&(e.TgZ(0,"app-customer-service"),e.YNc(1,s,6,3,"ng-template"),e.qZA())},dependencies:[r.M,m.X$],styles:["[_nghost-%COMP%]{position:sticky;top:50%;right:0;z-index:100;display:block}"]}),a})()},49127:(g,f,o)=>{o.d(f,{H:()=>m});var e=o(24837),r=o(94650);let m=(()=>{class s{constructor(a){this.toolbar=a.nativeElement}ngAfterViewInit(){if(e.Z.isServer)return;const a=setInterval(()=>{if(this.toolbar.shadowRoot){let l=this.toolbar.shadowRoot.querySelector(".toolbar-container");l&&(l.style.contain="none",l.style.overflow="visible",clearInterval(a))}},500)}}return s.\u0275fac=function(a){return new(a||s)(r.Y36(r.SBq))},s.\u0275dir=r.lG2({type:s,selectors:[["","appOverflowVisible",""]]}),s})()},79060:(g,f,o)=>{o.d(f,{H:()=>r});var e=o(94650);let r=(()=>{class m{constructor(){}ngOnInit(){}}return m.\u0275fac=function(i){return new(i||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-crown-shining-icon"]],decls:14,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","id","crown-an","viewBox","0 0 595.28 499.7"],["id","crown-mask","x","63.54","y","-35.86","width","468.2","height","571.41","maskUnits","userSpaceOnUse"],["points","103.4 424.16 496.04 424.16 531.74 112.42 399.07 303.39 301.89 75.54 203.34 303.39 63.54 97.55 103.4 424.16","fill","#fff"],["d","M103.4,449a24.79,24.79,0,0,1-24.61-21.79L38.93,100.55A24.79,24.79,0,0,1,84,83.62L198.5,252.14,279.14,65.7a24.79,24.79,0,0,1,22.75-15H302A24.8,24.8,0,0,1,324.7,65.81l79.59,186.62L511.38,98.28a24.79,24.79,0,0,1,45,17L520.67,427A24.79,24.79,0,0,1,496,449Z","fill","#22272d"],["points","103.4 424.16 496.04 424.16 531.74 112.42 399.07 303.39 301.89 75.54 203.34 303.39 63.54 97.55 103.4 424.16","fill","#fdcb53"],["mask","url(#crown-mask)"],["id","shine","points","250.94 535.54 265.02 339.96 201.71 535.56 119.4 535.56 254.07 -35.86 381.75 -35.86 249.06 276.85 405.32 -35.86 475.87 -35.86 250.94 535.54","fill","#fbebaf"],["id","star-1","d","M506.7,427.58,570,405,506.7,382.44l-22.57-63.27-22.57,63.27L398.29,405l63.27,22.57,22.57,63.27S505.66,430.48,506.7,427.58Z","fill","#fff","opacity","0"],["id","star-3","d","M358.76,224.26,422,201.69l-63.27-22.57-22.57-63.27s-21.54,60.37-22.57,63.27l-63.27,22.57,63.27,22.57,22.57,63.27S357.72,227.16,358.76,224.26Z","fill","#fff","opacity","0"],["id","star-2","d","M164.82,385.68l63.27-22.57-63.27-22.57-22.57-63.27s-21.54,60.37-22.57,63.27L56.41,363.11l63.27,22.57L142.25,449S163.78,388.58,164.82,385.68Z","fill","#fff","opacity","0"]],template:function(i,a){1&i&&(e.O4$(),e.TgZ(0,"svg",0)(1,"style"),e._uU(2," @keyframes crown-shine { 0% { transform: translateX(-370px); } 25%, 100% { transform: translateX(370px); } } #crown-an #shine { animation: crown-shine 5s cubic-bezier(0.37, 0, 0.63, 1) both infinite; } @keyframes star-1 { 0%, 25%, 65%, 100% { transform: scale(.7); opacity: 0; } 29%, 61% { opacity: 1; } 35%, 55% { transform: scale(1); } 45% { transform: scale(.7); } } @keyframes star-2 { 0%, 30%, 70%, 100% { transform: scale(.7); opacity: 0; } 34%, 66% { opacity: 1; } 40%, 60% { transform: scale(1); } 50% { transform: scale(.7); } } @keyframes star-3 { 0%, 35%, 75%, 100% { transform: scale(.7); opacity: 0; } 39%, 71% { opacity: 1; } 45%, 65% { transform: scale(1); } 55% { transform: scale(.7); } } #crown-an #star-1 { transform-origin: 484.12px 405.01px; animation: star-1 5s ease-in-out both infinite; } #crown-an #star-2 { transform-origin: 142.24px 363.1px; animation: star-2 5s ease-in-out both infinite; } #crown-an #star-3 { transform-origin: 336.18px 201.69px; animation: star-3 5s ease-in-out both infinite; } "),e.qZA(),e.TgZ(3,"defs")(4,"mask",1),e._UZ(5,"polygon",2),e.qZA()(),e.TgZ(6,"g"),e._UZ(7,"path",3)(8,"polygon",4),e.qZA(),e.TgZ(9,"g",5),e._UZ(10,"polygon",6),e.qZA(),e._UZ(11,"path",7)(12,"path",8)(13,"path",9),e.qZA())},encapsulation:2}),m})()},78064:(g,f,o)=>{o.d(f,{i:()=>m});var e=o(94650),r=o(54463);let m=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-increase-shares"]],decls:56,vars:6,consts:[["id","mvp-b-an","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 252.53 149.27",1,"w-full","h-full"],["id","mvp-b-lingrad","x1","11.26","y1","103.6","x2","241.27","y2","103.6","gradientUnits","userSpaceOnUse"],["offset","0","stop-color","#8a08fe"],["offset","1","stop-color","#ad52fe"],["id","mvp-b-mask","maskUnits","userSpaceOnUse"],["x","11.26","y","65.6","width","230.01","height","76.01","rx","17","fill","#fff"],["id","mvp-b-lingrad-2","x1","195.54","y1","315.57","x2","195.54","y2","272.23","gradientTransform","matrix(0.16, -0.51, 1.65, 0.51, -390.18, 53.8)","gradientUnits","userSpaceOnUse"],["offset","0","stop-color","#fff","stop-opacity","0"],["offset","0.5","stop-color","#fff"],["offset","1","stop-color","#fff","stop-opacity","0"],["id","mvp-b-grad","gradientUnits","objectBoundingBox","x1","0","y1","0","x2","1","y2","1"],["offset","0","stop-color","red"],["attributeName","stop-color","values","red;purple;blue;green;yellow;orange;red;","dur","3s","repeatCount","indefinite"],["offset",".2","stop-color","purple"],["attributeName","stop-color","values","purple;blue;green;yellow;orange;red;purple;","dur","3s","repeatCount","indefinite"],["offset",".4","stop-color","blue"],["attributeName","stop-color","values","blue;green;yellow;orange;red;purple;blue;","dur","3s","repeatCount","indefinite"],["offset",".6","stop-color","green"],["attributeName","stop-color","values","green;yellow;orange;red;purple;blue;green;","dur","3s","repeatCount","indefinite"],["offset",".8","stop-color","yellow"],["attributeName","stop-color","values","yellow;orange;red;purple;blue;green;yellow;","dur","3s","repeatCount","indefinite"],["offset","1","stop-color","orange"],["attributeName","stop-color","values","orange;red;purple;blue;green;yellow;orange;","dur","3s","repeatCount","indefinite"],["id","mvp-b-mask-2","x","99.28","y","20.65","width","52.46","height","64.03","maskUnits","userSpaceOnUse"],["points","103.75 72.2 147.74 72.2 151.74 37.27 136.88 58.66 125.99 33.13 114.94 58.66 99.28 35.6 103.75 72.2","fill","#fff"],["id","image","width","512","height","446",0,"xlink","href","/assets/images/tyqoon-share-anim.png"],["id","coupon-1"],["transform","translate(74.62 12.12) rotate(60.99) scale(0.13)",0,"xlink","href","#image"],["id","coupon-2"],["transform","translate(140.36 41.64) rotate(-17.37) scale(0.08)",0,"xlink","href","#image"],["id","coupon-3"],["transform","translate(166.83 29.96) rotate(5.08) scale(0.11)",0,"xlink","href","#image"],["id","gradient","fill","url(#mvp-b-grad)","d","M243.27,82.6v42a19,19,0,0,1-19,19h-196a19,19,0,0,1-19-19v-42a19,19,0,0,1,19-19h196A19,19,0,0,1,243.27,82.6Z"],["x","11.26","y","65.6","width","230.01","height","76.01","rx","17","fill","url(#mvp-b-lingrad)"],["x","89.26","y","-10.41","width","74.01","height","228.01","rx","16","transform","translate(229.87 -22.66) rotate(90)","fill","none","stroke","#760df2","stroke-miterlimit","10","stroke-width","2"],["mask","url(#mvp-b-mask)"],["id","shine-button","d","M186.2,36.48,137.93,192.83l-71.6-22.1L114.6,14.37Z","opacity","0.5","fill","url(#mvp-b-lingrad-2)"],["font-size","20","dominant-baseline","middle","text-anchor","middle","font-family","Roboto-Medium, Roboto","font-weight","500","fill","#fff"],["x","50%","y","65%"],["x","50%","dy","1.2em"],["d","M103.75,75A2.77,2.77,0,0,1,101,72.53l-4.47-36.6A2.78,2.78,0,0,1,101.58,34L114.4,52.92l9-20.89A2.78,2.78,0,0,1,126,30.35h0A2.78,2.78,0,0,1,128.54,32L137.46,53l12-17.27a2.78,2.78,0,0,1,5,1.9l-4,34.93A2.76,2.76,0,0,1,147.74,75Z","fill","#22272d"],["points","103.75 72.2 147.74 72.2 151.74 37.27 136.88 58.66 125.99 33.13 114.94 58.66 99.28 35.6 103.75 72.2","fill","#fdcb53"],["mask","url(#mvp-b-mask-2)"],["id","shine","data-name","shine","points","120.28 84.68 121.86 62.76 114.76 84.68 105.54 84.68 120.63 20.65 134.94 20.65 120.07 55.69 137.58 20.65 145.48 20.65 120.28 84.68","fill","#fbebaf"],["id","star-1","d","M148.94,72.58,156,70.05l-7.09-2.53-2.53-7.09s-2.41,6.77-2.53,7.09l-7.09,2.53,7.09,2.53,2.53,7.09Z","fill","#fff","opacity","0"],["id","star-3","d","M132.36,49.8l7.09-2.53-7.09-2.53-2.53-7.09-2.53,7.09-7.09,2.53,7.09,2.53,2.53,7.09Z","fill","#fff","opacity","0"],["id","star-2","d","M110.63,67.88l7.09-2.52-7.09-2.53-2.53-7.09-2.53,7.09-7.09,2.53,7.09,2.52L108.1,75Z","fill","#fff","opacity","0"]],template:function(a,l){1&a&&(e.O4$(),e.TgZ(0,"svg",0)(1,"defs")(2,"linearGradient",1),e._UZ(3,"stop",2)(4,"stop",3),e.qZA(),e.TgZ(5,"mask",4),e._UZ(6,"rect",5),e.qZA(),e.TgZ(7,"linearGradient",6),e._UZ(8,"stop",7)(9,"stop",8)(10,"stop",9),e.qZA(),e.TgZ(11,"linearGradient",10)(12,"stop",11),e._UZ(13,"animate",12),e.qZA(),e.TgZ(14,"stop",13),e._UZ(15,"animate",14),e.qZA(),e.TgZ(16,"stop",15),e._UZ(17,"animate",16),e.qZA(),e.TgZ(18,"stop",17),e._UZ(19,"animate",18),e.qZA(),e.TgZ(20,"stop",19),e._UZ(21,"animate",20),e.qZA(),e.TgZ(22,"stop",21),e._UZ(23,"animate",22),e.qZA()(),e.TgZ(24,"mask",23),e._UZ(25,"polygon",24),e.qZA(),e._UZ(26,"image",25),e.qZA(),e.TgZ(27,"g",26),e._UZ(28,"use",27),e.qZA(),e.TgZ(29,"g",28),e._UZ(30,"use",29),e.qZA(),e.TgZ(31,"g",30),e._UZ(32,"use",31),e.qZA(),e.TgZ(33,"g")(34,"g"),e._UZ(35,"path",32)(36,"rect",33)(37,"rect",34),e.qZA(),e.TgZ(38,"g",35),e._UZ(39,"path",36),e.qZA(),e.TgZ(40,"text",37)(41,"tspan",38),e._uU(42),e.ALo(43,"translate"),e.qZA(),e.TgZ(44,"tspan",39),e._uU(45),e.ALo(46,"translate"),e.qZA()()(),e.TgZ(47,"g")(48,"g"),e._UZ(49,"path",40)(50,"polygon",41),e.qZA(),e.TgZ(51,"g",42),e._UZ(52,"polygon",43),e.qZA(),e._UZ(53,"path",44)(54,"path",45)(55,"path",46),e.qZA()()),2&a&&(e.xp6(42),e.Oqu(e.lcZ(43,2,"increase-shares")),e.xp6(3),e.Oqu(e.lcZ(46,4,"with-mvp")))},dependencies:[r.X$],styles:["@keyframes mvp-button-shine{0%{transform:translate(-150px)}25%,to{transform:translate(150px)}}#mvp-b-an[_ngcontent-%COMP%]   #shine-button[_ngcontent-%COMP%]{animation:mvp-button-shine 5s -.1s cubic-bezier(.37,0,.63,1) both infinite}@keyframes mvp-crown-shine{0%{transform:translate(-41px)}25%,to{transform:translate(41px)}}#mvp-b-an[_ngcontent-%COMP%]   #shine[_ngcontent-%COMP%]{animation:mvp-crown-shine 5s cubic-bezier(.37,0,.63,1) both infinite}@keyframes star-1{0%,25%,65%,to{transform:scale(.7);opacity:0}29%,61%{opacity:1}35%,55%{transform:scale(1)}45%{transform:scale(.7)}}@keyframes star-2{0%,30%,70%,to{transform:scale(.7);opacity:0}34%,66%{opacity:1}40%,60%{transform:scale(1)}50%{transform:scale(.7)}}@keyframes star-3{0%,35%,75%,to{transform:scale(.7);opacity:0}39%,71%{opacity:1}45%,65%{transform:scale(1)}55%{transform:scale(.7)}}#mvp-b-an[_ngcontent-%COMP%]   #star-1[_ngcontent-%COMP%]{transform-origin:146.4px 70.05px;animation:star-1 5s ease-in-out both infinite}#mvp-b-an[_ngcontent-%COMP%]   #star-2[_ngcontent-%COMP%]{transform-origin:108.09px 65.35px;animation:star-2 5s ease-in-out both infinite}#mvp-b-an[_ngcontent-%COMP%]   #star-3[_ngcontent-%COMP%]{transform-origin:129.83px 47.26px;animation:star-3 5s ease-in-out both infinite}@keyframes coupon-jump{0%,15%,25%,to{transform:translateY(0)}20%{transform:translateY(-15%)}}#mvp-b-an[_ngcontent-%COMP%]   #coupon-1[_ngcontent-%COMP%]{animation:coupon-jump 5s ease-in-out both infinite}#mvp-b-an[_ngcontent-%COMP%]   #coupon-2[_ngcontent-%COMP%]{animation:coupon-jump 5s .1s ease-in-out both infinite}#mvp-b-an[_ngcontent-%COMP%]   #coupon-3[_ngcontent-%COMP%]{animation:coupon-jump 5s .2s ease-in-out both infinite}"]}),s})()}}]);