"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[4865],{64865:(Me,J,l)=>{l.r(J),l.d(J,{RegisterModule:()=>Te});var C=l(36895),O=l(7507),f=l(15861),c=l(24006),R=l(26704),V=l(82722),j=l(5565),G=l(49769),E=l.n(G);function A(o){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)o[n]=t[n]}return o}const K=function I(o,i){function t(r,a,s){if(!(typeof document>"u")){"number"==typeof(s=A({},i,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var d="";for(var p in s)!s[p]||(d+="; "+p,!0!==s[p]&&(d+="="+s[p].split(";")[0]));return document.cookie=r+"="+o.write(a,r)+d}}return Object.create({set:t,get:function n(r){if(!(typeof document>"u"||arguments.length&&!r)){for(var a=document.cookie?document.cookie.split("; "):[],s={},d=0;d<a.length;d++){var p=a[d].split("="),g=p.slice(1).join("=");try{var u=decodeURIComponent(p[0]);if(s[u]=o.read(g,u),r===u)break}catch{}}return r?s[r]:s}},remove:function(r,a){t(r,"",A({},a,{expires:-1}))},withAttributes:function(r){return I(this.converter,A({},this.attributes,r))},withConverter:function(r){return I(A({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(o)}})}({read:function(o){return'"'===o[0]&&(o=o.slice(1,-1)),o.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(o){return encodeURIComponent(o).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});var T=l(80519),U=l(94542),q=l(18110),N=l(24837),L=l(5963),S=l(21075),M=l(37340),e=l(94650),F=l(36635),m=l(95133),$=l(29395),v=l(54463),X=l(94830),W=l(56889),ee=l(32482),H=l(85931),te=l(63225),ne=l(74206),oe=l(7228),Q=l(19747),z=l(44466);let re=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-camera-flip-icon"]],decls:5,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","version","1.1","id","\u5716\u5c64_1","x","0","y","0","viewBox","0 0 100 100",0,"xml","space","preserve"],["d","M70.492 25.691H59.347l-2.039-5.253a3.252 3.252 0 0 0-3.081-2.209h-8.454a3.254 3.254 0 0 0-3.081 2.209l-2.039 5.253H29.508a4.975 4.975 0 0 0-4.975 4.975v25.585a4.975 4.975 0 0 0 4.975 4.975h40.984a4.975 4.975 0 0 0 4.975-4.975V30.666a4.975 4.975 0 0 0-4.975-4.975z","fill","none","stroke","currentColor","stroke-width","4","stroke-miterlimit","10"],["cx","50","cy","43.459","r","11.371","fill","none","stroke","currentColor","stroke-width","4","stroke-miterlimit","10"],["d","M7.5 56.45c0 9.087 11.913 16.84 29.751 19.457l-.785 5.864 8.675-6.629-6.625-8.676-.782 5.842c-15.475-2.289-26.602-8.881-26.602-15.858 0-3.102 2.2-6.225 6.245-8.932v-4.26C10.916 46.924 7.5 51.482 7.5 56.45z","fill","currentColor"],["d","M82.624 43.262v4.259c4.043 2.706 6.244 5.823 6.244 8.929 0 9.073-17.8 16.739-38.869 16.739v3.632c23.832 0 42.5-8.948 42.5-20.37.001-4.9-3.507-9.571-9.875-13.189z","fill","currentColor"]],template:function(t,n){1&t&&(e.O4$(),e.TgZ(0,"svg",0),e._UZ(1,"path",1)(2,"circle",2)(3,"path",3)(4,"path",4),e.qZA())},encapsulation:2}),o})();function ie(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",16),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.flipCamera())}),e._UZ(1,"app-camera-flip-icon",17),e.TgZ(2,"div",18),e._uU(3),e.ALo(4,"translate"),e.qZA()()}2&o&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"flip-camera")," "))}function ae(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div"),e.YNc(3,ie,5,3,"div",4),e.qZA(),e.TgZ(4,"button",5),e.NdJ("click",function(){e.CHM(t),e.oxw();const r=e.MAs(1);return e.KtG(r.dismiss())}),e._uU(5," \u2715 "),e.qZA()()(),e.TgZ(6,"div",6),e._UZ(7,"video",7,8),e.TgZ(9,"button",9),e.NdJ("click",function(){e.CHM(t);const r=e.MAs(18);return e.KtG(r.click())}),e.TgZ(10,"div",10),e._UZ(11,"ion-icon",11),e.TgZ(12,"div",12),e._uU(13),e.ALo(14,"translate"),e.qZA()(),e.TgZ(15,"span",13),e._uU(16,"+"),e.qZA()(),e.TgZ(17,"input",14,15),e.NdJ("change",function(r){e.CHM(t);const a=e.oxw();return e.KtG(a.scanImageForQr(r))}),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("ngIf",t.cameraList.length>1),e.xp6(10),e.Oqu(e.lcZ(14,2,"album"))}}let Y=(()=>{class o{constructor(t){this.cdr=t,this.isOpenChange=new e.vpe,this.onScanned=new e.vpe,this.cameraList=[],this.selectedCamera=0,this.facingMode="environment"}ngOnInit(){}scanImageForQr(t){var n=this;return(0,f.Z)(function*(){console.log(t);const r=t.target.files[0];console.log("event",t),console.log(r),["image/gif","image/jpeg","image/png"].includes(r.type)?Q.Z.scanImage(r).then(d=>n.onScanned.emit({data:d})).catch(d=>alert("No Qr code found")):alert("File is not an image!")})()}handlePresent(){var t=this;return(0,f.Z)(function*(){yield t.getCameraList(),t.selectedCamera=0,t.qrScanner=new Q.Z(document.getElementById("QrScanner"),n=>t.onScanned.emit(n),{highlightScanRegion:!0}),t.qrScanner.start(),t.qrcode&&(t.qrcode.callback=n=>{console.log("data",n)}),t.cdr.markForCheck()})()}getCameraList(){var t=this;return(0,f.Z)(function*(){t.cameraList=yield Q.Z.listCameras(),1===t.cameraList.length&&!t.cameraList[0].id&&(t.cameraList[0].id="environment",t.cameraList.push({id:"user",label:"Camera 2"}))})()}cycleCamera(){var t=this;return(0,f.Z)(function*(){t.selectedCamera++,t.selectedCamera>t.cameraList.length-1&&(t.selectedCamera=0),yield t.qrScanner.setCamera(t.cameraList[t.selectedCamera].id)})()}handleDismiss(){this.isOpenChange.emit(!1),this.qrScanner?.stop()}flipCamera(){var t=this;return(0,f.Z)(function*(){t.facingMode="environment"===t.facingMode?"user":"environment",yield t.qrScanner.setCamera(t.facingMode)})()}ngOnDestroy(){this.qrScanner?.stop()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-qr-scan-modal"]],inputs:{isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange",onScanned:"onScanned"},standalone:!0,features:[e.jDz],decls:3,vars:1,consts:[[3,"isOpen","didPresent","didDismiss"],["modal",""],[1,"absolute","top-0","w-full","left-0","right-0","z-10","bg-black/30"],[1,"flex","justify-between","items-center","px-2","py-1"],["class","flex items-center cursor-pointer",3,"click",4,"ngIf"],[1,"outline-none","text-5xl","text-primary",3,"click"],[1,"light-box-modal","flex","items-center"],["id","QrScanner"],["QrScanner",""],[1,"absolute","cursor-pointer","z-10","bottom-1","left-1/2","transform","-translate-x-1/2","rounded-full","w-14","h-14","bg-black/20","hover:bg-black/50","flex","items-center","justify-center","text-white",3,"click"],[1,"text-center"],["name","images-outline",1,"w-8","h-8"],[1,"text-xs","leading-3","-mt-1.5","text-[10px]"],[1,"absolute","right-1","top-1","text-sm"],["type","file","type","file","accept","image/*",1,"hidden",3,"change"],["inputFile",""],[1,"flex","items-center","cursor-pointer",3,"click"],[1,"w-10","block","text-white","mx-auto"],[1,"text-xl","ml-2","text-white","capitalize"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-modal",0,1),e.NdJ("didPresent",function(){return n.handlePresent()})("didDismiss",function(){return n.handleDismiss()}),e.YNc(2,ae,19,4,"ng-template"),e.qZA()),2&t&&e.Q6J("isOpen",n.isOpen)},dependencies:[C.ez,C.O5,m.Pc,m.gu,m.ki,z.m,re,v.aw,v.X$],styles:["ion-modal[_ngcontent-%COMP%]{--backdrop-opacity: .8;--height: 100%;--width: 100%;--background: white}.light-box-modal[_ngcontent-%COMP%]{height:100%}video[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover}  .scan-region-highlight{box-shadow:0 0 0 500vw #0000004d}  .scan-region-highlight svg{stroke:#ff7e18!important}"]}),o})();function le(o,i){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"img",13),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.getVerifyCode())}),e.qZA(),e.BQk()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("src",t.verifyCode.picture,e.LSH)}}function se(o,i){1&o&&e._UZ(0,"app-orange-loader")}function de(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"p",3),e._uU(3),e.ALo(4,"translate"),e.qZA()(),e.TgZ(5,"div",4)(6,"div",5)(7,"div",6),e._UZ(8,"ion-input",7),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"div",8),e.YNc(11,le,2,1,"ng-container",9),e.YNc(12,se,1,0,"ng-template",null,10,e.W1O),e.qZA()()(),e.TgZ(14,"div",11)(15,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.confirm())}),e._uU(16," OK "),e.qZA()()()}if(2&o){const t=e.MAs(13),n=e.oxw();e.xp6(3),e.hij(" ",e.lcZ(4,5,"register-page-bot-check")," "),e.xp6(4),e.Q6J("formGroup",n.form),e.xp6(1),e.s9C("placeholder",e.lcZ(9,7,"register-page-code")),e.xp6(3),e.Q6J("ngIf",n.verifyCode)("ngIfElse",t)}}let ce=(()=>{class o extends j.V{constructor(t,n,r){super(),this.fb=t,this.authApiService=n,this.toast=r,this.isOpenChange=new e.vpe,this.verifyCodeChange=new e.vpe,this.onOk=new e.vpe}ngOnInit(){this.form=this.fb.group({captchaCode:[null]})}onAction(t){if(!t)return this.isOpenChange.emit(!1),void this.form.reset()}getVerifyCode(){this.verifyCode=null,this.authApiService.getVerifyCode(R.f.Login).pipe((0,V.R)(this.destroyStream$)).subscribe(t=>{!t||(this.verifyCodeChange.emit(t),this.verifyCode=t)})}confirm(){const{captchaCode:t}=this.form.value;(0,q.le)(t)?this.toastError("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"):this.onOk.emit(t)}toastError(t){var n=this;return(0,f.Z)(function*(){yield n.presentToast({position:"bottom",message:t,icon:"alert-circle-outline",duration:1e3,color:"danger"})})()}presentToast(t){var n=this;return(0,f.Z)(function*(){yield(yield n.toast.create(t)).present()})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.qu),e.Y36(F.Q),e.Y36(m.yF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-get-verify-code"]],inputs:{isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange",verifyCodeChange:"verifyCodeChange",onOk:"onOk"},features:[e.qOj],decls:3,vars:4,consts:[[1,"visible","modal-medium",3,"title","isOpen","didDismiss","didPresent"],[1,"flex","flex-col","rounded-xl","overflow-visible"],["id","modal-header",1,"flex","items-center","p-2","rounded-t-xl","w-full"],[1,"font-medium","text-xl","ml-2","tracking-tighter"],["id","modal-body",1,"bg-white","w-full","h-full","overflow-visible","px-4","py-3"],[1,"flex","items-stretch"],[1,"flex","items-center","w-full",3,"formGroup"],["formControlName","captchaCode",1,"normal-input","w-full","py-2.5","px-3","border","border-[#d9d9d9]","focus:outline-none","focus:border-[#ffa73b]","focus:shadow-lg","focus:shadow-[#fb881133]",3,"placeholder"],[1,"flex","items-center","justify-end","border","border-l-0","border-[#d9d9d9]","max-w-[120px]","w-full","h-[46px]","cursor-pointer","relative","bg-[#fafafa]"],[4,"ngIf","ngIfElse"],["loader",""],["id","modal-footer",1,"flex","justify-between","sm:justify-end","w-full","p-2","border-t","border-slate-200","bg-white","rounded-b-xl"],[1,"primary-btn",3,"click"],[1,"cursor-pointer","w-full","h-full",3,"src","click"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-modal",0),e.NdJ("didDismiss",function(){return n.onAction(!1)})("didPresent",function(){return n.getVerifyCode()}),e.ALo(1,"translate"),e.YNc(2,de,17,9,"ng-template"),e.qZA()),2&t&&(e.s9C("title",e.lcZ(1,2,"order-payment-retrieve-password")),e.Q6J("isOpen",n.isOpen))},dependencies:[C.O5,m.YG,m.pK,m.ki,m.j9,c.JJ,c.JL,c.sg,c.u,H.u,v.X$],styles:[".label[_ngcontent-%COMP%]{color:#1c1c1c}code-input[_ngcontent-%COMP%]{max-width:450px;--item-height: 55px;--item-spacing: 10px;--item-border-radius: 6px}#modal-header[_ngcontent-%COMP%]{background:#f4f4f4}#modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{background:#ff2145}#modal-body[_ngcontent-%COMP%]{max-width:500px}#modal-body[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{border-color:#d9d9d9;height:50px}#modal-body[_ngcontent-%COMP%]   .input-box.telephone[_ngcontent-%COMP%]{height:unset}#modal-body[_ngcontent-%COMP%]   .input-box.telephone[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:340px}#modal-body[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]{width:452px}ion-button.primary-btn[_ngcontent-%COMP%]{--background: #fb8811}ion-button.secondary-btn[_ngcontent-%COMP%]{--color: #000000d9;--border-color: #d9d9d9;--transition: background-color .4s ease, color .4s ease, border-color .4s ease}ion-button.secondary-btn[_ngcontent-%COMP%]:hover{--color: #ffa73b;--border-color: #ffa73b}"]}),o})();function pe(o,i){1&o&&(e.TgZ(0,"div",55),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"register-user-name-validation-symbols-types")," "))}function me(o,i){1&o&&(e.TgZ(0,"div",55),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"register-password-validation-symbols-types")," "))}function ue(o,i){1&o&&(e.TgZ(0,"div",55),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"register-passwords-not-match-error")," "))}function fe(o,i){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"img",56),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.getVerifyCode())}),e.qZA(),e.BQk()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("src",t.verifyCode.picture,e.LSH)}}function ge(o,i){1&o&&e._UZ(0,"app-orange-loader")}function he(o,i){1&o&&(e.TgZ(0,"div",55),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"register-page-incorrect-email-error")," "))}function _e(o,i){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Oqu("success"===t.flushingStatus?"Cleared!":"Clear")}}function Ce(o,i){1&o&&e._UZ(0,"app-loading-animation",59)}function ve(o,i){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",57),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.flushCookies())}),e.YNc(2,_e,2,1,"span",31),e.YNc(3,Ce,1,0,"ng-template",null,58,e.W1O),e.qZA(),e.BQk()}if(2&o){const t=e.MAs(4),n=e.oxw();e.xp6(2),e.Q6J("ngIf","flushing"!==n.flushingStatus)("ngIfElse",t)}}function be(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"app-qr-scan-modal",60),e.NdJ("onScanned",function(r){e.CHM(t);const a=e.oxw();return e.KtG(a.handleQrScanned(r))})("isOpenChange",function(r){e.CHM(t);const a=e.oxw();return e.KtG(a.isOpenQrScanModal=r)}),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("isOpen",t.isOpenQrScanModal)}}function xe(o,i){1&o&&(e.O4$(),e.TgZ(0,"svg",61),e._UZ(1,"path",62),e.qZA())}function ye(o,i){1&o&&(e.O4$(),e.TgZ(0,"svg",61),e._UZ(1,"path",63)(2,"path",64),e.qZA())}const we=[{path:"",component:(()=>{class o extends j.V{constructor(t,n,r,a,s,d,p,g,u,h){super(),this.router=t,this.activeRoute=n,this.fb=r,this.authApiService=a,this.cdr=s,this.toast=d,this.referralService=p,this.i18n=g,this.userService=u,this.biddingService=h,this.type="register",this.smsTimeRemaining=0,this.getVerifyCodeModalShown=!1,this.showHiddenOption=!1,this.showPassword=!1,this.showConfirmPassword=!1,this.isFailed=!1,this.confirmationValidator=_=>_.value?Object.is(_.value,this.form.controls.password.value)?{}:{confirm:!0,error:!0}:{required:!0},this.isOpenQrScanModal=!1,this.initForm()}onShiftKeydownHandler(t){this.showHiddenOption||(this.showHiddenOption=this.userService.isDebugMode)}onShiftKeyupHandler(t){this.showHiddenOption&&(this.showHiddenOption=!1)}ngOnInit(){this.getVerifyCode()}validate(){this.form.valid?this.submit():(Object.values(this.form.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))}),this.onFailed())}getVerifyCode(){this.verifyCode=null,this.authApiService.getVerifyCode(R.f.Login).pipe((0,V.R)(this.destroyStream$)).subscribe(t=>{!t||(this.verifyCode=t,this.form.get("captchaId")?.patchValue(t.captchaId),this.cdr.detectChanges())})}onSelectPhoneCountry(t){t&&this.form.get("mobileArea")?.patchValue(t)}onPhoneNumberChange(t){this.form.get("mobile")?.patchValue(t)}showGetVerifyCodeModal(){this.getVerifyCodeModalShown=!0}getSmsCode(t){const{mobile:n,mobileArea:r}=this.form.value,{captchaId:a}=this.smsVerifyCode;(0,q.le)(t)?this.toastError("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"):(this.getVerifyCodeModalShown=!1,this.authApiService.queryMobileSms({method:R.e.Register,mobileArea:r,mobile:n.toString()},{CAPTCHA_CODE:(t||"").toString(),CAPTCHA_ID:a}).subscribe({next:s=>{7001012!==s.code?8!==s.code?(this.toastSuccess("\u53d1\u9001\u6210\u529f"),K.set(T._h,(Date.now()+6e4).toString()),this.smsTimeRemaining=60,this.startTimeInterval()):this.toastError("\u83b7\u53d6\u9a8c\u8bc1\u7801\u5931\u8d25,\u8bf7\u68c0\u67e5\u683c\u5f0f"):this.toastError("\u624b\u673a\u53f7\u5df2\u5b58\u5728")},error:s=>{this.toastError("\u624b\u673a\u53f7\u5df2\u5b58\u5728"),console.error(s)}}),this.type="sms")}startTimeInterval(){this.timeInterval=setInterval(()=>{this.smsTimeRemaining-=1,this.smsTimeRemaining<1&&clearInterval(this.timeInterval)},1e3)}toastSuccess(t){var n=this;return(0,f.Z)(function*(){yield n.presentToast({position:"bottom",message:t,duration:1e3,icon:"checkmark-circle-outline",color:"success"})})()}toastError(t){var n=this;return(0,f.Z)(function*(){yield n.presentToast({position:"bottom",message:t,icon:"alert-circle-outline",duration:1e3,color:"danger"})})()}presentToast(t){var n=this;return(0,f.Z)(function*(){yield(yield n.toast.create(t)).present()})()}getEmailCode(){if(!this.form.controls.email.valid)return this.form.controls.email.markAsDirty(),void this.form.controls.email.updateValueAndValidity({onlySelf:!0});this.authApiService.SendEmailVerifyCodeParam({email:this.form.value.email,type:"register"}).subscribe(t=>{console.log(t),1001006!==t.code?(this.toastSuccess("\u90ae\u4ef6\u5df2\u53d1\u9001"),this.smsTimeRemaining=60):this.toastError("\u90ae\u7bb1\u5df2\u5b58\u5728")}),this.type="email"}submit(){const t={...this.form.value,type:this.type,recommenderId:this.form?.controls.recommenderId?.getRawValue()?this.form.controls.recommenderId.getRawValue().toString():null};this.authApiService.registerV2({...t,captchaCode:String(this.form.value.captchaCode),mobile:t.mobile?t.mobile.toString():null,email:t.email?t.email:null,password:E()(t.password).toString()}).subscribe(n=>{if(0!==n.code)return this.toastError(n.message),this.onFailed(),void console.log(n.message);this.toastSuccess("\u6ce8\u518c\u6210\u529f"),this.router.navigateByUrl("/auth/login"),(0,S.s$)(T.Kf),(0,S.s$)(T.mX)},n=>{console.log(n),this.toastError(n.message),this.getVerifyCode()})}initForm(){const t=this.activeRoute.snapshot.queryParams,n=t.recommenderId||this.referralService.getRecommenderId()||t.sharerId||this.referralService.getSharerId()||null;this.form=this.fb.group({username:[null,[U.d.userName]],password:[null,[U.d.password]],confirmPassword:[null,[c.kI.required,this.confirmationValidator]],mobileArea:["+86"],mobile:[null],email:[null,U.d.email],verifyCode:[null,[c.kI.required]],captchaCode:[null,[c.kI.required]],recommenderId:[{value:n,disabled:!!n}],captchaId:[null]})}verifyCodeChange(t){console.log("smsVerifyCode",t),this.smsVerifyCode=t}flushCookies(){N.Z.isBrowser&&!this.flushingStatus&&(this.flushingStatus="flushing",(0,L.H)(600).subscribe(()=>{(0,S.s$)(T.Kf),(0,S.s$)(T.mX),this.flushingStatus="success",this.cdr.detectChanges(),this.form.get("recommenderId")?.setValue(null),this.form.get("recommenderId")?.enable(),this.cdr.detectChanges(),(0,L.H)(1500).subscribe(()=>{this.flushingStatus="",this.cdr.detectChanges()})}))}onFailed(){N.Z.isBrowser&&(this.isFailed=!0,this.cdr.detectChanges(),setTimeout(()=>{this.isFailed=!1,this.cdr.detectChanges()},800))}openCamera(t){t.preventDefault(),t.stopPropagation(),this.isOpenQrScanModal=!0}handleQrScanned(t){try{const n=new URL(t.data),r=new URLSearchParams(n.search),a=r.get("sharerId")||r.get("recommenderId");console.log(a),this.isOpenQrScanModal=!1,this.form.get("recommenderId")?.setValue(a),this.cdr.detectChanges()}catch{}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(O.F0),e.Y36(O.gz),e.Y36(c.qu),e.Y36(F.Q),e.Y36(e.sBO),e.Y36(m.yF),e.Y36($.C),e.Y36(v.sK),e.Y36(X.K),e.Y36(W.g))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-register"]],hostBindings:function(t,n){1&t&&e.NdJ("keydown.shift",function(){return n.onShiftKeydownHandler()},!1,e.evT)("keyup.shift",function(){return n.onShiftKeyupHandler()},!1,e.evT)},features:[e.qOj],decls:96,vars:76,consts:[[1,"login-bg","flex","items-start","justify-center","h-full","relative"],[1,"tyqoon-container","w-full","2xl:block","flex","items-center","h-full"],[1,"flex","items-start","mt-11","mb-8","sm:my-5","sm:py-8","w-full"],[1,"flex","items-center","absolute","top-11","sm:top-1/2","left-1/2","-translate-x-1/2","sm:-translate-y-1/2","2xl:left-0","2xl:top-11","2xl:relative","2xl:translate-x-0","2xl:translate-y-0","w-full","2xl:block"],[1,"fade-in","m-auto","h-full","2xl:w-[880px]","2xl:h-[460px]",2,"--duration","700ms","--delay","100ms",3,"src"],[1,"2xl:w-[416px]","m-auto","rounded-xl","relative","w-full","max-w-[566px]"],[1,"px-6","bg-white","rounded-xl","auth-form","pt-3.5","overflow-hidden"],[1,"w-full",3,"formGroup"],[1,"flex","items-center","justify-start","gap-1","relative"],[1,"h-8","w-8","block","absolute","-left-3","cursor-pointer"],[1,"flex","items-center","justify-center","font-bold","text-xl","flex-1"],[1,"py-4"],[1,"flex","flex-col","mb-4","relative"],[1,"flex","items-center"],[1,"flex","items-center","absolute","left-[11px]","z-10"],["viewBox","64 64 896 896","focusable","false","fill","currentColor","width","1em","height","1em","data-icon","user","aria-hidden","true"],["d","M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"],["formControlName","username","username","","maxlength","18","type","text",1,"icon-input","w-full","py-2.5","pl-8","pr-3","border","border-[#d9d9d9]","focus:outline-none","focus:border-[#ffa73b]","focus:shadow-lg","focus:shadow-[#fb881133]","rounded-md","padded-input","overflow-hidden",3,"placeholder"],["class","error-msg mt-1.5 -mb-1.5 ml-1 text-sm",4,"ngIf"],[1,"flex","items-center","relative"],["viewBox","64 64 896 896","focusable","false","fill","currentColor","width","1em","height","1em","data-icon","lock","aria-hidden","true"],["d","M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"],["formControlName","password","password","","maxlength","30",1,"icon-input","w-full","py-2.5","pl-8","pr-3","border","border-[#d9d9d9]","focus:outline-none","focus:border-[#ffa73b]","focus:shadow-lg","focus:shadow-[#fb881133]","rounded-md","padded-input","overflow-hidden",3,"placeholder","type"],[1,"opacity-40","cursor-pointer","z-10","absolute","right-2","top-1/2","transform","-translate-y-1/2",3,"click"],[3,"ngTemplateOutlet"],["formControlName","confirmPassword","confirmPassword","","maxlength","30",1,"icon-input","w-full","py-2.5","pl-8","pr-3","border","border-[#d9d9d9]","focus:outline-none","focus:border-[#ffa73b]","focus:shadow-lg","focus:shadow-[#fb881133]","rounded-md","padded-input","overflow-hidden",3,"placeholder","type"],[1,"mb-4"],[1,"flex","items-stretch"],[1,"flex","items-center","w-full"],["type","text","formControlName","captchaCode","inputmode","decimal","maxlength","4",1,"normal-input","w-full","py-2.5","px-3","border","border-[#d9d9d9]","focus:outline-none","focus:border-[#ffa73b]","focus:shadow-lg","focus:shadow-[#fb881133]","rounded-l-md",3,"placeholder"],[1,"flex","items-center","justify-end","border","border-l-0","border-[#d9d9d9]","max-w-[120px]","w-full","h-[50px]","cursor-pointer","relative","bg-[#fafafa]","rounded-r-md"],[4,"ngIf","ngIfElse"],["loader",""],[3,"onSelectPhoneCountry","onPhoneNumberChange"],[1,"flex","flex-col","items-start","mb-4","relative"],["formControlName","email","email","","type","email",1,"normal-input","w-full","py-2.5","px-3","border","border-[#d9d9d9]","focus:outline-none","focus:border-[#ffa73b]","focus:shadow-lg","focus:shadow-[#fb881133]","rounded-md",3,"placeholder"],[1,"flex","items-start"],["formControlName","verifyCode","type","text","maxlength","6",1,"normal-input","w-full","py-2.5","pl-8","pr-3","border","border-[#d9d9d9]","focus:outline-none","focus:border-[#ffa73b]","focus:shadow-lg","focus:shadow-[#fb881133]","rounded-md",3,"placeholder"],[1,"flex","items-start","ml-4"],["size","default","color","warning",1,"text-[#9c9c9c]","h-10",3,"disabled","click"],[1,"flex","items-center","mb-4","relative"],["viewBox","64 64 896 896","focusable","false","fill","currentColor","width","1em","height","1em","data-icon","share-alt","aria-hidden","true"],["d","M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"],["formControlName","recommenderId","type","number",1,"icon-input","w-full","py-2.5","pl-8","pr-3","border","border-[#d9d9d9]","focus:outline-none","focus:border-[#ffa73b]","focus:shadow-lg","focus:shadow-[#fb881133]","rounded-md",2,"--padding-end","40px",3,"placeholder"],["fill","clear","slot","end","aria-label","Show/hide",1,"absolute","right-0.5","rounded-sm","p-1","z-50","!pointer-events-auto","hover:bg-black/10",3,"touchstart","click"],["src","/assets/svgs/qr-icon.svg","alt","",1,"h-8"],[4,"ngIf"],[1,"w-full","mb-2"],["type","button","value","",1,"login-btn","rounded-[5px]","px-[26px]","py-2.5","w-full","text-lg","font-medium",3,"click"],[1,"flex","items-center","text-base","font-medium","justify-center","gap-2","flex-wrap"],["routerLink","/auth/login",1,"text-base","text-[#fb8811]","text-center","py-2"],[3,"isOpen","isOpenChange","verifyCodeChange","onOk"],[3,"isOpen","onScanned","isOpenChange",4,"isBrowser"],["eyeClose",""],["eyeOpen",""],[1,"error-msg","mt-1.5","-mb-1.5","ml-1","text-sm"],[1,"cursor-pointer","w-full","h-full",3,"src","click"],[1,"absolute","hidden","lg:flex","border-2","rounded-lg","bg-blue-500","text-white","border-solid","border-blue-400","px-1","sm:px-2","2xl:px-4","py-px","mr-2","text-sm","w-20","-right-24","justify-center",3,"click"],["flushing",""],[1,"text-white","mx-auto","block","scale-75","mt-0.5","pt-px","mb-0.5","h-4"],[3,"isOpen","onScanned","isOpenChange"],["xmlns","http://www.w3.org/2000/svg","fill","#000000","width","800px","height","800px","viewBox","0 0 16 16",1,"eye-icon"],["d","M8 2.5a9.77 9.77 0 0 0-2.53.32l1 1.05A8.78 8.78 0 0 1 8 3.75 6.91 6.91 0 0 1 13.4 6a7.2 7.2 0 0 1 1.27 2 7.2 7.2 0 0 1-1.27 2c-.12.13-.24.26-.37.38l.89.89A8.24 8.24 0 0 0 16 8a8.11 8.11 0 0 0-8-5.5zm5 9.56-.9-.9-6.97-6.91-1-1-1.19-1.19-.88.88 1 1A8.25 8.25 0 0 0 0 8a8.11 8.11 0 0 0 8 5.5 9.05 9.05 0 0 0 3.82-.79l1.24 1.23.88-.88-1-1zM6.66 7.54l1.67 1.67a1.47 1.47 0 0 1-.36 0A1.35 1.35 0 0 1 6.55 8a1.07 1.07 0 0 1 .11-.46zM8 12.25A6.91 6.91 0 0 1 2.6 10a7.2 7.2 0 0 1-1.27-2A7.2 7.2 0 0 1 2.6 6 6.49 6.49 0 0 1 4 4.84l1.74 1.79A2.33 2.33 0 0 0 5.3 8 2.59 2.59 0 0 0 8 10.5a2.78 2.78 0 0 0 1.32-.33l1.58 1.58a8 8 0 0 1-2.9.5z"],["d","M8 5.5A2.59 2.59 0 0 0 5.33 8 2.59 2.59 0 0 0 8 10.5 2.59 2.59 0 0 0 10.67 8 2.59 2.59 0 0 0 8 5.5zm0 3.75A1.35 1.35 0 0 1 6.58 8 1.35 1.35 0 0 1 8 6.75 1.35 1.35 0 0 1 9.42 8 1.35 1.35 0 0 1 8 9.25z"],["d","M8 2.5A8.11 8.11 0 0 0 0 8a8.11 8.11 0 0 0 8 5.5A8.11 8.11 0 0 0 16 8a8.11 8.11 0 0 0-8-5.5zm5.4 7.5A6.91 6.91 0 0 1 8 12.25 6.91 6.91 0 0 1 2.6 10a7.2 7.2 0 0 1-1.27-2A7.2 7.2 0 0 1 2.6 6 6.91 6.91 0 0 1 8 3.75 6.91 6.91 0 0 1 13.4 6a7.2 7.2 0 0 1 1.27 2 7.2 7.2 0 0 1-1.27 2z"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.ALo(5,"async"),e.qZA(),e.TgZ(6,"div",5)(7,"div",6)(8,"form",7)(9,"div",8),e._UZ(10,"app-top-back-button",9),e.TgZ(11,"div",10),e._uU(12),e.ALo(13,"translate"),e.qZA()(),e.TgZ(14,"div",11)(15,"div",12)(16,"div",13)(17,"span",14),e.O4$(),e.TgZ(18,"svg",15),e._UZ(19,"path",16),e.qZA()(),e.kcU(),e._UZ(20,"ion-input",17),e.ALo(21,"translate"),e._UZ(22,"div"),e.qZA(),e.YNc(23,pe,3,3,"div",18),e.qZA(),e.TgZ(24,"div",12)(25,"div",19)(26,"span",14),e.O4$(),e.TgZ(27,"svg",20),e._UZ(28,"path",21),e.qZA()(),e.kcU(),e._UZ(29,"ion-input",22),e.ALo(30,"translate"),e.TgZ(31,"div",23),e.NdJ("click",function(){return n.showPassword=!n.showPassword}),e.GkF(32,24),e.qZA()(),e.YNc(33,me,3,3,"div",18),e.qZA(),e.TgZ(34,"div",12)(35,"div",19)(36,"span",14),e.O4$(),e.TgZ(37,"svg",20),e._UZ(38,"path",21),e.qZA()(),e.kcU(),e._UZ(39,"ion-input",25),e.ALo(40,"translate"),e.TgZ(41,"div",23),e.NdJ("click",function(){return n.showConfirmPassword=!n.showConfirmPassword}),e.GkF(42,24),e.qZA()(),e.YNc(43,ue,3,3,"div",18),e.qZA(),e.TgZ(44,"div",26)(45,"div",27)(46,"div",28),e._UZ(47,"ion-input",29),e.ALo(48,"translate"),e.qZA(),e.TgZ(49,"div",30),e.YNc(50,fe,2,1,"ng-container",31),e.YNc(51,ge,1,0,"ng-template",null,32,e.W1O),e.qZA()()(),e.TgZ(53,"div",26)(54,"app-phone-control",33),e.NdJ("onSelectPhoneCountry",function(a){return n.onSelectPhoneCountry(a)})("onPhoneNumberChange",function(a){return n.onPhoneNumberChange(a)}),e.qZA()(),e.TgZ(55,"div",34),e._UZ(56,"ion-input",35),e.ALo(57,"translate"),e.YNc(58,he,3,3,"div",18),e.qZA(),e.TgZ(59,"div",26)(60,"div",36),e._UZ(61,"ion-input",37),e.ALo(62,"translate"),e.TgZ(63,"div",38)(64,"ion-button",39),e.NdJ("click",function(){return n.showGetVerifyCodeModal()}),e._uU(65),e.ALo(66,"translate"),e.qZA(),e.TgZ(67,"ion-button",39),e.NdJ("click",function(){return n.getEmailCode()}),e._uU(68),e.ALo(69,"translate"),e.qZA()()()(),e.TgZ(70,"div",40)(71,"span",14),e.O4$(),e.TgZ(72,"svg",41),e._UZ(73,"path",42),e.qZA()(),e.kcU(),e.TgZ(74,"ion-input",43),e.ALo(75,"translate"),e.TgZ(76,"button",44),e.NdJ("touchstart",function(a){return n.openCamera(a)})("click",function(a){return n.openCamera(a)}),e._UZ(77,"img",45),e.qZA()(),e.YNc(78,ve,5,2,"ng-container",46),e.qZA(),e.TgZ(79,"div",47)(80,"button",48),e.NdJ("click",function(){return n.validate()}),e._uU(81),e.ALo(82,"translate"),e.qZA()(),e.TgZ(83,"div",49)(84,"span"),e._uU(85),e.ALo(86,"translate"),e.qZA(),e.TgZ(87,"a",50),e._uU(88),e.ALo(89,"translate"),e.qZA()()()()()()()()(),e.TgZ(90,"app-get-verify-code",51),e.NdJ("isOpenChange",function(a){return n.getVerifyCodeModalShown=a})("verifyCodeChange",function(a){return n.verifyCodeChange(a)})("onOk",function(a){return n.getSmsCode(a)}),e.qZA(),e.YNc(91,be,1,1,"app-qr-scan-modal",52),e.YNc(92,xe,2,0,"ng-template",null,53,e.W1O),e.YNc(94,ye,3,0,"ng-template",null,54,e.W1O)),2&t){const r=e.MAs(52),a=e.MAs(93),s=e.MAs(95);let d,p,g,u,h,_,b,x,y,w,Z,k,P;e.xp6(4),e.Q6J("src",e.lcZ(5,48,n.biddingService.isBiddingMode$)?"assets/images/login-banner-bidding.png":"assets/images/login-banner-shopping.png",e.LSH),e.xp6(3),e.ekj("failed",n.isFailed),e.xp6(1),e.Q6J("formGroup",n.form),e.xp6(4),e.hij(" ",e.lcZ(13,50,"register-page-title")," "),e.xp6(2),e.Q6J("@slideLeftRight",void 0),e.xp6(6),e.ekj("error-field",(null==(d=n.form.get("username"))?null:d.invalid)&&((null==(d=n.form.get("username"))?null:d.dirty)||(null==(d=n.form.get("username"))?null:d.touched))),e.s9C("placeholder",e.lcZ(21,52,"register-page-username")),e.xp6(3),e.Q6J("ngIf",(null==(p=n.form.get("username"))?null:p.invalid)&&((null==(p=n.form.get("username"))?null:p.dirty)||(null==(p=n.form.get("username"))?null:p.touched))),e.xp6(6),e.ekj("error-field",(null==(g=n.form.get("password"))?null:g.invalid)&&((null==(g=n.form.get("password"))?null:g.dirty)||(null==(g=n.form.get("password"))?null:g.touched))),e.s9C("placeholder",e.lcZ(30,54,"register-page-password")),e.Q6J("type",n.showPassword?"text":"password"),e.xp6(3),e.Q6J("ngTemplateOutlet",n.showPassword?a:s),e.xp6(1),e.Q6J("ngIf",(null==(u=n.form.get("password"))?null:u.invalid)&&((null==(u=n.form.get("password"))?null:u.dirty)||(null==(u=n.form.get("password"))?null:u.touched))),e.xp6(6),e.ekj("error-field",(null==(h=n.form.get("confirmPassword"))?null:h.invalid)&&((null==(h=n.form.get("confirmPassword"))?null:h.dirty)||(null==(h=n.form.get("confirmPassword"))?null:h.touched))),e.s9C("placeholder",e.lcZ(40,56,"register-page-password-confirm")),e.Q6J("type",n.showConfirmPassword?"text":"password"),e.xp6(3),e.Q6J("ngTemplateOutlet",n.showConfirmPassword?a:s),e.xp6(1),e.Q6J("ngIf",(null==(_=n.form.get("confirmPassword"))?null:_.invalid)&&((null==(_=n.form.get("confirmPassword"))?null:_.dirty)||(null==(_=n.form.get("confirmPassword"))?null:_.touched))),e.xp6(4),e.ekj("error-field",(null==(b=n.form.get("captchaCode"))?null:b.invalid)&&((null==(b=n.form.get("captchaCode"))?null:b.dirty)||(null==(b=n.form.get("captchaCode"))?null:b.touched))),e.s9C("placeholder",e.lcZ(48,58,"register-page-code")),e.xp6(2),e.ekj("error-field",(null==(x=n.form.get("captchaCode"))?null:x.invalid)&&((null==(x=n.form.get("captchaCode"))?null:x.dirty)||(null==(x=n.form.get("captchaCode"))?null:x.touched))),e.xp6(1),e.Q6J("ngIf",n.verifyCode)("ngIfElse",r),e.xp6(6),e.ekj("error-field",(null==(y=n.form.get("email"))?null:y.invalid)&&((null==(y=n.form.get("email"))?null:y.dirty)||(null==(y=n.form.get("email"))?null:y.touched))),e.s9C("placeholder",e.lcZ(57,60,"register-page-email")),e.xp6(2),e.Q6J("ngIf",(null==(w=n.form.get("email"))?null:w.invalid)&&((null==(w=n.form.get("email"))?null:w.dirty)||(null==(w=n.form.get("email"))?null:w.touched))),e.xp6(3),e.ekj("error-field",(null==(Z=n.form.get("verifyCode"))?null:Z.invalid)&&((null==(Z=n.form.get("verifyCode"))?null:Z.dirty)||(null==(Z=n.form.get("verifyCode"))?null:Z.touched))),e.s9C("placeholder",e.lcZ(62,62,"register-page-code")),e.xp6(3),e.Q6J("disabled",n.smsTimeRemaining>0||!(null!=(k=n.form.get("mobile"))&&k.value)||(null==(k=n.form.get("mobile"))?null:k.invalid)),e.xp6(1),e.hij(" ",e.lcZ(66,64,"register-get-verification-code")," "),e.xp6(2),e.Q6J("disabled",n.smsTimeRemaining>0||!(null!=(P=n.form.get("email"))&&P.value)||(null==(P=n.form.get("email"))?null:P.invalid)),e.xp6(1),e.hij(" ",e.lcZ(69,66,"register-email-cta")," "),e.xp6(6),e.s9C("placeholder",e.lcZ(75,68,"register-fill-inviter")),e.xp6(4),e.Q6J("ngIf",n.showHiddenOption),e.xp6(2),e.ekj("disabled",n.form.invalid),e.xp6(1),e.hij(" ",e.lcZ(82,70,"register-page-button")," "),e.xp6(4),e.Oqu(e.lcZ(86,72,"have-an-account")),e.xp6(3),e.hij(" ",e.lcZ(89,74,"register-page-login button")," "),e.xp6(2),e.Q6J("isOpen",n.getVerifyCodeModalShown)}},dependencies:[C.O5,C.tP,O.yS,ee.b,m.YG,m.pK,m.as,m.j9,m.Fo,c._Y,c.JJ,c.JL,c.nD,c.on,c.sg,c.u,H.u,te.E,ne.h,oe.r,Y,ce,C.Ov,v.X$],styles:["ion-input.has-focus[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(255 126 24 / var(--tw-border-opacity));--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-shadow-color: #fb881133;--tw-shadow: var(--tw-shadow-colored)}ion-input.icon-input[_ngcontent-%COMP%]{--padding-start: 2rem;--padding-end: .75rem}ion-input.normal-input[_ngcontent-%COMP%]{--padding-start: 8px;--padding-end: 8px;--padding-top: 12px;--padding-bottom: 12px}ion-input.padded-input[_ngcontent-%COMP%]{--padding-top: 12px;--padding-bottom: 12px}ion-input[_ngcontent-%COMP%]     input[type=number]::-webkit-inner-spin-button, ion-input[_ngcontent-%COMP%]     input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}app-phone-control[_ngcontent-%COMP%]     .iti, app-phone-control[_ngcontent-%COMP%]     input{margin-bottom:0;border-radius:.375rem}app-phone-control[_ngcontent-%COMP%]     .iti__selected-flag{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}.auth-form[_ngcontent-%COMP%]{box-shadow:0 0 10px 10px #00000017}@media (min-width: 1440px){.auth-form[_ngcontent-%COMP%]{width:392px}}.auth-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{background:#fb8811;color:#fff;border:1px solid #fb8811}.auth-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover{background:#ffa73b}.auth-form[_ngcontent-%COMP%]   .login-btn.disabled[_ngcontent-%COMP%]{background:#f5f5f5;color:#9c9c9c;border-color:#d9d9d9;cursor:not-allowed}.auth-form.failed[_ngcontent-%COMP%]{animation:angry-shake .4s}.auth-form.failed[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{background-color:red;border-color:red;color:#fff;opacity:1}.auth-form[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%]{color:red}.auth-form[_ngcontent-%COMP%]   .error-field[_ngcontent-%COMP%]{border-color:red}.eye-icon[_ngcontent-%COMP%]{width:24px;height:46px}.page-wrapper[_ngcontent-%COMP%]{background-image:linear-gradient(345deg,#267dff,#053987,#2270ff)}.page-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{max-width:850px}@keyframes angry-shake{0%{transform:translate(4px,1px) rotate(0)}10%{transform:translate(-1px,-4px) rotate(-1deg)}20%{transform:translate(-6px) rotate(1deg)}30%{transform:translateY(4px) rotate(0)}40%{transform:translate(2px,-2px) rotate(1deg)}50%{transform:translate(-2px,4px) rotate(-1deg)}60%{transform:translate(-6px,2px) rotate(0)}70%{transform:translate(4px,2px) rotate(-1deg)}80%{transform:translate(-2px,-2px) rotate(1deg)}90%{transform:translate(4px,4px) rotate(0)}to{transform:translate(2px,-4px) rotate(-1deg)}}"],data:{animation:[(0,M.X$)("slideLeftRight",[(0,M.eR)(":enter",[(0,M.oB)({transform:"translateX(-100%)",opacity:0}),(0,M.jt)("200ms ease-out",(0,M.oB)({transform:"translateX(0%)",opacity:1}))])])]},changeDetection:0}),o})()}];let Ze=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[O.Bz.forChild(we),O.Bz]}),o})();var Oe=l(7492);let Te=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[C.ez,Ze,Oe.R,m.Pc,c.UX,z.m,v.aw,Y]}),o})()}}]);