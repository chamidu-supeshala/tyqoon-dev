"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[3853],{98389:(M,f,c)=>{c.d(f,{n:()=>Y});var n=c(15861),m=c(36895),t=c(94650),u=c(24006),x=c(7507),r=c(95133),p=c(54463),d=c(49808),C=c(94128);const I=function(i){return{"opacity-50":i}};function v(i,_){if(1&i){const e=t.EpF();t.TgZ(0,"ion-checkbox",21),t.NdJ("click",function(s){t.CHM(e);const b=t.oxw(2);return t.KtG(b.handleCheck(s))})("ngModelChange",function(s){t.CHM(e);const b=t.oxw(2);return t.KtG(b.isCheck=s)}),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("disabled",e.unAvailable)("ngModel",e.isCheck)("ngClass",t.VKq(3,I,e.unAvailable))}}function w(i,_){if(1&i&&(t.TgZ(0,"span",22)(1,"span",23),t._uU(2,"\u2715"),t.qZA(),t.TgZ(3,"span",24),t._uU(4),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(4),t.Oqu(e.cartItem.quantity)}}function o(i,_){if(1&i&&(t.TgZ(0,"div",25),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Oqu(t.lcZ(2,1,e.cartItem.priceTotal))}}function g(i,_){1&i&&(t.TgZ(0,"div",26),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"cart-sold-out")))}function l(i,_){1&i&&(t.TgZ(0,"div",26),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"confirm-order-fail-notStocks")))}function h(i,_){if(1&i&&t.GkF(0,27),2&i){t.oxw(2);const e=t.MAs(2);t.Q6J("ngTemplateOutlet",e)}}const y=function(i){return{hidden:i}};function O(i,_){if(1&i){const e=t.EpF();t.TgZ(0,"div",28)(1,"button",29),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.handleMinus())}),t._uU(2," - "),t.qZA(),t.TgZ(3,"ion-input",30),t.NdJ("ngModelChange",function(s){t.CHM(e);const b=t.oxw(2);return t.KtG(b.currentQuantity=s)})("ionBlur",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.handleBlur())}),t.qZA(),t.TgZ(4,"button",31),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.handlePlus())}),t._uU(5," + "),t.qZA()()}if(2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("disabled",1==e.currentQuantity||e.unAvailable),t.xp6(2),t.Q6J("ngModel",e.currentQuantity),t.xp6(1),t.Q6J("ngClass",t.VKq(3,y,e.unAvailable))}}function T(i,_){if(1&i&&(t.TgZ(0,"div",32)(1,"span",33),t._uU(2,"\u2715"),t.qZA(),t._uU(3),t.qZA()),2&i){const e=t.oxw(2);t.xp6(3),t.Oqu(e.cartItem.quantity)}}const k=function(i,_){return{"!w-full md:!w-7/12 lg:!w-8/12 ":i,"opacity-50":_}},A=function(i){return{id:i}},P=function(){return["/product","detail"]},Z=function(i,_){return{"!hidden md:!flex":i,"opacity-50":_}};function L(i,_){if(1&i&&(t.TgZ(0,"div",2),t.YNc(1,v,1,5,"ion-checkbox",3),t.TgZ(2,"div",4)(3,"div",5)(4,"div",6),t._UZ(5,"img",7),t.qZA(),t.TgZ(6,"div",8)(7,"a",9),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"div",10),t._uU(11),t.qZA(),t.TgZ(12,"div",11),t._uU(13),t.ALo(14,"currency"),t.YNc(15,w,5,1,"span",12),t.YNc(16,o,3,3,"div",13),t.qZA(),t.YNc(17,g,3,3,"div",14),t.YNc(18,l,3,3,"div",14),t.qZA()(),t.TgZ(19,"div",15),t.YNc(20,h,1,1,"ng-container",16),t.qZA(),t.TgZ(21,"div",17)(22,"div",18),t._uU(23),t.ALo(24,"currency"),t.qZA(),t.YNc(25,O,6,5,"div",19),t.YNc(26,T,4,1,"ng-template",null,20,t.W1O),t.qZA()()()),2&i){const e=t.MAs(27),a=t.oxw();let s;t.xp6(1),t.Q6J("ngIf",!a.readonly),t.xp6(2),t.Q6J("ngClass",t.WLB(24,k,a.readonly,a.unAvailable)),t.xp6(2),t.Q6J("src",a.cartItem.productImages[0].thumbnail,t.LSH)("alt",a.cartItem.productName),t.xp6(2),t.Q6J("queryParams",t.VKq(27,A,a.cartItem.productId))("routerLink",t.DdM(29,P)),t.xp6(1),t.hij(" ",t.lcZ(9,18,a.cartItem.productName)," "),t.xp6(3),t.Oqu(a.skuSpec),t.xp6(2),t.hij("",t.lcZ(14,20,a.cartItem.skuPrice)," "),t.xp6(2),t.Q6J("ngIf",a.readonly),t.xp6(1),t.Q6J("ngIf",a.readonly),t.xp6(1),t.Q6J("ngIf",a.unAvailable&&a.cartItem.skuStock>0),t.xp6(1),t.Q6J("ngIf",a.unAvailable&&a.cartItem.skuStock<=0),t.xp6(2),t.Q6J("ngIf",!a.readonly),t.xp6(1),t.Q6J("ngClass",t.WLB(30,Z,a.readonly,a.unAvailable)),t.xp6(2),t.hij(" ",t.lcZ(24,22,a.unAvailable?0:null!==(s=a.cartItem.priceTotal)&&void 0!==s?s:a.cartItem.quantity*a.cartItem.skuPrice)," "),t.xp6(2),t.Q6J("ngIf",!a.readonly)("ngIfElse",e)}}const E=function(i){return{"border-red-500/80":i}},D=function(i){return{"fill-red-500":i}};function N(i,_){if(1&i){const e=t.EpF();t.TgZ(0,"div",34),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.deleteCartItem())}),t.O4$(),t.TgZ(1,"svg",35),t._UZ(2,"path",36),t.qZA()()}if(2&i){const e=t.oxw();t.Q6J("ngClass",t.VKq(2,E,e.unAvailable)),t.xp6(1),t.Q6J("ngClass",t.VKq(4,D,e.unAvailable))}}let Y=(()=>{class i{constructor(e){this.cartService=e,this.readonly=!1,this.unAvailable=!1,this.quantityChange=new t.vpe,this.isCheckChange=new t.vpe}ngOnChanges(e){e.cartItem&&e.cartItem.previousValue!==e.cartItem.currentValue&&(this.currentQuantity=e.cartItem.currentValue.quantity)}ngOnInit(){this.currentQuantity=this.cartItem.quantity,this.unAvailable&&(this.currentQuantity=0),console.log(this.cartItem)}get skuSpec(){return JSON.parse(this.cartItem.specificationValues||this.cartItem.skuSpec||"[]").map(e=>e.value).join(",")}handleBlur(){this.currentQuantity!==this.cartItem.quantity&&this.quantityChange.emit(this.currentQuantity)}handlePlus(){this.currentQuantity++,this.quantityChange.emit(this.currentQuantity)}handleMinus(){this.currentQuantity--,this.quantityChange.emit(this.currentQuantity)}resetQuantity(){this.currentQuantity=this.cartItem.quantity}handleCheck(e){this.isCheckChange.emit(!this.isCheck)}deleteCartItem(){var e=this;return(0,n.Z)(function*(){yield(0,d.n)(e.cartService.deleteCartItems([e.cartItem.cartItemId])),yield(0,d.n)(e.cartService.getCartItem())})()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(C.N))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-cart-item"]],inputs:{readonly:"readonly",unAvailable:"unAvailable",cartItem:"cartItem",isCheck:"isCheck"},outputs:{quantityChange:"quantityChange",isCheckChange:"isCheckChange"},standalone:!0,features:[t.TTD,t.jDz],decls:3,vars:1,consts:[["class","bg-white rounded-md py-3 px-2 md:px-4 flex items-center",4,"ngIf"],["deleteIcon",""],[1,"bg-white","rounded-md","py-3","px-2","md:px-4","flex","items-center"],["class","mr-3 md:mr-4 md:block","slot","start",3,"disabled","ngModel","ngClass","click","ngModelChange",4,"ngIf"],[1,"flex","flex-wrap","items-center","flex-1"],[1,"w-11/12","md:w-7/12","lg:w-8/12","flex","items-center",3,"ngClass"],[1,"img-container","mr-2","flex-shrink-0"],[1,"object-cover","object-center","w-full","h-full",3,"src","alt"],[1,"flex-auto"],[1,"block","line-clamp-1",3,"queryParams","routerLink"],[1,"opacity-70","line-clamp-1"],[1,""],["class","md:hidden",4,"ngIf"],["class","md:hidden float-right text-xl font-medium",4,"ngIf"],["class","uppercase font-bold italic text-red-500",4,"ngIf"],[1,"w-1/12","pl-2","md:pl-0","md:order-4","self-baseline","md:self-center"],[3,"ngTemplateOutlet",4,"ngIf"],[1,"w-full","md:pl-2","md:w-4/12","lg:w-3/12","mt-2","md:mt-0","flex","flex-wrap","md:flex-nowrap","items-center","justify-between",3,"ngClass"],[1,"font-bold","text-xl","md:order-2"],["class","flex-shrink-0 flex",4,"ngIf","ngIfElse"],["quantityOnly",""],["slot","start",1,"mr-3","md:mr-4","md:block",3,"disabled","ngModel","ngClass","click","ngModelChange"],[1,"md:hidden"],[1,"text-sm","font-light","opacity-50","mr-0.5"],[1,"font-medium","text-xl"],[1,"md:hidden","float-right","text-xl","font-medium"],[1,"uppercase","font-bold","italic","text-red-500"],[3,"ngTemplateOutlet"],[1,"flex-shrink-0","flex"],[1,"h-8","w-9","text-center","font-medium","text-2xl","rounded","bg-[#ececec]",3,"disabled","click"],["type","number",1,"mx-0.5","border","text-center",3,"ngModel","ngModelChange","ionBlur"],[1,"h-8","w-9","text-center","font-medium","text-2xl","rounded","bg-[#ececec]",3,"ngClass","click"],[1,"text-xl"],[1,"text-xs","mr-0.5","opacity-50"],[1,"delete-icon","cursor-pointer","ml-2","flex","w-8","h-8","rounded-full","border","border-transparent","items-center","justify-center","float-right",3,"ngClass","click"],["fill","#c8c8c8","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","width","24px","height","24px",1,"",3,"ngClass"],["d","M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"]],template:function(e,a){1&e&&(t.YNc(0,L,28,33,"div",0),t.YNc(1,N,3,6,"ng-template",null,1,t.W1O)),2&e&&t.Q6J("ngIf",a.cartItem)},dependencies:[r.Pc,r.nz,r.pK,r.w,r.as,r.Fo,p.aw,p.X$,m.ez,m.mk,m.O5,m.tP,m.H9,u.u5,u.JJ,u.On,x.Bz,x.yS],styles:[".product-image-wraper[_ngcontent-%COMP%]{position:relative;width:100%;height:unset;padding-top:100%}.img-container[_ngcontent-%COMP%]{width:50px;height:50px}ion-input[_ngcontent-%COMP%]{--padding-start: 0px;height:2rem;width:2rem}ion-input[_ngcontent-%COMP%]     input::-webkit-outer-spin-button, ion-input[_ngcontent-%COMP%]     input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}ion-input[_ngcontent-%COMP%]     input[type=number]{-moz-appearance:textfield}ion-checkbox.checkbox-disabled[_ngcontent-%COMP%]{--border-color: rgb(150, 148, 148);--background: rgb(150, 148, 148)}"],changeDetection:0}),i})()},18215:(M,f,c)=>{c.d(f,{Z:()=>x});var n=c(94650),m=c(68514),t=c(54463);function u(r,p){if(1&r){const d=n.EpF();n.TgZ(0,"div",0)(1,"button",1),n.NdJ("click",function(){const v=n.CHM(d).method,w=n.oxw();return n.KtG(w.handleBtnClick(v))}),n._UZ(2,"img",2),n.TgZ(3,"div",3),n._uU(4),n.ALo(5,"translate"),n.qZA()()()}2&r&&(n.xp6(4),n.Oqu(n.lcZ(5,1,"toolkit-official-button")))}let x=(()=>{class r{constructor(){}handleBtnClick(d){d(this.additionalData)}}return r.\u0275fac=function(d){return new(d||r)},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-global-customer-service"]],inputs:{additionalData:"additionalData"},decls:2,vars:0,consts:[[1,"hidden","md:block","rounded-l-2xl","border-y","border-l","border-solid","border-[#e9e9e9]","py-4","px-2","bg-white","shadow-xl","absolute","right-0","w-16","transform","-translate-y-1/2",2,"z-index","999"],[1,"inline",3,"click"],["src","assets/images/toolkit-item1.png","alt","",1,"m-auto","h-10","mb-1"],[1,"text-xs","font-light","text-center"]],template:function(d,C){1&d&&(n.TgZ(0,"app-customer-service"),n.YNc(1,u,6,3,"ng-template"),n.qZA())},dependencies:[m.M,t.X$],styles:["[_nghost-%COMP%]{position:sticky;top:50%;right:0;z-index:100;display:block}"]}),r})()},71832:(M,f,c)=>{c.d(f,{Y:()=>w});var n=c(94650),m=c(56889),t=c(6074),u=c(36895);function x(o,g){1&o&&n._UZ(0,"img",6)}function r(o,g){1&o&&n._UZ(0,"img",7)}function p(o,g){if(1&o&&(n.ynx(0),n.YNc(1,x,1,0,"img",4),n.YNc(2,r,1,0,"img",5),n.BQk()),2&o){const l=n.oxw(2);n.xp6(1),n.Q6J("ngIf",l.showLeft),n.xp6(1),n.Q6J("ngIf",l.showRight)}}function d(o,g){1&o&&n._UZ(0,"img",10)}function C(o,g){1&o&&n._UZ(0,"img",11)}function I(o,g){if(1&o&&(n.YNc(0,d,1,0,"img",8),n.YNc(1,C,1,0,"img",9)),2&o){const l=n.oxw(2);n.Q6J("ngIf",l.showLeft),n.xp6(1),n.Q6J("ngIf",l.showRight)}}function v(o,g){if(1&o&&(n.TgZ(0,"div",1),n.YNc(1,p,3,2,"ng-container",2),n.ALo(2,"async"),n.YNc(3,I,2,2,"ng-template",null,3,n.W1O),n.qZA()),2&o){const l=n.MAs(4),h=n.oxw();n.xp6(1),n.Q6J("ngIf",n.lcZ(2,2,h.biddingService.isBiddingMode$))("ngIfElse",l)}}let w=(()=>{class o{constructor(l,h){this.biddingService=l,this.themeService=h,this.showLeft=!0,this.showRight=!0}}return o.\u0275fac=function(l){return new(l||o)(n.Y36(m.g),n.Y36(t.f))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-new-year-dragons"]],inputs:{showLeft:"showLeft",showRight:"showRight"},decls:1,vars:1,consts:[["class","flex w-full justify-between z-100",4,"ngIf"],[1,"flex","w-full","justify-between","z-100"],[4,"ngIf","ngIfElse"],["shoppingMode",""],["class","left bidding hidden xl:block absolute h-auto dragon-jumping","src","/assets/images/new-year/Mascot-CNY-2024-1.png","alt","Bidding",4,"ngIf"],["class","right bidding hidden xl:block absolute h-auto dragon-scaling","style","--distance: 2px","src","/assets/images/new-year/Mascot-CNY-2024-2.png","alt","Bidding",4,"ngIf"],["src","/assets/images/new-year/Mascot-CNY-2024-1.png","alt","Bidding",1,"left","bidding","hidden","xl:block","absolute","h-auto","dragon-jumping"],["src","/assets/images/new-year/Mascot-CNY-2024-2.png","alt","Bidding",1,"right","bidding","hidden","xl:block","absolute","h-auto","dragon-scaling",2,"--distance","2px"],["class","left shopping hidden xl:block absolute h-auto dragon-scaling","style","--distance: -2px","src","/assets/images/new-year/Mascot-CNY-2024-3.png","alt","Bidding",4,"ngIf"],["class","right shopping hidden xl:block absolute h-auto dragon-jumping","src","/assets/images/new-year/Mascot-CNY-2024-4.png","alt","Bidding",4,"ngIf"],["src","/assets/images/new-year/Mascot-CNY-2024-3.png","alt","Bidding",1,"left","shopping","hidden","xl:block","absolute","h-auto","dragon-scaling",2,"--distance","-2px"],["src","/assets/images/new-year/Mascot-CNY-2024-4.png","alt","Bidding",1,"right","shopping","hidden","xl:block","absolute","h-auto","dragon-jumping"]],template:function(l,h){1&l&&n.YNc(0,v,5,4,"div",0),2&l&&n.Q6J("ngIf",h.themeService.isNewYearMode)},dependencies:[u.O5,u.Ov],styles:["[_nghost-%COMP%]{pointer-events:none;-webkit-user-select:none;user-select:none;z-index:1;position:absolute;top:140px;width:100%;max-width:2000px;margin:auto;left:0;right:0;min-height:calc(100vh - 140px)}.shopping.left[_ngcontent-%COMP%]{max-width:350px;bottom:13%}@media (min-width: 1280px){.shopping.left[_ngcontent-%COMP%]{width:calc(50vw - 545px);margin-left:-12px}}@media (min-width: 1440px){.shopping.left[_ngcontent-%COMP%]{width:calc(50vw - 615px);margin-left:-40px}}.shopping.right[_ngcontent-%COMP%]{max-width:330px;top:0;right:0}@media (min-width: 1280px){.shopping.right[_ngcontent-%COMP%]{width:calc(50vw - 545px);margin-right:-12px}}@media (min-width: 1440px){.shopping.right[_ngcontent-%COMP%]{width:calc(50vw - 620px);margin-right:-35px}}.bidding.left[_ngcontent-%COMP%]{max-width:370px;top:5px}@media (min-width: 1280px){.bidding.left[_ngcontent-%COMP%]{width:calc(50vw - 528px);margin-left:-30px}}@media (min-width: 1440px){.bidding.left[_ngcontent-%COMP%]{width:calc(50vw - 595px);margin-left:-65px}}.bidding.right[_ngcontent-%COMP%]{max-width:340px;bottom:3%;right:0}@media (min-width: 1280px){.bidding.right[_ngcontent-%COMP%]{width:calc(50vw - 545px);margin-right:-12px}}@media (min-width: 1440px){.bidding.right[_ngcontent-%COMP%]{width:calc(50vw - 625px);margin-right:-40px}}.dragon-jumping[_ngcontent-%COMP%]{animation:3s dragon-jumping 2s linear forwards infinite}@keyframes dragon-jumping{0%{transform:translateY(0)}25%{transform:translateY(-10px)}50%{transform:translateY(0)}to{transform:translateY(0)}}.dragon-scaling[_ngcontent-%COMP%]{animation:6s dragon-scaling 4s linear forwards infinite}@keyframes dragon-scaling{0%{transform:scale(1)}15%{transform:scale(1.05) translateY(-3px) translate(var(--distance))}30%{transform:scale(1)}to{transform:scale(1)}}"]}),o})()}}]);