"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8009],{18009:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var o=a(7552),n=a(68446),r=a(29499),l=a(58507),i=a(5401),s=a(49823),c=a(374),d=a(31647),p=a(943),m=a(64111),u=a(95767),y=a(82565),A=a(75199),b=a(73451),g=a(61723),v=a(68584),h=a(74893),f=a(69500);const w=(0,h.A)((0,f.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Create");var E=a(25762);const C=(0,n.observer)((function({rootModel:e,setIsAssemblyBeingEdited:t,setAssemblyBeingEdited:a}){const{assemblies:n}=e.jbrowse;return o.createElement(d.A,{component:p.A},o.createElement(m.A,null,o.createElement(u.A,null,o.createElement(y.A,null,o.createElement(A.A,null,"Name"),o.createElement(A.A,null,"Display name"),o.createElement(A.A,null,"Aliases"),o.createElement(A.A,null,"Actions"))),o.createElement(b.A,null,n.map((n=>{const r=(0,v.readConfObject)(n,"name"),l=(0,v.readConfObject)(n,"displayName"),i=(0,v.readConfObject)(n,"aliases");return o.createElement(y.A,{key:r},o.createElement(A.A,null,r),o.createElement(A.A,null,l),o.createElement(A.A,null,i?i.toString():""),o.createElement(A.A,null,o.createElement(g.A,{"data-testid":`${r}-edit`,onClick:()=>{t(!0),a(n)}},o.createElement(w,{color:"primary"})),o.createElement(g.A,{"data-testid":`${r}-delete`,onClick:()=>{!function(t){e.jbrowse.removeAssemblyConf(t)}(r)}},o.createElement(E.A,{color:"error"}))))})))))}));var x=a(1343),S=a(29629),T=a(67314);const k=(0,n.observer)((function({adapterSelection:e,setAdapterSelection:t,adapterTypes:a}){return o.createElement(x.A,{value:e,label:"Type",select:!0,helperText:"Type of adapter to use",fullWidth:!0,onChange:e=>{t(e.target.value)}},a.map((e=>o.createElement(S.A,{key:e,value:e},e))))})),L=(0,n.observer)((function({adapterSelection:e,fastaLocation:t,faiLocation:a,gziLocation:n,twoBitLocation:r,chromSizesLocation:l,setFaiLocation:i,setGziLocation:c,setTwoBitLocation:d,setFastaLocation:p,setChromSizesLocation:m}){return"IndexedFastaAdapter"===e||"BgzipFastaAdapter"===e?o.createElement(T.Ay,{container:!0,spacing:2},o.createElement(T.Ay,{item:!0},o.createElement(s.FileSelector,{name:"fastaLocation",location:t,setLocation:e=>{p(e)}})),o.createElement(T.Ay,{item:!0},o.createElement(s.FileSelector,{name:"faiLocation",location:a,setLocation:e=>{i(e)}})),"BgzipFastaAdapter"===e?o.createElement(T.Ay,{item:!0},o.createElement(s.FileSelector,{name:"gziLocation",location:n,setLocation:e=>{c(e)}})):null):"TwoBitAdapter"===e?o.createElement(T.Ay,{container:!0,spacing:2},o.createElement(T.Ay,{item:!0},o.createElement(s.FileSelector,{name:"twoBitLocation",location:r,setLocation:e=>{d(e)}})),o.createElement(T.Ay,{item:!0},o.createElement(s.FileSelector,{name:"chromSizesLocation (optional, can be added to speed up loading 2bit files with many contigs)",location:l,setLocation:e=>{m(e)}}))):null})),z={uri:""},M=["IndexedFastaAdapter","BgzipFastaAdapter","TwoBitAdapter"],B=(0,n.observer)((function({rootModel:e,setFormOpen:t}){const[a,n]=(0,o.useState)(""),[r,l]=(0,o.useState)(""),[s,d]=(0,o.useState)(M[0]),[m,u]=(0,o.useState)(z),[y,A]=(0,o.useState)(z),[b,g]=(0,o.useState)(z),[v,h]=(0,o.useState)(z),[f,w]=(0,o.useState)(z);return o.createElement("div",null,o.createElement(p.A,null,o.createElement(x.A,{id:"assembly-name",inputProps:{"data-testid":"assembly-name"},label:"Assembly name",helperText:"The assembly name e.g. hg38",variant:"outlined",value:a,onChange:e=>{n(e.target.value)}}),o.createElement(x.A,{id:"assembly-name",inputProps:{"data-testid":"assembly-display-name"},label:"Assembly display name",helperText:'A human readable display name for the assembly e.g. "Homo sapiens (hg38)"',variant:"outlined",value:r,onChange:e=>{l(e.target.value)}}),o.createElement(k,{adapterSelection:s,adapterTypes:M,setAdapterSelection:d}),o.createElement(L,{adapterSelection:s,fastaLocation:m,faiLocation:y,gziLocation:b,twoBitLocation:v,chromSizesLocation:f,setFaiLocation:A,setGziLocation:g,setTwoBitLocation:h,setFastaLocation:u,setChromSizesLocation:w})),o.createElement(i.A,{variant:"contained",color:"secondary",startIcon:o.createElement(c.A,null),onClick:function(){if(""===a)e.session?.notify("Can't create an assembly without a name");else{let o;if(t(!1),"IndexedFastaAdapter"===s)o={name:a,displayName:r,sequence:{adapter:{type:"IndexedFastaAdapter",fastaLocation:m,faiLocation:y}}};else if("BgzipFastaAdapter"===s)o={name:a,displayName:r,sequence:{adapter:{type:"BgzipFastaAdapter",fastaLocation:m,faiLocation:y,gziLocation:b}}};else{if("TwoBitAdapter"!==s)throw new Error(`unknown ${s}`);o={name:a,displayName:r,sequence:{adapter:{type:"TwoBitAdapter",twoBitLocation:v,chromSizesLocation:f}}}}e.jbrowse.addAssemblyConf(o),e.session?.notify(`Successfully added ${a} assembly to JBrowse 2`,"success")}}},"Create new assembly"))}));var H=a(59099);const R=(0,a(75785).n9)()({container:{overflow:"auto",maxHeight:600}}),j=(0,n.observer)((function({assembly:e}){const{classes:t}=R();return o.createElement("div",{className:t.container},e?o.createElement(H.S,{model:{target:e}}):o.createElement("div",null,"No assembly"))})),F=(0,n.observer)((function({rootModel:e,onClose:t}){const[a,n]=(0,o.useState)(!1),[d,p]=(0,o.useState)(!1),[m,u]=(0,o.useState)(),y=!a&&!d;return o.createElement(s.Dialog,{open:!0,onClose:()=>{t(!1)},title:"Assembly manager"},o.createElement(r.A,null,y?o.createElement(C,{rootModel:e,setIsAssemblyBeingEdited:p,setAssemblyBeingEdited:u}):null,d?o.createElement(j,{assembly:m}):null,a?o.createElement(B,{rootModel:e,setFormOpen:n}):null),o.createElement(l.A,null,a?o.createElement(i.A,{variant:"contained",onClick:()=>{n(!1)}},"Back"):null,d?o.createElement(i.A,{variant:"contained",onClick:()=>{p(!1)}},"Back"):null,y?o.createElement(o.Fragment,null,o.createElement(i.A,{color:"secondary",variant:"contained",onClick:()=>{t(!1)}},"Close"),o.createElement(i.A,{variant:"contained",startIcon:o.createElement(c.A,null),onClick:()=>{n(!0)}},"Add new assembly")):null))}))},25762:(e,t,a)=>{a.d(t,{A:()=>r});var o=a(74893),n=a(69500);const r=(0,o.A)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},64111:(e,t,a)=>{a.d(t,{A:()=>y});var o=a(7552),n=a(93878),r=a(70799),l=a(15560),i=a(51148),s=a(84893),c=a(4785),d=a(12667),p=a(69500);const m=(0,i.Ay)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})((0,s.A)((({theme:e})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:e})=>e.stickyHeader,style:{borderCollapse:"separate"}}]})))),u="table",y=o.forwardRef((function(e,t){const a=(0,c.b)({props:e,name:"MuiTable"}),{className:i,component:s=u,padding:y="normal",size:A="medium",stickyHeader:b=!1,...g}=a,v={...a,component:s,padding:y,size:A,stickyHeader:b},h=(e=>{const{classes:t,stickyHeader:a}=e,o={root:["root",a&&"stickyHeader"]};return(0,r.A)(o,d.l,t)})(v),f=o.useMemo((()=>({padding:y,size:A,stickyHeader:b})),[y,A,b]);return(0,p.jsx)(l.A.Provider,{value:f,children:(0,p.jsx)(m,{as:s,role:s===u?null:"table",ref:t,className:(0,n.A)(h.root,i),ownerState:v,...g})})}))},15560:(e,t,a)=>{a.d(t,{A:()=>o});const o=a(7552).createContext()},70156:(e,t,a)=>{a.d(t,{A:()=>o});const o=a(7552).createContext()},12667:(e,t,a)=>{a.d(t,{A:()=>l,l:()=>r});var o=a(33761),n=a(85693);function r(e){return(0,n.Ay)("MuiTable",e)}const l=(0,o.A)("MuiTable",["root","stickyHeader"])},73451:(e,t,a)=>{a.d(t,{A:()=>y});var o=a(7552),n=a(93878),r=a(70799),l=a(70156),i=a(51148),s=a(4785),c=a(20255),d=a(69500);const p=(0,i.Ay)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),m={variant:"body"},u="tbody",y=o.forwardRef((function(e,t){const a=(0,s.b)({props:e,name:"MuiTableBody"}),{className:o,component:i=u,...y}=a,A={...a,component:i},b=(e=>{const{classes:t}=e;return(0,r.A)({root:["root"]},c.b,t)})(A);return(0,d.jsx)(l.A.Provider,{value:m,children:(0,d.jsx)(p,{className:(0,n.A)(b.root,o),as:i,ref:t,role:i===u?null:"rowgroup",ownerState:A,...y})})}))},20255:(e,t,a)=>{a.d(t,{A:()=>l,b:()=>r});var o=a(33761),n=a(85693);function r(e){return(0,n.Ay)("MuiTableBody",e)}const l=(0,o.A)("MuiTableBody",["root"])},75199:(e,t,a)=>{a.d(t,{A:()=>b});var o=a(7552),n=a(93878),r=a(70799),l=a(963),i=a(15622),s=a(15560),c=a(70156),d=a(51148),p=a(84893),m=a(4785),u=a(48459),y=a(69500);const A=(0,d.Ay)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,i.A)(a.size)}`],"normal"!==a.padding&&t[`padding${(0,i.A)(a.padding)}`],"inherit"!==a.align&&t[`align${(0,i.A)(a.align)}`],a.stickyHeader&&t.stickyHeader]}})((0,p.A)((({theme:e})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===e.palette.mode?(0,l.a)((0,l.X4)(e.palette.divider,1),.88):(0,l.e$)((0,l.X4)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(e.vars||e).palette.text.primary}},{props:{variant:"footer"},style:{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${u.A.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:({ownerState:e})=>e.stickyHeader,style:{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}}]})))),b=o.forwardRef((function(e,t){const a=(0,m.b)({props:e,name:"MuiTableCell"}),{align:l="inherit",className:d,component:p,padding:b,scope:g,size:v,sortDirection:h,variant:f,...w}=a,E=o.useContext(s.A),C=o.useContext(c.A),x=C&&"head"===C.variant;let S;S=p||(x?"th":"td");let T=g;"td"===S?T=void 0:!T&&x&&(T="col");const k=f||C&&C.variant,L={...a,align:l,component:S,padding:b||(E&&E.padding?E.padding:"normal"),size:v||(E&&E.size?E.size:"medium"),sortDirection:h,stickyHeader:"head"===k&&E&&E.stickyHeader,variant:k},z=(e=>{const{classes:t,variant:a,align:o,padding:n,size:l,stickyHeader:s}=e,c={root:["root",a,s&&"stickyHeader","inherit"!==o&&`align${(0,i.A)(o)}`,"normal"!==n&&`padding${(0,i.A)(n)}`,`size${(0,i.A)(l)}`]};return(0,r.A)(c,u.r,t)})(L);let M=null;return h&&(M="asc"===h?"ascending":"descending"),(0,y.jsx)(A,{as:S,ref:t,className:(0,n.A)(z.root,d),"aria-sort":M,scope:T,ownerState:L,...w})}))},48459:(e,t,a)=>{a.d(t,{A:()=>l,r:()=>r});var o=a(33761),n=a(85693);function r(e){return(0,n.Ay)("MuiTableCell",e)}const l=(0,o.A)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"])},31647:(e,t,a)=>{a.d(t,{A:()=>p});var o=a(7552),n=a(93878),r=a(70799),l=a(51148),i=a(4785),s=a(39339),c=a(69500);const d=(0,l.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),p=o.forwardRef((function(e,t){const a=(0,i.b)({props:e,name:"MuiTableContainer"}),{className:o,component:l="div",...p}=a,m={...a,component:l},u=(e=>{const{classes:t}=e;return(0,r.A)({root:["root"]},s.I,t)})(m);return(0,c.jsx)(d,{ref:t,as:l,className:(0,n.A)(u.root,o),ownerState:m,...p})}))},39339:(e,t,a)=>{a.d(t,{A:()=>l,I:()=>r});var o=a(33761),n=a(85693);function r(e){return(0,n.Ay)("MuiTableContainer",e)}const l=(0,o.A)("MuiTableContainer",["root"])},95767:(e,t,a)=>{a.d(t,{A:()=>y});var o=a(7552),n=a(93878),r=a(70799),l=a(70156),i=a(51148),s=a(4785),c=a(14627),d=a(69500);const p=(0,i.Ay)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),m={variant:"head"},u="thead",y=o.forwardRef((function(e,t){const a=(0,s.b)({props:e,name:"MuiTableHead"}),{className:o,component:i=u,...y}=a,A={...a,component:i},b=(e=>{const{classes:t}=e;return(0,r.A)({root:["root"]},c.X,t)})(A);return(0,d.jsx)(l.A.Provider,{value:m,children:(0,d.jsx)(p,{as:i,className:(0,n.A)(b.root,o),ref:t,role:i===u?null:"rowgroup",ownerState:A,...y})})}))},14627:(e,t,a)=>{a.d(t,{A:()=>l,X:()=>r});var o=a(33761),n=a(85693);function r(e){return(0,n.Ay)("MuiTableHead",e)}const l=(0,o.A)("MuiTableHead",["root"])},82565:(e,t,a)=>{a.d(t,{A:()=>A});var o=a(7552),n=a(93878),r=a(70799),l=a(963),i=a(70156),s=a(51148),c=a(84893),d=a(4785),p=a(36317),m=a(69500);const u=(0,s.Ay)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((0,c.A)((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${p.A.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${p.A.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})))),y="tr",A=o.forwardRef((function(e,t){const a=(0,d.b)({props:e,name:"MuiTableRow"}),{className:l,component:s=y,hover:c=!1,selected:A=!1,...b}=a,g=o.useContext(i.A),v={...a,component:s,hover:c,selected:A,head:g&&"head"===g.variant,footer:g&&"footer"===g.variant},h=(e=>{const{classes:t,selected:a,hover:o,head:n,footer:l}=e,i={root:["root",a&&"selected",o&&"hover",n&&"head",l&&"footer"]};return(0,r.A)(i,p.r,t)})(v);return(0,m.jsx)(u,{as:s,ref:t,className:(0,n.A)(h.root,l),role:s===y?null:"row",ownerState:v,...b})}))},36317:(e,t,a)=>{a.d(t,{A:()=>l,r:()=>r});var o=a(33761),n=a(85693);function r(e){return(0,n.Ay)("MuiTableRow",e)}const l=(0,o.A)("MuiTableRow",["root","selected","hover","head","footer"])}}]);
//# sourceMappingURL=8009.8495eb4c.chunk.js.map