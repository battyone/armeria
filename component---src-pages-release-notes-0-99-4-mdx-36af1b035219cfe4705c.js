(window.webpackJsonp=window.webpackJsonp||[]).push([[102,67,72,73,75,76,77,79,83,84,86,87,88,89,90,98,103,104,131],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5","/release-notes/0.98.4":"v0.98.4","/release-notes/0.98.3":"v0.98.3","/release-notes/0.98.2":"v0.98.2","/release-notes/0.98.1":"v0.98.1","/release-notes/0.98.0":"v0.98.0","/release-notes/0.97.0":"v0.97.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},"9KFf":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var n=a("7ljp"),s=a("JkCF");var r,i={},c=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),o={_frontmatter:i},l=s.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(l,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"📈 Improvements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"type://ConcurrencyLimitingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/limit/ConcurrencyLimitingClient.html"}),"type://ConcurrencyLimitingClient")," now disables the limit when ",Object(n.b)("inlineCode",{parentName:"li"},"maxConcurrency")," is ",Object(n.b)("inlineCode",{parentName:"li"},"Integer.MAX_VALUE"),". ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2667"}),"#2667"))),Object(n.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🛠️ Bug fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixed a memory leak where a HEAD request is not cleaned up properly in a certain case. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2666"}),"#2666")),Object(n.b)("li",{parentName:"ul"},"DNS query timeouts are now handled correctly when querying for A and AAAA records at the same time. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2664"}),"#2664")," ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2665"}),"#2665")),Object(n.b)("li",{parentName:"ul"},"Fixed a noisy ",Object(n.b)("inlineCode",{parentName:"li"},"IllegalStateException")," while handling a failed connection attempt. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2671"}),"#2671"))),Object(n.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🙇 Thank you"),Object(n.b)(c,{usernames:["anuraaga","bw-moon","ikhoon","jacobis","kojilin","minwoox","trustin"],mdxType:"ThankYou"}))}b.isMDXComponent=!0},JkCF:function(e,t,a){"use strict";a("E5k/"),a("Ll4R"),a("rzGZ"),a("Dq+y"),a("8npG"),a("PZd/");var n=a("q1tI"),s=a.n(n),r=a("2+3N"),i=a("1lec"),c=a("+ejy"),o=a("+9zj");t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(r).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(i).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var l=Object(o.a)(e.location),b=e.version||l.substring(l.lastIndexOf("/")+1);return b.match(/^[0-9]/)||(b=void 0),s.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:b?b+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),b?s.a.createElement("h1",{id:"release-notes"},s.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},s.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},s.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),b," release notes"):"",e.children)}}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-99-4-mdx-36af1b035219cfe4705c.js.map