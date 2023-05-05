"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[652],{6345:function(e,t,n){var r=n(5861),i=n(5671),a=n(3144),s=n(4687),o=n.n(s),c=n(1243),u=function(){function e(){(0,i.Z)(this,e),this.KEY="b3b4716df5187d0bc9138efc2668bc10",this.BASE_URL="https://api.themoviedb.org/3",this.popularMovies="/trending/movie/week",this.searchMovies="/search/movie",this.detailsMovies="/movie/",this.creditsMovies="/movies/get-movie-credits",this.reviewsMovies="/movies/get-movie-reviews"}return(0,a.Z)(e,[{key:"getPopular",value:function(){var e=(0,r.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{api_key:this.KEY}},e.next=3,c.Z.get("".concat(this.BASE_URL).concat(this.popularMovies),t);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDetails",value:function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:this.KEY}},e.next=3,c.Z.get("".concat(this.BASE_URL).concat(this.detailsMovies).concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCast",value:function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:this.KEY}},e.next=3,c.Z.get("".concat(this.BASE_URL).concat(this.detailsMovies).concat(t,"/credits"),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getReviews",value:function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:this.KEY}},e.next=3,c.Z.get("".concat(this.BASE_URL).concat(this.detailsMovies).concat(t,"/reviews"),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSearch",value:function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:this.KEY,query:t}},e.next=3,c.Z.get("".concat(this.BASE_URL).concat(this.searchMovies),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=u},2443:function(e,t,n){n.d(t,{W:function(){return g}});var r,i,a,s,o=n(168),c=n(6088),u=n(1087),l=c.Z.li(r||(r=(0,o.Z)(["\n  background-color: #f4a259;\n  border-radius: 5px;\n  width: 300px;\n  overflow: hidden;\n"]))),d=c.Z.h2(i||(i=(0,o.Z)(["\n  text-align: center;\n  color: #363030;\n  height: 50px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  margin: 0;\n"]))),p=(0,c.Z)(u.rU)(a||(a=(0,o.Z)(["\n  text-decoration: none;\n"]))),h=c.Z.span(s||(s=(0,o.Z)(["\n  color: #363030;\n  text-decoration: none;\n"]))),f=n(7689),v=n(184),g=function(e){var t=e.title,n=e.poster_path,r=e.release_date,i=e.id,a=(0,f.TH)();return(0,v.jsx)(l,{children:(0,v.jsxs)(p,{to:"/movies/".concat(i),state:{from:a},children:[(0,v.jsx)("img",{src:n,alt:t})," ",(0,v.jsx)(d,{children:t}),(0,v.jsx)(h,{children:r})]})})}},4672:function(e,t,n){n.d(t,{O:function(){return o}});n(2791);var r,i=n(168),a=n(6088).Z.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: center;\n  list-style: none;\n  gap: 24px;\n"]))),s=n(184),o=function(e){var t=e.children;return(0,s.jsx)(a,{children:t})}},7652:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r,i,a,s=n(5861),o=n(9439),c=n(4687),u=n.n(c),l=n(2791),d=n(1087),p=n(168),h=n(6088),f=n(2862),v=n(4281),g=h.Z.div(r||(r=(0,p.Z)(["\n  display: inline-flex;\n  margin-top: 24px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  padding: 16px;\n\n  gap: 16px;\n  background-color: #f4a259;\n  border-radius: 5px;\n  overflow: hidden;\n"]))),x=(0,h.Z)(f.Z)(i||(i=(0,p.Z)(["\n  & label.Mui-focused {\n    color: #363030;\n  }\n  & .MuiInput-underline:after {\n    border-bottom-color: #363030;\n  }\n  & .MuiOutlinedInput-root {\n    & fieldset,\n    &:hover fieldset,\n    &.Mui-focused fieldset {\n      border-color: #363030;\n    }\n  }\n"]))),m=(0,h.Z)(v.Z)(a||(a=(0,p.Z)(["\n  color: #fff;\n  background-color: #363030;\n  :hover {\n    background-color: #534646;\n  }\n"]))),Z=n(8009),b=n(184),w=function(e){var t=e.handleSubmit,n=(0,l.useState)(""),r=(0,o.Z)(n,2),i=r[0],a=r[1];return(0,b.jsxs)(g,{children:[(0,b.jsx)(x,{id:"outlined-basic",label:"Search",variant:"outlined",value:i,onChange:function(e){return a(e.target.value)}}),(0,b.jsx)(m,{variant:"contained",onClick:function(){if(""!==i)return t(i),void a("");Z.Am.error("Fill in the fields!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},children:"Submit"})]})},k=n(4672),_=n(2443),y=n(7966),j=new(n(6345).Z),S=function(){var e,t=(0,l.useState)(""),n=(0,o.Z)(t,2),r=n[0],i=n[1],a=(0,l.useState)("idle"),c=(0,o.Z)(a,2),p=c[0],h=c[1],f=(0,d.lr)(),v=(0,o.Z)(f,2),g=v[0],x=v[1],m=(0,l.useState)([]),S=(0,o.Z)(m,2),M=S[0],E=S[1],C=g.get("query");return(0,l.useEffect)((function(){if(C){var e=function(){var e=(0,s.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h("pending"),e.prev=1,e.next=4,j.getSearch(C);case 4:t=e.sent,E(t),h("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),h("rejected"),i(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[C]),"rejected"===p&&Z.Am.error(r,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w,{handleSubmit:function(e){x({query:e})}}),"pending"===p&&(0,b.jsx)(y.g,{}),"resolved"===p&&(0,b.jsx)(k.O,{children:(null===(e=M.results)||void 0===e?void 0:e[0])&&M.results.map((function(e){var t=e.id,n=e.title,r=e.poster_path,i=e.release_date;return(0,b.jsx)(_.W,{title:n,id:t,poster_path:r?"https://image.tmdb.org/t/p/w300/".concat(r,"?api_key=b3b4716df5187d0bc9138efc2668bc10"):"https://gdr.one/simg/300x450/363030/f4a259?text=Not%20found",release_date:i},t)}))})]})}}}]);
//# sourceMappingURL=652.5c152293.chunk.js.map