"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[210,9127],{24499:(S,y,e)=>{e.d(y,{c:()=>h});var d=e(5565),c=e(94650);const g=["header"];let h=(()=>{class p extends d.V{constructor(u,f){super(),this.element=u,this.renderer=f,this.lastScrollTop=0}onContentScroll(u){const f=u.detail.scrollTop;f>=50&&this.lastScrollTop<f?this.renderer.addClass(this.header.el,"top-toolbar-hide"):this.renderer.removeClass(this.header.el,"top-toolbar-hide"),this.lastScrollTop=f}}return p.\u0275fac=function(u){return new(u||p)(c.Y36(c.SBq),c.Y36(c.Qsj))},p.\u0275cmp=c.Xpm({type:p,selectors:[["ng-component"]],viewQuery:function(u,f){if(1&u&&c.Gf(g,5),2&u){let t;c.iGM(t=c.CRH())&&(f.header=t.first)}},features:[c.qOj],decls:0,vars:0,template:function(u,f){},encapsulation:2}),p})()},85898:(S,y,e)=>{e.d(y,{b:()=>Y});var d=e(15861),c=e(77579),g=e(82722),h=e(59468),p=e(49808),m=e(24837),u=e(95133),f=e(54463),t=e(36895),T=e(44466),x=e(59809),C=e(5565),O=e(18110),M=e(7507),n=e(94650),R=e(35482),A=e(45329),D=e(56889),E=e(23284),I=e(90147);function b(l,v){if(1&l&&n._UZ(0,"app-product-card",6),2&l){const o=v.$implicit,s=n.oxw().ngLet,i=n.oxw().ngLet;n.Q6J("product",o)("isBiddingMode",!!s)("isLogin",!!i)}}function B(l,v){1&l&&n._UZ(0,"app-product-card-skeleton",8)}const Z=function(){return[]};function L(l,v){if(1&l&&(n.ynx(0),n.YNc(1,B,1,0,"app-product-card-skeleton",7),n.BQk()),2&l){const o=n.oxw(3);n.xp6(1),n.Q6J("ngForOf",n.DdM(2,Z).constructor(o.pageSize).fill(1))("ngForTrackBy",o.trackByFn2)}}function U(l,v){if(1&l&&(n.TgZ(0,"div",3),n.YNc(1,b,1,3,"app-product-card",4),n.YNc(2,L,2,3,"ng-container",5),n.qZA()),2&l){const o=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",o.products)("ngForTrackBy",o.trackByFn),n.xp6(1),n.Q6J("ngIf",o.isLoading)}}function K(l,v){if(1&l&&(n.TgZ(0,"div"),n.YNc(1,U,3,3,"div",2),n.ALo(2,"async"),n.qZA()),2&l){const o=n.oxw();n.xp6(1),n.Q6J("ngLet",n.lcZ(2,1,o.biddingService.isBiddingMode$))}}function F(l,v){1&l&&(n.TgZ(0,"a",9),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&l&&(n.Q6J("routerLink","product/search"),n.xp6(1),n.hij(" ",n.lcZ(2,2,"see-more"),"\n"))}let Y=(()=>{class l extends C.V{constructor(o,s,i,_){super(),this.productService=o,this.userService=s,this.biddingService=i,this.cdr=_,this.offsetScroll=2e3,this.additionalParams={},this.isSSR=!1,this.biddingProductsSortOrder=0,this.shoppingModePageSize=20,this.biddingModePageSize=18,this.throttleScroll=new c.x,this.pageSize=20,this.page=-1,this.isLoading=!1,this.total=0,this.products=[],this.isBiddingMode=!1,this.scrollActive$=new c.x}ngOnInit(){console.log(8787878,this.biddingProductsSortOrder),!this.isSSR&&m.Z.isServer?this.isLoading=!0:this.biddingService.isBiddingMode$.pipe((0,g.R)(this.destroyStream$)).subscribe(o=>{this.isBiddingMode=o,this.page=-1,this.products=[],this.pageSize=this.isBiddingMode?this.biddingModePageSize:this.shoppingModePageSize,this.cdr.detectChanges(),this.refreshProducts(),this.initInfiniteScrolling()})}ngOnDestroy(){super.ngOnDestroy(),this.clearSubscriptions()}clearSubscriptions(){this.scrollActive$?.next(!1),this.scrollActive$?.complete()}ngAfterViewInit(){m.Z.isServer||this.initInfiniteScrolling()}initInfiniteScrolling(){var o=this;return(0,d.Z)(function*(){o.clearSubscriptions(),o.scrollContainer&&!o.isBiddingMode&&(o.scrollActive$=new c.x,o.scrollElement=yield o.scrollContainer.getScrollElement(),o.scrollContainer.ionScroll.pipe((0,g.R)(o.scrollActive$)).subscribe(s=>{o.scrollElement.scrollHeight-s.detail.scrollTop<o.offsetScroll&&o.throttleScroll.next(1)}),o.throttleScroll.pipe((0,h.p)(300),(0,g.R)(o.scrollActive$)).subscribe(()=>{o.fetchData()}))})()}ngOnChanges(o){}refreshProducts(){this.page=-1,this.total=0,this.products=[],this.fetchData()}fetchData(o=null){var s=this;return(0,d.Z)(function*(){const i=o??s.page+1;if(!s.isLoading&&(0===i||s.products.length<s.total)){s.isLoading=!0,s.page=i,s.cdr.markForCheck();const _=s.isBiddingMode?yield(0,p.n)(s.biddingService.getProductsWithPoolInfo({page:s.page,rows:s.pageSize,sortType:s.biddingProductsSortOrder,isRecommended:!0,...s.additionalParams})):yield(0,p.n)(s.productService.getProductsByMetaParamsV2({page:s.page,rows:s.pageSize,traceId:s.userService.traceId,isRecommended:!0,...s.additionalParams}));_.rows=(0,O.DI)(_.rows||[]),s.products=[...s.products,..._.rows||[]],s.total=_.total,s.isLoading=!1,s.cdr.markForCheck()}})()}clear(){this.page=-1,this.isLoading=!1,this.total=0,this.products=[]}trackByFn(o,s){return s.id}trackByFn2(o){return o}}return l.\u0275fac=function(o){return new(o||l)(n.Y36(R.s),n.Y36(A.K),n.Y36(D.g),n.Y36(n.sBO))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-products-infinite-scroll"]],inputs:{scrollContainer:"scrollContainer",offsetScroll:"offsetScroll",additionalParams:"additionalParams",isSSR:"isSSR",biddingProductsSortOrder:"biddingProductsSortOrder",shoppingModePageSize:"shoppingModePageSize",biddingModePageSize:"biddingModePageSize"},standalone:!0,features:[n.qOj,n.TTD,n.jDz],decls:3,vars:4,consts:[[4,"ngLet"],["class","px-6 py-1 capitalize mx-auto mt-4 mb-2 see-more block w-fit border border-solid rounded-lg text-2xl text-center font-medium text-white",3,"routerLink",4,"ngIf"],["class","grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-2 gap-y-6",4,"ngLet"],[1,"grid","grid-cols-2","xs:grid-cols-3","sm:grid-cols-4","md:grid-cols-5","lg:grid-cols-6","gap-x-2","gap-y-6"],["class","block",3,"product","isBiddingMode","isLogin",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"block",3,"product","isBiddingMode","isLogin"],["class","block",4,"ngFor","ngForOf","ngForTrackBy"],[1,"block"],[1,"px-6","py-1","capitalize","mx-auto","mt-4","mb-2","see-more","block","w-fit","border","border-solid","rounded-lg","text-2xl","text-center","font-medium","text-white",3,"routerLink"]],template:function(o,s){1&o&&(n.YNc(0,K,3,3,"div",0),n.ALo(1,"async"),n.YNc(2,F,3,4,"a",1)),2&o&&(n.Q6J("ngLet",n.lcZ(1,2,s.userService.userInfo$)),n.xp6(2),n.Q6J("ngIf",s.isBiddingMode))},dependencies:[f.aw,f.X$,t.ez,t.sg,t.O5,t.Ov,u.Pc,u.Fo,T.m,E.Y,I.h,x.I,M.Bz,M.yS],styles:[".see-more[_ngcontent-%COMP%]{background:linear-gradient(to right,#8467ff 0%,#eb00ff 100%);border-color:#9d2ec3;min-width:160px}.see-more[_ngcontent-%COMP%]:hover{color:#fff;background:linear-gradient(to right,#7454ff 0%,#bb00cb 100%)}"],changeDetection:0}),l})()},90210:(S,y,e)=>{e.r(y),e.d(y,{PayResultModule:()=>s});var d=e(88595),c=e(7507),g=e(15861),h=e(11781),p=e(6104),m=e(82722),u=e(15439),f=e(24499),t=e(94650),T=e(36895),x=e(95133),C=e(80164),O=e(54463),M=e(46032),n=e(49127),R=e(45210),A=e(18215),D=e(2628),E=e(85898),I=e(13325),b=e(93774);function B(i,_){if(1&i&&(t.TgZ(0,"div",18),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"dict"),t.qZA()),2&i){const r=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,t.Dn7(3,3,r.payResult.status,r.DictKey.PAY_STATUS,"tips")))}}function Z(i,_){if(1&i&&(t.TgZ(0,"div")(1,"div",19),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",20),t._uU(5),t.qZA()()),2&i){const r=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"payment-remain-time")),t.xp6(3),t.Oqu(r.countdown())}}function L(i,_){if(1&i&&t._UZ(0,"app-pay-content",21),2&i){const r=t.oxw();t.Q6J("content",r.payResult)}}function U(i,_){if(1&i){const r=t.EpF();t.TgZ(0,"ion-button",22),t.NdJ("click",function(){t.CHM(r);const P=t.oxw();return t.KtG(P.cancelPayment())}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"order-cancel-payment")))}const K=function(){return{isRecommended:!1,activityId:"40597823"}},Y=[{path:"",component:(()=>{class i extends f.c{constructor(r,a,P,z,J,Q,W,k,N){super(k,W),this.activeRoute=r,this.location=a,this.dict=P,this.router=z,this.toast=J,this.CheckoutService=Q,this.renderer=W,this.element=k,this.translate=N,this.DictKey=p.f,this.loading={queryPaymentOrder:!1}}ngOnInit(){this.orderId=this.activeRoute.snapshot.params.id,this.queryPaymentOrder(),setInterval(()=>{this.countdown()},1e3)}ngOnDestroy(){this.destroy(),clearInterval(this.payResultSetTimeout)}get bussinessType(){return this.dict.transform(this.payResult?.businessType,this.DictKey.PAY_BUSINESS_TYPE)}get isPending(){return Object.is(this.payResult?.status,h.P1.PENDING)}get primaryBtnText(){return this.isPending?"\u7acb\u5373\u652f\u4ed8":this.bussinessType?.primaryBtnText}convertToDecimal(r){return r<10&&(r=0+r.toString()),r}countdown(){const r=u(this.payResult.businessExpired).unix()-u().unix(),a=this.convertToDecimal(u.duration(r,"seconds").minutes()),P=this.convertToDecimal(u.duration(r,"seconds").seconds());return this.payResult.businessExpired<(new Date).getTime()?"00:00:00":`00: ${a} : ${P}`}toastError(r){var a=this;return(0,g.Z)(function*(){yield a.presentToast({position:"bottom",message:r,icon:"alert-circle-outline",duration:1e3,color:"danger"})})()}toastSuccess(r){var a=this;return(0,g.Z)(function*(){yield a.presentToast({position:"bottom",message:r,duration:1e3,icon:"checkmark-circle-outline",color:"success"})})()}presentToast(r){var a=this;return(0,g.Z)(function*(){yield(yield a.toast.create(r)).present()})()}queryPaymentOrder(r){r||(this.loading.queryPaymentOrder=!0),this.CheckoutService.queryPaymentOrder(this.orderId).pipe((0,m.R)(this.destroyStream$)).subscribe({next:a=>{this.payResult={...a.data,expiredTime:1e3*a.data.expiredTime,businessExpired:1e3*a.data.businessExpired},Object.is(this.payResult?.status,h.P1.PENDING)&&(this.payResultSetTimeout=setTimeout(()=>this.queryPaymentOrder(!0),2e3))},error:a=>{console.error(a),this.toastError(a.message)}}).add(()=>this.loading.queryPaymentOrder=!1)}primaryBtnClick(){this.isPending?this.router.navigateByUrl(`/pay?id=${this.payResult.id}`):this.router.navigateByUrl(this.bussinessType.link,{replaceUrl:!0})}back(){this.location.back()}cancelPayment(){this.CheckoutService.cancel({id:this.orderId}).pipe((0,m.R)(this.destroyStream$)).subscribe()}}return i.\u0275fac=function(r){return new(r||i)(t.Y36(c.gz),t.Y36(T.Ye),t.Y36(p.e),t.Y36(c.F0),t.Y36(x.yF),t.Y36(C.Z),t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(O.sK))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-pay-result"]],features:[t._Bn([p.e]),t.qOj],decls:25,vars:15,consts:[[1,"page-pay-result"],["fullscreen","true","scrollEvents","true","backToTopBtn","",3,"ionScroll"],["ionContent",""],["appOverflowVisible","",1,"sticky","top-0","shadow-lg","z-50"],["header",""],[3,"forceFullWidthSearch"],[1,"w-full"],["class","pay_title",4,"ngIf"],[1,"pending"],[4,"ngIf"],[3,"content",4,"ngIf"],[1,"btn-spot"],["color","warning",3,"click"],["color","light",3,"click"],["color","danger","class","cancel-payment",3,"click",4,"ngIf"],[1,"tyqoon-container","min-h-[50vh]","mt-4"],[3,"additionalParams","scrollContainer","isSSR"],[1,"mt-4","md:hidden"],[1,"pay_title"],[1,"statistic-title"],[1,"timestamp","main-title"],[3,"content"],["color","danger",1,"cancel-payment",3,"click"]],template:function(r,a){if(1&r&&(t.TgZ(0,"div",0)(1,"ion-content",1,2),t.NdJ("ionScroll",function(z){return a.onContentScroll(z)}),t._UZ(3,"app-global-customer-service"),t.TgZ(4,"ion-toolbar",3,4),t._UZ(6,"app-top-navbar",5)(7,"app-top-menu"),t.qZA(),t.TgZ(8,"div",6),t.YNc(9,B,4,7,"div",7),t.TgZ(10,"div",8),t.YNc(11,Z,6,4,"div",9),t.YNc(12,L,1,1,"app-pay-content",10),t.qZA(),t.TgZ(13,"div",11)(14,"ion-button",12),t.NdJ("click",function(){return a.primaryBtnClick()}),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"ion-button",13),t.NdJ("click",function(){return a.back()}),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.YNc(20,U,3,3,"ion-button",14),t.qZA()(),t.TgZ(21,"div",15),t._UZ(22,"app-products-infinite-scroll",16),t.qZA()(),t.TgZ(23,"ion-footer",17),t._UZ(24,"app-bottom-navbar"),t.qZA()()),2&r){const P=t.MAs(2);t.xp6(6),t.Q6J("forceFullWidthSearch",!0),t.xp6(3),t.Q6J("ngIf",a.payResult),t.xp6(2),t.Q6J("ngIf",a.isPending),t.xp6(1),t.Q6J("ngIf",a.payResult),t.xp6(3),t.Oqu(t.lcZ(16,10,a.primaryBtnText)),t.xp6(3),t.Oqu(t.lcZ(19,12,"go-back")),t.xp6(2),t.Q6J("ngIf",a.isPending),t.xp6(2),t.Q6J("additionalParams",t.DdM(14,K))("scrollContainer",P)("isSSR",!0)}},dependencies:[M.K,n.H,R.B,A.Z,D.k,x.YG,x.W2,x.fr,x.sr,T.O5,E.b,I.p,b.z,p.e,O.X$],styles:[".page-pay-result[_ngcontent-%COMP%]{min-height:70vh;display:flex;justify-content:center;align-items:center;inset:0;position:absolute;flex-direction:column;contain:layout size style;overflow:hidden;z-index:0}.page-pay-result[_ngcontent-%COMP%]   .pay_title[_ngcontent-%COMP%]{color:#000000d9;font-size:24px;line-height:1.8;text-align:center;padding-top:50px}.page-pay-result[_ngcontent-%COMP%]   .pending[_ngcontent-%COMP%]{text-align:center}.page-pay-result[_ngcontent-%COMP%]   .pending[_ngcontent-%COMP%]   .statistic-title[_ngcontent-%COMP%]{margin-bottom:4px;color:#00000073;font-size:14px}.page-pay-result[_ngcontent-%COMP%]   .pending[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]{color:#000000d9;font-size:24px}.page-pay-result[_ngcontent-%COMP%]   .cancel-payment[_ngcontent-%COMP%]{color:#fff;margin-left:5%}.page-pay-result[_ngcontent-%COMP%]   .btn-spot[_ngcontent-%COMP%]{margin:24px 0 0;text-align:center}"]}),i})()}];let l=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.Bz.forChild(Y),c.Bz]}),i})();var v=e(44466),o=e(1241);let s=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[v.m,l,d.g,v.m,x.Pc,O.aw,E.b,o.x]}),i})()},59809:(S,y,e)=>{e.d(y,{I:()=>c});var d=e(94650);let c=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275cmp=d.Xpm({type:g,selectors:[["app-product-card-skeleton"]],standalone:!0,features:[d.jDz],decls:9,vars:0,consts:[[1,"cursor-pointer","flex","flex-col","w-full","max-w-[246px]","lg:max-w-[220px]","xl:max-w-[245px]"],[1,"relative","w-full","mb-2",2,"padding-top","100%"],[1,"absolute","inset-0","pulSate","rounded-lg"],[1,"product-title","truncate","mb-1","pulSate","text-sm",2,"letter-spacing","20px"],[1,"text-xs","leading-3","text-center","pulSate",2,"letter-spacing","20px"],[1,"text-base","text-center","pulSate",2,"letter-spacing","20px"]],template:function(p,m){1&p&&(d.TgZ(0,"div",0)(1,"div",1),d._UZ(2,"div",2),d.qZA(),d.TgZ(3,"p",3),d._uU(4," \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),d.qZA(),d.TgZ(5,"p",4),d._uU(6," \xa0\xa0 "),d.qZA(),d.TgZ(7,"p",5),d._uU(8," \xa0\xa0 "),d.qZA()())}}),g})()},49127:(S,y,e)=>{e.d(y,{H:()=>g});var d=e(24837),c=e(94650);let g=(()=>{class h{constructor(m){this.toolbar=m.nativeElement}ngAfterViewInit(){if(d.Z.isServer)return;const m=setInterval(()=>{if(this.toolbar.shadowRoot){let u=this.toolbar.shadowRoot.querySelector(".toolbar-container");u&&(u.style.contain="none",u.style.overflow="visible",clearInterval(m))}},100)}}return h.\u0275fac=function(m){return new(m||h)(c.Y36(c.SBq))},h.\u0275dir=c.lG2({type:h,selectors:[["","appOverflowVisible",""]]}),h})()}}]);