"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[510],{10510:(G,b,a)=>{a.r(b),a.d(b,{LoginModule:()=>V});var g=a(36895),d=a(84787),m=a(15861),i=a(24006),_=a(5565),p=a(82722),x=a(26704),T=a(49769),h=a(80519),v=a(94542),u=a(21075),A=a(24837),e=a(98274),C=a(10960);let w=(()=>{class r{constructor(){}setLoginForm(t,o,n){switch(t){case"account":default:o.addControl("username",n.control(null,[i.kI.required])),o.addControl("password",n.control(null,[i.kI.required])),o.addControl("captchaId",n.control(null,[i.kI.required])),o.addControl("captchaCode",n.control(null,[i.kI.required])),o.addControl("remember",n.control(!0,[i.kI.requiredTrue])),o.removeControl("mobileArea"),o.removeControl("mobile"),o.removeControl("smsCode"),o.updateValueAndValidity();break;case"mobile":o.addControl("mobileArea",n.control(null,[i.kI.required])),o.addControl("mobile",n.control(null,[i.kI.required])),o.addControl("smsCode",n.control(null,[i.kI.required])),o.removeControl("username"),o.removeControl("password"),o.removeControl("captchaId"),o.removeControl("captchaCode"),o.removeControl("remember"),o.updateValueAndValidity()}}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();var L=a(94830),c=a(95133),f=a(54463),k=a(32482),S=a(85931);function I(r,l){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"img",43),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.getVerifyCode())}),e.qZA(),e.BQk()}if(2&r){const t=e.oxw(2);e.xp6(1),e.Q6J("src",t.verifyCode.picture,e.LSH)}}function M(r,l){1&r&&e._UZ(0,"app-orange-loader")}function U(r,l){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",18)(2,"span",19),e.O4$(),e.TgZ(3,"svg",20),e._UZ(4,"path",21),e.qZA()(),e.kcU(),e._UZ(5,"ion-input",22),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",18)(8,"span",19),e.O4$(),e.TgZ(9,"svg",23),e._UZ(10,"path",24),e.qZA()(),e.kcU(),e._UZ(11,"ion-input",25),e.ALo(12,"translate"),e.TgZ(13,"div",26),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.showPassword=!n.showPassword)}),e.GkF(14,27),e.qZA()(),e.TgZ(15,"div",28)(16,"div",29),e._UZ(17,"ion-input",30),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"div",31),e.YNc(20,I,2,1,"ng-container",14),e.YNc(21,M,1,0,"ng-template",null,32,e.W1O),e.qZA()(),e.TgZ(23,"div",33)(24,"div",34),e._UZ(25,"input",35)(26,"span",36),e.qZA(),e.TgZ(27,"label",37),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"a",38),e._uU(31),e.ALo(32,"translate"),e.qZA()(),e.TgZ(33,"div",39)(34,"button",40),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.submit())}),e._uU(35),e.ALo(36,"translate"),e.qZA()(),e.TgZ(37,"div",41)(38,"a",42),e._uU(39),e.ALo(40,"translate"),e.qZA()(),e.BQk()}if(2&r){const t=e.MAs(22),o=e.oxw(),n=e.MAs(22),s=e.MAs(24);e.xp6(5),e.s9C("placeholder",e.lcZ(6,12,"register-page-username")),e.xp6(6),e.s9C("placeholder",e.lcZ(12,14,"register-page-password")),e.Q6J("type",o.showPassword?"text":"password"),e.xp6(3),e.Q6J("ngTemplateOutlet",o.showPassword?n:s),e.xp6(3),e.s9C("placeholder",e.lcZ(18,16,"register-page-code")),e.xp6(3),e.Q6J("ngIf",o.verifyCode)("ngIfElse",t),e.xp6(8),e.hij(" ",e.lcZ(29,18,"login-page-remember")," "),e.xp6(3),e.Oqu(e.lcZ(32,20,"login-page-forgot-password")),e.xp6(3),e.Q6J("disabled",o.isSubmitDisabled),e.xp6(1),e.hij(" ",e.lcZ(36,22,"login-page-login")," "),e.xp6(4),e.hij(" ",e.lcZ(40,24,"login-page-sign-up")," ")}}function P(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"app-phone-control",44),e.NdJ("onSelectPhoneCountry",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.onSelectPhoneCountry(n))})("onPhoneNumberChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.onPhoneNumberChange(n))}),e.qZA(),e.TgZ(1,"div",45),e._UZ(2,"ion-input",46),e.ALo(3,"translate"),e.TgZ(4,"button",47),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.getSmsCode())}),e._uU(5),e.ALo(6,"translate"),e.qZA()(),e.TgZ(7,"div",33)(8,"a",48),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"a",49),e._uU(12),e.ALo(13,"translate"),e.qZA()(),e.TgZ(14,"button",50),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.submitMobile())}),e._uU(15),e.ALo(16,"translate"),e.qZA()}if(2&r){const t=e.oxw();e.xp6(2),e.s9C("placeholder",e.lcZ(3,6,"login-page-verification-code")),e.xp6(2),e.Q6J("disabled",t.smsTimeRemaining>0),e.xp6(1),e.hij(" ",e.lcZ(6,8,"order-payment-retrieve-password-get-verification-code")," "),e.xp6(4),e.Oqu(e.lcZ(10,10,"footer-sign-up")),e.xp6(3),e.Oqu(e.lcZ(13,12,"login-page-forgot-password")),e.xp6(3),e.hij(" ",e.lcZ(16,14,"login-page-login")," ")}}function O(r,l){1&r&&(e.O4$(),e.TgZ(0,"svg",51),e._UZ(1,"path",52),e.qZA())}function q(r,l){1&r&&(e.O4$(),e.TgZ(0,"svg",51),e._UZ(1,"path",53)(2,"path",54),e.qZA())}const N=[{path:"",component:(()=>{class r extends _.V{constructor(t,o,n,s,j,R,Y,B,H){super(),this.fb=t,this.loginService=o,this.loginFormService=n,this.userService=s,this.router=j,this.cdr=R,this.route=Y,this.toast=B,this.i18n=H,this.loginType="account",this.smsTimeRemaining=0,this.showPassword=!1,this.initForm();let y={};this.form.valueChanges.subscribe(Z=>{Z.remember?(y={username:(Z.username||"").trim()},(0,u.d8)("loginInfo",btoa(JSON.stringify(y)))):(0,u.s$)("loginInfo")})}get isSubmitDisabled(){const t=this.form.value;return!t.username||!t.password||!t.captchaCode}ngOnInit(){this.getVerifyCode(),this.loginFormService.setLoginForm("account",this.form,this.fb),this.setSmsCode(),this.form=this.fb.group({username:[null],password:[null],captchaId:[null],captchaCode:[null],remember:[!0],mobileArea:["+86"],mobile:[null,[i.kI.required,v.d.phone]],smsCode:[null]})}toastError(t){var o=this;return(0,m.Z)(function*(){yield o.presentToast({position:"bottom",message:t,icon:"alert-circle-outline",duration:1e3,color:"danger"})})()}toastSuccess(t){var o=this;return(0,m.Z)(function*(){yield o.presentToast({position:"bottom",message:t,duration:1e3,icon:"checkmark-circle-outline",color:"success"})})()}presentToast(t){var o=this;return(0,m.Z)(function*(){yield(yield o.toast.create(t)).present()})()}setSmsCode(){if(A.Z.isServer)return;const t=(0,u.JJ)(document.cookie),n=Math.max((Number(t[h._5])-Date.now())/1e3,0);n>0&&(this.smsTimeRemaining=Math.floor(n),this.startTimeInterval()),this.loginInfo=t[h._5],this.loginInfo&&this.form.get("username")?.setValue(this.loginInfo.username)}startTimeInterval(){this.timeInterval=setInterval(()=>{this.smsTimeRemaining-=1,this.smsTimeRemaining<1&&clearInterval(this.timeInterval)},1e3)}switchLoginType(t){this.loginType=t,this.loginFormService.setLoginForm(t,this.form,this.fb)}onSelectPhoneCountry(t){t&&this.form.get("mobileArea")?.patchValue(t)}onPhoneNumberChange(t){this.form.get("mobile")?.patchValue(t)}getVerifyCode(){this.verifyCode=null,this.loginService.getVerifyCode(x.f.Login).pipe((0,p.R)(this.destroyStream$)).subscribe(t=>{!t||(this.verifyCode=t,this.form.get("captchaId")?.patchValue(t.captchaId),this.cdr.detectChanges())})}getSmsCode(){const{mobile:t,mobileArea:o}=this.form.value;this.loginService.getSmsCode(x.e.LoginByMobilePhone,o||"+86",t.toString()).pipe((0,p.R)(this.destroyStream$)).subscribe(n=>{(0,u.d8)(h._5,(Date.now()+6e4).toString()),0===n.code?(this.smsTimeRemaining=60,this.startTimeInterval(),this.toastSuccess(this.i18n.instant("register-alert-email-header"))):this.toastError(n.message)})}submit(){const t=this.form.getRawValue();this.loginService.login({...t,password:T(t.password).toString(),username:t.username?.trim()}).pipe((0,p.R)(this.destroyStream$)).subscribe(o=>{this.login(o)})}submitMobile(){const t=this.form.value;this.loginService.loginWithMobile({...t,mobile:t.mobile.toString(),smsCode:t.smsCode.toString()}).pipe((0,p.R)(this.destroyStream$)).subscribe(o=>{this.login(o)})}initForm(){this.form=this.fb.group({username:[null],password:[null],captchaId:[null],captchaCode:[null],remember:[!0],mobileArea:["+86"],mobile:[null,[i.kI.required,v.d.phone]],smsCode:[null]})}login(t){if(console.log(t),!t.body.data)return alert(t.body.message),void this.getVerifyCode();this.userService.setToken(t.headers.get("token")),setTimeout(()=>{this.userService.setUserInfo(t.body.data),this.userService.updateUserInfo();const o=this.route.snapshot.queryParamMap.get("back")||"/";this.router.navigateByUrl(decodeURIComponent(o))},0)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(i.qu),e.Y36(C.r),e.Y36(w),e.Y36(L.K),e.Y36(d.F0),e.Y36(e.sBO),e.Y36(d.gz),e.Y36(c.yF),e.Y36(f.sK))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-login"]],features:[e.qOj],decls:25,vars:13,consts:[[1,"login-bg","flex","items-start","justify-center","h-full","relative"],[1,"tyqoon-container","w-full","2xl:block","flex","items-center","h-full"],[1,"flex","items-start","my-12","2xl:py-8","w-full"],[1,"hidden","2xl:block"],["src","assets/images/login-banner-min.png","alt","",1,"max-w-[unset]","w-[880px]","h-[460px]"],[1,"2xl:hidden","h-full","flex","items-center","absolute","top-1/2","left-1/2","-translate-x-1/2","-translate-y-1/2","w-full"],["src","assets/images/login-back.png","alt","",1,"m-auto","h-full","object-cover"],[1,"2xl:w-[416px]","m-auto","rounded-xl","relative","w-full","max-w-[566px]"],[1,"px-6","bg-white","rounded-xl"],[1,"w-full",3,"formGroup"],[1,"flex","items-center","justify-center","border-b","border-b-[#f0f0f0]"],[1,"p-4","text-[16px]","leading-6","whitespace-nowrap",3,"click"],[1,"p-4","text-[16px]","leading-6","ml-8","whitespace-nowrap",3,"click"],[1,"pt-4","pb-6"],[4,"ngIf","ngIfElse"],["loginWithMobile",""],["eyeClose",""],["eyeOpen",""],[1,"flex","items-center","mb-6","relative"],[1,"flex","items-center","absolute","left-[11px]","z-10"],["viewBox","64 64 896 896","focusable","false","fill","currentColor","width","1em","height","1em","data-icon","user","aria-hidden","true"],["d","M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"],["formControlName","username","type","text",1,"padding-input","w-full","border","border-[#d9d9d9]",3,"placeholder"],["viewBox","64 64 896 896","focusable","false","fill","currentColor","width","1em","height","1em","data-icon","lock","aria-hidden","true"],["d","M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"],["formControlName","password",1,"padding-input","w-full","border","border-[#d9d9d9]","focus:outline-none",2,"--padding-end","40px",3,"placeholder","type"],[1,"opacity-40","cursor-pointer","z-10","absolute","right-2","top-1/2","transform","-translate-y-1/2",3,"click"],[3,"ngTemplateOutlet"],[1,"flex","items-stretch","mb-6"],[1,"flex","items-center","w-full"],["type","text","formControlName","captchaCode","maxlength","4",1,"normal-input","w-full","border","border-[#d9d9d9]",3,"placeholder"],[1,"flex","items-center","justify-end","border","border-l-0","border-[#d9d9d9]","max-w-[120px]","w-full","h-[46px]","cursor-pointer","relative","bg-[#fafafa]"],["loader",""],[1,"flex","items-center","mb-4"],[1,"relative","w-4","h-4","flex","items-center","leading-4"],["type","checkbox","id","remember-me","formControlName","remember",1,"w-4","h-4","border","border-[#d9d9d9]","rounded-sm","cursor-pointer","appearance-none","checked:bg-[#fb8811]","checked:border-[#fb8811]"],[1,"absolute","table","border-2","border-t-0","border-l-0","border-[#ffffff]","top-2/4","left-2/4","rotate-45","scale-100","-translate-x-2/4","-translate-y-[54%]","w-[5px]","h-[10px]"],["for","remember-me",1,"cursor-pointer","text-sm","px-2"],["routerLink","/auth/forgotPassword",1,"block","ml-auto","text-xs","text-[#666666]"],[1,"w-full","mb-4"],["type","button","value","",1,"bg-[#fb8811]","disabled:bg-[#f5f5f5]","text-[#ffffff]","disabled:text-[#9c9c9c]","border","border-solid","border-[#fb8811]","disabled:border-[#d9d9d9]","rounded-[5px]","px-[26px]","py-[8px]","w-full","text-base","disabled:cursor-not-allowed",3,"disabled","click"],[1,"flex","items-center","justify-center"],["routerLink","/auth/register",1,"text-base","text-[#fb8811]","text-center"],[1,"cursor-pointer","w-full","h-full",3,"src","click"],[3,"onSelectPhoneCountry","onPhoneNumberChange"],[1,"flex","items-center","mb-6"],["type","number","formControlName","smsCode","maxlength","6",1,"verification-input","flex-1","text-sm",3,"placeholder"],[1,"verification-btn","flex-1","whitespace-nowrap","text-sm","hover:!text-primary",3,"disabled","click"],["routerLink","/auth/register",1,"text-[#fb8811]","text-xs","mr-[5px]"],["routerLink","/auth/forgotPassword",1,"text-xs","text-[#666666]"],[1,"text-base","text-center","w-full","bg-[#fb8811]","text-[#ffffff]","rounded-[5px]","py-[8px]","hover:bg-[#ffa73b]",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","#000000","width","800px","height","800px","viewBox","0 0 16 16",1,"eye-icon"],["d","M8 2.5a9.77 9.77 0 0 0-2.53.32l1 1.05A8.78 8.78 0 0 1 8 3.75 6.91 6.91 0 0 1 13.4 6a7.2 7.2 0 0 1 1.27 2 7.2 7.2 0 0 1-1.27 2c-.12.13-.24.26-.37.38l.89.89A8.24 8.24 0 0 0 16 8a8.11 8.11 0 0 0-8-5.5zm5 9.56-.9-.9-6.97-6.91-1-1-1.19-1.19-.88.88 1 1A8.25 8.25 0 0 0 0 8a8.11 8.11 0 0 0 8 5.5 9.05 9.05 0 0 0 3.82-.79l1.24 1.23.88-.88-1-1zM6.66 7.54l1.67 1.67a1.47 1.47 0 0 1-.36 0A1.35 1.35 0 0 1 6.55 8a1.07 1.07 0 0 1 .11-.46zM8 12.25A6.91 6.91 0 0 1 2.6 10a7.2 7.2 0 0 1-1.27-2A7.2 7.2 0 0 1 2.6 6 6.49 6.49 0 0 1 4 4.84l1.74 1.79A2.33 2.33 0 0 0 5.3 8 2.59 2.59 0 0 0 8 10.5a2.78 2.78 0 0 0 1.32-.33l1.58 1.58a8 8 0 0 1-2.9.5z"],["d","M8 5.5A2.59 2.59 0 0 0 5.33 8 2.59 2.59 0 0 0 8 10.5 2.59 2.59 0 0 0 10.67 8 2.59 2.59 0 0 0 8 5.5zm0 3.75A1.35 1.35 0 0 1 6.58 8 1.35 1.35 0 0 1 8 6.75 1.35 1.35 0 0 1 9.42 8 1.35 1.35 0 0 1 8 9.25z"],["d","M8 2.5A8.11 8.11 0 0 0 0 8a8.11 8.11 0 0 0 8 5.5A8.11 8.11 0 0 0 16 8a8.11 8.11 0 0 0-8-5.5zm5.4 7.5A6.91 6.91 0 0 1 8 12.25 6.91 6.91 0 0 1 2.6 10a7.2 7.2 0 0 1-1.27-2A7.2 7.2 0 0 1 2.6 6 6.91 6.91 0 0 1 8 3.75 6.91 6.91 0 0 1 13.4 6a7.2 7.2 0 0 1 1.27 2 7.2 7.2 0 0 1-1.27 2z"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"div",7)(8,"div",8)(9,"form",9)(10,"div",10)(11,"button",11),e.NdJ("click",function(){return o.switchLoginType("account")}),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"button",12),e.NdJ("click",function(){return o.switchLoginType("mobile")}),e._uU(15),e.ALo(16,"translate"),e.qZA()(),e.TgZ(17,"div",13),e.YNc(18,U,41,26,"ng-container",14),e.YNc(19,P,17,16,"ng-template",null,15,e.W1O),e.qZA()()()()()()(),e.YNc(21,O,2,0,"ng-template",null,16,e.W1O),e.YNc(23,q,3,0,"ng-template",null,17,e.W1O)),2&t){const n=e.MAs(20);e.xp6(9),e.Q6J("formGroup",o.form),e.xp6(2),e.ekj("active-btn-orange","account"===o.loginType),e.xp6(1),e.hij(" ",e.lcZ(13,9,"login-page-title")," "),e.xp6(2),e.ekj("active-btn-orange","mobile"===o.loginType),e.xp6(1),e.hij(" ",e.lcZ(16,11,"login-page-title-phone")," "),e.xp6(3),e.Q6J("ngIf","account"===o.loginType)("ngIfElse",n)}},dependencies:[g.O5,g.tP,d.yS,i._Y,i.Wl,i.JJ,i.JL,i.nD,i.sg,i.u,c.pK,c.as,c.j9,c.Fo,k.b,S.u,f.X$],styles:["ion-input.has-focus[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(255 126 24 / var(--tw-border-opacity));--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-shadow-color: #fb881133;--tw-shadow: var(--tw-shadow-colored)}ion-input.padding-input[_ngcontent-%COMP%]{--padding-start: 2rem;--padding-end: .75rem}.verification-btn[_ngcontent-%COMP%]{height:30px;border-top-right-radius:5px;border-bottom-right-radius:5px;border-width:1px;border-left-width:0;border-style:solid;--tw-border-opacity: 1;border-color:rgb(217 217 217 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(245 245 245 / var(--tw-bg-opacity));padding:4px 26px;--tw-text-opacity: 1;color:rgb(156 156 156 / var(--tw-text-opacity))}.verification-input[_ngcontent-%COMP%]{--padding-start: 6px;--padding-end: 6px;--padding-top: 4px;--padding-bottom: 4px;border-top-left-radius:5px;border-bottom-left-radius:5px;border-width:1px;--tw-border-opacity: 1;border-color:rgb(217 217 217 / var(--tw-border-opacity))}.verification-input[_ngcontent-%COMP%]:focus{outline:2px solid transparent;outline-offset:2px}.normal-input[_ngcontent-%COMP%]{--padding-start: 8px;--padding-end: 8px}ion-input[_ngcontent-%COMP%]     input[type=number]::-webkit-inner-spin-button, ion-input[_ngcontent-%COMP%]     input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.eye-icon[_ngcontent-%COMP%]{width:24px}"],changeDetection:0}),r})()}];let J=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.Bz.forChild(N),d.Bz]}),r})();var F=a(7492),z=a(44466);let V=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[C.r,w],imports:[g.ez,J,i.UX,i.u5,c.Pc,F.R,z.m,f.aw]}),r})()}}]);