"use strict";(self.webpackChunkiobroker_admin_component_telegram=self.webpackChunkiobroker_admin_component_telegram||[]).push([["src_ConfigCustomInstancesSelector_jsx"],{57460:(Y,$,_)=>{_.d($,{A:()=>J});var I=_(28437),d=_.n(I),M=_(95973),b=_.n(M),p=_(67085),Z=_.n(p),O=_(21839),ee=_.n(O),f=_(60556),te=_.n(f),E=_(37449),ae=_.n(E),j=Object.defineProperty,W=Object.defineProperties,U=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,x=Object.getPrototypeOf,V=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,G=Reflect.get,P=(i,e,r)=>e in i?j(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,L=(i,e)=>{for(var r in e||(e={}))V.call(e,r)&&P(i,r,e[r]);if(A)for(var r of A(e))B.call(e,r)&&P(i,r,e[r]);return i},K=(i,e)=>W(i,U(e)),S=(i,e,r)=>G(x(i),r,e),C=(i,e,r)=>new Promise((o,u)=>{var t=a=>{try{n(r.next(a))}catch(s){u(s)}},l=a=>{try{n(r.throw(a))}catch(s){u(s)}},n=a=>a.done?o(a.value):Promise.resolve(a.value).then(t,l);n((r=r.apply(i,e)).next())});const m={table:{minWidth:400},header:{fontSize:16,fontWeight:"bold"},td:{padding:"2px 16px"}};function F(i,e){return C(this,null,function*(){const r=yield i.getObjectViewSystem("state",`${e}.`,`${e}.\u9999`),o=[],u=Object.keys(r).filter(t=>t.endsWith(".address"));for(let t=0;t<u.length;t++){const l=u[t],n=yield i.getState(l);n!=null&&n.val&&o.push({ip:n.val,name:"homekit-controller"})}return o})}function w(i,e){return C(this,null,function*(){const r=yield i.getObjectViewSystem("state",`${e}.`,`${e}.\u9999`),o=[],u=Object.keys(r).filter(t=>t.endsWith(".address"));for(let t=0;t<u.length;t++){const l=u[t],n=yield i.getState(l);n!=null&&n.val&&o.push({ip:n.val,name:"homekit-controller"})}return o})}function z(i,e){return C(this,null,function*(){const r=yield i.getObjectViewSystem("state",`${e}.`,`${e}.\u9999`),o=[],u=Object.keys(r).filter(t=>t.endsWith(".hostname"));for(let t=0;t<u.length;t++){const l=u[t],n=yield i.getState(l);n!=null&&n.val&&o.push({ip:n.val,name:"shelly"})}return o})}function q(i,e){return C(this,null,function*(){var r,o;const u=yield i.getObjectViewSystem("state",`${e}.info.clients.`,`${e}.info.clients.\u9999`),t=[],l=Object.values(u);for(let n=0;n<l.length;n++)(o=(r=l[n])==null?void 0:r.native)!=null&&o.ip&&t.push({ip:l[n].native.ip,name:e.split(".")[0]});return t})}function H(i,e){return C(this,null,function*(){var r,o,u;const t=yield i.getObjectViewSystem("device",`${e}.`,`${e}.\u9999`),l=Object.values(t),n=[];for(let a=0;a<l.length;a++)((r=l[a])==null?void 0:r.type)==="device"&&((u=(o=l[a])==null?void 0:o.native)!=null&&u.ip)&&n.push({ip:l[a].native.ip,name:e.split(".")[0]});return n})}const N=[{adapter:"broadlink2",attr:"additional"},{adapter:"harmony",attr:"devices",arrayAttr:"ip"},{adapter:"hm-rpc",attr:"homematicAddress"},{adapter:"homeconnect",browse:w},{adapter:"homekit-controller",attr:"discoverIp",browse:F},{adapter:"hue",attr:"bridge"},{adapter:"knx",attr:"bind"},{adapter:"lgtv",attr:"ip"},{adapter:"loxone",attr:"host"},{adapter:"mihome-vacuum",attr:"ip"},{adapter:"modbus",attr:"params.bind",clients:!0},{adapter:"mqtt",attr:"url",clients:!0},{adapter:"mqtt-client",attr:"host"},{adapter:"lcn",attr:"host"},{adapter:"knx",attr:"gwip"},{adapter:"onvif"},{adapter:"openknx",attr:"gwip"},{adapter:"broadlink2",attr:"additional"},{adapter:"proxmox",attr:"ip"},{adapter:"samsung",attr:"ip"},{adapter:"shelly",browse:z},{adapter:"sonoff",clients:!0},{adapter:"sonos",attr:"devices",arrayAttr:"ip"},{adapter:"tr-064",attr:"iporhost"},{adapter:"unify",attr:"controllerIp"},{adapter:"upnp",browse:H},{adapter:"wled",attr:"devices",arrayAttr:"ip"},{adapter:"wifilight",attr:"devices",arrayAttr:"ip"}];function k(i){return i?typeof i!="string"?!1:(i=i.trim().toUpperCase().replace(/\s/g,""),!i||i.match(/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/)?!0:!!i.match(/^([0-9A-F]{12})$/)):!0}function R(i){return k(i)?(i=i.toUpperCase().trim().replace(/[\s:-]/g,""),i.replace(/(..)(..)(..)(..)(..)(..)/,"$1:$2:$3:$4:$5:$6")):i}function D(i){return i?typeof i!="string"?!1:(i=i.trim(),i?i.match(/^\d+\.\d+\.\d+\.\d+$/)?!i.trim().split(".").map(r=>parseInt(r,10)).find(r=>r<0||r>255):!1:!0):!0}function X(i){return D(i)?i.trim().split(".").map(r=>parseInt(r,10)).join("."):i}class g extends f.ConfigGeneric{componentDidMount(){return C(this,null,function*(){S(g.prototype,this,"componentDidMount").call(this);let e=[];const r=yield this.props.socket.getObject(`system.adapter.kisshome-research.${this.props.instance}`);r!=null&&r.common.host&&(e=(yield this.props.socket.getObject(`system.host.${r.common.host}`)).common.address);let o=yield this.props.socket.getAdapterInstances();o=o.filter(l=>{var n;return((n=l==null?void 0:l.common)==null?void 0:n.adminUI)&&(l.common.adminUI.config!=="none"||l.common.adminUI.tab)}).map(l=>({id:l._id.replace(/^system\.adapter\./,""),name:l.common.name,native:l.native})).sort((l,n)=>l.id>n.id?1:l.id<n.id?-1:0);const u=yield this.collectIpAddresses(o,e),t={instances:o,ips:u};if(this.props.alive){const l=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];t.runningRequest=!0,this.props.socket.sendTo(`kisshome-research.${this.props.instance}`,"getMacForIps",l).then(n=>{var a;let s=!1;const h={};(a=n==null?void 0:n.result)==null||a.forEach(c=>{const v=c.ip,T=u.findIndex(Q=>Q.ip===v);T!==-1&&(s=!0,u[T].mac=c.mac,h[c.mac]=c.vendor)});let y=!1;l.forEach(c=>{const v=u.findIndex(T=>T.ip===c.ip);v!==-1&&(c.mac!==u[v].mac&&(y=!0),h[c.mac]||(h[c.mac]=u[v].vendor,s=!0))}),s?this.setState({ips:u,vendors:h,runningRequest:!1}):this.setState({runningRequest:!1}),y&&this.onChange("devices",l)}).catch(n=>{n.toString()!=="no results"&&window.alert(`Cannot get MAC addresses: ${n}`),this.setState({runningRequest:!1})})}this.setState(t)})}static getAttr(e,r){if(Array.isArray(r)){const o=r.shift();return typeof e[o]=="object"?g.getAttr(e[o],r):r.length?null:e[o]}return g.getAttr(e,r.split("."))}static isIp(e){if(typeof e=="string"){if(e.match(/^\d+\.\d+\.\d+\.\d+$/))return"ipv4";if(e.match(/^[\da-fA-F:]+$/))return"ipv6"}return null}componentWillUnmount(){super.componentWillUnmount(),this.validateTimeout&&clearTimeout(this.validateTimeout),this.validateTimeout=null}validateAddresses(){this.validateTimeout&&clearTimeout(this.validateTimeout),this.validateTimeout=setTimeout(()=>{this.validateTimeout=null},1e3)}collectIpAddresses(e,r){return C(this,null,function*(){let o=[];e=e||this.state.instances;for(let t=0;t<e.length;t++){const l=N.find(n=>n.adapter===e[t].name);if(l&&e[t].native){const n=l.attr;if(l.attr&&e[t].native[n])if(l.arrayAttr){if(Array.isArray(e[t].native[n]))for(let a=0;a<e[t].native[n].length;a++){const s=e[t].native[n][a],h=g.getAttr(s,l.arrayAttr),y=g.isIp(h);y&&o.push({ip:h,type:y,desc:e[t].name})}}else{const a=g.getAttr(e[t].native,n),s=g.isIp(a);s&&o.push({ip:a,type:s,desc:e[t].name})}if(l.browse)try{(yield l.browse(this.props.socket,e[t]._id.replace("system.adapter.",""))).forEach(s=>{const h=g.isIp(s.ip);h&&o.push({ip:s.ip,type:h,desc:s.name||e[t].name})})}catch(a){console.error(`Cannot collect "${e[t]}": ${a}`)}if(l.clients)try{(yield q(this.props.socket,e[t]._id.replace("system.adapter.",""))).forEach(s=>{const h=g.isIp(s.ip);h&&o.push({ip:s.ip,type:h,desc:s.name||e[t].name})})}catch(a){console.error(`Cannot collect "${e[t]}": ${a}`)}}else e[t].native.ip&&typeof e[t].native.ip=="string"&&e[t].native.ip.match(/^\d+\.\d+\.\d+\.\d+$/)?o.push({ip:e[t].native.ip,type:"ipv4",desc:e[t].name}):e[t].native.host&&typeof e[t].native.host=="string"&&e[t].native.host.match(/^\d+\.\d+\.\d+\.\d+$/)&&o.push({ip:e[t].native.host,type:"ipv4",desc:e[t].name})}o=o.filter(t=>!r.includes(t.ip)&&t.ip!=="0.0.0.0"&&t.ip!=="localhost"&&t.ip!=="127.0.0.1"&&t.ip!=="::1"&&t.type==="ipv4");const u=[];for(let t=0;t<o.length;t++)u.find(l=>l.ip===o[t].ip)||u.push(o[t]);return u})}renderItem(e,r,o){var u;const t=f.ConfigGeneric.getValue(this.props.data,"devices")||[],l=this.state.ips?t.filter(a=>!this.state.ips.find(s=>s.ip===a.ip)):t,n=t.every(a=>a.enabled)&&(this.state.ips?this.state.ips.every(a=>t.find(s=>s.ip===a.ip)):!0);return d().createElement(p.TableContainer,null,this.state.runningRequest?d().createElement(p.LinearProgress,null):d().createElement("div",{style:{height:2,width:"100%"}}),d().createElement(p.Table,{style:m.table,size:"small"},d().createElement(p.TableHead,null,d().createElement(p.TableRow,null,d().createElement(p.TableCell,{style:K(L({},m.header),{width:120})},d().createElement(p.Checkbox,{title:n?E.i18n.t("custom_kisshome_unselect_all"):E.i18n.t("custom_kisshome_select_all"),checked:n,indeterminate:!n&&t.length>0,disabled:this.state.runningRequest,onClick:()=>{const a=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];if(n){a.forEach(s=>s.enabled=!1);for(let s=a.length-1;s>=0;s--)this.state.ips.find(h=>h.ip===a[s].ip)&&a.splice(s,1)}else a.forEach(s=>s.enabled=!0),this.state.ips.forEach(s=>{a.find(h=>s.ip===h.ip)||a.push({ip:s.ip,mac:s.mac,desc:s.desc,enabled:!0})}),a.forEach(s=>s.enabled=!0);this.onChange("devices",a)}}),d().createElement(p.Fab,{onClick:()=>{const a=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];a.push({ip:"0.0.0.0",mac:"",desc:"",enabled:!0}),this.onChange("devices",a)},size:"small",disabled:this.state.runningRequest},d().createElement(O.Add,null))),d().createElement(p.TableCell,{style:m.header},E.i18n.t("custom_kisshome_ip")),d().createElement(p.TableCell,{style:m.header},E.i18n.t("custom_kisshome_mac")),d().createElement(p.TableCell,{style:m.header},E.i18n.t("custom_kisshome_vendor")),d().createElement(p.TableCell,{style:m.header},E.i18n.t("custom_kisshome_name")),d().createElement(p.TableCell,{style:m.header}))),d().createElement(p.TableBody,null,(u=this.state.ips)==null?void 0:u.map((a,s)=>{var h,y;return d().createElement(p.TableRow,{key:s},d().createElement(p.TableCell,{scope:"row",style:m.td},d().createElement(p.Checkbox,{checked:!!((h=t.find(c=>c.ip===a.ip))!=null&&h.enabled),disabled:this.state.runningRequest,onClick:()=>{const c=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]],v=c.findIndex(T=>T.ip===a.ip);v===-1?c.push({ip:a.ip,mac:a.mac,desc:a.desc,enabled:!0}):c.splice(v,1),this.onChange("devices",c)}})),d().createElement(p.TableCell,{style:m.td},a.ip),d().createElement(p.TableCell,{style:m.td},a.mac||""),d().createElement(p.TableCell,{style:m.td},((y=this.state.vendors)==null?void 0:y[a.mac])||""),d().createElement(p.TableCell,{style:m.td},a.desc),d().createElement(p.TableCell,{style:m.td}))}),l.map((a,s)=>{var h,y;return d().createElement(p.TableRow,{key:s},d().createElement(p.TableCell,{scope:"row",style:m.td},d().createElement(p.Checkbox,{checked:!!((h=t.find(c=>c.ip===a.ip))!=null&&h.enabled),disabled:this.state.runningRequest,onClick:()=>{const c=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];c[s].enabled=!c[s].enabled,this.onChange("devices",c)}})),d().createElement(p.TableCell,{style:m.td},d().createElement(p.TextField,{fullWidth:!0,error:!D(a.ip),value:a.ip,disabled:this.state.runningRequest,onChange:c=>{const v=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];v[s].ip=c.target.value,this.onChange("devices",v),this.validateAddresses()},onBlur:()=>{if(a.ip.trim()){const c=X(a.ip);if(c!==a.ip){const v=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];v[s].ip=c,this.onChange("devices",v)}}},variant:"standard"})),d().createElement(p.TableCell,{style:m.td},d().createElement(p.TextField,{fullWidth:!0,value:a.mac,disabled:this.state.runningRequest,error:!k(a.mac),onChange:c=>{const v=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];v[s].mac=c.target.value,this.onChange("devices",v),this.validateAddresses()},onBlur:()=>{if(a.mac.trim()){const c=R(a.mac);if(c!==a.mac){const v=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];v[s].mac=c,this.onChange("devices",v)}}},variant:"standard"})),d().createElement(p.TableCell,{style:m.td},((y=this.state.vendors)==null?void 0:y[R(a.mac)])||""),d().createElement(p.TableCell,{style:m.td},d().createElement(p.TextField,{fullWidth:!0,value:a.desc,disabled:this.state.runningRequest,onChange:c=>{const v=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];v[s].desc=c.target.value,this.onChange("devices",v)},variant:"standard"})),d().createElement(p.TableCell,{style:m.td},d().createElement(p.IconButton,{disabled:this.state.runningRequest,onClick:()=>{const c=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];c.splice(s,1),this.onChange("devices",c)}},d().createElement(O.Delete,null))))}))))}}g.propTypes={socket:b().object.isRequired,themeType:b().string,themeName:b().string,style:b().object,data:b().object.isRequired,schema:b().object,onError:b().func,onChange:b().func};const J=g}}]);

//# sourceMappingURL=src_ConfigCustomInstancesSelector_jsx.6d16a58d.chunk.js.map