(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7e58"],{5326:function(e,t,r){"use strict";r.r(t);var c=r("7a23"),n={class:"grid min-h-screen place-items-center"},a=Object(c["createElementVNode"])("button",{class:"btn btn-circle loading"},null,-1),o=[a];function i(e,t,r,a,i,s){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,o)}r("d3b7"),r("ac1f"),r("5319");var s={created:function(){var e=this,t=this.$route.query.id;t?localStorage.getItem("nsvma")?this.$router.push({name:"Home"}):fetch("https://varsity21.aparsclassroom.com/api/uid/verification/".concat(t)).then((function(e){return e.json()})).then((function(r){200==r.status?e.$store.dispatch("authenticate",{userid:t,router:e.$router,route:e.$route}):e.$router.replace({name:"restricted"})})).catch((function(t){t&&e.$router.replace({name:"restricted"})})):this.$router.replace({name:"restricted"})}},u=r("6b0d"),d=r.n(u);const l=d()(s,[["render",i]]);t["default"]=l}}]);