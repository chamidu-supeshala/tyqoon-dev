"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[7702],{17702:(M,b,a)=>{a.r(b),a.d(b,{CartModule:()=>K});var s=a(36895),d=a(24006),u=a(84787),e=a(95133),g=a(54463),l=a(93679),f=a(16424),m=a(44466),C=a(98389),h=a(15861),Z=a(50727),A=a(77579),_=a(49808),U=a(78372),L=a(24499),t=a(98274),T=a(94128),q=a(52186),x=a(94830),O=a(6227),v=a(52313),w=a(52646),S=a(5068),Q=a(70957),j=a(49127),J=a(18215),P=a(97717);let D=(()=>{class r{constructor(n){this.cartService=n,this.value=0,this.total=0}get computedWidth(){return this.total?this.value/this.total*100+"%":"0px"}}return r.\u0275fac=function(n){return new(n||r)(t.Y36(T.N))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-discount-progress"]],inputs:{value:"value",total:"total"},decls:11,vars:8,consts:[[1,"progress-container"],[1,"relative"],[1,"absolute","inset-0","flex"],[1,"h-full","progress-value"],[1,"h-full","flex-1"],[1,"relative","z-10","text-white","items-center","justify-center","leading-10","text-base","sm:text-2xl","font-medium","flex"],[1,"text-shadow-white"],["src","assets/images/circle-credit-small.png","alt","",1,"h-6","ml-1"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"div",3)(4,"div",4),t.qZA(),t.TgZ(5,"div",5)(6,"p",6),t._uU(7),t.ALo(8,"currency"),t.ALo(9,"currency"),t.qZA(),t._UZ(10,"img",7),t.qZA()()()),2&n&&(t.xp6(3),t.Udp("width",o.computedWidth),t.xp6(4),t.AsE(" ",t.lcZ(8,4,o.value)," / ",t.lcZ(9,6,o.total)," "))},dependencies:[s.H9],styles:['.text-shadow-white[_ngcontent-%COMP%]{white-space:nowrap;text-shadow:0px 2px 5px rgba(0,0,0,.5)}.progress-container[_ngcontent-%COMP%]{overflow:hidden;border-radius:16px;background-color:#0b1d32;border:1px solid #ffd12c;box-shadow:0 5px 9px #00000054}.progress-value[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#ffa024,#ffd11c);position:relative;transition:.3s width}.progress-value[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-image:linear-gradient(-45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent);z-index:1;background-size:50px 50px;animation:move 2s linear infinite;overflow:hidden;background-color:unset}'],changeDetection:0}),r})();function E(r,c){if(1&r){const n=t.EpF();t.TgZ(0,"div",1)(1,"div",2),t._UZ(2,"img",3),t.TgZ(3,"div",4),t._uU(4),t.ALo(5,"translate"),t.qZA(),t._UZ(6,"img",5)(7,"img",6),t.qZA(),t.TgZ(8,"div",7),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"div",8)(12,"div",9),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"div",9),t._uU(16),t.ALo(17,"number"),t.qZA(),t._UZ(18,"img",10),t.qZA(),t.TgZ(19,"div",11),t._uU(20),t.ALo(21,"translate"),t.qZA(),t.TgZ(22,"div",12),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.TgZ(25,"button",13),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.getVoucher())}),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"button",14),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.handleConfirm())}),t._uU(29),t.ALo(30,"translate"),t.qZA()()}if(2&r){const n=t.oxw();t.xp6(4),t.Oqu(t.lcZ(5,8,"Hold Up!")),t.xp6(5),t.Oqu(t.lcZ(10,10,"cart-hold-up-text1-discount-system")),t.xp6(4),t.hij("",t.xi3(14,12,n.realCashback,"0.2-2"),"/"),t.xp6(3),t.Oqu(t.xi3(17,15,n.totalCashback,"0.2-2")),t.xp6(4),t.Oqu(t.lcZ(21,18,"cart-hold-up-text2-discount-system")),t.xp6(3),t.Oqu(t.lcZ(24,20,"cart-hold-up-text3-discount-system")),t.xp6(3),t.Oqu(t.lcZ(27,22,"cart-hold-up-get-vouchers")),t.xp6(3),t.Oqu(t.lcZ(30,24,"cart-hold-up-continue"))}}let F=(()=>{class r{constructor(n){this.cartService=n,this.isOpenChange=new t.vpe,this.confirm=new t.vpe}getVoucher(){this.isOpenChange.emit(!1)}handleConfirm(){this.confirm.emit(),this.isOpenChange.emit(!1)}}return r.\u0275fac=function(n){return new(n||r)(t.Y36(T.N))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-cart-hold-up"]],inputs:{isOpen:"isOpen",realCashback:"realCashback",totalCashback:"totalCashback"},outputs:{isOpenChange:"isOpenChange",confirm:"confirm"},decls:2,vars:1,consts:[[3,"isOpen","didDismiss"],[1,"p-6"],[1,"flex","justify-center","items-center","mb-8","md:mb-16"],["src","assets/images/cart-stop.png","alt","",1,"h-14","md:h-20"],[1,"ml-2","text-4xl","md:text-6xl","font-extrabold","whitespace-nowrap"],["src","assets/images/shape.png","alt","",1,"-ml-10"],["src","assets/images/mascot-stop.png","alt","",1,"h-14","md:h-20"],[1,"text-xl","text-center","font-bold"],[1,"flex","justify-center","items-center","text-3xl","font-bold","my-4"],[1,"yellow"],["src","assets/images/circle-credit-small.png","alt","",1,"h-8","ml-2"],[1,"text-xl","font-bold","text-center","mb-4"],[1,"text-xl","font-bold","text-center","mt-4","mb-8"],[1,"btn-get-vouchers","block","text-white","m-auto","py-3","text-3xl","md:text-5xl","font-extrabold","px-12","rounded-xl",3,"click"],[1,"btn-continue","text-red-500","text-xl","md:text-2xl","py-2","font-bold","block","m-auto",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"ion-modal",0),t.NdJ("didDismiss",function(){return o.isOpenChange.emit(!1)}),t.YNc(1,E,31,26,"ng-template"),t.qZA()),2&n&&t.Q6J("isOpen",o.isOpen)},dependencies:[e.ki,s.JJ,g.X$],styles:["ion-modal[_ngcontent-%COMP%]{--background: white;--border-radius: 15px;--max-width: 550px}.title[_ngcontent-%COMP%]{font-size:50px}.yellow[_ngcontent-%COMP%]{color:#f8ae02}.btn-get-vouchers[_ngcontent-%COMP%]{background-color:#008aff}"],changeDetection:0}),r})();function N(r,c){if(1&r){const n=t.EpF();t.TgZ(0,"div",1)(1,"div",2),t._UZ(2,"img",3),t.TgZ(3,"div",4),t._uU(4),t.ALo(5,"translate"),t.qZA(),t._UZ(6,"img",5)(7,"img",6),t.qZA(),t.TgZ(8,"div",7),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"button",8),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.handleConfirm())}),t._uU(12),t.ALo(13,"translate"),t.qZA()()}2&r&&(t.xp6(4),t.Oqu(t.lcZ(5,3,"Hold Up!")),t.xp6(5),t.Oqu(t.lcZ(10,5,"confirm-modal-notice-text")),t.xp6(3),t.Oqu(t.lcZ(13,7,"confirm-modal-understand")))}new t.OlP("ModalData");let V=(()=>{class r{constructor(n){this.cartService=n,this.isOpenChange=new t.vpe,this.confirm=new t.vpe}getVoucher(){this.isOpenChange.emit(!1)}handleConfirm(){this.confirm.emit()}ngOnInit(){}}return r.\u0275fac=function(n){return new(n||r)(t.Y36(T.N))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-confirm-component"]],inputs:{isOpen:"isOpen",realCashback:"realCashback",totalCashback:"totalCashback"},outputs:{isOpenChange:"isOpenChange",confirm:"confirm"},decls:2,vars:1,consts:[[3,"isOpen","didDismiss"],[1,"p-6"],[1,"flex","justify-center","items-center","mb-8","md:mb-10"],["src","assets/images/cart-stop.png","alt","",1,"h-14","md:h-20"],[1,"ml-2","text-4xl","md:text-6xl","font-extrabold","whitespace-nowrap"],["src","assets/images/shape.png","alt","",1,"-ml-10"],["src","assets/images/mascot-stop.png","alt","",1,"h-14","md:h-20"],[1,"text-xl","text-center","font-bold"],[1,"btn-continue","text-red-500","text-xl","md:text-2xl","py-2","font-bold","block","m-auto",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"ion-modal",0),t.NdJ("didDismiss",function(){return o.isOpenChange.emit(!1)}),t.YNc(1,N,14,9,"ng-template"),t.qZA()),2&n&&t.Q6J("isOpen",o.isOpen)},dependencies:[e.ki,g.X$],styles:["ion-modal[_ngcontent-%COMP%]{--background: white;--border-radius: 15px;--max-width: 550px}.title[_ngcontent-%COMP%]{font-size:50px}.yellow[_ngcontent-%COMP%]{color:#f8ae02}.btn-get-vouchers[_ngcontent-%COMP%]{background-color:#008aff}.btn-continue[_ngcontent-%COMP%]{border:1px solid #f3f3f3;border-radius:10px;padding:5px 10px;background:linear-gradient(270deg,#ff6009 0%,#ff8340 100%);color:#fff;margin-top:20px}"]}),r})();function Y(r,c){if(1&r){const n=t.EpF();t.TgZ(0,"app-cart-item",64),t.NdJ("isCheckChange",function(i){const y=t.CHM(n).$implicit,k=t.oxw();return t.KtG(k.handleCartItemCheck(y.cartItemId,i))})("quantityChange",function(i){const y=t.CHM(n).$implicit,k=t.oxw();return t.KtG(k.handleQuantitychange(y,i))}),t.qZA()}if(2&r){const n=c.$implicit,o=t.oxw();t.Q6J("isCheck",o.selectedItems[n.cartItemId])("unAvailable",o.isItemUnAvailable(n))("cartItem",n)}}function H(r,c){1&r&&t._UZ(0,"app-cart-explosion",65)}function z(r,c){if(1&r){const n=t.EpF();t.TgZ(0,"div",66)(1,"button",67),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.handleVoucherDecrease())}),t._uU(2," - "),t.qZA(),t._UZ(3,"ion-input",68),t.TgZ(4,"button",69),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.handleVoucherIncrease())}),t._uU(5," + "),t.qZA(),t.TgZ(6,"button",70),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.handleMaxVoucher())}),t._uU(7),t.ALo(8,"translate"),t.qZA()()}if(2&r){const n=t.oxw();t.xp6(1),t.Q6J("disabled",n.isChangingVoucherQuantity),t.xp6(2),t.Q6J("value",n.voucherQuantity||0),t.xp6(1),t.Q6J("disabled",n.isChangingVoucherQuantity),t.xp6(2),t.Q6J("disabled",n.isChangingVoucherQuantity||n.realCashback>=n.totalCashback),t.xp6(1),t.hij(" ",t.lcZ(8,5,"tqc-shop-confirm-max")," ")}}function B(r,c){1&r&&(t.O4$(),t.TgZ(0,"svg",71)(1,"g")(2,"g",72),t._UZ(3,"path",73),t.qZA()()())}const I=function(r){return{"opacity-0":r}};let G=(()=>{class r extends L.c{constructor(n,o,i,p,y,k,W){super(n,o),this.cartService=i,this.voucherService=p,this.userService=y,this.router=k,this.route=W,this.selectedItems={},this.isChangingVoucherQuantity=!1,this.showExplosion=!1,this.voucherQuantity=0,this.openHoldUpModal=!1,this.checkAll=!1,this.showNotice=!1,this.subscriptions=new Z.w0,this.clickSubject=new A.x}ngOnInit(){var n=this;return(0,h.Z)(function*(){yield(0,_.n)(n.cartService.getCartItem()),n.subscriptions.add(n.cartService.cartList$.subscribe(i=>{i?.length&&i.sort((p,y)=>p.skuId===n.voucherService.skuId?1:y.skuId===n.voucherService.skuId?-1:0),n.cartList=i,n.voucher=i?.find(p=>p.skuId===n.voucherService.skuId),n.voucherQuantity=n.voucher?.quantity||0})),n.subscriptions.add(n.userService.pointStatistic$.subscribe(i=>{n.pointStatistic=i})),n.clickSubject.pipe((0,U.b)(300)).subscribe(i=>{n.changeVoucherQuantity(i)});const o=n.route.snapshot.paramMap.get("voucherQuantity");o&&n.changeVoucherQuantity(+o)})()}ngOnDestroy(){this.subscriptions.unsubscribe()}toggleCheckAll(){this.cartList?.forEach(this.checkAll?n=>{this.selectedItems[n.cartItemId]=!1}:n=>{this.selectedItems[n.cartItemId]=!0})}handleCartItemCheck(n,o){setTimeout(()=>{this.selectedItems[n]=o,this.checkAll=this.isCheckAll()},0)}isCheckAll(){return!this.cartList?.length||this.cartList?.every(n=>!0===this.selectedItems[n.cartItemId])}identify(n,o){return o.cartItemId}handleQuantitychange(n,o){var i=this;return(0,h.Z)(function*(){yield(0,_.n)(i.cartService.addCartItem(n.skuId,o)),yield(0,_.n)(i.cartService.getCartItem())})()}get totalCost(){let n=0;return this.cartList?.forEach(o=>{!0===this.selectedItems[o.cartItemId]&&(n+=parseFloat(o.priceTotal))}),n}get canSettlement(){let n=!1;return this.cartList?.forEach(o=>{this.selectedItems[o.cartItemId]&&(n=!0)}),n}get totalCashback(){let n=0;return this.cartList?.forEach(o=>{!0===this.selectedItems[o.cartItemId]&&(n+=o.quantity*o.cashBack)}),n}get realCashback(){return Math.min(this.totalCashback,Number(this.pointStatistic?.myRebateCredits||0)+(this.voucherQuantity||0)*this.voucherService.defaultPrice*10)}get isMaxVoucher(){const n=Math.ceil((this.totalCashback-Number(this.pointStatistic?.myRebateCredits||0))/(10*this.voucherService.defaultPrice));return this.realCashback>=this.totalCashback||n<0||n&&n<=this.voucherQuantity}handleVoucherIncrease(){var n=this;return(0,h.Z)(function*(){n.voucherQuantity++,n.clickSubject.next(n.voucherQuantity)})()}handleVoucherDecrease(){var n=this;return(0,h.Z)(function*(){n.voucherQuantity=Math.max(n.voucherQuantity-1,0),n.clickSubject.next(n.voucherQuantity)})()}handleMaxVoucher(){var n=this;return(0,h.Z)(function*(){if(n.realCashback>=n.totalCashback)return;const o=Math.ceil((n.totalCashback-Number(n.pointStatistic?.myRebateCredits||0))/(10*n.voucherService.defaultPrice));n.changeVoucherQuantity(o)})()}changeVoucherQuantity(n){var o=this;return(0,h.Z)(function*(){try{o.isChangingVoucherQuantity=!0,n<=0?o.voucher&&(yield(0,_.n)(o.cartService.deleteCartItems([o.voucher.cartItemId]))):yield(0,_.n)(o.cartService.addCartItem(o.voucherService.skuId,n)),n>(o.voucher?.quantity||0)&&(o.showExplosion=!0,setTimeout(()=>{o.showExplosion=!1},2500)),yield(0,_.n)(o.cartService.getCartItem()),o.isChangingVoucherQuantity=!1}catch{o.isChangingVoucherQuantity=!1}})()}handleCheckoutClick(){this.realCashback<this.totalCashback?this.openHoldUpModal=!0:this.confirmOrder()}confirmOrder(){this.showNotice=!1,setTimeout(()=>{this.router.navigate(["/order/confirm"],{queryParams:{o:btoa(encodeURIComponent(JSON.stringify(this.selectedItems)))}})},500)}isItemUnAvailable(n){return!!n&&(!n.productIsMarketable||n.productEndTime<Date.now()||n.skuStock<=0)}}return r.\u0275fac=function(n){return new(n||r)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(T.N),t.Y36(q.H),t.Y36(x.K),t.Y36(u.F0),t.Y36(u.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-cart"]],features:[t.qOj],decls:122,vars:75,consts:[["scrollTop","","fullscreen","true","scrollEvents","true",3,"ionScroll"],["appOverflowVisible","",1,"sticky","top-0","shadow-lg","z-50"],["header",""],[1,"grey-bg","md:pt-4"],[1,"tyqoon-container","px-2","md:px-4","h-full","flex","flex-col"],[1,"flex","flex-col","md:flex-row","mb-2"],[1,"text-2xl","font-bold"],["lines","none",1,"no-ripple","hidden","md:block"],[1,"my-0","mr-2",3,"ngModel","ngModelChange","click"],[1,"flex-1","flex","flex-wrap","-mx-1"],[1,"w-full","md:w-6/12","lg:w-3/12","px-1","py-1"],[1,"h-full","flex-1","flex","items-center"],["routerLink","/member/store-credits",1,"h-full","border-gradient-primary","border-2","rounded-lg","w-full","bg-white","p-2"],["src","assets/images/bg-web-world.png","alt","",1,"-z-10","absolute","top-1/2","left-1/2","transform","-translate-x-1/2","-translate-y-1/2","h-full"],[1,"text-center","font-bold","text-[18px]","sm:text-sm"],[1,"point-txt","text-center","text-primary","font-bold","mt-1","text-[28px]","sm:text-[30px]"],["routerLink","/member/store-credits",1,"border-gradient-secondary","h-full","border-2","rounded-lg","w-full","bg-white","p-2"],["src","assets/images/bg-coin-temp.png","alt","",1,"-z-10","absolute","top-1/2","left-1/2","transform","-translate-x-1/2","-translate-y-1/2","h-full"],[1,"point-txt","text-center","text-rainbow","font-bold","mt-1","text-[28px]","sm:text-[30px]"],["sizeClass","text-[28px] sm:text-[30px]","heightClass","h-[64px] lg:h-[60px]",3,"hideRewardDay","hideAvailableReward"],["fontSize","text-[28px] sm:text-[30px]"],["class","mb-2",3,"isCheck","unAvailable","cartItem","isCheckChange","quantityChange",4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","items-center","justify-center","md:justify-end","mt-2"],[1,"mr-4","hidden","md:block"],["src","assets/images/TYQOON-MASCOT-SHOPPING-CART.png","alt",""],[1,"summary","flex-shrink-0"],[1,"bg-white","rounded-xl","p-2","sm:p-4"],[1,"flex","items-center","mb-2","relative","z-40"],[1,"flex-1","font-bold","text-xl"],[1,"hidden","md:flex","items-center","mr-2"],[1,"text-xl","font-bold"],["src","assets/images/ticket-voucher-single-gold.png","alt","",1,"h-7"],[1,"relative","hidden","md:block"],[3,"ngTemplateOutlet"],["src","assets/images/arrow_icon_2x.png","alt","Voucher max arrow",1,"animated-arrrow","hidden","md:block","bounce","absolute","right-0","top-full","mt-1","-mr-1",3,"ngClass"],[1,"md:pr-12","relative"],[1,"explosion-container","absolute","z-50"],["class","h-1 block",4,"ngIf"],[3,"value","total"],[1,"mt-4","text-center","font-bold","text-xl","flex","justify-center"],[1,"flex","md:hidden","justify-center","items-center","my-2"],[1,"flex","md:hidden","justify-center","relative"],[1,"relative"],["src","assets/images/arrow_icon_2x.png","alt","Voucher max arrow",1,"animated-arrrow","reverse","md:hidden","absolute","left-full","bottom-0","-mb-2","ml-4",3,"ngClass"],[1,"bg-white","rounded-xl","p-2","sm:p-4","mt-4","mb-4"],[1,"flex","flex-wrap"],[1,"flex-auto"],[1,"flex","items-center","mb-1"],[1,"w-6/12","font-medium","opacity-60","text-md","sm:text-xl"],[1,"arrow"],[1,"flex-1","text-right","text-lg","sm:text-2xl","opacity-70","font-bold","whitespace-nowrap"],[1,"w-6/12","font-medium","opacity-70","text-md","sm:text-xl"],[1,"arrow","yellow"],[1,"flex-1","text-lg","sm:text-2xl","font-bold","text-right","yellow","whitespace-nowrap"],[1,"flex","items-center"],[1,"w-6/12","font-medium","text-md","sm:text-xl"],[1,"flex-1","text-lg","sm:text-2xl","font-extrabold","text-right","whitespace-nowrap"],[1,"flex","flex-col","justify-end","w-full","sm:w-auto","sm:ml-6","mt-2"],[1,"bg-gradient-primary","rounded","text-white","font-bold","text-2xl","py-2","sm:py-1","px-4","hover:bg-gradient-primary-1",3,"disabled","click"],[1,"hidden","sm:block"],["buyVoucher",""],["arrowIcon",""],[3,"isOpen","realCashback","totalCashback","isOpenChange","confirm"],[3,"isOpen","isOpenChange","confirm"],[1,"mb-2",3,"isCheck","unAvailable","cartItem","isCheckChange","quantityChange"],[1,"h-1","block"],[1,"flex","items-center","relative"],[1,"voucher-btn","voucher-btn--red",3,"disabled","click"],["disabled","","type","number",1,"text-xl","font-bold","text-black","mx-1","border","rounded","text-center",3,"value"],[1,"voucher-btn","voucher-btn--green",3,"disabled","click"],[1,"max-btn","ml-2","font-semibold",3,"disabled","click"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","version","1.1","x","0px","y","0px","viewBox","0 0 31.143 31.143",0,"xml","space","preserve",2,"enable-background","new 0 0 31.143 31.143"],["id","c100_arrow"],["d","M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507    c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08    c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476    l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"]],template:function(n,o){if(1&n&&(t.TgZ(0,"ion-content",0),t.NdJ("ionScroll",function(p){return o.onContentScroll(p)}),t._UZ(1,"app-global-customer-service"),t.TgZ(2,"ion-toolbar",1,2),t._UZ(4,"app-top-navbar")(5,"app-top-menu"),t.qZA(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5)(9,"div")(10,"div",6),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"ion-item",7)(14,"ion-checkbox",8),t.NdJ("ngModelChange",function(p){return o.checkAll=p})("click",function(){return o.toggleCheckAll()}),t.qZA(),t.TgZ(15,"ion-label"),t._uU(16),t.ALo(17,"translate"),t.qZA()()(),t.TgZ(18,"div",9)(19,"div",10)(20,"div",11)(21,"a",12),t._UZ(22,"img",13),t.TgZ(23,"p",14),t._uU(24),t.ALo(25,"translate"),t.qZA(),t.TgZ(26,"p",15)(27,"span"),t._uU(28),t.ALo(29,"currency"),t.qZA()()()()(),t.TgZ(30,"div",10)(31,"div",11)(32,"a",16),t._UZ(33,"img",17),t.TgZ(34,"p",14),t._uU(35),t.ALo(36,"translate"),t.qZA(),t.TgZ(37,"p",18)(38,"span"),t._uU(39),t.ALo(40,"currency"),t.qZA()()()()(),t.TgZ(41,"div",10),t._UZ(42,"app-dollar-dropdown",19),t.qZA(),t.TgZ(43,"div",10),t._UZ(44,"app-my-rebate-credit",20),t.qZA()()(),t.YNc(45,Y,1,3,"app-cart-item",21),t.TgZ(46,"div",22)(47,"div",23),t._UZ(48,"img",24),t.qZA(),t.TgZ(49,"div",25)(50,"div",26)(51,"div",27)(52,"div",28),t._uU(53),t.ALo(54,"translate"),t.qZA(),t.TgZ(55,"div",29)(56,"div",30),t._uU(57),t.ALo(58,"translate"),t.qZA(),t._UZ(59,"img",31),t.qZA(),t.TgZ(60,"div",32),t.GkF(61,33),t._UZ(62,"img",34),t.qZA()(),t.TgZ(63,"div",35)(64,"div",36),t.YNc(65,H,1,0,"app-cart-explosion",37),t.qZA(),t._UZ(66,"app-discount-progress",38),t.qZA(),t.TgZ(67,"div",39)(68,"span"),t._uU(69),t.ALo(70,"translate"),t.qZA()(),t.TgZ(71,"div",40)(72,"div",6),t._uU(73),t.ALo(74,"translate"),t.qZA(),t._UZ(75,"img",31),t.qZA(),t.TgZ(76,"div",41)(77,"div",42),t.GkF(78,33),t._UZ(79,"img",43),t.qZA()()(),t.TgZ(80,"div",44)(81,"div",45)(82,"div",46)(83,"div",47)(84,"div",48),t._uU(85),t.ALo(86,"translate"),t.qZA(),t.TgZ(87,"div",49),t.GkF(88,33),t.qZA(),t.TgZ(89,"div",50),t._uU(90),t.ALo(91,"currency"),t.qZA()(),t.TgZ(92,"div",47)(93,"div",51),t._uU(94),t.ALo(95,"translate"),t.qZA(),t.TgZ(96,"div",52),t.GkF(97,33),t.qZA(),t.TgZ(98,"div",53),t._uU(99),t.ALo(100,"currency"),t.qZA()(),t.TgZ(101,"div",54)(102,"div",55),t._uU(103),t.ALo(104,"translate"),t.qZA(),t.TgZ(105,"div",49),t.GkF(106,33),t.qZA(),t.TgZ(107,"div",56),t._uU(108),t.ALo(109,"currency"),t.qZA()()(),t.TgZ(110,"div",57)(111,"button",58),t.NdJ("click",function(){return o.handleCheckoutClick()}),t._uU(112),t.ALo(113,"translate"),t.qZA()()()()()()()(),t.TgZ(114,"div",59),t._UZ(115,"app-footer"),t.qZA()(),t.YNc(116,z,9,7,"ng-template",null,60,t.W1O),t.YNc(118,B,4,0,"ng-template",null,61,t.W1O),t.TgZ(120,"app-cart-hold-up",62),t.NdJ("isOpenChange",function(p){return o.openHoldUpModal=p})("confirm",function(){return o.confirmOrder()}),t.qZA(),t.TgZ(121,"app-confirm-component",63),t.NdJ("isOpenChange",function(p){return o.showNotice=p})("confirm",function(){return o.confirmOrder()}),t.qZA()),2&n){const i=t.MAs(117),p=t.MAs(119);t.xp6(11),t.hij(" ",t.lcZ(12,37,"header-my-cart")," "),t.xp6(3),t.Q6J("ngModel",o.checkAll),t.xp6(2),t.Oqu(t.lcZ(17,39,"cart-select-all")),t.xp6(8),t.hij(" ",t.lcZ(25,41,"platform-total-savings")," "),t.xp6(4),t.Oqu(t.lcZ(29,43,(null==o.pointStatistic?null:o.pointStatistic.platformTotalSavings)||0)),t.xp6(7),t.hij(" ",t.lcZ(36,45,"my-total-savings")," "),t.xp6(4),t.Oqu(t.lcZ(40,47,(null==o.pointStatistic?null:o.pointStatistic.myselfTotalSavings)||0)),t.xp6(3),t.Q6J("hideRewardDay",!0)("hideAvailableReward",!0),t.xp6(3),t.Q6J("ngForOf",o.cartService.cartList)("ngForTrackBy",o.identify),t.xp6(8),t.hij(" ",t.lcZ(54,49,"tqc-discount-credits-v1-1")," "),t.xp6(4),t.hij(" ",t.lcZ(58,51,"buy-voucher")," "),t.xp6(4),t.Q6J("ngTemplateOutlet",i),t.xp6(1),t.Q6J("ngClass",t.VKq(71,I,o.isMaxVoucher)),t.xp6(3),t.Q6J("ngIf",o.showExplosion),t.xp6(1),t.Q6J("value",o.realCashback)("total",o.totalCashback),t.xp6(3),t.Oqu(t.lcZ(70,53,"cart-buy-credits-tips-v1-1")),t.xp6(4),t.hij(" ",t.lcZ(74,55,"buy-voucher")," "),t.xp6(5),t.Q6J("ngTemplateOutlet",i),t.xp6(1),t.Q6J("ngClass",t.VKq(73,I,o.isMaxVoucher)),t.xp6(6),t.hij(" ",t.lcZ(86,57,"tqc-total-order-cost-v1-1")," "),t.xp6(3),t.Q6J("ngTemplateOutlet",p),t.xp6(2),t.hij(" ",t.lcZ(91,59,o.totalCost)," "),t.xp6(4),t.hij(" ",t.lcZ(95,61,"tqc-discount-credits-v1-1")," "),t.xp6(3),t.Q6J("ngTemplateOutlet",p),t.xp6(2),t.hij(" -",t.lcZ(100,63,o.realCashback)," "),t.xp6(4),t.hij(" ",t.lcZ(104,65,"tqc-price-pay-v1-1")," "),t.xp6(3),t.Q6J("ngTemplateOutlet",p),t.xp6(2),t.hij(" ",t.lcZ(109,67,o.totalCost-o.realCashback)," "),t.xp6(3),t.Q6J("disabled",!o.cartList||!o.canSettlement),t.xp6(1),t.hij(" ",t.lcZ(113,69,"cart-checkout")," "),t.xp6(8),t.Q6J("isOpen",o.openHoldUpModal)("realCashback",o.realCashback)("totalCashback",o.totalCashback),t.xp6(1),t.Q6J("isOpen",o.showNotice)}},dependencies:[O.j,s.mk,s.sg,s.O5,s.tP,v.p,w.c,S.z,Q.V,j.H,J.Z,d.JJ,d.On,e.nz,e.W2,e.pK,e.Ie,e.Q$,e.sr,e.w,e.as,e.Fo,C.n,l.K,P.O,u.yS,D,F,V,s.H9,g.X$],styles:["ion-content[_ngcontent-%COMP%]{--background: #f8f8f8}app-animated-dropdown[_ngcontent-%COMP%]     .dropdown-header-inner{background-color:#f8f8f8!important}ion-item[_ngcontent-%COMP%]{--background: transparent;--border-width: 0px;--background-hover: transparent;--padding-start: 0;--padding-end: 0;--min-height: 12px}.arrow[_ngcontent-%COMP%]{width:24px}.summary[_ngcontent-%COMP%]{width:550px;max-width:100%}.yellow[_ngcontent-%COMP%]{color:#f8ae02}.yellow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f8ae02}.cart-text-golden[_ngcontent-%COMP%]{color:#ffb341}@keyframes pulseAddBtn{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}.voucher-btn[_ngcontent-%COMP%]{height:2rem;width:2rem;border-radius:9999px;text-align:center;font-size:1.5rem;font-weight:800;line-height:2rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.voucher-btn.voucher-btn--red[_ngcontent-%COMP%]{background:#ff0060}.voucher-btn.voucher-btn--green[_ngcontent-%COMP%]{background:#10ba6e;animation:pulseAddBtn 1s infinite}ion-input[_ngcontent-%COMP%]{--padding-start: 0px;height:2rem;width:2.5rem}ion-input[_ngcontent-%COMP%]     input{opacity:1!important}ion-input[_ngcontent-%COMP%]     input::-webkit-outer-spin-button, ion-input[_ngcontent-%COMP%]     input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}ion-input[_ngcontent-%COMP%]     input[type=number]{-moz-appearance:textfield}@keyframes bounceReverse{0%{transform:translateY(0) rotateY(180deg) rotate(90deg)}50%{transform:translateY(-10px) rotateY(180deg) rotate(95deg)}to{transform:translateY(0) rotateY(180deg) rotate(90deg)}}.max-btn[_ngcontent-%COMP%]{color:#10ba6e;font-size:23px}.animated-arrrow[_ngcontent-%COMP%]{width:55px;max-width:none;animation:bounce 2s infinite}.animated-arrrow.reverse[_ngcontent-%COMP%]{transform:rotateY(180deg) rotate(90deg);animation:bounceReverse 2s infinite}button[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%]{opacity:.5}ion-toolbar[appOverflowVisible][_ngcontent-%COMP%]{contain:none}app-dollar-dropdown[_ngcontent-%COMP%]     .dropdown-header-inner{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.explosion-container[_ngcontent-%COMP%]{width:700px;left:50%;transform:translate(-50%);bottom:140px}app-cart-explosion[_ngcontent-%COMP%]{height:600px}app-my-rebate-credit[_ngcontent-%COMP%]     .rebate-credit-container{min-height:76px}[_nghost-%COMP%]     .point-txt{font-size:1.875rem;line-height:2.5rem}@media (min-width: 1024px){[_nghost-%COMP%]     .point-txt{font-size:1.5rem;line-height:2rem}}@media (min-width: 1280px){[_nghost-%COMP%]     .point-txt{font-size:1.875rem;line-height:2.25rem}}app-my-rebate-credit[_ngcontent-%COMP%]     .rebate-credit-container{height:84px}@media (min-width: 1024px){app-my-rebate-credit[_ngcontent-%COMP%]     .rebate-credit-container{height:80px}}"]}),r})();var R=a(22193);let K=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[f.g,s.ez,m.m,d.u5,e.Pc,g.aw,C.n,l.K,P.O,R.n,u.Bz.forChild([{path:"",component:G}])]}),r})()},52646:(M,b,a)=>{a.d(b,{c:()=>q});var s=a(40866);const d={CRYPTO:{image:"assets/images/payment-crypto-min.png",displayText:"Bitcoin, Ethereum and Tether"},ALIPAY:{image:"assets/images/payment-alipay-dark-min.png",displayText:"Alipay"},WECHAT:{image:"assets/images/payment-wechatpay-dark-min.png",displayText:"WeChat"},VISA_MASTER_AMEX:{image:"assets/images/payment-vise-master-amex-min.png",displayText:"Visa, Mastercard and American Express"}},u=[d.CRYPTO,d.ALIPAY,d.WECHAT,d.VISA_MASTER_AMEX];var e=a(98274),g=a(36895),l=a(95133),f=a(84787),m=a(93860),C=a(54463);function h(x,O){if(1&x&&e._UZ(0,"img",25),2&x){const v=O.$implicit;e.Q6J("src",v.image,e.LSH)("alt",v.displayText)}}const Z=function(){return["/products"]},A=function(){return["/cart"]},_=function(){return["/auth/login"]},U=function(){return["/auth/register"]},L=function(){return["/member/profile"]},t=function(){return["/member/store-credits"]},T=function(){return["/member/my-orders"]};let q=(()=>{class x{constructor(){this.paymentMethods=u,this.version=s.J}ngOnInit(){}}return x.\u0275fac=function(v){return new(v||x)},x.\u0275cmp=e.Xpm({type:x,selectors:[["app-footer"]],decls:85,vars:83,consts:[[1,"tyqoon-container","grid","grid-cols-2","p-4","sm:p-3","xs:p-6","gap-5","bg-white","md:grid-cols-5"],[1,"flex","flex-col","col-span-2","items-center","justify-center","lg:items-start"],[1,"block","mb-3"],[1,"text-[14px]","leading-[24px]","w-full","max-w-[300px]","text-center","lg:text-[16px]","lg:text-left"],[1,"flex","flex-col"],[1,"text-[28px]","font-medium","mb-5"],[1,"flex","flex-col","space-y-1"],[1,"text-[#666666]","text-[14px]","lg:text-[18px]",3,"routerLink"],["href","https://about.tyqoon.co/faq/","target","_blank","rel","noreferrer noopener",1,"text-[#666666]","text-[14px]","lg:text-[18px]"],["href","https://about.tyqoon.co/terms-conditions/","target","_blank","rel","noreferrer noopener",1,"text-[#666666]","text-[14px]","lg:text-[18px]"],[1,"grid","grid-cols-4","gap-8","md:flex","md:justify-between","md:items-center","tyqoon-container","py-5","bg-white"],["src","assets/images/Singapore_Fintech_Association_75px-min.png","srcset","\n      assets/images/Singapore-Fintech-Association-75px-min.png  1x,\n      assets/images/Singapore-Fintech-Association-150px-min.png 2x\n    ","alt","Singapore Fintech Association",1,"col-span-4","h-[75px]","mx-auto","md:mx-0","md:h-[25px]","lg:h-[40px]"],["loading","lazy","class","w-full h-auto md:w-auto md:h-[25px] lg:h-[40px]",3,"src","alt",4,"ngFor","ngForOf"],[1,"bg-[#282828]"],[1,"flex","flex-col","justify-center","items-center","tyqoon-container","py-5","sm:mb-0","xs:mb-5","space-y-4"],[1,"flex","items-center","space-x-1"],["href","https://about.tyqoon.co/?lang=en","target","_blank","rel","noreferrer noopener",1,"text-[#7a7a7a]","text-sm","lg:text-lg"],[1,"text-[#7a7a7a]","text-sm","lg:text-lg"],["href","https://about.tyqoon.co/privacy-policy?lang=en","target","_blank","rel","noreferrer noopener",1,"text-[#7a7a7a]","text-sm","lg:text-lg"],["href","https://about.tyqoon.co/terms-conditions?lang=en","target","_blank","rel","noreferrer noopener",1,"text-[#7a7a7a]","text-sm","lg:text-lg"],[1,"flex","relative"],[1,"text-white","text-xs","text-center"],[1,"sm:hidden","xs:block"],["href","https://beian.miit.gov.cn/","target","_blank","rel","noreferrer noopener",1,"text-white","text-xs"],[1,"text-[#7a7a7a]","text-xs","ml-2","sm:ml-0","sm:absolute","sm:top-0","sm:left-[101%]"],["loading","lazy",1,"w-full","h-auto","md:w-auto","md:h-[25px]","lg:h-[40px]",3,"src","alt"]],template:function(v,w){1&v&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-tyqoon-icon",2),e.TgZ(3,"p",3),e._uU(4),e.ALo(5,"translate"),e.qZA()(),e.TgZ(6,"div",4)(7,"h4",5),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"div",6)(11,"a",7),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"a",7),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"a",7),e._uU(18),e.ALo(19,"translate"),e.qZA()()(),e.TgZ(20,"div",4)(21,"h4",5),e._uU(22),e.ALo(23,"translate"),e.qZA(),e.TgZ(24,"div",6)(25,"a",7),e._uU(26),e.ALo(27,"translate"),e.qZA(),e.TgZ(28,"a",7),e._uU(29),e.ALo(30,"translate"),e.qZA(),e.TgZ(31,"a",7),e._uU(32),e.ALo(33,"translate"),e.qZA(),e.TgZ(34,"a",7),e._uU(35),e.ALo(36,"translate"),e.qZA(),e.TgZ(37,"a",7),e._uU(38),e.ALo(39,"translate"),e.qZA()()(),e.TgZ(40,"div",4)(41,"h4",5),e._uU(42),e.ALo(43,"translate"),e.qZA(),e.TgZ(44,"div",6)(45,"a",7),e._uU(46),e.ALo(47,"translate"),e.qZA(),e.TgZ(48,"a",8),e._uU(49),e.ALo(50,"translate"),e.qZA(),e.TgZ(51,"a",9),e._uU(52),e.ALo(53,"translate"),e.qZA()()()(),e.TgZ(54,"div",10),e._UZ(55,"img",11),e.YNc(56,h,1,2,"img",12),e.qZA(),e.TgZ(57,"div",13)(58,"div",14)(59,"div",15)(60,"a",16),e._uU(61),e.ALo(62,"translate"),e.qZA(),e.TgZ(63,"p",17),e._uU(64,"|"),e.qZA(),e.TgZ(65,"a",18),e._uU(66),e.ALo(67,"translate"),e.qZA(),e.TgZ(68,"p",17),e._uU(69,"|"),e.qZA(),e.TgZ(70,"a",19),e._uU(71),e.ALo(72,"translate"),e.qZA()(),e.TgZ(73,"div",20)(74,"p",21),e._uU(75),e.ALo(76,"translate"),e.ALo(77,"translate"),e._UZ(78,"br",22),e._uU(79),e.ALo(80,"translate"),e.TgZ(81,"a",23),e._uU(82,"\u6caaICP\u59072022027392\u53f7-2 "),e.qZA(),e.TgZ(83,"span",24),e._uU(84),e.qZA()()()()()),2&v&&(e.xp6(4),e.hij(" ",e.lcZ(5,32,"footer-description")," "),e.xp6(4),e.hij(" ",e.lcZ(9,34,"footer-title-shop")," "),e.xp6(3),e.Q6J("routerLink",e.DdM(74,Z)),e.xp6(1),e.hij(" ",e.lcZ(13,36,"footer-start-shopping")," "),e.xp6(2),e.Q6J("routerLink",e.DdM(75,A)),e.xp6(1),e.hij(" ",e.lcZ(16,38,"footer-cart")," "),e.xp6(2),e.Q6J("routerLink",e.DdM(76,A)),e.xp6(1),e.hij(" ",e.lcZ(19,40,"footer-checkout")," "),e.xp6(4),e.hij(" ",e.lcZ(23,42,"footer-title-account")," "),e.xp6(3),e.Q6J("routerLink",e.DdM(77,_)),e.xp6(1),e.hij(" ",e.lcZ(27,44,"footer-login")," "),e.xp6(2),e.Q6J("routerLink",e.DdM(78,U)),e.xp6(1),e.hij(" ",e.lcZ(30,46,"register-page-title")," "),e.xp6(2),e.Q6J("routerLink",e.DdM(79,L)),e.xp6(1),e.hij(" ",e.lcZ(33,48,"footer-account")," "),e.xp6(2),e.Q6J("routerLink",e.DdM(80,t)),e.xp6(1),e.hij(" ",e.lcZ(36,50,"gift-codes")," "),e.xp6(2),e.Q6J("routerLink",e.DdM(81,t)),e.xp6(1),e.hij(" ",e.lcZ(39,52,"account-menu-credits")," "),e.xp6(4),e.hij(" ",e.lcZ(43,54,"footer-title-help")," "),e.xp6(3),e.Q6J("routerLink",e.DdM(82,T)),e.xp6(1),e.hij(" ",e.lcZ(47,56,"footer-return")," "),e.xp6(3),e.hij(" ",e.lcZ(50,58,"footer-help")," "),e.xp6(3),e.hij(" ",e.lcZ(53,60,"footer-terms-condition")," "),e.xp6(4),e.Q6J("ngForOf",w.paymentMethods),e.xp6(5),e.hij(" ",e.lcZ(62,62,"footer-about")," "),e.xp6(5),e.hij(" ",e.lcZ(67,64,"footer-privacy")," "),e.xp6(5),e.hij(" ",e.lcZ(72,66,"footer-terms")," "),e.xp6(4),e.AsE(" ",e.lcZ(76,68,"footer-copyright-before")," ",e.lcZ(77,70,"TYQOON Enterprises Pte Ltd")," "),e.xp6(4),e.hij(" ",e.lcZ(80,72,"footer-copyright-after")," "),e.xp6(5),e.hij(" v",w.version," "))},dependencies:[g.sg,l.Fo,f.yS,m.R,C.X$],styles:["[_nghost-%COMP%]{display:block;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}app-tyqoon-icon[_ngcontent-%COMP%]{display:block;height:60px}"],changeDetection:0}),x})()},18215:(M,b,a)=>{a.d(b,{Z:()=>g});var s=a(98274),d=a(12163),u=a(54463);function e(l,f){if(1&l){const m=s.EpF();s.TgZ(0,"div",0)(1,"button",1),s.NdJ("click",function(){const Z=s.CHM(m).method,A=s.oxw();return s.KtG(A.handleBtnClick(Z))}),s._UZ(2,"img",2),s.TgZ(3,"div",3),s._uU(4),s.ALo(5,"translate"),s.qZA()()()}2&l&&(s.xp6(4),s.Oqu(s.lcZ(5,1,"toolkit-official-button")))}let g=(()=>{class l{constructor(){}handleBtnClick(m){m(this.additionalData)}}return l.\u0275fac=function(m){return new(m||l)},l.\u0275cmp=s.Xpm({type:l,selectors:[["app-global-customer-service"]],inputs:{additionalData:"additionalData"},decls:2,vars:0,consts:[[1,"hidden","md:block","rounded-l-2xl","border-y","border-l","border-solid","border-[#e9e9e9]","py-4","px-2","bg-white","shadow-xl","absolute","right-0","w-16","transform","-translate-y-1/2",2,"z-index","999"],[1,"inline",3,"click"],["src","assets/images/toolkit-item1.png","alt","",1,"m-auto","h-10","mb-1"],[1,"text-xs","font-light","text-center"]],template:function(m,C){1&m&&(s.TgZ(0,"app-customer-service"),s.YNc(1,e,6,3,"ng-template"),s.qZA())},dependencies:[d.M,u.X$],styles:["[_nghost-%COMP%]{position:sticky;top:50%;right:0;z-index:100;display:block}"]}),l})()},70957:(M,b,a)=>{a.d(b,{V:()=>g});var s=a(36895),d=a(98274),u=a(84787),e=a(95133);let g=(()=>{class l{constructor(m,C,h){this.content=m,this.router=C,this.platformId=h,(0,s.NF)(this.platformId)&&(this.subscription=this.router.events.subscribe(Z=>{Z instanceof u.m2&&this.content.scrollToTop()}))}ngOnDestroy(){this.subscription?.unsubscribe()}}return l.\u0275fac=function(m){return new(m||l)(d.Y36(e.W2),d.Y36(u.F0),d.Y36(d.Lbi))},l.\u0275dir=d.lG2({type:l,selectors:[["","scrollTop",""]]}),l})()}}]);