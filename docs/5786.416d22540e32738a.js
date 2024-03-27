"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[5786],{46854:(S,_,a)=>{a.d(_,{p:()=>g});var p=a(92340),m=a(54004),d=a(94650),C=a(80529);let g=(()=>{class u{constructor(s){this.http=s}getOrders(s){return this.http.get(`${p.N.BASE_URL}/user/order/getUserOrders`,{params:s}).pipe((0,m.U)(({data:t})=>t))}getOrderDetails(s){return this.http.get(`${p.N.BASE_URL}/user/order/getOrderDetails`,{params:s}).pipe((0,m.U)(({data:t})=>t))}buyGiftCode(s){return this.http.post(`${p.N.BASE_URL}/user/order/buyGiftCode`,s)}buyTicketsGiftCode(s){return this.http.post(`${p.N.BASE_URL}/user/order/buyTicketsGift`,s)}confirmReceipt(s){return this.http.post(`${p.N.BASE_URL}/user/order/confirmReceipt`,s)}increaseReceivingTime(s){return this.http.post(`${p.N.BASE_URL}/user/order/increaseReceivingTime`,s)}cancellationOrder(s){return this.http.post(`${p.N.BASE_URL}/user/order/cancellationOrder`,s)}}return u.\u0275fac=function(s){return new(s||u)(d.LFG(C.eN))},u.\u0275prov=d.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},95786:(S,_,a)=>{a.r(_),a.d(_,{ShopOrderPayModule:()=>V});var p=a(44466),m=a(7507),d=a(15861),C=a(82655),g=a(11781),u=a(5565),y=a(82722),s=a(80164),t=a(94650),v=a(45329),A=a(46854),l=a(95133),T=a(46032),Z=a(49127),B=a(45210),I=a(18215),P=a(24006),h=a(36895),L=a(13325),U=a(93774),b=a(6104),E=a(69751),M=a(86074),x=a(54463);function R(o,i){if(1&o&&(t.TgZ(0,"span",6),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.AsE(" ",t.lcZ(2,2,"payment-minimum-amount-error"),": ",e.minAmount," ")}}function w(o,i){if(1&o&&(t.TgZ(0,"span",6),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.AsE(" ",t.lcZ(2,2,"payment-maximum-amount-error"),": ",e.maxAmount," ")}}function N(o,i){1&o&&(t.TgZ(0,"span",13),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij("",t.lcZ(2,1,"gift-use-card"),":"))}const J=function(o,i){return{"modal-grey-disabled-button":o,alt:i}};function F(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.changePlatform("STRIPE","stripe",r.minAmount,r.maxAmount))}),t.YNc(1,N,3,3,"span",8),t.TgZ(2,"span",9),t._UZ(3,"img",10)(4,"img",11)(5,"img",12),t.qZA()()}if(2&o){const e=t.oxw().$implicit,n=t.oxw(2);t.ekj("selected","Stripe"===n.payMethod),t.Q6J("ngClass",t.WLB(8,J,n.altButton&&(n.totalAmount<e.minAmount||n.totalAmount>e.maxAmount)&&"Stripe"===e.name,n.altButton))("disabled",n.disabled),t.xp6(1),t.Q6J("ngIf",n.altButton),t.xp6(2),t.Q6J("src",n.altButton?"assets/images/payment-alipay.png":"assets/images/payment-alipay-dark-min.png",t.LSH),t.xp6(1),t.Q6J("src",n.altButton?"assets/images/payment-wechatpay.png":"assets/images/payment-wechatpay-dark-min.png",t.LSH),t.xp6(1),t.Q6J("src","assets/images/payment-methods.png",t.LSH)}}function Y(o,i){if(1&o&&(t.TgZ(0,"span",6),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.AsE(" ",t.lcZ(2,2,"payment-minimum-amount-error"),": ",e.minAmount," ")}}function $(o,i){if(1&o&&(t.TgZ(0,"span",6),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.AsE(" ",t.lcZ(2,2,"payment-maximum-amount-error"),": ",e.maxAmount," ")}}function Q(o,i){if(1&o&&(t.ynx(0),t.YNc(1,R,3,4,"span",4),t.YNc(2,w,3,4,"span",4),t.YNc(3,F,6,11,"button",5),t.YNc(4,Y,3,4,"span",4),t.YNc(5,$,3,4,"span",4),t.BQk()),2&o){const e=i.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.altButton&&n.totalAmount<e.minAmount&&"Crypto"===e.name),t.xp6(1),t.Q6J("ngIf",n.altButton&&n.totalAmount>e.maxAmount&&"Crypto"===e.name),t.xp6(1),t.Q6J("ngIf","STRIPE"===e.platformCode),t.xp6(1),t.Q6J("ngIf",n.altButton&&n.totalAmount<e.minAmount&&"Stripe"===e.name),t.xp6(1),t.Q6J("ngIf",n.altButton&&n.totalAmount>e.maxAmount&&"Stripe"===e.name)}}function k(o,i){1&o&&(t.TgZ(0,"p",14),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"store-credit-buy-credits-agree")))}function D(o,i){if(1&o&&(t.TgZ(0,"div",1),t.YNc(1,Q,6,5,"ng-container",2),t.YNc(2,k,3,3,"p",3),t.qZA()),2&o){const e=i.ngIf,n=t.oxw();t.ekj("confirmation-btns",n.altButton),t.xp6(1),t.Q6J("ngForOf",e),t.xp6(1),t.Q6J("ngIf",n.isAdditionalInfo)}}let G=(()=>{class o{constructor(e,n,r,c,f,O){this.memberSrv=e,this.dict=n,this.router=r,this.paymentService=c,this.CheckoutService=f,this.toast=O,this.platformChange=new t.vpe,this.paySuccess=new t.vpe,this.modalClose=new t.vpe,this.defaultSelectFirstPlatform=!0,this.isAdditionalInfo=!0,this.altButton=!1,this.totalAmount=null,this.loading={queryList:!1}}get memberInfo(){return this.memberSrv.userInfo$}ngOnInit(){this.paymentTypes$=this.memberSrv.queryPlatformList()}toastError(e){var n=this;return(0,d.Z)(function*(){yield n.presentToast({position:"bottom",message:e,icon:"alert-circle-outline",duration:1e3,color:"danger"})})()}toastSuccess(e){var n=this;return(0,d.Z)(function*(){yield n.presentToast({position:"bottom",message:e,duration:1e3,icon:"checkmark-circle-outline",color:"success"})})()}presentToast(e){var n=this;return(0,d.Z)(function*(){yield(yield n.toast.create(e)).present()})()}changePlatform(e,n,r,c){this.selectedPaymentCode=e,this.payMethod=n,this.platformChange.emit({platformCode:e,minAmount:r,maxAmount:c})}unSelectPlatform(){this.changePlatform()}confirm(e){return new E.y(n=>{if(!this.selectedPaymentCode)return n.error(),void this.toastError("\u8bf7\u9009\u62e9\u652f\u4ed8\u65b9\u5f0f");this.memberSrv.payV2({platformCode:this.selectedPaymentCode,paymentType:g.uG.client,...e}).subscribe({next:r=>{console.log(r),this.router.navigateByUrl(`/pay?id=${r.data.id}`)},error:r=>{console.error(r),this.toastError(r.message),n.error(r)}})})}payConfirm(e){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v.K),t.Y36(b.e),t.Y36(m.F0),t.Y36(M.Z),t.Y36(s.Z),t.Y36(l.yF))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-payment-result"]],inputs:{defaultSelectFirstPlatform:"defaultSelectFirstPlatform",disabled:"disabled",isAdditionalInfo:"isAdditionalInfo",altButton:"altButton",totalAmount:"totalAmount"},outputs:{platformChange:"platformChange",paySuccess:"paySuccess",modalClose:"modalClose"},features:[t._Bn([M.Z,b.e])],decls:2,vars:3,consts:[["class","payment",3,"confirmation-btns",4,"ngIf"],[1,"payment"],[4,"ngFor","ngForOf"],["class","description",4,"ngIf"],["class","error",4,"ngIf"],["class","other-method",3,"ngClass","selected","disabled","click",4,"ngIf"],[1,"error"],[1,"other-method",3,"ngClass","disabled","click"],["class","addition-text",4,"ngIf"],[1,"images",2,"display","grid"],["alt","Alipay",3,"src"],["alt","Wechat",3,"src"],["alt","Payments",3,"src"],[1,"addition-text"],[1,"description"]],template:function(e,n){1&e&&(t.YNc(0,D,3,4,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,n.paymentTypes$))},dependencies:[h.O5,h.mk,h.sg,x.X$,h.Ov],styles:[".payment[_ngcontent-%COMP%]{max-width:700px;margin:0 auto;text-align:center}@media (max-width: 1040px){.payment[_ngcontent-%COMP%]{max-width:500px}}.payment[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.payment[_ngcontent-%COMP%]   .payment-coin[_ngcontent-%COMP%]{width:22px}.payment[_ngcontent-%COMP%]   .hide-text-crypt[_ngcontent-%COMP%]{display:none}.payment[_ngcontent-%COMP%]   button.crypt[_ngcontent-%COMP%]{background:#3982f7;border:2px solid #6addf8;border-radius:15px;min-height:64px;padding:2px;display:flex;align-items:center;justify-content:center;flex-direction:column;margin-bottom:8px;width:100%;font-family:Gotham Pro,sans-serif;font-style:normal;font-weight:700;font-size:18px;line-height:22px;letter-spacing:-.03em;color:#fff}.payment[_ngcontent-%COMP%]   button.crypt[disabled][_ngcontent-%COMP%]{border:1px solid #d9d9d9;opacity:.5;background:#c4c4c4}.payment[_ngcontent-%COMP%]   button.crypt[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#fff}.payment[_ngcontent-%COMP%]   button.crypt[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,50px);grid-gap:8px;max-width:170px;width:100%;margin:0 auto 1px}.payment[_ngcontent-%COMP%]   button.crypt[_ngcontent-%COMP%]   .unset-grid-image[_ngcontent-%COMP%]{max-width:170px;width:100%;margin:0 auto 1px}.payment[_ngcontent-%COMP%]   button.other-method[_ngcontent-%COMP%]{width:100%;min-height:64px;padding:0 20px;margin-bottom:4px;background:#ffffff;border:1px solid #d3d3d3;border-radius:16px}.payment[_ngcontent-%COMP%]   button.other-method[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr);align-items:center;grid-gap:14px}.payment[_ngcontent-%COMP%]   button.other-method.selected[_ngcontent-%COMP%]{border-color:#fb8811}.payment[_ngcontent-%COMP%]   button.other-method[_ngcontent-%COMP%]:disabled{cursor:default;opacity:.8}.payment.confirmation-btns[_ngcontent-%COMP%]   button.alt[_ngcontent-%COMP%]{background-image:linear-gradient(270deg,#ff8340 0%,#ff6009 100%);border:0;border-radius:4px;position:relative;max-height:80px;min-height:80px;height:80px}.payment.confirmation-btns[_ngcontent-%COMP%]   button.alt[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:50%;transform:translateY(-50%) rotate(180deg);right:20px;background-image:url(\"data:image/svg+xml,%3Csvg width='19' height='32' viewBox='0 0 19 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 4.57143L7.125 16L19 27.4286L16.625 32L0 16L16.625 0L19 4.57143Z' fill='%23f3f3f3'/%3E%3C/svg%3E\");background-repeat:no-repeat;width:20px;height:32px}.payment.confirmation-btns[_ngcontent-%COMP%]   button.alt[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{max-width:80%;margin:0 auto}.payment.confirmation-btns[_ngcontent-%COMP%]   button.alt[_ngcontent-%COMP%]   span.addition-text[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center;width:100%;color:#fff}.payment[_ngcontent-%COMP%]   .modal-grey-disabled-button[_ngcontent-%COMP%]{color:#000000d9!important;border:1px solid #d9d9d9!important;opacity:.5!important;background:#c4c4c4!important;pointer-events:none!important}"]}),o})();const j=["paymentComponent"],z=["header"];function H(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",15)(1,"div")(2,"ion-button",16),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.payCancelConfirm())}),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"ion-button",17),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.pay())}),t._uU(6),t.ALo(7,"translate"),t.qZA()()()}2&o&&(t.xp6(3),t.Oqu(t.lcZ(4,2,"checkout-final-cancel")),t.xp6(3),t.Oqu(t.lcZ(7,4,"checkout-final-confirm")))}const K=[{path:"",component:(()=>{class o extends u.V{constructor(e,n,r,c,f,O,tt){super(),this.router=e,this.activatedRoute=n,this.CheckoutService=r,this.user=c,this.orderSrv=f,this.toast=O,this.renderer=tt,this.userInfo=null,this.useBalance=!1,this.loading={getOrderDetails:!1,pay:!1,queryByBusiness:!1},this.lastScrollTop=0}onContentScroll(e){const n=e.detail.scrollTop;n>=50&&this.lastScrollTop<n?this.renderer.addClass(this.header.el,"top-toolbar-hide"):this.renderer.removeClass(this.header.el,"top-toolbar-hide"),this.lastScrollTop=n}get canPay(){return Object.is(this.orders?.status,C.i.PendingPayment)}get orders(){return this.orderDetails?.orders||{}}get canUseBalance(){return!(!this.userInfo?.balance||!this.needPayAmount)&&this.userInfo.balance>=this.needPayAmount}get needPayAmount(){return this.orders?.amount-this.orders?.amountPaid}ngOnInit(){const{orderId:e}=this.activatedRoute.snapshot.queryParams;this.orderId=e,this.QueryByBusiness(),this.user.updateUserInfo(),this.activatedRoute.queryParams.pipe((0,y.R)(this.destroyStream$)),this.user.userInfo$.pipe((0,y.R)(this.destroyStream$)).subscribe(n=>{this.userInfo=n})}toastError(e){var n=this;return(0,d.Z)(function*(){yield n.presentToast({position:"bottom",message:e,icon:"alert-circle-outline",duration:1e3,color:"danger"})})()}toastSuccess(e){var n=this;return(0,d.Z)(function*(){yield n.presentToast({position:"bottom",message:e,duration:1e3,icon:"checkmark-circle-outline",color:"success"})})()}presentToast(e){var n=this;return(0,d.Z)(function*(){yield(yield n.toast.create(e)).present()})()}QueryByBusiness(){this.loading.queryByBusiness=!0,this.user.QueryByBusiness(g.ri.ORDER,this.orderId).pipe((0,y.R)(this.destroyStream$)).subscribe({next:e=>{[g.P1.PENDING,g.P1.FINISH].includes(e.data.status)?this.router.navigate([`/pay/result/${e.data.id}`],{replaceUrl:!0}):this.getOrder()},error:e=>{8001003!==(console.error(e),e.code)?this.toastError(e.message):this.getOrder()}}).add(()=>{this.loading.queryByBusiness=!1})}getOrder(){const e=this.orderId;this.loading.getOrderDetails=!0,this.orderSrv.getOrderDetails({orderId:e}).pipe((0,y.R)(this.destroyStream$)).subscribe({next:n=>{this.orderDetails=n,console.log(this.orderDetails)},error:n=>{console.error(n),this.toastError(n.message)}}).add(()=>this.loading.getOrderDetails=!1)}pay(){this.loading.pay=!0,this.useBalance?this.balancePayment():this.paymentComponent.confirm({businessType:g.ri.ORDER,businessId:this.orderId}).subscribe({error:e=>{console.error(e),Object.is(e.code,8001009)&&this.QueryByBusiness()}}).add(()=>this.loading.pay=!1)}payCancel(){this.navigateToOrderList()}payCancelConfirm(){this.navigateToOrderList()}useBalanceChange(e){e&&this.paymentComponent.unSelectPlatform()}platformChange(e){this.selectedPaymentCode=e.platformCode||"",e.platformCode&&(this.useBalance=!1)}balancePayment(){this.CheckoutService.balancePayment({orderId:this.orderId}).subscribe({next:()=>{this.toastSuccess("\u652f\u4ed8\u6210\u529f"),this.navigateToOrderList()},error:e=>{switch(console.error(e),this.toastError(e.message),e.code){case 1008013:this.useBalance=!1,this.user.updateUserInfo();break;case 1008028:case 1008027:this.router.navigate(["/member/my-orders/detail"],{queryParams:{id:this.orderId},replaceUrl:!0});break;case 4001013:case 1008015:this.router.navigate(["/member/my-orders/list"],{replaceUrl:!0})}}}).add(()=>this.loading.pay=!1)}paySuccess(){this.toastSuccess("\u652f\u4ed8\u6210\u529f"),this.navigateToOrderList()}navigateToOrderList(){this.router.navigateByUrl("/member/order/list",{replaceUrl:!0})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.F0),t.Y36(m.gz),t.Y36(s.Z),t.Y36(v.K),t.Y36(A.p),t.Y36(l.yF),t.Y36(t.Qsj))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-shop-order-pay"]],viewQuery:function(e,n){if(1&e&&(t.Gf(j,5),t.Gf(z,5)),2&e){let r;t.iGM(r=t.CRH())&&(n.paymentComponent=r.first),t.iGM(r=t.CRH())&&(n.header=r.first)}},features:[t._Bn([s.Z]),t.qOj],decls:31,vars:20,consts:[["fullscreen","true","scrollEvents","true","backToTopBtn","",3,"ionScroll"],["ionContent",""],["appOverflowVisible","",1,"sticky","top-0","shadow-lg","z-50"],["header",""],[3,"forceFullWidthSearch"],[1,"page-order-pay","w-full"],[1,"need-pay"],[1,"amount"],[1,"balance-card"],[1,"flex","ion-align-items-center"],[3,"disabled","ngModel","ngModelChange"],[3,"defaultSelectFirstPlatform","platformChange","paySuccess"],["paymentComponent",""],["class","footer",4,"ngIf"],[1,"mt-4","md:hidden"],[1,"footer"],["color","light",1,"confirm-btn",3,"click"],["color","warning",1,"confirm-payment","confirm-btn",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-content",0,1),t.NdJ("ionScroll",function(c){return n.onContentScroll(c)}),t._UZ(2,"app-global-customer-service"),t.TgZ(3,"ion-toolbar",2,3),t._UZ(5,"app-top-navbar",4)(6,"app-top-menu"),t.qZA(),t.TgZ(7,"div",5)(8,"div",6),t._uU(9),t.ALo(10,"translate"),t.TgZ(11,"span",7),t._uU(12),t.ALo(13,"currency"),t.qZA()(),t.TgZ(14,"ion-card",8)(15,"ion-card-title"),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"ion-card-content",9)(19,"ion-checkbox",10),t.NdJ("ngModelChange",function(c){return n.useBalance=c})("ngModelChange",function(c){return n.useBalanceChange(c)}),t.qZA(),t._uU(20),t.ALo(21,"currency"),t.qZA()(),t.TgZ(22,"ion-card",8)(23,"ion-card-title"),t._uU(24),t.ALo(25,"translate"),t.qZA(),t.TgZ(26,"app-payment-result",11,12),t.NdJ("platformChange",function(c){return n.platformChange(c)})("paySuccess",function(){return n.paySuccess()}),t.qZA()(),t.YNc(28,H,8,6,"div",13),t.qZA()(),t.TgZ(29,"ion-footer",14),t._UZ(30,"app-bottom-navbar"),t.qZA()),2&e&&(t.xp6(5),t.Q6J("forceFullWidthSearch",!0),t.xp6(4),t.hij(" ",t.lcZ(10,10,"checkout-total-confirm"),"\uff1a"),t.xp6(3),t.Oqu(t.lcZ(13,12,n.needPayAmount)),t.xp6(4),t.Oqu(t.lcZ(17,14,"checkout-use-credits")),t.xp6(3),t.Q6J("disabled",!n.canUseBalance)("ngModel",n.useBalance),t.xp6(1),t.hij(" ",t.lcZ(21,16,null==n.userInfo?null:n.userInfo.balance)," "),t.xp6(4),t.Oqu(t.lcZ(25,18,"checkout-payment-options")),t.xp6(2),t.Q6J("defaultSelectFirstPlatform",!1),t.xp6(2),t.Q6J("ngIf",n.canPay))},dependencies:[T.K,Z.H,B.B,I.Z,P.JJ,P.On,l.YG,l.PM,l.FN,l.Dq,l.nz,l.W2,l.fr,l.sr,l.w,h.O5,L.p,U.z,G,x.X$,h.H9],styles:[".page-order-pay[_ngcontent-%COMP%]{min-height:80vh;padding:20px 70px;margin:0 auto}@media (max-width: 640px){.page-order-pay[_ngcontent-%COMP%]{padding:10px}}.page-order-pay[_ngcontent-%COMP%]   .need-pay[_ngcontent-%COMP%]{font-size:36px;color:#999}.page-order-pay[_ngcontent-%COMP%]   .need-pay[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{color:#fb8811;font-weight:800}.page-order-pay[_ngcontent-%COMP%]   .label-balance-pay[_ngcontent-%COMP%]{padding-right:8px;padding-left:8px;font-size:22px;color:#000000d9}.page-order-pay[_ngcontent-%COMP%]   .balance-card[_ngcontent-%COMP%]{margin-bottom:2vh;padding:10px}.page-order-pay[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{padding-top:16px;display:flex;justify-content:center}"]}),o})()}];let W=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(K),m.Bz]}),o})();var q=a(50738),X=a(1241);let V=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.m,W,x.aw,P.u5,q.PaymentModule,l.Pc,h.ez,X.x]}),o})()}}]);