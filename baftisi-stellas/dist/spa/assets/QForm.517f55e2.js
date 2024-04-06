import{i as Ve,r as z,o as ee,w as N,c as y,d as Ae,Y as we,a as ae,g as W,Z as _e,_ as Se,$ as Ee,s as ie,b as Y,W as Me,a0 as Re,h as M,t as X,T as Be,a1 as $e,j as Ie,u as ve,z as Oe}from"./index.5bc97ce9.js";import{e as me,d as Pe,b as Te}from"./QBtn.16124f6d.js";import{u as je,a as De}from"./use-dark.ebceab53.js";import{h as G,c as qe}from"./render.f8cec326.js";let re,te=0;const D=new Array(256);for(let e=0;e<256;e++)D[e]=(e+256).toString(16).substring(1);const ze=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const a=new Uint8Array(t);return e.getRandomValues(a),a}}return t=>{const a=[];for(let i=t;i>0;i--)a.push(Math.floor(Math.random()*256));return a}})(),ge=4096;function se(){(re===void 0||te+16>ge)&&(te=0,re=ze(ge));const e=Array.prototype.slice.call(re,te,te+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,D[e[0]]+D[e[1]]+D[e[2]]+D[e[3]]+"-"+D[e[4]]+D[e[5]]+"-"+D[e[6]]+D[e[7]]+"-"+D[e[8]]+D[e[9]]+"-"+D[e[10]]+D[e[11]]+D[e[12]]+D[e[13]]+D[e[14]]+D[e[15]]}function Ze(e){return e==null?null:e}function he(e,t){return e==null?t===!0?`f_${se()}`:null:e}function Le({getValue:e,required:t=!0}={}){if(Ve.value===!0){const a=e!==void 0?z(Ze(e())):z(null);return t===!0&&a.value===null&&ee(()=>{a.value=`f_${se()}`}),e!==void 0&&N(e,i=>{a.value=he(i,t)}),a}return e!==void 0?y(()=>he(e(),t)):z(`f_${se()}`)}function Ne({validate:e,resetValidation:t,requiresQForm:a}){const i=Ae(we,!1);if(i!==!1){const{props:f,proxy:d}=W();Object.assign(d,{validate:e,resetValidation:t}),N(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),ee(()=>{f.disable!==!0&&i.bindComponent(d)}),ae(()=>{f.disable!==!0&&i.unbindComponent(d)})}else a===!0&&console.error("Parent QForm not found on useFormChild()!")}const be=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,pe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ye=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ne=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,oe=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ue={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>be.test(e),hexaColor:e=>pe.test(e),hexOrHexaColor:e=>ye.test(e),rgbColor:e=>ne.test(e),rgbaColor:e=>oe.test(e),rgbOrRgbaColor:e=>ne.test(e)||oe.test(e),hexOrRgbColor:e=>be.test(e)||ne.test(e),hexaOrRgbaColor:e=>pe.test(e)||oe.test(e),anyColor:e=>ye.test(e)||ne.test(e)||oe.test(e)},Ke=[!0,!1,"ondemand"],Ue={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Ke.includes(e)}};function He(e,t){const{props:a,proxy:i}=W(),f=z(!1),d=z(null),v=z(!1);Ne({validate:P,resetValidation:A});let x=0,B;const R=y(()=>a.rules!==void 0&&a.rules!==null&&a.rules.length!==0),k=y(()=>a.disable!==!0&&R.value===!0&&t.value===!1),m=y(()=>a.error===!0||f.value===!0),H=y(()=>typeof a.errorMessage=="string"&&a.errorMessage.length!==0?a.errorMessage:d.value);N(()=>a.modelValue,()=>{v.value=!0,k.value===!0&&a.lazyRules===!1&&T()});function c(){a.lazyRules!=="ondemand"&&k.value===!0&&v.value===!0&&T()}N(()=>a.reactiveRules,Z=>{Z===!0?B===void 0&&(B=N(()=>a.rules,c,{immediate:!0,deep:!0})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),N(()=>a.lazyRules,c),N(e,Z=>{Z===!0?v.value=!0:k.value===!0&&a.lazyRules!=="ondemand"&&T()});function A(){x++,t.value=!1,v.value=!1,f.value=!1,d.value=null,T.cancel()}function P(Z=a.modelValue){if(a.disable===!0||R.value===!1)return!0;const $=++x,F=t.value!==!0?()=>{v.value=!0}:()=>{},V=(w,C)=>{w===!0&&F(),f.value=w,d.value=C||null,t.value=!1},_=[];for(let w=0;w<a.rules.length;w++){const C=a.rules[w];let j;if(typeof C=="function"?j=C(Z,ue):typeof C=="string"&&ue[C]!==void 0&&(j=ue[C](Z)),j===!1||typeof j=="string")return V(!0,j),!1;j!==!0&&j!==void 0&&_.push(j)}return _.length===0?(V(!1),!0):(t.value=!0,Promise.all(_).then(w=>{if(w===void 0||Array.isArray(w)===!1||w.length===0)return $===x&&V(!1),!0;const C=w.find(j=>j===!1||typeof j=="string");return $===x&&V(C!==void 0,C),C===void 0},w=>($===x&&(console.error(w),V(!0)),!1)))}const T=_e(P,0);return ae(()=>{B!==void 0&&B(),T.cancel()}),Object.assign(i,{resetValidation:A,validate:P}),Se(i,"hasError",()=>m.value),{isDirtyModel:v,hasRules:R,hasError:m,errorMessage:H,validate:P,resetValidation:A}}const xe=/^on[A-Z]/;function Qe(){const{attrs:e,vnode:t}=W(),a={listeners:z({}),attributes:z({})};function i(){const f={},d={};for(const v in e)v!=="class"&&v!=="style"&&xe.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)xe.test(v)===!0&&(d[v]=t.props[v]);a.attributes.value=f,a.listeners.value=d}return Ee(i),i(),a}let de=[],Ye=[];function ce(e){Ye.length===0?e():de.push(e)}function We(e){de=de.filter(t=>t!==e)}function fe(e){return e!=null&&(""+e).length!==0}const Je={...je,...Ue,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Xe=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ge({requiredForAttr:e=!0,tagProp:t}={}){const{props:a,proxy:i}=W(),f=De(a,i.$q),d=Le({required:e,getValue:()=>a.for});return{requiredForAttr:e,tag:t===!0?y(()=>a.tag):{value:"label"},isDark:f,editable:y(()=>a.disable!==!0&&a.readonly!==!0),innerLoading:z(!1),focused:z(!1),hasPopupOpen:!1,splitAttrs:Qe(),targetUid:d,rootRef:z(null),targetRef:z(null),controlRef:z(null)}}function et(e){const{props:t,emit:a,slots:i,attrs:f,proxy:d}=W(),{$q:v}=d;let x=null;e.hasValue===void 0&&(e.hasValue=y(()=>fe(t.modelValue))),e.emitValue===void 0&&(e.emitValue=o=>{a("update:modelValue",o)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:l}),Object.assign(e,{clearValue:s,onControlFocusin:r,onControlFocusout:l,focus:C}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const o=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return o+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:B,hasRules:R,hasError:k,errorMessage:m,resetValidation:H}=He(e.focused,e.innerLoading),c=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),A=y(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),P=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),T=y(()=>`q-field row no-wrap items-start q-field--${P.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(c.value===!0?" q-field--float":"")+($.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(k.value===!0?" q-field--error":"")+(k.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&A.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),Z=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(k.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),$=y(()=>t.labelSlot===!0||t.label!==void 0),F=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&k.value!==!0?` text-${t.labelColor}`:"")),V=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:c.value,modelValue:t.modelValue,emitValue:e.emitValue})),_=y(()=>{const o={};return e.targetUid.value&&(o.for=e.targetUid.value),t.disable===!0&&(o["aria-disabled"]="true"),o});function w(){const o=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(o===null||o.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==o&&h.focus({preventScroll:!0}))}function C(){ce(w)}function j(){We(w);const o=document.activeElement;o!==null&&e.rootRef.value.contains(o)&&o.blur()}function r(o){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,a("focus",o))}function l(o,h){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,a("blur",o)),h!==void 0&&h())})}function s(o){ie(o),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),a("update:modelValue",null),a("clear",t.modelValue),Y(()=>{const h=B.value;H(),B.value=h})}function u(){const o=[];return i.prepend!==void 0&&o.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},i.prepend())),o.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},b())),k.value===!0&&t.noErrorIcon===!1&&o.push(q("error",[M(me,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?o.push(q("inner-loading-append",i.loading!==void 0?i.loading():[M(Pe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&o.push(q("inner-clearable-append",[M(me,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&o.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},i.append())),e.getInnerAppend!==void 0&&o.push(q("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&o.push(e.getControlChild()),o}function b(){const o=[];return t.prefix!==void 0&&t.prefix!==null&&o.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&o.push(e.getShadowControl()),e.getControl!==void 0?o.push(e.getControl()):i.rawControl!==void 0?o.push(i.rawControl()):i.control!==void 0&&o.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(V.value))),$.value===!0&&o.push(M("div",{class:F.value},G(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&o.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),o.concat(G(i.default))}function g(){let o,h;k.value===!0?m.value!==null?(o=[M("div",{role:"alert"},m.value)],h=`q--slot-error-${m.value}`):(o=G(i.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(o=[M("div",t.hint)],h=`q--slot-hint-${t.hint}`):(o=G(i.hint),h="q--slot-hint"));const K=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&K===!1&&o===void 0)return;const S=M("div",{key:h,class:"q-field__messages col"},o);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?S:M(Be,{name:"q-transition--field-message"},()=>S),K===!0?M("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function q(o,h){return h===null?null:M("div",{key:o,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let p=!1;return Me(()=>{p=!0}),Re(()=>{p===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&ee(()=>{d.focus()}),ae(()=>{x!==null&&clearTimeout(x)}),Object.assign(d,{focus:C,blur:j}),function(){const h=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,..._.value}:_.value;return M(e.tag.value,{ref:e.rootRef,class:[T.value,f.class],style:f.style,...h},[i.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},i.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:Z.value,tabindex:-1,...e.controlEvents},u()),A.value===!0?g():null]),i.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},i.after()):null])}}const ke={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Fe=Object.keys(le);Fe.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const tt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Fe.join("")+"])|(.)","g"),Ce=/[.*+?^${}()|[\]\\]/g,I=String.fromCharCode(1),nt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function ot(e,t,a,i){let f,d,v,x,B,R;const k=z(null),m=z(c());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,P),N(()=>e.mask,r=>{if(r!==void 0)T(m.value,!0);else{const l=C(m.value);P(),e.modelValue!==l&&t("update:modelValue",l)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{k.value===!0&&T(m.value,!0)}),N(()=>e.unmaskedValue,()=>{k.value===!0&&T(m.value)});function c(){if(P(),k.value===!0){const r=_(C(e.modelValue));return e.fillMask!==!1?j(r):r}return e.modelValue}function A(r){if(r<f.length)return f.slice(-r);let l="",s=f;const u=s.indexOf(I);if(u!==-1){for(let b=r-s.length;b>0;b--)l+=I;s=s.slice(0,u)+l+s.slice(u)}return s}function P(){if(k.value=e.mask!==void 0&&e.mask.length!==0&&H(),k.value===!1){x=void 0,f="",d="";return}const r=ke[e.mask]===void 0?e.mask:ke[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=l.replace(Ce,"\\$&"),u=[],b=[],g=[];let q=e.reverseFillMask===!0,p="",o="";r.replace(tt,(O,n,E,Q,U)=>{if(Q!==void 0){const L=le[Q];g.push(L),o=L.negate,q===!0&&(b.push("(?:"+o+"+)?("+L.pattern+"+)?(?:"+o+"+)?("+L.pattern+"+)?"),q=!1),b.push("(?:"+o+"+)?("+L.pattern+")?")}else if(E!==void 0)p="\\"+(E==="\\"?"":E),g.push(E),u.push("([^"+p+"]+)?"+p+"?");else{const L=n!==void 0?n:U;p=L==="\\"?"\\\\\\\\":L.replace(Ce,"\\\\$&"),g.push(L),u.push("([^"+p+"]+)?"+p+"?")}});const h=new RegExp("^"+u.join("")+"("+(p===""?".":"[^"+p+"]")+"+)?"+(p===""?"":"["+p+"]*")+"$"),K=b.length-1,S=b.map((O,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+O):n===K?new RegExp("^"+O+"("+(o===""?".":o)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+O));v=g,x=O=>{const n=h.exec(e.reverseFillMask===!0?O:O.slice(0,g.length+1));n!==null&&(O=n.slice(1).join(""));const E=[],Q=S.length;for(let U=0,L=O;U<Q;U++){const J=S[U].exec(L);if(J===null)break;L=L.slice(J.shift().length),E.push(...J)}return E.length!==0?E.join(""):O},f=g.map(O=>typeof O=="string"?O:I).join(""),d=f.split(I).join(l)}function T(r,l,s){const u=i.value,b=u.selectionEnd,g=u.value.length-b,q=C(r);l===!0&&P();const p=_(q),o=e.fillMask!==!1?j(p):p,h=m.value!==o;u.value!==o&&(u.value=o),h===!0&&(m.value=o),document.activeElement===u&&Y(()=>{if(o===d){const S=e.reverseFillMask===!0?d.length:0;u.setSelectionRange(S,S,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const S=u.selectionEnd;let O=b-1;for(let n=B;n<=O&&n<S;n++)f[n]!==I&&O++;$.right(u,O);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const S=e.reverseFillMask===!0?b===0?o.length>p.length?1:0:Math.max(0,o.length-(o===d?0:Math.min(p.length,g)+1))+1:b;u.setSelectionRange(S,S,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const S=Math.max(0,o.length-(o===d?0:Math.min(p.length,g+1)));S===1&&b===1?u.setSelectionRange(S,S,"forward"):$.rightReverse(u,S)}else{const S=o.length-g;u.setSelectionRange(S,S,"backward")}else if(h===!0){const S=Math.max(0,f.indexOf(I),Math.min(p.length,b)-1);$.right(u,S)}else{const S=b-1;$.right(u,S)}});const K=e.unmaskedValue===!0?C(o):o;String(e.modelValue)!==K&&(e.modelValue!==null||K!=="")&&a(K,!0)}function Z(r,l,s){const u=_(C(r.value));l=Math.max(0,f.indexOf(I),Math.min(u.length,l)),B=l,r.setSelectionRange(l,s,"forward")}const $={left(r,l){const s=f.slice(l-1).indexOf(I)===-1;let u=Math.max(0,l-1);for(;u>=0;u--)if(f[u]===I){l=u,s===!0&&l++;break}if(u<0&&f[l]!==void 0&&f[l]!==I)return $.right(r,0);l>=0&&r.setSelectionRange(l,l,"backward")},right(r,l){const s=r.value.length;let u=Math.min(s,l+1);for(;u<=s;u++)if(f[u]===I){l=u;break}else f[u-1]===I&&(l=u);if(u>s&&f[l-1]!==void 0&&f[l-1]!==I)return $.left(r,s);r.setSelectionRange(l,l,"forward")},leftReverse(r,l){const s=A(r.value.length);let u=Math.max(0,l-1);for(;u>=0;u--)if(s[u-1]===I){l=u;break}else if(s[u]===I&&(l=u,u===0))break;if(u<0&&s[l]!==void 0&&s[l]!==I)return $.rightReverse(r,0);l>=0&&r.setSelectionRange(l,l,"backward")},rightReverse(r,l){const s=r.value.length,u=A(s),b=u.slice(0,l+1).indexOf(I)===-1;let g=Math.min(s,l+1);for(;g<=s;g++)if(u[g-1]===I){l=g,l>0&&b===!0&&l--;break}if(g>s&&u[l-1]!==void 0&&u[l-1]!==I)return $.leftReverse(r,s);r.setSelectionRange(l,l,"forward")}};function F(r){t("click",r),R=void 0}function V(r){if(t("keydown",r),$e(r)===!0||r.altKey===!0)return;const l=i.value,s=l.selectionStart,u=l.selectionEnd;if(r.shiftKey||(R=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&R===void 0&&(R=l.selectionDirection==="forward"?s:u);const b=$[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),b(l,R===s?u:s),r.shiftKey){const g=l.selectionStart;l.setSelectionRange(Math.min(R,g),Math.max(R,g),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&s===u?($.left(l,s),l.setSelectionRange(l.selectionStart,u,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&s===u&&($.rightReverse(l,u),l.setSelectionRange(s,l.selectionEnd,"forward"))}function _(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return w(r);const l=v;let s=0,u="";for(let b=0;b<l.length;b++){const g=r[s],q=l[b];if(typeof q=="string")u+=q,g===q&&s++;else if(g!==void 0&&q.regex.test(g))u+=q.transform!==void 0?q.transform(g):g,s++;else return u}return u}function w(r){const l=v,s=f.indexOf(I);let u=r.length-1,b="";for(let g=l.length-1;g>=0&&u!==-1;g--){const q=l[g];let p=r[u];if(typeof q=="string")b=q+b,p===q&&u--;else if(p!==void 0&&q.regex.test(p))do b=(q.transform!==void 0?q.transform(p):p)+b,u--,p=r[u];while(s===g&&p!==void 0&&q.regex.test(p));else return b}return b}function C(r){return typeof r!="string"||x===void 0?typeof r=="number"?x(""+r):r:x(r)}function j(r){return d.length-r.length<=0?r:e.reverseFillMask===!0&&r.length!==0?d.slice(0,-r.length)+r:r+d.slice(r.length)}return{innerValue:m,hasMask:k,moveCursorForPaste:Z,updateMaskValue:T,onMaskedKeydown:V,onMaskedClick:F}}const lt={name:String};function ht(e={}){return(t,a,i)=>{t[a](M("input",{class:"hidden"+(i||""),...e.value}))}}function at(e){return y(()=>e.name||e.for)}function rt(e,t){function a(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return a()}):y(a)}const ut=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,it=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,st=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,dt=/[a-z0-9_ -]$/i;function ft(e){return function(a){if(a.type==="compositionend"||a.type==="change"){if(a.target.qComposing!==!0)return;a.target.qComposing=!1,e(a)}else a.type==="compositionupdate"&&a.target.qComposing!==!0&&typeof a.data=="string"&&(Ie.is.firefox===!0?dt.test(a.data)===!1:ut.test(a.data)===!0||it.test(a.data)===!0||st.test(a.data)===!0)===!0&&(a.target.qComposing=!0)}}var bt=qe({name:"QInput",inheritAttrs:!1,props:{...Je,...nt,...lt,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Xe,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:a}){const{proxy:i}=W(),{$q:f}=i,d={};let v=NaN,x,B,R=null,k;const m=z(null),H=at(e),{innerValue:c,hasMask:A,moveCursorForPaste:P,updateMaskValue:T,onMaskedKeydown:Z,onMaskedClick:$}=ot(e,t,p,m),F=rt(e,!0),V=y(()=>fe(c.value)),_=ft(g),w=Ge(),C=y(()=>e.type==="textarea"||e.autogrow===!0),j=y(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),r=y(()=>{const n={...w.splitAttrs.listeners.value,onInput:g,onPaste:b,onChange:h,onBlur:K,onFocus:ve};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=_,A.value===!0&&(n.onKeydown=Z,n.onClick=$),e.autogrow===!0&&(n.onAnimationend=q),n}),l=y(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...w.splitAttrs.attributes.value,id:w.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});N(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),N(()=>e.modelValue,n=>{if(A.value===!0){if(B===!0&&(B=!1,String(n)===v))return;T(n)}else c.value!==n&&(c.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete d.value));e.autogrow===!0&&Y(o)}),N(()=>e.autogrow,n=>{n===!0?Y(o):m.value!==null&&a.rows>0&&(m.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&Y(o)});function s(){ce(()=>{const n=document.activeElement;m.value!==null&&m.value!==n&&(n===null||n.id!==w.targetUid.value)&&m.value.focus({preventScroll:!0})})}function u(){m.value!==null&&m.value.select()}function b(n){if(A.value===!0&&e.reverseFillMask!==!0){const E=n.target;P(E,E.selectionStart,E.selectionEnd)}t("paste",n)}function g(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const E=n.target.value;if(n.target.qComposing===!0){d.value=E;return}if(A.value===!0)T(E,!1,n.inputType);else if(p(E),j.value===!0&&n.target===document.activeElement){const{selectionStart:Q,selectionEnd:U}=n.target;Q!==void 0&&U!==void 0&&Y(()=>{n.target===document.activeElement&&E.indexOf(n.target.value)===0&&n.target.setSelectionRange(Q,U)})}e.autogrow===!0&&o()}function q(n){t("animationend",n),o()}function p(n,E){k=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&v!==n&&(v=n,E===!0&&(B=!0),t("update:modelValue",n),Y(()=>{v===n&&(v=NaN)})),k=void 0},e.type==="number"&&(x=!0,d.value=n),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=n,R=setTimeout(k,e.debounce)):k()}function o(){requestAnimationFrame(()=>{const n=m.value;if(n!==null){const E=n.parentNode.style,{scrollTop:Q}=n,{overflowY:U,maxHeight:L}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),J=U!==void 0&&U!=="scroll";J===!0&&(n.style.overflowY="hidden"),E.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",J===!0&&(n.style.overflowY=parseInt(L,10)<n.scrollHeight?"auto":"hidden"),E.marginBottom="",n.scrollTop=Q}})}function h(n){_(n),R!==null&&(clearTimeout(R),R=null),k!==void 0&&k(),t("change",n.target.value)}function K(n){n!==void 0&&ve(n),R!==null&&(clearTimeout(R),R=null),k!==void 0&&k(),x=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=c.value!==void 0?c.value:"")})}function S(){return d.hasOwnProperty("value")===!0?d.value:c.value!==void 0?c.value:""}ae(()=>{K()}),ee(()=>{e.autogrow===!0&&o()}),Object.assign(w,{innerValue:c,fieldClass:y(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:m,emitValue:p,hasValue:V,floatingLabel:y(()=>V.value===!0&&(e.type!=="number"||isNaN(c.value)===!1)||fe(e.displayValue)),getControl:()=>M(C.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...r.value,...e.type!=="file"?{value:S()}:F.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},S()),M("span",e.shadowText)])});const O=et(w);return Object.assign(i,{focus:s,select:u,getNativeElement:()=>m.value}),Se(i,"nativeEl",()=>m.value),O}}),pt=qe({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:a}){const i=W(),f=z(null);let d=0;const v=[];function x(c){const A=typeof c=="boolean"?c:e.noErrorFocus!==!0,P=++d,T=(F,V)=>{a("validation"+(F===!0?"Success":"Error"),V)},Z=F=>{const V=F.validate();return typeof V.then=="function"?V.then(_=>({valid:_,comp:F}),_=>({valid:!1,comp:F,err:_})):Promise.resolve({valid:V,comp:F})};return(e.greedy===!0?Promise.all(v.map(Z)).then(F=>F.filter(V=>V.valid!==!0)):v.reduce((F,V)=>F.then(()=>Z(V).then(_=>{if(_.valid===!1)return Promise.reject(_)})),Promise.resolve()).catch(F=>[F])).then(F=>{if(F===void 0||F.length===0)return P===d&&T(!0),!0;if(P===d){const{comp:V,err:_}=F[0];if(_!==void 0&&console.error(_),T(!1,V),A===!0){const w=F.find(({comp:C})=>typeof C.focus=="function"&&Te(C.$)===!1);w!==void 0&&w.comp.focus()}}return!1})}function B(){d++,v.forEach(c=>{typeof c.resetValidation=="function"&&c.resetValidation()})}function R(c){c!==void 0&&ie(c);const A=d+1;x().then(P=>{A===d&&P===!0&&(e.onSubmit!==void 0?a("submit",c):c!==void 0&&c.target!==void 0&&typeof c.target.submit=="function"&&c.target.submit())})}function k(c){c!==void 0&&ie(c),a("reset"),Y(()=>{B(),e.autofocus===!0&&e.noResetFocus!==!0&&m()})}function m(){ce(()=>{if(f.value===null)return;const c=f.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),A=>A.tabIndex!==-1);c!=null&&c.focus({preventScroll:!0})})}Oe(we,{bindComponent(c){v.push(c)},unbindComponent(c){const A=v.indexOf(c);A!==-1&&v.splice(A,1)}});let H=!1;return Me(()=>{H=!0}),Re(()=>{H===!0&&e.autofocus===!0&&m()}),ee(()=>{e.autofocus===!0&&m()}),Object.assign(i.proxy,{validate:x,resetValidation:B,submit:R,reset:k,focus:m,getValidationComponents:()=>v}),()=>M("form",{class:"q-form",ref:f,onSubmit:R,onReset:k},G(t.default))}});export{bt as Q,pt as a,ht as b,lt as u};