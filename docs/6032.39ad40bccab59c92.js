"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[6032],{44365:(S,y,o)=>{o.d(y,{h:()=>c});var n=o(94650),t=o(24837),k=o(95698),Z=o(56889),x=o(94830),b=o(7507),L=o(36895),B=o(24006),O=o(95133),A=o(63225),I=o(90147),E=o(54463);const d=["popover"];function M(a,s){if(1&a){const e=n.EpF();n.TgZ(0,"ion-input",9),n.NdJ("ngModelChange",function(_){n.CHM(e);const T=n.oxw(3);return n.KtG(T.biddingService.bidAmount=_)})("ionBlur",function(){n.CHM(e);const _=n.oxw(3);return n.KtG(_.handleBlur())})("keyup",function(_){n.CHM(e);const T=n.oxw(3);return n.KtG(T.onKeyUp(_))}),n.ALo(1,"async"),n.qZA()}if(2&a){const e=n.oxw(3);n.Q6J("ngModel",e.biddingService.bidAmount)("min",1)("max",n.lcZ(1,3,e.biddingService.ticketCount$))}}function u(a,s){if(1&a){const e=n.EpF();n.TgZ(0,"ion-input",9),n.NdJ("ngModelChange",function(_){n.CHM(e);const T=n.oxw(3);return n.KtG(T.customBidAmount=_)})("ionBlur",function(){n.CHM(e);const _=n.oxw(3);return n.KtG(_.handleBlur())})("keyup",function(_){n.CHM(e);const T=n.oxw(3);return n.KtG(T.onKeyUp(_))}),n.ALo(1,"async"),n.qZA()}if(2&a){const e=n.oxw(3);n.Q6J("ngModel",e.customBidAmount)("min",1)("max",n.lcZ(1,3,e.biddingService.ticketCount$))}}function v(a,s){if(1&a){const e=n.EpF();n.TgZ(0,"div",5),n.YNc(1,M,2,5,"ion-input",6),n.YNc(2,u,2,5,"ng-template",null,7,n.W1O),n.TgZ(4,"ion-icon",8),n.NdJ("click",function(){n.CHM(e);const _=n.oxw(2);return n.KtG(_.onResetValue())}),n.qZA()()}if(2&a){const e=n.MAs(3),p=n.oxw(2);n.xp6(1),n.Q6J("ngIf",!p.customBidAmount)("ngIfElse",e)}}function h(a,s){if(1&a&&(n.ynx(0),n.YNc(1,v,5,2,"div",4),n.BQk()),2&a){const e=n.oxw(),p=n.MAs(5);n.xp6(1),n.Q6J("ngIf",e.isCustomValueMode)("ngIfElse",p)}}function P(a,s){if(1&a){const e=n.EpF();n.TgZ(0,"div",10),n.NdJ("click",function(){n.CHM(e);const _=n.oxw();return n.KtG(_.goToLogin())}),n._UZ(1,"img",11),n._uU(2),n.ALo(3,"translate"),n.qZA()}2&a&&(n.xp6(2),n.hij(" ",n.lcZ(3,1,"login-to-bid")," "))}function D(a,s){if(1&a){const e=n.EpF();n.TgZ(0,"div",12),n.NdJ("click",function(_){n.CHM(e);const T=n.oxw();return n.KtG(T.handleSelectOpen(_))}),n._UZ(1,"img",13),n.TgZ(2,"span",14)(3,"span",15),n._uU(4,"x"),n.qZA(),n._uU(5),n.qZA(),n._UZ(6,"ion-icon",16),n.qZA()}if(2&a){const e=n.oxw();let p;n.xp6(5),n.hij(" ",null!==(p=e.customBidAmount)&&void 0!==p?p:e.biddingService.bidAmount," ")}}function U(a,s){1&a&&n._UZ(0,"ion-icon",30)}function K(a,s){if(1&a){const e=n.EpF();n.TgZ(0,"div",24),n.NdJ("click",function(){n.CHM(e);const _=n.oxw().$implicit,T=n.oxw(3);return n.KtG(T.selectOption(_))}),n.TgZ(1,"div",25),n._UZ(2,"img",26),n.TgZ(3,"span",27),n._uU(4,"x"),n.qZA(),n.TgZ(5,"span",28),n._uU(6),n.qZA()(),n.YNc(7,U,1,0,"ion-icon",29),n.qZA()}if(2&a){const e=s.ngLet,p=n.oxw().$implicit;n.ekj("active",e),n.xp6(6),n.Oqu(p),n.xp6(1),n.Q6J("ngIf",e)}}function N(a,s){if(1&a&&(n.ynx(0),n.YNc(1,K,8,4,"div",23),n.BQk()),2&a){const e=s.$implicit,p=n.oxw(3);let _;n.xp6(1),n.Q6J("ngLet",(null!==(_=p.customBidAmount)&&void 0!==_?_:p.biddingService.bidAmount)===e)}}function l(a,s){if(1&a){const e=n.EpF();n.TgZ(0,"div",19),n.YNc(1,N,2,1,"ng-container",20),n.TgZ(2,"div",21),n.NdJ("click",function(){n.CHM(e);const _=n.oxw(2);return n.KtG(_.selectOption("custom"))}),n.TgZ(3,"div",22),n._uU(4),n.ALo(5,"translate"),n.qZA()()()}if(2&a){const e=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",e.options),n.xp6(3),n.hij(" ",n.lcZ(5,2,"custom-amount")," ")}}function f(a,s){if(1&a){const e=n.EpF();n.TgZ(0,"ion-popover",17,18),n.NdJ("didDismiss",function(){n.CHM(e);const _=n.oxw();return n.KtG(_.isMenuOpen=!1)}),n.YNc(2,l,6,4,"ng-template"),n.qZA()}if(2&a){const e=n.oxw();n.Q6J("isOpen",e.isMenuOpen)("dismissOnSelect",!0)("size","cover")}}let c=(()=>{class a{constructor(e,p,_){this.biddingService=e,this.userService=p,this.router=_,this.customBidAmount=null,this.onChangeBidAmount=new n.vpe,this.isMenuOpen=!1,this.isCustomValueMode=!1,this.existingValue=0,this.options=[1,10,100,1e3,1e4]}handleSelectOpen(e){this.options=[1,10,100,1e3,1e4].filter(p=>p<=this.biddingService.ticketCount$.getValue()),this.popover&&(this.popover.event=e,this.isMenuOpen=!0)}selectOption(e){"custom"===e?(this.isCustomValueMode=!0,this.existingValue=this.customBidAmount??this.biddingService.bidAmount):(this.updateBidAmount(e),this.onChangeBidAmount.next(e))}handleBlur(){t.Z.isBrowser&&(this.validateAmount(),setTimeout(()=>{this.isCustomValueMode=!1},200))}onKeyUp(e){this.validateAmount(),13===e.keyCode&&(this.isCustomValueMode=!1)}onResetValue(){this.updateBidAmount(this.existingValue),this.isCustomValueMode=!1}validateAmount(){this.customBidAmount?this.customBidAmount=Math.max(Math.abs(Math.floor(this.customBidAmount)),1):this.biddingService.bidAmount=Math.max(Math.abs(Math.floor(this.biddingService.bidAmount)),1),(this.customBidAmount??this.biddingService.bidAmount)>this.biddingService.ticketCount$.getValue()?this.updateBidAmount(Math.min(this.biddingService.ticketCount$.getValue(),999999)):this.updateBidAmount(this.customBidAmount??this.biddingService.bidAmount)}updateBidAmount(e){this.customBidAmount?this.customBidAmount=e:(this.biddingService.bidAmount=e,this.biddingService.saveTicketsSelection(e).pipe((0,k.q)(1)).subscribe()),this.onChangeBidAmount.next(this.customBidAmount??this.biddingService.bidAmount)}goToLogin(){this.router.navigate(["/auth/login"],{queryParams:{back:encodeURIComponent(this.router.url)}})}}return a.\u0275fac=function(e){return new(e||a)(n.Y36(Z.g),n.Y36(x.K),n.Y36(b.F0))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-bidding-ticket-count"]],viewQuery:function(e,p){if(1&e&&n.Gf(d,5),2&e){let _;n.iGM(_=n.CRH())&&(p.popover=_.first)}},inputs:{customBidAmount:"customBidAmount"},outputs:{onChangeBidAmount:"onChangeBidAmount"},decls:7,vars:4,consts:[[4,"ngIf","ngIfElse"],["noLogin",""],["selectPicker",""],["class","theme-popover","side","bottom","alignment","start","showBackdrop","false",3,"isOpen","dismissOnSelect","size","didDismiss",4,"isBrowser"],["class","bid-amount relative border flex gap-1 flex-1 items-center px-2 py-1 rounded-md h-9",4,"ngIf","ngIfElse"],[1,"bid-amount","relative","border","flex","gap-1","flex-1","items-center","px-2","py-1","rounded-md","h-9"],["type","number","class","flex-1 h-5 mt-0.5 !font-medium text-base text-left flex items-center",3,"ngModel","min","max","ngModelChange","ionBlur","keyup",4,"ngIf","ngIfElse"],["customAmount",""],["name","close-outline",1,"close-btn","rounded-full","w-4","h-4","text-red-600","cursor-pointer",3,"click"],["type","number",1,"flex-1","h-5","mt-0.5","!font-medium","text-base","text-left","flex","items-center",3,"ngModel","min","max","ngModelChange","ionBlur","keyup"],[1,"bid-amount","cursor-pointer","relative","border","flex","text-sm","font-medium","2xl:text-base","items-center","px-1","py-1","rounded-md","h-9","whitespace-nowrap",3,"click"],["src","/assets/images/ticket.png",1,"h-5","mr-1.5","-ml-px","ticket-img"],[1,"bid-amount","cursor-pointer","font-medium","text-base","border","flex","flex-1","items-center","px-1.5","py-1","rounded-md","relative",3,"click"],["src","/assets/images/ticket.png",1,"h-5","mr-1.5","-ml-px","pointer-events-none","ticket-img"],[1,"flex","w-full","flex-1","items-center","text-left","pointer-events-none","amount-input","text-right"],[1,"mb-0.5","pointer-events-none","ml-auto","mr-0.5","2xl:mr-1"],["name","chevron-down-outline",1,"absolute","right-0","w-3","h-3","2xl:w-6","2xl:w-6","text-lg","pointer-events-none","text-gray-500","mr-2"],["side","bottom","alignment","start","showBackdrop","false",1,"theme-popover",3,"isOpen","dismissOnSelect","size","didDismiss"],["popover",""],[1,"font-medium"],[4,"ngFor","ngForOf"],[1,"py-1","cursor-pointer","flex","items-center","justify-between","border-slate-100","border-t",3,"click"],[1,"flex","items-center","font-medium","flex-1","justify-center","custom-label"],["class","select-item py-1 px-1 cursor-pointer flex items-center justify-between",3,"active","click",4,"ngLet"],[1,"select-item","py-1","px-1","cursor-pointer","flex","items-center","justify-between",3,"click"],[1,"flex","items-center","font-medium","text-base","flex-1"],["src","assets/images/ticket.png",1,"h-5","mr-1.5","-ml-px","ticket-img"],[1,"mb-0.5"],[1,"flex-1","text-left","ml-0.5","2xl:ml-1"],["class","h-4 w-4 ml-2 checkmark","name","checkmark-outline",4,"ngIf"],["name","checkmark-outline",1,"h-4","w-4","ml-2","checkmark"]],template:function(e,p){if(1&e&&(n.YNc(0,h,2,2,"ng-container",0),n.ALo(1,"async"),n.YNc(2,P,4,3,"ng-template",null,1,n.W1O),n.YNc(4,D,7,1,"ng-template",null,2,n.W1O),n.YNc(6,f,3,3,"ion-popover",3)),2&e){const _=n.MAs(3);n.Q6J("ngIf",n.lcZ(1,2,p.userService.userInfo$))("ngIfElse",_)}},dependencies:[L.sg,L.O5,B.JJ,B.On,O.gu,O.pK,O.d8,O.as,A.E,I.h,L.Ov,E.X$],styles:[".bid-amount[_ngcontent-%COMP%]{border-color:#ddd}.bid-amount[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{background-color:#e9e9e9;color:#939393;visibility:hidden}.bid-amount[_ngcontent-%COMP%]:hover   .close-btn[_ngcontent-%COMP%]{visibility:visible}ion-input[_ngcontent-%COMP%]     input[type=number]::-webkit-inner-spin-button, ion-input[_ngcontent-%COMP%]     input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.select-item[_ngcontent-%COMP%]{border-left:4px solid transparent;border-right:4px solid transparent}.select-item.active[_ngcontent-%COMP%]{border-left-color:#9369fd;border-right-color:#9369fd;background:rgba(147,105,253,.15)}.select-item[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]{color:#6f2aff;--ionicon-stroke-width: 97px}.amount-input[_ngcontent-%COMP%]{padding-right:22px}.custom-label[_ngcontent-%COMP%]{font-size:15px}"]}),a})()},46032:(S,y,o)=>{o.d(y,{K:()=>G});var n=o(15861),t=o(94650),k=o(82722),Z=o(5565),x=o(37340),b=o(33243),L=o(94128),B=o(94830),O=o(95133),A=o(7507),I=o(56889),E=o(36895),d=o(64293),M=o(40432),u=o(57180),v=o(23672),h=o(60208),P=o(90147),D=o(94063),U=o(44365),K=o(55896),N=o(16879),l=o(54463);const f=function(r){return{"group active":r}};function c(r,C){if(1&r){const i=t.EpF();t.TgZ(0,"a",21),t.NdJ("click",function(){t.CHM(i);const g=t.oxw(2);return t.KtG(g.handleClick("dashboard"))}),t._UZ(1,"img",22)(2,"img",23),t.qZA()}if(2&r){const i=t.oxw(2);t.Q6J("routerLinkActive","group active")("ngClass",t.VKq(3,f,"dashboard"===i.recentClicked))("routerLinkActiveOptions",i.exactMatchOption)}}function a(r,C){if(1&r){const i=t.EpF();t.TgZ(0,"a",24),t.NdJ("click",function(){t.CHM(i);const g=t.oxw(2);return t.KtG(g.handleClick("wishlist"))}),t.TgZ(1,"div",25),t._UZ(2,"app-heart-empty")(3,"app-heart-full"),t.qZA()()}if(2&r){const i=t.oxw(2);t.Q6J("routerLinkActive","group active")("routerLinkActiveOptions",i.exactMatchOption)("ngClass",t.VKq(3,f,"wishlist"===i.recentClicked))}}function s(r,C){if(1&r){const i=t.EpF();t.TgZ(0,"a",26),t.NdJ("click",function(){t.CHM(i);const g=t.oxw(2);return t.KtG(g.ticketsMenuOpen=!0)}),t.TgZ(1,"div",27),t._UZ(2,"img",28),t.qZA()()}}const e=function(r){return{"opacity-0":r}};function p(r,C){if(1&r&&(t.TgZ(0,"a",29)(1,"div",30),t._UZ(2,"app-cart-icon",31),t.TgZ(3,"div",32),t._uU(4),t.qZA()()()),2&r){const i=t.oxw(2);t.Tol(i.totalNumber>0?"bg-gradient-primary border-[#fabead]":"bg-white border-white"),t.xp6(1),t.Tol(i.totalNumber>0?"text-white":"text-[#a3acd0]"),t.xp6(2),t.Q6J("ngClass",t.VKq(6,e,!i.totalNumber)),t.xp6(1),t.hij(" ",i.totalNumber," ")}}function _(r,C){if(1&r&&t._UZ(0,"img",33),2&r){const i=C.ngIf;t.Q6J("src",i.avatar||"/assets/images/sign-up-user.svg",t.LSH)("alt",i.username)}}function T(r,C){1&r&&t._UZ(0,"app-profile-icon",34)}const J=function(r,C,i){return{"group active":r,"order-2":C,"order-4":i}};function R(r,C){if(1&r){const i=t.EpF();t.TgZ(0,"div",7)(1,"a",8),t.NdJ("click",function(){t.CHM(i);const g=t.oxw();return t.KtG(g.handleClick("home"))}),t._UZ(2,"app-home-icon",9),t.qZA(),t.YNc(3,c,3,5,"a",10),t.YNc(4,a,4,5,"a",11),t.TgZ(5,"div",12),t.YNc(6,s,3,0,"a",13),t.YNc(7,p,5,8,"ng-template",null,14,t.W1O),t.qZA(),t.TgZ(9,"a",15),t.NdJ("click",function(){t.CHM(i);const g=t.oxw();return t.KtG(g.handleClick("storecredit"))}),t._UZ(10,"img",16)(11,"img",17),t.qZA(),t.TgZ(12,"div",18),t.NdJ("click",function(){t.CHM(i);const g=t.oxw();return t.KtG(g.openMenu("sidebar"))}),t.YNc(13,_,1,2,"img",19),t.ALo(14,"async"),t.YNc(15,T,1,0,"ng-template",null,20,t.W1O),t.qZA()()}if(2&r){const i=C.ngLet,m=t.MAs(8),g=t.MAs(16),w=t.oxw();t.xp6(1),t.Q6J("routerLinkActive","group active")("ngClass",t.VKq(16,f,"home"===w.recentClicked))("routerLinkActiveOptions",w.exactMatchOption),t.xp6(1),t.Q6J("ngClass",i?"bidding-primary":"group-[.active]:text-primary"),t.xp6(1),t.Q6J("ngIf",i),t.xp6(1),t.Q6J("ngIf",!i),t.xp6(2),t.Q6J("ngIf",i)("ngIfElse",m),t.xp6(3),t.Q6J("routerLinkActive","group active")("routerLinkActiveOptions",w.exactMatchOption)("routerLinkActiveOptions",w.exactMatchOption)("ngClass",t.kEZ(18,J,"storecredit"===w.recentClicked,i,!i)),t.xp6(4),t.Q6J("ngIf",t.lcZ(14,14,w.userInfo$))("ngIfElse",g)}}function Y(r,C){if(1&r){const i=t.EpF();t.TgZ(0,"app-launch-pool-button",46),t.NdJ("click",function(){const w=t.CHM(i).method;return t.KtG(w())}),t.qZA()}if(2&r){const i=t.oxw().ngLet;t.Q6J("canLaunchPool",!!i)}}function W(r,C){if(1&r){const i=t.EpF();t.TgZ(0,"app-launch-pool",45),t.NdJ("openLaunchPoolModal",function(){t.CHM(i);const g=t.oxw(2);return t.KtG(g.onLaunchPool.emit(!0))}),t.YNc(1,Y,1,1,"ng-template"),t.qZA()}if(2&r){const i=C.ngLet,m=t.oxw(2);t.Q6J("canLaunchPool",!!i)("allowDirectLaunch",m.allowDirectLaunch)}}function Q(r,C){if(1&r){const i=t.EpF();t.TgZ(0,"div",35)(1,"div",36)(2,"div",37)(3,"span",38),t._uU(4),t.ALo(5,"translate"),t.qZA(),t._UZ(6,"app-bidding-ticket-count",39),t.qZA(),t.TgZ(7,"app-get-tickets",40),t.NdJ("click",function(){t.CHM(i);const g=t.oxw();return t.KtG(g.openGetTicketsModal())}),t.qZA(),t.YNc(8,W,2,2,"app-launch-pool",41),t.ALo(9,"async"),t.TgZ(10,"div",42),t.NdJ("click",function(){t.CHM(i);const g=t.oxw();return t.KtG(g.ticketsMenuOpen=!1)}),t.O4$(),t.TgZ(11,"svg",43),t._UZ(12,"path",44),t.qZA()()()()}if(2&r){const i=t.oxw();t.Q6J("@slideInOut",void 0),t.xp6(4),t.Oqu(t.lcZ(5,3,"bid-amount")),t.xp6(4),t.Q6J("ngLet",t.lcZ(9,5,i.biddingService.canLaunchPool$))}}let G=(()=>{class r extends Z.V{constructor(i,m,g,w,j,F){super(),this.sidebarService=i,this.cartService=m,this.userService=g,this.menuController=w,this.router=j,this.biddingService=F,this.allowDirectLaunch=!1,this.onLaunchPool=new t.vpe,this.totalNumber=0,this.exactMatchOption={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"ignored"},this.ticketsMenuOpen=!1,this.recentClicked=""}ngOnInit(){this.userInfo$=this.userService.userInfo$,this.cartService.cartList$.pipe((0,k.R)(this.destroyStream$)).subscribe(i=>{this.totalNumber=i?.reduce((m,g)=>m+g.quantity,0)||0})}openMenu(i){var m=this;return(0,n.Z)(function*(){yield m.menuController.enable(!0,i),yield m.menuController.open(i),m.sidebarService.setOpen()})()}openGetTicketsModal(){this.userService.isLogin(!0)?this.biddingService.isOpenGetTicketsModal=!0:this.router.navigateByUrl("/auth/login")}handleClick(i){this.recentClicked=i}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(b.P),t.Y36(L.N),t.Y36(B.K),t.Y36(O._q),t.Y36(A.F0),t.Y36(I.g))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-bottom-navbar"]],inputs:{isSticky:"isSticky",allowDirectLaunch:"allowDirectLaunch"},outputs:{onLaunchPool:"onLaunchPool"},features:[t.qOj],decls:8,vars:4,consts:[[1,"bottom-nav","relative"],[1,"flex","h-full","base","absolute","inset-0","pointer-events-none"],[1,"bg-white","flex-1","h-full","base-left"],["src","assets/svgs/bottom-notch.svg","alt","",1,"h-full"],[1,"bg-white","flex-1","h-full","base-right"],["class","absolute w-full flex h-full z-10 items-center",4,"ngLet"],["class","bottom-nav-tickets bg-white rounded-t-3xl pt-5 fixed left-0 bottom-0 right-0",4,"ngIf"],[1,"absolute","w-full","flex","h-full","z-10","items-center"],["routerLink","/",1,"nav-item","flex-1","flex-shrink-0","order-1",3,"routerLinkActive","ngClass","routerLinkActiveOptions","click"],[3,"ngClass"],["routerLink","/dashboard","class","nav-item flex-1 flex-shrink-0 order-4",3,"routerLinkActive","ngClass","routerLinkActiveOptions","click",4,"ngIf"],["routerLink","/member/my-wishlist","class","nav-item flex-1 flex-shrink-0 order-2",3,"routerLinkActive","routerLinkActiveOptions","ngClass","click",4,"ngIf"],[1,"nav-item","flex-1","flex-shrink-0","relative","order-3"],["class","prizes-icon w-full relative rounded-full cursor-pointer",3,"click",4,"ngIf","ngIfElse"],["shoppingCart",""],["routerLink","/member/store-credits",1,"nav-item","flex-1","flex-shrink-0",3,"routerLinkActive","routerLinkActiveOptions","ngClass","click"],["src","/assets/images/credit-faded.png","alt","",1,"img-faded"],["src","/assets/images/tyqoon-dollars-cc-small.png","alt","dolars",1,"img-color"],[1,"nav-item","flex-1","flex-shrink-0","cursor-pointer","order-5",3,"click"],["class","rounded-full overflow-hidden",3,"src","alt",4,"ngIf","ngIfElse"],["noInfo",""],["routerLink","/dashboard",1,"nav-item","flex-1","flex-shrink-0","order-4",3,"routerLinkActive","ngClass","routerLinkActiveOptions","click"],["src","assets/images/Invite Icon 250px-disabled-min.png","alt","",1,"img-faded","mb-1",2,"height","60%"],["src","assets/images/Invite Icon 250px-min.png","alt","",1,"img-color","mb-1",2,"height","60%"],["routerLink","/member/my-wishlist",1,"nav-item","flex-1","flex-shrink-0","order-2",3,"routerLinkActive","routerLinkActiveOptions","ngClass","click"],[1,"heart-wrapper","relative"],[1,"prizes-icon","w-full","relative","rounded-full","cursor-pointer",3,"click"],[1,"absolute","inset-0","h-full","flex","justify-center","items-center","text-white"],["src","assets/images/ticket.png"],["routerLink","/cart",1,"cart-icon","w-full","relative","rounded-full","border-[3px]"],[1,"absolute","inset-0","h-full","flex","justify-center","items-center","p-4","pl-3"],[1,"w-8","h-8","xs:h-[35px]","xs:w-[35px]"],[1,"cart-badge","absolute","top-0","right-0","bg-[#0087ff]","rounded-full","text-center","text-xs","cart-pulse",3,"ngClass"],[1,"rounded-full","overflow-hidden",3,"src","alt"],[1,"rounded-full","overflow-hidden","border","border-[#B1B1B1]"],[1,"bottom-nav-tickets","bg-white","rounded-t-3xl","pt-5","fixed","left-0","bottom-0","right-0"],[1,"controls","mx-auto","flex","flex-col","gap-3"],[1,"w-full","flex","items-center","justify-between"],[1,"font-medium","text-black","text-lg","whitespace-nowrap","mr-1.5"],[1,"w-full"],[1,"w-full",3,"click"],[3,"canLaunchPool","allowDirectLaunch","openLaunchPoolModal",4,"ngLet"],[1,"close","w-12","p-3","rounded-full","cursor-pointer","text-white","mx-auto","mt-2",3,"click"],["viewBox","0 0 100 100","overflow","visible","enable-background","new 0 0 100 100"],["stroke","currentColor","stroke-width","20","stroke-linecap","square","d","M 10,10 90,90 M 10,90 90,10"],[3,"canLaunchPool","allowDirectLaunch","openLaunchPoolModal"],[1,"block","mx-auto",3,"canLaunchPool","click"]],template:function(i,m){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2)(3,"img",3)(4,"div",4),t.qZA(),t.YNc(5,R,17,22,"div",5),t.ALo(6,"async"),t.qZA(),t.YNc(7,Q,13,7,"div",6)),2&i&&(t.xp6(5),t.Q6J("ngLet",t.lcZ(6,2,m.biddingService.isBiddingMode$)),t.xp6(2),t.Q6J("ngIf",m.ticketsMenuOpen))},dependencies:[E.mk,E.O5,O.Fo,A.yS,A.Od,d.G,M.l,u.c,v.t,h.E,P.h,D.T,U.h,K.h,N.j,E.Ov,l.X$],styles:[".bottom-nav[_ngcontent-%COMP%]{--nav-bottom-size: 50px;height:var(--nav-bottom-size)}.bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#a3acd0}.bottom-nav[_ngcontent-%COMP%]   .fake-click[_ngcontent-%COMP%]{height:var(--nav-bottom-size);width:var(--nav-bottom-size);left:50%;z-index:12;transform:translate(-50%,-40%)}.bottom-nav[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%]   .base-left[_ngcontent-%COMP%]{margin-right:-1px;box-shadow:0 0 16px 2px #0000004a}.bottom-nav[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{z-index:11}.bottom-nav[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%]   .base-right[_ngcontent-%COMP%]{margin-left:-1px;box-shadow:0 0 16px 2px #0000004a}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    >*{height:55%}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    >* svg, .bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    >* img{height:100%}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]     .cart-icon{width:var(--nav-bottom-size);height:var(--nav-bottom-size);transform:translateY(-40%);box-shadow:0 0 16px 2px #0000004d}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]     .cart-icon .cart-badge{transform:translate(50%,-20%);width:24px;height:24px;line-height:22px;border:1px solid #40b7ff;transition:opacity 0ms;transition-delay:.3s}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]     .cart-icon .cart-badge.opacity-0{transition-delay:0s}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]     .prizes-icon{border:2px solid rgb(241,24,255);width:var(--nav-bottom-size);height:var(--nav-bottom-size);transform:translateY(-40%);box-shadow:0 0 16px 2px #0000004d;background:linear-gradient(to right,rgb(152,23,250) 0%,rgb(177,40,250) 25%,rgb(199,56,251) 50%,rgb(238,82,251) 100%)}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]     .prizes-icon img{height:2rem;width:2rem}@media (min-width: 340px){.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]     .prizes-icon img{height:40px;width:40px}}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]     .prizes-icon .prize-badge{transform:translate(50%,-20%);width:24px;height:24px;line-height:22px;border:1px solid #40b7ff;transition:opacity 0ms;transition-delay:.3s;background-color:#7f06f9}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]     .prizes-icon .prize-badge.invisible{transition-delay:0s}.nav-item[_ngcontent-%COMP%]   .heart-wrapper[_ngcontent-%COMP%]{height:90%}@media only screen and (min-width: 345px){.bottom-nav[_ngcontent-%COMP%]{--nav-bottom-size: 60px}.bottom-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .cart-icon[_ngcontent-%COMP%]   .cart-badge[_ngcontent-%COMP%]{width:24px;height:24px;line-height:22px}}.nav-item[_ngcontent-%COMP%]   app-heart-full[_ngcontent-%COMP%]{display:none}.nav-item[_ngcontent-%COMP%]   .img-color[_ngcontent-%COMP%]{display:none}.nav-item.active[_ngcontent-%COMP%]   app-heart-empty[_ngcontent-%COMP%]{display:none}.nav-item.active[_ngcontent-%COMP%]   app-heart-full[_ngcontent-%COMP%]{display:inline}.nav-item.active[_ngcontent-%COMP%]   .img-faded[_ngcontent-%COMP%]{display:none}.nav-item.active[_ngcontent-%COMP%]   .img-color[_ngcontent-%COMP%]{display:block}.cart-pulse[_ngcontent-%COMP%]{animation:blue-pulse 1.5s infinite}.group.active[_ngcontent-%COMP%]   .bidding-primary[_ngcontent-%COMP%]{color:#f118ff}.bottom-nav-tickets[_ngcontent-%COMP%]{height:280px;box-shadow:0 -3px 10px #0000000d;z-index:14}.bottom-nav-tickets[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{max-width:270px}.bottom-nav-tickets[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   app-bidding-ticket-count[_ngcontent-%COMP%]     .bid-amount{font-size:1.125rem;line-height:1.75rem;--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.bottom-nav-tickets[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   app-get-tickets[_ngcontent-%COMP%]     .title{font-size:1.25rem;line-height:1.75rem}.bottom-nav-tickets[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   app-get-tickets[_ngcontent-%COMP%]     .icon{margin-left:1rem;font-size:3rem;line-height:1}.bottom-nav-tickets[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   app-launch-pool-button[_ngcontent-%COMP%]     .title{font-size:1.25rem;line-height:1.75rem}.bottom-nav-tickets[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   app-launch-pool-button[_ngcontent-%COMP%]     .star-wrapper{margin-left:1.25rem}.bottom-nav-tickets[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   app-launch-pool-button[_ngcontent-%COMP%]     .star-wrapper img{height:1.25rem}.bottom-nav-tickets[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{background-color:#ff2145}app-envelope-icon[_ngcontent-%COMP%]     svg{height:80%!important}.ripple-parent[_ngcontent-%COMP%]{position:relative;overflow:hidden;-webkit-user-select:none;user-select:none}"],data:{animation:[(0,x.X$)("slideInOut",[(0,x.eR)(":enter",[(0,x.oB)({transform:"translateY(100%)"}),(0,x.jt)("100ms ease",(0,x.oB)({transform:"translateY(0%)"}))]),(0,x.eR)(":leave",[(0,x.jt)("100ms ease",(0,x.oB)({transform:"translateY(100%)"}))])])]}}),r})()},94063:(S,y,o)=>{o.d(y,{T:()=>M});var n=o(94650),t=o(82722),k=o(5565),Z=o(56889),x=o(94830),b=o(36895),L=o(1470),B=o(54463);function O(u,v){1&u&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&u&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"get-tickets")))}function A(u,v){1&u&&(n._UZ(0,"app-text-jumping",5),n.ALo(1,"translate")),2&u&&n.Q6J("text",n.lcZ(1,1,"get-tickets"))}function I(u,v){1&u&&n._UZ(0,"img",7)}function E(u,v){if(1&u&&(n.ynx(0),n.YNc(1,I,1,0,"img",6),n.BQk()),2&u){const h=n.oxw();n.xp6(1),n.Q6J("ngIf",0===h.ticketCount)}}const d=function(u){return{"play-animation":u}};let M=(()=>{class u extends k.V{constructor(h,P){super(),this.biddingService=h,this.userService=P,this.isOpenGetTicketsModal=new n.vpe,this.isLow=!1,this.ticketCount=0}ngOnInit(){this.biddingService.ticketCount$.pipe((0,t.R)(this.destroyStream$)).subscribe(h=>{this.isLow=h<1500,this.ticketCount=h})}}return u.\u0275fac=function(h){return new(h||u)(n.Y36(Z.g),n.Y36(x.K))},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-get-tickets"]],outputs:{isOpenGetTicketsModal:"isOpenGetTicketsModal"},features:[n.qOj],decls:8,vars:8,consts:[[1,"tickets-wrapper","relative","overflow-hidden","bg-gradient-secondary","text-white","rounded-lg","w-full","bg-white","py-3","flex","items-center","cursor-pointer",3,"ngClass","click"],[1,"icon","text-white","font-bold","ml-3.5","absolute"],[1,"title","flex-1","text-center","ml-2.5","2xl:ml-2","px-1.5","whitespace-nowrap","text-base","2xl:text-lg","font-medium"],[4,"ngIf"],[3,"text",4,"ngIf"],[3,"text"],["style","height: 120%;","class","transform translate-x-1/4 absolute -right-1 bottom-2 z-10","src","assets/images/bidding/onboarding-exclamation.svg","alt","",4,"ngIf"],["src","assets/images/bidding/onboarding-exclamation.svg","alt","",1,"transform","translate-x-1/4","absolute","-right-1","bottom-2","z-10",2,"height","120%"]],template:function(h,P){1&h&&(n.TgZ(0,"div",0),n.NdJ("click",function(){return P.isOpenGetTicketsModal.emit(!0)}),n.TgZ(1,"span",1),n._uU(2,"+"),n.qZA(),n.TgZ(3,"p",2),n.YNc(4,O,3,3,"span",3),n.YNc(5,A,2,3,"app-text-jumping",4),n.qZA()(),n.YNc(6,E,2,1,"ng-container",3),n.ALo(7,"async")),2&h&&(n.Q6J("ngClass",n.VKq(6,d,P.isLow)),n.xp6(4),n.Q6J("ngIf",!P.isLow),n.xp6(1),n.Q6J("ngIf",P.isLow),n.xp6(1),n.Q6J("ngIf",n.lcZ(7,4,P.userService.userInfo$)))},dependencies:[b.mk,b.O5,L.P,b.Ov,B.X$],styles:['[_nghost-%COMP%]{position:relative}.icon[_ngcontent-%COMP%]{font-size:42px;line-height:42px}.tickets-wrapper[_ngcontent-%COMP%]{border:1px solid rgb(252,111,252)}.tickets-wrapper.play-animation[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-50%;background:linear-gradient(to bottom,rgba(229,172,142,0),rgba(255,255,255,.3) 50%,rgba(229,172,142,0));transform:rotate(60deg) translate(-5em,7.5em);animation:2s sheenbgBtn 2s forwards infinite}@keyframes sheenbgBtn{to{transform:rotate(60deg) translate(1em,-9em)}}']}),u})()},55896:(S,y,o)=>{o.d(y,{h:()=>E});var n=o(94650),t=o(94830),k=o(36895),Z=o(1470),x=o(90147),b=o(54463);function L(d,M){1&d&&(n._UZ(0,"app-text-jumping",11),n.ALo(1,"translate")),2&d&&n.Q6J("text",n.lcZ(1,1,"launch-pool"))}function B(d,M){1&d&&(n._uU(0),n.ALo(1,"translate")),2&d&&n.hij(" ",n.lcZ(1,1,"launch-pool")," ")}function O(d,M){if(1&d&&(n.ynx(0),n.YNc(1,L,2,3,"app-text-jumping",9),n.YNc(2,B,2,3,"ng-template",null,10,n.W1O),n.BQk()),2&d){const u=n.MAs(3),v=n.oxw().ngLet,h=n.oxw();n.xp6(1),n.Q6J("ngIf",!(v&&!h.canLaunchPool))("ngIfElse",u)}}function A(d,M){1&d&&(n._uU(0),n.ALo(1,"translate")),2&d&&n.hij(" ",n.lcZ(1,1,"header-login")," ")}function I(d,M){if(1&d&&(n.TgZ(0,"button",1)(1,"div",2)(2,"div",3),n._UZ(3,"img",4),n.qZA(),n.TgZ(4,"p",5),n.YNc(5,O,4,2,"ng-container",6),n.YNc(6,A,2,3,"ng-template",null,7,n.W1O),n.qZA()(),n._UZ(8,"span",8),n.qZA()),2&d){const u=M.ngLet,v=n.MAs(7),h=n.oxw();n.ekj("cannot-launch",!h.canLaunchPool),n.xp6(5),n.Q6J("ngIf",u)("ngIfElse",v)}}let E=(()=>{class d{constructor(u){this.userService=u,this.allowDirectLaunch=!0,this.canLaunchPool=!0}}return d.\u0275fac=function(u){return new(u||d)(n.Y36(t.K))},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-launch-pool-button"]],inputs:{allowDirectLaunch:"allowDirectLaunch",canLaunchPool:"canLaunchPool"},decls:2,vars:3,consts:[["class","launch-pool w-full launch-btn p-0.5 rounded-lg relative highlighted !shadow-none",3,"cannot-launch",4,"ngLet"],[1,"launch-pool","w-full","launch-btn","p-0.5","rounded-lg","relative","highlighted","!shadow-none"],[1,"content","bg-black","text-white","rounded-lg","w-full","py-2.5","flex","items-center","overflow-hidden","relative"],[1,"star-wrapper","ml-3","absolute","bg-white","p-1","rounded-full"],["src","assets/images/bidding/star.png",1,"!h-4","2xl:!h-5"],[1,"title","flex-1","text-center","ml-6","sm:ml-4","2xl:ml-2.5","px-1.5","whitespace-nowrap","text-base","2xl:text-lg","font-medium"],[4,"ngIf","ngIfElse"],["notLogin",""],[1,"rainbow"],[3,"text",4,"ngIf","ngIfElse"],["plainText",""],[3,"text"]],template:function(u,v){1&u&&(n.YNc(0,I,9,4,"button",0),n.ALo(1,"async")),2&u&&n.Q6J("ngLet",n.lcZ(1,1,v.userService.userInfo$))},dependencies:[k.O5,Z.P,x.h,k.Ov,b.X$],styles:['.launch-pool.cannot-launch[_ngcontent-%COMP%]{opacity:.2}.launch-pool.highlighted[_ngcontent-%COMP%]:not(.cannot-launch){animation:neon-block 2s linear infinite;background:linear-gradient(45deg,#ff005e,#fbff00)}.launch-pool.highlighted[_ngcontent-%COMP%]:not(.cannot-launch)   .content[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-50%;background:linear-gradient(to bottom,rgba(229,172,142,0),rgba(255,255,255,.3) 50%,rgba(229,172,142,0));transform:rotate(60deg) translate(-5em,7.5em);animation:2s sheen 2s forwards infinite}.launch-pool.highlighted[_ngcontent-%COMP%]:not(.cannot-launch)   .rainbow[_ngcontent-%COMP%]{position:absolute;inset:5px;filter:blur(15px);z-index:-2}.launch-pool.highlighted[_ngcontent-%COMP%]:not(.cannot-launch)   .rainbow[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(315deg,#ff005e,#fbff00);animation:neon-block 1.5s linear infinite}@keyframes sheen{to{transform:rotate(60deg) translate(1em,-9em)}}@keyframes neon-block{0%{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}']}),d})()},16879:(S,y,o)=>{o.d(y,{j:()=>N});var n=o(15861),t=o(94650),k=o(5565),Z=o(94830),x=o(7507),b=o(36895),L=o(63225),B=o(56889),O=o(95133),A=o(65433),I=o(54463);function E(l,f){if(1&l){const c=t.EpF();t.TgZ(0,"div",18)(1,"button",19),t.NdJ("click",function(){t.CHM(c);const s=t.oxw(3),e=t.MAs(1);return t.KtG(s.handleLaunch(e))}),t._uU(2),t.ALo(3,"translate"),t.qZA()()}2&l&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"launch-pool")," "))}function d(l,f){if(1&l){const c=t.EpF();t.TgZ(0,"div",15)(1,"button",16),t.NdJ("click",function(){t.CHM(c),t.oxw(2);const s=t.MAs(1);return t.KtG(s.dismiss())}),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.YNc(4,E,4,3,"div",17),t.qZA()}if(2&l){const c=t.oxw(2);t.xp6(2),t.hij(" ",t.lcZ(3,2,"close")," "),t.xp6(2),t.Q6J("ngIf",c.canLaunchPool)}}const M=function(l){return{"rounded-lg":l}};function u(l,f){if(1&l){const c=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5),t._UZ(3,"img",6),t.qZA(),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"button",7),t.NdJ("click",function(){t.CHM(c),t.oxw();const s=t.MAs(1);return t.KtG(s.dismiss())}),t.O4$(),t.TgZ(7,"svg",8),t._UZ(8,"path",9),t.qZA()()(),t.kcU(),t.TgZ(9,"ng-scrollbar",10)(10,"div",11),t._UZ(11,"img",12),t.TgZ(12,"div",13),t._uU(13),t.ALo(14,"translate"),t.qZA()(),t.YNc(15,d,5,4,"div",14),t.qZA()}if(2&l){const c=t.oxw(),a=t.MAs(4);t.xp6(4),t.hij(" ",t.lcZ(5,7,"launch-pool")," "),t.xp6(5),t.Q6J("autoHeightDisabled",!1),t.xp6(2),t.Q6J("src",c.isFailed||!c.canLaunchPool?"assets/images/mascot-sad.png":c.product?c.product.productImages[0].medium:"assets/images/Mascot TICKETS 512w-min.png",t.LSH)("ngClass",t.VKq(11,M,!c.isFailed&&c.canLaunchPool&&c.product)),t.xp6(2),t.hij(" ",t.lcZ(14,9,c.isFailed?"launch-new-pool-failed":c.canLaunchPool?c.isInitialPool?"launch-initial-pool-desc":c.product?c.product.name:"can-launch-new-pools":"cannot-launch-now")," "),t.xp6(2),t.Q6J("ngIf",!(c.canLaunchPool&&!c.product))("ngIfElse",a)}}function v(l,f){if(1&l){const c=t.EpF();t.TgZ(0,"div",20)(1,"button",19),t.NdJ("click",function(){t.CHM(c);const s=t.oxw(),e=t.MAs(1);return t.KtG(s.handleSearch(e))}),t._uU(2),t.ALo(3,"translate"),t.qZA()()}2&l&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"find-products-now")," "))}let h=(()=>{class l extends k.V{constructor(c,a){super(),this.router=c,this.biddingService=a,this.isOpenChange=new t.vpe}handleLaunch(c){c.dismiss().then(()=>{this.router.navigate(["/product/detail"],{queryParams:{id:this.product.id,bid:!0,launchPool:!0}})})}handleSearch(c){c.dismiss().then(()=>{this.biddingService.onFindProducts$.next(!0)})}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(x.F0),t.Y36(B.g))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-launch-pool-status-modal"]],inputs:{isOpen:"isOpen",product:"product",canLaunchPool:"canLaunchPool",isInitialPool:"isInitialPool",isFailed:"isFailed"},outputs:{isOpenChange:"isOpenChange"},features:[t.qOj],decls:5,vars:1,consts:[[3,"isOpen","didDismiss"],["modal",""],["searchProducts",""],[1,"flex","bg-[#f4f4f4]","items-center","p-2"],[1,"fade-in-from-right","flex-1","font-bold","text-2xl","xs:text-3xl","flex",2,"--duration","200ms"],[1,"mr-2","mt-0.5","relative","h-8","w-8","flex","justify-center","items-center","bg-black","rounded-full"],["src","assets/images/bidding/star-inverted.png",1,"h-4"],[1,"w-8","p-1","rounded","cursor-pointer","bg-[#ff2145]","text-white",3,"click"],["version","1.1","viewBox","0 0 100 100","overflow","visible","enable-background","new 0 0 100 100"],["stroke","currentColor","stroke-width","12","stroke-linecap","square","d","M 10,10 90,90 M 10,90 90,10"],["visibility","hover",2,"max-height","85vh",3,"autoHeightDisabled"],[1,"p-4","flex","flex-col","items-center","justify-center"],[1,"h-72","fade-in-from-left",2,"--duration","200ms","--delay","100ms",3,"src","ngClass"],[1,"text-black","font-medium","text-center","text-base","md:text-xl","my-5","fade-in-from-left",2,"--duration","200ms","--delay","150ms"],["class","flex justify-between gap-4 p-4 pt-2 bg-white",4,"ngIf","ngIfElse"],[1,"flex","justify-between","gap-4","p-4","pt-2","bg-white"],[1,"fade-in-from-right","border","border-[#dddddd]","bg-slate-100","rounded-lg","font-bold","px-6","py-2.5","text-lg","xs:text-2xl","md:text-3xl","capitalize",2,"--duration","200ms","--delay","250ms",3,"click"],["class","fade-in-from-left","style","--duration: 300ms; --delay: 250ms",4,"ngIf"],[1,"fade-in-from-left",2,"--duration","300ms","--delay","250ms"],[1,"launch-btn","px-4","xs:px-6","md:px-8","py-2.5","text-lg","xs:text-2xl","md:text-3xl","font-bold","text-white","capitalize","rounded-lg",3,"click"],[1,"fade-in-from-top","px-4","pt-2","pb-6","flex","justify-center",2,"--duration","200ms","--delay","200ms","--distance","-50px"]],template:function(c,a){1&c&&(t.TgZ(0,"ion-modal",0,1),t.NdJ("didDismiss",function(){return a.isOpenChange.emit(!1)}),t.YNc(2,u,16,13,"ng-template"),t.qZA(),t.YNc(3,v,4,3,"ng-template",null,2,t.W1O)),2&c&&t.Q6J("isOpen",a.isOpen)},dependencies:[b.mk,b.O5,O.ki,A.KC,I.X$],styles:["ion-modal[_ngcontent-%COMP%]{--background: white;--border-radius: 8px;--width: 600px}.product-image[_ngcontent-%COMP%]{max-width:250px}@media (min-width: 768px){.product-image[_ngcontent-%COMP%]{max-width:100%}}app-bidding-progress-bar[_ngcontent-%COMP%]     .progress-bar{height:2.75rem;border-width:2px}app-order-rating[_ngcontent-%COMP%]     ion-icon{height:1rem;width:1rem}.pool-text[_ngcontent-%COMP%]{font-size:15px}.launch-btn[_ngcontent-%COMP%]{background:linear-gradient(to right,rgb(7,121,255),rgb(9,35,255))}.launch-btn[_ngcontent-%COMP%]:disabled{opacity:.8}app-bidding-ticket-count[_ngcontent-%COMP%]{width:125px}app-bidding-ticket-count[_ngcontent-%COMP%]     .bid-amount{height:100%}"]}),l})();function P(l,f){}function D(l,f){if(1&l){const c=t.EpF();t.TgZ(0,"app-launch-pool-status-modal",3),t.NdJ("isOpenChange",function(s){t.CHM(c);const e=t.oxw(2);return t.KtG(e.openLaunchPoolStatusModal=s)}),t.qZA()}if(2&l){const c=t.oxw(2);t.Q6J("isOpen",c.openLaunchPoolStatusModal)("canLaunchPool",c.canLaunchPool)("product",c.product)}}function U(l,f){if(1&l&&(t.ynx(0),t.YNc(1,D,1,3,"app-launch-pool-status-modal",2),t.BQk()),2&l){const c=t.oxw();t.xp6(1),t.Q6J("ngIf",c.openLaunchPoolStatusModal)}}const K=function(l){return{method:l}};let N=(()=>{class l extends k.V{constructor(c,a){var s;super(),s=this,this.userService=c,this.router=a,this.allowDirectLaunch=!1,this.canLaunchPool=!0,this.openLaunchPoolModal=new t.vpe,this.openLaunchPoolStatusModal=!1,this.handleClick=(0,n.Z)(function*(){s.userService.isLogin(!0)?s.allowDirectLaunch&&s.canLaunchPool?s.openLaunchPoolModal.emit(!0):s.openLaunchPoolStatusModal=!0:s.router.navigateByUrl("auth/login")})}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(Z.K),t.Y36(x.F0))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-launch-pool"]],contentQueries:function(c,a,s){if(1&c&&t.Suo(s,t.Rgc,5),2&c){let e;t.iGM(e=t.CRH())&&(a.templateRef=e.first)}},inputs:{allowDirectLaunch:"allowDirectLaunch",canLaunchPool:"canLaunchPool",product:"product"},outputs:{openLaunchPoolModal:"openLaunchPoolModal"},features:[t.qOj],decls:3,vars:4,consts:[[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"isBrowser"],[3,"isOpen","canLaunchPool","product","isOpenChange",4,"ngIf"],[3,"isOpen","canLaunchPool","product","isOpenChange"]],template:function(c,a){1&c&&(t.ynx(0),t.YNc(1,P,0,0,"ng-template",0),t.YNc(2,U,2,1,"ng-container",1),t.BQk()),2&c&&(t.xp6(1),t.Q6J("ngTemplateOutlet",a.templateRef)("ngTemplateOutletContext",t.VKq(2,K,a.handleClick)))},dependencies:[b.O5,b.tP,L.E,h],styles:["[_nghost-%COMP%]{width:100%}"]}),l})()}}]);