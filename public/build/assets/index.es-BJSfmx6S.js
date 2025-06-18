import{b as s,j as ge,U as P}from"./app-SN0J8WrQ.js";import{b as Ce}from"./tabs-H9AMHO2_.js";const Qr=s.forwardRef(({className:e,...t},n)=>ge.jsx("div",{className:"relative w-full overflow-auto",children:ge.jsx("table",{ref:n,className:Ce("w-full caption-bottom text-sm",e),...t})}));Qr.displayName="Table";const Jr=s.forwardRef(({className:e,...t},n)=>ge.jsx("thead",{ref:n,className:Ce("[&_tr]:border-b",e),...t}));Jr.displayName="TableHeader";const eo=s.forwardRef(({className:e,...t},n)=>ge.jsx("tbody",{ref:n,className:Ce("[&_tr:last-child]:border-0",e),...t}));eo.displayName="TableBody";const to=s.forwardRef(({className:e,...t},n)=>ge.jsx("tfoot",{ref:n,className:Ce("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t}));to.displayName="TableFooter";const no=s.forwardRef(({className:e,...t},n)=>ge.jsx("tr",{ref:n,className:Ce("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));no.displayName="TableRow";const ro=s.forwardRef(({className:e,...t},n)=>ge.jsx("th",{ref:n,className:Ce("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t}));ro.displayName="TableHead";const oo=s.forwardRef(({className:e,...t},n)=>ge.jsx("td",{ref:n,className:Ce("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t}));oo.displayName="TableCell";const ao=s.forwardRef(({className:e,...t},n)=>ge.jsx("caption",{ref:n,className:Ce("mt-4 text-sm text-muted-foreground",e),...t}));ao.displayName="TableCaption";var G=function(){return G=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},G.apply(this,arguments)};function ht(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var T="-ms-",Xe="-moz-",j="-webkit-",Un="comm",vt="rule",Vt="decl",so="@import",Vn="@keyframes",io="@layer",Kn=Math.abs,Kt=String.fromCharCode,Mt=Object.assign;function lo(e,t){return z(e,0)^45?(((t<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3):0}function qn(e){return e.trim()}function pe(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function ct(e,t,n){return e.indexOf(t,n)}function z(e,t){return e.charCodeAt(t)|0}function Me(e,t,n){return e.slice(t,n)}function le(e){return e.length}function Xn(e){return e.length}function qe(e,t){return t.push(e),e}function co(e,t){return e.map(t).join("")}function Cn(e,t){return e.filter(function(n){return!pe(n,t)})}var Ct=1,Le=1,Zn=0,te=0,H=0,Ye="";function St(e,t,n,r,o,a,i,c){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:Ct,column:Le,length:i,return:"",siblings:c}}function xe(e,t){return Mt(St("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fe(e){for(;e.root;)e=xe(e.root,{children:[e]});qe(e,e.siblings)}function uo(){return H}function po(){return H=te>0?z(Ye,--te):0,Le--,H===10&&(Le=1,Ct--),H}function oe(){return H=te<Zn?z(Ye,te++):0,Le++,H===10&&(Le=1,Ct++),H}function ke(){return z(Ye,te)}function dt(){return te}function Rt(e,t){return Me(Ye,e,t)}function Lt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function go(e){return Ct=Le=1,Zn=le(Ye=e),te=0,[]}function fo(e){return Ye="",e}function jt(e){return qn(Rt(te-1,zt(e===91?e+2:e===40?e+1:e)))}function ho(e){for(;(H=ke())&&H<33;)oe();return Lt(e)>2||Lt(H)>3?"":" "}function mo(e,t){for(;--t&&oe()&&!(H<48||H>102||H>57&&H<65||H>70&&H<97););return Rt(e,dt()+(t<6&&ke()==32&&oe()==32))}function zt(e){for(;oe();)switch(H){case e:return te;case 34:case 39:e!==34&&e!==39&&zt(H);break;case 40:e===41&&zt(e);break;case 92:oe();break}return te}function bo(e,t){for(;oe()&&e+H!==57;)if(e+H===84&&ke()===47)break;return"/*"+Rt(t,te-1)+"*"+Kt(e===47?e:oe())}function wo(e){for(;!Lt(ke());)oe();return Rt(e,te)}function yo(e){return fo(ut("",null,null,null,[""],e=go(e),0,[0],e))}function ut(e,t,n,r,o,a,i,c,d){for(var h=0,u=0,g=i,y=0,f=0,x=0,R=1,O=1,E=1,C=0,m="",v=o,D=a,S=r,p=m;O;)switch(x=C,C=oe()){case 40:if(x!=108&&z(p,g-1)==58){ct(p+=$(jt(C),"&","&\f"),"&\f",Kn(h?c[h-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:p+=jt(C);break;case 9:case 10:case 13:case 32:p+=ho(x);break;case 92:p+=mo(dt()-1,7);continue;case 47:switch(ke()){case 42:case 47:qe(xo(bo(oe(),dt()),t,n,d),d);break;default:p+="/"}break;case 123*R:c[h++]=le(p)*E;case 125*R:case 59:case 0:switch(C){case 0:case 125:O=0;case 59+u:E==-1&&(p=$(p,/\f/g,"")),f>0&&le(p)-g&&qe(f>32?Rn(p+";",r,n,g-1,d):Rn($(p," ","")+";",r,n,g-2,d),d);break;case 59:p+=";";default:if(qe(S=Sn(p,t,n,h,u,o,c,m,v=[],D=[],g,a),a),C===123)if(u===0)ut(p,t,S,S,v,a,g,c,D);else switch(y===99&&z(p,3)===110?100:y){case 100:case 108:case 109:case 115:ut(e,S,S,r&&qe(Sn(e,S,S,0,0,o,c,m,o,v=[],g,D),D),o,D,g,c,r?v:D);break;default:ut(p,S,S,S,[""],D,0,c,D)}}h=u=f=0,R=E=1,m=p="",g=i;break;case 58:g=1+le(p),f=x;default:if(R<1){if(C==123)--R;else if(C==125&&R++==0&&po()==125)continue}switch(p+=Kt(C),C*R){case 38:E=u>0?1:(p+="\f",-1);break;case 44:c[h++]=(le(p)-1)*E,E=1;break;case 64:ke()===45&&(p+=jt(oe())),y=ke(),u=g=le(m=p+=wo(dt())),C++;break;case 45:x===45&&le(p)==2&&(R=0)}}return a}function Sn(e,t,n,r,o,a,i,c,d,h,u,g){for(var y=o-1,f=o===0?a:[""],x=Xn(f),R=0,O=0,E=0;R<r;++R)for(var C=0,m=Me(e,y+1,y=Kn(O=i[R])),v=e;C<x;++C)(v=qn(O>0?f[C]+" "+m:$(m,/&\f/g,f[C])))&&(d[E++]=v);return St(e,t,n,o===0?vt:c,d,h,u,g)}function xo(e,t,n,r){return St(e,t,n,Un,Kt(uo()),Me(e,2,-2),0,r)}function Rn(e,t,n,r,o){return St(e,t,n,Vt,Me(e,0,r),Me(e,r+1,-1),r,o)}function Qn(e,t,n){switch(lo(e,t)){case 5103:return j+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+e+e;case 4789:return Xe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+Xe+e+T+e+e;case 5936:switch(z(e,t+11)){case 114:return j+e+T+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return j+e+T+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return j+e+T+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return j+e+T+e+e;case 6165:return j+e+T+"flex-"+e+e;case 5187:return j+e+$(e,/(\w+).+(:[^]+)/,j+"box-$1$2"+T+"flex-$1$2")+e;case 5443:return j+e+T+"flex-item-"+$(e,/flex-|-self/g,"")+(pe(e,/flex-|baseline/)?"":T+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return j+e+T+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return j+e+T+$(e,"shrink","negative")+e;case 5292:return j+e+T+$(e,"basis","preferred-size")+e;case 6060:return j+"box-"+$(e,"-grow","")+j+e+T+$(e,"grow","positive")+e;case 4554:return j+$(e,/([^-])(transform)/g,"$1"+j+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,j+"$1"),/(image-set)/,j+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,j+"box-pack:$3"+T+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+j+e+e;case 4200:if(!pe(e,/flex-|baseline/))return T+"grid-column-align"+Me(e,t)+e;break;case 2592:case 3360:return T+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,pe(r.props,/grid-\w+-end/)})?~ct(e+(n=n[t].value),"span",0)?e:T+$(e,"-start","")+e+T+"grid-row-span:"+(~ct(n,"span",0)?pe(n,/\d+/):+pe(n,/\d+/)-+pe(e,/\d+/))+";":T+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pe(r.props,/grid-\w+-start/)})?e:T+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,j+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(le(e)-1-t>6)switch(z(e,t+1)){case 109:if(z(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+j+"$2-$3$1"+Xe+(z(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ct(e,"stretch",0)?Qn($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,a,i,c,d,h){return T+o+":"+a+h+(i?T+o+"-span:"+(c?d:+d-+a)+h:"")+e});case 4949:if(z(e,t+6)===121)return $(e,":",":"+j)+e;break;case 6444:switch(z(e,z(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+j+(z(e,14)===45?"inline-":"")+"box$3$1"+j+"$2$3$1"+T+"$2box$3")+e;case 100:return $(e,":",":"+T)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function mt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function vo(e,t,n,r){switch(e.type){case io:if(e.children.length)break;case so:case Vt:return e.return=e.return||e.value;case Un:return"";case Vn:return e.return=e.value+"{"+mt(e.children,r)+"}";case vt:if(!le(e.value=e.props.join(",")))return""}return le(n=mt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Co(e){var t=Xn(e);return function(n,r,o,a){for(var i="",c=0;c<t;c++)i+=e[c](n,r,o,a)||"";return i}}function So(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ro(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Vt:e.return=Qn(e.value,e.length,n);return;case Vn:return mt([xe(e,{value:$(e.value,"@","@"+j)})],r);case vt:if(e.length)return co(n=e.props,function(o){switch(pe(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fe(xe(e,{props:[$(o,/:(read-\w+)/,":"+Xe+"$1")]})),Fe(xe(e,{props:[o]})),Mt(e,{props:Cn(n,r)});break;case"::placeholder":Fe(xe(e,{props:[$(o,/:(plac\w+)/,":"+j+"input-$1")]})),Fe(xe(e,{props:[$(o,/:(plac\w+)/,":"+Xe+"$1")]})),Fe(xe(e,{props:[$(o,/:(plac\w+)/,T+"input-$1")]})),Fe(xe(e,{props:[o]})),Mt(e,{props:Cn(n,r)});break}return""})}}var Eo={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Q={},ze=typeof process<"u"&&Q!==void 0&&(Q.REACT_APP_SC_ATTR||Q.SC_ATTR)||"data-styled",Jn="active",er="data-styled-version",Et="6.1.18",qt=`/*!sc*/
`,bt=typeof window<"u"&&typeof document<"u",$o=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Q!==void 0&&Q.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Q.REACT_APP_SC_DISABLE_SPEEDY!==""?Q.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Q.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Q!==void 0&&Q.SC_DISABLE_SPEEDY!==void 0&&Q.SC_DISABLE_SPEEDY!==""&&Q.SC_DISABLE_SPEEDY!=="false"&&Q.SC_DISABLE_SPEEDY),$t=Object.freeze([]),We=Object.freeze({});function Oo(e,t,n){return n===void 0&&(n=We),e.theme!==n.theme&&e.theme||t||n.theme}var tr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Po=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ko=/(^-|-$)/g;function En(e){return e.replace(Po,"-").replace(ko,"")}var Do=/(a)(d)/gi,at=52,$n=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wt(e){var t,n="";for(t=Math.abs(e);t>at;t=t/at|0)n=$n(t%at)+n;return($n(t%at)+n).replace(Do,"$1-$2")}var Tt,nr=5381,Ne=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},rr=function(e){return Ne(nr,e)};function Io(e){return Wt(rr(e)>>>0)}function Ao(e){return e.displayName||e.name||"Component"}function _t(e){return typeof e=="string"&&!0}var or=typeof Symbol=="function"&&Symbol.for,ar=or?Symbol.for("react.memo"):60115,jo=or?Symbol.for("react.forward_ref"):60112,To={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ho=((Tt={})[jo]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tt[ar]=sr,Tt);function On(e){return("type"in(t=e)&&t.type.$$typeof)===ar?sr:"$$typeof"in e?Ho[e.$$typeof]:To;var t}var Fo=Object.defineProperty,No=Object.getOwnPropertyNames,Pn=Object.getOwnPropertySymbols,Mo=Object.getOwnPropertyDescriptor,Lo=Object.getPrototypeOf,kn=Object.prototype;function ir(e,t,n){if(typeof t!="string"){if(kn){var r=Lo(t);r&&r!==kn&&ir(e,r,n)}var o=No(t);Pn&&(o=o.concat(Pn(t)));for(var a=On(e),i=On(t),c=0;c<o.length;++c){var d=o[c];if(!(d in _o||n&&n[d]||i&&d in i||a&&d in a)){var h=Mo(t,d);try{Fo(e,d,h)}catch{}}}}return e}function Ie(e){return typeof e=="function"}function Xt(e){return typeof e=="object"&&"styledComponentId"in e}function Pe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Dn(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Je(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Bt(e,t,n){if(n===void 0&&(n=!1),!n&&!Je(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Bt(e[r],t[r]);else if(Je(t))for(var r in t)e[r]=Bt(e[r],t[r]);return e}function Zt(e,t){Object.defineProperty(e,"toString",{value:t})}function Ae(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zo=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,a=o;t>=a;)if((a<<=1)<0)throw Ae(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var i=o;i<a;i++)this.groupSizes[i]=0}for(var c=this.indexOfGroup(t+1),d=(i=0,n.length);i<d;i++)this.tag.insertRule(c,n[i])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var a=r;a<o;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),a=o+r,i=o;i<a;i++)n+="".concat(this.tag.getRule(i)).concat(qt);return n},e}(),pt=new Map,wt=new Map,gt=1,st=function(e){if(pt.has(e))return pt.get(e);for(;wt.has(gt);)gt++;var t=gt++;return pt.set(e,t),wt.set(t,e),t},Wo=function(e,t){gt=t+1,pt.set(e,t),wt.set(t,e)},Bo="style[".concat(ze,"][").concat(er,'="').concat(Et,'"]'),Go=new RegExp("^".concat(ze,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yo=function(e,t,n){for(var r,o=n.split(","),a=0,i=o.length;a<i;a++)(r=o[a])&&e.registerName(t,r)},Uo=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(qt),o=[],a=0,i=r.length;a<i;a++){var c=r[a].trim();if(c){var d=c.match(Go);if(d){var h=0|parseInt(d[1],10),u=d[2];h!==0&&(Wo(u,h),Yo(e,u,d[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(c)}}},In=function(e){for(var t=document.querySelectorAll(Bo),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(ze)!==Jn&&(Uo(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Vo(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var lr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(c){var d=Array.from(c.querySelectorAll("style[".concat(ze,"]")));return d[d.length-1]}(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(ze,Jn),r.setAttribute(er,Et);var i=Vo();return i&&r.setAttribute("nonce",i),n.insertBefore(r,a),r},Ko=function(){function e(t){this.element=lr(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,a=r.length;o<a;o++){var i=r[o];if(i.ownerNode===n)return i}throw Ae(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),qo=function(){function e(t){this.element=lr(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Xo=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),An=bt,Zo={isServer:!bt,useCSSOMInjection:!$o},cr=function(){function e(t,n,r){t===void 0&&(t=We),n===void 0&&(n={});var o=this;this.options=G(G({},Zo),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&bt&&An&&(An=!1,In(this)),Zt(this,function(){return function(a){for(var i=a.getTag(),c=i.length,d="",h=function(g){var y=function(E){return wt.get(E)}(g);if(y===void 0)return"continue";var f=a.names.get(y),x=i.getGroup(g);if(f===void 0||!f.size||x.length===0)return"continue";var R="".concat(ze,".g").concat(g,'[id="').concat(y,'"]'),O="";f!==void 0&&f.forEach(function(E){E.length>0&&(O+="".concat(E,","))}),d+="".concat(x).concat(R,'{content:"').concat(O,'"}').concat(qt)},u=0;u<c;u++)h(u);return d}(o)})}return e.registerId=function(t){return st(t)},e.prototype.rehydrate=function(){!this.server&&bt&&In(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(G(G({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Xo(o):r?new Ko(o):new qo(o)}(this.options),new zo(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(st(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(st(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(st(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Qo=/&/g,Jo=/^\s*\/\/.*$/gm;function dr(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=dr(n.children,t)),n})}function ea(e){var t,n,r,o=We,a=o.options,i=a===void 0?We:a,c=o.plugins,d=c===void 0?$t:c,h=function(y,f,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):y},u=d.slice();u.push(function(y){y.type===vt&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Qo,n).replace(r,h))}),i.prefix&&u.push(Ro),u.push(vo);var g=function(y,f,x,R){f===void 0&&(f=""),x===void 0&&(x=""),R===void 0&&(R="&"),t=R,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var O=y.replace(Jo,""),E=yo(x||f?"".concat(x," ").concat(f," { ").concat(O," }"):O);i.namespace&&(E=dr(E,i.namespace));var C=[];return mt(E,Co(u.concat(So(function(m){return C.push(m)})))),C};return g.hash=d.length?d.reduce(function(y,f){return f.name||Ae(15),Ne(y,f.name)},nr).toString():"",g}var ta=new cr,Gt=ea(),ur=P.createContext({shouldForwardProp:void 0,styleSheet:ta,stylis:Gt});ur.Consumer;P.createContext(void 0);function jn(){return s.useContext(ur)}var na=function(){function e(t,n){var r=this;this.inject=function(o,a){a===void 0&&(a=Gt);var i=r.name+a.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,a(r.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Zt(this,function(){throw Ae(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Gt),this.name+t.hash},e}(),ra=function(e){return e>="A"&&e<="Z"};function Tn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;ra(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var pr=function(e){return e==null||e===!1||e===""},gr=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!pr(a)&&(Array.isArray(a)&&a.isCss||Ie(a)?r.push("".concat(Tn(o),":"),a,";"):Je(a)?r.push.apply(r,ht(ht(["".concat(o," {")],gr(a),!1),["}"],!1)):r.push("".concat(Tn(o),": ").concat((t=o,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Eo||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function De(e,t,n,r){if(pr(e))return[];if(Xt(e))return[".".concat(e.styledComponentId)];if(Ie(e)){if(!Ie(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return De(o,t,n,r)}var a;return e instanceof na?n?(e.inject(n,r),[e.getName(r)]):[e]:Je(e)?gr(e):Array.isArray(e)?Array.prototype.concat.apply($t,e.map(function(i){return De(i,t,n,r)})):[e.toString()]}function oa(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ie(n)&&!Xt(n))return!1}return!0}var aa=rr(Et),sa=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&oa(t),this.componentId=n,this.baseHash=Ne(aa,n),this.baseStyle=r,cr.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Pe(o,this.staticRulesId);else{var a=Dn(De(this.rules,t,n,r)),i=Wt(Ne(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,i)){var c=r(a,".".concat(i),void 0,this.componentId);n.insertRules(this.componentId,i,c)}o=Pe(o,i),this.staticRulesId=i}else{for(var d=Ne(this.baseHash,r.hash),h="",u=0;u<this.rules.length;u++){var g=this.rules[u];if(typeof g=="string")h+=g;else if(g){var y=Dn(De(g,t,n,r));d=Ne(d,y+u),h+=y}}if(h){var f=Wt(d>>>0);n.hasNameForId(this.componentId,f)||n.insertRules(this.componentId,f,r(h,".".concat(f),void 0,this.componentId)),o=Pe(o,f)}}return o},e}(),yt=P.createContext(void 0);yt.Consumer;function ia(e){var t=P.useContext(yt),n=s.useMemo(function(){return function(r,o){if(!r)throw Ae(14);if(Ie(r)){var a=r(o);return a}if(Array.isArray(r)||typeof r!="object")throw Ae(8);return o?G(G({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?P.createElement(yt.Provider,{value:n},e.children):null}var Ht={};function la(e,t,n){var r=Xt(e),o=e,a=!_t(e),i=t.attrs,c=i===void 0?$t:i,d=t.componentId,h=d===void 0?function(v,D){var S=typeof v!="string"?"sc":En(v);Ht[S]=(Ht[S]||0)+1;var p="".concat(S,"-").concat(Io(Et+S+Ht[S]));return D?"".concat(D,"-").concat(p):p}(t.displayName,t.parentComponentId):d,u=t.displayName,g=u===void 0?function(v){return _t(v)?"styled.".concat(v):"Styled(".concat(Ao(v),")")}(e):u,y=t.displayName&&t.componentId?"".concat(En(t.displayName),"-").concat(t.componentId):t.componentId||h,f=r&&o.attrs?o.attrs.concat(c).filter(Boolean):c,x=t.shouldForwardProp;if(r&&o.shouldForwardProp){var R=o.shouldForwardProp;if(t.shouldForwardProp){var O=t.shouldForwardProp;x=function(v,D){return R(v,D)&&O(v,D)}}else x=R}var E=new sa(n,y,r?o.componentStyle:void 0);function C(v,D){return function(S,p,A){var V=S.attrs,Y=S.componentStyle,J=S.defaultProps,ae=S.foldedComponentIds,_=S.styledComponentId,fe=S.target,Se=P.useContext(yt),he=jn(),se=S.shouldForwardProp||he.shouldForwardProp,je=Oo(p,Se,J)||We,K=function(de,X,be){for(var ue,ee=G(G({},X),{className:void 0,theme:be}),Ee=0;Ee<de.length;Ee+=1){var Z=Ie(ue=de[Ee])?ue(ee):ue;for(var W in Z)ee[W]=W==="className"?Pe(ee[W],Z[W]):W==="style"?G(G({},ee[W]),Z[W]):Z[W]}return X.className&&(ee.className=Pe(ee.className,X.className)),ee}(V,p,je),me=K.as||fe,ce={};for(var L in K)K[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&K.theme===je||(L==="forwardedAs"?ce.as=K.forwardedAs:se&&!se(L,me)||(ce[L]=K[L]));var Re=function(de,X){var be=jn(),ue=de.generateAndInjectStyles(X,be.styleSheet,be.stylis);return ue}(Y,K),q=Pe(ae,_);return Re&&(q+=" "+Re),K.className&&(q+=" "+K.className),ce[_t(me)&&!tr.has(me)?"class":"className"]=q,A&&(ce.ref=A),s.createElement(me,ce)}(m,v,D)}C.displayName=g;var m=P.forwardRef(C);return m.attrs=f,m.componentStyle=E,m.displayName=g,m.shouldForwardProp=x,m.foldedComponentIds=r?Pe(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=y,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(D){for(var S=[],p=1;p<arguments.length;p++)S[p-1]=arguments[p];for(var A=0,V=S;A<V.length;A++)Bt(D,V[A],!0);return D}({},o.defaultProps,v):v}}),Zt(m,function(){return".".concat(m.styledComponentId)}),a&&ir(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function _n(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Hn=function(e){return Object.assign(e,{isCss:!0})};function M(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ie(e)||Je(e))return Hn(De(_n($t,ht([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?De(r):Hn(De(_n(r,t)))}function Yt(e,t,n){if(n===void 0&&(n=We),!t)throw Ae(1,t);var r=function(o){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,M.apply(void 0,ht([o],a,!1)))};return r.attrs=function(o){return Yt(e,t,G(G({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Yt(e,t,G(G({},n),o))},r}var fr=function(e){return Yt(la,e)},k=fr;tr.forEach(function(e){k[e]=fr(e)});var ve;function Be(e,t){return e[t]}function ca(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function da(e=[],t,n="id"){const r=e.slice(),o=Be(t,n);return o?r.splice(r.findIndex(a=>Be(a,n)===o),1):r.splice(r.findIndex(a=>a===t),1),r}function Fn(e){return e.map((t,n)=>{const r=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(r.id=n+1),r})}function Ze(e,t){return Math.ceil(e/t)}function Ft(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(ve||(ve={}));const N=()=>null;function hr(e,t=[],n=[]){let r={},o=[...n];return t.length&&t.forEach(a=>{if(!a.when||typeof a.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');a.when(e)&&(r=a.style||{},a.classNames&&(o=[...o,...a.classNames]),typeof a.style=="function"&&(r=a.style(e)||{}))}),{conditionalStyle:r,classNames:o.join(" ")}}function ft(e,t=[],n="id"){const r=Be(e,n);return r?t.some(o=>Be(o,n)===r):t.some(o=>o===e)}function it(e,t){return t?e.findIndex(n=>Qe(n.id,t)):-1}function Qe(e,t){return e==t}function ua(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:r,rows:o,rowCount:a,mergeSelections:i}=t,c=!e.allSelected,d=!e.toggleOnSelectedRowsChange;if(i){const h=c?[...e.selectedRows,...o.filter(u=>!ft(u,e.selectedRows,r))]:e.selectedRows.filter(u=>!ft(u,o,r));return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:h.length,selectedRows:h,toggleOnSelectedRowsChange:d})}return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:c?a:0,selectedRows:c?o:[],toggleOnSelectedRowsChange:d})}case"SELECT_SINGLE_ROW":{const{keyField:r,row:o,isSelected:a,rowCount:i,singleSelect:c}=t;return c?a?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[o],toggleOnSelectedRowsChange:n}):a?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:da(e.selectedRows,o,r),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===i,selectedRows:ca(e.selectedRows,o),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:r,selectedRows:o,totalRows:a,mergeSelections:i}=t;if(i){const c=[...e.selectedRows,...o.filter(d=>!ft(d,e.selectedRows,r))];return Object.assign(Object.assign({},e),{selectedCount:c.length,allSelected:!1,selectedRows:c,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:o.length,allSelected:o.length===a,selectedRows:o,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:r}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:r})}case"SORT_CHANGE":{const{sortDirection:r,selectedColumn:o,clearSelectedOnSort:a}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:o,sortDirection:r,currentPage:1}),a&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:r,paginationServer:o,visibleOnly:a,persistSelectedOnPageChange:i}=t,c=o&&i,d=o&&!i||a;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:r}),c&&{allSelected:!1}),d&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:r,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:r})}}}const pa=M`
	pointer-events: none;
	opacity: 0.4;
`,ga=k.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&pa};
	${({theme:e})=>e.table.style};
`,fa=M`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,ha=k.div`
	display: flex;
	width: 100%;
	${({$fixedHeader:e})=>e&&fa};
	${({theme:e})=>e.head.style};
`,ma=k.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({$dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,mr=(e,...t)=>M`
		@media screen and (max-width: ${599}px) {
			${M(e,...t)}
		}
	`,ba=(e,...t)=>M`
		@media screen and (max-width: ${959}px) {
			${M(e,...t)}
		}
	`,wa=(e,...t)=>M`
		@media screen and (max-width: ${1280}px) {
			${M(e,...t)}
		}
	`,ya=e=>(t,...n)=>M`
			@media screen and (max-width: ${e}px) {
				${M(t,...n)}
			}
		`,Ue=k.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,$headCell:t})=>e[t?"headCells":"cells"].style};
	${({$noPadding:e})=>e&&"padding: 0"};
`,br=k(Ue)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&M`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&mr`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&ba`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&wa`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&ya(e)`
    display: none;
  `};
`,xa=M`
	div:first-child {
		white-space: ${({$wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({$allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,va=k(br).attrs(e=>({style:e.style}))`
	${({$renderAsCell:e})=>!e&&xa};
	${({theme:e,$isDragging:t})=>t&&e.cells.draggingStyle};
	${({$cellStyle:e})=>e};
`;var Ca=s.memo(function({id:e,column:t,row:n,rowIndex:r,dataTag:o,isDragging:a,onDragStart:i,onDragOver:c,onDragEnd:d,onDragEnter:h,onDragLeave:u}){const{conditionalStyle:g,classNames:y}=hr(n,t.conditionalCellStyles,["rdt_TableCell"]);return s.createElement(va,{id:e,"data-column-id":t.id,role:"cell",className:y,"data-tag":o,$cellStyle:t.style,$renderAsCell:!!t.cell,$allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,$wrapCell:t.wrap,style:g,$isDragging:a,onDragStart:i,onDragOver:c,onDragEnd:d,onDragEnter:h,onDragLeave:u},!t.cell&&s.createElement("div",{"data-tag":o},function(f,x,R,O){return x?R&&typeof R=="function"?R(f,O):x(f,O):null}(n,t.selector,t.format,r)),t.cell&&t.cell(n,r,t,e))});const Nn="input";var wr=s.memo(function({name:e,component:t=Nn,componentOptions:n={style:{}},indeterminate:r=!1,checked:o=!1,disabled:a=!1,onClick:i=N}){const c=t,d=c!==Nn?n.style:(u=>Object.assign(Object.assign({fontSize:"18px"},!u&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(a),h=s.useMemo(()=>function(u,...g){let y;return Object.keys(u).map(f=>u[f]).forEach((f,x)=>{typeof f=="function"&&(y=Object.assign(Object.assign({},u),{[Object.keys(u)[x]]:f(...g)}))}),y||u}(n,r),[n,r]);return s.createElement(c,Object.assign({type:"checkbox",ref:u=>{u&&(u.indeterminate=r)},style:d,onClick:a?N:i,name:e,"aria-label":e,checked:o,disabled:a},h,{onChange:N}))});const Sa=k(Ue)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function Ra({name:e,keyField:t,row:n,rowCount:r,selected:o,selectableRowsComponent:a,selectableRowsComponentProps:i,selectableRowsSingle:c,selectableRowDisabled:d,onSelectedRow:h}){const u=!(!d||!d(n));return s.createElement(Sa,{onClick:g=>g.stopPropagation(),className:"rdt_TableCell",$noPadding:!0},s.createElement(wr,{name:e,component:a,componentOptions:i,checked:o,"aria-checked":o,onClick:()=>{h({type:"SELECT_SINGLE_ROW",row:n,isSelected:o,keyField:t,rowCount:r,singleSelect:c})},disabled:u}))}const Ea=k.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function $a({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:r,row:o,onToggled:a}){const i=t?n.expanded:n.collapsed;return s.createElement(Ea,{"aria-disabled":e,onClick:()=>a&&a(o),"data-testid":`expander-button-${r}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},i)}const Oa=k(Ue)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function Pa({row:e,expanded:t=!1,expandableIcon:n,id:r,onToggled:o,disabled:a=!1}){return s.createElement(Oa,{onClick:i=>i.stopPropagation(),$noPadding:!0},s.createElement($a,{id:r,row:e,expanded:t,expandableIcon:n,disabled:a,onToggled:o}))}const ka=k.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({$extendedRowStyle:e})=>e};
`;var Da=s.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:r,extendedClassNames:o}){const a=["rdt_ExpanderRow",...o.split(" ").filter(i=>i!=="rdt_TableRow")].join(" ");return s.createElement(ka,{className:a,$extendedRowStyle:r},s.createElement(t,Object.assign({data:e},n)))});const Nt="allowRowEvents";var xt,Ut,Mn;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(xt||(xt={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(Ut||(Ut={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(Mn||(Mn={}));const Ia=M`
	&:hover {
		${({$highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Aa=M`
	&:hover {
		cursor: pointer;
	}
`,ja=k.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({$dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({$striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({$highlightOnHover:e})=>e&&Ia};
	${({$pointerOnHover:e})=>e&&Aa};
	${({$selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
	${({$conditionalStyle:e})=>e};
`;function Ta({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:r=!1,dense:o=!1,expandableIcon:a,expandableRows:i=!1,expandableRowsComponent:c,expandableRowsComponentProps:d,expandableRowsHideExpander:h,expandOnRowClicked:u=!1,expandOnRowDoubleClicked:g=!1,highlightOnHover:y=!1,id:f,expandableInheritConditionalStyles:x,keyField:R,onRowClicked:O=N,onRowDoubleClicked:E=N,onRowMouseEnter:C=N,onRowMouseLeave:m=N,onRowExpandToggled:v=N,onSelectedRow:D=N,pointerOnHover:S=!1,row:p,rowCount:A,rowIndex:V,selectableRowDisabled:Y=null,selectableRows:J=!1,selectableRowsComponent:ae,selectableRowsComponentProps:_,selectableRowsHighlight:fe=!1,selectableRowsSingle:Se=!1,selected:he,striped:se=!1,draggingColumnId:je,onDragStart:K,onDragOver:me,onDragEnd:ce,onDragEnter:L,onDragLeave:Re}){const[q,de]=s.useState(n);s.useEffect(()=>{de(n)},[n]);const X=s.useCallback(()=>{de(!q),v(!q,p)},[q,v,p]),be=S||i&&(u||g),ue=s.useCallback(F=>{F.target.getAttribute("data-tag")===Nt&&(O(p,F),!r&&i&&u&&X())},[r,u,i,X,O,p]),ee=s.useCallback(F=>{F.target.getAttribute("data-tag")===Nt&&(E(p,F),!r&&i&&g&&X())},[r,g,i,X,E,p]),Ee=s.useCallback(F=>{C(p,F)},[C,p]),Z=s.useCallback(F=>{m(p,F)},[m,p]),W=Be(p,R),{conditionalStyle:tt,classNames:nt}=hr(p,t,["rdt_TableRow"]),Ot=fe&&he,Pt=x?tt:{},kt=se&&V%2==0;return s.createElement(s.Fragment,null,s.createElement(ja,{id:`row-${f}`,role:"row",$striped:kt,$highlightOnHover:y,$pointerOnHover:!r&&be,$dense:o,onClick:ue,onDoubleClick:ee,onMouseEnter:Ee,onMouseLeave:Z,className:nt,$selected:Ot,$conditionalStyle:tt},J&&s.createElement(Ra,{name:`select-row-${W}`,keyField:R,row:p,rowCount:A,selected:he,selectableRowsComponent:ae,selectableRowsComponentProps:_,selectableRowDisabled:Y,selectableRowsSingle:Se,onSelectedRow:D}),i&&!h&&s.createElement(Pa,{id:W,expandableIcon:a,expanded:q,row:p,onToggled:X,disabled:r}),e.map(F=>F.omit?null:s.createElement(Ca,{id:`cell-${F.id}-${W}`,key:`cell-${F.id}-${W}`,dataTag:F.ignoreRowClick||F.button?null:Nt,column:F,row:p,rowIndex:V,isDragging:Qe(je,F.id),onDragStart:K,onDragOver:me,onDragEnd:ce,onDragEnter:L,onDragLeave:Re}))),i&&q&&s.createElement(Da,{key:`expander-${W}`,data:p,extendedRowStyle:Pt,extendedClassNames:nt,ExpanderComponent:c,expanderComponentProps:d}))}const _a=k.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({$sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Ha=({sortActive:e,sortDirection:t})=>P.createElement(_a,{$sortActive:e,$sortDirection:t},"▲"),Fa=k(br)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,$isDragging:t})=>t&&e.headCells.draggingStyle};
`,Na=M`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({$sortActive:e})=>!e&&M`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,Ma=k.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&Na};
`,La=k.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var za=s.memo(function({column:e,disabled:t,draggingColumnId:n,selectedColumn:r={},sortDirection:o,sortIcon:a,sortServer:i,pagination:c,paginationServer:d,persistSelectedOnSort:h,selectableRowsVisibleOnly:u,onSort:g,onDragStart:y,onDragOver:f,onDragEnd:x,onDragEnter:R,onDragLeave:O}){s.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[E,C]=s.useState(!1),m=s.useRef(null);if(s.useEffect(()=>{m.current&&C(m.current.scrollWidth>m.current.clientWidth)},[E]),e.omit)return null;const v=()=>{if(!e.sortable&&!e.selector)return;let _=o;Qe(r.id,e.id)&&(_=o===ve.ASC?ve.DESC:ve.ASC),g({type:"SORT_CHANGE",sortDirection:_,selectedColumn:e,clearSelectedOnSort:c&&d&&!h||i||u})},D=_=>s.createElement(Ha,{sortActive:_,sortDirection:o}),S=()=>s.createElement("span",{className:[o,"__rdt_custom_sort_icon__"].join(" ")},a),p=!(!e.sortable||!Qe(r.id,e.id)),A=!e.sortable||t,V=e.sortable&&!a&&!e.right,Y=e.sortable&&!a&&e.right,J=e.sortable&&a&&!e.right,ae=e.sortable&&a&&e.right;return s.createElement(Fa,{"data-column-id":e.id,className:"rdt_TableCol",$headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,$isDragging:Qe(e.id,n),onDragStart:y,onDragOver:f,onDragEnd:x,onDragEnter:R,onDragLeave:O},e.name&&s.createElement(Ma,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:A?void 0:v,onKeyPress:A?void 0:_=>{_.key==="Enter"&&v()},$sortActive:!A&&p,disabled:A},!A&&ae&&S(),!A&&Y&&D(p),typeof e.name=="string"?s.createElement(La,{title:E?e.name:void 0,ref:m,"data-column-id":e.id},e.name):e.name,!A&&J&&S(),!A&&V&&D(p)))});const Wa=k(Ue)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function Ba({headCell:e=!0,rowData:t,keyField:n,allSelected:r,mergeSelections:o,selectedRows:a,selectableRowsComponent:i,selectableRowsComponentProps:c,selectableRowDisabled:d,onSelectAllRows:h}){const u=a.length>0&&!r,g=d?t.filter(x=>!d(x)):t,y=g.length===0,f=Math.min(t.length,g.length);return s.createElement(Wa,{className:"rdt_TableCol",$headCell:e,$noPadding:!0},s.createElement(wr,{name:"select-all-rows",component:i,componentOptions:c,onClick:()=>{h({type:"SELECT_ALL_ROWS",rows:g,rowCount:f,mergeSelections:o,keyField:n})},checked:r,indeterminate:u,disabled:y}))}function yr(e=xt.AUTO){const t=typeof window=="object",[n,r]=s.useState(!1);return s.useEffect(()=>{if(t)if(e!=="auto")r(e==="rtl");else{const o=!(!window.document||!window.document.createElement),a=document.getElementsByTagName("BODY")[0],i=document.getElementsByTagName("HTML")[0],c=a.dir==="rtl"||i.dir==="rtl";r(o&&c)}},[e,t]),n}const Ga=k.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,Ya=k.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,Ln=k.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({$rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,$visible:t})=>t&&e.contextMenu.activeStyle};
`;function Ua({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:r,direction:o}){const a=yr(o),i=r>0;return n?s.createElement(Ln,{$visible:i},s.cloneElement(n,{selectedCount:r})):s.createElement(Ln,{$visible:i,$rtl:a},s.createElement(Ga,null,((c,d,h)=>{if(d===0)return null;const u=d===1?c.singular:c.plural;return h?`${d} ${c.message||""} ${u}`:`${d} ${u} ${c.message||""}`})(e,r,a)),s.createElement(Ya,null,t))}const Va=k.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,Ka=k.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,qa=k.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Xa=({title:e,actions:t=null,contextMessage:n,contextActions:r,contextComponent:o,selectedCount:a,direction:i,showMenu:c=!0})=>s.createElement(Va,{className:"rdt_TableHeader",role:"heading","aria-level":1},s.createElement(Ka,null,e),t&&s.createElement(qa,null,t),c&&s.createElement(Ua,{contextMessage:n,contextActions:r,contextComponent:o,direction:i,selectedCount:a}));function xr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}const Za={left:"flex-start",right:"flex-end",center:"center"},Qa=k.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Za[e]};
	flex-wrap: ${({$wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,Ja=e=>{var{align:t="right",wrapContent:n=!0}=e,r=xr(e,["align","wrapContent"]);return s.createElement(Qa,Object.assign({align:t,$wrapContent:n},r))},es=k.div`
	display: flex;
	flex-direction: column;
`,ts=k.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({$responsive:e,$fixedHeader:t})=>e&&M`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({$fixedHeader:e=!1,$fixedHeaderScrollHeight:t="100vh"})=>e&&M`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,zn=k.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,ns=k.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,rs=k(Ue)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,os=k.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,as=()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},P.createElement("path",{d:"M7 10l5 5 5-5z"}),P.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),ss=k.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,is=k.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,ls=e=>{var{defaultValue:t,onChange:n}=e,r=xr(e,["defaultValue","onChange"]);return s.createElement(is,null,s.createElement(ss,Object.assign({onChange:n,defaultValue:t},r)),s.createElement(as,null))},l={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return P.createElement("div",null,"To add an expander pass in a component instance via ",P.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:P.createElement(()=>P.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},P.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),P.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:P.createElement(()=>P.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},P.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),P.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:P.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:P.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Ut.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:P.createElement(()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},P.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),P.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:P.createElement(()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},P.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),P.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:P.createElement(()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},P.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),P.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:P.createElement(()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},P.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),P.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:xt.AUTO,onChangePage:N,onChangeRowsPerPage:N,onRowClicked:N,onRowDoubleClicked:N,onRowMouseEnter:N,onRowMouseLeave:N,onRowExpandToggled:N,onSelectedRowsChange:N,onSort:N,onColumnOrderChange:N},cs={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},ds=k.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,lt=k.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({$isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,us=k.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${mr`
    width: 100%;
    justify-content: space-around;
  `};
`,vr=k.span`
	flex-shrink: 1;
	user-select: none;
`,ps=k(vr)`
	margin: 0 24px;
`,gs=k(vr)`
	margin: 0 4px;
`;var fs=s.memo(function({rowsPerPage:e,rowCount:t,currentPage:n,direction:r=l.direction,paginationRowsPerPageOptions:o=l.paginationRowsPerPageOptions,paginationIconLastPage:a=l.paginationIconLastPage,paginationIconFirstPage:i=l.paginationIconFirstPage,paginationIconNext:c=l.paginationIconNext,paginationIconPrevious:d=l.paginationIconPrevious,paginationComponentOptions:h=l.paginationComponentOptions,onChangeRowsPerPage:u=l.onChangeRowsPerPage,onChangePage:g=l.onChangePage}){const y=(()=>{const _=typeof window=="object";function fe(){return{width:_?window.innerWidth:void 0,height:_?window.innerHeight:void 0}}const[Se,he]=s.useState(fe);return s.useEffect(()=>{if(!_)return()=>null;function se(){he(fe())}return window.addEventListener("resize",se),()=>window.removeEventListener("resize",se)},[]),Se})(),f=yr(r),x=y.width&&y.width>599,R=Ze(t,e),O=n*e,E=O-e+1,C=n===1,m=n===R,v=Object.assign(Object.assign({},cs),h),D=n===R?`${E}-${t} ${v.rangeSeparatorText} ${t}`:`${E}-${O} ${v.rangeSeparatorText} ${t}`,S=s.useCallback(()=>g(n-1),[n,g]),p=s.useCallback(()=>g(n+1),[n,g]),A=s.useCallback(()=>g(1),[g]),V=s.useCallback(()=>g(Ze(t,e)),[g,t,e]),Y=s.useCallback(_=>u(Number(_.target.value),n),[n,u]),J=o.map(_=>s.createElement("option",{key:_,value:_},_));v.selectAllRowsItem&&J.push(s.createElement("option",{key:-1,value:t},v.selectAllRowsItemText));const ae=s.createElement(ls,{onChange:Y,defaultValue:e,"aria-label":v.rowsPerPageText},J);return s.createElement(ds,{className:"rdt_Pagination"},!v.noRowsPerPage&&x&&s.createElement(s.Fragment,null,s.createElement(gs,null,v.rowsPerPageText),ae),x&&s.createElement(ps,null,D),s.createElement(us,null,s.createElement(lt,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":C,onClick:A,disabled:C,$isRTL:f},i),s.createElement(lt,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":C,onClick:S,disabled:C,$isRTL:f},d),!v.noRowsPerPage&&!x&&ae,s.createElement(lt,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":m,onClick:p,disabled:m,$isRTL:f},c),s.createElement(lt,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":m,onClick:V,disabled:m,$isRTL:f},a)))});const Oe=(e,t)=>{const n=s.useRef(!0);s.useEffect(()=>{n.current?n.current=!1:e()},t)};function hs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ms=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var n=Object.prototype.toString.call(t);return n==="[object RegExp]"||n==="[object Date]"||function(r){return r.$$typeof===bs}(t)}(e)},bs=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function et(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Ge((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function ws(e,t,n){return e.concat(t).map(function(r){return et(r,n)})}function Wn(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(n){return Object.propertyIsEnumerable.call(t,n)}):[]}(e))}function Bn(e,t){try{return t in e}catch{return!1}}function ys(e,t,n){var r={};return n.isMergeableObject(e)&&Wn(e).forEach(function(o){r[o]=et(e[o],n)}),Wn(t).forEach(function(o){(function(a,i){return Bn(a,i)&&!(Object.hasOwnProperty.call(a,i)&&Object.propertyIsEnumerable.call(a,i))})(e,o)||(Bn(e,o)&&n.isMergeableObject(t[o])?r[o]=function(a,i){if(!i.customMerge)return Ge;var c=i.customMerge(a);return typeof c=="function"?c:Ge}(o,n)(e[o],t[o],n):r[o]=et(t[o],n))}),r}function Ge(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||ws,n.isMergeableObject=n.isMergeableObject||ms,n.cloneUnlessOtherwiseSpecified=et;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):ys(e,t,n):et(t,n)}Ge.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,r){return Ge(n,r,t)},{})};var xs=hs(Ge);const Gn={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Yn={default:Gn,light:Gn,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function vs(e,t,n,r){const[o,a]=s.useState(()=>Fn(e)),[i,c]=s.useState(""),d=s.useRef("");Oe(()=>{a(Fn(e))},[e]);const h=s.useCallback(O=>{var E,C,m;const{attributes:v}=O.target,D=(E=v.getNamedItem("data-column-id"))===null||E===void 0?void 0:E.value;D&&(d.current=((m=(C=o[it(o,D)])===null||C===void 0?void 0:C.id)===null||m===void 0?void 0:m.toString())||"",c(d.current))},[o]),u=s.useCallback(O=>{var E;const{attributes:C}=O.target,m=(E=C.getNamedItem("data-column-id"))===null||E===void 0?void 0:E.value;if(m&&d.current&&m!==d.current){const v=it(o,d.current),D=it(o,m),S=[...o];S[v]=o[D],S[D]=o[v],a(S),t(S)}},[t,o]),g=s.useCallback(O=>{O.preventDefault()},[]),y=s.useCallback(O=>{O.preventDefault()},[]),f=s.useCallback(O=>{O.preventDefault(),d.current="",c("")},[]),x=function(O=!1){return O?ve.ASC:ve.DESC}(r),R=s.useMemo(()=>o[it(o,n==null?void 0:n.toString())]||{},[n,o]);return{tableColumns:o,draggingColumnId:i,handleDragStart:h,handleDragEnter:u,handleDragOver:g,handleDragLeave:y,handleDragEnd:f,defaultSortDirection:x,defaultSortColumn:R}}var Rs=s.memo(function(e){const{data:t=l.data,columns:n=l.columns,title:r=l.title,actions:o=l.actions,keyField:a=l.keyField,striped:i=l.striped,highlightOnHover:c=l.highlightOnHover,pointerOnHover:d=l.pointerOnHover,dense:h=l.dense,selectableRows:u=l.selectableRows,selectableRowsSingle:g=l.selectableRowsSingle,selectableRowsHighlight:y=l.selectableRowsHighlight,selectableRowsNoSelectAll:f=l.selectableRowsNoSelectAll,selectableRowsVisibleOnly:x=l.selectableRowsVisibleOnly,selectableRowSelected:R=l.selectableRowSelected,selectableRowDisabled:O=l.selectableRowDisabled,selectableRowsComponent:E=l.selectableRowsComponent,selectableRowsComponentProps:C=l.selectableRowsComponentProps,onRowExpandToggled:m=l.onRowExpandToggled,onSelectedRowsChange:v=l.onSelectedRowsChange,expandableIcon:D=l.expandableIcon,onChangeRowsPerPage:S=l.onChangeRowsPerPage,onChangePage:p=l.onChangePage,paginationServer:A=l.paginationServer,paginationServerOptions:V=l.paginationServerOptions,paginationTotalRows:Y=l.paginationTotalRows,paginationDefaultPage:J=l.paginationDefaultPage,paginationResetDefaultPage:ae=l.paginationResetDefaultPage,paginationPerPage:_=l.paginationPerPage,paginationRowsPerPageOptions:fe=l.paginationRowsPerPageOptions,paginationIconLastPage:Se=l.paginationIconLastPage,paginationIconFirstPage:he=l.paginationIconFirstPage,paginationIconNext:se=l.paginationIconNext,paginationIconPrevious:je=l.paginationIconPrevious,paginationComponent:K=l.paginationComponent,paginationComponentOptions:me=l.paginationComponentOptions,responsive:ce=l.responsive,progressPending:L=l.progressPending,progressComponent:Re=l.progressComponent,persistTableHead:q=l.persistTableHead,noDataComponent:de=l.noDataComponent,disabled:X=l.disabled,noTableHead:be=l.noTableHead,noHeader:ue=l.noHeader,fixedHeader:ee=l.fixedHeader,fixedHeaderScrollHeight:Ee=l.fixedHeaderScrollHeight,pagination:Z=l.pagination,subHeader:W=l.subHeader,subHeaderAlign:tt=l.subHeaderAlign,subHeaderWrap:nt=l.subHeaderWrap,subHeaderComponent:Ot=l.subHeaderComponent,noContextMenu:Pt=l.noContextMenu,contextMessage:kt=l.contextMessage,contextActions:F=l.contextActions,contextComponent:Cr=l.contextComponent,expandableRows:rt=l.expandableRows,onRowClicked:Qt=l.onRowClicked,onRowDoubleClicked:Jt=l.onRowDoubleClicked,onRowMouseEnter:en=l.onRowMouseEnter,onRowMouseLeave:tn=l.onRowMouseLeave,sortIcon:Sr=l.sortIcon,onSort:Rr=l.onSort,sortFunction:nn=l.sortFunction,sortServer:Dt=l.sortServer,expandableRowsComponent:Er=l.expandableRowsComponent,expandableRowsComponentProps:$r=l.expandableRowsComponentProps,expandableRowDisabled:rn=l.expandableRowDisabled,expandableRowsHideExpander:on=l.expandableRowsHideExpander,expandOnRowClicked:Or=l.expandOnRowClicked,expandOnRowDoubleClicked:Pr=l.expandOnRowDoubleClicked,expandableRowExpanded:an=l.expandableRowExpanded,expandableInheritConditionalStyles:kr=l.expandableInheritConditionalStyles,defaultSortFieldId:Dr=l.defaultSortFieldId,defaultSortAsc:Ir=l.defaultSortAsc,clearSelectedRows:sn=l.clearSelectedRows,conditionalRowStyles:Ar=l.conditionalRowStyles,theme:ln=l.theme,customStyles:cn=l.customStyles,direction:Ve=l.direction,onColumnOrderChange:jr=l.onColumnOrderChange,className:Tr,ariaLabel:dn}=e,{tableColumns:un,draggingColumnId:pn,handleDragStart:gn,handleDragEnter:fn,handleDragOver:hn,handleDragLeave:mn,handleDragEnd:bn,defaultSortDirection:_r,defaultSortColumn:Hr}=vs(n,jr,Dr,Ir),[{rowsPerPage:we,currentPage:ne,selectedRows:It,allSelected:wn,selectedCount:yn,selectedColumn:ie,sortDirection:Te,toggleOnSelectedRowsChange:Fr},$e]=s.useReducer(ua,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Hr,toggleOnSelectedRowsChange:!1,sortDirection:_r,currentPage:J,rowsPerPage:_,selectedRowsFlag:!1,contextMessage:l.contextMessage}),{persistSelectedOnSort:xn=!1,persistSelectedOnPageChange:ot=!1}=V,vn=!(!A||!ot&&!xn),Nr=Z&&!L&&t.length>0,Mr=K||fs,Lr=s.useMemo(()=>((b={},I="default",U="default")=>{const re=Yn[I]?I:U;return xs({table:{style:{color:(w=Yn[re]).text.primary,backgroundColor:w.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:w.text.primary,backgroundColor:w.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:w.background.default,minHeight:"52px"}},head:{style:{color:w.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:w.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:w.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:w.context.background,fontSize:"18px",fontWeight:400,color:w.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:w.text.primary,backgroundColor:w.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:w.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:w.selected.text,backgroundColor:w.selected.default,borderBottomColor:w.background.default}},highlightOnHoverStyle:{color:w.highlightOnHover.text,backgroundColor:w.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:w.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:w.background.default},stripedStyle:{color:w.striped.text,backgroundColor:w.striped.default}},expanderRow:{style:{color:w.text.primary,backgroundColor:w.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:w.button.default,fill:w.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:w.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:w.button.hover},"&:focus":{outline:"none",backgroundColor:w.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:w.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:w.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:w.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:w.button.default,fill:w.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:w.button.disabled,fill:w.button.disabled},"&:hover:not(:disabled)":{backgroundColor:w.button.hover},"&:focus":{outline:"none",backgroundColor:w.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:w.text.primary,backgroundColor:w.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:w.text.primary,backgroundColor:w.background.default}}},b);var w})(cn,ln),[cn,ln]),zr=s.useMemo(()=>Object.assign({},Ve!=="auto"&&{dir:Ve}),[Ve]),B=s.useMemo(()=>{if(Dt)return t;if(ie!=null&&ie.sortFunction&&typeof ie.sortFunction=="function"){const b=ie.sortFunction,I=Te===ve.ASC?b:(U,re)=>-1*b(U,re);return[...t].sort(I)}return function(b,I,U,re){return I?re&&typeof re=="function"?re(b.slice(0),I,U):b.slice(0).sort((w,At)=>{const He=I(w),ye=I(At);if(U==="asc"){if(He<ye)return-1;if(He>ye)return 1}if(U==="desc"){if(He>ye)return-1;if(He<ye)return 1}return 0}):b}(t,ie==null?void 0:ie.selector,Te,nn)},[Dt,ie,Te,t,nn]),Ke=s.useMemo(()=>{if(Z&&!A){const b=ne*we,I=b-we;return B.slice(I,b)}return B},[ne,Z,A,we,B]),Wr=s.useCallback(b=>{$e(b)},[]),Br=s.useCallback(b=>{$e(b)},[]),Gr=s.useCallback(b=>{$e(b)},[]),Yr=s.useCallback((b,I)=>Qt(b,I),[Qt]),Ur=s.useCallback((b,I)=>Jt(b,I),[Jt]),Vr=s.useCallback((b,I)=>en(b,I),[en]),Kr=s.useCallback((b,I)=>tn(b,I),[tn]),_e=s.useCallback(b=>$e({type:"CHANGE_PAGE",page:b,paginationServer:A,visibleOnly:x,persistSelectedOnPageChange:ot}),[A,ot,x]),qr=s.useCallback(b=>{const I=Ze(Y||Ke.length,b),U=Ft(ne,I);A||_e(U),$e({type:"CHANGE_ROWS_PER_PAGE",page:U,rowsPerPage:b})},[ne,_e,A,Y,Ke.length]);if(Z&&!A&&B.length>0&&Ke.length===0){const b=Ze(B.length,we),I=Ft(ne,b);_e(I)}Oe(()=>{v({allSelected:wn,selectedCount:yn,selectedRows:It.slice(0)})},[Fr]),Oe(()=>{Rr(ie,Te,B.slice(0))},[ie,Te]),Oe(()=>{p(ne,Y||B.length)},[ne]),Oe(()=>{S(we,ne)},[we]),Oe(()=>{_e(J)},[J,ae]),Oe(()=>{if(Z&&A&&Y>0){const b=Ze(Y,we),I=Ft(ne,b);ne!==I&&_e(I)}},[Y]),s.useEffect(()=>{$e({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:sn})},[g,sn]),s.useEffect(()=>{if(!R)return;const b=B.filter(U=>R(U)),I=g?b.slice(0,1):b;$e({type:"SELECT_MULTIPLE_ROWS",keyField:a,selectedRows:I,totalRows:B.length,mergeSelections:vn})},[t,R]);const Xr=x?Ke:B,Zr=ot||g||f;return s.createElement(ia,{theme:Lr},!ue&&(!!r||!!o)&&s.createElement(Xa,{title:r,actions:o,showMenu:!Pt,selectedCount:yn,direction:Ve,contextActions:F,contextComponent:Cr,contextMessage:kt}),W&&s.createElement(Ja,{align:tt,wrapContent:nt},Ot),s.createElement(ts,Object.assign({$responsive:ce,$fixedHeader:ee,$fixedHeaderScrollHeight:Ee,className:Tr},zr),s.createElement(ns,null,L&&!q&&s.createElement(zn,null,Re),s.createElement(ga,Object.assign({disabled:X,className:"rdt_Table",role:"table"},dn&&{"aria-label":dn}),!be&&(!!q||B.length>0&&!L)&&s.createElement(ha,{className:"rdt_TableHead",role:"rowgroup",$fixedHeader:ee},s.createElement(ma,{className:"rdt_TableHeadRow",role:"row",$dense:h},u&&(Zr?s.createElement(Ue,{style:{flex:"0 0 48px"}}):s.createElement(Ba,{allSelected:wn,selectedRows:It,selectableRowsComponent:E,selectableRowsComponentProps:C,selectableRowDisabled:O,rowData:Xr,keyField:a,mergeSelections:vn,onSelectAllRows:Br})),rt&&!on&&s.createElement(rs,null),un.map(b=>s.createElement(za,{key:b.id,column:b,selectedColumn:ie,disabled:L||B.length===0,pagination:Z,paginationServer:A,persistSelectedOnSort:xn,selectableRowsVisibleOnly:x,sortDirection:Te,sortIcon:Sr,sortServer:Dt,onSort:Wr,onDragStart:gn,onDragOver:hn,onDragEnd:bn,onDragEnter:fn,onDragLeave:mn,draggingColumnId:pn})))),!B.length&&!L&&s.createElement(os,null,de),L&&q&&s.createElement(zn,null,Re),!L&&B.length>0&&s.createElement(es,{className:"rdt_TableBody",role:"rowgroup"},Ke.map((b,I)=>{const U=Be(b,a),re=function(ye=""){return typeof ye!="number"&&(!ye||ye.length===0)}(U)?I:U,w=ft(b,It,a),At=!!(rt&&an&&an(b)),He=!!(rt&&rn&&rn(b));return s.createElement(Ta,{id:re,key:re,keyField:a,"data-row-id":re,columns:un,row:b,rowCount:B.length,rowIndex:I,selectableRows:u,expandableRows:rt,expandableIcon:D,highlightOnHover:c,pointerOnHover:d,dense:h,expandOnRowClicked:Or,expandOnRowDoubleClicked:Pr,expandableRowsComponent:Er,expandableRowsComponentProps:$r,expandableRowsHideExpander:on,defaultExpanderDisabled:He,defaultExpanded:At,expandableInheritConditionalStyles:kr,conditionalRowStyles:Ar,selected:w,selectableRowsHighlight:y,selectableRowsComponent:E,selectableRowsComponentProps:C,selectableRowDisabled:O,selectableRowsSingle:g,striped:i,onRowExpandToggled:m,onRowClicked:Yr,onRowDoubleClicked:Ur,onRowMouseEnter:Vr,onRowMouseLeave:Kr,onSelectedRow:Gr,draggingColumnId:pn,onDragStart:gn,onDragOver:hn,onDragEnd:bn,onDragEnter:fn,onDragLeave:mn})}))))),Nr&&s.createElement("div",null,s.createElement(Mr,{onChangePage:_e,onChangeRowsPerPage:qr,rowCount:Y||B.length,currentPage:ne,rowsPerPage:we,direction:Ve,paginationRowsPerPageOptions:fe,paginationIconLastPage:Se,paginationIconFirstPage:he,paginationIconNext:se,paginationIconPrevious:je,paginationComponentOptions:me})))});export{Qr as T,Rs as X,Jr as a,no as b,ro as c,eo as d,oo as e};
