(this.webpackJsonpresume_maker=this.webpackJsonpresume_maker||[]).push([[0],{100:function(e,t,s){},101:function(e,t,s){},108:function(e,t,s){},111:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),r=s(11),n=s.n(r),l=(s(99),s(100),s(17)),o=s(7),i=(s(36),s(101),s(1));var p=function(e){e.photourl;var t=e.setphotourl,s=e.name,c=e.setname,a=e.subtitle,r=e.setsubtitle,n=e.userdesc,l=e.setuserdesc,o=e.email,p=e.setemail,j=e.contact,h=e.setcontact,d=e.address,m=e.setaddress,x=e.github,u=e.setgithub,b=e.linkedin,O=e.setlinkedin,f=e.portfolio,g=e.setportfolio;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)("h1",{className:"heading",children:"Information"}),Object(i.jsxs)("div",{className:"form",children:[Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Photo"}),Object(i.jsx)("input",{type:"file",onChange:t,title:" ",style:{color:"transparent"},className:"custom-file-input"})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Name"}),Object(i.jsx)("input",{type:"text",placeholder:"Your Name",value:s,onChange:function(e){return c(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Subtitle"}),Object(i.jsx)("input",{type:"text",placeholder:"Your Subtitle",value:a,onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box textarea",children:[Object(i.jsx)("span",{className:"details",children:"Description"}),Object(i.jsx)("textarea",{type:"text",placeholder:"Description",value:n,onChange:function(e){return l(e.target.value)}})]})]}),Object(i.jsx)("h1",{className:"heading",children:"Extra Information"}),Object(i.jsxs)("div",{className:"form",children:[Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Email"}),Object(i.jsx)("input",{type:"text",placeholder:"Email Address",value:o,onChange:function(e){return p(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Contact"}),Object(i.jsx)("input",{type:"text",placeholder:"Number",value:j,onChange:function(e){return h(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Address"}),Object(i.jsx)("input",{type:"text",placeholder:"Address",value:d,onChange:function(e){return m(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Github"}),Object(i.jsx)("input",{type:"text",placeholder:"Url here",value:x,onChange:function(e){return u(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Linkedin"}),Object(i.jsx)("input",{type:"text",placeholder:"Url here",value:b,onChange:function(e){return O(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Portfolio"}),Object(i.jsx)("input",{type:"text",placeholder:"Url here",value:f,onChange:function(e){return g(e.target.value)}})]})]})]})})},j=s(148),h=s(46),d=s.n(h);var m=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:Object(i.jsxs)("p",{className:"skill",children:[e.item,Object(i.jsx)(d.a,{onClick:function(){e.onSelect(e.id)}})]})})})};var x=function(e){var t=e.input,s=e.skills,c=e.listofitems,a=e.deleteitems,r=e.setinput;return e.setskills,Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)("h1",{className:"heading",children:"Skills"}),Object(i.jsxs)("div",{className:"form",children:[Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Skills"}),Object(i.jsx)("input",{type:"text",placeholder:"Type Your Skills Here",value:t,onChange:function(e){return r(e.target.value)}}),Object(i.jsx)(j.a,{onClick:c,disabled:""===t,children:"+"})]}),Object(i.jsx)("div",{className:"skills-section",children:s.map((function(e,t){if(e.length>0)return Object(i.jsx)(m,{item:e,id:t,onSelect:a},t)}))})]})]})},u=s(13);function b(e){var t=e.number,s=e.project,c=e.setproject,a=e.name,r=e.link,n=e.tech,l=e.desc;return Object(i.jsxs)("div",{className:"form experience",children:[Object(i.jsxs)("h2",{children:["Project #",t," "]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Name"}),Object(i.jsx)("input",{type:"text",placeholder:"Project Name",value:a,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{name:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Link"}),Object(i.jsx)("input",{type:"text",placeholder:"Github/working Link",value:r,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{link:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Tech Used"}),Object(i.jsx)("input",{type:"text",placeholder:"Technology Used",value:n,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{tech:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"input-box textarea",children:[Object(i.jsx)("span",{className:"details",children:"Description"}),Object(i.jsx)("textarea",{type:"text",placeholder:"Description",value:l,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{desc:e.target.value}))}})]})]})}var O=function(e){var t=e.project,s=e.setproject,c=e.name,a=e.link,r=e.tech,n=e.desc,l=e.project2,o=e.setproject2,p=e.name2,j=e.link2,h=e.tech2,d=e.desc2,m=e.project3,x=e.setproject3,u=e.name3,O=e.link3,f=e.tech3,g=e.desc3,y=e.project4,v=e.setproject4,S=e.name4,N=e.link4,k=e.tech4,I=e.desc4;return Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)(b,{number:1,project:t,setproject:s,name:c,link:a,tech:r,desc:n}),Object(i.jsx)(b,{number:2,project:l,setproject:o,name:p,link:j,tech:h,desc:d}),Object(i.jsx)(b,{number:3,project:m,setproject:x,name:u,link:O,tech:f,desc:g}),Object(i.jsx)(b,{number:4,project:y,setproject:v,name:S,link:N,tech:k,desc:I})]})},f=function(e){var t=e.number,s=e.exp,c=e.setexp,a=e.postname,r=e.company,n=e.from,l=e.to,o=e.expdesc;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"form experience",children:[Object(i.jsxs)("h2",{children:["Experience #",t," "]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Post Title"}),Object(i.jsx)("input",{type:"text",placeholder:"Post Name",value:a,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{postname:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Company"}),Object(i.jsx)("input",{type:"text",placeholder:"Company Name",value:r,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{company:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"From"}),Object(i.jsx)("input",{type:"text",placeholder:"Your Subtitle",style:{width:"50%",marginLeft:"1.3rem"},value:n,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{from:e.target.value}))}}),Object(i.jsx)("span",{className:"details",style:{marginLeft:"1rem",width:"20%"},children:"To"}),Object(i.jsx)("input",{type:"text",placeholder:"Your Subtitle",style:{width:"50%",marginLeft:"0"},value:l,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{to:e.target.value}))}})]}),Object(i.jsxs)("div",{className:"input-box textarea",children:[Object(i.jsx)("span",{className:"details",children:"Experience"}),Object(i.jsx)("textarea",{type:"text",placeholder:"Write your Experience Here",value:o,onChange:function(e){return c(Object(u.a)(Object(u.a)({},s),{},{expdesc:e.target.value}))}})]})]})})};var g=function(e){var t=e.exp,s=e.setexp,c=e.postname,a=e.company,r=e.from,n=e.to,l=e.expdesc,o=e.exp2,p=e.setexp2,j=e.postname2,h=e.company2,d=e.from2,m=e.to2,x=e.expdesc2,u=e.exp3,b=e.setexp3,O=e.postname3,g=e.company3,y=e.from3,v=e.to3,S=e.expdesc3,N=e.exp4,k=e.setexp4,I=e.postname4,C=e.company4,W=e.from4,z=e.to4,E=e.expdesc4,T=e.exp5,w=e.setexp5,J=e.postname5,A=e.company5,L=e.from5,P=e.to5,F=e.expdesc5,U=e.exp6,_=e.setexp6,B=e.postname6,R=e.company6,Y=e.from6,M=e.to6,D=e.expdesc6;return Object(i.jsxs)("div",{className:"form workexp",children:[Object(i.jsx)("h1",{className:"heading",children:"Work Experience"}),Object(i.jsx)(f,{number:1,exp:t,setexp:s,postname:c,company:a,from:r,to:n,expdesc:l}),Object(i.jsx)(f,{number:2,exp:o,setexp:p,postname:j,company:h,from:d,to:m,expdesc:x}),Object(i.jsx)(f,{number:3,exp:u,setexp:b,postname:O,company:g,from:y,to:v,expdesc:S}),Object(i.jsx)(f,{number:4,exp:N,setexp:k,postname:I,company:C,from:W,to:z,expdesc:E}),Object(i.jsx)(f,{number:5,exp:T,setexp:w,postname:J,company:A,from:L,to:P,expdesc:F}),Object(i.jsx)(f,{number:6,exp:U,setexp:_,postname:B,company:R,from:Y,to:M,expdesc:D})]})},y=s(15);function v(e){var t=e.number,s=e.edu,c=e.setedu,a=e.school,r=e.course,n=e.from,l=e.to,o=e.ach,p=e.id,j=function(e,t,a){var r=s[e];r=Object(u.a)(Object(u.a)({},r),{},Object(y.a)({},t,a)),c(Object(u.a)(Object(u.a)({},s),{},Object(y.a)({},e,r)))};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"form experience",children:[Object(i.jsxs)("h2",{children:["Education #",t," "]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"School"}),Object(i.jsx)("input",{type:"text",placeholder:"School Name",value:a,onChange:function(e){return j(p,"school",e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Course"}),Object(i.jsx)("input",{type:"text",placeholder:"Course Name",value:r,onChange:function(e){return j(p,"course",e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"From"}),Object(i.jsx)("input",{type:"text",placeholder:"Your Subtitle",style:{width:"50%",marginLeft:"1.3rem"},value:n,onChange:function(e){return j(p,"from",e.target.value)}}),Object(i.jsx)("span",{className:"details",style:{marginLeft:"1rem",width:"20%"},children:"To"}),Object(i.jsx)("input",{type:"text",placeholder:"Your Subtitle",style:{width:"50%",marginLeft:"0"},value:l,onChange:function(e){return j(p,"to",e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Achievements"}),Object(i.jsx)("input",{type:"text",placeholder:"Achievements",value:o,onChange:function(e){return j(p,"ach",e.target.value)}})]})]})})}var S=function(e){var t=e.edu,s=e.setedu,a=Object(c.useState)(2),r=Object(o.a)(a,2),n=r[0],l=r[1];return Object(i.jsxs)("div",{className:"form education",children:[Object(i.jsx)("h1",{className:"heading",children:"Education"}),Object.keys(t).map((function(e,c){return Object(i.jsx)(v,{number:c+1,edu:t,id:e,school:t[e].school,setedu:s,course:t[e].course,from:t[e].from,to:t[e].to,ach:t[e].ach},c+1)})),Object(i.jsx)("button",{className:"add-edu-button",onClick:function(){return function(e,t){s(Object(u.a)(Object(u.a)({},e),{},Object(y.a)({},"edu_".concat(t),{school:"",course:"",from:"",to:"",ach:""}))),l((function(e){return e+1}))}(t,n)},style:{marginTop:"20px"},children:"Add more Educaiton"})]})},N=function(e){return Object(i.jsxs)("div",{className:"achivelist",children:[Object(i.jsx)("p",{children:e.item}),Object(i.jsx)(d.a,{onClick:function(){e.onSelect(e.id)}})]})};var k=function(e){var t=e.ach,s=e.setach,c=e.list,a=(e.setlist,e.additem),r=e.deleteitem;return Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)("h1",{className:"heading",children:"Achievements"}),Object(i.jsxs)("div",{className:"form",children:[Object(i.jsxs)("div",{className:"input-box",children:[Object(i.jsx)("span",{className:"details",children:"Achievements"}),Object(i.jsx)("input",{type:"text",placeholder:"Type Your Achievements Here",style:{width:"85%"},value:t,onChange:function(e){return s(e.target.value)}}),Object(i.jsx)(j.a,{onClick:a,disabled:""===t,children:"+"})]}),Object(i.jsx)("div",{className:"skills-section",style:{boxShadow:"none",height:"22rem"},children:c.map((function(e,t){if(e.length>0)return Object(i.jsx)(N,{item:e,id:t,onSelect:r},t)}))})]})]})},I=s(69),C=s(56),W=s(35),z=s(78),E=s(77),T=(s(108),s(70)),w=s.n(T),J=s(71),A=s.n(J),L=s(72),P=s.n(L),F=s(73),U=s.n(F),_=s(74),B=s.n(_),R=s(75),Y=s.n(R),M=s(49),D=s.n(M),H=function(e){Object(z.a)(s,e);var t=Object(E.a)(s);function s(){return Object(C.a)(this,s),t.apply(this,arguments)}return Object(W.a)(s,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"resume",style:{fontFamily:this.props.fontFamily},children:[Object(i.jsxs)("div",{className:"info",children:[""===this.props.photourl?null:Object(i.jsx)("img",{src:this.props.photourl,alt:"",width:"100",height:""}),Object(i.jsxs)("div",{className:"main-info",children:[Object(i.jsx)("h1",{style:{color:this.props.primary,textTransform:"capitalize"},children:this.props.name}),Object(i.jsx)("h3",{children:this.props.subtitle}),Object(i.jsx)("p",{children:this.props.userdesc})]})]}),this.props.email||this.props.contact||this.props.address||this.props.github||this.props.linkedin||this.props.portfolio?Object(i.jsxs)("div",{className:"extrainfo",children:[""===this.props.email?null:Object(i.jsxs)("a",{href:this.props.email,children:[" ",Object(i.jsx)(w.a,{style:{color:this.props.primary}})," ",this.props.email]}),""===this.props.contact?null:Object(i.jsxs)("a",{href:this.props.contact,children:[" ",Object(i.jsx)(A.a,{style:{color:this.props.primary}})," ",this.props.contact]}),""===this.props.address?null:Object(i.jsxs)("a",{href:this.props.address,children:[" ",Object(i.jsx)(P.a,{style:{color:this.props.primary}})," ",this.props.address]}),""===this.props.github?null:Object(i.jsxs)("a",{href:this.props.github,children:[Object(i.jsx)(U.a,{style:{color:this.props.primary}}),this.props.github]}),""===this.props.linkedin?null:Object(i.jsxs)("a",{href:this.props.linkedin,children:[Object(i.jsx)(B.a,{style:{color:this.props.primary}}),this.props.linkedin]}),""===this.props.portfolio?null:Object(i.jsxs)("a",{href:this.props.portfolio,children:[Object(i.jsx)(Y.a,{style:{color:this.props.primary}}),this.props.portfolio]})]}):null,Object(i.jsxs)("div",{className:"section",children:[Object(i.jsxs)("div",{className:"left-section",children:[""===this.props.exp3.postname&&""===this.props.exp2.postname&&""===this.props.exp.postname&&""===this.props.exp4.postname&&""===this.props.exp5.postname&&""===this.props.exp6.postname?null:Object(i.jsxs)("div",{className:"experiences",children:[Object(i.jsx)("h2",{className:"section-heading",style:{color:this.props.primary},children:"Experience"}),""===this.props.exp.postname?null:Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary,textTransform:"capitalize"},children:this.props.exp.postname}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp.company}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp.from," - ",this.props.exp.to]}),Object(i.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.exp.expdesc]})]}),""===this.props.exp2.postname?null:Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp2.postname}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp2.company}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp2.from," - ",this.props.exp2.to]}),Object(i.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.exp2.expdesc]})]}),""===this.props.exp3.postname?null:Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp3.postname}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp3.company}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp3.from," - ",this.props.exp3.to]}),Object(i.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.exp3.expdesc]})]}),""===this.props.exp4.postname?null:Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp4.postname}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp4.company}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp4.from," - ",this.props.exp4.to]}),Object(i.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.exp4.expdesc]})]}),""===this.props.exp5.postname?null:Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp5.postname}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp5.company}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp5.from," - ",this.props.exp5.to]}),Object(i.jsx)("h5",{style:{fontWeight:"400"},children:"Experience:"}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.exp5.expdesc]})]}),""===this.props.exp6.postname?null:Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:this.props.secondary},children:this.props.exp6.postname}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:this.props.exp6.company}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[this.props.exp6.from," - ",this.props.exp6.to]}),Object(i.jsx)("h5",{style:{fontWeight:"400",marginTop:"2px"},children:"Experience:"}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.exp6.expdesc]})]})]}),Object.keys(this.props.edu).reduce((function(t,s){return void 0===e.props.edu[s].school||""===e.props.edu[s].school||t?t:Object(i.jsx)("div",{className:"education",children:Object(i.jsx)("h2",{className:"section-heading",style:{color:e.props.primary},children:"Education"})})}),!1),Object(i.jsx)("div",{children:Object.keys(this.props.edu).map((function(t,s){if(void 0!==e.props.edu[t].school&&""!==e.props.edu[t].school)return Object(i.jsxs)("div",{className:"div",children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",color:e.props.secondary},children:e.props.edu[t].school}),Object(i.jsx)("h2",{style:{fontSize:"1rem",fontWeight:"400"},children:e.props.edu[t].course}),Object(i.jsxs)("p",{style:{fontSize:"13px",color:"gray",fontWeight:"600",marginLeft:"1rem",fontStyle:"italic"},className:"fromto",children:[e.props.edu[t].from," - ",e.props.edu[t].to]}),Object(i.jsx)("h5",{style:{fontWeight:"400"},children:"Achievements:"}),Object(i.jsxs)("p",{style:{},children:["- ",e.props.edu[t].ach]})]})}))})]}),Object(i.jsxs)("div",{className:"right-section",children:[0===this.props.skills.length?null:Object(i.jsxs)("div",{className:"skills",children:[Object(i.jsx)("h2",{className:"section-heading",style:{color:this.props.primary},children:"Skills"}),Object(i.jsx)("div",{children:this.props.skills.map((function(t){if(t.length>0)return Object(i.jsx)("p",{className:"skill",style:{backgroundColor:e.props.secondary},children:t})}))})]}),""===this.props.project3.name&&""===this.props.project2.name&&""===this.props.project.name?null:Object(i.jsxs)("div",{className:"projects",children:[Object(i.jsx)("h2",{className:"section-heading",style:{color:this.props.primary},children:"Projects"}),""===this.props.project.name?null:Object(i.jsxs)("div",{className:"div",style:{marginBottom:"1rem"},children:[Object(i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",color:this.props.secondary},children:[Object(i.jsx)("h2",{style:{fontSize:"1rem",textTransform:"capitalize"},children:this.props.project.name}),""===this.props.project.link?null:Object(i.jsx)("a",{href:this.props.project.link,style:{fontSize:"1rem",fontWeight:"400"},className:"attachments",children:Object(i.jsx)(D.a,{style:{color:this.props.secondary}})})]}),Object(i.jsxs)("h5",{style:{fontWeight:"400",display:"flex",alignItems:"center",flexWrap:"wrap"},children:["Technology Used:  ",Object(i.jsx)("h2",{className:"technology-used",style:{fontSize:"1rem",fontWeight:"400",color:this.props.secondary},children:this.props.project.tech})]}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.project.desc]})]}),""===this.props.project2.name?null:Object(i.jsxs)("div",{className:"div",style:{marginBottom:"1rem"},children:[Object(i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",color:this.props.secondary},children:[Object(i.jsx)("h2",{style:{fontSize:"1rem"},children:this.props.project2.name}),""===this.props.project2.link?null:Object(i.jsx)("a",{href:this.props.project2.link,style:{fontSize:"1rem",fontWeight:"400"},className:"attachments",children:Object(i.jsx)(D.a,{style:{color:this.props.secondary}})})]}),Object(i.jsxs)("h5",{style:{fontWeight:"400",display:"flex",alignItems:"center",flexWrap:"wrap"},children:["Technology Used:  ",Object(i.jsxs)("h2",{className:"technology-used",style:{fontSize:"1rem",fontWeight:"400",color:this.props.secondary},children:[" ",this.props.project2.tech]})]}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.project2.desc]})]}),""===this.props.project3.name?null:Object(i.jsxs)("div",{className:"div",style:{marginBottom:"1rem"},children:[Object(i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",color:this.props.secondary},children:[Object(i.jsx)("h2",{style:{fontSize:"1rem"},children:this.props.project3.name}),""===this.props.project3.link?null:Object(i.jsx)("a",{href:this.props.project2.link,style:{fontSize:"1rem",fontWeight:"400"},className:"attachments",children:Object(i.jsx)(D.a,{style:{color:this.props.secondary}})})]}),Object(i.jsxs)("h5",{style:{fontWeight:"400",display:"flex",alignItems:"center",flexWrap:"wrap"},children:["Technology Used:  ",Object(i.jsx)("h2",{className:"technology-used",style:{fontSize:"1rem",fontWeight:"400",color:this.props.secondary},children:this.props.project3.tech})]}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.project3.desc]})]}),""===this.props.project4.name?null:Object(i.jsxs)("div",{className:"div",style:{marginBottom:"1rem"},children:[Object(i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",color:this.props.secondary},children:[Object(i.jsx)("h2",{style:{fontSize:"1rem"},children:this.props.project4.name}),""===this.props.project4.link?null:Object(i.jsx)("a",{href:this.props.project4.link,style:{fontSize:"1rem",fontWeight:"400"},className:"attachments",children:Object(i.jsx)(D.a,{style:{color:this.props.secondary}})})]}),Object(i.jsxs)("h5",{style:{fontWeight:"400",display:"flex",alignItems:"center",flexWrap:"wrap"},children:["Technology Used:  ",Object(i.jsx)("h2",{className:"technology-used",style:{fontSize:"1rem",fontWeight:"400",color:this.props.secondary},children:this.props.project4.tech})]}),Object(i.jsxs)("p",{style:{},children:["- ",this.props.project4.desc]})]})]}),0===this.props.achlist.length?null:Object(i.jsxs)("div",{className:"achiec",children:[Object(i.jsx)("h2",{className:"section-heading",style:{color:this.props.primary},children:"Achievements"}),Object(i.jsx)("div",{children:this.props.achlist.map((function(e){if(e.length>0)return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("p",{style:{fontWeight:"600"},children:["- ",e]})})}))})]})]})]})]})}}]),s}(a.a.PureComponent),G=s(156),V=s(152),q=s(153),K=s(155),Q=s(159),X=s(61);var Z=function(){var e=Object(c.useRef)(),t=Object(I.useReactToPrint)({content:function(){return e.current}}),s=Object(c.useState)("info"),a=Object(o.a)(s,2),r=a[0],n=a[1],j=Object(c.useState)(""),h=Object(o.a)(j,2),d=h[0],m=h[1],u=Object(c.useState)(""),b=Object(o.a)(u,2),f=b[0],y=b[1],v=Object(c.useState)(""),N=Object(o.a)(v,2),C=N[0],W=N[1],z=Object(c.useState)(""),E=Object(o.a)(z,2),T=E[0],w=E[1],J=Object(c.useState)(""),A=Object(o.a)(J,2),L=A[0],P=A[1],F=Object(c.useState)(""),U=Object(o.a)(F,2),_=U[0],B=U[1],R=Object(c.useState)(""),Y=Object(o.a)(R,2),M=Y[0],D=Y[1],Z=Object(c.useState)(""),$=Object(o.a)(Z,2),ee=$[0],te=$[1],se=Object(c.useState)(""),ce=Object(o.a)(se,2),ae=ce[0],re=ce[1],ne=Object(c.useState)(""),le=Object(o.a)(ne,2),oe=le[0],ie=le[1],pe=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),je=Object(o.a)(pe,2),he=je[0],de=je[1],me=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),xe=Object(o.a)(me,2),ue=xe[0],be=xe[1],Oe=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),fe=Object(o.a)(Oe,2),ge=fe[0],ye=fe[1],ve=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),Se=Object(o.a)(ve,2),Ne=Se[0],ke=Se[1],Ie=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),Ce=Object(o.a)(Ie,2),We=Ce[0],ze=Ce[1],Ee=Object(c.useState)({postname:"",company:"",from:"",to:"",expdesc:""}),Te=Object(o.a)(Ee,2),we=Te[0],Je=Te[1],Ae=Object(c.useState)({edu_1:{school:"",course:"",from:"",to:"",ach:""}}),Le=Object(o.a)(Ae,2),Pe=Le[0],Fe=Le[1],Ue={edu_1:{school:"",course:"",from:"",to:"",ach:""}},_e=Object(c.useState)(""),Be=Object(o.a)(_e,2),Re=Be[0],Ye=Be[1],Me=Object(c.useState)([]),De=Object(o.a)(Me,2),He=De[0],Ge=De[1],Ve=Object(c.useState)({name:"",link:"",tech:"",desc:""}),qe=Object(o.a)(Ve,2),Ke=qe[0],Qe=qe[1],Xe=Object(c.useState)({name:"",link:"",tech:"",desc:""}),Ze=Object(o.a)(Xe,2),$e=Ze[0],et=Ze[1],tt=Object(c.useState)({name:"",link:"",tech:"",desc:""}),st=Object(o.a)(tt,2),ct=st[0],at=st[1],rt=Object(c.useState)({name:"",link:"",tech:"",desc:""}),nt=Object(o.a)(rt,2),lt=nt[0],ot=nt[1],it={name:"",link:"",tech:"",desc:""},pt=Object(c.useState)(""),jt=Object(o.a)(pt,2),ht=jt[0],dt=jt[1],mt=Object(c.useState)([]),xt=Object(o.a)(mt,2),ut=xt[0],bt=xt[1],Ot=function(){if(d.length||f.length||C.length||T.length||L.length||_.length||M.length||ee.length||ae.length||oe.length)return!1;if(Re.length||He.length>0||ht.length>0||ut.length>0)return!1;for(var e={postname:"",company:"",from:"",to:"",expdesc:""},t=[he,ue,ge,Ne,We,we],s=0;s<6;++s)if(JSON.stringify(t[s])!==JSON.stringify(e))return!1;for(var c={name:"",link:"",tech:"",desc:""},a=[Ke,$e,ct,lt],r=0;r<4;++r)if(JSON.stringify(a[r])!==JSON.stringify(c))return!1;return!0},ft=Object(c.useState)(""),gt=Object(o.a)(ft,2),yt=gt[0],vt=gt[1],St=Object(c.useState)(""),Nt=Object(o.a)(St,2),kt=Nt[0],It=Nt[1],Ct=[["#34678c","rgb(242, 100, 100)"],["#2b273f","#7cff81"],["black","#cddc39"],["rgb(0 150 151)","#ff9800"],["rgb(70 88 178)","#91c1dc"],["rgb(38 70 83)","#2a9d8f"],["rgb(188 108 37)","#dda15e"],["rgb(0 48 73)","#d62828"],["rgb(140 47 57)","#b23a48"]],Wt=Object(c.useState)(Ct),zt=Object(o.a)(Wt,2),Et=zt[0],Tt=zt[1],wt=Object(c.useState)("#34678c"),Jt=Object(o.a)(wt,2),At=Jt[0],Lt=Jt[1],Pt=Object(c.useState)("rgb(242, 100, 100)"),Ft=Object(o.a)(Pt,2),Ut=Ft[0],_t=Ft[1],Bt=Object(c.useState)(null),Rt=Object(o.a)(Bt,2),Yt=Rt[0],Mt=Rt[1],Dt=Object(c.useState)(0),Ht=Object(o.a)(Dt,2),Gt=Ht[0],Vt=Ht[1],qt=function(e){Mt(e.currentTarget)},Kt=Boolean(Yt),Qt=Kt?"simple-popover":void 0,Xt=Object(c.useState)("Arial"),Zt=Object(o.a)(Xt,2),$t=Zt[0],es=Zt[1],ts=["Arial","Verdana","Helvetica","Tahoma","Trebuchet MS","Times New Roman","Georgia","Garamond","Courier New","Brush Script MT","Lucida Sans","Futara","Segoe UI","Lucida Bright","Lucida Sans Typewriter","Comic Sans MS","Javanese Text"].sort();return Object(c.useEffect)((function(){var e=null===localStorage.getItem("name")?"":localStorage.getItem("name");y(e),W(null==localStorage.getItem("subtitle")?"":localStorage.getItem("subtitle")),m(null==localStorage.getItem("photourl")?"":localStorage.getItem("photourl")),w(null==localStorage.getItem("userdesc")?"":localStorage.getItem("userdesc")),P(null==localStorage.getItem("email")?"":localStorage.getItem("email")),B(null==localStorage.getItem("contact")?"":localStorage.getItem("contact")),D(null==localStorage.getItem("address")?"":localStorage.getItem("address")),te(null==localStorage.getItem("github")?"":localStorage.getItem("github")),re(null==localStorage.getItem("linkedin")?"":localStorage.getItem("linkedin")),ie(null==localStorage.getItem("portfolio")?"":localStorage.getItem("portfolio")),Ge(null==localStorage.getItem("skills")?[]:JSON.parse(localStorage.getItem("skills"))),bt(null==localStorage.getItem("list")?[]:JSON.parse(localStorage.getItem("list"))),Fe(null==localStorage.getItem("edu")?Ue:JSON.parse(localStorage.getItem("edu"))),Qe(null==localStorage.getItem("project")?it:JSON.parse(localStorage.getItem("project"))[0]),et(null==localStorage.getItem("project")?it:JSON.parse(localStorage.getItem("project"))[1]),at(null==localStorage.getItem("project")?it:JSON.parse(localStorage.getItem("project"))[2]),ot(null==localStorage.getItem("project")?it:JSON.parse(localStorage.getItem("project"))[3]),de(null==localStorage.getItem("exp")?he:JSON.parse(localStorage.getItem("exp"))[0]),be(null==localStorage.getItem("exp")?ue:JSON.parse(localStorage.getItem("exp"))[1]),ye(null==localStorage.getItem("exp")?ge:JSON.parse(localStorage.getItem("exp"))[2]),ke(null==localStorage.getItem("exp")?Ne:JSON.parse(localStorage.getItem("exp"))[3]),ze(null==localStorage.getItem("exp")?We:JSON.parse(localStorage.getItem("exp"))[4]),Je(null==localStorage.getItem("exp")?we:JSON.parse(localStorage.getItem("exp"))[5]),Tt(null==localStorage.getItem("themes")?Ct:JSON.parse(localStorage.getItem("themes"))),vt(null===localStorage.getItem("theme_primary")?"#34678c":localStorage.getItem("theme_primary")),It(null===localStorage.getItem("theme_secondary")?"rgb(242, 100, 100)":localStorage.getItem("theme_secondary")),Vt(null===localStorage.getItem("activeColor")?0:parseInt(localStorage.getItem("activeColor")))}),[]),Object(c.useEffect)((function(){localStorage.setItem("photourl",d),localStorage.setItem("name",f),localStorage.setItem("subtitle",C),localStorage.setItem("userdesc",T),localStorage.setItem("email",L),localStorage.setItem("contact",_),localStorage.setItem("address",M),localStorage.setItem("github",ee),localStorage.setItem("linkedin",ae),localStorage.setItem("portfolio",oe),localStorage.setItem("skills",JSON.stringify(He)),localStorage.setItem("list",JSON.stringify(ut)),localStorage.setItem("edu",JSON.stringify(Pe)),localStorage.setItem("project",JSON.stringify([Ke,$e,ct,lt])),localStorage.setItem("exp",JSON.stringify([he,ue,ge,Ne,We,we])),localStorage.setItem("themes",JSON.stringify(Et)),localStorage.setItem("theme_primary",yt),localStorage.setItem("theme_secondary",kt),localStorage.setItem("activeColor",Gt)}),[f,C,d,T,L,_,M,ee,oe,ae,he,He,ut,Pe,Ke,$e,ct,lt,he,ue,ge,Ne,We,we,Et,yt,kt,Gt]),Object(i.jsxs)("div",{id:"main",children:[Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("h2",{children:"Hash/Hub"}),Object(i.jsxs)("h1",{children:["\ud83d\udcc4",Object(i.jsx)("span",{children:"Resume Maker "})," "]}),Object(i.jsxs)("div",{className:"right",children:[Object(i.jsx)("a",{href:"https://github.com/vedant-jain03/Resume-Maker",children:"Contribute"}),Object(i.jsx)("a",{href:"https://github.com/vedant-jain03/Resume-Maker",children:"Give us star"})]})]}),Object(i.jsxs)("main",{className:"maincomponent",children:[Object(i.jsxs)("div",{className:"left",children:[Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)("li",{className:"info"===r?"active":"",onClick:function(){return n("info")},children:"Info"}),Object(i.jsx)("li",{className:"Experience"===r?"active":"",onClick:function(){return n("Experience")},children:"Experience"}),Object(i.jsx)("li",{className:"Education"===r?"active":"",onClick:function(){return n("Education")},children:"Education"}),Object(i.jsx)("li",{className:"Skills"===r?"active":"",onClick:function(){return n("Skills")},children:"Skills"}),Object(i.jsx)("li",{className:"Projects"===r?"active":"",onClick:function(){return n("Projects")},children:"Projects"}),Object(i.jsx)("li",{className:"Achievements"===r?"active":"",onClick:function(){return n("Achievements")},style:{width:"25%"},children:"Achievements"})]}),"info"===r?Object(i.jsx)(p,{photourl:d,setphotourl:function(e){var t=e.target.files[0],s=new FileReader;s.addEventListener("load",(function(e){m(s.result)})),s.readAsDataURL(t)},name:f,setname:y,subtitle:C,setsubtitle:W,userdesc:T,setuserdesc:w,email:L,setemail:P,contact:_,setcontact:B,address:M,setaddress:D,github:ee,setgithub:te,linkedin:ae,setlinkedin:re,portfolio:oe,setportfolio:ie}):null,"Experience"===r?Object(i.jsx)(g,{exp:he,setexp:de,postname:he.postname,company:he.company,from:he.from,to:he.to,expdesc:he.expdesc,exp2:ue,setexp2:be,postname2:ue.postname,company2:ue.company,from2:ue.from,to2:ue.to,expdesc2:ue.expdesc,exp3:ge,setexp3:ye,postname3:ge.postname,company3:ge.company,from3:ge.from,to3:ge.to,expdesc3:ge.expdesc,exp4:Ne,setexp4:ke,postname4:Ne.postname,company4:Ne.company,from4:Ne.from,to4:Ne.to,expdesc4:Ne.expdesc,exp5:We,setexp5:ze,postname5:We.postname,company5:We.company,from5:We.from,to5:We.to,expdesc5:We.expdesc,exp6:we,setexp6:Je,postname6:we.postname,company6:we.company,from6:we.from,to6:we.to,expdesc6:we.expdesc}):null,"Education"===r?Object(i.jsx)(S,{edu:Pe,setedu:Fe}):null,"Skills"===r?Object(i.jsx)(x,{input:Re,skills:He,listofitems:function(){Ge((function(e){return[].concat(Object(l.a)(e),[Re])})),Ye("")},deleteitems:function(e){Ge((function(t){return t.filter((function(t,s){return e!==s}))}))},setinput:Ye,setskills:Ge}):null,"Projects"===r?Object(i.jsx)(O,{project:Ke,setproject:Qe,name:Ke.name,link:Ke.link,tech:Ke.tech,desc:Ke.desc,project2:$e,setproject2:et,name2:$e.name,link2:$e.link,tech2:$e.tech,desc2:$e.desc,project3:ct,setproject3:at,name3:ct.name,link3:ct.link,tech3:ct.tech,desc3:ct.desc,project4:lt,setproject4:ot,name4:lt.name,link4:lt.link,tech4:lt.tech,desc4:lt.desc}):null,"Achievements"===r?Object(i.jsx)(k,{ach:ht,setach:dt,list:ut,setlist:bt,additem:function(){bt((function(e){return[].concat(Object(l.a)(e),[ht])})),dt("")},deleteitem:function(e){bt((function(t){return t.filter((function(t,s){return e!==s}))}))}}):null,Object(i.jsx)("div",{className:"scroller"})]}),Object(i.jsxs)("div",{className:"right",children:[Object(i.jsxs)("div",{className:"up",children:[Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("button",{className:"print-button",onClick:function(){Ot()?alert("Can't Print Empty Document"):t()},children:"Print this out!"}),Object(i.jsx)("button",{className:"print-button",onClick:function(){return localStorage.clear(),window.location.reload(!1)},children:"Clear All"})]}),Object(i.jsxs)("div",{className:"theme",children:[Object(i.jsx)("h2",{children:"Theme"}),Object(i.jsx)("div",{style:{background:"linear-gradient(45deg, ".concat(yt,", ").concat(kt,")")},onClick:qt}),Object(i.jsx)("button",{className:"pick-theme-button",onClick:qt,style:{marginLeft:"20px"},children:"Pick Theme"}),Object(i.jsx)(G.a,{id:Qt,open:Kt,anchorEl:Yt,transformOrigin:{vertical:"top",horizontal:"left"},onClose:function(){Mt(null)},children:Object(i.jsx)(V.a,{sx:{minWidth:275},children:Object(i.jsx)(q.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{style:{display:"flex",marginTop:"4px"},children:"Palette"}),Object(i.jsx)("div",{style:{display:"flex",marginTop:"4px"},children:Et.map((function(e,t){return Object(i.jsx)("div",{className:t===Gt?"combo colors-active colors":"combo colors",onClick:function(s){return function(e,t){vt(e[0]),It(e[1]),Mt(null),Vt(t)}(e,t)},style:{background:"linear-gradient(45deg, ".concat(e[0],", ").concat(e[1],")")}},t)}))})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{style:{marginTop:"4px"},children:"Create New"}),Object(i.jsx)("div",{className:"colors",style:{background:"linear-gradient(45deg, ".concat(At,", ").concat(Ut,")")}}),Object(i.jsxs)("div",{children:["Primary"," ",Object(i.jsx)(X.a,{defaultValue:At,value:At,onChange:function(e){return Lt("#".concat(e.hex))},deferred:!0,disableAlpha:!0}),"Secondary"," ",Object(i.jsx)(X.a,{defaultValue:Ut,value:Ut,onChange:function(e){return _t("#".concat(e.hex))},deferred:!0,disableAlpha:!0})]}),Object(i.jsxs)("div",{className:"fontpicker-div",children:[Object(i.jsx)("div",{className:"fontpicker-label",children:"Font"}),Object(i.jsx)(K.a,{value:$t,variant:"standard",onChange:function(e){return es(e.target.value)},className:"fontpicker",autoWidth:!0,children:ts.map((function(e,t){return Object(i.jsx)(Q.a,{value:e,children:e},t)}))})]}),Object(i.jsx)("button",{style:{marginTop:"20px"},onClick:function(){var e=[At,Ut];Tt([].concat(Object(l.a)(Et),[e]))},className:"save-theme-button",children:"Save Theme"})]})]})})})})]})]}),Object(i.jsx)("div",{className:"resume-preview",children:Object(i.jsx)(H,{photourl:d,name:f,subtitle:C,userdesc:T,email:L,contact:_,address:M,github:ee,linkedin:ae,portfolio:oe,exp:he,exp2:ue,exp3:ge,exp4:Ne,exp5:We,exp6:we,edu:Pe,skills:He,achlist:ut,project:Ke,project2:$e,project3:ct,project4:lt,primary:yt,secondary:kt,ref:e,fontFamily:$t})})]})]}),Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{children:"Copyright \xa9 2021. All rights reserved."})})]})};var $=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(Z,{})})};n.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)($,{})}),document.getElementById("root"))},36:function(e,t,s){},99:function(e,t,s){}},[[111,1,2]]]);
//# sourceMappingURL=main.a2d5c9e4.chunk.js.map