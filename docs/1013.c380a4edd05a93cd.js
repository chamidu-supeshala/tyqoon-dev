"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[1013],{83661:(B,M,n)=>{n.d(M,{g:()=>U});var t=n(15861),g=n(5963),l=n(82722),O=n(49808),p=n(24837),f=n(95133),x=n(54463),_=n(36895),m=n(44466),c=n(59809),h=n(5565),u=n(18110),E=n(7507),i=n(94650),e=n(45329),L=n(56889),S=n(23284),T=n(90147);function A(a,v){if(1&a&&i._UZ(0,"app-product-card",6),2&a){const r=v.$implicit,s=i.oxw().ngLet,P=i.oxw().ngLet;i.Q6J("product",r)("isBiddingMode",!!s)("isLogin",!!P)}}function I(a,v){1&a&&i._UZ(0,"app-product-card-skeleton",8)}const b=function(){return[]};function y(a,v){if(1&a&&(i.ynx(0),i.YNc(1,I,1,0,"app-product-card-skeleton",7),i.BQk()),2&a){const r=i.oxw(3);i.xp6(1),i.Q6J("ngForOf",i.DdM(2,b).constructor(r.pageSize).fill(1))("ngForTrackBy",r.trackByFn2)}}function R(a,v){if(1&a&&(i.TgZ(0,"div",3),i.YNc(1,A,1,3,"app-product-card",4),i.YNc(2,y,2,3,"ng-container",5),i.qZA()),2&a){const r=i.oxw(2);i.xp6(1),i.Q6J("ngForOf",r.products)("ngForTrackBy",r.trackByFn),i.xp6(1),i.Q6J("ngIf",r.isLoading&&!r.products.length)}}function w(a,v){if(1&a&&(i.TgZ(0,"div"),i.YNc(1,R,3,3,"div",2),i.ALo(2,"async"),i.qZA()),2&a){const r=i.oxw();i.xp6(1),i.Q6J("ngLet",i.lcZ(2,1,r.biddingService.isBiddingMode$))}}let U=(()=>{class a extends h.V{constructor(r,s,P){super(),this.userService=r,this.biddingService=s,this.cdr=P,this.additionalParams={},this.isSSR=!1,this.biddingProductsSortOrder=0,this.pageSize=18,this.page=-1,this.isLoading=!1,this.total=0,this.products=[]}ngOnInit(){!this.isSSR&&p.Z.isServer?this.isLoading=!0:(this.page=0,this.total=0,this.products=[],this.fetchData(),this.initPoll())}ngOnDestroy(){super.ngOnDestroy(),this.stopPoll()}initPoll(){p.Z.isBrowser&&(this.stopPoll(),this.pollSubscription=(0,g.H)(1e4,1e4).pipe((0,l.R)(this.destroyStream$)).subscribe(()=>{this.biddingService.isBiddingInProgress||this.fetchData()}))}stopPoll(){this.pollSubscription&&this.pollSubscription.unsubscribe()}fetchData(){var r=this;return(0,t.Z)(function*(){if(console.log("Fetch Recommended Products"),!r.isLoading){r.isLoading=!0;const s=yield(0,O.n)(r.biddingService.getProductsWithPoolInfo({page:r.page,rows:r.pageSize,sortType:r.biddingProductsSortOrder,isRecommended:!0,...r.additionalParams}));s.rows=(0,u.DI)(s.rows||[]),r.biddingService.isBiddingInProgress||(r.products=[...s.rows]),r.total=s.total,r.isLoading=!1}})()}clear(){this.page=0,this.isLoading=!1,this.total=0,this.products=[]}trackByFn(r,s){return s.id}trackByFn2(r){return r}}return a.\u0275fac=function(r){return new(r||a)(i.Y36(e.K),i.Y36(L.g),i.Y36(i.sBO))},a.\u0275cmp=i.Xpm({type:a,selectors:[["app-bidding-products-list"]],inputs:{additionalParams:"additionalParams",isSSR:"isSSR",biddingProductsSortOrder:"biddingProductsSortOrder",pageSize:"pageSize"},standalone:!0,features:[i.qOj,i.jDz],decls:5,vars:7,consts:[[4,"ngLet"],[1,"px-6","py-1","capitalize","mx-auto","mt-4","mb-2","see-more","!text-white","block","w-fit","border","border-solid","rounded-lg","text-2xl","text-center","font-medium",3,"routerLink"],["class","grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-2 gap-y-6",4,"ngLet"],[1,"grid","grid-cols-2","xs:grid-cols-3","sm:grid-cols-4","md:grid-cols-5","lg:grid-cols-6","gap-x-2","gap-y-6"],["class","block",3,"product","isBiddingMode","isLogin",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"block",3,"product","isBiddingMode","isLogin"],["class","block",4,"ngFor","ngForOf","ngForTrackBy"],[1,"block"]],template:function(r,s){1&r&&(i.YNc(0,w,3,3,"div",0),i.ALo(1,"async"),i.TgZ(2,"a",1),i._uU(3),i.ALo(4,"translate"),i.qZA()),2&r&&(i.Q6J("ngLet",i.lcZ(1,3,s.userService.userInfo$)),i.xp6(2),i.Q6J("routerLink","product/search"),i.xp6(1),i.hij(" ",i.lcZ(4,5,"see-more"),"\n"))},dependencies:[x.aw,x.X$,_.ez,_.sg,_.O5,_.Ov,f.Pc,f.Fo,m.m,S.Y,T.h,c.I,E.Bz,E.yS],styles:[".see-more[_ngcontent-%COMP%]{background:linear-gradient(to right,#8467ff 0%,#eb00ff 100%);border-color:#9d2ec3;min-width:160px}.see-more[_ngcontent-%COMP%]:hover{color:#fff;background:linear-gradient(to right,#7454ff 0%,#bb00cb 100%)}"]}),a})()},69158:(B,M,n)=>{n.d(M,{M:()=>m});var t=n(94650),g=n(36895),l=n(95133),O=n(7507),p=n(54463);const f=function(){return["/product","detail"]},x=function(c,h){return{id:c,poolId:h}};function _(c,h){if(1&c&&(t.TgZ(0,"a",1)(1,"div",2)(2,"div",3),t._UZ(3,"img",4),t.qZA(),t.TgZ(4,"div",5)(5,"div",6),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"div",7)(9,"div",8),t._UZ(10,"img",9)(11,"img",10),t.qZA(),t.TgZ(12,"div",11),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"span",12),t._uU(16),t.ALo(17,"translate"),t.qZA()(),t.TgZ(18,"div",13),t._UZ(19,"img",14),t.TgZ(20,"div",15),t._uU(21),t.qZA()()()()()),2&c){const u=t.oxw();t.Q6J("routerLink",t.DdM(14,f))("queryParams",t.WLB(15,x,u.winner.productId,u.winner.poolId)),t.xp6(3),t.Q6J("src",u.winner.productImage,t.LSH),t.xp6(3),t.hij(" ",t.lcZ(7,8,u.winner.productName)," "),t.xp6(4),t.Q6J("src",u.winner.winnerAvatar,t.LSH),t.xp6(3),t.hij(" ",t.lcZ(14,10,u.winner.winnerId)," "),t.xp6(3),t.Oqu(t.lcZ(17,12,"pool-winner")),t.xp6(5),t.hij(" ",u.winner.ticketId," ")}}let m=(()=>{class c{constructor(){}}return c.\u0275fac=function(u){return new(u||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-bidding-winner-card"]],inputs:{winner:"winner"},decls:1,vars:1,consts:[["class","winner-card rounded-xl flex border text-xs items-center cursor-pointer",3,"routerLink","queryParams",4,"ngIf"],[1,"winner-card","rounded-xl","flex","border","text-xs","items-center","cursor-pointer",3,"routerLink","queryParams"],[1,"flex","gap-1","w-full"],[1,"product","ml-1.5","mr-1","rounded-xl"],[1,"object-cover","rounded-lg",3,"src"],[1,"winner-info","flex","flex-col","justify-start","items-start","gap-1"],[1,"product-name","font-medium","text-left","pr-1.5","mb-0.5"],[1,"font-medium","flex","flex-nowrap","items-center","mt-px"],[1,"relative"],[1,"object-cover","rounded-full","avatar",3,"src"],["src","assets/images/golden-crown-100px.png","srcset","assets/images/golden-crown-100px.png 1x, assets/images/golden-crown-250px.png 2x",1,"absolute","crown"],[1,"truncate","ml-1"],[1,"tag","capitalize",2,"--color","#FFDC3F"],[1,"font-medium","flex","flex-nowrap","items-center"],["src","assets/images/ticket.png",1,"ticket-image","object-cover"],[1,"ticket","truncate","text-left","ml-1"]],template:function(u,E){1&u&&t.YNc(0,_,22,18,"a",0),2&u&&t.Q6J("ngIf",E.winner)},dependencies:[g.O5,l.Fo,O.yS,p.X$],styles:['.winner-card[_ngcontent-%COMP%]{height:100px;border-color:var(--borderColor)}.winner-card[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-width:88px;width:88px!important;height:88px}.winner-card[_ngcontent-%COMP%]   .winner-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%], .winner-card[_ngcontent-%COMP%]   .winner-info[_ngcontent-%COMP%]   .ticket-image[_ngcontent-%COMP%]{width:20px!important;height:20px;min-width:20px}.winner-card[_ngcontent-%COMP%]   .winner-info[_ngcontent-%COMP%]   .ticket[_ngcontent-%COMP%]{width:130px}.winner-card[_ngcontent-%COMP%]   .winner-info[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:break-spaces}.winner-card[_ngcontent-%COMP%]   .winner-info[_ngcontent-%COMP%]   .crown[_ngcontent-%COMP%]{top:-9px;width:13px;left:0;right:0;margin-left:auto;margin-right:auto}.winner-card[_ngcontent-%COMP%]   .winner-info[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{display:inline-block;z-index:1;text-align:center;color:#000;height:20px;position:relative;border-left:none;background-color:var(--color);min-width:50px;margin-left:12px;padding-left:6px;border-radius:0 4px 4px 0;font-size:14px;line-height:20px;padding-right:6px;transform:scale(.9)}.winner-card[_ngcontent-%COMP%]   .winner-info[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:before{content:"";z-index:-1;position:absolute;top:3px;left:-7px;width:14px;height:14px;background-color:var(--color);border-right:none;border-top:none;transform:rotate(45deg)}  .dark-mode .winner-card{background-color:var(--bgPanelColor);color:var(--textColor)}  .light-mode .winner-card{background-color:#f5f8f9;color:#333}']}),c})()},85898:(B,M,n)=>{n.d(M,{b:()=>r});var t=n(15861),g=n(77579),l=n(82722),O=n(59468),p=n(49808),f=n(24837),x=n(95133),_=n(54463),m=n(36895),c=n(44466),h=n(59809),u=n(5565),E=n(18110),i=n(7507),e=n(94650),L=n(35482),S=n(45329),T=n(56889),A=n(23284),I=n(90147);function b(s,P){if(1&s&&e._UZ(0,"app-product-card",6),2&s){const o=P.$implicit,d=e.oxw().ngLet,D=e.oxw().ngLet;e.Q6J("product",o)("isBiddingMode",!!d)("isLogin",!!D)}}function y(s,P){1&s&&e._UZ(0,"app-product-card-skeleton",8)}const R=function(){return[]};function w(s,P){if(1&s&&(e.ynx(0),e.YNc(1,y,1,0,"app-product-card-skeleton",7),e.BQk()),2&s){const o=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",e.DdM(2,R).constructor(o.pageSize).fill(1))("ngForTrackBy",o.trackByFn2)}}function U(s,P){if(1&s&&(e.TgZ(0,"div",3),e.YNc(1,b,1,3,"app-product-card",4),e.YNc(2,w,2,3,"ng-container",5),e.qZA()),2&s){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.products)("ngForTrackBy",o.trackByFn),e.xp6(1),e.Q6J("ngIf",o.isLoading)}}function a(s,P){if(1&s&&(e.TgZ(0,"div"),e.YNc(1,U,3,3,"div",2),e.ALo(2,"async"),e.qZA()),2&s){const o=e.oxw();e.xp6(1),e.Q6J("ngLet",e.lcZ(2,1,o.biddingService.isBiddingMode$))}}function v(s,P){1&s&&(e.TgZ(0,"a",9),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&s&&(e.Q6J("routerLink","product/search"),e.xp6(1),e.hij(" ",e.lcZ(2,2,"see-more"),"\n"))}let r=(()=>{class s extends u.V{constructor(o,d,D,C){super(),this.productService=o,this.userService=d,this.biddingService=D,this.cdr=C,this.offsetScroll=2e3,this.additionalParams={},this.isSSR=!1,this.biddingProductsSortOrder=0,this.shoppingModePageSize=20,this.biddingModePageSize=18,this.throttleScroll=new g.x,this.pageSize=20,this.page=-1,this.isLoading=!1,this.total=0,this.products=[],this.isBiddingMode=!1,this.scrollActive$=new g.x}ngOnInit(){console.log(8787878,this.biddingProductsSortOrder),!this.isSSR&&f.Z.isServer?this.isLoading=!0:this.biddingService.isBiddingMode$.pipe((0,l.R)(this.destroyStream$)).subscribe(o=>{this.isBiddingMode=o,this.page=-1,this.products=[],this.pageSize=this.isBiddingMode?this.biddingModePageSize:this.shoppingModePageSize,this.cdr.detectChanges(),this.refreshProducts(),this.initInfiniteScrolling()})}ngOnDestroy(){super.ngOnDestroy(),this.clearSubscriptions()}clearSubscriptions(){this.scrollActive$?.next(!1),this.scrollActive$?.complete()}ngAfterViewInit(){f.Z.isServer||this.initInfiniteScrolling()}initInfiniteScrolling(){var o=this;return(0,t.Z)(function*(){o.clearSubscriptions(),o.scrollContainer&&!o.isBiddingMode&&(o.scrollActive$=new g.x,o.scrollElement=yield o.scrollContainer.getScrollElement(),o.scrollContainer.ionScroll.pipe((0,l.R)(o.scrollActive$)).subscribe(d=>{o.scrollElement.scrollHeight-d.detail.scrollTop<o.offsetScroll&&o.throttleScroll.next(1)}),o.throttleScroll.pipe((0,O.p)(300),(0,l.R)(o.scrollActive$)).subscribe(()=>{o.fetchData()}))})()}ngOnChanges(o){}refreshProducts(){this.page=-1,this.total=0,this.products=[],this.fetchData()}fetchData(o=null){var d=this;return(0,t.Z)(function*(){const D=o??d.page+1;if(!d.isLoading&&(0===D||d.products.length<d.total)){d.isLoading=!0,d.page=D,d.cdr.markForCheck();const C=d.isBiddingMode?yield(0,p.n)(d.biddingService.getProductsWithPoolInfo({page:d.page,rows:d.pageSize,sortType:d.biddingProductsSortOrder,isRecommended:!0,...d.additionalParams})):yield(0,p.n)(d.productService.getProductsByMetaParamsV2({page:d.page,rows:d.pageSize,traceId:d.userService.traceId,isRecommended:!0,...d.additionalParams}));C.rows=(0,E.DI)(C.rows||[]),d.products=[...d.products,...C.rows||[]],d.total=C.total,d.isLoading=!1,d.cdr.markForCheck()}})()}clear(){this.page=-1,this.isLoading=!1,this.total=0,this.products=[]}trackByFn(o,d){return d.id}trackByFn2(o){return o}}return s.\u0275fac=function(o){return new(o||s)(e.Y36(L.s),e.Y36(S.K),e.Y36(T.g),e.Y36(e.sBO))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-products-infinite-scroll"]],inputs:{scrollContainer:"scrollContainer",offsetScroll:"offsetScroll",additionalParams:"additionalParams",isSSR:"isSSR",biddingProductsSortOrder:"biddingProductsSortOrder",shoppingModePageSize:"shoppingModePageSize",biddingModePageSize:"biddingModePageSize"},standalone:!0,features:[e.qOj,e.TTD,e.jDz],decls:3,vars:4,consts:[[4,"ngLet"],["class","px-6 py-1 capitalize mx-auto mt-4 mb-2 see-more block w-fit border border-solid rounded-lg text-2xl text-center font-medium text-white",3,"routerLink",4,"ngIf"],["class","grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-2 gap-y-6",4,"ngLet"],[1,"grid","grid-cols-2","xs:grid-cols-3","sm:grid-cols-4","md:grid-cols-5","lg:grid-cols-6","gap-x-2","gap-y-6"],["class","block",3,"product","isBiddingMode","isLogin",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[1,"block",3,"product","isBiddingMode","isLogin"],["class","block",4,"ngFor","ngForOf","ngForTrackBy"],[1,"block"],[1,"px-6","py-1","capitalize","mx-auto","mt-4","mb-2","see-more","block","w-fit","border","border-solid","rounded-lg","text-2xl","text-center","font-medium","text-white",3,"routerLink"]],template:function(o,d){1&o&&(e.YNc(0,a,3,3,"div",0),e.ALo(1,"async"),e.YNc(2,v,3,4,"a",1)),2&o&&(e.Q6J("ngLet",e.lcZ(1,2,d.userService.userInfo$)),e.xp6(2),e.Q6J("ngIf",d.isBiddingMode))},dependencies:[_.aw,_.X$,m.ez,m.sg,m.O5,m.Ov,x.Pc,x.Fo,c.m,A.Y,I.h,h.I,i.Bz,i.yS],styles:[".see-more[_ngcontent-%COMP%]{background:linear-gradient(to right,#8467ff 0%,#eb00ff 100%);border-color:#9d2ec3;min-width:160px}.see-more[_ngcontent-%COMP%]:hover{color:#fff;background:linear-gradient(to right,#7454ff 0%,#bb00cb 100%)}"],changeDetection:0}),s})()},59809:(B,M,n)=>{n.d(M,{I:()=>g});var t=n(94650);let g=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-product-card-skeleton"]],standalone:!0,features:[t.jDz],decls:9,vars:0,consts:[[1,"cursor-pointer","flex","flex-col","w-full","max-w-[246px]","lg:max-w-[220px]","xl:max-w-[245px]"],[1,"relative","w-full","mb-2",2,"padding-top","100%"],[1,"absolute","inset-0","pulSate","rounded-lg"],[1,"product-title","truncate","mb-1","pulSate","text-sm",2,"letter-spacing","20px"],[1,"text-xs","leading-3","text-center","pulSate",2,"letter-spacing","20px"],[1,"text-base","text-center","pulSate",2,"letter-spacing","20px"]],template:function(p,f){1&p&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.qZA(),t.TgZ(3,"p",3),t._uU(4," \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),t.qZA(),t.TgZ(5,"p",4),t._uU(6," \xa0\xa0 "),t.qZA(),t.TgZ(7,"p",5),t._uU(8," \xa0\xa0 "),t.qZA()())}}),l})()},21863:(B,M,n)=>{n.d(M,{b:()=>x});var t=n(77579),g=n(82722),l=n(24837),O=n(24056),p=n(94650),f=n(95133);let x=(()=>{class _{constructor(c){this.el=c,this.onDestroy$=new t.x,this.uuid=(0,O.k$)(),this.modalRef=c}handleDismiss(){this.back()}ngAfterViewInit(){l.Z.isBrowser&&l.Z.isWeb&&(this.modalRef.isOpen&&this.pushState(),setTimeout(()=>{this.modalRef?.willPresent.pipe((0,g.R)(this.onDestroy$)).subscribe(()=>{this.pushState()}),this.modalRef?.didDismiss.pipe((0,g.R)(this.onDestroy$)).subscribe(c=>{this.handleDismiss()})},300))}back(){window.history.state.modal&&window.history.state.uuid==this.uuid&&history.back()}pushState(){window.history.state.modal||history.pushState({modal:!0,desc:"fake state for modal",uuid:this.uuid},"")}ngOnDestroy(){this.modalRef.isOpen&&this.modalRef?.dismiss(),this.onDestroy$.next(!0),this.onDestroy$.complete()}dismissModal(){l.Z.isApp||this.modalRef.isOpen&&this.modalRef?.dismiss()}}return _.\u0275fac=function(c){return new(c||_)(p.Y36(f.ki))},_.\u0275dir=p.lG2({type:_,selectors:[["","closeModalBrowserBack",""]],hostBindings:function(c,h){1&c&&p.NdJ("popstate",function(E){return h.dismissModal(E)},!1,p.Jf7)}}),_})()},70957:(B,M,n)=>{n.d(M,{V:()=>p});var t=n(36895),g=n(94650),l=n(7507),O=n(95133);let p=(()=>{class f{constructor(_,m,c){this.content=_,this.router=m,this.platformId=c,(0,t.NF)(this.platformId)&&(this.subscription=this.router.events.subscribe(h=>{h instanceof l.m2&&this.content.scrollToTop(500)}))}ngOnDestroy(){this.subscription?.unsubscribe()}}return f.\u0275fac=function(_){return new(_||f)(g.Y36(O.W2),g.Y36(l.F0),g.Y36(g.Lbi))},f.\u0275dir=g.lG2({type:f,selectors:[["","scrollTop",""]]}),f})()}}]);