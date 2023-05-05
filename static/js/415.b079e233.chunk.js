"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{6345:function(e,t,n){var r=n(5861),a=n(5671),s=n(3144),i=n(4687),c=n.n(i),o=n(1243),u=function(){function e(){(0,a.Z)(this,e),this.KEY="b3b4716df5187d0bc9138efc2668bc10",this.BASE_URL="https://api.themoviedb.org/3",this.popularMovies="/trending/movie/week",this.searchMovies="/search/movie",this.detailsMovies="/movie/",this.creditsMovies="/movies/get-movie-credits",this.reviewsMovies="/movies/get-movie-reviews"}return(0,s.Z)(e,[{key:"getPopular",value:function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{api_key:this.KEY}},e.next=3,o.Z.get("".concat(this.BASE_URL).concat(this.popularMovies),t);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDetails",value:function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:this.KEY}},e.next=3,o.Z.get("".concat(this.BASE_URL).concat(this.detailsMovies).concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCast",value:function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:this.KEY}},e.next=3,o.Z.get("".concat(this.BASE_URL).concat(this.detailsMovies).concat(t,"/credits"),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getReviews",value:function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:this.KEY}},e.next=3,o.Z.get("".concat(this.BASE_URL).concat(this.detailsMovies).concat(t,"/reviews"),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSearch",value:function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:this.KEY,query:t}},e.next=3,o.Z.get("".concat(this.BASE_URL).concat(this.searchMovies),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=u},2443:function(e,t,n){n.d(t,{W:function(){return g}});var r,a,s,i,c=n(168),o=n(6088),u=n(1087),p=o.Z.li(r||(r=(0,c.Z)(["\n  background-color: #f4a259;\n  border-radius: 5px;\n  width: 300px;\n  overflow: hidden;\n"]))),h=o.Z.h2(a||(a=(0,c.Z)(["\n  text-align: center;\n  color: #363030;\n  height: 50px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  margin: 0;\n"]))),v=(0,o.Z)(u.rU)(s||(s=(0,c.Z)(["\n  text-decoration: none;\n"]))),l=o.Z.span(i||(i=(0,c.Z)(["\n  color: #363030;\n  text-decoration: none;\n"]))),d=n(7689),f=n(184),g=function(e){var t=e.title,n=e.poster_path,r=e.release_date,a=e.id,s=(0,d.TH)();return(0,f.jsx)(p,{children:(0,f.jsxs)(v,{to:"/movies/".concat(a),state:{from:s},children:[(0,f.jsx)("img",{src:n,alt:t})," ",(0,f.jsx)(h,{children:t}),(0,f.jsx)(l,{children:r})]})})}},4672:function(e,t,n){n.d(t,{O:function(){return c}});n(2791);var r,a=n(168),s=n(6088).Z.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: center;\n  list-style: none;\n  gap: 24px;\n"]))),i=n(184),c=function(e){var t=e.children;return(0,i.jsx)(s,{children:t})}},5415:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),s=n(4687),i=n.n(s),c=n(2791),o=n(4672),u=n(2443),p=n(8009),h=n(6345),v=n(7966),l=n(184),d=new h.Z;t.default=function(){var e=(0,c.useState)(""),t=(0,a.Z)(e,2),n=t[0],s=t[1],h=(0,c.useState)("idle"),f=(0,a.Z)(h,2),g=f[0],x=f[1],m=(0,c.useState)([]),w=(0,a.Z)(m,2),Z=w[0],_=w[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x("pending"),e.prev=1,e.next=4,d.getPopular();case 4:t=e.sent,_(t),x("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),x("rejected"),s(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),"pending"===g?(0,l.jsx)(v.g,{}):"resolved"===g?(0,l.jsx)(o.O,{children:Z.map((function(e){var t=e.id,n=e.title,r=e.poster_path,a=e.release_date;return(0,l.jsx)(u.W,{title:n,id:t,poster_path:"https://image.tmdb.org/t/p/w300/".concat(r,"?api_key=b3b4716df5187d0bc9138efc2668bc10"),release_date:a},t)}))}):void("rejected"===g&&p.Am.error(n,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}))}}}]);
//# sourceMappingURL=415.b079e233.chunk.js.map