(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{7733:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts",function(){return r(229)}])},229:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return o}});var a=r(5893),n=r(9633),i=r(7294);function s(t){let{id:e,viewport:r,data:s,onDataChanged:l}=t;return(0,i.useEffect)(()=>{let t=n.Ys("#".concat(e));t.selectAll("*").remove(),t.append("rect").attr("x",0).attr("y",0).attr("width","100%").attr("height","100%").attr("fill",r.bgcolor||"#000"),l&&l({svg:t,data:s})},[s,e]),(0,a.jsx)("svg",{id:e,width:"100%",height:"auto",viewBox:"0 0 ".concat(r.width," ").concat(r.height),children:(0,a.jsx)(a.Fragment,{})})}function l(t){let{id:e,data:r,viewport:n,bars:i}=t;return(0,a.jsx)(s,{id:e,viewport:n,onDataChanged:function(t){let e=Math.max(...t.data),r=n.width/t.data.length-20,a=n.height/e;console.log(a),t.svg.selectAll("#d3dataplots").data(t.data).enter().append("rect").attr("id","#d3dataplots").attr("x",(t,e)=>10+e*(r+20)).attr("y",t=>n.height-t*a).attr("width",r).attr("height",(t,e)=>t*a).attr("fill",(null==i?void 0:i.color)||"#06d"),t.svg.selectAll("#d3dataplots").data(t.data).enter().append("text").attr("x",(t,e)=>10+e*(r+20)+r/2).attr("y",n.height-20).attr("fill","#fff").html(t=>t.toString()),console.log(t.svg.selectAll("#d3dataplots"))},data:r})}function o(){let t=(0,i.useRef)(null),[e,r]=(0,i.useState)([5,10,15,20,15,15,10,20,25]);return(0,i.useEffect)(()=>{t.current&&(t.current.value=e.toString())},[]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Charts Demo"}),(0,a.jsxs)("p",{children:["The following is a new prototype of the charts I used in ",(0,a.jsx)("a",{href:"http://mypinoy.bytecommander.com",children:"MyPinoy"}),". These charts are react components used with D3"]}),(0,a.jsx)("p",{children:"Note that this page is still under construction and most of the charts are still undergoing transitions. Check back soon! :)"}),(0,a.jsxs)("div",{children:["Ente a comma delimited numbers here then press UPDATE",(0,a.jsx)("input",{type:"text",ref:t,className:"m-4 p-1 text-gray-900"}),(0,a.jsx)("button",{className:"border p-1",onClick:()=>{!function(){try{if(t.current){let e=t.current.value.split(",").map(t=>{let e=parseInt(t.trim());if(isNaN(e))throw Error("NaN");return e});r(e)}}catch(t){alert("Invalid data: use comma delimited numbers only")}}()},children:"UPDATE"})]}),(0,a.jsx)("div",{className:"border m-2 h-96",children:(0,a.jsx)(l,{id:"barchart",data:e,viewport:{width:800,height:400,bgcolor:"#fff"},bars:{color:"#859"}})})]})}}},function(t){t.O(0,[633,774,888,179],function(){return t(t.s=7733)}),_N_E=t.O()}]);