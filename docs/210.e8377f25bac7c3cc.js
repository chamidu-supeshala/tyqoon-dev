"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[210],{24499:(T,y,e)=>{e.d(y,{c:()=>m});var a=e(5565),c=e(94650);const p=["header"];let m=(()=>{class d extends a.V{constructor(l,h){super(),this.element=l,this.renderer=h,this.lastScrollTop=0}ionViewWillEnter(){this.renderer.setStyle(this.header.el,"webkitTransition","transform 700ms")}onContentScroll(l){const h=l.detail.scrollTop;h>=50&&this.lastScrollTop<h?this.renderer.addClass(this.header.el,"top-toolbar-hide"):this.renderer.removeClass(this.header.el,"top-toolbar-hide"),this.lastScrollTop=h}}return d.\u0275fac=function(l){return new(l||d)(c.Y36(c.SBq),c.Y36(c.Qsj))},d.\u0275cmp=c.Xpm({type:d,selectors:[["ng-component"]],viewQuery:function(l,h){if(1&l&&c.Gf(p,5),2&l){let t;c.iGM(t=c.CRH())&&(h.header=t.first)}},features:[c.qOj],decls:0,vars:0,template:function(l,h){},encapsulation:2}),d})()},85898:(T,y,e)=>{e.d(y,{b:()=>U});var a=e(15861),c=e(77579),p=e(82722),m=e(59468),d=e(49808),u=e(24837),l=e(95133),h=e(54463),t=e(36895),x=e(44466),P=e(59809),S=e(5565),C=e(18110),r=e(94650),R=e(35482),D=e(94830),A=e(23284);function I(_,v){1&_&&r._UZ(0,"app-product-card",3),2&_&&r.Q6J("product",v.$implicit)}function Z(_,v){1&_&&r._UZ(0,"app-product-card-skeleton",5)}const B=function(){return[]};function E(_,v){if(1&_&&(r.ynx(0),r.YNc(1,Z,1,0,"app-product-card-skeleton",4),r.BQk()),2&_){const n=r.oxw();r.xp6(1),r.Q6J("ngForOf",r.DdM(2,B).constructor(n.pageSize).fill(1))("ngForTrackBy",n.trackByFn2)}}let U=(()=>{class _ extends S.V{constructor(n,g,M){super(),this.productService=n,this.userService=g,this.cdr=M,this.pageSize=20,this.offsetScroll=2e3,this.additionalParams={},this.isSSR=!1,this.throttleScroll=new c.x,this.page=-1,this.isLoading=!1,this.total=0,this.products=[]}ngOnInit(){!this.isSSR&&u.Z.isServer?this.isLoading=!0:this.fetchData()}ngAfterViewInit(){var n=this;return(0,a.Z)(function*(){u.Z.isServer||n.scrollContainer&&(n.scrollElement=yield n.scrollContainer.getScrollElement(),n.scrollContainer.ionScroll.pipe((0,p.R)(n.destroyStream$)).subscribe(g=>{n.scrollElement.scrollHeight-g.detail.scrollTop<n.offsetScroll&&n.throttleScroll.next(1)}),n.throttleScroll.pipe((0,m.p)(300),(0,p.R)(n.destroyStream$)).subscribe(()=>{n.fetchData()}))})()}fetchData(){var n=this;return(0,a.Z)(function*(){if(!n.isLoading&&(-1===n.page||n.products.length<n.total)){n.isLoading=!0,n.page++,n.cdr.markForCheck();const g=yield(0,d.n)(n.productService.getProductsByMetaParamsV2({page:n.page,rows:n.pageSize,traceId:n.userService.traceId,isRecommended:!0,...n.additionalParams}));n.products=[...n.products,...g.rows||[]],n.products=(0,C.DI)(n.products),n.total=g.total,n.isLoading=!1,n.cdr.markForCheck()}})()}clear(){this.page=-1,this.isLoading=!1,this.total=0,this.products=[]}trackByFn(n,g){return g.id}trackByFn2(n){return n}}return _.\u0275fac=function(n){return new(n||_)(r.Y36(R.s),r.Y36(D.K),r.Y36(r.sBO))},_.\u0275cmp=r.Xpm({type:_,selectors:[["app-products-infinite-scroll"]],inputs:{pageSize:"pageSize",scrollContainer:"scrollContainer",offsetScroll:"offsetScroll",additionalParams:"additionalParams",isSSR:"isSSR"},standalone:!0,features:[r.qOj,r.jDz],decls:4,vars:3,consts:[[1,"flex","flex-wrap","-mx-1"],["class","px-1 flex-shrink-0 mb-6 flex justify-center",3,"product",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"px-1","flex-shrink-0","mb-6","flex","justify-center",3,"product"],["class","px-1 flex-shrink-0 mb-6 flex justify-center",4,"ngFor","ngForOf","ngForTrackBy"],[1,"px-1","flex-shrink-0","mb-6","flex","justify-center"]],template:function(n,g){1&n&&(r.TgZ(0,"div")(1,"div",0),r.YNc(2,I,1,1,"app-product-card",1),r.YNc(3,E,2,3,"ng-container",2),r.qZA()()),2&n&&(r.xp6(2),r.Q6J("ngForOf",g.products)("ngForTrackBy",g.trackByFn),r.xp6(1),r.Q6J("ngIf",g.isLoading))},dependencies:[h.aw,t.ez,t.sg,t.O5,l.Pc,x.m,A.Y,P.I],styles:["app-product-card[_ngcontent-%COMP%], app-product-card-skeleton[_ngcontent-%COMP%]{width:50%}@media (min-width: 340px){app-product-card[_ngcontent-%COMP%], app-product-card-skeleton[_ngcontent-%COMP%]{width:33.3333333333%}}@media (min-width: 640px){app-product-card[_ngcontent-%COMP%], app-product-card-skeleton[_ngcontent-%COMP%]{width:25%}}@media (min-width: 768px){app-product-card[_ngcontent-%COMP%], app-product-card-skeleton[_ngcontent-%COMP%]{width:20%}}@media (min-width: 1024px){app-product-card[_ngcontent-%COMP%], app-product-card-skeleton[_ngcontent-%COMP%]{width:16.6666666667%}}"],changeDetection:0}),_})()},90210:(T,y,e)=>{e.r(y),e.d(y,{PayResultModule:()=>W});var a=e(88595),c=e(7507),p=e(15861),m=e(11781),d=e(6104),u=e(82722),l=e(15439),h=e(24499),t=e(94650),x=e(36895),P=e(95133),S=e(80164),C=e(54463),r=e(52313),R=e(46032),D=e(5068),A=e(49127),I=e(45210),Z=e(18215),B=e(2628),E=e(85898);function U(i,O){if(1&i&&(t.TgZ(0,"div")(1,"div",18),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",19),t._uU(5),t.qZA()()),2&i){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"payment-remain-time")),t.xp6(3),t.Oqu(o.countdown())}}function _(i,O){if(1&i){const o=t.EpF();t.TgZ(0,"ion-button",20),t.NdJ("click",function(){t.CHM(o);const f=t.oxw();return t.KtG(f.cancelPayment())}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"order-cancel-payment")))}const v=function(){return{isRecommended:!1,activityId:"40597823"}},g=[{path:"",component:(()=>{class i extends h.c{constructor(o,s,f,b,Y,k,F,K,j){super(K,F),this.activeRoute=o,this.location=s,this.dict=f,this.router=b,this.toast=Y,this.CheckoutService=k,this.renderer=F,this.element=K,this.translate=j,this.DictKey=d.f,this.loading={queryPaymentOrder:!1}}ngOnInit(){this.orderId=this.activeRoute.snapshot.params.id,this.queryPaymentOrder(),setInterval(()=>{this.countdown()},1e3)}ngOnDestroy(){this.destroy(),clearInterval(this.payResultSetTimeout)}get bussinessType(){return this.dict.transform(this.payResult.businessType,this.DictKey.PAY_BUSINESS_TYPE)}get isPending(){return Object.is(this.payResult.status,m.P1.PENDING)}get primaryBtnText(){return this.isPending?"\u7acb\u5373\u652f\u4ed8":this.bussinessType.primaryBtnText}convertToDecimal(o){return o<10&&(o=0+o.toString()),o}countdown(){const o=l(this.payResult.businessExpired).unix()-l().unix(),s=this.convertToDecimal(l.duration(o,"seconds").minutes()),f=this.convertToDecimal(l.duration(o,"seconds").seconds());return this.payResult.businessExpired<(new Date).getTime()?"00:00:00":`00: ${s} : ${f}`}toastError(o){var s=this;return(0,p.Z)(function*(){yield s.presentToast({position:"bottom",message:o,icon:"alert-circle-outline",duration:1e3,color:"danger"})})()}toastSuccess(o){var s=this;return(0,p.Z)(function*(){yield s.presentToast({position:"bottom",message:o,duration:1e3,icon:"checkmark-circle-outline",color:"success"})})()}presentToast(o){var s=this;return(0,p.Z)(function*(){yield(yield s.toast.create(o)).present()})()}queryPaymentOrder(o){o||(this.loading.queryPaymentOrder=!0),this.CheckoutService.queryPaymentOrder(this.orderId).pipe((0,u.R)(this.destroyStream$)).subscribe({next:s=>{this.payResult={...s.data,expiredTime:1e3*s.data.expiredTime,businessExpired:1e3*s.data.businessExpired},Object.is(this.payResult.status,m.P1.PENDING)&&(this.payResultSetTimeout=setTimeout(()=>this.queryPaymentOrder(!0),2e3))},error:s=>{console.error(s),this.toastError(s.message)}}).add(()=>this.loading.queryPaymentOrder=!1)}primaryBtnClick(){this.isPending?this.router.navigateByUrl(`/pay?id=${this.payResult.id}`):this.router.navigateByUrl(this.bussinessType.link,{replaceUrl:!0})}back(){this.location.back()}cancelPayment(){this.CheckoutService.cancel({id:this.orderId}).pipe((0,u.R)(this.destroyStream$)).subscribe()}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(c.gz),t.Y36(x.Ye),t.Y36(d.e),t.Y36(c.F0),t.Y36(P.yF),t.Y36(S.Z),t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(C.sK))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-pay-result"]],features:[t._Bn([d.e]),t.qOj],decls:26,vars:16,consts:[[1,"page-pay-result"],["fullscreen","true","scrollEvents","true","backToTopBtn","",3,"ionScroll"],["ionContent",""],["appOverflowVisible","",1,"sticky","top-0","shadow-lg","z-50"],["header",""],[3,"forceFullWidthSearch"],[1,"w-full"],[1,"pay_title"],[1,"pending"],[4,"ngIf"],[3,"content"],[1,"btn-spot"],["color","warning",3,"click"],["color","light",3,"click"],["color","danger","class","cancel-payment",3,"click",4,"ngIf"],[1,"tyqoon-container","min-h-[50vh]","mt-4"],[3,"additionalParams","scrollContainer","isSSR"],[1,"mt-4","md:hidden"],[1,"statistic-title"],[1,"timestamp","main-title"],["color","danger",1,"cancel-payment",3,"click"]],template:function(o,s){if(1&o&&(t.TgZ(0,"div",0)(1,"ion-content",1,2),t.NdJ("ionScroll",function(b){return s.onContentScroll(b)}),t._UZ(3,"app-global-customer-service"),t.TgZ(4,"ion-toolbar",3,4),t._UZ(6,"app-top-navbar",5)(7,"app-top-menu"),t.qZA(),t.TgZ(8,"div",6)(9,"div",7),t._uU(10),t.ALo(11,"translate"),t.ALo(12,"dict"),t.qZA(),t.TgZ(13,"div",8),t.YNc(14,U,6,4,"div",9),t._UZ(15,"app-pay-content",10),t.qZA(),t.TgZ(16,"div",11)(17,"ion-button",12),t.NdJ("click",function(){return s.primaryBtnClick()}),t._uU(18),t.qZA(),t.TgZ(19,"ion-button",13),t.NdJ("click",function(){return s.back()}),t._uU(20,"\u8fd4\u56de"),t.qZA(),t.YNc(21,_,3,3,"ion-button",14),t.qZA()(),t.TgZ(22,"div",15),t._UZ(23,"app-products-infinite-scroll",16),t.qZA()(),t.TgZ(24,"ion-footer",17),t._UZ(25,"app-bottom-navbar"),t.qZA()()),2&o){const f=t.MAs(2);t.xp6(6),t.Q6J("forceFullWidthSearch",!0),t.xp6(4),t.Oqu(t.lcZ(11,9,t.Dn7(12,11,s.payResult.status,s.DictKey.PAY_STATUS,"tips"))),t.xp6(4),t.Q6J("ngIf",s.isPending),t.xp6(1),t.Q6J("content",s.payResult),t.xp6(3),t.Oqu(s.primaryBtnText),t.xp6(3),t.Q6J("ngIf",s.isPending),t.xp6(2),t.Q6J("additionalParams",t.DdM(15,v))("scrollContainer",f)("isSSR",!0)}},dependencies:[r.p,R.K,D.z,A.H,I.B,Z.Z,B.k,P.YG,P.W2,P.fr,P.sr,x.O5,E.b,d.e,C.X$],styles:[".page-pay-result[_ngcontent-%COMP%]{min-height:70vh;display:flex;justify-content:center;align-items:center;inset:0;position:absolute;flex-direction:column;contain:layout size style;overflow:hidden;z-index:0}.page-pay-result[_ngcontent-%COMP%]   .pay_title[_ngcontent-%COMP%]{color:#000000d9;font-size:24px;line-height:1.8;text-align:center;padding-top:50px}.page-pay-result[_ngcontent-%COMP%]   .pending[_ngcontent-%COMP%]{text-align:center}.page-pay-result[_ngcontent-%COMP%]   .pending[_ngcontent-%COMP%]   .statistic-title[_ngcontent-%COMP%]{margin-bottom:4px;color:#00000073;font-size:14px}.page-pay-result[_ngcontent-%COMP%]   .pending[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]{color:#000000d9;font-size:24px}.page-pay-result[_ngcontent-%COMP%]   .cancel-payment[_ngcontent-%COMP%]{color:#fff;margin-left:5%}.page-pay-result[_ngcontent-%COMP%]   .btn-spot[_ngcontent-%COMP%]{margin:24px 0 0;text-align:center}"]}),i})()}];let M=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.Bz.forChild(g),c.Bz]}),i})();var L=e(44466);let W=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[L.m,M,a.g,L.m,P.Pc,C.aw,E.b]}),i})()},59809:(T,y,e)=>{e.d(y,{I:()=>c});var a=e(94650);let c=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275cmp=a.Xpm({type:p,selectors:[["app-product-card-skeleton"]],standalone:!0,features:[a.jDz],decls:9,vars:0,consts:[[1,"cursor-pointer","flex","flex-col","w-full","max-w-[246px]","lg:max-w-[220px]","xl:max-w-[245px]"],[1,"relative","w-full","mb-2",2,"padding-top","100%"],[1,"absolute","inset-0","pulSate","rounded-lg"],[1,"product-title","truncate","mb-1","pulSate","text-sm",2,"letter-spacing","20px"],[1,"text-xs","leading-3","text-center","pulSate",2,"letter-spacing","20px"],[1,"text-base","text-center","pulSate",2,"letter-spacing","20px"]],template:function(d,u){1&d&&(a.TgZ(0,"div",0)(1,"div",1),a._UZ(2,"div",2),a.qZA(),a.TgZ(3,"p",3),a._uU(4," \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),a.qZA(),a.TgZ(5,"p",4),a._uU(6," \xa0\xa0 "),a.qZA(),a.TgZ(7,"p",5),a._uU(8," \xa0\xa0 "),a.qZA()())}}),p})()},49127:(T,y,e)=>{e.d(y,{H:()=>p});var a=e(24837),c=e(94650);let p=(()=>{class m{constructor(u){this.toolbar=u.nativeElement}ngAfterViewInit(){if(a.Z.isServer)return;const u=setInterval(()=>{if(this.toolbar.shadowRoot){let l=this.toolbar.shadowRoot.querySelector(".toolbar-container");l&&(l.style.contain="none",l.style.overflow="visible",clearInterval(u))}},500)}}return m.\u0275fac=function(u){return new(u||m)(c.Y36(c.SBq))},m.\u0275dir=c.lG2({type:m,selectors:[["","appOverflowVisible",""]]}),m})()}}]);