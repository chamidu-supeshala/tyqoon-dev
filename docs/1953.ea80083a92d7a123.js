"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[1953],{46854:(C,d,i)=>{i.d(d,{p:()=>r});var n=i(92340),_=i(54004),c=i(94650),s=i(80529);let r=(()=>{class o{constructor(e){this.http=e}getOrders(e){return this.http.get(`${n.N.BASE_URL}/user/order/getUserOrders`,{params:e}).pipe((0,_.U)(({data:f})=>f))}getOrderDetails(e){return this.http.get(`${n.N.BASE_URL}/user/order/getOrderDetails`,{params:e}).pipe((0,_.U)(({data:f})=>f))}buyGiftCode(e){return this.http.post(`${n.N.BASE_URL}/user/order/buyGiftCode`,e)}confirmReceipt(e){return this.http.post(`${n.N.BASE_URL}/user/order/confirmReceipt`,e)}increaseReceivingTime(e){return this.http.post(`${n.N.BASE_URL}/user/order/increaseReceivingTime`,e)}cancellationOrder(e){return this.http.post(`${n.N.BASE_URL}/user/order/cancellationOrder`,e)}}return o.\u0275fac=function(e){return new(e||o)(c.LFG(s.eN))},o.\u0275prov=c.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},23372:(C,d,i)=>{i.d(d,{g:()=>r});var n=i(94650),_=i(36895),c=i(54463);function s(o,l){if(1&o&&(n.TgZ(0,"p",3),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&o){const e=n.oxw();n.xp6(1),n.Oqu(n.lcZ(2,1,e.text))}}let r=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-loading-spinner"]],inputs:{text:"text"},decls:40,vars:1,consts:[[1,"flex","flex-col","items-center"],[1,"loading-spinner"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"]],template:function(e,f){1&e&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"p")(3,"p")(4,"p")(5,"p")(6,"p")(7,"p")(8,"p")(9,"p")(10,"p")(11,"p")(12,"p")(13,"p")(14,"p")(15,"p")(16,"p")(17,"p")(18,"p")(19,"p")(20,"p")(21,"p")(22,"p")(23,"p")(24,"p")(25,"p")(26,"p")(27,"p")(28,"p")(29,"p")(30,"p")(31,"p")(32,"p")(33,"p")(34,"p")(35,"p")(36,"p")(37,"p")(38,"p"),n.qZA(),n.YNc(39,s,3,3,"p",2),n.qZA()),2&e&&(n.xp6(39),n.Q6J("ngIf",f.text))},dependencies:[_.O5,c.X$],styles:['.loading-spinner[_ngcontent-%COMP%]{position:relative;width:70px;height:34px;margin:50px auto}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .loading-spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{offset-path:path("M67.3,17.8c0-9.3-4.8-14.5-13.8-14.5C41.9,3.2,35.7,17,35.7,17s-6.2,13.8-17.8,13.8C10,30.8,4,25.5,4,17.7 C4, 9.6, 10, 3.2, 17.8, 3.2C29.4, 3.2, 35.7, 17, 35.7, 17s6.2, 13.8, 17.8, 13.8C61.4, 30.8, 67.3, 24.8, 67.3, 17.8z");position:absolute}.loading-spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fb8811;font-size:12px;animation:path 1.4s linear infinite}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:5px;height:5px;background:#fb8811;border-radius:50%;opacity:0;animation:path 1.4s linear infinite,dot linear forwards;motion-rotation:auto 45deg}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1){background:#bf4040;animation-delay:15ms}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(2){background:#bf5540;animation-delay:.03s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(3){background:#bf6a40;animation-delay:45ms}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(4){background:#bf8040;animation-delay:.06s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(5){background:#bf9540;animation-delay:75ms}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(6){background:#bfaa40;animation-delay:.09s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(7){background:#bfbf40;animation-delay:.105s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(8){background:#aabf40;animation-delay:.12s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(9){background:#95bf40;animation-delay:.135s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(10){background:#80bf40;animation-delay:.15s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(11){background:#6abf40;animation-delay:.165s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(12){background:#55bf40;animation-delay:.18s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(13){background:#40bf40;animation-delay:.195s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(14){background:#40bf55;animation-delay:.21s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(15){background:#40bf6a;animation-delay:.225s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(16){background:#40bf80;animation-delay:.24s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(17){background:#40bf95;animation-delay:.255s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(18){background:#40bfaa;animation-delay:.27s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(19){background:#40bfbf;animation-delay:.285s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(20){background:#40aabf;animation-delay:.3s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(21){background:#4095bf;animation-delay:.315s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(22){background:#4080bf;animation-delay:.33s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(23){background:#406abf;animation-delay:.345s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(24){background:#4055bf;animation-delay:.36s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(25){background:#4040bf;animation-delay:.375s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(26){background:#5540bf;animation-delay:.39s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(27){background:#6a40bf;animation-delay:.405s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(28){background:#8040bf;animation-delay:.42s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(29){background:#9540bf;animation-delay:.435s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(30){background:#aa40bf;animation-delay:.45s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(31){background:#bf40bf;animation-delay:.465s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(32){background:#bf40aa;animation-delay:.48s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(33){background:#bf4095;animation-delay:.495s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(34){background:#bf4080;animation-delay:.51s}.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(35){background:#bf406a;animation-delay:.525s}@keyframes path{to{offset-distance:100%}}@keyframes dot{to{opacity:1}}@supports not (offset-rotate: 0deg){.loading-spinner[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]:before{display:block;padding:10px 0;color:#fff;text-align:center;background:#dc3b3b;content:"Sorry! you browser not supports!"}}']}),o})()},23556:(C,d,i)=>{i.d(d,{Q:()=>b});var n=i(94650),_=i(54968),c=i(78372),s=i(36895),r=i(69975);function o(a,u){if(1&a){const t=n.EpF();n.TgZ(0,"li",6),n.NdJ("click",function(){n.CHM(t);const g=n.oxw(2);return n.KtG(g.onPageClick.emit(1))}),n._UZ(1,"app-chevron-right-icon",7)(2,"app-chevron-right-icon",7),n.qZA()}}function l(a,u){if(1&a){const t=n.EpF();n.TgZ(0,"li",8),n.NdJ("click",function(){n.CHM(t);const g=n.oxw(2);return n.KtG(g.onPageClick.emit(g.curPage-1))}),n._UZ(1,"app-chevron-right-icon",7),n.qZA()}}const e=function(a){return{active:a}};function f(a,u){if(1&a){const t=n.EpF();n.TgZ(0,"li",9),n.NdJ("click",function(){const m=n.CHM(t).$implicit,P=n.oxw(2);return n.KtG(P.onPageClick.emit(m))}),n._uU(1),n.qZA()}if(2&a){const t=u.$implicit,p=n.oxw(2);n.Q6J("ngClass",n.VKq(2,e,p.curPage===t)),n.xp6(1),n.hij(" ",t," ")}}function y(a,u){if(1&a){const t=n.EpF();n.TgZ(0,"li",8),n.NdJ("click",function(){n.CHM(t);const g=n.oxw(2);return n.KtG(g.onPageClick.emit(g.curPage+1))}),n._UZ(1,"app-chevron-right-icon",10),n.qZA()}}function h(a,u){if(1&a){const t=n.EpF();n.TgZ(0,"li",11),n.NdJ("click",function(){n.CHM(t);const g=n.oxw(2);return n.KtG(g.onPageClick.emit(g.numOfPages))}),n._UZ(1,"app-chevron-right-icon",10)(2,"app-chevron-right-icon",10),n.qZA()}}function O(a,u){if(1&a&&(n.TgZ(0,"ul",1),n.YNc(1,o,3,0,"li",2),n.YNc(2,l,2,0,"li",3),n.YNc(3,f,2,4,"li",4),n.YNc(4,y,2,0,"li",3),n.YNc(5,h,3,0,"li",5),n.qZA()),2&a){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",t.curPage>1),n.xp6(1),n.Q6J("ngIf",t.curPage>1),n.xp6(1),n.Q6J("ngForOf",t.shownPages),n.xp6(1),n.Q6J("ngIf",t.curPage<t.numOfPages),n.xp6(1),n.Q6J("ngIf",t.curPage<t.numOfPages)}}let b=(()=>{class a{constructor(t){this.ref=t,this.onPageClick=new n.vpe,this.shownPagesLimit=5}get shownPages(){try{const t=Math.floor(this.shownPagesLimit/2);let p=Math.max(1,this.curPage-t);const g=Math.min(p+this.shownPagesLimit,this.numOfPages+1);return this.curPage+t>this.numOfPages&&(p-=this.curPage+t-this.numOfPages,p=Math.max(1,p)),[...Array(g-p)].map((m,P)=>p+P)}catch{return[]}}ngOnInit(){if(typeof window<"u"){const{innerWidth:t}=window;this.setShowPagesLimit(t),this.subscription=(0,_.R)(window,"resize").pipe((0,c.b)(300)).subscribe(p=>{this.setShowPagesLimit(p.target.innerWidth)})}}ngOnDestroy(){this.subscription?.unsubscribe()}setShowPagesLimit(t){this.shownPagesLimit=t>340?5:3,this.ref.markForCheck()}}return a.\u0275fac=function(t){return new(t||a)(n.Y36(n.sBO))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-pagination"]],inputs:{curPage:"curPage",numOfPages:"numOfPages"},outputs:{onPageClick:"onPageClick"},decls:1,vars:1,consts:[["class","pagination flex space-x-2",4,"ngIf"],[1,"pagination","flex","space-x-2"],["class","pagination__first bg-gray-100 items-center justify-center p-1 rounded border font-bold cursor-pointer",3,"click",4,"ngIf"],["class","flex items-center justify-center p-1 rounded border font-bold cursor-pointer bg-gray-100",3,"click",4,"ngIf"],["class","flex items-center justify-center p-1 rounded border font-bold cursor-pointer bg-white",3,"ngClass","click",4,"ngFor","ngForOf"],["class","pagination__last bg-gray-100 items-center justify-center p-1 rounded border font-bold cursor-pointer",3,"click",4,"ngIf"],[1,"pagination__first","bg-gray-100","items-center","justify-center","p-1","rounded","border","font-bold","cursor-pointer",3,"click"],[1,"w-2","h-auto","transform","rotate-180"],[1,"flex","items-center","justify-center","p-1","rounded","border","font-bold","cursor-pointer","bg-gray-100",3,"click"],[1,"flex","items-center","justify-center","p-1","rounded","border","font-bold","cursor-pointer","bg-white",3,"ngClass","click"],[1,"w-2","h-auto"],[1,"pagination__last","bg-gray-100","items-center","justify-center","p-1","rounded","border","font-bold","cursor-pointer",3,"click"]],template:function(t,p){1&t&&n.YNc(0,O,6,5,"ul",0),2&t&&n.Q6J("ngIf",p.shownPages.length)},dependencies:[s.mk,s.sg,s.O5,r.B],styles:[".pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{min-width:2.5rem;transition:all .15s ease-in-out}.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{pointer-events:none;--tw-border-opacity: 1;border-color:rgb(255 126 24 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 126 24 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));transition:all .15s ease-in-out}@media (min-width: 640px){.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active):hover{--tw-border-opacity: 1;border-color:rgb(255 126 24 / var(--tw-border-opacity));--tw-text-opacity: 1;color:rgb(255 126 24 / var(--tw-text-opacity))}}.pagination__first[_ngcontent-%COMP%], .pagination__last[_ngcontent-%COMP%]{display:none}@media only screen and (min-width: 480px){.pagination__first[_ngcontent-%COMP%], .pagination__last[_ngcontent-%COMP%]{display:flex}}"],changeDetection:0}),a})()},10556:(C,d,i)=>{i.d(d,{p:()=>_});var n=i(94650);let _=(()=>{class c{constructor(){this.payload="",this.copied=new n.vpe,this.elementClass="app-copying-directive"}onClick(r){if(r.preventDefault(),r.stopPropagation(),!this.payload)return;let o=e=>{(e.clipboardData||window.clipboardData).setData("text",this.payload.toString()),e.preventDefault(),this.copied.emit(this.payload)};document.addEventListener("copy",o,!1),document.execCommand("copy"),document.removeEventListener("copy",o,!1);const l=r?.target?.closest(".app-copying-directive");l&&(l.classList.add("copied"),setTimeout(()=>{l.classList.remove("copied")},1e3))}}return c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=n.lG2({type:c,selectors:[["","appCopying",""]],hostVars:2,hostBindings:function(r,o){1&r&&n.NdJ("click",function(e){return o.onClick(e)}),2&r&&n.Tol(o.elementClass)},inputs:{payload:["appCopying","payload"]},outputs:{copied:"copied"}}),c})()},22775:(C,d,i)=>{i.d(d,{Q:()=>_});var n=i(94650);let _=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-copy-icon"]],decls:3,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 488.3 488.3",0,"xml","space","preserve",2,"enable-background","new 0 0 488.3 488.3"],["d","M314.25,85.4h-227c-21.3,0-38.6,17.3-38.6,38.6v325.7c0,21.3,17.3,38.6,38.6,38.6h227c21.3,0,38.6-17.3,38.6-38.6V124\n    C352.75,102.7,335.45,85.4,314.25,85.4z M325.75,449.6c0,6.4-5.2,11.6-11.6,11.6h-227c-6.4,0-11.6-5.2-11.6-11.6V124\n    c0-6.4,5.2-11.6,11.6-11.6h227c6.4,0,11.6,5.2,11.6,11.6V449.6z"],["d","M401.05,0h-227c-21.3,0-38.6,17.3-38.6,38.6c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5c0-6.4,5.2-11.6,11.6-11.6h227\n    c6.4,0,11.6,5.2,11.6,11.6v325.7c0,6.4-5.2,11.6-11.6,11.6c-7.5,0-13.5,6-13.5,13.5s6,13.5,13.5,13.5c21.3,0,38.6-17.3,38.6-38.6\n    V38.6C439.65,17.3,422.35,0,401.05,0z"]],template:function(r,o){1&r&&(n.O4$(),n.TgZ(0,"svg",0),n._UZ(1,"path",1)(2,"path",2),n.qZA())},encapsulation:2}),c})()}}]);