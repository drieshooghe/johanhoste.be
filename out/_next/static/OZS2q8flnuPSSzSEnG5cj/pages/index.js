(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var u=n("hfKm"),M=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};u(e,"__esModule",{value:!0});var r=M(n("q1tI")),i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,u=t.hybrid,M=void 0!==u&&u,r=t.hasQuery;return n||M&&(void 0!==r&&r)}e.isInAmpMode=a,e.useAmp=function(){return a(r.default.useContext(i.AmpStateContext))}},"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"23aj":function(t,e,n){"use strict";n.r(e);var u=n("q1tI"),M=n.n(u),r=n("WG+l"),i=n("P8LY"),a=n("0iUn"),s=n("sLSF"),L=n("MI3g"),o=n("a7VT"),c=n("Tit0"),j=(n("OdS2"),n("8Kt/")),N=n.n(j),l=M.a.createElement,y=function(t){function e(){return Object(a.a)(this,e),Object(L.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return l(N.a,null,l("title",null,"Johan Hoste"),l("link",{href:"https://fonts.googleapis.com/css?family=Oswald:200,300,500&display=swap",rel:"stylesheet"}),l("link",{rel:"stylesheet",href:"/_next/public/style/main.chunk.css"}))}}]),e}(u.Component),w=M.a.createElement,T=function(t){function e(){return Object(a.a)(this,e),Object(L.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return w("img",{src:n("OxPZ")})}}]),e}(u.Component);n.d(e,"default",function(){return d});var f=u.createElement,C={backgroundImage:"url('img/home-background.jpg')"};function d(){return f("div",null,f(y,null),f("div",{className:"font-sans bg-white w-screen max-w-full"},f("div",{className:"flex flex-col h-screen bg-cover-home justify-center items-center",style:C},f("div",{className:"flex flex-col min-h-screen justify-center"},f(T,null),f("h1",{className:"text-white font-light font-menu text-4xl lg:text-5xl text-center"},i.a.pages.home.title),f("div",{className:"text-white font-light font-menu text-1xl lg:text-2xl text-center pb-3"},i.a.pages.home.body),f(r.a,null)))))}},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var u=n("ttDY"),M=n("hfKm"),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};M(e,"__esModule",{value:!0});var i=r(n("q1tI")),a=r(n("Xuae")),s=n("lwAK"),L=n("FYa8"),o=n("/0+H");function c(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[i.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return t||e.push(i.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function j(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===i.default.Fragment?t.concat(i.default.Children.toArray(e.props.children).reduce(function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)},[])):t.concat(e)}e.defaultHead=c;var N=["name","httpEquiv","charSet","itemProp"];function l(t,e){return t.reduce(function(t,e){var n=i.default.Children.toArray(e.props.children);return t.concat(n)},[]).reduce(j,[]).reverse().concat(c(e.inAmpMode)).filter(function(){var t=new u,e=new u,n=new u,M={};return function(r){if(r.key&&"number"!==typeof r.key&&0===r.key.indexOf(".$"))return!t.has(r.key)&&(t.add(r.key),!0);if(t.has(".$".concat(r.key)))return!1;switch(r.type){case"title":case"base":if(e.has(r.type))return!1;e.add(r.type);break;case"meta":for(var i=0,a=N.length;i<a;i++){var s=N[i];if(r.props.hasOwnProperty(s))if("charSet"===s){if(n.has(s))return!1;n.add(s)}else{var L=r.props[s],o=M[s]||new u;if(o.has(L))return!1;o.add(L),M[s]=o}}}return!0}}()).reverse().map(function(t,e){var n=t.key||e;return i.default.cloneElement(t,{key:n})})}var y=a.default();function w(t){var e=t.children;return i.default.createElement(s.AmpStateContext.Consumer,null,function(t){return i.default.createElement(L.HeadManagerContext.Consumer,null,function(n){return i.default.createElement(y,{reduceComponentsToState:l,handleStateChange:n,inAmpMode:o.isInAmpMode(t)},e)})})}w.rewind=y.rewind,e.default=w},B9jh:function(t,e,n){"use strict";var u=n("Wu5q"),M=n("n3ko");t.exports=n("raTm")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return u.def(M(this,"Set"),t=0===t?0:t,t)}},u)},FYa8:function(t,e,n){"use strict";var u=n("hfKm"),M=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};u(e,"__esModule",{value:!0});var r=M(n("q1tI"));e.HeadManagerContext=r.createContext(null)},IP1Z:function(t,e,n){"use strict";var u=n("2faE"),M=n("rr1i");t.exports=function(t,e,n){e in t?u.f(t,e,M(0,n)):t[e]=n}},OxPZ:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA0NjYgNTA2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxnPjxwYXRoIGQ9Ik0yMzcuMDY3LDQ0NS4zMzZjNC42MDEsMCA4LjE0MSwtMS4xNTEgMTAuNjE5LC0zLjQ1MmM0LjA3LC00LjA3IDYuMTk0LC04LjQwNiA2LjM3MSwtMTMuMDA4bDAsLTU4LjUyN2wtOTkuODQyLDBsMCw1OC4yNjJjMCw0LjYwMSAxLjY4MSw4LjUzOSA1LjA0NCwxMS44MTNjMy4zNjMsMy4yNzUgNy4zNDUsNC45MTIgMTEuOTQ3LDQuOTEybDMuMTg2LDBsMC4yNjUsMi42NTVsLTgwLjcwNiwwbDAsLTIuNjU1bDMuNDUyLDBjNC42MDEsMCA4LjUzOSwtMS42MzcgMTEuODEzLC00LjkxMmMzLjI3NSwtMy4yNzQgNSwtNy4yMTIgNS4xNzcsLTExLjgxM2wwLC0xNDcuMDc2Yy0wLjE3NywtNC42MDEgLTEuOTAyLC04LjUzOSAtNS4xNzcsLTExLjgxM2MtMy4yNzQsLTMuMjc1IC03LjIxMiwtNC45MTIgLTExLjgxMywtNC45MTJsLTMuNDUyLDBsMCwtMi42NTVsODAuNzA2LDBsLTAuMjY1LDIuNjU1bC0zLjE4NiwwYy00LjYwMiwwIC04LjU4NCwxLjYzNyAtMTEuOTQ3LDQuOTEyYy0zLjM2MywzLjI3NCAtNS4wNDQsNy4yMTIgLTUuMDQ0LDExLjgxM2wwLDU4LjI5M2w5OS44NDIsMGwwLC01OC4yOTNjLTAuMTc3LC00LjYwMSAtMS45MDIsLTguNTM5IC01LjE3NywtMTEuODEzYy0zLjI3NCwtMy4yNzUgLTcuMjEyLC00LjkxMiAtMTEuODEzLC00LjkxMmwtMy40NTIsMGwwLC0yLjY1NWw4MC43MDYsMGwwLDIuNjU1bC0zLjQ1MSwwYy00LjYwMiwwIC04LjU4NCwxLjYzNyAtMTEuOTQ3LDQuOTEyYy0zLjM2MywzLjI3NCAtNS4wNDQsNy4yMTIgLTUuMDQ0LDExLjgxM2wwLDE0Ny4wNzZjMCw0LjYwMSAxLjY4MSw4LjUzOSA1LjA0NCwxMS44MTNjMy4zNjMsMy4yNzUgNy4zNDUsNC45MTIgMTEuOTQ3LDQuOTEybDMuNDUxLDBsMCwyLjY1NWwtODAuNzA2LDBsMCwtMi42NTVsMy40NTIsMFoiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTI3LjMwNSw0MzUuOTdsLTAuMDEsLTQzNS43OTJjMzMuMDQxLC0wLjAzMSA2Ni4xMDYsLTAuMDU3IDk5LjA5MiwtMC4wNTFjMjAuNDM0LDAuMDEgNDEuNDU3LC0xLjE3NCA2MC45NiwzLjUwMmMxNS4wMTEsMy41OTkgMjkuMTg5LDEwLjUyOCA0MS4xOTQsMjAuMjM5YzMzLjIsMjYuODU0IDQ4LjcwNyw3MS4zMzggODAuMzk0LDEwMC4xOTNjMjguOTUxLDI2LjM2MiA2OC4zNDIsNDAuMjQ5IDEwMC40NjIsNTkuODMzYzE4LjEyOCwxMS4wNTQgMzUuMjc5LDI1LjA2NyA0NS41MjcsNDQuMzYzYzE5LjExNywzNS45OTQgMTIuNTYxLDg0Ljg4OSAtMTUuNjgyLDExMi4yNWMtMi4wMzksMS45NzUgLTQuMTc1LDMuODQ4IC02LjM5NCw1LjYxOGMtMjAuNzk2LDE2LjU4OSAtNDguMDAzLDIzLjQ4NCAtNzMuNjksMjUuNjY1bC0yMi4zNjcsMC43OTVsLTE1Ljk4NywtMC4wMzVsLTAuMDAxLC0zNC45NDdjMTAuMzA1LC0wLjAxNCAxMC4yMiwtMC4wMjYgMjAuNTI1LC0wLjA0MWMwLDAgMy41MDEsLTAuMDQzIDUuOTkxLC0wLjEzNWMzLjI2LC0wLjExOSA2LjUxNywtMC4zMTcgOS43NjYsLTAuNjA1YzI2Ljc3OCwtMi4zNzIgNTUuNzg2LC0xMC41NjQgNjcuNjY1LC0zNS4wNzZjNS4yMDgsLTEwLjc0NiA2LjUyNCwtMjMuMDg2IDUuNDc4LC0zNS4xYy0xLjMyMywtMTUuMTc3IC04LjkyMiwtMjkuMzEyIC0yMC42OTIsLTM5LjY3Yy0yMC4wNTUsLTE3LjY0OCAtNDUuNjU2LC0yNy42MTYgLTY5Ljk1NCwtNDAuNTY1Yy0yNC44NSwtMTMuMjQzIC00OC42NjcsLTI4LjgwNSAtNjcuNjMxLC01MC4wMzJjLTE5LjAwNCwtMjEuMjcyIC0zMi4zNjIsLTQ3LjI4MyAtNDkuOTk2LC02OS4zNTZjLTEwLjkzMywtMTMuNjg0IC0yNS4xNTgsLTI1LjIgLTQzLjA5OCwtMjkuNDJjLTEwLjQyOSwtMi40NTMgLTIxLjIzLC0yLjQyNyAtMzIuMTI1LC0yLjQ0NGMtMjguMTQsLTAuMDM1IC01Ni4yOCwtMC4wMTYgLTg0LjQyLDAuMDA0bC0wLjAwMSw0MDEuNzA0YzAsMTQuMTY1IC0yLjk1NiwyNi44MzMgLTguODY4LDM4LjAwNWMtNS45MTIsMTEuMTcyIC0xMy4xNDcsMTkuMTUyIC0yMS43MDQsMjMuOTRjLTguNTU3LDQuNzg4IC0xNy4xMTQsNy4xODIgLTI1LjY3MSw3LjE4MmMtMi4wMjMsMCAtNC4wNDUsLTAuMDk5IC02LjA2OCwtMC4yOTlsMCwtMi42OTNjOS4zMzUsLTQuOTg4IDE2LjIyLC0xMy42MTYgMjAuNjU0LC0yNS44ODVjNC40MzQsLTEyLjI3IDYuNjUxLC0yNS45ODUgNi42NTEsLTQxLjE0N1oiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PC9nPjwvc3ZnPg=="},PQJW:function(t,e,n){var u=n("d04V"),M=n("yLu3");t.exports=function(t){if(M(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return u(t)}},TbGu:function(t,e,n){var u=n("fGSI"),M=n("PQJW"),r=n("2PDY");t.exports=function(t){return u(t)||M(t)||r()}},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var u=n("2GTP"),M=n("Y7ZC"),r=n("JB68"),i=n("sNwI"),a=n("NwJ3"),s=n("tEej"),L=n("IP1Z"),o=n("fNZA");M(M.S+M.F*!n("TuGD")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,M,c,j=r(t),N="function"==typeof this?this:Array,l=arguments.length,y=l>1?arguments[1]:void 0,w=void 0!==y,T=0,f=o(j);if(w&&(y=u(y,l>2?arguments[2]:void 0,2)),void 0==f||N==Array&&a(f))for(n=new N(e=s(j.length));e>T;T++)L(n,T,w?y(j[T],T):j[T]);else for(c=f.call(j),n=new N;!(M=c.next()).done;T++)L(n,T,w?i(c,y,[M.value,T],!0):M.value);return n.length=T,n}})},Xuae:function(t,e,n){"use strict";var u=n("/HRN"),M=n("ZDA2"),r=n("/+P4"),i=n("K47E"),a=n("WaGi"),s=n("N9n2"),L=n("TbGu"),o=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var c=n("q1tI"),j=!1;e.default=function(){var t,e=new o;function n(n){t=n.props.reduceComponentsToState(L(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(L){function o(t){var a;return u(this,o),a=M(this,r(o).call(this,t)),j&&(e.add(i(a)),n(i(a))),a}return s(o,L),a(o,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(o,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),o}(c.Component)}},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var u=n("Y7ZC");u(u.P+u.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(t,e,n){var u=n("p0XB");t.exports=function(t){if(u(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},lwAK:function(t,e,n){"use strict";var u=n("hfKm"),M=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};u(e,"__esModule",{value:!0});var r=M(n("q1tI"));e.AmpStateContext=r.createContext({})},ttDY:function(t,e,n){t.exports=n("+iuc")},xvv9:function(t,e,n){n("cHUd")("Set")}},[["/EDR",0,1,11]]]);