"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{6345:function(t,e,n){var r=n(5861),a=n(5671),i=n(3144),s=n(4687),c=n.n(s),o=n(1243),u=function(){function t(){(0,a.Z)(this,t),this.KEY="b3b4716df5187d0bc9138efc2668bc10",this.BASE_URL="https://api.themoviedb.org/3",this.popularMovies="/trending/movie/week",this.searchMovies="/search/movie",this.detailsMovies="/movie/",this.creditsMovies="/movies/get-movie-credits",this.reviewsMovies="/movies/get-movie-reviews"}return(0,i.Z)(t,[{key:"getPopular",value:function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={params:{api_key:this.KEY}},t.next=3,o.Z.get("".concat(this.BASE_URL).concat(this.popularMovies),e);case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getDetails",value:function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={params:{api_key:this.KEY}},t.next=3,o.Z.get("".concat(this.BASE_URL).concat(this.detailsMovies).concat(e),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCast",value:function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={params:{api_key:this.KEY}},t.next=3,o.Z.get("".concat(this.BASE_URL).concat(this.detailsMovies).concat(e,"/credits"),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getReviews",value:function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={params:{api_key:this.KEY}},t.next=3,o.Z.get("".concat(this.BASE_URL).concat(this.detailsMovies).concat(e,"/reviews"),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getSearch",value:function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={params:{api_key:this.KEY,query:e}},t.next=3,o.Z.get("".concat(this.BASE_URL).concat(this.searchMovies),n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}();e.Z=u},2443:function(t,e,n){n.d(e,{W:function(){return w}});var r,a,i,s,c=n(168),o=n(6088),u=n(1087),p=o.Z.li(r||(r=(0,c.Z)(["\n  background-color: #f4a259;\n  border-radius: 5px;\n  width: 300px;\n  overflow: hidden;\n"]))),h=o.Z.h2(a||(a=(0,c.Z)(["\n  text-align: center;\n  color: #363030;\n  height: 50px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  margin: 0;\n"]))),f=(0,o.Z)(u.rU)(i||(i=(0,c.Z)(["\n  text-decoration: none;\n"]))),l=o.Z.span(s||(s=(0,c.Z)(["\n  color: #363030;\n  text-decoration: none;\n"]))),v=n(7689),d=n(184),w=function(t){var e=t.title,n=t.poster_path,r=t.release_date,a=t.id,i=(0,v.TH)();return(0,d.jsx)(p,{children:(0,d.jsxs)(f,{to:"/movies/".concat(a),state:{from:i},children:[(0,d.jsx)("img",{src:n,alt:e})," ",(0,d.jsx)(h,{children:e}),(0,d.jsx)(l,{children:r})]})})}},4672:function(t,e,n){n.d(e,{O:function(){return c}});n(2791);var r,a=n(168),i=n(6088).Z.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: center;\n  list-style: none;\n  gap: 24px;\n"]))),s=n(184),c=function(t){var e=t.children;return(0,s.jsx)(i,{children:e})}},5415:function(t,e,n){n.r(e);var r=n(5861),a=n(9439),i=n(4687),s=n.n(i),c=n(2791),o=n(4672),u=n(2443),p=n(6345),h=n(184),f=new p.Z;e.default=function(){var t=(0,c.useState)([]),e=(0,a.Z)(t,2),n=e[0],i=e[1],p=function(){var t=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getPopular();case 2:e=t.sent,i(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,c.useEffect)((function(){p()}),[]),(0,h.jsx)(o.O,{children:n.map((function(t){var e=t.id,n=t.title,r=t.poster_path,a=t.release_date;return(0,h.jsx)(u.W,{title:n,id:e,poster_path:"https://image.tmdb.org/t/p/w300/".concat(r,"?api_key=b3b4716df5187d0bc9138efc2668bc10"),release_date:a},e)}))})}}}]);
//# sourceMappingURL=415.3fd8f91a.chunk.js.map