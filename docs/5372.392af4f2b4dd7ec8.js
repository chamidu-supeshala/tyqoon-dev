"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[5372],{25372:(L,O,c)=>{c.r(O),c.d(O,{WishlistModule:()=>lt});var o=c(36895),r=c(95133),v=c(44466),x=c(7507),W=c(15861),b=c(77579),P=c(82722),C=c(4128),t=c(94650),M=c(92340),T=c(54004),w=c(80529);let h=(()=>{class i{constructor(e){this.http=e}getUserProductFavorites(e){return this.http.get(`${M.N.BASE_URL}/user/favorite/getUserProductFavorite`,{params:e}).pipe((0,T.U)(({data:n})=>n))}delUserProductFavorites(e){return this.http.post(`${M.N.BASE_URL}/user/favorite/delUserProductFavorites`,{ids:e})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(w.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var _=c(94128),y=c(56889),a=c(23372),p=c(23556),g=c(90147),d=c(24006),f=c(28137),A=c(24719);let m=(()=>{class i{constructor(e,n,s){this.el=e,this.gestureCtrl=n,this.zone=s,this.tap=new t.vpe,this.press=new t.vpe,this.delay=300,this.positions={start:{x:0,y:0},current:{x:0,y:0}},this.longPressActive=!1}ngAfterViewInit(){this.loadLongPressOnElement()}loadLongPressOnElement(){this.gestureCtrl.create({el:this.el.nativeElement,threshold:0,gestureName:"long-press",onStart:n=>{this.longPressActive=!0,this.longPressAction(),this.positions={start:{x:n.startX,y:n.startY},current:{x:n.currentX,y:n.currentY}}},onMove:n=>{this.positions.current={x:n.currentX,y:n.currentY}},onEnd:n=>{this.longPressActive=!1}}).enable(!0)}longPressAction(){this.action&&clearInterval(this.action),this.action=setTimeout(()=>{this.zone.run(()=>{const e=Math.abs(this.positions.start.x-this.positions.current.x),n=Math.abs(this.positions.start.y-this.positions.current.y);e>15||n>15||(!0===this.longPressActive?(this.longPressActive=!1,this.press.emit()):this.tap.emit())})},this.delay)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(r.TH),t.Y36(t.R0b))},i.\u0275dir=t.lG2({type:i,selectors:[["","long-press",""]],inputs:{delay:"delay"},outputs:{tap:"tap",press:"press"}}),i})();var k=c(54463);const I=function(i){return{unchecked:i}};function J(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"ion-checkbox",16),t.NdJ("ngModelChange",function(s){t.CHM(e);const l=t.oxw(2);return t.KtG(l.product.checked=s)})("click",function(s){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onChangeSelect(s))}),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("ngModel",e.product.checked)("ngClass",t.VKq(2,I,!e.product.checked))}}function E(i,u){if(1&i&&(t.TgZ(0,"div",17),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.product.specifications," ")}}function S(i,u){if(1&i&&(t.TgZ(0,"span",18),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.hij(" ",t.lcZ(2,1,e.product.price)," ")}}function D(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){const l=t.CHM(e).method;return t.KtG(l())}),t.TgZ(1,"span",21),t._uU(2),t.ALo(3,"translate"),t.qZA()(),t.TgZ(4,"button",22),t.NdJ("click",function(){const l=t.CHM(e).method;return t.KtG(l())}),t.TgZ(5,"span",21),t._uU(6),t.ALo(7,"translate"),t.qZA()()}if(2&i){const e=u.isLoading,n=t.oxw(3);t.Q6J("targetSelector","#member-bottom-nav .cart-badge")("flyProduct",n.product)("disabled",e),t.xp6(2),t.hij(" ",t.lcZ(3,8,"shop-product-page-add")," "),t.xp6(2),t.Q6J("targetSelector","#member-product-toolbar .badge-cart-desktop")("flyProduct",n.product)("disabled",e),t.xp6(2),t.hij(" ",t.lcZ(7,10,"shop-product-page-add")," ")}}function N(i,u){if(1&i&&(t.TgZ(0,"app-add-to-cart",19),t.YNc(1,D,8,12,"ng-template"),t.qZA()),2&i){const e=t.oxw(2);t.Q6J("sku",e.product.sku)("quantity",1)}}const Q=function(){return["/product","detail"]},U=function(i){return{id:i}};function j(i,u){if(1&i&&(t.TgZ(0,"a",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i){const e=t.oxw(2);t.Q6J("routerLink",t.DdM(5,Q))("queryParams",t.VKq(6,U,e.product.id)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"view-product")," ")}}const K=function(i){return{"!border-[#0087ff] md:bg-white":i}};function F(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"div",1),t.YNc(1,J,1,4,"ion-checkbox",2),t.TgZ(2,"div",3),t.NdJ("press",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onLongPressWishList())}),t.TgZ(3,"div",4)(4,"ion-checkbox",5),t.NdJ("ngModelChange",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.product.checked=s)})("click",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.onChangeSelect(s))}),t.qZA(),t.TgZ(5,"a",6),t.NdJ("click",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.navigateProduct(s,l.product.id))}),t._UZ(6,"img",7),t.qZA(),t.TgZ(7,"div",8)(8,"a",9),t.NdJ("click",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.navigateProduct(s,l.product.id))}),t._uU(9),t.qZA(),t.YNc(10,E,2,1,"div",10),t.qZA()(),t.TgZ(11,"div",11),t.YNc(12,S,3,3,"span",12),t.TgZ(13,"div",13),t.YNc(14,N,2,2,"app-add-to-cart",14),t.YNc(15,j,3,8,"ng-template",null,15,t.W1O),t.qZA()()()()}if(2&i){const e=t.MAs(16),n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.selectedCount),t.xp6(1),t.Q6J("ngClass",t.VKq(14,K,n.product.checked))("delay",500),t.xp6(1),t.Q6J("ngClass",n.isBiddingMode?"sm:w-8/12":"sm:w-7/12"),t.xp6(1),t.Q6J("ngModel",n.product.checked)("ngClass",t.VKq(16,I,!n.product.checked)),t.xp6(2),t.Q6J("src",n.product.cover,t.LSH)("alt",n.product.name),t.xp6(3),t.hij(" ",n.product.name," "),t.xp6(1),t.Q6J("ngIf","[]"!==n.product.specifications),t.xp6(1),t.Q6J("ngClass",n.isBiddingMode?"bidding-mode":"justify-between"),t.xp6(1),t.Q6J("ngIf",!n.isBiddingMode),t.xp6(2),t.Q6J("ngIf",!n.isBiddingMode)("ngIfElse",e)}}let B=(()=>{class i{constructor(e){this.router=e,this.selectedCount=0,this.isBiddingMode=!1,this.selectWishList=new t.vpe,this.isMobile=!1,window.innerWidth<640&&(this.isMobile=!0)}navigateProduct(e,n){e.stopPropagation(),this.router.navigate(["/product/detail"],{queryParams:{id:n}})}onChangeSelect(e){!this.product||(this.selectWishList.emit(!this.product.checked),1===this.selectedCount&&this.product.checked&&this.isMobile&&(this.product.checked=!this.product.checked))}onLongPressWishList(){!this.product||(this.product.checked=!this.product.checked,this.selectWishList.emit(this.product.checked))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-wishlist-item"]],inputs:{product:"product",selectedCount:"selectedCount",isBiddingMode:"isBiddingMode"},outputs:{selectWishList:"selectWishList"},decls:1,vars:1,consts:[["class","flex",4,"ngIf"],[1,"flex"],["class","self-center checkbox mr-2 sm:hidden","slot","start",3,"ngModel","ngClass","ngModelChange","click",4,"ngIf"],["long-press","",1,"product-card","bg-white","rounded-md","w-full","items-start","flex-1","px-3","md:px-5","pt-3.5","pb-1","sm:pt-4","sm:pb-3","border-2","border-transparent",3,"ngClass","delay","press"],[1,"flex","flex-1","items-start","mb-2","md:mb-0","gap-1",3,"ngClass"],["slot","start",1,"self-center","checkbox","hidden","sm:block",3,"ngModel","ngClass","ngModelChange","click"],[1,"product-image","mx-2","sm:mx-4","flex-shrink-0","w-12","h-12","sm:w-20","sm:h-20","rounded-md","cursor-pointer",3,"click"],[1,"object-cover","object-center","w-full","h-full",3,"src","alt"],[1,"min-w-0","text-left"],[1,"product-name","cursor-pointer","text-sm","line-clamp-1","mb-1","text-black","hover:text-primary","w-full","font-medium","break-all",3,"click"],["class","text-sm line-clamp-1 text-neutral-500 break-all",4,"ngIf"],[1,"product-card__add-cart","md:pl-2","h-full","items-start",3,"ngClass"],["class","font-bold sm:self-start mr-2 md:mt-1 mb-0.5",4,"ngIf"],[1,"flex-shrink-0","flex","sm:self-center","flex-col"],[3,"sku","quantity",4,"ngIf","ngIfElse"],["viewButton",""],["slot","start",1,"self-center","checkbox","mr-2","sm:hidden",3,"ngModel","ngClass","ngModelChange","click"],[1,"text-sm","line-clamp-1","text-neutral-500","break-all"],[1,"font-bold","sm:self-start","mr-2","md:mt-1","mb-0.5"],[3,"sku","quantity"],["flyToCart","",1,"md:hidden","text-center","font-medium","text-sm","rounded-lg","text-white","py-1.5","sm:py-2","px-3","mb-2","sm:mb-0","bg-gradient-primary-1","hover:bg-gradient-primary",3,"targetSelector","flyProduct","disabled","click"],[1,"font-medium"],["flyToCart","",1,"hidden","md:block","text-center","font-medium","text-base","rounded-lg","text-white","py-1.5","sm:py-2","px-6","mb-2","sm:mb-0","bg-gradient-primary-1","hover:bg-gradient-primary",3,"targetSelector","flyProduct","disabled","click"],[1,"view-product",3,"routerLink","queryParams"]],template:function(e,n){1&e&&t.YNc(0,F,17,18,"div",0),2&e&&t.Q6J("ngIf",n.product)},dependencies:[o.mk,o.O5,x.yS,r.nz,r.w,r.Fo,f.I,A.q,m,d.JJ,d.On,o.H9,k.X$],styles:["ion-checkbox[_ngcontent-%COMP%]{--border-color: #93c5fd;--background-checked: #0087ff;--border-color-checked: #0087ff}ion-checkbox.unchecked[_ngcontent-%COMP%]{--border-color: #c7c7c7}.product-image[_ngcontent-%COMP%]:hover + div[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 126 24 / var(--tw-text-opacity))}.checkbox[_ngcontent-%COMP%]{min-width:18px}.product-card[_ngcontent-%COMP%]{display:flex;flex-direction:column}.product-card__add-cart[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;width:100%}.product-card__add-cart.bidding-mode[_ngcontent-%COMP%]{justify-content:flex-end}@media only screen and (min-width: 420px){.product-card[_ngcontent-%COMP%]{flex-direction:row}.product-card__add-cart[_ngcontent-%COMP%]{flex-direction:column;width:6rem}.product-card__add-cart.bidding-mode[_ngcontent-%COMP%]{justify-content:flex-start}}@media (min-width: 640px){.product-card__add-cart[_ngcontent-%COMP%]{flex-direction:row;width:41.666667%;align-items:flex-start;height:5rem}.product-card__add-cart[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-left:auto}.product-card__add-cart[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-left:auto}.product-card__add-cart.bidding-mode[_ngcontent-%COMP%]{width:33.33%}}.view-product[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:.5rem;font-size:.875rem;line-height:1.25rem;font-weight:600;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 768px){.view-product[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.75rem}}.view-product[_ngcontent-%COMP%]{background-color:#eff8ff;border:1px solid #cbd9e7;color:#22211e;font-weight:700;height:32px;min-width:97px}@media (min-width: 768px){.view-product[_ngcontent-%COMP%]{height:50px;min-width:155px}}"]}),i})();var Y=c(78372),H=c(71884),R=c(38461),q=c(40432);function G(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"div",14),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onClearSearch())}),t._UZ(1,"app-close-icon",15),t.qZA()}}const $=function(i){return{disabled:i}},z=function(i){return{"hidden sm:flex":i}};let V=(()=>{class i{constructor(){this.isSelected=!1,this.searchQuery=new t.vpe,this.addToCart=new t.vpe,this.deleteWishlist=new t.vpe,this.name="",this.nameValueChange=new b.x,this._unsubscribeAll=new b.x}ngOnInit(){this.nameValueChange.pipe((0,Y.b)(400),(0,H.x)(),(0,P.R)(this._unsubscribeAll)).subscribe(e=>{console.log("pipe",e),""===e&&this.searchQuery.emit("")})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}onSearchWishlist(){this.searchQuery.emit(this.name)}onAddToCart(){this.addToCart.emit()}onDeleteWishlist(){this.deleteWishlist.emit()}onClearSearch(){this.name="",this.nameValueChange.next("")}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-wishlist-header"]],inputs:{isSelected:"isSelected"},outputs:{searchQuery:"searchQuery",addToCart:"addToCart",deleteWishlist:"deleteWishlist"},decls:25,vars:26,consts:[[1,"flex","flex-col","xs:flex-row","xs:justify-between","gap-y-4","mb-4","lg:mb-0"],[1,"flex","flex-row","xs:items-center","xs:mr-2","w-full","sm:w-auto"],[1,"hidden","2md:block","mr-2"],[1,"relative","xs:flex-auto"],[1,"w-full","h-10","bg-white","rounded-md","duration-300","border","border-gray-300","hover:border-primary",3,"ngModel","placeholder","ngModelChange"],["class","flex items-center justify-center bg-[#dcdcdc] w-5 h-5 rounded-full z-10 absolute top-1/2 right-2 transform -translate-y-1/2",3,"click",4,"ngIf"],[1,"search-btn","m-0","ml-2","h-10","text-base","flex","justify-center",3,"disabled","ngClass","click"],["name","search-outline",1,"md:hidden"],[1,"hidden","md:block"],[1,"flex","gap-x-2","mb-0",3,"ngClass"],[1,"add-to-cart","m-0","h-10","text-base","normal-case","flex","justify-center",3,"disabled","click"],[1,"w-5","md:mr-1"],[1,"delete-wishlist","m-0","h-10","text-base","normal-case","flex","justify-center",3,"disabled","click"],["name","trash-outline",1,"md:mr-1"],[1,"flex","items-center","justify-center","bg-[#dcdcdc]","w-5","h-5","rounded-full","z-10","absolute","top-1/2","right-2","transform","-translate-y-1/2",3,"click"],[1,"w-2","h-2","block","text-black"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"ion-label",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3)(6,"ion-input",4),t.NdJ("ngModelChange",function(l){return n.name=l})("ngModelChange",function(l){return n.nameValueChange.next(l)}),t.ALo(7,"translate"),t.qZA(),t.YNc(8,G,2,0,"div",5),t.qZA(),t.TgZ(9,"ion-button",6),t.NdJ("click",function(){return n.onSearchWishlist()}),t._UZ(10,"ion-icon",7),t.TgZ(11,"span",8),t._uU(12),t.ALo(13,"translate"),t.qZA()()(),t.TgZ(14,"div",9)(15,"ion-button",10),t.NdJ("click",function(){return n.onAddToCart()}),t._UZ(16,"app-cart-icon",11),t.TgZ(17,"span",8),t._uU(18),t.ALo(19,"translate"),t.qZA()(),t.TgZ(20,"ion-button",12),t.NdJ("click",function(){return n.onDeleteWishlist()}),t._UZ(21,"ion-icon",13),t.TgZ(22,"span",8),t._uU(23),t.ALo(24,"translate"),t.qZA()()()()),2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,12,"my-wishlist-product-name"),": "),t.xp6(3),t.Q6J("ngModel",n.name)("placeholder",t.lcZ(7,14,"my-wishlist-please-input")),t.xp6(2),t.Q6J("ngIf",n.name),t.xp6(1),t.Q6J("disabled",!n.name)("ngClass",t.VKq(22,$,!n.name)),t.xp6(3),t.hij(" ",t.lcZ(13,16,"my-wishlist-search")," "),t.xp6(2),t.Q6J("ngClass",t.VKq(24,z,!n.isSelected)),t.xp6(1),t.Q6J("disabled",!n.isSelected),t.xp6(3),t.hij(" ",t.lcZ(19,18,"my-wishlist-add-to-cart")," "),t.xp6(2),t.Q6J("disabled",!n.isSelected),t.xp6(3),t.hij(" ",t.lcZ(24,20,"my-wishlist-delete")," "))},dependencies:[o.mk,o.O5,r.YG,r.gu,r.pK,r.Q$,r.j9,R.D,q.l,d.JJ,d.On,k.X$],styles:["ion-button[_ngcontent-%COMP%]{--border-radius: 100rem;--padding-start: 0px;--padding-end: 0px;--box-shadow: none;min-width:40px;height:40px}@media (min-width: 768px){ion-button[_ngcontent-%COMP%]{--border-radius: .5rem;--padding-start: 1.1em;--padding-end: 1.1em;width:auto}}ion-button.add-to-cart[_ngcontent-%COMP%]{--background: #0087ff}ion-button.delete-wishlist[_ngcontent-%COMP%]{--background: #eb445a}ion-button.search-btn[_ngcontent-%COMP%]{--background: linear-gradient(135deg, #ff5c02 0%, #ff7e41 100%)}ion-button.button-disabled[_ngcontent-%COMP%]{--background: #c7c7c7 !important}ion-input[_ngcontent-%COMP%]{--placeholder-color: #abb1bb;--placeholder-font-weight: 400;--placeholder-opacity: 100;--padding-start: 8px}ion-input.has-focus[_ngcontent-%COMP%]{box-shadow:0 0 0 2px #fb881133;border:1px solid #ff7e18}"]}),i})();function X(i,u){if(1&i&&(t.TgZ(0,"span",15),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.AsE(" ",e.selectedCount," ",t.lcZ(2,2,"selected")," ")}}function tt(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"app-wishlist-item",18),t.NdJ("selectWishList",function(s){t.CHM(e);const l=t.oxw(3);return t.KtG(l.onSelectWishList(s))}),t.qZA()}if(2&i){const e=u.$implicit,n=t.oxw(2).ngLet,s=t.oxw();let l;t.Q6J("product",e)("selectedCount",s.selectedCount)("isBiddingMode",null!==(l=n)&&void 0!==l&&l)}}function et(i,u){if(1&i&&(t.TgZ(0,"div",16),t.YNc(1,tt,1,3,"app-wishlist-item",17),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.products)}}function nt(i,u){1&i&&t._UZ(0,"app-loading-spinner",19)}const it=function(i){return{unchecked:i}};function ot(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"h3",4),t._uU(3),t.ALo(4,"translate"),t.qZA()(),t.TgZ(5,"app-wishlist-header",5),t.NdJ("searchQuery",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.onSearchWishlist(s))})("addToCart",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onAddToCart())})("deleteWishlist",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onDeleteWishlist())}),t.qZA(),t.TgZ(6,"div",6)(7,"div",7)(8,"span",8)(9,"ion-checkbox",9),t.NdJ("ngModelChange",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.checkAll=s)})("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.toggleCheckAll())}),t.qZA(),t.TgZ(10,"ion-label"),t._uU(11),t.ALo(12,"translate"),t.qZA()(),t.YNc(13,X,3,4,"span",10),t.qZA(),t.TgZ(14,"app-pagination",11),t.NdJ("onPageClick",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.getWishlist(s))}),t.qZA()(),t.YNc(15,et,2,1,"div",12),t.TgZ(16,"div",13)(17,"app-pagination",11),t.NdJ("onPageClick",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.getWishlist(s))}),t.qZA()(),t.YNc(18,nt,1,0,"app-loading-spinner",14),t.qZA()}if(2&i){const e=t.oxw(),n=t.MAs(3);t.xp6(3),t.hij(" ",t.lcZ(4,13,"my-wishlist-page-title")," "),t.xp6(2),t.Q6J("isSelected",e.isSelected),t.xp6(4),t.Q6J("ngModel",e.checkAll)("ngClass",t.VKq(17,it,!e.checkAll)),t.xp6(2),t.Oqu(t.lcZ(12,15,"cart-select-all")),t.xp6(2),t.Q6J("ngIf",e.selectedCount>0),t.xp6(1),t.Q6J("curPage",e.page)("numOfPages",e.numOfPages),t.xp6(1),t.Q6J("ngIf",!e.isLoading&&e.products.length||e.isLoading)("ngIfElse",n),t.xp6(2),t.Q6J("curPage",e.page)("numOfPages",e.numOfPages),t.xp6(1),t.Q6J("ngIf",e.isLoading)}}function st(i,u){1&i&&(t.TgZ(0,"div",21),t._UZ(1,"img",22),t.TgZ(2,"p",23),t._uU(3),t.ALo(4,"translate"),t.qZA()()),2&i&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,"no-results-found")," "))}function ct(i,u){if(1&i&&t.YNc(0,st,5,3,"div",20),2&i){const e=t.oxw();t.Q6J("ngIf",!(null!=e.products&&e.products.length))}}const rt=[{path:"",component:(()=>{class i{constructor(e,n,s,l,Z,dt){this.router=e,this.route=n,this.favoriteService=s,this.cartService=l,this.biddingService=Z,this.toast=dt,this.products=[],this.page=1,this.numOfPages=0,this.rows=10,this.checkAll=!1,this.selectedCount=0,this.$active=new b.x}ngOnInit(){this.getWishlist(this.page)}ngOnDestroy(){this.$active.next(),this.$active.complete()}get isSelected(){return this.selectedCount>0}toggleCheckAll(){this.products?.forEach(e=>{e.checked=!this.checkAll}),this.selectedCount=this.checkAll?0:this.products.length}onSearchWishlist(e){this.favoriteService.getUserProductFavorites({page:0,rows:this.rows,name:e}).pipe((0,P.R)(this.$active)).subscribe(n=>{n&&(this.page=1,this.selectedCount=0,this.checkAll=!1,this.products=n.rows.map(s=>({...s,specifications:this.getSpecifications(s.specificationItems),cover:JSON.parse(s.productImages||"[]")?.[0].thumbnail,checked:!1})),this.numOfPages=Math.ceil(n.total/this.rows),this.isLoading=!1)})}onAddToCart(){const e=this.products.filter(n=>n.checked).filter(n=>n.sku?.id).map(n=>(n.checked=!1,this.cartService.addCartItem(n.sku?.id||"",1)));(0,C.D)(e).subscribe(n=>{0===n[0].code&&(this.checkAll=!1,this.selectedCount=0,this.presentToast({position:"bottom",message:"\u6dfb\u52a0\u6210\u529f",duration:1e3,icon:"checkmark-circle-outline",color:"success"}),this.cartService.getCartItem().subscribe())})}onDeleteWishlist(){const e=this.products.filter(n=>n.checked).map(n=>n.id);this.favoriteService.delUserProductFavorites(e).pipe((0,P.R)(this.$active)).subscribe(n=>{0===n?.code&&(this.checkAll=!1,this.selectedCount=0,this.getWishlist())})}getWishlist(e=1){this.isLoading=!0,this.favoriteService.getUserProductFavorites({page:e-1,rows:this.rows}).pipe((0,P.R)(this.$active)).subscribe(n=>{n&&(this.products=n.rows.map(s=>({...s,specifications:this.getSpecifications(s.specificationItems),cover:JSON.parse(s.productImages||"[]")?.[0].thumbnail,checked:!1})),this.page=e,this.numOfPages=Math.ceil(n.total/this.rows),this.isLoading=!1,this.checkAll=!1,this.selectedCount=0)})}getSpecifications(e=""){let n="";return e&&JSON.parse(e).forEach(l=>{n+=`[${l.name}\uff1a`,l.entries.filter(Z=>Object.is(Z.isSelected,!0)).forEach(Z=>{n+=`${Z.value}\u3001`}),n&&-1!=n.lastIndexOf("\u3001")&&(n=n.substring(0,n.length-1)),n+="]"}),n}presentToast(e){var n=this;return(0,W.Z)(function*(){yield(yield n.toast.create(e)).present()})()}onSelectWishList(e){e?this.selectedCount++:this.selectedCount--}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x.F0),t.Y36(x.gz),t.Y36(h),t.Y36(_.N),t.Y36(y.g),t.Y36(r.yF))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-wishlist"]],decls:4,vars:3,consts:[["class","px-3 lg:px-0 wishlist-wrapper mt-3 md:mt-0",4,"ngLet"],["wishListEmpty",""],[1,"px-3","lg:px-0","wishlist-wrapper","mt-3","md:mt-0"],[1,"mb-5","flex","justify-between"],[1,"text-2xl","font-semi-bold","hidden","md:flex"],[3,"isSelected","searchQuery","addToCart","deleteWishlist"],[1,"flex","flex-col-reverse","sm:flex-row","items-center","justify-center","mt-4","sm:justify-between"],[1,"flex","w-full","items-center","justify-between","sm:justify-start","py-2"],[1,"flex","items-center","justify-center"],[1,"my-0","mr-2",3,"ngModel","ngClass","ngModelChange","click"],["class","text-[#0087ff] sm:ml-4",4,"ngIf"],[3,"curPage","numOfPages","onPageClick"],["class","flex gap-4 flex-col mt-4 relative",4,"ngIf","ngIfElse"],[1,"flex","justify-center","mt-4","md:justify-end"],["text","loading",4,"ngIf"],[1,"text-[#0087ff]","sm:ml-4"],[1,"flex","gap-4","flex-col","mt-4","relative"],["class","w-full",3,"product","selectedCount","isBiddingMode","selectWishList",4,"ngFor","ngForOf"],[1,"w-full",3,"product","selectedCount","isBiddingMode","selectWishList"],["text","loading"],["class","no-wishlists w-full h-full bg-white px-5 py-9 items-center justify-center flex flex-col rounded-xl mt-5",4,"ngIf"],[1,"no-wishlists","w-full","h-full","bg-white","px-5","py-9","items-center","justify-center","flex","flex-col","rounded-xl","mt-5"],["src","/assets/images/order-placeholder.png","alt","No wishlist"],[1,"text-xl","font-extrabold","text-zinc-300","mt-2"]],template:function(e,n){1&e&&(t.YNc(0,ot,19,19,"div",0),t.ALo(1,"async"),t.YNc(2,ct,1,1,"ng-template",null,1,t.W1O)),2&e&&t.Q6J("ngLet",t.lcZ(1,1,n.biddingService.isBiddingMode$))},dependencies:[o.mk,o.sg,o.O5,r.nz,r.Q$,r.w,a.g,p.Q,g.h,d.JJ,d.On,B,V,o.Ov,k.X$],styles:[".no-wishlists[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:216px}@media (min-width: 640px){.no-wishlists[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:250px}}@media (min-width: 1024px){.no-wishlists[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:300px}}ion-checkbox[_ngcontent-%COMP%]{--border-color: #93c5fd;--background-checked: #0087ff;--border-color-checked: #0087ff}ion-checkbox.unchecked[_ngcontent-%COMP%]{--border-color: #c7c7c7}"]}),i})()}];let at=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[x.Bz.forChild(rt),x.Bz]}),i})(),lt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[o.ez,at,r.Pc,v.m,d.u5,k.aw]}),i})()},28137:(L,O,c)=>{c.d(O,{I:()=>a});var o=c(15861),r=c(94650),v=c(49808),x=c(82722),W=c(5565),b=c(45329),P=c(94128),C=c(95133),t=c(36895),M=c(63225),T=c(60753);function w(p,g){}function h(p,g){if(1&p){const d=r.EpF();r.TgZ(0,"app-require-login-modal",3),r.NdJ("isOpenChange",function(A){r.CHM(d);const m=r.oxw(2);return r.KtG(m.openRequireLoginModal=A)}),r.qZA()}if(2&p){const d=r.oxw(2);r.Q6J("isOpen",d.openRequireLoginModal)}}function _(p,g){if(1&p&&(r.ynx(0),r.YNc(1,h,1,1,"app-require-login-modal",2),r.BQk()),2&p){const d=r.oxw();r.xp6(1),r.Q6J("ngIf",d.openRequireLoginModal)}}const y=function(p,g,d){return{method:p,isLoading:g,isOnCart:d}};let a=(()=>{class p extends W.V{constructor(d,f,A){var m;super(),m=this,this.userService=d,this.cartService=f,this.toast=A,this.openRequireLoginModal=!1,this.isLoading=!1,this.isOnCart=!1,this.cartList=[],this.handleClick=(0,o.Z)(function*(){if(m.userService.isLogin()){if(m.sku)try{m.isLoading=!0;const k=m.cartService.cartList?.find(E=>E.skuId===m.sku?.id),I=k?k.quantity:0;yield(0,v.n)(m.cartService.addCartItem(m.sku.id,m.quantity+I)),yield(0,v.n)(m.cartService.getCartItem()),m.isLoading=!1,m.presentToast({position:"bottom",message:"\u6dfb\u52a0\u6210\u529f",duration:1e3,icon:"checkmark-circle-outline",color:"success"})}catch(k){m.isLoading=!1,m.presentToast({position:"bottom",message:k?.message,icon:"alert-circle-outline",duration:1e3,color:"danger"})}}else m.openRequireLoginModal=!0})}ngOnInit(){this.cartService.cartList$.pipe((0,x.R)(this.destroyStream$)).subscribe(d=>{this.cartList=d,this.isOnCart=this.cartList?.some(f=>f.productId===this.sku?.productId)||!1})}ngOnChanges(d){d.sku.currentValue!==d.sku.previousValue&&(this.isOnCart=this.cartList?.some(f=>f.productId===this.sku?.productId)||!1)}presentToast(d){var f=this;return(0,o.Z)(function*(){yield(yield f.toast.create(d)).present()})()}}return p.\u0275fac=function(d){return new(d||p)(r.Y36(b.K),r.Y36(P.N),r.Y36(C.yF))},p.\u0275cmp=r.Xpm({type:p,selectors:[["app-add-to-cart"]],contentQueries:function(d,f,A){if(1&d&&r.Suo(A,r.Rgc,5),2&d){let m;r.iGM(m=r.CRH())&&(f.templateRef=m.first)}},inputs:{sku:"sku",quantity:"quantity"},features:[r.qOj,r.TTD],decls:3,vars:6,consts:[[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"isBrowser"],[3,"isOpen","isOpenChange",4,"ngIf"],[3,"isOpen","isOpenChange"]],template:function(d,f){1&d&&(r.ynx(0),r.YNc(1,w,0,0,"ng-template",0),r.YNc(2,_,2,1,"ng-container",1),r.BQk()),2&d&&(r.xp6(1),r.Q6J("ngTemplateOutlet",f.templateRef)("ngTemplateOutletContext",r.kEZ(2,y,f.handleClick,f.isLoading,f.isOnCart)))},dependencies:[t.O5,t.tP,M.E,T.C],encapsulation:2}),p})()},23556:(L,O,c)=>{c.d(O,{Q:()=>h});var o=c(94650),r=c(54968),v=c(78372),x=c(36895),W=c(69975);function b(_,y){if(1&_){const a=o.EpF();o.TgZ(0,"li",6),o.NdJ("click",function(){o.CHM(a);const g=o.oxw(2);return o.KtG(g.onPageClick.emit(1))}),o._UZ(1,"app-chevron-right-icon",7)(2,"app-chevron-right-icon",7),o.qZA()}}function P(_,y){if(1&_){const a=o.EpF();o.TgZ(0,"li",8),o.NdJ("click",function(){o.CHM(a);const g=o.oxw(2);return o.KtG(g.onPageClick.emit(g.curPage-1))}),o._UZ(1,"app-chevron-right-icon",7),o.qZA()}}const C=function(_){return{active:_}};function t(_,y){if(1&_){const a=o.EpF();o.TgZ(0,"li",9),o.NdJ("click",function(){const d=o.CHM(a).$implicit,f=o.oxw(2);return o.KtG(f.onPageClick.emit(d))}),o._uU(1),o.qZA()}if(2&_){const a=y.$implicit,p=o.oxw(2);o.Q6J("ngClass",o.VKq(2,C,p.curPage===a)),o.xp6(1),o.hij(" ",a," ")}}function M(_,y){if(1&_){const a=o.EpF();o.TgZ(0,"li",8),o.NdJ("click",function(){o.CHM(a);const g=o.oxw(2);return o.KtG(g.onPageClick.emit(g.curPage+1))}),o._UZ(1,"app-chevron-right-icon",10),o.qZA()}}function T(_,y){if(1&_){const a=o.EpF();o.TgZ(0,"li",11),o.NdJ("click",function(){o.CHM(a);const g=o.oxw(2);return o.KtG(g.onPageClick.emit(g.numOfPages))}),o._UZ(1,"app-chevron-right-icon",10)(2,"app-chevron-right-icon",10),o.qZA()}}function w(_,y){if(1&_&&(o.TgZ(0,"ul",1),o.YNc(1,b,3,0,"li",2),o.YNc(2,P,2,0,"li",3),o.YNc(3,t,2,4,"li",4),o.YNc(4,M,2,0,"li",3),o.YNc(5,T,3,0,"li",5),o.qZA()),2&_){const a=o.oxw();o.xp6(1),o.Q6J("ngIf",a.curPage>1),o.xp6(1),o.Q6J("ngIf",a.curPage>1),o.xp6(1),o.Q6J("ngForOf",a.shownPages),o.xp6(1),o.Q6J("ngIf",a.curPage<a.numOfPages),o.xp6(1),o.Q6J("ngIf",a.curPage<a.numOfPages)}}let h=(()=>{class _{constructor(a){this.ref=a,this.onPageClick=new o.vpe,this.shownPagesLimit=5}get shownPages(){try{const a=Math.floor(this.shownPagesLimit/2);let p=Math.max(1,this.curPage-a);const g=Math.min(p+this.shownPagesLimit,this.numOfPages+1);return this.curPage+a>this.numOfPages&&(p-=this.curPage+a-this.numOfPages,p=Math.max(1,p)),[...Array(g-p)].map((d,f)=>p+f)}catch{return[]}}ngOnInit(){if(typeof window<"u"){const{innerWidth:a}=window;this.setShowPagesLimit(a),this.subscription=(0,r.R)(window,"resize").pipe((0,v.b)(300)).subscribe(p=>{this.setShowPagesLimit(p.target.innerWidth)})}}ngOnDestroy(){this.subscription?.unsubscribe()}setShowPagesLimit(a){this.shownPagesLimit=a>340?5:3,this.ref.markForCheck()}}return _.\u0275fac=function(a){return new(a||_)(o.Y36(o.sBO))},_.\u0275cmp=o.Xpm({type:_,selectors:[["app-pagination"]],inputs:{curPage:"curPage",numOfPages:"numOfPages"},outputs:{onPageClick:"onPageClick"},decls:1,vars:1,consts:[["class","pagination flex space-x-2",4,"ngIf"],[1,"pagination","flex","space-x-2"],["class","pagination__first bg-gray-100 items-center justify-center p-1 rounded border font-bold cursor-pointer",3,"click",4,"ngIf"],["class","flex items-center justify-center p-1 rounded border font-bold cursor-pointer bg-gray-100",3,"click",4,"ngIf"],["class","flex items-center justify-center p-1 rounded border font-bold cursor-pointer bg-white",3,"ngClass","click",4,"ngFor","ngForOf"],["class","pagination__last bg-gray-100 items-center justify-center p-1 rounded border font-bold cursor-pointer",3,"click",4,"ngIf"],[1,"pagination__first","bg-gray-100","items-center","justify-center","p-1","rounded","border","font-bold","cursor-pointer",3,"click"],[1,"w-2","h-auto","transform","rotate-180"],[1,"flex","items-center","justify-center","p-1","rounded","border","font-bold","cursor-pointer","bg-gray-100",3,"click"],[1,"flex","items-center","justify-center","p-1","rounded","border","font-bold","cursor-pointer","bg-white",3,"ngClass","click"],[1,"w-2","h-auto"],[1,"pagination__last","bg-gray-100","items-center","justify-center","p-1","rounded","border","font-bold","cursor-pointer",3,"click"]],template:function(a,p){1&a&&o.YNc(0,w,6,5,"ul",0),2&a&&o.Q6J("ngIf",p.shownPages.length)},dependencies:[x.mk,x.sg,x.O5,W.B],styles:[".pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{min-width:2.5rem;transition:all .15s ease-in-out}.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{pointer-events:none;--tw-border-opacity: 1;border-color:rgb(255 126 24 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 126 24 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));transition:all .15s ease-in-out}@media (min-width: 640px){.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active):hover{--tw-border-opacity: 1;border-color:rgb(255 126 24 / var(--tw-border-opacity));--tw-text-opacity: 1;color:rgb(255 126 24 / var(--tw-text-opacity))}}.pagination__first[_ngcontent-%COMP%], .pagination__last[_ngcontent-%COMP%]{display:none}@media only screen and (min-width: 480px){.pagination__first[_ngcontent-%COMP%], .pagination__last[_ngcontent-%COMP%]{display:flex}}"],changeDetection:0}),_})()},24719:(L,O,c)=>{c.d(O,{q:()=>W});var o=c(94650),r=c(45329);let W=(()=>{class b{constructor(C){this.userService=C}handleClick(C){if(!this.userService.isLogin())return;let t=document.querySelector(this.targetSelector);if(!t||!this.flyProduct&&!this.thumbnail)return;let w,M=C.clientY-25,T=C.clientX-25;w=this.flyProduct?this.flyProduct.productImages instanceof Object?this.flyProduct.productImages[0].thumbnail:JSON.parse(this.flyProduct.productImages)[0].thumbnail:this.thumbnail;var h=document.createElement("div");h.style.backgroundImage=`url(${w})`,h.style.backgroundSize="cover",h.style.width="50px",h.style.height="50px",h.style.borderRadius="100%",h.style.position="fixed",h.style.zIndex="100",h.style.transformOrigin="center bottom",h.style.transform="scale(1)",h.style.boxShadow="0px 3px 5px 2px rgba(0,0,0,0.2)",h.style.top=`${M}px`,h.style.left=`${T}px`,h.style.opacity="1",h.style.transition="\n      all 0.55s ease,\n      top 0.85s ease,\n      left 0.55s ease,\n      transform 0.55s ease 0.54s\n    ",document.body.appendChild(h),h.style.top=`\n      ${t.getBoundingClientRect().top+t.offsetHeight-16}px\n    `,h.style.left=`\n      ${t.getBoundingClientRect().left+t.offsetWidth-16}px\n    `,h.style.height="1rem",h.style.width="1rem",h.style.transform="scale(0)",setTimeout(()=>{h.remove()},825)}}return b.\u0275fac=function(C){return new(C||b)(o.Y36(r.K))},b.\u0275dir=o.lG2({type:b,selectors:[["","flyToCart",""]],hostBindings:function(C,t){1&C&&o.NdJ("click",function(T){return t.handleClick(T)})},inputs:{flyProduct:"flyProduct",thumbnail:"thumbnail",targetSelector:"targetSelector"}}),b})()}}]);