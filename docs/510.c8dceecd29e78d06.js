"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[510],{10510:(de,M,i)=>{i.r(M),i.d(M,{LoginModule:()=>ae});var C=i(36895),x=i(7507),m=i(15861),a=i(24006),P=i(5565),y=i(82722),_=i(26704),I=i(49769),A=i(94542),L=i(21075),b=i(24837),s=i(37340),w=i(49808),v=i(5963),J=i(83905),e=i(94650),T=i(10960);let k=(()=>{class n{constructor(){}setLoginForm(o,t,r){switch(o){case"account":default:t.addControl("username",r.control(null,[a.kI.required])),t.addControl("password",r.control(null,[a.kI.required])),t.addControl("captchaId",r.control(null,[a.kI.required])),t.addControl("captchaCode",r.control(null,[a.kI.required])),t.addControl("remember",r.control(!0,[a.kI.requiredTrue])),t.removeControl("mobileArea"),t.removeControl("mobile"),t.removeControl("smsCode"),t.updateValueAndValidity();break;case"mobile":t.addControl("mobileArea",r.control(null,[a.kI.required])),t.addControl("mobile",r.control(null,[a.kI.required])),t.addControl("smsCode",r.control(null,[a.kI.required])),t.removeControl("username"),t.removeControl("password"),t.removeControl("captchaId"),t.removeControl("captchaCode"),t.removeControl("remember"),t.updateValueAndValidity()}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var U=i(45329),f=i(95133),Z=i(54463),V=i(56889),F=i(32482),N=i(85931),j=i(90147);function q(n,l){if(1&n){const o=e.EpF();e.ynx(0),e.TgZ(1,"img",47),e.NdJ("click",function(){e.CHM(o);const r=e.oxw(2);return e.KtG(r.getVerifyCode())}),e.qZA(),e.BQk()}if(2&n){const o=e.oxw(2);e.xp6(1),e.Q6J("src",o.verifyCode.picture,e.LSH)}}function H(n,l){1&n&&e._UZ(0,"app-orange-loader")}const d=function(){return{value:!0}};function B(n,l){1&n&&(e.TgZ(0,"div",48),e._UZ(1,"span",49),e.qZA()),2&n&&e.Q6J("@upHide",e.DdM(1,d))}function Q(n,l){1&n&&(e.O4$(),e.TgZ(0,"svg",50),e._UZ(1,"path",51),e.qZA()),2&n&&e.Q6J("@upHide",e.DdM(1,d))}function Y(n,l){1&n&&(e.TgZ(0,"div",52),e._UZ(1,"ion-icon",53),e.TgZ(2,"span"),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&n&&(e.Q6J("@upHide",e.DdM(4,d)),e.xp6(3),e.Oqu(e.lcZ(4,2,"login-failed")))}function z(n,l){1&n&&(e.TgZ(0,"span",54),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.Q6J("@upHide",e.DdM(4,d)),e.xp6(1),e.hij(" ",e.lcZ(2,2,"login-page-login")," "))}function D(n,l){if(1&n){const o=e.EpF();e.TgZ(0,"div",16)(1,"div",17)(2,"span",18),e.O4$(),e.TgZ(3,"svg",19),e._UZ(4,"path",20),e.qZA()(),e.kcU(),e._UZ(5,"ion-input",21),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",17)(8,"span",18),e.O4$(),e.TgZ(9,"svg",22),e._UZ(10,"path",23),e.qZA()(),e.kcU(),e._UZ(11,"ion-input",24),e.ALo(12,"translate"),e.TgZ(13,"div",25),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.showPassword=!r.showPassword)}),e.GkF(14,26),e.qZA()(),e.TgZ(15,"div",27)(16,"div",28),e._UZ(17,"ion-input",29),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"div",30),e.YNc(20,q,2,1,"ng-container",31),e.YNc(21,H,1,0,"ng-template",null,32,e.W1O),e.qZA()(),e.TgZ(23,"div",33)(24,"div",34),e._UZ(25,"input",35)(26,"span",36),e.qZA(),e.TgZ(27,"label",37),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"a",38),e._uU(31),e.ALo(32,"translate"),e.qZA()(),e.TgZ(33,"div",39)(34,"button",40),e.YNc(35,B,2,2,"div",41),e.YNc(36,Q,2,2,"svg",42),e.YNc(37,Y,5,5,"div",43),e.YNc(38,z,3,5,"span",44),e.qZA()(),e.TgZ(39,"div",45)(40,"a",46),e._uU(41),e.ALo(42,"translate"),e.qZA()()()}if(2&n){const o=e.MAs(22),t=e.oxw(),r=e.MAs(22),h=e.MAs(24);let c,p,u,g;e.Q6J("@slideLeftRight",void 0),e.xp6(5),e.ekj("error-field",!(null!=(c=t.form.get("username"))&&c.value)&&((null==(c=t.form.get("username"))?null:c.dirty)||(null==(c=t.form.get("username"))?null:c.touched))),e.s9C("placeholder",e.lcZ(6,29,"register-page-username")),e.xp6(6),e.ekj("error-field",!(null!=(p=t.form.get("password"))&&p.value)&&((null==(p=t.form.get("password"))?null:p.dirty)||(null==(p=t.form.get("password"))?null:p.touched))),e.s9C("placeholder",e.lcZ(12,31,"register-page-password")),e.Q6J("type",t.showPassword?"text":"password"),e.xp6(3),e.Q6J("ngTemplateOutlet",t.showPassword?r:h),e.xp6(3),e.ekj("error-field",!(null!=(u=t.form.get("captchaCode"))&&u.value)&&((null==(u=t.form.get("captchaCode"))?null:u.dirty)||(null==(u=t.form.get("captchaCode"))?null:u.touched))),e.s9C("placeholder",e.lcZ(18,33,"register-page-code")),e.xp6(2),e.ekj("error-field",!(null!=(g=t.form.get("captchaCode"))&&g.value)&&((null==(g=t.form.get("captchaCode"))?null:g.dirty)||(null==(g=t.form.get("captchaCode"))?null:g.touched))),e.xp6(1),e.Q6J("ngIf",t.verifyCode)("ngIfElse",o),e.xp6(8),e.hij(" ",e.lcZ(29,35,"login-page-remember")," "),e.xp6(3),e.Oqu(e.lcZ(32,37,"login-page-forgot-password")),e.xp6(3),e.ekj("disabled",t.isSubmitDisabled)("success","Success"==t.progress)("failed","Error"==t.progress),e.xp6(1),e.Q6J("ngIf","Loading"===t.progress),e.xp6(1),e.Q6J("ngIf","Success"==t.progress),e.xp6(1),e.Q6J("ngIf","Error"===t.progress),e.xp6(1),e.Q6J("ngIf","Inputing"===t.progress),e.xp6(3),e.hij(" ",e.lcZ(42,39,"login-page-sign-up")," ")}}const R=function(n){return{time:n}};function $(n,l){if(1&n){const o=e.EpF();e.TgZ(0,"button",62),e.NdJ("click",function(){e.CHM(o);const r=e.oxw(2);return e.KtG(r.getSmsCode())}),e._uU(1),e.ALo(2,"translate"),e.ALo(3,"translate"),e.qZA()}if(2&n){const o=l.ngLet,t=e.oxw(2);let r;e.ekj("error-field",!(null!=(r=t.form.get("smsCode"))&&r.value)&&((null==(r=t.form.get("smsCode"))?null:r.dirty)||(null==(r=t.form.get("smsCode"))?null:r.touched))),e.Q6J("disabled",o>0),e.xp6(1),e.hij(" ",o?e.xi3(2,4,"please-wait-time",e.VKq(9,R,o)):e.lcZ(3,7,"order-payment-retrieve-password-get-verification-code")," ")}}function E(n,l){1&n&&(e.TgZ(0,"div",48),e._UZ(1,"span",49),e.qZA()),2&n&&e.Q6J("@upHide",e.DdM(1,d))}function G(n,l){1&n&&(e.O4$(),e.TgZ(0,"svg",50),e._UZ(1,"path",51),e.qZA()),2&n&&e.Q6J("@upHide",e.DdM(1,d))}function K(n,l){1&n&&(e.TgZ(0,"div",52),e._UZ(1,"ion-icon",53),e.TgZ(2,"span"),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&n&&(e.Q6J("@upHide",e.DdM(4,d)),e.xp6(3),e.Oqu(e.lcZ(4,2,"login-failed")))}function X(n,l){1&n&&(e.TgZ(0,"span",54),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.Q6J("@upHide",e.DdM(4,d)),e.xp6(1),e.hij(" ",e.lcZ(2,2,"login-page-login")," "))}function W(n,l){if(1&n){const o=e.EpF();e.TgZ(0,"div",16)(1,"app-phone-control",55),e.NdJ("onSelectPhoneCountry",function(r){e.CHM(o);const h=e.oxw();return e.KtG(h.onSelectPhoneCountry(r))})("onPhoneNumberChange",function(r){e.CHM(o);const h=e.oxw();return e.KtG(h.onPhoneNumberChange(r))}),e.qZA(),e.TgZ(2,"div",33),e._UZ(3,"ion-input",56),e.ALo(4,"translate"),e.YNc(5,$,4,11,"button",57),e.ALo(6,"async"),e.qZA(),e.TgZ(7,"div",58)(8,"a",59),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"a",60),e._uU(12),e.ALo(13,"translate"),e.qZA()(),e.TgZ(14,"button",61),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.submitMobile())}),e.YNc(15,E,2,2,"div",41),e.YNc(16,G,2,2,"svg",42),e.YNc(17,K,5,5,"div",43),e.YNc(18,X,3,5,"span",44),e.qZA()()}if(2&n){const o=e.oxw();let t;e.Q6J("@slideRightLeft",void 0),e.xp6(3),e.ekj("error-field",!(null!=(t=o.form.get("smsCode"))&&t.value)&&((null==(t=o.form.get("smsCode"))?null:t.dirty)||(null==(t=o.form.get("smsCode"))?null:t.touched))),e.s9C("placeholder",e.lcZ(4,17,"login-page-verification-code")),e.xp6(2),e.Q6J("ngLet",e.lcZ(6,19,o.userService.smsTimeRemaining$)),e.xp6(4),e.Oqu(e.lcZ(10,21,"footer-sign-up")),e.xp6(3),e.Oqu(e.lcZ(13,23,"login-page-forgot-password")),e.xp6(2),e.ekj("disabled",o.isMobileSubmitDisabled)("success","Success"==o.progress)("failed","Error"==o.progress),e.xp6(1),e.Q6J("ngIf","Loading"===o.progress),e.xp6(1),e.Q6J("ngIf","Success"==o.progress),e.xp6(1),e.Q6J("ngIf","Error"===o.progress),e.xp6(1),e.Q6J("ngIf","Inputing"===o.progress)}}function ee(n,l){1&n&&(e.O4$(),e.TgZ(0,"svg",63),e._UZ(1,"path",64),e.qZA())}function te(n,l){1&n&&(e.O4$(),e.TgZ(0,"svg",63),e._UZ(1,"path",65)(2,"path",66),e.qZA())}const oe=[{path:"",component:(()=>{class n extends P.V{constructor(o,t,r,h,c,p,u,g,le,se){super(),this.fb=o,this.loginService=t,this.loginFormService=r,this.userService=h,this.router=c,this.cdr=p,this.route=u,this.toast=g,this.i18n=le,this.biddingService=se,this.loginType="account",this.showPassword=!1,this.loginFailed=!1,this.progress="Inputing",this.initForm();let S={};this.form.valueChanges.subscribe(O=>{O.remember?(S={username:(O.username||"").trim()},(0,L.d8)("loginInfo",btoa(JSON.stringify(S)))):(0,L.s$)("loginInfo")})}get isSubmitDisabled(){const o=this.form.value;return!o.username||!o.password||!o.captchaCode}get isMobileSubmitDisabled(){const o=this.form.value;return!o.mobile||!o.smsCode}ngOnInit(){this.userService.userInfo$.next(null),this.getVerifyCode(),this.loginFormService.setLoginForm("account",this.form,this.fb),this.userService.initVerificationTimer(),this.form=this.fb.group({username:[null],password:[null],captchaId:[null],captchaCode:[null],remember:[!0],mobileArea:["+86"],mobile:[null,[a.kI.required,A.d.phone]],smsCode:[null]})}ngOnDestroy(){super.ngOnDestroy(),this.userService.clearVerificationTimer(_.R4.SMS)}toastError(o){var t=this;return(0,m.Z)(function*(){yield t.presentToast({position:"bottom",message:o,icon:"alert-circle-outline",duration:1e3,color:"danger"})})()}toastSuccess(o){var t=this;return(0,m.Z)(function*(){yield t.presentToast({position:"bottom",message:o,duration:1e3,icon:"checkmark-circle-outline",color:"success"})})()}presentToast(o){var t=this;return(0,m.Z)(function*(){yield(yield t.toast.create(o)).present()})()}switchLoginType(o){this.loginType=o,this.loginFormService.setLoginForm(o,this.form,this.fb)}onSelectPhoneCountry(o){o&&this.form.get("mobileArea")?.patchValue(o)}onPhoneNumberChange(o){this.form.get("mobile")?.patchValue(o)}getVerifyCode(){this.verifyCode=null,this.loginService.getVerifyCode(_.fi.Login).pipe((0,y.R)(this.destroyStream$)).subscribe(o=>{!o||(this.verifyCode=o,this.form.get("captchaId")?.patchValue(o.captchaId),this.cdr.detectChanges())})}getSmsCode(){const{mobile:o,mobileArea:t}=this.form.value;this.loginService.getSmsCode(_.eo.LoginByMobilePhone,t||"+86",o.toString()).pipe((0,y.R)(this.destroyStream$)).subscribe(r=>{0===r.code?(this.userService.startVerificationTimer(_.R4.SMS,60,!0),this.toastSuccess(this.i18n.instant("register-alert-email-header"))):this.toastError(r.message)})}submit(){var o=this;return(0,m.Z)(function*(){if("Inputing"!==o.progress)return;const t=o.form.getRawValue();if(o.isSubmitDisabled)return t.username||(o.form.controls.username.markAsDirty(),o.form.controls.username.updateValueAndValidity({onlySelf:!0})),t.password||(o.form.controls.password.markAsDirty(),o.form.controls.password.updateValueAndValidity({onlySelf:!0})),t.captchaCode||(o.form.controls.captchaCode.markAsDirty(),o.form.controls.captchaCode.updateValueAndValidity({onlySelf:!0})),void o.loginHasFailed(!0);o.progress="Loading",o.cdr.detectChanges(),b.Z.isBrowser&&(yield(0,w.n)((0,v.H)(260))),o.loginService.login({...t,source:"web",password:I(t.password).toString(),username:t.username?.trim()}).pipe((0,y.R)(o.destroyStream$)).subscribe(r=>{o.login(r)})})()}submitMobile(){var o=this;return(0,m.Z)(function*(){if("Inputing"!==o.progress)return;const t=o.form.value;if(o.isMobileSubmitDisabled)return t.mobile||(o.form.controls.mobile.markAsDirty(),o.form.controls.mobile.updateValueAndValidity({onlySelf:!0})),t.smsCode||(o.form.controls.smsCode.markAsDirty(),o.form.controls.smsCode.updateValueAndValidity({onlySelf:!0})),void o.loginHasFailed(!0);o.progress="Loading",o.cdr.detectChanges(),b.Z.isBrowser&&(yield(0,w.n)((0,v.H)(260))),o.loginService.loginWithMobile({...t,mobile:t.mobile.toString(),smsCode:t.smsCode.toString()}).pipe((0,y.R)(o.destroyStream$)).subscribe(r=>{o.login(r)})})()}initForm(){this.form=this.fb.group({username:[null],password:[null],captchaId:[null],captchaCode:[null],remember:[!0],mobileArea:["+86"],mobile:[null,[a.kI.required,A.d.phone]],smsCode:[null]})}login(o){var t=this;return(0,m.Z)(function*(){if(console.log(o),b.Z.isBrowser&&(yield(0,w.n)((0,v.H)(300))),!o.body.data)return t.loginHasFailed(),t.toastError(o.body.message),void t.getVerifyCode();t.progress="Success",t.cdr.detectChanges(),b.Z.isBrowser&&(yield(0,w.n)((0,v.H)(800))),t.userService.setToken(o.headers.get("token")),setTimeout(()=>{t.userService.setUserInfo(o.body.data),t.userService.updateUserInfo();const r=t.route.snapshot.queryParamMap.get("back")||"/";t.router.navigateByUrl(decodeURIComponent(r))},0)})()}loginHasFailed(o=!1){var t=this;return(0,m.Z)(function*(){b.Z.isBrowser&&(o||(t.progress="Error",t.cdr.detectChanges(),yield(0,J.z)((0,v.H)(260))),t.loginFailed=!0,t.cdr.detectChanges(),setTimeout(()=>{t.progress="Inputing",t.loginFailed=!1,t.cdr.detectChanges()},800))})()}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(a.qu),e.Y36(T.r),e.Y36(k),e.Y36(U.K),e.Y36(x.F0),e.Y36(e.sBO),e.Y36(x.gz),e.Y36(f.yF),e.Y36(Z.sK),e.Y36(V.g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],features:[e.qOj],decls:25,vars:18,consts:[[1,"login-bg","flex","items-start","justify-center","h-full","relative"],[1,"tyqoon-container","w-full","2xl:block","flex","items-center","h-full"],[1,"flex","items-start","mt-11","mb-2","sm:my-12","2xl:py-8","w-full"],[1,"flex","items-center","absolute","top-11","sm:top-1/2","left-1/2","-translate-x-1/2","sm:-translate-y-1/2","2xl:left-0","2xl:top-0","2xl:relative","2xl:translate-x-0","2xl:translate-y-0","w-full","2xl:block"],[1,"fade-in","m-auto","h-full","2xl:w-[880px]","2xl:h-[460px]",2,"--duration","700ms","--delay","100ms",3,"src"],[1,"2xl:w-[416px]","m-auto","rounded-xl","relative","w-full","max-w-[566px]"],[1,"px-6","bg-white","rounded-xl","auth-form","overflow-hidden"],[1,"w-full",3,"formGroup","submit"],[1,"flex","items-center","justify-center","border-b","border-b-[#f0f0f0]"],["type","button",1,"py-4","px-2.5","sm:px-4","text-base","leading-6","whitespace-nowrap","flex","items-center",3,"click"],["name","person-outline",1,"w-4","h-4","mr-1.5","mb-0.5","pointer-events-none"],["name","call-outline",1,"w-4","h-4","mr-1.5","mb-0.5","pointer-events-none"],["class","py-4",4,"ngIf","ngIfElse"],["loginWithMobile",""],["eyeClose",""],["eyeOpen",""],[1,"py-4"],[1,"flex","items-center","mb-6","relative"],[1,"flex","items-center","absolute","left-[11px]","z-10"],["viewBox","64 64 896 896","focusable","false","fill","currentColor","width","1em","height","1em","data-icon","user","aria-hidden","true"],["d","M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"],["formControlName","username","type","text",1,"padding-input","w-full","border","border-[#d9d9d9]","rounded-md","overflow-hidden",3,"placeholder"],["viewBox","64 64 896 896","focusable","false","fill","currentColor","width","1em","height","1em","data-icon","lock","aria-hidden","true"],["d","M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"],["formControlName","password",1,"padding-input","w-full","border","border-[#d9d9d9]","focus:outline-none","rounded-md","overflow-hidden",2,"--padding-end","40px",3,"placeholder","type"],[1,"opacity-40","cursor-pointer","z-10","absolute","right-2","top-1/2","transform","-translate-y-1/2",3,"click"],[3,"ngTemplateOutlet"],[1,"flex","items-stretch","mb-6"],[1,"flex","items-center","w-full"],["type","text","formControlName","captchaCode","inputmode","decimal","maxlength","4",1,"normal-input","w-full","border","border-[#d9d9d9]","rounded-l-md",3,"placeholder"],[1,"flex","items-center","justify-end","border","border-l-0","border-[#d9d9d9]","max-w-[120px]","w-full","h-[50px]","cursor-pointer","relative","bg-[#fafafa]","rounded-r-md"],[4,"ngIf","ngIfElse"],["loader",""],[1,"flex","items-center","mb-4"],[1,"relative","w-4","h-4","flex","items-center","leading-4"],["type","checkbox","id","remember-me","formControlName","remember",1,"w-4","h-4","border","border-[#d9d9d9]","rounded-sm","cursor-pointer","appearance-none","checked:bg-[#fb8811]","checked:border-[#fb8811]"],[1,"absolute","table","border-2","border-t-0","border-l-0","border-[#ffffff]","top-2/4","left-2/4","rotate-45","scale-100","-translate-x-2/4","-translate-y-[54%]","w-[5px]","h-[10px]"],["for","remember-me",1,"cursor-pointer","text-sm","px-2","font-medium"],["routerLink","/auth/forgotPassword",1,"block","ml-auto","text-sm","font-medium","text-[#666666]"],[1,"w-full","mb-2"],["type","submit","value","",1,"login-btn","rounded-[5px]","px-[26px]","py-2.5","w-full","text-lg","font-medium","relative"],["class","absolute block left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",4,"ngIf"],["width","36","height","36","viewBox","0 0 36 36","class","absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",4,"ngIf"],["class","absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center whitespace-nowrap",4,"ngIf"],["class","absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",4,"ngIf"],[1,"flex","items-center","justify-center"],["routerLink","/auth/register",1,"text-lg","font-medium","text-[#fb8811]","text-center","py-2","w-full","h-12","register-account","flex","items-center","justify-center","rounded-md"],[1,"cursor-pointer","w-full","h-full",3,"src","click"],[1,"absolute","block","left-1/2","top-1/2","transform","-translate-x-1/2","-translate-y-1/2"],[1,"spinner"],["width","36","height","36","viewBox","0 0 36 36",1,"absolute","left-1/2","top-1/2","transform","-translate-x-1/2","-translate-y-1/2"],["fill","#fff","d","M13.5 24.26L7.24 18l-2.12 2.12 8.38 8.38 18-18-2.12-2.12z"],[1,"absolute","left-1/2","top-1/2","transform","-translate-x-1/2","-translate-y-1/2","flex","items-center","whitespace-nowrap"],["name","alert-circle-outline",1,"mr-2","w-6","h-6"],[1,"absolute","left-1/2","top-1/2","transform","-translate-x-1/2","-translate-y-1/2"],[3,"onSelectPhoneCountry","onPhoneNumberChange"],["type","number","formControlName","smsCode","maxlength","6",1,"verification-input","flex-1","!text-sm",3,"placeholder"],["class","verification-btn flex-1 whitespace-nowrap text-sm hover:enabled:!text-primary","type","button",3,"disabled","error-field","click",4,"ngLet"],[1,"flex","items-center","mb-4","justify-between"],["routerLink","/auth/register",1,"text-[#fb8811]","text-sm","font-medium","mr-[5px]"],["routerLink","/auth/forgotPassword",1,"text-sm","font-medium","text-[#666666]"],[1,"login-btn","text-lg","font-medium","text-center","w-full","rounded-[5px]","py-2.5","mb-2","relative",3,"click"],["type","button",1,"verification-btn","flex-1","whitespace-nowrap","text-sm","hover:enabled:!text-primary",3,"disabled","click"],["xmlns","http://www.w3.org/2000/svg","fill","#000000","width","800px","height","800px","viewBox","0 0 16 16",1,"eye-icon"],["d","M8 2.5a9.77 9.77 0 0 0-2.53.32l1 1.05A8.78 8.78 0 0 1 8 3.75 6.91 6.91 0 0 1 13.4 6a7.2 7.2 0 0 1 1.27 2 7.2 7.2 0 0 1-1.27 2c-.12.13-.24.26-.37.38l.89.89A8.24 8.24 0 0 0 16 8a8.11 8.11 0 0 0-8-5.5zm5 9.56-.9-.9-6.97-6.91-1-1-1.19-1.19-.88.88 1 1A8.25 8.25 0 0 0 0 8a8.11 8.11 0 0 0 8 5.5 9.05 9.05 0 0 0 3.82-.79l1.24 1.23.88-.88-1-1zM6.66 7.54l1.67 1.67a1.47 1.47 0 0 1-.36 0A1.35 1.35 0 0 1 6.55 8a1.07 1.07 0 0 1 .11-.46zM8 12.25A6.91 6.91 0 0 1 2.6 10a7.2 7.2 0 0 1-1.27-2A7.2 7.2 0 0 1 2.6 6 6.49 6.49 0 0 1 4 4.84l1.74 1.79A2.33 2.33 0 0 0 5.3 8 2.59 2.59 0 0 0 8 10.5a2.78 2.78 0 0 0 1.32-.33l1.58 1.58a8 8 0 0 1-2.9.5z"],["d","M8 5.5A2.59 2.59 0 0 0 5.33 8 2.59 2.59 0 0 0 8 10.5 2.59 2.59 0 0 0 10.67 8 2.59 2.59 0 0 0 8 5.5zm0 3.75A1.35 1.35 0 0 1 6.58 8 1.35 1.35 0 0 1 8 6.75 1.35 1.35 0 0 1 9.42 8 1.35 1.35 0 0 1 8 9.25z"],["d","M8 2.5A8.11 8.11 0 0 0 0 8a8.11 8.11 0 0 0 8 5.5A8.11 8.11 0 0 0 16 8a8.11 8.11 0 0 0-8-5.5zm5.4 7.5A6.91 6.91 0 0 1 8 12.25 6.91 6.91 0 0 1 2.6 10a7.2 7.2 0 0 1-1.27-2A7.2 7.2 0 0 1 2.6 6 6.91 6.91 0 0 1 8 3.75 6.91 6.91 0 0 1 13.4 6a7.2 7.2 0 0 1 1.27 2 7.2 7.2 0 0 1-1.27 2z"]],template:function(o,t){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.ALo(5,"async"),e.qZA(),e.TgZ(6,"div",5)(7,"div",6)(8,"form",7),e.NdJ("submit",function(){return t.submit()}),e.TgZ(9,"div",8)(10,"button",9),e.NdJ("click",function(){return t.switchLoginType("account")}),e._UZ(11,"ion-icon",10),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"button",9),e.NdJ("click",function(){return t.switchLoginType("mobile")}),e._UZ(15,"ion-icon",11),e._uU(16),e.ALo(17,"translate"),e.qZA()(),e.YNc(18,D,43,41,"div",12),e.YNc(19,W,19,25,"ng-template",null,13,e.W1O),e.qZA()()()()()(),e.YNc(21,ee,2,0,"ng-template",null,14,e.W1O),e.YNc(23,te,3,0,"ng-template",null,15,e.W1O)),2&o){const r=e.MAs(20);e.xp6(4),e.Q6J("src",e.lcZ(5,12,t.biddingService.isBiddingMode$)?"assets/images/login-banner-bidding.png":"assets/images/login-banner-shopping.png",e.LSH),e.xp6(3),e.ekj("failed",t.loginFailed),e.xp6(1),e.Q6J("formGroup",t.form),e.xp6(2),e.ekj("active-btn-orange","account"===t.loginType),e.xp6(2),e.hij(" ",e.lcZ(13,14,"login-page-title")," "),e.xp6(2),e.ekj("active-btn-orange","mobile"===t.loginType),e.xp6(2),e.hij(" ",e.lcZ(17,16,"login-page-title-phone")," "),e.xp6(2),e.Q6J("ngIf","account"===t.loginType)("ngIfElse",r)}},dependencies:[C.O5,C.tP,x.yS,a._Y,a.Wl,a.JJ,a.JL,a.nD,a.sg,a.u,f.gu,f.pK,f.as,f.j9,f.Fo,F.b,N.u,j.h,C.Ov,Z.X$],styles:["ion-input.has-focus[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(255 126 24 / var(--tw-border-opacity));--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-shadow-color: #fb881133;--tw-shadow: var(--tw-shadow-colored)}ion-input.padding-input[_ngcontent-%COMP%]{--padding-start: 2rem;--padding-end: .75rem;--padding-top: 12px;--padding-bottom: 12px}.verification-btn[_ngcontent-%COMP%]{height:46px;border-top-right-radius:5px;border-bottom-right-radius:5px;border-width:1px;border-left-width:0;border-style:solid;--tw-border-opacity: 1;border-color:rgb(217 217 217 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity));padding:4px 26px;--tw-text-opacity: 1;color:rgb(156 156 156 / var(--tw-text-opacity))}.verification-input[_ngcontent-%COMP%]{--padding-start: 6px;--padding-end: 6px;--padding-top: 12px;--padding-bottom: 12px;border-top-left-radius:5px;border-bottom-left-radius:5px;border-width:1px;--tw-border-opacity: 1;border-color:rgb(217 217 217 / var(--tw-border-opacity))}.verification-input[_ngcontent-%COMP%]:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 768px){.verification-input[_ngcontent-%COMP%]{--padding-start: 10px;--padding-end: 10px}}.normal-input[_ngcontent-%COMP%]{--padding-start: 8px;--padding-end: 8px;--padding-top: 12px;--padding-bottom: 12px}ion-input[_ngcontent-%COMP%]     input[type=number]::-webkit-inner-spin-button, ion-input[_ngcontent-%COMP%]     input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.eye-icon[_ngcontent-%COMP%]{width:24px;height:46px}.auth-form[_ngcontent-%COMP%]{box-shadow:0 10px 15px -3px #0003,0 4px 6px -2px #0000000d}@media (min-width: 1440px){.auth-form[_ngcontent-%COMP%]{width:392px}}.auth-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{background:#fb8811;color:#fff;border:1px solid #fb8811;height:50px;box-shadow:0 10px 15px -3px #00000020,0 4px 6px -2px #00000008;text-shadow:2px 3px 6px rgba(0,0,0,.1);transition:all .26s ease-out;transition-delay:.26s}.auth-form[_ngcontent-%COMP%]   .login-btn.success[_ngcontent-%COMP%]{background:#03bf3f;border:1px solid #7befa2}.auth-form[_ngcontent-%COMP%]   .login-btn.success[_ngcontent-%COMP%]:hover{background:#03bf3f}.auth-form[_ngcontent-%COMP%]   .login-btn.failed[_ngcontent-%COMP%]{background-color:red;border-color:red;color:#fff;opacity:1}.auth-form[_ngcontent-%COMP%]   .login-btn.failed[_ngcontent-%COMP%]:hover{background-color:red}.auth-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover{background:#ffa73b}.auth-form[_ngcontent-%COMP%]   .login-btn.disabled[_ngcontent-%COMP%]{background:#f5f5f5;color:#9c9c9c;border-color:#d9d9d9;cursor:not-allowed;box-shadow:none}.auth-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{display:inline-block;margin:0 8px;border-radius:50%;width:1.5em;height:1.5em;border:.215em solid transparent;vertical-align:middle;font-size:16px;border-top-color:#fff;filter:drop-shadow(2px 3px 6px rgba(0,0,0,.1));animation:spin 1s cubic-bezier(.55,.15,.45,.85) infinite}.auth-form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{filter:drop-shadow(2px 3px 6px rgba(0,0,0,.1))}.auth-form.failed[_ngcontent-%COMP%]{animation:angry-shake .4s}.auth-form.failed[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{transition-delay:0;transition:none;background-color:red;border-color:red;color:#fff;opacity:1}app-phone-control[_ngcontent-%COMP%]     .iti, app-phone-control[_ngcontent-%COMP%]     input{border-radius:.375rem}app-phone-control[_ngcontent-%COMP%]     .iti__selected-flag{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}@keyframes angry-shake{0%{transform:translate(4px,1px) rotate(0)}10%{transform:translate(-1px,-4px) rotate(-1deg)}20%{transform:translate(-6px) rotate(1deg)}30%{transform:translateY(4px) rotate(0)}40%{transform:translate(2px,-2px) rotate(1deg)}50%{transform:translate(-2px,4px) rotate(-1deg)}60%{transform:translate(-6px,2px) rotate(0)}70%{transform:translate(4px,2px) rotate(-1deg)}80%{transform:translate(-2px,-2px) rotate(1deg)}90%{transform:translate(4px,4px) rotate(0)}to{transform:translate(2px,-4px) rotate(-1deg)}}.login-bg[_ngcontent-%COMP%]{min-height:calc(100vh - 56px)}@media (min-width: 640px){.login-bg[_ngcontent-%COMP%]{min-height:unset}}.register-account[_ngcontent-%COMP%]:hover{background:#fef1e9}.error-field[_ngcontent-%COMP%]{border-color:red}ion-icon[_ngcontent-%COMP%]{--ionicon-stroke-width: 40px}app-loading-animation[_ngcontent-%COMP%]     .knight-rider-bar{background-color:#fff}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"],data:{animation:[(0,s.X$)("slideLeftRight",[(0,s.eR)(":enter",[(0,s.oB)({transform:"translateX(-100%)",opacity:0}),(0,s.jt)("200ms ease-out",(0,s.oB)({transform:"translateX(0%)",opacity:1}))])]),(0,s.X$)("slideRightLeft",[(0,s.eR)(":enter",[(0,s.oB)({transform:"translateX(100%)",opacity:0}),(0,s.jt)("200ms ease-out",(0,s.oB)({transform:"translateX(0%)",opacity:1}))])]),(0,s.X$)("upHide",[(0,s.eR)(":enter",[(0,s.oB)({transform:"translate(-50%, -28px)",opacity:0}),(0,s.jt)("260ms 260ms cubic-bezier(.0, .0, .2, 1)",(0,s.F4)([(0,s.oB)({transform:"translate(-50%, -28px)",opacity:0,offset:0}),(0,s.oB)({opacity:.8,offset:.5}),(0,s.oB)({transform:"translate(-50%, -50%)",opacity:1,offset:1})]))]),(0,s.eR)(":leave",[(0,s.jt)("260ms 0ms cubic-bezier(.4, .0, 1, 1)",(0,s.oB)({transform:"translate(-50%, 10px)",opacity:0,offset:1}))])])]},changeDetection:0}),n})()}];let ne=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[x.Bz.forChild(oe),x.Bz]}),n})();var re=i(7492),ie=i(44466);let ae=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[T.r,k],imports:[C.ez,ne,a.UX,a.u5,f.Pc,re.R,ie.m,Z.aw]}),n})()}}]);