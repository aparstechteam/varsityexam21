(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15efaf1d"],{"0ac0":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o={class:"container text-gray-900"},r={class:"card mt-2"},c={key:0,class:"my-3"},s=Object(n["createElementVNode"])("h1",{class:"text-center text-3xl text-red-500 font-semibold"}," Times Up! ",-1),l=[s],i=Object(n["createElementVNode"])("div",{class:"bg-white p-3 m-1 mx-auto rounded shadow border-2 border-indigo-500 ring-1 ring-blue-500 ring-offset-1"},[Object(n["createElementVNode"])("h1",{class:"text-center text-3xl font-semibold"},"Question")],-1),d={class:"my-3"},m=["href"],u=Object(n["createElementVNode"])("span",{class:"material-icons"},"download",-1),b=Object(n["createTextVNode"])(" Download Question"),f=[u,b],h=["src"],p={class:"my-10 bg-white p-5"},g=Object(n["createElementVNode"])("h1",{class:"text-center text-3xl my-4 font-semibold"}," Submit your answer here ",-1),j=Object(n["createElementVNode"])("p",{class:"text-center"}," লিখিত পরীক্ষার উত্তরপত্র তোমরা দুইভাবে জমা দিতে পারবে। খাতার ছবি তুলে ছবি আপলোড করতে পারবে অথবা সরাসরি PDF তৈরি করে আপলোড করতে পারবে। তবে PDF তৈরি করে আপলোড করলে সবচেয়ে সহজ হবে। ছবি আপলোডের ক্ষেত্রে অবশ্যই প্রথমে সকল ছবি ক্রমান্বয়ে সাজিয়ে সিলেক্ট করে নিবে, অতঃপর সবার শেষে সাবমিট বাটন চাপবে। মনে রাখবে, ছবি কিংবা PDF যেভাবেই খাতা জমা দাও না কেন, শুধুমাত্র একবারই সাবমিট বাটন প্রেস করে খাতা জমা দিতে পারবে। একাধিকবার জমা দেয়ার কোনো সুযোগ থাকবেনা। ",-1),v=Object(n["createElementVNode"])("br",null,null,-1),x={key:0,class:"my-2"},O={class:"relative"},w=["onClick"],V=Object(n["createElementVNode"])("span",{class:"material-icons"}," delete ",-1),y=[V],N=Object(n["createElementVNode"])("button",{class:"btn btn-square btn-sm top-0 right-0 rounded-none absolute handle"},[Object(n["createElementVNode"])("span",{class:"material-icons"}," open_with ")],-1),E=["src"],k=Object(n["createElementVNode"])("div",{class:"mt-1 text-sm text-gray-500",id:"user_avatar_help"},null,-1),_={class:"text-center"},A=["disabled"],B={key:0,class:"card mt-4"},I=Object(n["createElementVNode"])("div",{class:"bg-white p-3 m-1 mx-auto rounded shadow border-2 border-indigo-500 ring-1 ring-blue-500 ring-offset-1"},[Object(n["createElementVNode"])("h1",{class:"text-center text-3xl font-semibold"}," Solution of the avobe questions ")],-1),q={class:"my-3"},C=["href"],D=Object(n["createElementVNode"])("span",{class:"material-icons"},"download",-1),P=Object(n["createTextVNode"])(" Download Solution"),S=[D,P],T=["src"],F={key:1},M=Object(n["createElementVNode"])("h1",{class:"text-center text-2xl my-4 font-semibold"},[Object(n["createTextVNode"])(" You have already submitted your answer. "),Object(n["createElementVNode"])("br"),Object(n["createTextVNode"])(" Solution will be available after the time ends. ")],-1),Q=[M],$={key:2,class:"card"},J=Object(n["createElementVNode"])("h1",{class:"text-center text-3xl my-4 font-semibold"}," Answer that you have submitted ",-1),U={class:"text-center text-2xl"},R=["src"];function Y(e,t,a,s,u,b){var V=Object(n["resolveComponent"])("draggable");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",r,[u.exams.can?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,l)),i,Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("a",{target:"_blank",href:"https://drive.google.com/uc?id=".concat(u.exams.question.substr(32,33),"&export=download"),class:"btn btn-primary"},f,8,m)]),Object(n["createElementVNode"])("iframe",{src:"https://drive.google.com/file/d/".concat(u.exams.question.substr(32,33),"/preview"),height:"500",width:"100%"},null,8,h)]),Object(n["createElementVNode"])("div",p,[g,j,v,u.uploadedImage.length>0&&!u.isPdf?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",x,[Object(n["createVNode"])(V,{modelValue:u.uploadedImage,"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.uploadedImage=e}),group:"people",handle:".handle","item-key":"id",class:"flex flex-wrap gap-3"},{item:Object(n["withCtx"])((function(e){var t=e.element;return[Object(n["createElementVNode"])("div",O,[Object(n["createElementVNode"])("button",{class:"btn btn-square btn-sm rounded-none top-0 left-0 btn-error absolute",onClick:function(e){return b.deleteImage(t.id)}},y,8,w),N,Object(n["createElementVNode"])("img",{src:t.img,class:"h-44 w-44 object-cover cursor-move",alt:""},null,8,E)])]})),_:1},8,["modelValue"])])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("input",{class:"block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-transparent",onChange:t[1]||(t[1]=function(){return b.uploadImage&&b.uploadImage.apply(b,arguments)}),"aria-describedby":"user_avatar_help",id:"user_avatar",type:"file",multiple:""},null,32),k,Object(n["createElementVNode"])("div",_,[Object(n["createElementVNode"])("button",{class:Object(n["normalizeClass"])(["btn btn-primary mt-2",{loading:u.loading}]),onClick:t[2]||(t[2]=function(){return b.submitAnswers&&b.submitAnswers.apply(b,arguments)}),disabled:u.loading}," Submit ",10,A)])]),u.exams.can?u.answers?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",F,Q)):Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",B,[I,Object(n["createElementVNode"])("div",q,[Object(n["createElementVNode"])("a",{target:"_blank",href:"https://drive.google.com/uc?id=".concat(u.exams.cq_solve.substr(32,33),"&export=download"),class:"btn btn-primary"},S,8,C)]),Object(n["createElementVNode"])("iframe",{src:"https://drive.google.com/file/d/".concat(u.exams.cq_solve.substr(32,33),"/preview"),height:"500",width:"100%"},null,8,T)])),u.answers&&u.marks?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",$,[J,Object(n["createElementVNode"])("h2",U,"You got "+Object(n["toDisplayString"])(u.marks)+" Marks",1),Object(n["createElementVNode"])("iframe",{src:"https://drive.google.com/file/d/".concat(u.answers.substr(32,33),"/preview"),height:"500",width:"100%"},null,8,R)])):Object(n["createCommentVNode"])("",!0)])}a("b0c0"),a("d81d"),a("d3b7"),a("e9c4"),a("ac1f"),a("5319"),a("159b"),a("a630"),a("3ca3"),a("a434");var z=a("dce4"),L=a("b76a"),G=a.n(L),H={data:function(){return{myArray:[1,2,3,4,5,6],uploadedImage:[],loading:!1,exams:{},answers:"",marks:null,isPdf:!1}},components:{draggable:G.a},methods:{submitAnswers:function(){var e=this,t={info:{name:this.user.name,roll:this.user.ttrx},images:this.uploadedImage.map((function(e){return e.img})),isPdf:this.isPdf,r:this.exams.response_sheet.substr(39,44)};this.loading=!this.loading,fetch(z["b"],{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify(t)}).then((function(){e.$swal({icon:"success",title:"Successfully submitted"}).then((function(){e.loading=!e.loading,e.$router.replace("/")}))})).catch((function(e){return console.log(e)}))},uploadImage:function(e){var t=this,a=e.target.files;Array.from(a).forEach((function(e,a){t.isPdf="application/pdf"===e.type;var n=new FileReader;n.onloadend=function(){t.uploadedImage.push({img:n.result,id:a})},n.readAsDataURL(e)}))},deleteImage:function(e){this.uploadedImage.splice(e,1)},loadQuestion:function(){var e=this;fetch(z["c"]+"&id=".concat(this.$route.params.id)).then((function(e){return e.json()})).then((function(t){var a=t.exam,n=a.cq_exam,o=a.cq_solve,r=a.response_sheet,c=a.end;e.exams={question:n,cq_solve:o,response_sheet:r,can:new Date(c).getTime()>Date.now()}})).then((function(){e.loadAnswers()}))},loadAnswers:function(){var e=this;fetch(z["b"]+"?cs="+this.exams.response_sheet.substr(39,44)+"&roll="+this.user.ttrx).then((function(e){return e.json()})).then((function(t){var a=t[0],n=a.answers,o=a.marks;e.answers=n,e.marks=o}))}},computed:{user:function(){return this.$store.state.user}},created:function(){this.loadQuestion()}},K=a("6b0d"),W=a.n(K);const X=W()(H,[["render",Y]]);t["default"]=X},"4df4":function(e,t,a){"use strict";var n=a("da84"),o=a("0366"),r=a("c65b"),c=a("7b0b"),s=a("9bdd"),l=a("e95a"),i=a("68ee"),d=a("07fa"),m=a("8418"),u=a("9a1f"),b=a("35a1"),f=n.Array;e.exports=function(e){var t=c(e),a=i(this),n=arguments.length,h=n>1?arguments[1]:void 0,p=void 0!==h;p&&(h=o(h,n>2?arguments[2]:void 0));var g,j,v,x,O,w,V=b(t),y=0;if(!V||this==f&&l(V))for(g=d(t),j=a?new this(g):f(g);g>y;y++)w=p?h(t[y],y):t[y],m(j,y,w);else for(x=u(t,V),O=x.next,j=a?new this:[];!(v=r(O,x)).done;y++)w=p?s(x,h,[v.value,y],!0):v.value,m(j,y,w);return j.length=y,j}},"9bdd":function(e,t,a){var n=a("825a"),o=a("2a62");e.exports=function(e,t,a,r){try{return r?t(n(a)[0],a[1]):t(a)}catch(c){o(e,"throw",c)}}},a434:function(e,t,a){"use strict";var n=a("23e7"),o=a("da84"),r=a("23cb"),c=a("5926"),s=a("07fa"),l=a("7b0b"),i=a("65f0"),d=a("8418"),m=a("1dde"),u=m("splice"),b=o.TypeError,f=Math.max,h=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var a,n,o,m,u,j,v=l(this),x=s(v),O=r(e,x),w=arguments.length;if(0===w?a=n=0:1===w?(a=0,n=x-O):(a=w-2,n=h(f(c(t),0),x-O)),x+a-n>p)throw b(g);for(o=i(v,n),m=0;m<n;m++)u=O+m,u in v&&d(o,m,v[u]);if(o.length=n,a<n){for(m=O;m<x-n;m++)u=m+n,j=m+a,u in v?v[j]=v[u]:delete v[j];for(m=x;m>x-n+a;m--)delete v[m-1]}else if(a>n)for(m=x-n;m>O;m--)u=m+n-1,j=m+a-1,u in v?v[j]=v[u]:delete v[j];for(m=0;m<a;m++)v[m+O]=arguments[m+2];return v.length=x-n+a,o}})},a630:function(e,t,a){var n=a("23e7"),o=a("4df4"),r=a("1c7e"),c=!r((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:c},{from:o})}}]);