"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[510],{10510:(se,Z,i)=>{i.r(Z),i.d(Z,{LoginModule:()=>ie});var b=i(36895),h=i(7507),f=i(15861),a=i(24006),I=i(5565),v=i(82722),C=i(26704),O=i(49769),A=i(94542),L=i(21075),x=i(24837),s=i(37340),_=i(49808),y=i(5963),e=i(94650),T=i(10960);let k=(()=>{class n{constructor(){}setLoginForm(o,t,r){switch(o){case"account":default:t.addControl("username",r.control(null,[a.kI.required])),t.addControl("password",r.control(null,[a.kI.required])),t.addControl("captchaId",r.control(null,[a.kI.required])),t.addControl("captchaCode",r.control(null,[a.kI.required])),t.addControl("remember",r.control(!0,[a.kI.requiredTrue])),t.removeControl("mobileArea"),t.removeControl("mobile"),t.removeControl("smsCode"),t.updateValueAndValidity();break;case"mobile":t.addControl("mobileArea",r.control(null,[a.kI.required])),t.addControl("mobile",r.control(null,[a.kI.required])),t.addControl("smsCode",r.control(null,[a.kI.required])),t.removeControl("username"),t.removeControl("password"),t.removeControl("captchaId"),t.removeControl("captchaCode"),t.removeControl("remember"),t.updateValueAndValidity()}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var P=i(45329),m=i(95133),w=i(54463),U=i(56889),J=i(32482),V=i(85931),N=i(90147),F=i(7228);function j(n,l){if(1&n){const o=e.EpF();e.ynx(0),e.TgZ(1,"img",47),e.NdJ("click",function(){e.CHM(o);const r=e.oxw(2);return e.KtG(r.getVerifyCode())}),e.qZA(),e.BQk()}if(2&n){const o=e.oxw(2);e.xp6(1),e.Q6J("src",o.verifyCode.picture,e.LSH)}}function q(n,l){1&n&&e._UZ(0,"app-orange-loader")}function Y(n,l){1&n&&(e.TgZ(0,"span",48),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.Q6J("@upHide",void 0),e.xp6(1),e.Oqu(e.lcZ(2,2,"login-page-login")))}function H(n,l){1&n&&(e.TgZ(0,"div",49),e._UZ(1,"ion-icon",50),e.TgZ(2,"span"),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&n&&(e.Q6J("@upHide",void 0),e.xp6(3),e.Oqu(e.lcZ(4,2,"login-failed")))}function Q(n,l){1&n&&e._UZ(0,"app-loading-animation",51)}function B(n,l){1&n&&e._UZ(0,"ion-icon",52),2&n&&e.Q6J("@upHide",void 0)}function z(n,l){if(1&n){const o=e.EpF();e.TgZ(0,"div",16)(1,"div",17)(2,"span",18),e.O4$(),e.TgZ(3,"svg",19),e._UZ(4,"path",20),e.qZA()(),e.kcU(),e._UZ(5,"ion-input",21),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",17)(8,"span",18),e.O4$(),e.TgZ(9,"svg",22),e._UZ(10,"path",23),e.qZA()(),e.kcU(),e._UZ(11,"ion-input",24),e.ALo(12,"translate"),e.TgZ(13,"div",25),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.showPassword=!r.showPassword)}),e.GkF(14,26),e.qZA()(),e.TgZ(15,"div",27)(16,"div",28),e._UZ(17,"ion-input",29),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"div",30),e.YNc(20,j,2,1,"ng-container",31),e.YNc(21,q,1,0,"ng-template",null,32,e.W1O),e.qZA()(),e.TgZ(23,"div",33)(24,"div",34),e._UZ(25,"input",35)(26,"span",36),e.qZA(),e.TgZ(27,"label",37),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"a",38),e._uU(31),e.ALo(32,"translate"),e.qZA()(),e.TgZ(33,"div",39)(34,"button",40),e.YNc(35,Y,3,4,"span",41),e.YNc(36,H,5,4,"div",42),e.YNc(37,Q,1,0,"app-loading-animation",43),e.YNc(38,B,1,1,"ion-icon",44),e.qZA()(),e.TgZ(39,"div",45)(40,"a",46),e._uU(41),e.ALo(42,"translate"),e.qZA()()()}if(2&n){const o=e.MAs(22),t=e.oxw(),r=e.MAs(22),g=e.MAs(24);let d,c,p,u;e.Q6J("@slideLeftRight",void 0),e.xp6(5),e.ekj("error-field",!(null!=(d=t.form.get("username"))&&d.value)&&((null==(d=t.form.get("username"))?null:d.dirty)||(null==(d=t.form.get("username"))?null:d.touched))),e.s9C("placeholder",e.lcZ(6,25,"register-page-username")),e.xp6(6),e.ekj("error-field",!(null!=(c=t.form.get("password"))&&c.value)&&((null==(c=t.form.get("password"))?null:c.dirty)||(null==(c=t.form.get("password"))?null:c.touched))),e.s9C("placeholder",e.lcZ(12,27,"register-page-password")),e.Q6J("type",t.showPassword?"text":"password"),e.xp6(3),e.Q6J("ngTemplateOutlet",t.showPassword?r:g),e.xp6(3),e.ekj("error-field",!(null!=(p=t.form.get("captchaCode"))&&p.value)&&((null==(p=t.form.get("captchaCode"))?null:p.dirty)||(null==(p=t.form.get("captchaCode"))?null:p.touched))),e.s9C("placeholder",e.lcZ(18,29,"register-page-code")),e.xp6(2),e.ekj("error-field",!(null!=(u=t.form.get("captchaCode"))&&u.value)&&((null==(u=t.form.get("captchaCode"))?null:u.dirty)||(null==(u=t.form.get("captchaCode"))?null:u.touched))),e.xp6(1),e.Q6J("ngIf",t.verifyCode)("ngIfElse",o),e.xp6(8),e.hij(" ",e.lcZ(29,31,"login-page-remember")," "),e.xp6(3),e.Oqu(e.lcZ(32,33,"login-page-forgot-password")),e.xp6(3),e.ekj("disabled",t.isSubmitDisabled),e.xp6(1),e.Q6J("ngIf","Inputing"===t.progress),e.xp6(1),e.Q6J("ngIf","Error"===t.progress),e.xp6(1),e.Q6J("ngIf","Loading"===t.progress),e.xp6(1),e.Q6J("ngIf","Success"==t.progress),e.xp6(3),e.hij(" ",e.lcZ(42,35,"login-page-sign-up")," ")}}const R=function(n){return{time:n}};function D(n,l){if(1&n){const o=e.EpF();e.TgZ(0,"button",60),e.NdJ("click",function(){e.CHM(o);const r=e.oxw(2);return e.KtG(r.getSmsCode())}),e._uU(1),e.ALo(2,"translate"),e.ALo(3,"translate"),e.qZA()}if(2&n){const o=l.ngLet,t=e.oxw(2);let r;e.ekj("error-field",!(null!=(r=t.form.get("smsCode"))&&r.value)&&((null==(r=t.form.get("smsCode"))?null:r.dirty)||(null==(r=t.form.get("smsCode"))?null:r.touched))),e.Q6J("disabled",o>0),e.xp6(1),e.hij(" ",o?e.xi3(2,4,"please-wait-time",e.VKq(9,R,o)):e.lcZ(3,7,"order-payment-retrieve-password-get-verification-code")," ")}}function $(n,l){1&n&&(e.TgZ(0,"span",48),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.Q6J("@upHide",void 0),e.xp6(1),e.Oqu(e.lcZ(2,2,"login-page-login")))}function E(n,l){1&n&&(e.TgZ(0,"div",49),e._UZ(1,"ion-icon",50),e.TgZ(2,"span"),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&n&&(e.Q6J("@upHide",void 0),e.xp6(3),e.Oqu(e.lcZ(4,2,"login-failed")))}function G(n,l){1&n&&e._UZ(0,"app-loading-animation",51)}function K(n,l){1&n&&e._UZ(0,"ion-icon",52),2&n&&e.Q6J("@upHide",void 0)}function X(n,l){if(1&n){const o=e.EpF();e.TgZ(0,"div",16)(1,"app-phone-control",53),e.NdJ("onSelectPhoneCountry",function(r){e.CHM(o);const g=e.oxw();return e.KtG(g.onSelectPhoneCountry(r))})("onPhoneNumberChange",function(r){e.CHM(o);const g=e.oxw();return e.KtG(g.onPhoneNumberChange(r))}),e.qZA(),e.TgZ(2,"div",33),e._UZ(3,"ion-input",54),e.ALo(4,"translate"),e.YNc(5,D,4,11,"button",55),e.ALo(6,"async"),e.qZA(),e.TgZ(7,"div",56)(8,"a",57),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"a",58),e._uU(12),e.ALo(13,"translate"),e.qZA()(),e.TgZ(14,"button",59),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.submitMobile())}),e.YNc(15,$,3,4,"span",41),e.YNc(16,E,5,4,"div",42),e.YNc(17,G,1,0,"app-loading-animation",43),e.YNc(18,K,1,1,"ion-icon",44),e.qZA()()}if(2&n){const o=e.oxw();let t;e.Q6J("@slideRightLeft",void 0),e.xp6(3),e.ekj("error-field",!(null!=(t=o.form.get("smsCode"))&&t.value)&&((null==(t=o.form.get("smsCode"))?null:t.dirty)||(null==(t=o.form.get("smsCode"))?null:t.touched))),e.s9C("placeholder",e.lcZ(4,13,"login-page-verification-code")),e.xp6(2),e.Q6J("ngLet",e.lcZ(6,15,o.userService.smsTimeRemaining$)),e.xp6(4),e.Oqu(e.lcZ(10,17,"footer-sign-up")),e.xp6(3),e.Oqu(e.lcZ(13,19,"login-page-forgot-password")),e.xp6(2),e.ekj("disabled",o.isMobileSubmitDisabled),e.xp6(1),e.Q6J("ngIf","Inputing"===o.progress),e.xp6(1),e.Q6J("ngIf","Error"===o.progress),e.xp6(1),e.Q6J("ngIf","Loading"===o.progress),e.xp6(1),e.Q6J("ngIf","Success"==o.progress)}}function W(n,l){1&n&&(e.O4$(),e.TgZ(0,"svg",61),e._UZ(1,"path",62),e.qZA())}function ee(n,l){1&n&&(e.O4$(),e.TgZ(0,"svg",61),e._UZ(1,"path",63)(2,"path",64),e.qZA())}const te=[{path:"",component:(()=>{class n extends I.V{constructor(o,t,r,g,d,c,p,u,ae,le){super(),this.fb=o,this.loginService=t,this.loginFormService=r,this.userService=g,this.router=d,this.cdr=c,this.route=p,this.toast=u,this.i18n=ae,this.biddingService=le,this.loginType="account",this.showPassword=!1,this.loginFailed=!1,this.progress="Inputing",this.initForm();let M={};this.form.valueChanges.subscribe(S=>{S.remember?(M={username:(S.username||"").trim()},(0,L.d8)("loginInfo",btoa(JSON.stringify(M)))):(0,L.s$)("loginInfo")})}get isSubmitDisabled(){const o=this.form.value;return!o.username||!o.password||!o.captchaCode}get isMobileSubmitDisabled(){const o=this.form.value;return!o.mobile||!o.smsCode}ngOnInit(){this.userService.userInfo$.next(null),this.getVerifyCode(),this.loginFormService.setLoginForm("account",this.form,this.fb),this.userService.initVerificationTimer(),this.form=this.fb.group({username:[null],password:[null],captchaId:[null],captchaCode:[null],remember:[!0],mobileArea:["+86"],mobile:[null,[a.kI.required,A.d.phone]],smsCode:[null]})}ngOnDestroy(){super.ngOnDestroy(),this.userService.clearVerificationTimer(C.R4.SMS)}toastError(o){var t=this;return(0,f.Z)(function*(){yield t.presentToast({position:"bottom",message:o,icon:"alert-circle-outline",duration:1e3,color:"danger"})})()}toastSuccess(o){var t=this;return(0,f.Z)(function*(){yield t.presentToast({position:"bottom",message:o,duration:1e3,icon:"checkmark-circle-outline",color:"success"})})()}presentToast(o){var t=this;return(0,f.Z)(function*(){yield(yield t.toast.create(o)).present()})()}switchLoginType(o){this.loginType=o,this.loginFormService.setLoginForm(o,this.form,this.fb)}onSelectPhoneCountry(o){o&&this.form.get("mobileArea")?.patchValue(o)}onPhoneNumberChange(o){this.form.get("mobile")?.patchValue(o)}getVerifyCode(){this.verifyCode=null,this.loginService.getVerifyCode(C.fi.Login).pipe((0,v.R)(this.destroyStream$)).subscribe(o=>{!o||(this.verifyCode=o,this.form.get("captchaId")?.patchValue(o.captchaId),this.cdr.detectChanges())})}getSmsCode(){const{mobile:o,mobileArea:t}=this.form.value;this.loginService.getSmsCode(C.eo.LoginByMobilePhone,t||"+86",o.toString()).pipe((0,v.R)(this.destroyStream$)).subscribe(r=>{0===r.code?(this.userService.startVerificationTimer(C.R4.SMS,60,!0),this.toastSuccess(this.i18n.instant("register-alert-email-header"))):this.toastError(r.message)})}submit(){var o=this;return(0,f.Z)(function*(){if("Inputing"!==o.progress)return;const t=o.form.getRawValue();if(o.isSubmitDisabled)return t.username||(o.form.controls.username.markAsDirty(),o.form.controls.username.updateValueAndValidity({onlySelf:!0})),t.password||(o.form.controls.password.markAsDirty(),o.form.controls.password.updateValueAndValidity({onlySelf:!0})),t.captchaCode||(o.form.controls.captchaCode.markAsDirty(),o.form.controls.captchaCode.updateValueAndValidity({onlySelf:!0})),void o.loginHasFailed();o.progress="Loading",o.cdr.detectChanges(),x.Z.isBrowser&&(yield(0,_.n)((0,y.H)(260))),o.loginService.login({...t,source:"web",password:O(t.password).toString(),username:t.username?.trim()}).pipe((0,v.R)(o.destroyStream$)).subscribe(r=>{o.login(r)})})()}submitMobile(){var o=this;return(0,f.Z)(function*(){if("Inputing"!==o.progress)return;const t=o.form.value;if(o.isMobileSubmitDisabled)return t.mobile||(o.form.controls.mobile.markAsDirty(),o.form.controls.mobile.updateValueAndValidity({onlySelf:!0})),t.smsCode||(o.form.controls.smsCode.markAsDirty(),o.form.controls.smsCode.updateValueAndValidity({onlySelf:!0})),void o.loginHasFailed();o.progress="Loading",o.cdr.detectChanges(),x.Z.isBrowser&&(yield(0,_.n)((0,y.H)(260))),o.loginService.loginWithMobile({...t,mobile:t.mobile.toString(),smsCode:t.smsCode.toString()}).pipe((0,v.R)(o.destroyStream$)).subscribe(r=>{o.login(r)})})()}initForm(){this.form=this.fb.group({username:[null],password:[null],captchaId:[null],captchaCode:[null],remember:[!0],mobileArea:["+86"],mobile:[null,[a.kI.required,A.d.phone]],smsCode:[null]})}login(o){var t=this;return(0,f.Z)(function*(){if(console.log(o),!o.body.data)return t.loginHasFailed(),t.toastError(o.body.message),t.getVerifyCode(),void(x.Z.isBrowser&&(t.progress="Error",t.cdr.detectChanges(),(0,y.H)(1e3).subscribe(()=>{t.progress="Inputing",t.cdr.detectChanges()})));t.progress="Success",t.cdr.detectChanges(),x.Z.isBrowser&&(yield(0,_.n)((0,y.H)(520))),t.userService.setToken(o.headers.get("token")),setTimeout(()=>{t.userService.setUserInfo(o.body.data),t.userService.updateUserInfo();const r=t.route.snapshot.queryParamMap.get("back")||"/";t.router.navigateByUrl(decodeURIComponent(r))},0)})()}loginHasFailed(){x.Z.isBrowser&&(this.loginFailed=!0,this.cdr.detectChanges(),setTimeout(()=>{this.loginFailed=!1,this.cdr.detectChanges()},800))}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(a.qu),e.Y36(T.r),e.Y36(k),e.Y36(P.K),e.Y36(h.F0),e.Y36(e.sBO),e.Y36(h.gz),e.Y36(m.yF),e.Y36(w.sK),e.Y36(U.g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],features:[e.qOj],decls:25,vars:18,consts:[[1,"login-bg","flex","items-start","justify-center","h-full","relative"],[1,"tyqoon-container","w-full","2xl:block","flex","items-center","h-full"],[1,"flex","items-start","mt-11","mb-2","sm:my-12","2xl:py-8","w-full"],[1,"flex","items-center","absolute","top-11","sm:top-1/2","left-1/2","-translate-x-1/2","sm:-translate-y-1/2","2xl:left-0","2xl:top-0","2xl:relative","2xl:translate-x-0","2xl:translate-y-0","w-full","2xl:block"],[1,"fade-in","m-auto","h-full","2xl:w-[880px]","2xl:h-[460px]",2,"--duration","700ms","--delay","100ms",3,"src"],[1,"2xl:w-[416px]","m-auto","rounded-xl","relative","w-full","max-w-[566px]"],[1,"px-6","bg-white","rounded-xl","auth-form","overflow-hidden"],[1,"w-full",3,"formGroup","submit"],[1,"flex","items-center","justify-center","border-b","border-b-[#f0f0f0]"],["type","button",1,"py-4","px-2.5","sm:px-4","text-base","leading-6","whitespace-nowrap","flex","items-center",3,"click"],["name","person-outline",1,"w-4","h-4","mr-1.5","mb-0.5","pointer-events-none"],["name","call-outline",1,"w-4","h-4","mr-1.5","mb-0.5","pointer-events-none"],["class","py-4",4,"ngIf","ngIfElse"],["loginWithMobile",""],["eyeClose",""],["eyeOpen",""],[1,"py-4"],[1,"flex","items-center","mb-6","relative"],[1,"flex","items-center","absolute","left-[11px]","z-10"],["viewBox","64 64 896 896","focusable","false","fill","currentColor","width","1em","height","1em","data-icon","user","aria-hidden","true"],["d","M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"],["formControlName","username","type","text",1,"padding-input","w-full","border","border-[#d9d9d9]","rounded-md","overflow-hidden",3,"placeholder"],["viewBox","64 64 896 896","focusable","false","fill","currentColor","width","1em","height","1em","data-icon","lock","aria-hidden","true"],["d","M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"],["formControlName","password",1,"padding-input","w-full","border","border-[#d9d9d9]","focus:outline-none","rounded-md","overflow-hidden",2,"--padding-end","40px",3,"placeholder","type"],[1,"opacity-40","cursor-pointer","z-10","absolute","right-2","top-1/2","transform","-translate-y-1/2",3,"click"],[3,"ngTemplateOutlet"],[1,"flex","items-stretch","mb-6"],[1,"flex","items-center","w-full"],["type","text","formControlName","captchaCode","inputmode","decimal","maxlength","4",1,"normal-input","w-full","border","border-[#d9d9d9]","rounded-l-md",3,"placeholder"],[1,"flex","items-center","justify-end","border","border-l-0","border-[#d9d9d9]","max-w-[120px]","w-full","h-[50px]","cursor-pointer","relative","bg-[#fafafa]","rounded-r-md"],[4,"ngIf","ngIfElse"],["loader",""],[1,"flex","items-center","mb-4"],[1,"relative","w-4","h-4","flex","items-center","leading-4"],["type","checkbox","id","remember-me","formControlName","remember",1,"w-4","h-4","border","border-[#d9d9d9]","rounded-sm","cursor-pointer","appearance-none","checked:bg-[#fb8811]","checked:border-[#fb8811]"],[1,"absolute","table","border-2","border-t-0","border-l-0","border-[#ffffff]","top-2/4","left-2/4","rotate-45","scale-100","-translate-x-2/4","-translate-y-[54%]","w-[5px]","h-[10px]"],["for","remember-me",1,"cursor-pointer","text-sm","px-2","font-medium"],["routerLink","/auth/forgotPassword",1,"block","ml-auto","text-sm","font-medium","text-[#666666]"],[1,"w-full","mb-2"],["type","submit","value","",1,"login-btn","rounded-[5px]","px-[26px]","py-2.5","w-full","text-lg","font-medium","relative"],["class","absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",4,"ngIf"],["class","absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center whitespace-nowrap",4,"ngIf"],["class","text-white block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",4,"ngIf"],["name","checkmark-sharp","class","text-white w-10 h-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",4,"ngIf"],[1,"flex","items-center","justify-center"],["routerLink","/auth/register",1,"text-lg","font-medium","text-[#fb8811]","text-center","py-2","w-full","h-12","register-account","flex","items-center","justify-center","rounded-md"],[1,"cursor-pointer","w-full","h-full",3,"src","click"],[1,"absolute","left-1/2","top-1/2","transform","-translate-x-1/2","-translate-y-1/2"],[1,"absolute","left-1/2","top-1/2","transform","-translate-x-1/2","-translate-y-1/2","flex","items-center","whitespace-nowrap"],["name","alert-circle-outline",1,"mr-2","w-6","h-6"],[1,"text-white","block","absolute","left-1/2","top-1/2","transform","-translate-x-1/2","-translate-y-1/2"],["name","checkmark-sharp",1,"text-white","w-10","h-10","absolute","left-1/2","top-1/2","transform","-translate-x-1/2","-translate-y-1/2"],[3,"onSelectPhoneCountry","onPhoneNumberChange"],["type","number","formControlName","smsCode","maxlength","6",1,"verification-input","flex-1","!text-sm",3,"placeholder"],["class","verification-btn flex-1 whitespace-nowrap text-sm hover:enabled:!text-primary","type","button",3,"disabled","error-field","click",4,"ngLet"],[1,"flex","items-center","mb-4","justify-between"],["routerLink","/auth/register",1,"text-[#fb8811]","text-sm","font-medium","mr-[5px]"],["routerLink","/auth/forgotPassword",1,"text-sm","font-medium","text-[#666666]"],[1,"login-btn","text-lg","font-medium","text-center","w-full","rounded-[5px]","py-2.5","mb-2","relative",3,"click"],["type","button",1,"verification-btn","flex-1","whitespace-nowrap","text-sm","hover:enabled:!text-primary",3,"disabled","click"],["xmlns","http://www.w3.org/2000/svg","fill","#000000","width","800px","height","800px","viewBox","0 0 16 16",1,"eye-icon"],["d","M8 2.5a9.77 9.77 0 0 0-2.53.32l1 1.05A8.78 8.78 0 0 1 8 3.75 6.91 6.91 0 0 1 13.4 6a7.2 7.2 0 0 1 1.27 2 7.2 7.2 0 0 1-1.27 2c-.12.13-.24.26-.37.38l.89.89A8.24 8.24 0 0 0 16 8a8.11 8.11 0 0 0-8-5.5zm5 9.56-.9-.9-6.97-6.91-1-1-1.19-1.19-.88.88 1 1A8.25 8.25 0 0 0 0 8a8.11 8.11 0 0 0 8 5.5 9.05 9.05 0 0 0 3.82-.79l1.24 1.23.88-.88-1-1zM6.66 7.54l1.67 1.67a1.47 1.47 0 0 1-.36 0A1.35 1.35 0 0 1 6.55 8a1.07 1.07 0 0 1 .11-.46zM8 12.25A6.91 6.91 0 0 1 2.6 10a7.2 7.2 0 0 1-1.27-2A7.2 7.2 0 0 1 2.6 6 6.49 6.49 0 0 1 4 4.84l1.74 1.79A2.33 2.33 0 0 0 5.3 8 2.59 2.59 0 0 0 8 10.5a2.78 2.78 0 0 0 1.32-.33l1.58 1.58a8 8 0 0 1-2.9.5z"],["d","M8 5.5A2.59 2.59 0 0 0 5.33 8 2.59 2.59 0 0 0 8 10.5 2.59 2.59 0 0 0 10.67 8 2.59 2.59 0 0 0 8 5.5zm0 3.75A1.35 1.35 0 0 1 6.58 8 1.35 1.35 0 0 1 8 6.75 1.35 1.35 0 0 1 9.42 8 1.35 1.35 0 0 1 8 9.25z"],["d","M8 2.5A8.11 8.11 0 0 0 0 8a8.11 8.11 0 0 0 8 5.5A8.11 8.11 0 0 0 16 8a8.11 8.11 0 0 0-8-5.5zm5.4 7.5A6.91 6.91 0 0 1 8 12.25 6.91 6.91 0 0 1 2.6 10a7.2 7.2 0 0 1-1.27-2A7.2 7.2 0 0 1 2.6 6 6.91 6.91 0 0 1 8 3.75 6.91 6.91 0 0 1 13.4 6a7.2 7.2 0 0 1 1.27 2 7.2 7.2 0 0 1-1.27 2z"]],template:function(o,t){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.ALo(5,"async"),e.qZA(),e.TgZ(6,"div",5)(7,"div",6)(8,"form",7),e.NdJ("submit",function(){return t.submit()}),e.TgZ(9,"div",8)(10,"button",9),e.NdJ("click",function(){return t.switchLoginType("account")}),e._UZ(11,"ion-icon",10),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"button",9),e.NdJ("click",function(){return t.switchLoginType("mobile")}),e._UZ(15,"ion-icon",11),e._uU(16),e.ALo(17,"translate"),e.qZA()(),e.YNc(18,z,43,37,"div",12),e.YNc(19,X,19,21,"ng-template",null,13,e.W1O),e.qZA()()()()()(),e.YNc(21,W,2,0,"ng-template",null,14,e.W1O),e.YNc(23,ee,3,0,"ng-template",null,15,e.W1O)),2&o){const r=e.MAs(20);e.xp6(4),e.Q6J("src",e.lcZ(5,12,t.biddingService.isBiddingMode$)?"assets/images/login-banner-bidding.png":"assets/images/login-banner-shopping.png",e.LSH),e.xp6(3),e.ekj("failed",t.loginFailed),e.xp6(1),e.Q6J("formGroup",t.form),e.xp6(2),e.ekj("active-btn-orange","account"===t.loginType),e.xp6(2),e.hij(" ",e.lcZ(13,14,"login-page-title")," "),e.xp6(2),e.ekj("active-btn-orange","mobile"===t.loginType),e.xp6(2),e.hij(" ",e.lcZ(17,16,"login-page-title-phone")," "),e.xp6(2),e.Q6J("ngIf","account"===t.loginType)("ngIfElse",r)}},dependencies:[b.O5,b.tP,h.yS,a._Y,a.Wl,a.JJ,a.JL,a.nD,a.sg,a.u,m.gu,m.pK,m.as,m.j9,m.Fo,J.b,V.u,N.h,F.r,b.Ov,w.X$],styles:["ion-input.has-focus[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(255 126 24 / var(--tw-border-opacity));--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-shadow-color: #fb881133;--tw-shadow: var(--tw-shadow-colored)}ion-input.padding-input[_ngcontent-%COMP%]{--padding-start: 2rem;--padding-end: .75rem;--padding-top: 12px;--padding-bottom: 12px}.verification-btn[_ngcontent-%COMP%]{height:46px;border-top-right-radius:5px;border-bottom-right-radius:5px;border-width:1px;border-left-width:0;border-style:solid;--tw-border-opacity: 1;border-color:rgb(217 217 217 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity));padding:4px 26px;--tw-text-opacity: 1;color:rgb(156 156 156 / var(--tw-text-opacity))}.verification-input[_ngcontent-%COMP%]{--padding-start: 6px;--padding-end: 6px;--padding-top: 12px;--padding-bottom: 12px;border-top-left-radius:5px;border-bottom-left-radius:5px;border-width:1px;--tw-border-opacity: 1;border-color:rgb(217 217 217 / var(--tw-border-opacity))}.verification-input[_ngcontent-%COMP%]:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 768px){.verification-input[_ngcontent-%COMP%]{--padding-start: 10px;--padding-end: 10px}}.normal-input[_ngcontent-%COMP%]{--padding-start: 8px;--padding-end: 8px;--padding-top: 12px;--padding-bottom: 12px}ion-input[_ngcontent-%COMP%]     input[type=number]::-webkit-inner-spin-button, ion-input[_ngcontent-%COMP%]     input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.eye-icon[_ngcontent-%COMP%]{width:24px;height:46px}.auth-form[_ngcontent-%COMP%]{box-shadow:0 0 10px 10px #00000017}@media (min-width: 1440px){.auth-form[_ngcontent-%COMP%]{width:392px}}.auth-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{background:#fb8811;color:#fff;border:1px solid #fb8811;height:50px}.auth-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover{background:#ffa73b}.auth-form[_ngcontent-%COMP%]   .login-btn.disabled[_ngcontent-%COMP%]{background:#f5f5f5;color:#9c9c9c;border-color:#d9d9d9;cursor:not-allowed}.auth-form.failed[_ngcontent-%COMP%]{animation:angry-shake .4s}.auth-form.failed[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{background-color:red;border-color:red;color:#fff;opacity:1}app-phone-control[_ngcontent-%COMP%]     .iti, app-phone-control[_ngcontent-%COMP%]     input{border-radius:.375rem}app-phone-control[_ngcontent-%COMP%]     .iti__selected-flag{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}@keyframes angry-shake{0%{transform:translate(4px,1px) rotate(0)}10%{transform:translate(-1px,-4px) rotate(-1deg)}20%{transform:translate(-6px) rotate(1deg)}30%{transform:translateY(4px) rotate(0)}40%{transform:translate(2px,-2px) rotate(1deg)}50%{transform:translate(-2px,4px) rotate(-1deg)}60%{transform:translate(-6px,2px) rotate(0)}70%{transform:translate(4px,2px) rotate(-1deg)}80%{transform:translate(-2px,-2px) rotate(1deg)}90%{transform:translate(4px,4px) rotate(0)}to{transform:translate(2px,-4px) rotate(-1deg)}}.login-bg[_ngcontent-%COMP%]{min-height:calc(100vh - 56px)}@media (min-width: 640px){.login-bg[_ngcontent-%COMP%]{min-height:unset}}.register-account[_ngcontent-%COMP%]:hover{background:#fef1e9}.error-field[_ngcontent-%COMP%]{border-color:red}ion-icon[_ngcontent-%COMP%]{--ionicon-stroke-width: 40px}app-loading-animation[_ngcontent-%COMP%]     .knight-rider-bar{background-color:#fff}"],data:{animation:[(0,s.X$)("slideLeftRight",[(0,s.eR)(":enter",[(0,s.oB)({transform:"translateX(-100%)",opacity:0}),(0,s.jt)("200ms ease-out",(0,s.oB)({transform:"translateX(0%)",opacity:1}))])]),(0,s.X$)("slideRightLeft",[(0,s.eR)(":enter",[(0,s.oB)({transform:"translateX(100%)",opacity:0}),(0,s.jt)("200ms ease-out",(0,s.oB)({transform:"translateX(0%)",opacity:1}))])]),(0,s.X$)("upHide",[(0,s.eR)(":enter",[(0,s.oB)({transform:"translate(-50%, -50px)",opacity:0}),(0,s.jt)("260ms 0ms cubic-bezier(.4, .0, 1, 1)",(0,s.oB)({transform:"translate(-50%, -50%)",opacity:1}))]),(0,s.eR)(":leave",[(0,s.jt)("260ms 0ms cubic-bezier(.4, .0, 1, 1)",(0,s.oB)({transform:"translate(-50%, 50px)",opacity:0}))])])]},changeDetection:0}),n})()}];let oe=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.Bz.forChild(te),h.Bz]}),n})();var ne=i(7492),re=i(44466);let ie=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[T.r,k],imports:[b.ez,oe,a.UX,a.u5,m.Pc,ne.R,re.m,w.aw]}),n})()}}]);