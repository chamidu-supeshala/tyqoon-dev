"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[738],{85898:(L,f,i)=>{i.d(f,{b:()=>d});var c=i(15861),m=i(77579),l=i(82722),u=i(59468),h=i(49808),y=i(24837),v=i(95133),t=i(54463),P=i(36895),T=i(44466),Z=i(59809),C=i(5565),O=i(18110),x=i(7507),n=i(94650),g=i(35482),S=i(94830),M=i(56889),E=i(23284),A=i(90147);function b(e,r){if(1&e&&n._UZ(0,"app-product-card",6),2&e){const o=r.$implicit,s=n.oxw().ngLet,_=n.oxw().ngLet,p=n.oxw().ngLet;n.Q6J("product",o)("isBiddingMode",!!s)("canLaunchPool",!!p)("isLogin",!!_)}}function D(e,r){1&e&&n._UZ(0,"app-product-card-skeleton",8)}const I=function(){return[]};function k(e,r){if(1&e&&(n.ynx(0),n.YNc(1,D,1,0,"app-product-card-skeleton",7),n.BQk()),2&e){const o=n.oxw(4);n.xp6(1),n.Q6J("ngForOf",n.DdM(2,I).constructor(o.pageSize).fill(1))("ngForTrackBy",o.trackByFn2)}}function B(e,r){if(1&e&&(n.TgZ(0,"div",3),n.YNc(1,b,1,4,"app-product-card",4),n.YNc(2,k,2,3,"ng-container",5),n.qZA()),2&e){const o=n.oxw(3);n.xp6(1),n.Q6J("ngForOf",o.products)("ngForTrackBy",o.trackByFn),n.xp6(1),n.Q6J("ngIf",o.isLoading)}}function U(e,r){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,B,3,3,"div",2),n.ALo(2,"async"),n.qZA()),2&e){const o=n.oxw(2);n.xp6(1),n.Q6J("ngLet",n.lcZ(2,1,o.biddingService.isBiddingMode$))}}function R(e,r){1&e&&(n.TgZ(0,"a",9),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&e&&(n.Q6J("routerLink","product/search"),n.xp6(1),n.hij(" ",n.lcZ(2,2,"see-more")," "))}function a(e,r){if(1&e&&(n.ynx(0),n.YNc(1,U,3,3,"div",0),n.ALo(2,"async"),n.YNc(3,R,3,4,"a",1),n.BQk()),2&e){const o=n.oxw();n.xp6(1),n.Q6J("ngLet",n.lcZ(2,2,o.userService.userInfo$)),n.xp6(2),n.Q6J("ngIf",o.isBiddingMode)}}let d=(()=>{class e extends C.V{constructor(o,s,_,p){super(),this.productService=o,this.userService=s,this.biddingService=_,this.cdr=p,this.offsetScroll=2e3,this.additionalParams={},this.isSSR=!1,this.biddingProductsSortOrder=0,this.shoppingModePageSize=20,this.biddingModePageSize=18,this.throttleScroll=new m.x,this.pageSize=20,this.page=-1,this.isLoading=!1,this.total=0,this.products=[],this.isBiddingMode=!1,this.scrollActive$=new m.x}ngOnInit(){console.log(8787878,this.biddingProductsSortOrder),!this.isSSR&&y.Z.isServer?this.isLoading=!0:this.biddingService.isBiddingMode$.pipe((0,l.R)(this.destroyStream$)).subscribe(o=>{this.isBiddingMode=o,this.page=-1,this.products=[],this.pageSize=this.isBiddingMode?this.biddingModePageSize:this.shoppingModePageSize,this.cdr.detectChanges(),this.refreshProducts(),this.initInfiniteScrolling()})}ngOnDestroy(){super.ngOnDestroy(),this.clearSubscriptions()}clearSubscriptions(){this.scrollActive$?.next(!1),this.scrollActive$?.complete()}ngAfterViewInit(){y.Z.isServer||this.initInfiniteScrolling()}initInfiniteScrolling(){var o=this;return(0,c.Z)(function*(){o.clearSubscriptions(),o.scrollContainer&&!o.isBiddingMode&&(o.scrollActive$=new m.x,o.scrollElement=yield o.scrollContainer.getScrollElement(),o.scrollContainer.ionScroll.pipe((0,l.R)(o.scrollActive$)).subscribe(s=>{o.scrollElement.scrollHeight-s.detail.scrollTop<o.offsetScroll&&o.throttleScroll.next(1)}),o.throttleScroll.pipe((0,u.p)(300),(0,l.R)(o.scrollActive$)).subscribe(()=>{o.fetchData()}))})()}ngOnChanges(o){}refreshProducts(){this.page=-1,this.total=0,this.products=[],this.fetchData()}fetchData(o=null){var s=this;return(0,c.Z)(function*(){const _=o??s.page+1;if(!s.isLoading&&(0===_||s.products.length<s.total)){s.isLoading=!0,s.page=_,s.cdr.markForCheck();const p=s.isBiddingMode?yield(0,h.n)(s.biddingService.getProductsWithPoolInfo({page:s.page,rows:s.pageSize,sortType:s.biddingProductsSortOrder,isRecommended:!0,...s.additionalParams})):yield(0,h.n)(s.productService.getProductsByMetaParamsV2({page:s.page,rows:s.pageSize,traceId:s.userService.traceId,isRecommended:!0,...s.additionalParams}));p.rows=(0,O.DI)(p.rows||[]),s.products=[...s.products,...p.rows||[]],s.total=p.total,s.isLoading=!1,s.cdr.markForCheck()}})()}clear(){this.page=-1,this.isLoading=!1,this.total=0,this.products=[]}trackByFn(o,s){return s.id}trackByFn2(o){return o}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(g.s),n.Y36(S.K),n.Y36(M.g),n.Y36(n.sBO))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-products-infinite-scroll"]],inputs:{scrollContainer:"scrollContainer",offsetScroll:"offsetScroll",additionalParams:"additionalParams",isSSR:"isSSR",biddingProductsSortOrder:"biddingProductsSortOrder",shoppingModePageSize:"shoppingModePageSize",biddingModePageSize:"biddingModePageSize"},standalone:!0,features:[n.qOj,n.TTD,n.jDz],decls:2,vars:3,consts:[[4,"ngLet"],["class","px-6 py-1 capitalize mx-auto mt-4 mb-2 see-more block w-fit border border-solid rounded-lg text-2xl text-center font-medium text-white",3,"routerLink",4,"ngIf"],["class","grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-2 gap-y-6",4,"ngLet"],[1,"grid","grid-cols-2","xs:grid-cols-3","sm:grid-cols-4","md:grid-cols-5","lg:grid-cols-6","gap-x-2","gap-y-6"],["class","block",3,"product","isBiddingMode","canLaunchPool","isLogin",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"block",3,"product","isBiddingMode","canLaunchPool","isLogin"],["class","block",4,"ngFor","ngForOf","ngForTrackBy"],[1,"block"],[1,"px-6","py-1","capitalize","mx-auto","mt-4","mb-2","see-more","block","w-fit","border","border-solid","rounded-lg","text-2xl","text-center","font-medium","text-white",3,"routerLink"]],template:function(o,s){1&o&&(n.YNc(0,a,4,4,"ng-container",0),n.ALo(1,"async")),2&o&&n.Q6J("ngLet",n.lcZ(1,1,s.biddingService.canLaunchPool$))},dependencies:[t.aw,t.X$,P.ez,P.sg,P.O5,P.Ov,v.Pc,v.Fo,T.m,E.Y,A.h,Z.I,x.Bz,x.yS],styles:[".see-more[_ngcontent-%COMP%]{background:linear-gradient(to right,#8467ff 0%,#eb00ff 100%);border-color:#9d2ec3;min-width:160px}.see-more[_ngcontent-%COMP%]:hover{color:#fff;background:linear-gradient(to right,#7454ff 0%,#bb00cb 100%)}"],changeDetection:0}),e})()},50738:(L,f,i)=>{i.r(f),i.d(f,{PaymentModule:()=>R});var c=i(44466),m=i(7507),l=i(15861),u=i(11781),h=i(72588),y=i(82722),v=i(5565),t=i(94650),P=i(80164),T=i(81152),Z=i(46032),C=i(8136),O=i(49127),x=i(45210),n=i(18215),g=i(95133),S=i(36895),M=i(85898);const E=["header"];function A(a,d){if(1&a&&(t.TgZ(0,"span",15),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,e.payResult.amount))}}function b(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"ion-button",16),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.pay())}),t._uU(1," \u7acb\u5373\u652f\u4ed8 "),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("disabled",e.loading.platform)}}function D(a,d){1&a&&(t.TgZ(0,"ion-list",17)(1,"ion-item")(2,"ion-label")(3,"h3"),t._UZ(4,"ion-skeleton-text",18),t.qZA(),t.TgZ(5,"p"),t._UZ(6,"ion-skeleton-text",18),t.qZA(),t.TgZ(7,"p"),t._UZ(8,"ion-skeleton-text",18),t.qZA(),t.TgZ(9,"h3"),t._UZ(10,"ion-skeleton-text",18),t.qZA(),t.TgZ(11,"p"),t._UZ(12,"ion-skeleton-text",18),t.qZA(),t.TgZ(13,"p"),t._UZ(14,"ion-skeleton-text",18),t.qZA(),t.TgZ(15,"h3"),t._UZ(16,"ion-skeleton-text",18),t.qZA(),t.TgZ(17,"p"),t._UZ(18,"ion-skeleton-text",18),t.qZA(),t.TgZ(19,"p"),t._UZ(20,"ion-skeleton-text",18),t.qZA(),t.TgZ(21,"h3"),t._UZ(22,"ion-skeleton-text",18),t.qZA(),t.TgZ(23,"p"),t._UZ(24,"ion-skeleton-text",18),t.qZA(),t.TgZ(25,"p"),t._UZ(26,"ion-skeleton-text",18),t.qZA()()()()),2&a&&(t.xp6(4),t.Q6J("animated",!0),t.xp6(2),t.Q6J("animated",!0),t.xp6(2),t.Q6J("animated",!0),t.xp6(2),t.Q6J("animated",!0),t.xp6(2),t.Q6J("animated",!0),t.xp6(2),t.Q6J("animated",!0),t.xp6(2),t.Q6J("animated",!0),t.xp6(2),t.Q6J("animated",!0),t.xp6(2),t.Q6J("animated",!0),t.xp6(2),t.Q6J("animated",!0),t.xp6(2),t.Q6J("animated",!0),t.xp6(2),t.Q6J("animated",!0))}const I=function(){return{isRecommended:!1,activityId:"40597823"}},B=[{path:"",component:(()=>{class a extends v.V{constructor(e,r,o,s){super(),this.activatedRoute=e,this.router=r,this.CheckoutService=o,this.renderer=s,this.PaymentPlatformEnum=u.fS,this.loading={getData:!1,platform:!1,pay:!1},this.lastScrollTop=0,this.successCallbackUri=""}get showPayBtn(){return Object.is(this.payResult?.platformCode.split("-").shift(),u.fS.STRIPE)}ngOnInit(){const{id:e}=this.activatedRoute.snapshot.queryParams;this.loading.getData=!0,this.loading.platform=!0,this.CheckoutService.queryPaymentOrder(e).pipe((0,y.R)(this.destroyStream$)).subscribe({next:r=>{if(this.payResult=r.data,console.log(this.payResult),Object.is(this.payResult?.status,u.P1.PENDING))switch(r.data.platformCode.split("-").shift()){case u.fS.STRIPE:this.loadStripe();break;case u.fS.TRIPLE:this.loadTriple()}else this.router.navigateByUrl(`/pay/result/${this.payResult?.id}`,{replaceUrl:!0})},error:r=>{console.error(r)}}).add(()=>this.loading.getData=!1)}onContentScroll(e){const r=e.detail.scrollTop;r>=50&&this.lastScrollTop<r?this.renderer.addClass(this.header.el,"top-toolbar-hide"):this.renderer.removeClass(this.header.el,"top-toolbar-hide"),this.lastScrollTop=r}loadStripe(){var e=this;return(0,l.Z)(function*(){try{const r=JSON.parse(e.payResult.clientJson),{clientSecret:o,pubKey:s,successUri:_}=r,p=yield(0,h.J)(s),J={text:"\u7b80\u4f53\u4e2d\u6587",abbr:"\u{1f1e8}\u{1f1f3}",stripe:"zh",tripleA:"zh"};if(e.successCallbackUri=_,!p)return;e.stripe=p,e.stripeElements=p.elements({appearance:{theme:"stripe"},locale:J.stripe,clientSecret:o}),e.stripeElements.create("payment").mount("#payment-element")}catch(r){console.error(r)}finally{e.loading.platform=!1}})()}loadTriple(){const e=JSON.parse(this.payResult.clientJson),r=document.querySelector("#payment-element");!r||(r.innerHTML=`\n  <triplea-ecommerce-payment-v1\n  id="payment"\n  payment-reference="${e.paymentReference}"\n  access-token="${e.accessToken}"\n  lang="zh"\n>\n</triplea-ecommerce-payment-v1>\n  `)}pay(){var e=this;return(0,l.Z)(function*(){const{platformCode:r}=e.payResult;r.split("-").shift()===u.fS.STRIPE&&e.stripePay()})()}stripePay(){var e=this;return(0,l.Z)(function*(){e.loading.pay=!0;try{const{error:r}=yield e.stripe.confirmPayment({elements:e.stripeElements,confirmParams:{return_url:e.successCallbackUri}});console.log(r)}catch(r){console.error(r)}finally{e.loading.pay=!1}})()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(m.gz),t.Y36(m.F0),t.Y36(P.Z),t.Y36(t.Qsj))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-payment"]],viewQuery:function(e,r){if(1&e&&t.Gf(E,5),2&e){let o;t.iGM(o=t.CRH())&&(r.header=o.first)}},features:[t.qOj],decls:19,vars:10,consts:[["fullscreen","true","scrollEvents","true","backToTopBtn","",3,"ionScroll"],["ionContent",""],["appOverflowVisible","",1,"sticky","top-0","shadow-lg","z-50"],["header",""],[3,"forceFullWidthSearch"],[1,"w-full"],[1,"payment-container"],[1,"pay-amount"],["class","amount",4,"ngIf"],["id","payment-element"],["class","btn-pay","size","large","expand","block",3,"disabled","click",4,"ngIf"],["class","skeleton",4,"ngIf"],[1,"tyqoon-container","min-h-[50vh]","mt-4"],[3,"additionalParams","scrollContainer","isSSR"],[1,"mt-4","md:hidden"],[1,"amount"],["size","large","expand","block",1,"btn-pay",3,"disabled","click"],[1,"skeleton"],[2,"width","100%",3,"animated"]],template:function(e,r){if(1&e&&(t.TgZ(0,"ion-content",0,1),t.NdJ("ionScroll",function(s){return r.onContentScroll(s)}),t._UZ(2,"app-global-customer-service"),t.TgZ(3,"ion-toolbar",2,3),t._UZ(5,"app-top-navbar",4)(6,"app-top-menu"),t.qZA(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7),t._uU(10," \u652f\u4ed8\u91d1\u989d\uff1a"),t.YNc(11,A,3,3,"span",8),t.qZA(),t._UZ(12,"div",9),t.YNc(13,b,2,1,"ion-button",10),t.qZA(),t.YNc(14,D,27,12,"ion-list",11),t.qZA(),t.TgZ(15,"div",12),t._UZ(16,"app-products-infinite-scroll",13),t.qZA()(),t.TgZ(17,"ion-footer",14),t._UZ(18,"app-bottom-navbar"),t.qZA()),2&e){const o=t.MAs(1);t.xp6(5),t.Q6J("forceFullWidthSearch",!0),t.xp6(3),t.ekj("show",!r.loading.getData),t.xp6(3),t.Q6J("ngIf",r.payResult),t.xp6(2),t.Q6J("ngIf",r.showPayBtn),t.xp6(1),t.Q6J("ngIf",r.loading.getData),t.xp6(2),t.Q6J("additionalParams",t.DdM(9,I))("scrollContainer",o)("isSSR",!0)}},dependencies:[T.p,Z.K,C.z,O.H,x.B,n.Z,g.YG,g.W2,g.fr,g.Ie,g.Q$,g.q_,g.CK,g.sr,S.O5,M.b,S.H9],styles:[".payment-container[_ngcontent-%COMP%]{padding:32px 0;flex-direction:column;justify-content:center;max-width:800px;margin:0 auto;display:flex;height:0;overflow:hidden}.payment-container.show[_ngcontent-%COMP%]{min-height:70vh;height:auto;overflow:unset}.payment-container[_ngcontent-%COMP%]   .btn-pay[_ngcontent-%COMP%]{margin-top:24px}.payment-container[_ngcontent-%COMP%]   .pay-amount[_ngcontent-%COMP%]{text-align:center;margin-bottom:12px;font-size:36px}.payment-container[_ngcontent-%COMP%]   .pay-amount[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{color:red;font-weight:700}.skeleton[_ngcontent-%COMP%]{min-height:70vh}"]}),a})()}];let U=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[m.Bz.forChild(B),m.Bz]}),a})(),R=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.m,U,g.Pc,M.b]}),a})()},59809:(L,f,i)=>{i.d(f,{I:()=>m});var c=i(94650);let m=(()=>{class l{}return l.\u0275fac=function(h){return new(h||l)},l.\u0275cmp=c.Xpm({type:l,selectors:[["app-product-card-skeleton"]],standalone:!0,features:[c.jDz],decls:9,vars:0,consts:[[1,"cursor-pointer","flex","flex-col","w-full","max-w-[246px]","lg:max-w-[220px]","xl:max-w-[245px]"],[1,"relative","w-full","mb-2",2,"padding-top","100%"],[1,"absolute","inset-0","pulSate","rounded-lg"],[1,"product-title","truncate","mb-1","pulSate","text-sm",2,"letter-spacing","20px"],[1,"text-xs","leading-3","text-center","pulSate",2,"letter-spacing","20px"],[1,"text-base","text-center","pulSate",2,"letter-spacing","20px"]],template:function(h,y){1&h&&(c.TgZ(0,"div",0)(1,"div",1),c._UZ(2,"div",2),c.qZA(),c.TgZ(3,"p",3),c._uU(4," \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),c.qZA(),c.TgZ(5,"p",4),c._uU(6," \xa0\xa0 "),c.qZA(),c.TgZ(7,"p",5),c._uU(8," \xa0\xa0 "),c.qZA()())}}),l})()}}]);