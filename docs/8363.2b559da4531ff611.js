"use strict";(self.webpackChunkangular_tyqoon_client=self.webpackChunkangular_tyqoon_client||[]).push([[8363],{78363:(fe,M,d)=>{d.r(M),d.d(M,{PaymentPasswordModule:()=>ge});var l=d(36895),h=d(95133),v=d(44466),g=d(54463),f=d(24006),L=d(7507),F=d(70655),e=d(94650);const J=["input"];function E(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"span")(1,"input",1,2),e.NdJ("click",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.onClick(o))})("paste",function(o){const a=e.CHM(t).index,c=e.oxw();return e.KtG(c.onPaste(o,a))})("input",function(o){const a=e.CHM(t).index,c=e.oxw();return e.KtG(c.onInput(o,a))})("keydown",function(o){const a=e.CHM(t).index,c=e.oxw();return e.KtG(c.onKeydown(o,a))}),e.qZA()()}if(2&n){const t=e.oxw();e.ekj("code-hidden",t.isCodeHidden),e.xp6(1),e.Q6J("type",t.inputType)("disabled",t.disabled),e.uIk("autocapitalize",t.autocapitalize)}}const Z=new e.OlP("CodeInputComponentConfig"),T={codeLength:4,inputType:"tel",initialFocusField:void 0,isCharsCode:!1,isCodeHidden:!1,isPrevFocusableAfterClearing:!0,isFocusingOnLastByClickIfFilled:!1,code:void 0,disabled:!1,autocapitalize:void 0};var m=(()=>{return(n=m||(m={}))[n.ready=0]="ready",n[n.reset=1]="reset",m;var n})();let y=(()=>{class n{constructor(t){if(this.isNonDigitsCode=!1,this.codeChanged=new e.vpe,this.codeCompleted=new e.vpe,this.placeholders=[],this.inputs=[],this.inputsStates=[],this.state={isFocusingAfterAppearingCompleted:!1,isInitialFocusFieldEnabled:!1},Object.assign(this,T),t)for(const s in t)!t.hasOwnProperty(s)||!T.hasOwnProperty(s)||(this[s]=t[s])}ngOnInit(){this.state.isInitialFocusFieldEnabled=!this.isEmpty(this.initialFocusField),this.onCodeLengthChanges()}ngAfterViewInit(){this.inputsListSubscription=this.inputsList.changes.subscribe(this.onInputsListChanges.bind(this)),this.onInputsListChanges(this.inputsList)}ngAfterViewChecked(){this.focusOnInputAfterAppearing()}ngOnChanges(t){t.code&&this.onInputCodeChanges(),t.codeLength&&this.onCodeLengthChanges()}ngOnDestroy(){this.inputsListSubscription&&this.inputsListSubscription.unsubscribe()}reset(t=!1){this.onInputCodeChanges(),this.state.isInitialFocusFieldEnabled&&this.focusOnField(this.initialFocusField),t&&this.emitChanges()}focusOnField(t){if(t>=this._codeLength)throw new Error("The index of the focusing input box should be less than the codeLength.");this.inputs[t].focus()}onClick(t){if(!this.isFocusingOnLastByClickIfFilled)return;const o=this.inputs[this._codeLength-1];t.target===o||!(this.getCurrentFilledCode().length>=this._codeLength)||setTimeout(()=>o.focus())}onInput(t,s){const o=t.target,i=t.data||o.value;if(this.isEmpty(i))return;if(!this.canInputValue(i))return t.preventDefault(),t.stopPropagation(),this.setInputValue(o,null),void this.setStateForInput(o,m.reset);const a=i.toString().trim().split("");for(let u=0;u<a.length;u++){const _=u+s;if(_>this._codeLength-1)break;this.setInputValue(this.inputs[_],a[u])}this.emitChanges();const c=s+a.length;c>this._codeLength-1?o.blur():this.inputs[c].focus()}onPaste(t,s){t.preventDefault(),t.stopPropagation();const o=t.clipboardData?t.clipboardData.getData("text").trim():void 0;if(this.isEmpty(o))return;const i=o.split("");let a=0;for(let c=s;c<this.inputs.length&&a!==i.length;c++){const u=this.inputs[c],_=i[a];if(!this.canInputValue(_))return this.setInputValue(u,null),void this.setStateForInput(u,m.reset);this.setInputValue(u,_.toString()),a++}this.inputs[s].blur(),this.emitChanges()}onKeydown(t,s){return(0,F.mG)(this,void 0,void 0,function*(){const o=t.target,i=this.isEmpty(o.value),a=s-1,c=yield this.isBackspaceKey(t),u=this.isDeleteKey(t);!c&&!u||(t.preventDefault(),this.setInputValue(o,null),i||this.emitChanges(),!(a<0||u)&&(i||this.isPrevFocusableAfterClearing)&&this.inputs[a].focus())})}onInputCodeChanges(){if(!this.inputs.length)return;if(this.isEmpty(this.code))return void this.inputs.forEach(o=>{this.setInputValue(o,null)});const t=this.code.toString().trim().split("");let s=!0;for(const o of t)if(!this.canInputValue(o)){s=!1;break}this.inputs.forEach((o,i)=>{this.setInputValue(o,s?t[i]:null)})}onCodeLengthChanges(){if(this.codeLength)if(this._codeLength=this.codeLength,this._codeLength>this.placeholders.length){const t=Array(this._codeLength-this.placeholders.length).fill(1);this.placeholders.splice(this.placeholders.length-1,0,...t)}else this._codeLength<this.placeholders.length&&this.placeholders.splice(this._codeLength)}onInputsListChanges(t){if(t.length>this.inputs.length){const s=t.filter((i,a)=>a>this.inputs.length-1);this.inputs.splice(this.inputs.length,0,...s.map(i=>i.nativeElement));const o=Array(s.length).fill(m.ready);this.inputsStates.splice(this.inputsStates.length,0,...o)}else t.length<this.inputs.length&&(this.inputs.splice(t.length),this.inputsStates.splice(t.length));this.onInputCodeChanges()}focusOnInputAfterAppearing(){!this.state.isInitialFocusFieldEnabled||this.state.isFocusingAfterAppearingCompleted||(this.focusOnField(this.initialFocusField),this.state.isFocusingAfterAppearingCompleted=document.activeElement===this.inputs[this.initialFocusField])}emitChanges(){setTimeout(()=>this.emitCode(),50)}emitCode(){const t=this.getCurrentFilledCode();this.codeChanged.emit(t),t.length>=this._codeLength&&this.codeCompleted.emit(t)}getCurrentFilledCode(){let t="";for(const s of this.inputs)this.isEmpty(s.value)||(t+=s.value);return t}isBackspaceKey(t){return t.key&&"backspace"===t.key.toLowerCase()||t.keyCode&&8===t.keyCode?Promise.resolve(!0):t.keyCode&&229===t.keyCode?new Promise(o=>{setTimeout(()=>{const i=t.target,a=this.getStateForInput(i)===m.reset;a&&this.setStateForInput(i,m.ready),o(0===i.selectionStart&&!a)})}):Promise.resolve(!1)}isDeleteKey(t){return t.key&&"delete"===t.key.toLowerCase()||t.keyCode&&46===t.keyCode}setInputValue(t,s){const i="has-value",a="empty";this.isEmpty(s)?(t.value="",t.classList.remove(i),t.parentElement.classList.add(a)):(t.value=s,t.classList.add(i),t.parentElement.classList.remove(a))}canInputValue(t){return!this.isEmpty(t)&&(/^[0-9]+$/.test(t.toString())||this.isCharsCode||this.isNonDigitsCode)}setStateForInput(t,s){const o=this.inputs.indexOf(t);o<0||(this.inputsStates[o]=s)}getStateForInput(t){const s=this.inputs.indexOf(t);return this.inputsStates[s]}isEmpty(t){return null==t||!t.toString().length}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["code-input"]],viewQuery:function(t,s){if(1&t&&e.Gf(J,5),2&t){let o;e.iGM(o=e.CRH())&&(s.inputsList=o)}},inputs:{isNonDigitsCode:"isNonDigitsCode",codeLength:"codeLength",inputType:"inputType",initialFocusField:"initialFocusField",isCharsCode:"isCharsCode",isCodeHidden:"isCodeHidden",isPrevFocusableAfterClearing:"isPrevFocusableAfterClearing",isFocusingOnLastByClickIfFilled:"isFocusingOnLastByClickIfFilled",code:"code",disabled:"disabled",autocapitalize:"autocapitalize"},outputs:{codeChanged:"codeChanged",codeCompleted:"codeCompleted"},features:[e.TTD],decls:1,vars:1,consts:[[3,"code-hidden",4,"ngFor","ngForOf"],["autocomplete","one-time-code",3,"type","disabled","click","paste","input","keydown"],["input",""]],template:function(t,s){1&t&&e.YNc(0,E,3,5,"span",0),2&t&&e.Q6J("ngForOf",s.placeholders)},dependencies:[l.sg],styles:["[_nghost-%COMP%]{--text-security-type:disc;--item-spacing:4px;--item-height:4.375em;--item-border:1px solid #ddd;--item-border-bottom:1px solid #ddd;--item-border-has-value:1px solid #ddd;--item-border-bottom-has-value:1px solid #ddd;--item-border-focused:1px solid #ddd;--item-border-bottom-focused:1px solid #ddd;--item-shadow-focused:0px 1px 5px #ddd;--item-border-radius:5px;--item-background:transparent;--color:#171516;display:flex;transform:translateZ(0);font-size:inherit;color:var(--color)}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{display:block;flex:1;padding-right:var(--item-spacing)}[_nghost-%COMP%]   span[_ngcontent-%COMP%]:first-child{padding-left:var(--item-spacing)}[_nghost-%COMP%]   span.code-hidden[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{text-security:var(--text-security-type);-webkit-text-security:var(--text-security-type);-moz-text-security:var(--text-security-type)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:var(--item-height);color:inherit;background:var(--item-background);text-align:center;font-size:inherit;border:var(--item-border);border-bottom:var(--item-border-bottom);border-radius:var(--item-border-radius);-webkit-appearance:none;transform:translateZ(0);-webkit-transform:translateZ(0);outline:none}[_nghost-%COMP%]   input.has-value[_ngcontent-%COMP%]{border:var(--item-border-has-value);border-bottom:var(--item-border-bottom-has-value)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus{border:var(--item-border-focused);border-bottom:var(--item-border-bottom-focused);box-shadow:var(--item-shadow-focused)}"]}),n})(),N=(()=>{class n{static forRoot(t){return{ngModule:n,providers:[{provide:Z,useValue:t}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez]}),n})();var C=d(82722),x=d(5565),P=d(94830),w=d(15861),b=d(70262),O=d(39646),I=d(60312);function H(n,r){if(1&n&&(e.TgZ(0,"div",8),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.message," ")}}let R=(()=>{class n extends x.V{constructor(t,s){super(),this.toastController=t,this.userService=s,this.isOpenChange=new e.vpe}onAction(t){t?!this.paymentPassword||!this.confirmPassword||(this.message=null,this.userService.setPaymentPassword({newPinCode:this.paymentPassword}).pipe((0,C.R)(this.destroyStream$),(0,b.K)(()=>(0,O.of)(null))).subscribe(s=>{s?.code>0?this.message=s.message:(this.showMessage("\u8bbe\u7f6e\u6210\u529f",3e3,"top","success"),this.isOpenChange.emit(!1))})):this.isOpenChange.emit(!1)}showMessage(t,s,o,i){var a=this;return(0,w.Z)(function*(){yield(yield a.toastController.create({message:t,duration:s,position:o,color:i})).present()})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.yF),e.Y36(P.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-create-payment-password"]],inputs:{isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange"},features:[e.qOj],decls:15,vars:16,consts:[[3,"title","isOpen","customClass","modalAction"],[1,"flex","flex-col","h-full","overflow-y-auto","overflow-x-hidden"],[1,"group","relative","flex","flex-col","p-4","rounded-xl","bg-white"],[1,"font-medium","label","ml-2"],[1,"mt-2","mb-3"],[3,"isCodeHidden","codeLength","codeCompleted"],[1,"my-2"],["class","text-center w-full my-2 text-red-600",4,"ngIf"],[1,"text-center","w-full","my-2","text-red-600"]],template:function(t,s){1&t&&(e.TgZ(0,"app-modal",0),e.NdJ("modalAction",function(i){return s.onAction(i)}),e.ALo(1,"translate"),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",4)(8,"code-input",5),e.NdJ("codeCompleted",function(i){return s.paymentPassword=i}),e.qZA()(),e.TgZ(9,"div",3),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"div",6)(13,"code-input",5),e.NdJ("codeCompleted",function(i){return s.confirmPassword=i}),e.qZA()()(),e.YNc(14,H,2,1,"div",7),e.qZA()()),2&t&&(e.s9C("title",e.lcZ(1,10,"order-payment-set-password")),e.Q6J("isOpen",s.isOpen)("customClass","modal-medium"),e.xp6(5),e.hij("",e.lcZ(6,12,"order-payment-password"),":"),e.xp6(3),e.Q6J("isCodeHidden",!0)("codeLength",6),e.xp6(2),e.hij("",e.lcZ(11,14,"order-payment-password-repeat"),":"),e.xp6(3),e.Q6J("isCodeHidden",!0)("codeLength",6),e.xp6(1),e.Q6J("ngIf",s.message))},dependencies:[l.O5,I.z,y,g.X$],styles:[".label[_ngcontent-%COMP%]{color:#1c1c1c}code-input[_ngcontent-%COMP%]{max-width:450px;--item-height: 55px;--item-spacing: 10px;--item-border-radius: 6px}"]}),n})();function U(n,r){if(1&n&&(e.TgZ(0,"div",8),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.message," ")}}let q=(()=>{class n extends x.V{constructor(t,s){super(),this.toastController=t,this.userService=s,this.isOpenChange=new e.vpe}onAction(t){t?!this.currentPassword||!this.newPassword||!this.confirmPassword||(this.message=null,this.userService.setPaymentPassword({oldPinCode:this.currentPassword,newPinCode:this.newPassword}).pipe((0,C.R)(this.destroyStream$),(0,b.K)(()=>(0,O.of)(null))).subscribe(s=>{s?.code>0?this.message=s.message:(this.showMessage("\u8bbe\u7f6e\u6210\u529f",3e3,"top","success"),this.isOpenChange.emit(!1))})):this.isOpenChange.emit(!1)}showMessage(t,s,o,i){var a=this;return(0,w.Z)(function*(){yield(yield a.toastController.create({message:t,duration:s,position:o,color:i})).present()})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.yF),e.Y36(P.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-update-payment-password"]],inputs:{isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange"},features:[e.qOj],decls:20,vars:21,consts:[[3,"title","isOpen","customClass","modalAction"],[1,"flex","flex-col","h-full","overflow-y-auto","overflow-x-hidden"],[1,"group","relative","flex","flex-col","sm:p-4","rounded-xl","bg-white"],[1,"font-medium","label","ml-2"],[1,"mt-2","mb-3"],[3,"isCodeHidden","codeLength","codeCompleted"],[1,"my-2"],["class","text-center w-full my-2 text-red-600",4,"ngIf"],[1,"text-center","w-full","my-2","text-red-600"]],template:function(t,s){1&t&&(e.TgZ(0,"app-modal",0),e.NdJ("modalAction",function(i){return s.onAction(i)}),e.ALo(1,"translate"),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",4)(8,"code-input",5),e.NdJ("codeCompleted",function(i){return s.currentPassword=i}),e.qZA()(),e.TgZ(9,"div",3),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"div",4)(13,"code-input",5),e.NdJ("codeCompleted",function(i){return s.newPassword=i}),e.qZA()(),e.TgZ(14,"div",3),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"div",6)(18,"code-input",5),e.NdJ("codeCompleted",function(i){return s.confirmPassword=i}),e.qZA()()(),e.YNc(19,U,2,1,"div",7),e.qZA()()),2&t&&(e.s9C("title",e.lcZ(1,13,"order-payment-modify-password")),e.Q6J("isOpen",s.isOpen)("customClass","modal-medium"),e.xp6(5),e.hij("",e.lcZ(6,15,"account-change-password-current"),":"),e.xp6(3),e.Q6J("isCodeHidden",!0)("codeLength",6),e.xp6(2),e.hij("",e.lcZ(11,17,"account-change-password-new-password"),":"),e.xp6(3),e.Q6J("isCodeHidden",!0)("codeLength",6),e.xp6(2),e.hij("",e.lcZ(16,19,"account-change-password-new-password-confirm"),":"),e.xp6(3),e.Q6J("isCodeHidden",!0)("codeLength",6),e.xp6(1),e.Q6J("ngIf",s.message))},dependencies:[l.O5,I.z,y,g.X$],styles:[".label[_ngcontent-%COMP%]{color:#1c1c1c}code-input[_ngcontent-%COMP%]{max-width:450px;--item-height: 55px;--item-spacing: 4px;--item-border-radius: 6px}@media (min-width: 340px){code-input[_ngcontent-%COMP%]{--item-spacing: 8px}}@media (min-width: 640px){code-input[_ngcontent-%COMP%]{--item-spacing: 10px}}  #modal-body{padding:4px 0}@media (min-width: 340px){  #modal-body{padding:16px}}"]}),n})();var D=d(49769),j=d.n(D),Q=d(38461),K=d(32482),p=(()=>{return(n=p||(p={})).PENDING="pending",n.IN_PROGRESS="in progress",n.COMPLETED="completed",p;var n})();const G=["*"];let S=(()=>{class n{constructor(){this.isActive=!1}set activeState(t){this.isActive=t===this}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-progress-step"]],hostVars:2,hostBindings:function(t,s){2&t&&e.ekj("activeStep",s.isActive)},inputs:{activeState:"activeState"},ngContentSelectors:G,decls:1,vars:0,template:function(t,s){1&t&&(e.F$t(),e.Hsn(0))},styles:["[_nghost-%COMP%]:not(.activeStep){display:none}"]}),n})();var B=d(77579);let A=(()=>{class n{constructor(){this.eventHelper=new B.x}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();function Y(n,r){if(1&n&&(e.O4$(),e.TgZ(0,"text",13),e._uU(1),e.qZA()),2&n){const t=e.oxw().index;e.xp6(1),e.Oqu(t+1)}}const k=function(n,r){return{complete:n,active:r}};function z(n,r){if(1&n&&(e.O4$(),e.kcU(),e.TgZ(0,"div",14),e._UZ(1,"div",15),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("ngClass",e.WLB(1,k,"completed"===t.status,"in progress"===t.status))}}function V(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",5),e.O4$(),e.TgZ(2,"svg",6),e._UZ(3,"circle",7),e.YNc(4,Y,2,1,"text",8),e._UZ(5,"polyline",9),e.qZA(),e.YNc(6,z,2,4,"div",10),e.kcU(),e.TgZ(7,"div",11)(8,"span",12),e._uU(9),e.qZA()()(),e.BQk()),2&n){const t=r.$implicit,s=r.index,o=e.oxw();e.xp6(1),e.Q6J("ngClass",e.WLB(4,k,"completed"===t.status,"in progress"===t.status)),e.xp6(3),e.Q6J("ngIf","completed"!==t.status),e.xp6(2),e.Q6J("ngIf",s!==o.itemLength-1),e.xp6(3),e.hij("Step ",s+1,"")}}const $=[[["app-progress-step"]]],X=["app-progress-step"];let W=(()=>{class n{constructor(t){this.progressHelper=t,this.itemLength=0,this.itemProgressList=[],this.activeIndex=0,this.stateChange=new e.vpe}set selectedIndex(t){this.activeIndex=t||0}ngOnInit(){this.progressHelper.eventHelper.subscribe({next:({prev:t,next:s})=>{s&&this.next(),t&&this.prev()}})}ngAfterContentInit(){this.initProgress(this.progressSteps.length),this.setActiveActiveStep(this.activeIndex),this.initStepIndex()}next(){this.activeIndex===this.itemLength-1&&this.itemProgressList[this.activeIndex].status!==p.COMPLETED&&(this.itemProgressList[this.activeIndex].status=p.COMPLETED),this.activeIndex<this.itemLength-1&&(this.activeIndex++,this.itemProgressList[this.activeIndex-1].status=p.COMPLETED,this.itemProgressList[this.activeIndex].status=p.IN_PROGRESS,this.setActiveActiveStep(this.activeIndex))}prev(){this.activeIndex===this.itemLength-1&&this.itemProgressList[this.activeIndex].status===p.COMPLETED?this.itemProgressList[this.activeIndex].status=p.IN_PROGRESS:this.activeIndex>0&&(this.activeIndex--,this.itemProgressList[this.activeIndex+1].status=p.PENDING,this.itemProgressList[this.activeIndex].status=p.IN_PROGRESS,this.setActiveActiveStep(this.activeIndex))}setActiveActiveStep(t){this.stepsExists&&(this.removeActiveStep(),this.updateActiveStep(t))}updateActiveStep(t){this.progressSteps[t].activeState=this.progressSteps[t]}removeActiveStep(){this.progressSteps.forEach(t=>{t.isActive&&(t.isActive=!1)})}initStepIndex(){this.progressSteps.forEach((t,s)=>t.stepIndex=s)}get activeStep(){return this.progressSteps[this.activeIndex]}get stepsExists(){return this.progressSteps&&Array.isArray(this.progressSteps)}get progressSteps(){return this.steps?.toArray()||[]}generateProgressArray(t){return[...Array(t).keys()].map(s=>({stepIndex:s,status:s===this.activeIndex?p.IN_PROGRESS:p.PENDING}))}initProgress(t){this.itemLength=t||0,this.itemProgressList=this.generateProgressArray(this.itemLength)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-progress"]],contentQueries:function(t,s,o){if(1&t&&e.Suo(o,S,4),2&t){let i;e.iGM(i=e.CRH())&&(s.steps=i)}},inputs:{selectedIndex:"selectedIndex"},outputs:{stateChange:"stateChange"},ngContentSelectors:X,decls:6,vars:1,consts:[[1,"step-progress","grid","select-none","justify-center"],[1,"container","relative","inline-flex"],["container",""],[4,"ngFor","ngForOf"],[1,"step-content","self-start","relative"],[1,"check-box","flex","items-center","relative",3,"ngClass"],["id","checkbox","viewBox","0 0 100 100"],["cx","50.5","cy","49","r","45",1,"circle"],["class","step-number","x","50%","y","50%","text-anchor","middle","stroke","#ffffff","stroke-width","2px","dy",".3em",4,"ngIf"],["points","28.5,51.9 41.9,65.3 72.5,32.8 ",1,"check"],["class","progress-line overflow-hidden inline-block h-1 rounded-lg",3,"ngClass",4,"ngIf"],[1,"info","absolute","grid"],[1,"step","ml-1"],["x","50%","y","50%","text-anchor","middle","stroke","#ffffff","stroke-width","2px","dy",".3em",1,"step-number"],[1,"progress-line","overflow-hidden","inline-block","h-1","rounded-lg",3,"ngClass"],[1,"progress-percent"]],template:function(t,s){1&t&&(e.F$t($),e.TgZ(0,"div",0)(1,"div",1,2),e.YNc(3,V,10,7,"ng-container",3),e.qZA()(),e.TgZ(4,"div",4),e.Hsn(5),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngForOf",s.itemProgressList))},dependencies:[l.mk,l.sg,l.O5],styles:[".step-progress[_ngcontent-%COMP%]{grid-row:1/2;grid-column:1/-1}.step-content[_ngcontent-%COMP%]{margin-top:40px;grid-row:2/-1;grid-column:1/-1}.container[_ngcontent-%COMP%]   svg#checkbox[_ngcontent-%COMP%]{width:40px;height:40px;stroke:#ff6009;stroke-width:6}.container[_ngcontent-%COMP%]   svg#checkbox[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{stroke-dasharray:320;stroke-dashoffset:320;fill:#d2d2d2;transition:stroke-dashoffset .5s,fill .5s .3s cubic-bezier(.45,0,.55,1)}.container[_ngcontent-%COMP%]   svg#checkbox[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]{stroke-dasharray:70;stroke-dashoffset:70;stroke:#ff6009;fill:none;transition:all .5s .5s cubic-bezier(.45,0,.55,1)}.container[_ngcontent-%COMP%]   svg#checkbox[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%]{font-size:40px;fill:#fff}.check-box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{bottom:-30px;grid-template-columns:max-content}.check-box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span.step[_ngcontent-%COMP%]{letter-spacing:.5px;font-size:11px;color:#777}.progress-line[_ngcontent-%COMP%]{width:95px;background:#d2d2d2}@media only screen and (max-width: 767.9px){.progress-line[_ngcontent-%COMP%]{width:60px}}.progress-line[_ngcontent-%COMP%]   .progress-percent[_ngcontent-%COMP%]{height:inherit;width:0%;transition:all .5s .5s cubic-bezier(.45,0,.55,1)}.progress-line.active[_ngcontent-%COMP%]   .progress-percent[_ngcontent-%COMP%]{background:linear-gradient(270deg,#ff6009 0%,#ff8340 100%);width:100%}.progress-line.complete[_ngcontent-%COMP%]   .progress-percent[_ngcontent-%COMP%]{width:100%;background:#ff6009}.check-box.active[_ngcontent-%COMP%]   svg#checkbox[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{fill:#ff6009}.check-box.complete[_ngcontent-%COMP%]   svg#checkbox[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{stroke-dashoffset:0;fill:#fff}.check-box.complete[_ngcontent-%COMP%]   svg#checkbox[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]{stroke-dashoffset:0}"]}),n})(),ee=(()=>{class n{constructor(t,s){this.progressHelper=t,this.el=s,this.methods={next:!1,prev:!1}}listen(t){this.progressHelper.eventHelper.next(this.methods)}ngOnInit(){this.initMethods()}initMethods(){"next"in this&&(this.methods={...this.methods,next:!0}),"prev"in this&&(this.methods={...this.methods,prev:!0})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A),e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","progressStepNext",""],["","progressStepPrev",""]],hostBindings:function(t,s){1&t&&e.NdJ("click",function(i){return s.listen(i)})},inputs:{next:["progressStepNext","next"],prev:["progressStepPrev","prev"]}}),n})();function te(n,r){if(1&n&&(e.TgZ(0,"div",24),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.message," ")}}function ne(n,r){if(1&n&&(e.TgZ(0,"div",24),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.message," ")}}function se(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",25),e.NdJ("click",function(){e.CHM(t),e.oxw();const o=e.MAs(9),i=e.oxw();return e.KtG(i.getSmsCode(o))}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("disabled",t.busy||t.smsTimeRemaining>0),e.xp6(1),e.hij(" ",t.smsCodeText," ")}}function oe(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"ion-button",26),e._uU(2," \u4e0a\u4e00\u6b65 "),e.qZA(),e.TgZ(3,"ion-button",25),e.NdJ("click",function(){e.CHM(t),e.oxw();const o=e.MAs(9),i=e.oxw();return e.KtG(i.onAction(!0,o))}),e._uU(4," \u4e0b\u4e00\u6b65 "),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("disabled",t.busy)}}function ie(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",27),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.onAction(!1))}),e._uU(1," OK "),e.qZA()}}function re(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"p",3),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onAction(!1))}),e._UZ(6,"app-close-icon",5),e.qZA()(),e.TgZ(7,"div",6)(8,"app-progress",null,7)(10,"app-progress-step")(11,"div",8)(12,"div",9)(13,"h1",10),e._uU(14,"\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801"),e.qZA(),e.TgZ(15,"app-phone-control",11),e.NdJ("onSelectPhoneCountry",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.mobileArea=o)})("onPhoneNumberChange",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.mobile=o)}),e.qZA()(),e.YNc(16,te,2,1,"div",12),e.qZA()(),e.TgZ(17,"app-progress-step")(18,"div",8)(19,"div",9)(20,"h1",10),e._uU(21,"\u91cd\u7f6e\u5bc6\u7801"),e.qZA(),e.TgZ(22,"div",13)(23,"input",14),e.NdJ("ngModelChange",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.smsCode=o)}),e.qZA()(),e.TgZ(24,"div",15),e._uU(25),e.ALo(26,"translate"),e.qZA(),e.TgZ(27,"div",16)(28,"code-input",17),e.NdJ("codeCompleted",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.newPassword=o)}),e.qZA()(),e.TgZ(29,"div",15),e._uU(30),e.ALo(31,"translate"),e.qZA(),e.TgZ(32,"div",18)(33,"code-input",17),e.NdJ("codeCompleted",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.confirmPassword=o)}),e.qZA()()(),e.YNc(34,ne,2,1,"div",12),e.qZA()(),e.TgZ(35,"app-progress-step")(36,"h1",19),e._uU(37," \u5bc6\u7801\u91cd\u7f6e\u6210\u529f "),e.qZA()()()(),e.TgZ(38,"div",20),e.YNc(39,se,2,2,"ion-button",21),e.YNc(40,oe,5,1,"ng-container",22),e.YNc(41,ie,2,0,"ion-button",23),e.qZA()()}if(2&n){const t=e.MAs(9),s=e.oxw();e.xp6(3),e.hij(" ",e.lcZ(4,13,"order-payment-retrieve-password")," "),e.xp6(13),e.Q6J("ngIf",s.message),e.xp6(7),e.Q6J("ngModel",s.smsCode),e.xp6(2),e.hij(" ",e.lcZ(26,15,"order-payment-password"),": "),e.xp6(3),e.Q6J("isCodeHidden",!0)("codeLength",6),e.xp6(2),e.hij(" ",e.lcZ(31,17,"order-payment-password-repeat"),": "),e.xp6(3),e.Q6J("isCodeHidden",!0)("codeLength",6),e.xp6(1),e.Q6J("ngIf",s.message),e.xp6(5),e.Q6J("ngIf",0==t.activeIndex),e.xp6(1),e.Q6J("ngIf",1==t.activeIndex),e.xp6(1),e.Q6J("ngIf",2==t.activeIndex)}}let ae=(()=>{class n extends x.V{constructor(t,s){super(),this.toastController=t,this.userService=s,this.isOpenChange=new e.vpe,this.mobileArea="+86",this.smsTimeRemaining=0,this.busy=!1}get smsCodeText(){return this.smsTimeRemaining>0?`Wait ${this.smsTimeRemaining}s to request new code`:"Get verification code"}getSmsCode(t){this.mobileArea&&this.mobile?(this.message=null,this.busy=!0,this.userService.queryMobileSms(this.mobileArea,this.mobile).pipe((0,C.R)(this.destroyStream$)).subscribe(s=>{this.busy=!1,s?.code>0?this.message=s.message:(this.showMessage("\u53d1\u9001\u6210\u529f",3e3,"top","success"),this.smsTimeRemaining=60,this.startTimeInterval(),t.next())})):this.message="Please enter valid mobile number"}startTimeInterval(){this.timeInterval=setInterval(()=>{this.smsTimeRemaining-=1,this.smsTimeRemaining<1&&clearInterval(this.timeInterval)},1e3)}onAction(t,s=null){t?!this.smsCode||!this.newPassword||!this.confirmPassword||(this.message=null,this.userService.resetPaymentPassWord({mobileArea:this.mobileArea,mobile:this.mobile,smsCode:this.smsCode,newPassword:j()(this.newPassword).toString()}).pipe((0,C.R)(this.destroyStream$),(0,b.K)(()=>(0,O.of)(null))).subscribe(o=>{o?.code>0?this.message=o.message:(s.next(),this.showMessage("\u8bbe\u7f6e\u6210\u529f",3e3,"top","success"),this.isOpenChange.emit(!1),s.next())})):this.isOpenChange.emit(!1)}showMessage(t,s,o,i){var a=this;return(0,w.Z)(function*(){yield(yield a.toastController.create({message:t,duration:s,position:o,color:i})).present()})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.yF),e.Y36(P.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-reset-payment-password"]],inputs:{isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange"},features:[e.qOj],decls:3,vars:4,consts:[[1,"visible","modal-medium",3,"title","isOpen","didDismiss"],[1,"flex","flex-col","rounded-xl","overflow-visible"],["id","modal-header",1,"flex","items-center","p-2","rounded-t-xl","w-full"],[1,"font-medium","text-xl","ml-2","tracking-tighter"],[1,"close","rounded-md","p-1","ml-auto","w-7","flex","items-center","justify-center","outline-none",3,"click"],[1,"w-5","text-white"],["id","modal-body",1,"bg-white","w-full","h-full","overflow-visible","px-4","py-3"],["progress",""],[1,"flex","flex-col","h-full","overflow-y-auto","overflow-x-hidden"],[1,"group","relative","flex","flex-col","p-4","rounded-xl","bg-white"],[1,"text-base","mb-2","mx-2"],[3,"onSelectPhoneCountry","onPhoneNumberChange"],["class","text-center w-full mb-2 text-red-600",4,"ngIf"],[1,"flex","items-center","mb-6","mx-2"],["type","text","placeholder","Verification Code","maxlength","6",1,"text-sm","px-3","focus:outline-none","w-full","border","input-box","rounded-md",3,"ngModel","ngModelChange"],[1,"font-medium","label","ml-2"],[1,"mt-2","mb-3"],[3,"isCodeHidden","codeLength","codeCompleted"],[1,"my-2"],[1,"text-base","mt-6","mb-2","py-4","mx-2","text-center","success"],["id","modal-footer",1,"flex","justify-between","sm:justify-end","w-full","p-2","border-t","border-slate-200","bg-white","rounded-b-xl"],["class","primary-btn",3,"disabled","click",4,"ngIf"],[4,"ngIf"],["class","primary-btn",3,"click",4,"ngIf"],[1,"text-center","w-full","mb-2","text-red-600"],[1,"primary-btn",3,"disabled","click"],["progressStepPrev","","fill","outline",1,"secondary-btn"],[1,"primary-btn",3,"click"]],template:function(t,s){1&t&&(e.TgZ(0,"ion-modal",0),e.NdJ("didDismiss",function(){return s.onAction(!1)}),e.ALo(1,"translate"),e.YNc(2,re,42,19,"ng-template"),e.qZA()),2&t&&(e.s9C("title",e.lcZ(1,2,"order-payment-retrieve-password")),e.Q6J("isOpen",s.isOpen))},dependencies:[l.O5,h.YG,h.ki,Q.D,f.Fj,f.JJ,f.nD,f.On,y,K.b,W,S,ee,g.X$],styles:[".label[_ngcontent-%COMP%]{color:#1c1c1c}code-input[_ngcontent-%COMP%]{max-width:450px;--item-height: 55px;--item-spacing: 10px;--item-border-radius: 6px}#modal-header[_ngcontent-%COMP%]{background:#f4f4f4}#modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{background:#ff2145}#modal-body[_ngcontent-%COMP%]{max-width:500px}#modal-body[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{border-color:#d9d9d9;height:50px}#modal-body[_ngcontent-%COMP%]   .input-box.telephone[_ngcontent-%COMP%]{height:unset}#modal-body[_ngcontent-%COMP%]   .input-box.telephone[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:340px}#modal-body[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]{width:452px}ion-button.primary-btn[_ngcontent-%COMP%]{--background: #fb8811}ion-button.secondary-btn[_ngcontent-%COMP%]{--color: #000000d9;--border-color: #d9d9d9;--transition: background-color .4s ease, color .4s ease, border-color .4s ease}ion-button.secondary-btn[_ngcontent-%COMP%]:hover{--color: #ffa73b;--border-color: #ffa73b}"]}),n})();function de(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7)(2,"div",8),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.ALo(7,"translate"),e.ALo(8,"translate"),e.qZA()(),e.TgZ(9,"div",9),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.createPasswordModalShown=!0)}),e._uU(10),e.ALo(11,"translate"),e.qZA()()}2&n&&(e.xp6(3),e.hij(" ",e.lcZ(4,4,"order-create-payment-password")," "),e.xp6(3),e.AsE(" ",e.lcZ(7,6,"order-payment-password-info1"),"\uff0c",e.lcZ(8,8,"order-payment-password-info2")," "),e.xp6(4),e.hij(" ",e.lcZ(11,10,"order-payment-password-button")," "))}function ce(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7)(2,"div",8),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"p",10),e._uU(6),e.ALo(7,"translate"),e.ALo(8,"translate"),e.qZA()(),e.TgZ(9,"div",9),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.updatePasswordModalShown=!0)}),e._uU(10),e.ALo(11,"translate"),e.qZA()()}2&n&&(e.xp6(3),e.hij(" ",e.lcZ(4,4,"order-payment-modify-password")," "),e.xp6(3),e.AsE(" ",e.lcZ(7,6,"order-payment-password-info1"),"\uff0c",e.lcZ(8,8,"order-payment-password-info2")," "),e.xp6(4),e.hij(" ",e.lcZ(11,10,"order-payment-modify-password-now")," "))}function pe(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7)(2,"div",8),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.ALo(7,"translate"),e.qZA()(),e.TgZ(8,"div",9),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.resetPasswordModalShown=!0)}),e._uU(9),e.ALo(10,"translate"),e.qZA()()}2&n&&(e.xp6(3),e.hij(" ",e.lcZ(4,3,"order-payment-retrieve-password")," "),e.xp6(3),e.Oqu(e.lcZ(7,5,"order-payment-retrieve-password-description")),e.xp6(3),e.hij(" ",e.lcZ(10,7,"order-payment-retrieve-password-now")," "))}let le=(()=>{class n extends x.V{constructor(t){super(),this.userService=t,this.createPasswordModalShown=!1,this.updatePasswordModalShown=!1,this.resetPasswordModalShown=!1}get isSettingPaymentKey(){return this.userInfo?.isSettingPaymentKey}ngOnInit(){this.userService.userInfo$.pipe((0,C.R)(this.destroyStream$)).subscribe(t=>{this.userInfo=t})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(P.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-payment-password"]],features:[e.qOj],decls:13,vars:9,consts:[[1,"px-3","lg:px-0","payment-password-wrapper"],[1,"mb-2","sm:mb-5","flex","justify-between"],[1,"text-2xl","font-semi-bold","hidden","md:flex"],[1,"grid","grid-cols-1","gap-2","sm:gap-5","mt-0","lg:mt-4","relative"],["class","card flex flex-col sm:flex-row items-center w-full p-4 sm:px-6 sm:py-8 rounded-lg bg-white border border-zinc-200 relative",4,"ngIf"],[3,"isOpen","isOpenChange"],[1,"card","flex","flex-col","sm:flex-row","items-center","w-full","p-4","sm:px-6","sm:py-8","rounded-lg","bg-white","border","border-zinc-200","relative"],[1,"flex-1"],[1,"text-lg","font-bold","mb-4","text-zinc-500","title"],[1,"h-fit","mt-4","sm:mt-0","sm:ml-4","self-end","sm:self-auto","py-1","bg-gradient-primary","text-white","font-semibold","custom-button","rounded-md","z-10","text-center","cursor-pointer",3,"click"],[1,"max-w-3xl"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),e._uU(3),e.ALo(4,"translate"),e.qZA()(),e.TgZ(5,"div")(6,"div",3),e.YNc(7,de,12,12,"div",4),e.YNc(8,ce,12,12,"div",4),e.YNc(9,pe,11,9,"div",4),e.qZA()()(),e.TgZ(10,"app-create-payment-password",5),e.NdJ("isOpenChange",function(i){return s.createPasswordModalShown=i}),e.qZA(),e.TgZ(11,"app-update-payment-password",5),e.NdJ("isOpenChange",function(i){return s.updatePasswordModalShown=i}),e.qZA(),e.TgZ(12,"app-reset-payment-password",5),e.NdJ("isOpenChange",function(i){return s.resetPasswordModalShown=i}),e.qZA()),2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,7,"order-payment-password")," "),e.xp6(4),e.Q6J("ngIf",!s.isSettingPaymentKey),e.xp6(1),e.Q6J("ngIf",s.isSettingPaymentKey),e.xp6(1),e.Q6J("ngIf",s.isSettingPaymentKey),e.xp6(1),e.Q6J("isOpen",s.createPasswordModalShown),e.xp6(1),e.Q6J("isOpen",s.updatePasswordModalShown),e.xp6(1),e.Q6J("isOpen",s.resetPasswordModalShown))},dependencies:[l.O5,R,q,ae,g.X$],styles:[".payment-password-wrapper[_ngcontent-%COMP%]{background:#f3f3f3}.custom-button[_ngcontent-%COMP%]{min-width:150px;top:1px}.card[_ngcontent-%COMP%]   .shadow-custom[_ngcontent-%COMP%]{filter:drop-shadow(0px 6px 3px rgba(0,0,0,.1))}.card[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 126 24 / var(--tw-text-opacity))}.card[_ngcontent-%COMP%]:hover   .shadow-custom-light[_ngcontent-%COMP%]{filter:drop-shadow(0px 3px 1px rgba(0,0,0,.03))}"]}),n})();var ue=d(7492);let me=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[A],imports:[l.ez,h.Pc,v.m,g.aw]}),n})();const he=[{path:"",component:le}];let ge=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,L.Bz.forChild(he),h.Pc,v.m,v.m,f.u5,g.aw,N,ue.R,me]}),n})()}}]);