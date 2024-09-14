"use strict";(self.webpackChunkiobroker_admin_component_telegram=self.webpackChunkiobroker_admin_component_telegram||[]).push([["src_ConfigCustomInstancesSelector_jsx"],{94976:(ve,W,O)=>{O.d(W,{A:()=>he});var z=O(28437),p=O.n(z),B=O(95973),I=O.n(B),H=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const N={randomUUID:H};var D,J=new Uint8Array(16);function L(){if(!D&&(D=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!D))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return D(J)}for(var b=[],U=0;U<256;++U)b.push((U+256).toString(16).slice(1));function F(s,e=0){return(b[s[e+0]]+b[s[e+1]]+b[s[e+2]]+b[s[e+3]]+"-"+b[s[e+4]]+b[s[e+5]]+"-"+b[s[e+6]]+b[s[e+7]]+"-"+b[s[e+8]]+b[s[e+9]]+"-"+b[s[e+10]]+b[s[e+11]]+b[s[e+12]]+b[s[e+13]]+b[s[e+14]]+b[s[e+15]]).toLowerCase()}function fe(s,e=0){var a=F(s,e);if(!validate(a))throw TypeError("Stringified UUID is invalid");return a}const me=null;function K(s,e,a){if(N.randomUUID&&!e&&!s)return N.randomUUID();s=s||{};var c=s.random||(s.rng||L)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,e){a=a||0;for(var o=0;o<16;++o)e[a+o]=c[o];return e}return F(c)}const k=K;var h=O(67085),X=O(21839),E=O(60556),j=O(37449),Q=Object.defineProperty,Y=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,ee=Object.getPrototypeOf,te=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,se=Reflect.get,G=(s,e,a)=>e in s?Q(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,_=(s,e)=>{for(var a in e||(e={}))te.call(e,a)&&G(s,a,e[a]);if(q)for(var a of q(e))ie.call(e,a)&&G(s,a,e[a]);return s},ne=(s,e)=>Y(s,Z(e)),ae=(s,e,a)=>G(s,typeof e!="symbol"?e+"":e,a),re=(s,e,a)=>se(ee(s),a,e),V=(s,e,a)=>new Promise((c,o)=>{var l=t=>{try{r(a.next(t))}catch(d){o(d)}},n=t=>{try{r(a.throw(t))}catch(d){o(d)}},r=t=>t.done?c(t.value):Promise.resolve(t.value).then(l,n);r((a=a.apply(s,e)).next())});const f={table:{minWidth:400},header:{fontSize:16,fontWeight:"bold"},td:{padding:"2px 16px"},vendor:{maxWidth:150,fontSize:12,textOverflow:"ellipsis",overflow:"hidden"}};function le(s,e){return V(this,null,function*(){const a=yield s.getObjectViewSystem("state",`${e}.`,`${e}.\u9999`),c=[],o=Object.keys(a).filter(l=>l.endsWith(".address"));for(let l=0;l<o.length;l++){const n=o[l],r=yield s.getState(n);r!=null&&r.val&&c.push({ip:r.val,name:"homekit-controller"})}return c})}function de(s,e){return V(this,null,function*(){const a=yield s.getObjectViewSystem("state",`${e}.`,`${e}.\u9999`),c=[],o=Object.keys(a).filter(l=>l.endsWith(".address"));for(let l=0;l<o.length;l++){const n=o[l],r=yield s.getState(n);r!=null&&r.val&&c.push({ip:r.val,name:"homekit-controller"})}return c})}function oe(s,e){return V(this,null,function*(){const a=yield s.getObjectViewSystem("state",`${e}.`,`${e}.\u9999`),c=[],o=Object.keys(a).filter(l=>l.endsWith(".hostname"));for(let l=0;l<o.length;l++){const n=o[l],r=yield s.getState(n);r!=null&&r.val&&c.push({ip:r.val,name:"shelly"})}return c})}function ce(s,e){return V(this,null,function*(){var a,c;const o=yield s.getObjectViewSystem("state",`${e}.info.clients.`,`${e}.info.clients.\u9999`),l=[],n=Object.values(o);for(let r=0;r<n.length;r++)(c=(a=n[r])==null?void 0:a.native)!=null&&c.ip&&l.push({ip:n[r].native.ip,name:e.split(".")[0]});return l})}function ue(s,e){return V(this,null,function*(){var a,c,o;const l=yield s.getObjectViewSystem("device",`${e}.`,`${e}.\u9999`),n=Object.values(l),r=[];for(let t=0;t<n.length;t++)((a=n[t])==null?void 0:a.type)==="device"&&((o=(c=n[t])==null?void 0:c.native)!=null&&o.ip)&&r.push({ip:n[t].native.ip,name:e.split(".")[0]});return r})}const pe=[{adapter:"broadlink2",attr:"additional"},{adapter:"harmony",attr:"devices",arrayAttr:"ip"},{adapter:"hm-rpc",attr:"homematicAddress"},{adapter:"homeconnect",browse:de},{adapter:"homekit-controller",attr:"discoverIp",browse:le},{adapter:"hue",attr:"bridge"},{adapter:"knx",attr:"bind"},{adapter:"lgtv",attr:"ip"},{adapter:"loxone",attr:"host"},{adapter:"mihome-vacuum",attr:"ip"},{adapter:"modbus",attr:"params.bind",clients:!0},{adapter:"mqtt",attr:"url",clients:!0},{adapter:"mqtt-client",attr:"host"},{adapter:"lcn",attr:"host"},{adapter:"knx",attr:"gwip"},{adapter:"onvif"},{adapter:"openknx",attr:"gwip"},{adapter:"broadlink2",attr:"additional"},{adapter:"proxmox",attr:"ip"},{adapter:"samsung",attr:"ip"},{adapter:"shelly",browse:oe},{adapter:"sonoff",clients:!0},{adapter:"sonos",attr:"devices",arrayAttr:"ip"},{adapter:"tr-064",attr:"iporhost"},{adapter:"unify",attr:"controllerIp"},{adapter:"upnp",browse:ue},{adapter:"wled",attr:"devices",arrayAttr:"ip"},{adapter:"wifilight",attr:"devices",arrayAttr:"ip"}];function $(s){return s?typeof s!="string"?!1:(s=s.trim().toUpperCase().replace(/\s/g,""),!s||s.match(/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/)?!0:!!s.match(/^([0-9A-F]{12})$/)):!0}function x(s){return!s||!$(s)?s:(s=s.toUpperCase().trim().replace(/[\s:-]/g,""),s.replace(/(..)(..)(..)(..)(..)(..)/,"$1:$2:$3:$4:$5:$6"))}function M(s){return s?typeof s!="string"?!1:(s=s.trim(),s?s.match(/^\d+\.\d+\.\d+\.\d+$/)?!s.trim().split(".").map(a=>parseInt(a,10)).find(a=>a<0||a>255):!1:!0):!0}function S(s){return!s||!M(s)?s:s.trim().split(".").map(a=>parseInt(a,10)).join(".")}class A extends E.ConfigGeneric{constructor(){super(...arguments),ae(this,"onAliveChanged",(e,a)=>{this.state.alive!==!!(a!=null&&a.val)&&this.setState({alive:!!(a!=null&&a.val)},()=>{this.state.alive&&(this.resolveDone?this.validateAddresses():this.resolveMACs())})})}componentDidMount(){return V(this,null,function*(){re(A.prototype,this,"componentDidMount").call(this);let e=[];const a=yield this.props.socket.getObject(`system.adapter.kisshome-research.${this.props.instance}`);a!=null&&a.common.host&&(e=(yield this.props.socket.getObject(`system.host.${a.common.host}`)).common.address);let c=yield this.props.socket.getAdapterInstances();c=c.filter(r=>{var t;return((t=r==null?void 0:r.common)==null?void 0:t.adminUI)&&(r.common.adminUI.config!=="none"||r.common.adminUI.tab)}).map(r=>({id:r._id.replace(/^system\.adapter\./,""),name:r.common.name,native:r.native})).sort((r,t)=>r.id>t.id?1:r.id<t.id?-1:0);const o=E.ConfigGeneric.getValue(this.props.data,"devices")||[];o.forEach(r=>{r.uuid||(r.uuid=k())});const l=yield this.collectIpAddresses(c,e,o),n={instances:c,ips:l,IP2MAC:{},MAC2VENDOR:{},alive:this.props.alive,resolving:!1};this.resolveDone=!1,this.setState(n),this.props.socket.subscribeState(`system.adapter.kisshome-research.${this.props.instance}.alive`,this.onAliveChanged),this.props.alive&&this.resolveMACs()})}resolveMACs(){this.resolveDone=!0,this.setState({runningRequest:!0},()=>{const e=[...E.ConfigGeneric.getValue(this.props.data,"devices")||[]],a=[];return e.forEach(c=>{const o=S(c.ip),l=x(c.mac);o&&M(o)?a.push({ip:o,mac:l}):l&&$(l)&&a.push({ip:o,mac:l})}),this.state.ips.forEach(c=>{const o=S(c.ip),l=x(c.mac);o&&M(o)&&!a.find(n=>n.ip===o)?a.push({ip:o,mac:l}):l&&$(l)&&!a.find(n=>n.ip===o)&&a.push({ip:o,mac:l})}),this.props.socket.sendTo(`kisshome-research.${this.props.instance}`,"getMacForIps",a).then(c=>{var o;if(c!=null&&c.error){this.setState({runningRequest:!1});return}const l=_({},this.state.IP2MAC||{}),n=_({},this.state.MAC2VENDOR||{}),r=JSON.parse(JSON.stringify(this.state.ips));(o=c==null?void 0:c.result)==null||o.forEach(d=>{const u=d.ip,v=r.findIndex(y=>y.ip===u);v!==-1&&(r[v].mac=d.mac),l[S(u)]=d.mac,n[x(d.mac)]=d.vendor});let t=!1;e.forEach(d=>{const u=r.findIndex(v=>v.ip===d.ip);u!==-1&&r[u].mac&&d.mac!==r[u].mac&&(t=!0,d.mac=r[u].mac)}),this.setState({ips:r,IP2MAC:l,MAC2VENDOR:n,runningRequest:!1}),t&&this.onChange("devices",e)}).catch(c=>{c.toString()!=="no results"&&window.alert(`Cannot get MAC addresses: ${c}`),this.setState({runningRequest:!1})})})}static getAttr(e,a){if(Array.isArray(a)){const c=a.shift();return typeof e[c]=="object"?A.getAttr(e[c],a):a.length?null:e[c]}return A.getAttr(e,a.split("."))}static isIp(e){if(typeof e=="string"){if(e.match(/^\d+\.\d+\.\d+\.\d+$/))return"ipv4";if(e.match(/^[\da-fA-F:]+$/))return"ipv6"}return null}componentWillUnmount(){super.componentWillUnmount(),this.props.socket.unsubscribeState(`system.adapter.kisshome-research.${this.props.instance}.alive`,this.onAliveChanged),this.validateTimeout&&clearTimeout(this.validateTimeout),this.validateTimeout=null}validateAddresses(){this.validateTimeout&&clearTimeout(this.validateTimeout),this.validateTimeout=setTimeout(()=>{if(this.validateTimeout=null,!this.state.alive)return;const e=[],a=E.ConfigGeneric.getValue(this.props.data,"devices")||[],c=_({},this.state.IP2MAC),o=_({},this.state.MAC2VENDOR);a.forEach(l=>{const n=S(l.ip),r=x(l.mac);n&&M(l.ip)&&!c[n]?(c[n]="-",e.push(l),l.mac&&$(l.mac)&&!o[r]&&(o[r]="-")):l.mac&&$(l.mac)&&!o[r]&&(o[r]="-",e.push(l))}),e.length&&this.setState({resolving:!0,IP2MAC:c,MAC2VENDOR:o},()=>{this.props.socket.sendTo(`kisshome-research.${this.props.instance}`,"getMacForIps",e).then(l=>{var n;if(l!=null&&l.error){this.setState({resolving:!1});return}const r=_({},this.state.IP2MAC),t=_({},this.state.MAC2VENDOR);let d=!1;(n=l==null?void 0:l.result)==null||n.forEach(u=>{u.ip=x(u.ip),u.mac=x(u.mac),u.mac&&r[u.ip]!==u.mac&&(r[u.ip]=u.mac,d=!0),u.vendor&&t[u.mac]!==u.vendor&&(t[u.mac]=u.vendor,d=!0)}),d&&this.setState({IP2MAC:r,MAC2VENDOR:t,resolving:!1})})})},1e3)}collectIpAddresses(e,a,c){return V(this,null,function*(){let o=[];e=e||this.state.instances;for(let n=0;n<e.length;n++){const r=pe.find(t=>t.adapter===e[n].name);if(r&&e[n].native){const t=r.attr;if(r.attr&&e[n].native[t])if(r.arrayAttr){if(Array.isArray(e[n].native[t]))for(let d=0;d<e[n].native[t].length;d++){const u=e[n].native[t][d],v=A.getAttr(u,r.arrayAttr),y=A.isIp(v);if(y){const T=c.find(P=>P.ip===v);o.push({ip:v,type:y,desc:e[n].name,uuid:(T==null?void 0:T.uuid)||k()})}}}else{const d=A.getAttr(e[n].native,t),u=A.isIp(d);if(u){const v=c.find(y=>y.ip===d);o.push({ip:d,type:u,desc:e[n].name,uuid:(v==null?void 0:v.uuid)||k()})}}if(r.browse)try{(yield r.browse(this.props.socket,e[n].id.replace("system.adapter.",""))).forEach(u=>{const v=A.isIp(u.ip);if(v){const y=c.find(T=>T.ip===u.ip);o.push({ip:u.ip,type:v,desc:u.name||e[n].name,uuid:(y==null?void 0:y.uuid)||k()})}})}catch(d){console.error(`Cannot collect "${e[n]}": ${d}`)}if(r.clients)try{(yield ce(this.props.socket,e[n].id.replace("system.adapter.",""))).forEach(u=>{const v=A.isIp(u.ip);if(v){const y=c.find(T=>T.ip===u.ip);o.push({ip:u.ip,type:v,desc:u.name||e[n].name,uuid:(y==null?void 0:y.uuid)||k()})}})}catch(d){console.error(`Cannot collect "${e[n]}": ${d}`)}}else if(e[n].native.ip&&typeof e[n].native.ip=="string"&&e[n].native.ip.match(/^\d+\.\d+\.\d+\.\d+$/)){const t=c.find(d=>d.ip===e[n].native.ip);o.push({ip:e[n].native.ip,type:"ipv4",desc:e[n].name,uuid:(t==null?void 0:t.uuid)||k()})}else if(e[n].native.host&&typeof e[n].native.host=="string"&&e[n].native.host.match(/^\d+\.\d+\.\d+\.\d+$/)){const t=c.find(d=>d.ip===e[n].native.host);o.push({ip:e[n].native.host,type:"ipv4",desc:e[n].name,uuid:(t==null?void 0:t.uuid)||k()})}}o=o.filter(n=>!a.includes(n.ip)&&n.ip!=="0.0.0.0"&&n.ip!=="localhost"&&n.ip!=="127.0.0.1"&&n.ip!=="::1"&&n.type==="ipv4");const l=[];for(let n=0;n<o.length;n++)l.find(r=>r.ip===o[n].ip)||l.push(o[n]);return l})}renderItem(e,a,c){var o;const l=E.ConfigGeneric.getValue(this.props.data,"devices")||[];l.forEach(t=>{t.uuid||(t.uuid=k())});const n=this.state.ips?l.filter(t=>!this.state.ips.find(d=>d.ip===t.ip)):l,r=l.every(t=>t.enabled)&&(this.state.ips?this.state.ips.every(t=>l.find(d=>d.ip===t.ip)):!0);return p().createElement(h.TableContainer,null,this.state.runningRequest||this.state.resolving?p().createElement(h.LinearProgress,null):p().createElement("div",{style:{height:2,width:"100%"}}),p().createElement(h.Table,{style:f.table,size:"small"},p().createElement(h.TableHead,null,p().createElement(h.TableRow,null,p().createElement(h.TableCell,{style:ne(_({},f.header),{width:120})},p().createElement(h.Checkbox,{title:r?j.i18n.t("custom_kisshome_unselect_all"):j.i18n.t("custom_kisshome_select_all"),checked:r,indeterminate:!r&&l.length>0,disabled:this.state.runningRequest,onClick:()=>{const t=[...E.ConfigGeneric.getValue(this.props.data,"devices")||[]];if(r){t.forEach(d=>d.enabled=!1);for(let d=t.length-1;d>=0;d--)this.state.ips.find(u=>u.ip===t[d].ip)&&t.splice(d,1)}else t.forEach(d=>d.enabled=!0),this.state.ips.forEach(d=>{t.find(u=>d.ip===u.ip)||t.push({ip:d.ip,mac:d.mac,desc:d.desc,enabled:!0,uuid:d.uuid})}),t.forEach(d=>d.enabled=!0);this.onChange("devices",t)}}),p().createElement(h.Fab,{onClick:()=>{const t=[...E.ConfigGeneric.getValue(this.props.data,"devices")||[]];t.push({ip:"",mac:"",desc:"",enabled:!0,uuid:k()}),this.onChange("devices",t)},size:"small",disabled:this.state.runningRequest},p().createElement(X.Add,null))),p().createElement(h.TableCell,{style:f.header},j.i18n.t("custom_kisshome_ip")),p().createElement(h.TableCell,{style:f.header},j.i18n.t("custom_kisshome_mac")),p().createElement(h.TableCell,{style:f.header},j.i18n.t("custom_kisshome_vendor")),p().createElement(h.TableCell,{style:f.header},j.i18n.t("custom_kisshome_name")),p().createElement(h.TableCell,{style:f.header}))),p().createElement(h.TableBody,null,(o=this.state.ips)==null?void 0:o.map(t=>{var d,u;return p().createElement(h.TableRow,{key:t.uuid},p().createElement(h.TableCell,{scope:"row",style:f.td},p().createElement(h.Checkbox,{checked:!!((d=l.find(v=>v.ip===t.ip))!=null&&d.enabled),disabled:this.state.runningRequest,onClick:()=>{const v=[...E.ConfigGeneric.getValue(this.props.data,"devices")||[]],y=v.findIndex(T=>T.ip===t.ip);y===-1?v.push({ip:t.ip,mac:t.mac,desc:t.desc,enabled:!0,uuid:t.uuid}):v.splice(y,1),this.onChange("devices",v)}})),p().createElement(h.TableCell,{style:f.td},t.ip),p().createElement(h.TableCell,{style:f.td},t.mac||""),p().createElement(h.TableCell,{style:_(_({},f.td),f.vendor)},((u=this.state.MAC2VENDOR)==null?void 0:u[x(t.mac)])||""),p().createElement(h.TableCell,{style:f.td},t.desc),p().createElement(h.TableCell,{style:f.td}))}),n.map(t=>{var d,u,v,y;const T=S(t.ip),P=x(t.mac),w=(d=this.state.IP2MAC)==null?void 0:d[T];return p().createElement(h.TableRow,{key:t.uuid},p().createElement(h.TableCell,{scope:"row",style:f.td},p().createElement(h.Checkbox,{checked:!!((u=l.find(m=>m.ip===t.ip))!=null&&u.enabled),disabled:this.state.runningRequest,onClick:()=>{const m=[...E.ConfigGeneric.getValue(this.props.data,"devices")||[]],g=m.find(C=>C.uuid===t.uuid);g&&(g.enabled=!g.enabled,this.onChange("devices",m))}})),p().createElement(h.TableCell,{style:f.td},p().createElement(h.TextField,{fullWidth:!0,error:!M(t.ip),value:t.ip,disabled:this.state.runningRequest,placeholder:"192.168.x.y",onChange:m=>{const g=[...E.ConfigGeneric.getValue(this.props.data,"devices")||[]],C=g.find(R=>R.uuid===t.uuid);C&&(C.ip=m.target.value,this.onChange("devices",g),this.validateAddresses())},onBlur:()=>{if(t.ip.trim()&&T!==t.ip){const m=[...E.ConfigGeneric.getValue(this.props.data,"devices")||[]],g=m.find(C=>C.uuid===t.uuid);g&&(g.ip=normalized,this.onChange("devices",m))}},variant:"standard"})),p().createElement(h.TableCell,{style:f.td},p().createElement(h.TextField,{fullWidth:!0,value:t.mac,disabled:this.state.runningRequest,error:!$(t.mac),placeholder:w||"XX:XX:XX:XX:XX:XX",onChange:m=>{const g=[...E.ConfigGeneric.getValue(this.props.data,"devices")||[]],C=g.find(R=>R.uuid===t.uuid);C&&(C.mac=m.target.value,this.onChange("devices",g),this.validateAddresses())},onBlur:()=>{if(t.mac.trim()){const m=P;if(m!==t.mac){const g=[...E.ConfigGeneric.getValue(this.props.data,"devices")||[]],C=g.find(R=>R.uuid===t.uuid);C&&(C.mac=m,this.onChange("devices",g))}}},variant:"standard"})),p().createElement(h.TableCell,{style:_(_({},f.td),f.vendor)},t.mac?((v=this.state.MAC2VENDOR)==null?void 0:v[P])||"":w&&((y=this.state.MAC2VENDOR)==null?void 0:y[w])||""),p().createElement(h.TableCell,{style:f.td},p().createElement(h.TextField,{fullWidth:!0,value:t.desc,disabled:this.state.runningRequest,onChange:m=>{const g=[...E.ConfigGeneric.getValue(this.props.data,"devices")||[]],C=g.find(R=>R.uuid===t.uuid);C&&(C.desc=m.target.value,this.onChange("devices",g))},variant:"standard"})),p().createElement(h.TableCell,{style:f.td},p().createElement(h.IconButton,{disabled:this.state.runningRequest,onClick:()=>{const m=[...E.ConfigGeneric.getValue(this.props.data,"devices")||[]];m.findIndex(C=>C.uuid===t.uuid)!==-1&&(m.splice(i,1),this.onChange("devices",m))}},p().createElement(X.Delete,null))))}))))}}A.propTypes={socket:I().object.isRequired,themeType:I().string,themeName:I().string,style:I().object,data:I().object.isRequired,schema:I().object,onError:I().func,onChange:I().func};const he=A}}]);

//# sourceMappingURL=src_ConfigCustomInstancesSelector_jsx.4d93ae83.chunk.js.map