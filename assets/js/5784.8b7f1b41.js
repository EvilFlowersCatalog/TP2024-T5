/*! For license information please see 5784.8b7f1b41.js.LICENSE.txt */
"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[5784],{55784:(t,e,s)=>{s.r(e),s.d(e,{CanarySearch:()=>v});var n=s(44440),i=s(22697),r=s(14715),o=s(11674),a=s(73277),c=s(6468),u=s(91089),l=s(99408),h=s(82208),d=Object.defineProperty,p=Object.getOwnPropertyDescriptor,b=(t,e,s,n)=>{for(var i,r=n>1?void 0:n?p(e,s):e,o=t.length-1;o>=0;o--)(i=t[o])&&(r=(n?i(e,s,r):i(r))||r);return n&&r&&d(e,s,r),r};let v=class extends n.s{constructor(){super(...arguments),this.MODE=u.M,this._containerRef=(0,o.e)()}connectedCallback(){super.connectedCallback(),this.dispatchEvent((0,h.lh)({type:"register_mode",data:this.MODE}))}render(){return this._mode.current!==this.MODE?n.T:n.x`
          <div class="container">
            <div class="input-wrapper">
              <slot name="input-before">
                <div class="i-heroicons-magnifying-glass"></div>
              </slot>
              <slot name="input"></slot>
              <slot name="input-after"></slot>
            </div>
            <div class="scroll-container" ${(0,o.n)(this._containerRef)}>
              <div class="body">
                <slot name="body"></slot>
              </div>
            </div>
          </div>
        `}};v.styles=[l.g,l.s,n.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-magnifying-glass{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.static{position:static;}
.flex{display:flex;};
    `,n.i`
      .container {
        display: flex;
        flex-direction: column;
      }

      .input-wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 1px 12px;
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
    `],b([(0,a.c)({context:c.pC,subscribe:!0}),(0,r.r)()],v.prototype,"_mode",2),v=b([(0,i.t)("canary-search")],v)},91089:(t,e,s)=>{s.d(e,{L:()=>r,M:()=>n,a:()=>i});const n="Search",i="Ask",r="Docs"},73277:(t,e,s)=>{s.d(e,{c:()=>i});var n=s(45793);function i({context:t,subscribe:e}){return(s,i)=>{"object"==typeof i?i.addInitializer((function(){new n.s(this,{context:t,callback:t=>{s.set.call(this,t)},subscribe:e})})):s.constructor.addInitializer((s=>{new n.s(s,{context:t,callback:t=>{s[i]=t},subscribe:e})}))}}},45793:(t,e,s)=>{s.d(e,{s:()=>i});var n=s(50699);class i{constructor(t,e,s,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new n.s(this.context,this.t,this.subscribe))}}},78030:(t,e,s)=>{s.d(e,{i:()=>o});var n=s(50699);class i{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:n}=this.subscriptions.get(t);t(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}class r extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class o extends i{constructor(t,e,s){var i,r;super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[i,{consumerHost:r}]of this.subscriptions)s.has(i)||(s.add(i),r.dispatchEvent(new n.s(this.context,i,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),null==(r=(i=this.host).addController)||r.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new r(this.context))}}},50699:(t,e,s)=>{s.d(e,{s:()=>n});let n=class extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s??!1}}},6468:(t,e,s)=>{s.d(e,{JF:()=>l,LL:()=>r,br:()=>i,iK:()=>c,pC:()=>o,qD:()=>a,vJ:()=>u});const n=t=>Symbol(t),i=n("theme"),r=n("operation"),o=n("mode"),a=n("query"),c=n("search"),u=n("ask"),l=n("tabs")},59700:(t,e,s)=>{s.d(e,{e:()=>i,i:()=>r,t:()=>n});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>(...e)=>({_$litDirective$:t,values:e});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},81660:(t,e,s)=>{s.d(e,{A:()=>u,S:()=>c,T:()=>o});var n=s(78030),i=s(42551),r=s(6468);const o={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},a="manager";class c{constructor(t,e){this._abortController=new AbortController,this._callId=0,this._initialState={status:o.INITIAL,result:{search:[],suggestion:{questions:[]}}},this._options=e,this._ctx=new n.i(t,{context:r.iK,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}abort(){var t;this.ctx.status===o.PENDING&&(null==(t=this._abortController)||t.abort(a))}async run(t,e){var s;if(!e.search)return;this.ctx.status===o.PENDING&&this._abortController.abort(a),this.transition({status:o.PENDING});const n=++this._callId;if(null==(s=e.beforeSearch)||s.call(e,t),await(0,i.cM)(this._options.debounceMs),n===this._callId){this._abortController=new AbortController;try{const s=await e.search({query:t},this._abortController.signal);this.transition({status:o.COMPLETE,result:s})}catch(r){if(r===a)return void this.transition({status:o.INITIAL});console.error(r),this.transition({status:o.ERROR})}}else this.transition({status:o.INITIAL})}transition(t){this.ctx={...this.ctx,...t}}}class u{constructor(t){this._abortController=new AbortController,this._initialState={status:o.INITIAL,response:"",references:[],progress:!1,query:""},this._ctx=new n.i(t,{context:r.vJ,initialValue:this._initialState})}abort(){var t;this.ctx.status===o.PENDING&&(null==(t=this._abortController)||t.abort(a))}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}async run(t,e,s){if(s.ask&&0!==t.length){this.ctx.status===o.PENDING&&this._abortController.abort(a),this.transition({...this._initialState,status:o.PENDING,query:t}),this._abortController=new AbortController;try{await s.ask({id:crypto.randomUUID(),query:t,pattern:e},this._handleDelta.bind(this),this._abortController.signal),this.transition({status:o.COMPLETE,progress:!1})}catch(n){if(n===a)return;console.error(n),this.transition({status:o.ERROR})}}}_handleDelta(t){if("progress"===t.type){const e=this.ctx.response+t.content;this.transition({response:e,progress:!0})}"complete"===t.type&&this.transition({response:t.content,progress:!1}),"references"===t.type&&this.transition({references:t.items})}transition(t){this.ctx={...this.ctx,...t}}}},11674:(t,e,s)=>{s.d(e,{e:()=>d,n:()=>v});var n=s(44440),i=s(59700);const r=(t,e)=>{var s;const n=t._$AN;if(void 0===n)return!1;for(const i of n)null==(s=i._$AO)||s.call(i,e,!1),r(i,e);return!0},o=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},a=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),l(e)}};function c(t){void 0!==this._$AN?(o(this),this._$AM=t,a(this)):this._$AM=t}function u(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(n))for(let a=s;a<n.length;a++)r(n[a],!1),o(n[a]);else null!=n&&(r(n,!1),o(n));else r(this,t)}const l=t=>{t.type==i.t.CHILD&&(t._$AP??(t._$AP=u),t._$AQ??(t._$AQ=c))};class h extends i.i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),a(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?null==(s=this.reconnected)||s.call(this):null==(n=this.disconnected)||n.call(this)),e&&(r(this,t),o(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const d=()=>new p;class p{}const b=new WeakMap,v=(0,i.e)(class extends h{render(t){return n.T}update(t,[e]){var s;const i=e!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=e,this.ht=null==(s=t.options)?void 0:s.host,this.rt(this.ct=t.element)),n.T}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const e=this.ht??globalThis;let s=b.get(e);void 0===s&&(s=new WeakMap,b.set(e,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return"function"==typeof this.Y?null==(t=b.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(e=this.Y)?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},14715:(t,e,s)=>{s.d(e,{r:()=>i});var n=s(34676);function i(t){return(0,n.n)({...t,state:!0,attribute:!1})}},82208:(t,e,s)=>{s.d(e,{b8:()=>l,lh:()=>h,y$:()=>u});var n=s(78030),i=s(6468),r=s(81660),o=s(91089);const a="function"==typeof Symbol&&Symbol.observable||"@@observable";function c(t,e,s){let n;const i={context:t,status:"active",output:void 0,error:void 0};let r=i;const o=function(t){return(e,s)=>{let n=e.context;const i=null==t?void 0:t[s.type];if(!i)return e;if("function"==typeof i)n=(t=>Object.assign({},n,null==i?void 0:i(t,s)))(n);else{const t={};for(const e of Object.keys(i)){const r=i[e];t[e]="function"==typeof r?r(n,s):r}n=Object.assign({},n,t)}return{...e,context:n}}}(e);return{send(t){!function(t){r=o(r,t),null==n||n.forEach((t=>{var e;return null==(e=t.next)?void 0:e.call(t,r)}))}(t)},getSnapshot:()=>r,getInitialSnapshot:()=>i,subscribe(t){const e=function(t,e,s){var n,i,r;const o="object"==typeof t,a=o?t:void 0;return{next:null==(n=o?t.next:t)?void 0:n.bind(a),error:null==(i=o?t.error:e)?void 0:i.bind(a),complete:null==(r=o?t.complete:s)?void 0:r.bind(a)}}(t);return n??(n=new Set),n.add(e),{unsubscribe:()=>null==n?void 0:n.delete(e)}},[a](){return this}}}const u=t=>c({operation:new n.i(t,{context:i.LL,initialValue:{}}),mode:new n.i(t,{context:i.pC,initialValue:{options:new Set([]),default:null,current:null}}),tab:new n.i(t,{context:i.JF,initialValue:{options:[],current:0}}),query:new n.i(t,{context:i.qD,initialValue:""}),searchManager:new r.S(t,{debounceMs:100}),askManager:new r.A(t)},{register_operations:{operation:(t,{data:e})=>(t.operation.setValue({...t.operation.value,...e}),t.operation)},register_mode:{mode:(t,{data:e})=>(t.mode.setValue({options:t.mode.value.options.add(e),current:t.mode.value.current??e,default:t.mode.value.default??e}),t.mode)},register_tab:{tab:(t,{data:e})=>(t.tab.setValue({options:e,current:0}),t.tab)},set_mode:{mode:(t,{data:e})=>{var s,n;if(t.mode.setValue({...t.mode.value,current:e}),e===o.M)t.askManager.abort(),t.searchManager.run(t.query.value,t.operation.value);else if(e===o.a){t.searchManager.abort();const e=t.tab.value,i=null==(n=null==(s=e.options)?void 0:s[e.current])?void 0:n.pattern;t.askManager.run(t.query.value,i,t.operation.value)}else t.searchManager.abort(),t.askManager.abort();return t.mode}},set_tab:{tab:(t,{data:e})=>(t.tab.setValue({...t.tab.value,current:e}),t.tab)},set_query:{query:(t,{data:e})=>{var s,n;if(t.query.setValue(e),t.mode.value.current===o.M&&t.searchManager.run(e,t.operation.value),t.mode.value.current===o.a){const i=t.tab.value,r=null==(n=null==(s=i.options)?void 0:s[i.current])?void 0:n.pattern;t.askManager.run(e,r,t.operation.value)}return t.query}},_unsafe_set_ask_ctx:{askManager:(t,{data:e})=>(t.askManager.ctx={...t.askManager.ctx,...e},t.askManager)}}),l="canary-broadcast",h=t=>new CustomEvent(l,{detail:t,composed:!0,bubbles:!0})},42551:(t,e,s)=>{s.d(e,{Kl:()=>r,b2:()=>n,cM:()=>i,vx:()=>o});const n=t=>o(t).pathname.split("/").map(((t,e)=>{const s=t.replace(/[-_]/g," ");return s.charAt(0).toUpperCase()+s.slice(1)})).map((t=>t.includes("#")?t.split("#")[0]:t)).map((t=>t.endsWith(".html")?t.replace(".html",""):t)).map(decodeURIComponent).filter(Boolean).slice(-4),i=async t=>new Promise((e=>setTimeout(e,t))),r=t=>{try{const{pathname:e,search:s}=o(t);return e+s}catch{return t}},o=t=>{const e=t.startsWith("http")?t:t.startsWith("/")?`https://example.com${t}`:`https://example.com/${t}`;return new URL(e)}}}]);