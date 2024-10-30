"use strict";(self.webpackChunkiobroker_admin_component_telegram=self.webpackChunkiobroker_admin_component_telegram||[]).push([["src_ConfigCustomInstancesSelector_jsx"],{2090:(pe,q,x)=>{x.d(q,{A:()=>ue});var W=x(8437),u=x.n(W),B=x(5973),O=x.n(B);const z={randomUUID:typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let U;const w=new Uint8Array(16);function H(){if(!U){if(typeof crypto=="undefined"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");U=crypto.getRandomValues.bind(crypto)}return U(w)}const C=[];for(let i=0;i<256;++i)C.push((i+256).toString(16).slice(1));function N(i,e=0){return(C[i[e+0]]+C[i[e+1]]+C[i[e+2]]+C[i[e+3]]+"-"+C[i[e+4]]+C[i[e+5]]+"-"+C[i[e+6]]+C[i[e+7]]+"-"+C[i[e+8]]+C[i[e+9]]+"-"+C[i[e+10]]+C[i[e+11]]+C[i[e+12]]+C[i[e+13]]+C[i[e+14]]+C[i[e+15]]).toLowerCase()}function ve(i,e=0){const n=N(i,e);if(!validate(n))throw TypeError("Stringified UUID is invalid");return n}const fe=null;function J(i,e,n){if(z.randomUUID&&!e&&!i)return z.randomUUID();i=i||{};const r=i.random||(i.rng||H)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let o=0;o<16;++o)e[n+o]=r[o];return e}return N(r)}const T=J;var p=x(7085),F=x(1839),b=x(556),_=x(5636),L=Object.defineProperty,Y=Object.defineProperties,K=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,Q=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,te=Reflect.get,G=(i,e,n)=>e in i?L(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,I=(i,e)=>{for(var n in e||(e={}))Z.call(e,n)&&G(i,n,e[n]);if(X)for(var n of X(e))ee.call(e,n)&&G(i,n,e[n]);return i},ie=(i,e)=>Y(i,K(e)),se=(i,e,n)=>G(i,typeof e!="symbol"?e+"":e,n),ne=(i,e,n)=>te(Q(i),n,e),D=(i,e,n)=>new Promise((r,o)=>{var l=c=>{try{a(n.next(c))}catch(t){o(t)}},s=c=>{try{a(n.throw(c))}catch(t){o(t)}},a=c=>c.done?r(c.value):Promise.resolve(c.value).then(l,s);a((n=n.apply(i,e)).next())});const g={table:{minWidth:400},header:{fontSize:16,fontWeight:"bold"},td:{padding:"2px 16px"},vendor:{maxWidth:150,fontSize:12,textOverflow:"ellipsis",overflow:"hidden"}};function ae(i,e){return D(this,null,function*(){const n=yield i.getObjectViewSystem("state",`${e}.`,`${e}.\u9999`),r=[],o=Object.keys(n).filter(l=>l.endsWith(".address"));for(let l=0;l<o.length;l++){const s=o[l],a=yield i.getState(s);a!=null&&a.val&&r.push({ip:a.val,name:"homekit-controller"})}return r})}function re(i,e){return D(this,null,function*(){const n=yield i.getObjectViewSystem("state",`${e}.`,`${e}.\u9999`),r=[],o=Object.keys(n).filter(l=>l.endsWith(".address"));for(let l=0;l<o.length;l++){const s=o[l],a=yield i.getState(s);a!=null&&a.val&&r.push({ip:a.val,name:"homekit-controller"})}return r})}function le(i,e){return D(this,null,function*(){const n=yield i.getObjectViewSystem("state",`${e}.`,`${e}.\u9999`),r=[],o=Object.keys(n).filter(l=>l.endsWith(".hostname"));for(let l=0;l<o.length;l++){const s=o[l],a=yield i.getState(s);a!=null&&a.val&&r.push({ip:a.val,name:"shelly"})}return r})}function oe(i,e){return D(this,null,function*(){var n,r;const o=yield i.getObjectViewSystem("state",`${e}.info.clients.`,`${e}.info.clients.\u9999`),l=[],s=Object.values(o);for(let a=0;a<s.length;a++)(r=(n=s[a])==null?void 0:n.native)!=null&&r.ip&&l.push({ip:s[a].native.ip,name:e.split(".")[0]});return l})}function de(i,e){return D(this,null,function*(){var n,r,o;const l=yield i.getObjectViewSystem("device",`${e}.`,`${e}.\u9999`),s=Object.values(l),a=[];for(let c=0;c<s.length;c++)((n=s[c])==null?void 0:n.type)==="device"&&((o=(r=s[c])==null?void 0:r.native)!=null&&o.ip)&&a.push({ip:s[c].native.ip,name:e.split(".")[0]});return a})}const ce=[{adapter:"broadlink2",attr:"additional"},{adapter:"harmony",attr:"devices",arrayAttr:"ip"},{adapter:"hm-rpc",attr:"homematicAddress"},{adapter:"homeconnect",browse:re},{adapter:"homekit-controller",attr:"discoverIp",browse:ae},{adapter:"hue",attr:"bridge"},{adapter:"knx",attr:"bind"},{adapter:"lgtv",attr:"ip"},{adapter:"loxone",attr:"host"},{adapter:"mihome-vacuum",attr:"ip"},{adapter:"modbus",attr:"params.bind",clients:!0},{adapter:"mqtt",attr:"url",clients:!0},{adapter:"mqtt-client",attr:"host"},{adapter:"lcn",attr:"host"},{adapter:"knx",attr:"gwip"},{adapter:"onvif"},{adapter:"openknx",attr:"gwip"},{adapter:"broadlink2",attr:"additional"},{adapter:"proxmox",attr:"ip"},{adapter:"samsung",attr:"ip"},{adapter:"shelly",browse:le},{adapter:"sonoff",clients:!0},{adapter:"sonos",attr:"devices",arrayAttr:"ip"},{adapter:"tr-064",attr:"iporhost"},{adapter:"unify",attr:"controllerIp"},{adapter:"upnp",browse:de},{adapter:"wled",attr:"devices",arrayAttr:"ip"},{adapter:"wifilight",attr:"devices",arrayAttr:"ip"}];function M(i){return i?typeof i!="string"?!1:(i=i.trim().toUpperCase().replace(/\s/g,""),!i||i.match(/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/)?!0:!!i.match(/^([0-9A-F]{12})$/)):!0}function V(i){return!i||!M(i)?i:(i=i.toUpperCase().trim().replace(/[\s:-]/g,""),i.replace(/(..)(..)(..)(..)(..)(..)/,"$1:$2:$3:$4:$5:$6"))}function R(i){return i?typeof i!="string"?!1:(i=i.trim(),i?i.match(/^\d+\.\d+\.\d+\.\d+$/)?!i.trim().split(".").map(n=>parseInt(n,10)).find(n=>n<0||n>255):!1:!0):!0}function $(i){return!i||!R(i)?i:i.trim().split(".").map(n=>parseInt(n,10)).join(".")}class E extends b.ConfigGeneric{constructor(){super(...arguments),se(this,"onAliveChanged",(e,n)=>{this.state.alive!==!!(n!=null&&n.val)&&this.setState({alive:!!(n!=null&&n.val)},()=>{this.state.alive&&(this.resolveDone?this.validateAddresses():this.resolveMACs())})})}componentDidMount(){return D(this,null,function*(){ne(E.prototype,this,"componentDidMount").call(this);let e=[];const n=yield this.props.socket.getObject(`system.adapter.kisshome-research.${this.props.instance}`);n!=null&&n.common.host&&(e=(yield this.props.socket.getObject(`system.host.${n.common.host}`)).common.address);let r=yield this.props.socket.getAdapterInstances();r=r.filter(a=>{var c;return((c=a==null?void 0:a.common)==null?void 0:c.adminUI)&&(a.common.adminUI.config!=="none"||a.common.adminUI.tab)}).map(a=>({id:a._id.replace(/^system\.adapter\./,""),name:a.common.name,native:a.native})).sort((a,c)=>a.id>c.id?1:a.id<c.id?-1:0);const o=b.ConfigGeneric.getValue(this.props.data,"devices")||[];o.forEach(a=>{a.uuid||(a.uuid=T())});const l=yield this.collectIpAddresses(r,e,o),s={instances:r,ips:l,IP2MAC:{},MAC2VENDOR:{},alive:this.props.alive,resolving:!1,showMessage:!1};this.resolveDone=!1,this.setState(s),yield this.props.socket.subscribeState(`system.adapter.kisshome-research.${this.props.instance}.alive`,this.onAliveChanged),this.props.alive&&this.resolveMACs(),this.disableFritzBox(),o.find(a=>(a.desc||"").length<3)||this.props.onError("devices",_.I18n.t("custom_kisshome_name_too_short"))})}resolveMACs(){this.resolveDone=!0,this.setState({runningRequest:!0},()=>{const e=[...b.ConfigGeneric.getValue(this.props.data,"devices")||[]],n=[];return e.forEach(r=>{const o=$(r.ip),l=V(r.mac);o&&R(o)?n.push({ip:o,mac:l}):l&&M(l)&&n.push({ip:o,mac:l})}),this.state.ips.forEach(r=>{const o=$(r.ip),l=V(r.mac);o&&R(o)&&!n.find(s=>s.ip===o)?n.push({ip:o,mac:l}):l&&M(l)&&!n.find(s=>s.ip===o)&&n.push({ip:o,mac:l})}),this.props.socket.sendTo(`kisshome-research.${this.props.instance}`,"getMacForIps",n).then(r=>{var o;if(r!=null&&r.error){this.setState({runningRequest:!1});return}const l=I({},this.state.IP2MAC||{}),s=I({},this.state.MAC2VENDOR||{}),a=JSON.parse(JSON.stringify(this.state.ips));(o=r==null?void 0:r.result)==null||o.forEach(t=>{const d=t.ip,h=a.findIndex(v=>v.ip===d);h!==-1&&(a[h].mac=t.mac),l[$(d)]=t.mac,s[V(t.mac)]=t.vendor});let c=!1;e.forEach(t=>{const d=a.findIndex(h=>h.ip===t.ip);d!==-1&&a[d].mac&&t.mac!==a[d].mac&&(c=!0,t.mac=a[d].mac)}),this.setState({ips:a,IP2MAC:l,MAC2VENDOR:s,runningRequest:!1}),c&&this.onChange("devices",e)}).catch(r=>{r.toString()!=="no results"&&window.alert(`Cannot get MAC addresses: ${r}`),this.setState({runningRequest:!1})})})}static getAttr(e,n){if(Array.isArray(n)){const r=n.shift();return typeof e[r]=="object"?E.getAttr(e[r],n):n.length?null:e[r]}return E.getAttr(e,n.split("."))}static isIp(e){if(typeof e=="string"){if(e.match(/^\d+\.\d+\.\d+\.\d+$/))return"ipv4";if(e.match(/^[\da-fA-F:]+$/))return"ipv6"}return null}componentWillUnmount(){super.componentWillUnmount(),this.props.socket.unsubscribeState(`system.adapter.kisshome-research.${this.props.instance}.alive`,this.onAliveChanged),this.validateTimeout&&clearTimeout(this.validateTimeout),this.validateTimeout=null}validateAddresses(){this.validateTimeout&&clearTimeout(this.validateTimeout),this.validateTimeout=setTimeout(()=>{if(this.validateTimeout=null,!this.state.alive)return;const e=[],n=b.ConfigGeneric.getValue(this.props.data,"devices")||[],r=I({},this.state.IP2MAC),o=I({},this.state.MAC2VENDOR);n.forEach(l=>{const s=$(l.ip),a=V(l.mac);s&&R(l.ip)&&!r[s]?(r[s]="-",e.push(l),l.mac&&M(l.mac)&&!o[a]&&(o[a]="-")):l.mac&&M(l.mac)&&!o[a]&&(o[a]="-",e.push(l))}),e.length&&this.setState({resolving:!0,IP2MAC:r,MAC2VENDOR:o},()=>{this.props.socket.sendTo(`kisshome-research.${this.props.instance}`,"getMacForIps",e).then(l=>{var s;if(l!=null&&l.error){this.setState({resolving:!1});return}const a=I({},this.state.IP2MAC),c=I({},this.state.MAC2VENDOR);let t=!1;(s=l==null?void 0:l.result)==null||s.forEach(d=>{d.ip=V(d.ip),d.mac=V(d.mac),d.mac&&a[d.ip]!==d.mac&&(a[d.ip]=d.mac,t=!0),d.vendor&&c[d.mac]!==d.vendor&&(c[d.mac]=d.vendor,t=!0)}),t&&this.setState({IP2MAC:a,MAC2VENDOR:c,resolving:!1})})})},1e3)}collectIpAddresses(e,n,r){return D(this,null,function*(){let o=[];e=e||this.state.instances;for(let s=0;s<e.length;s++){const a=ce.find(c=>c.adapter===e[s].name);if(a&&e[s].native){const c=a.attr;if(a.attr&&e[s].native[c])if(a.arrayAttr){if(Array.isArray(e[s].native[c]))for(let t=0;t<e[s].native[c].length;t++){const d=e[s].native[c][t],h=E.getAttr(d,a.arrayAttr),v=E.isIp(h);if(v){const A=r.find(k=>k.ip===h);o.push({ip:h,type:v,desc:e[s].name,uuid:(A==null?void 0:A.uuid)||T()})}}}else{const t=E.getAttr(e[s].native,c),d=E.isIp(t);if(d){const h=r.find(v=>v.ip===t);o.push({ip:t,type:d,desc:e[s].name,uuid:(h==null?void 0:h.uuid)||T()})}}if(a.browse)try{(yield a.browse(this.props.socket,e[s].id.replace("system.adapter.",""))).forEach(d=>{const h=E.isIp(d.ip);if(h){const v=r.find(A=>A.ip===d.ip);o.push({ip:d.ip,type:h,desc:d.name||e[s].name,uuid:(v==null?void 0:v.uuid)||T()})}})}catch(t){console.error(`Cannot collect "${e[s]}": ${t}`)}if(a.clients)try{(yield oe(this.props.socket,e[s].id.replace("system.adapter.",""))).forEach(d=>{const h=E.isIp(d.ip);if(h){const v=r.find(A=>A.ip===d.ip);o.push({ip:d.ip,type:h,desc:d.name||e[s].name,uuid:(v==null?void 0:v.uuid)||T()})}})}catch(t){console.error(`Cannot collect "${e[s]}": ${t}`)}}else if(e[s].native.ip&&typeof e[s].native.ip=="string"&&e[s].native.ip.match(/^\d+\.\d+\.\d+\.\d+$/)){const c=r.find(t=>t.ip===e[s].native.ip);o.push({ip:e[s].native.ip,type:"ipv4",desc:e[s].name,uuid:(c==null?void 0:c.uuid)||T()})}else if(e[s].native.host&&typeof e[s].native.host=="string"&&e[s].native.host.match(/^\d+\.\d+\.\d+\.\d+$/)){const c=r.find(t=>t.ip===e[s].native.host);o.push({ip:e[s].native.host,type:"ipv4",desc:e[s].name,uuid:(c==null?void 0:c.uuid)||T()})}}o=o.filter(s=>!n.includes(s.ip)&&s.ip!=="0.0.0.0"&&s.ip!=="localhost"&&s.ip!=="127.0.0.1"&&s.ip!=="::1"&&s.type==="ipv4");const l=[];for(let s=0;s<o.length;s++)l.find(a=>a.ip===o[s].ip)||l.push(o[s]);return l})}renderMessage(){return this.state.showMessage?u().createElement(_.Message,{text:_.I18n.t("custom_kisshome_You cannot record the traffic of Fritz!Box"),onClose:()=>this.setState({showMessage:!1})}):null}disableFritzBox(){const e=b.ConfigGeneric.getValue(this.props.data,"devices")||[],n=b.ConfigGeneric.getValue(this.props.data,"fritzbox");let r=!1;e.forEach(o=>{o.ip===n&&o.enabled&&(r=!0,o.enabled=!1)}),r&&this.onChange("devices",e)}checkDevices(e){let n=!1;e.find(r=>(r.desc||"").length<3)?this.props.onError("devices",_.I18n.t("custom_kisshome_name_too_short")):e.find(r=>!r.ip&&!r.mac)?this.props.onError("devices",_.I18n.t("custom_kisshome_name_ip_and_mac_missing")):e.find(r=>!R(r.ip))?this.props.onError("devices",_.I18n.t("custom_kisshome_name_invalid_ip")):e.find(r=>!M(r.mac))?this.props.onError("devices",_.I18n.t("custom_kisshome_name_invalid_mac")):this.props.onError("devices")}renderItem(e,n,r){var o;const l=b.ConfigGeneric.getValue(this.props.data,"devices")||[],s=b.ConfigGeneric.getValue(this.props.data,"fritzbox");l.forEach(t=>{t.uuid||(t.uuid=T())});const a=this.state.ips?l.filter(t=>!this.state.ips.find(d=>d.ip===t.ip)):l,c=l.every(t=>t.enabled)&&(this.state.ips?this.state.ips.every(t=>l.find(d=>d.ip===t.ip)):!0);return u().createElement(p.TableContainer,null,this.renderMessage(),this.state.runningRequest||this.state.resolving?u().createElement(p.LinearProgress,null):u().createElement("div",{style:{height:2,width:"100%"}}),u().createElement(p.Table,{style:g.table,size:"small"},u().createElement(p.TableHead,null,u().createElement(p.TableRow,null,u().createElement(p.TableCell,{style:ie(I({},g.header),{width:120})},u().createElement(p.Checkbox,{title:c?_.I18n.t("custom_kisshome_unselect_all"):_.I18n.t("custom_kisshome_select_all"),checked:c,indeterminate:!c&&l.length>0,disabled:this.state.runningRequest,onClick:()=>{const t=[...b.ConfigGeneric.getValue(this.props.data,"devices")||[]];if(c){t.forEach(d=>d.enabled=!1);for(let d=t.length-1;d>=0;d--)this.state.ips.find(h=>h.ip===t[d].ip)&&t.splice(d,1)}else t.forEach(d=>d.enabled=!0),this.state.ips.forEach(d=>{!t.find(h=>d.ip===h.ip)&&d.ip!==s&&t.push({ip:d.ip,mac:d.mac,desc:d.desc,enabled:!0,uuid:d.uuid})}),t.forEach(d=>d.enabled=!0);this.onChange("devices",t)}}),u().createElement(p.Fab,{onClick:()=>{const t=[...b.ConfigGeneric.getValue(this.props.data,"devices")||[]];t.push({ip:"",mac:"",desc:"",enabled:!0,uuid:T()}),this.onChange("devices",t),this.checkDevices(t)},size:"small",disabled:this.state.runningRequest},u().createElement(F.Add,null))),u().createElement(p.TableCell,{style:g.header},_.I18n.t("custom_kisshome_ip")),u().createElement(p.TableCell,{style:g.header},_.I18n.t("custom_kisshome_mac")),u().createElement(p.TableCell,{style:g.header},_.I18n.t("custom_kisshome_vendor")),u().createElement(p.TableCell,{style:g.header},_.I18n.t("custom_kisshome_name")),u().createElement(p.TableCell,{style:g.header}))),u().createElement(p.TableBody,null,(o=this.state.ips)==null?void 0:o.map(t=>{var d,h;return u().createElement(p.TableRow,{key:t.uuid},u().createElement(p.TableCell,{scope:"row",style:g.td},u().createElement(p.Checkbox,{checked:!!((d=l.find(v=>v.uuid===t.uuid))!=null&&d.enabled),disabled:this.state.runningRequest,onClick:()=>{const v=[...b.ConfigGeneric.getValue(this.props.data,"devices")||[]],A=v.findIndex(k=>k.uuid===t.uuid);if(A===-1){const k=v.findIndex(j=>j.ip===t.ip);if(k!==-1){const j=JSON.parse(JSON.stringify(this.state.ips)),P=j.find(m=>m.uuid===t.uuid);P.uuid=v[k].uuid,v[k].enabled=!0,this.setState({ips:j},()=>this.onChange("devices",v))}else{if(t.ip===s){this.setState({showMessage:!0});return}v.push({ip:t.ip,mac:t.mac,desc:t.desc,enabled:!0,uuid:t.uuid})}}else v.splice(A,1);this.onChange("devices",v)}})),u().createElement(p.TableCell,{style:g.td},t.ip),u().createElement(p.TableCell,{style:g.td},t.mac||""),u().createElement(p.TableCell,{style:I(I({},g.td),g.vendor)},((h=this.state.MAC2VENDOR)==null?void 0:h[V(t.mac)])||""),u().createElement(p.TableCell,{style:g.td},t.desc),u().createElement(p.TableCell,{style:g.td}))}),a.map(t=>{var d,h,v,A;const k=$(t.ip),j=V(t.mac),P=(d=this.state.IP2MAC)==null?void 0:d[k];return u().createElement(p.TableRow,{key:t.uuid},u().createElement(p.TableCell,{scope:"row",style:g.td},u().createElement(p.Checkbox,{checked:!!((h=l.find(m=>m.uuid===t.uuid))!=null&&h.enabled),disabled:this.state.runningRequest,onClick:()=>{const m=[...b.ConfigGeneric.getValue(this.props.data,"devices")||[]],f=m.find(y=>y.uuid===t.uuid);if(f){if(!f.enabled&&t.ip===s){this.setState({showMessage:!0});return}f.enabled=!f.enabled,this.onChange("devices",m)}}})),u().createElement(p.TableCell,{style:g.td},u().createElement(p.TextField,{fullWidth:!0,error:!R(t.ip)||!t.ip&&!t.mac,helperText:R(t.ip)?!t.ip&&!t.mac?_.I18n.t("custom_kisshome_name_ip_and_mac_missing"):"":_.I18n.t("custom_kisshome_name_invalid_ip"),value:t.ip,disabled:this.state.runningRequest,placeholder:"192.168.x.y",onChange:m=>{const f=[...b.ConfigGeneric.getValue(this.props.data,"devices")||[]],y=f.find(S=>S.uuid===t.uuid);y&&(y.ip=m.target.value,y.ip===s&&y.enabled&&setTimeout(()=>this.disableFritzBox(),300),this.onChange("devices",f),this.validateAddresses(),this.checkDevices(f))},onBlur:()=>{if(t.ip.trim()&&k!==t.ip){const m=[...b.ConfigGeneric.getValue(this.props.data,"devices")||[]],f=m.find(y=>y.uuid===t.uuid);f&&(f.ip=normalized,this.onChange("devices",m),this.checkDevices(m))}},variant:"standard"})),u().createElement(p.TableCell,{style:g.td},u().createElement(p.TextField,{fullWidth:!0,value:t.mac,disabled:this.state.runningRequest,error:!M(t.mac)||!t.ip&&!t.mac,helperText:M(t.mac)?!t.ip&&!t.mac?_.I18n.t("custom_kisshome_name_ip_and_mac_missing"):"":_.I18n.t("custom_kisshome_name_invalid_mac"),placeholder:P||"XX:XX:XX:XX:XX:XX",onChange:m=>{const f=[...b.ConfigGeneric.getValue(this.props.data,"devices")||[]],y=f.find(S=>S.uuid===t.uuid);y&&(y.mac=m.target.value,this.onChange("devices",f),this.validateAddresses(),this.checkDevices(f))},onBlur:()=>{if(t.mac.trim()){const m=j;if(m!==t.mac){const f=[...b.ConfigGeneric.getValue(this.props.data,"devices")||[]],y=f.find(S=>S.uuid===t.uuid);y&&(y.mac=m,this.onChange("devices",f),this.checkDevices(f))}}},variant:"standard"})),u().createElement(p.TableCell,{style:I(I({},g.td),g.vendor)},t.mac?((v=this.state.MAC2VENDOR)==null?void 0:v[j])||"":P&&((A=this.state.MAC2VENDOR)==null?void 0:A[P])||""),u().createElement(p.TableCell,{style:g.td},u().createElement(p.TextField,{fullWidth:!0,value:t.desc,disabled:this.state.runningRequest,onChange:m=>{const f=[...b.ConfigGeneric.getValue(this.props.data,"devices")||[]],y=f.find(S=>S.uuid===t.uuid);y&&(y.desc=m.target.value,this.onChange("devices",f),this.checkDevices(f))},helperText:(t.desc||"").length>=3?"":_.I18n.t("custom_kisshome_name_too_short"),error:(t.desc||"").length<3,variant:"standard"})),u().createElement(p.TableCell,{style:g.td},u().createElement(p.IconButton,{disabled:this.state.runningRequest,onClick:()=>{const m=[...b.ConfigGeneric.getValue(this.props.data,"devices")||[]],f=m.findIndex(y=>y.uuid===t.uuid);f!==-1&&(m.splice(f,1),this.onChange("devices",m),this.checkDevices(m))}},u().createElement(F.Delete,null))))}))))}}E.propTypes={socket:O().object.isRequired,themeType:O().string,themeName:O().string,style:O().object,data:O().object.isRequired,schema:O().object,onError:O().func,onChange:O().func};const ue=E}}]);

//# sourceMappingURL=src_ConfigCustomInstancesSelector_jsx.7b250eed.chunk.js.map