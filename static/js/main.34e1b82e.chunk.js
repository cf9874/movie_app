(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),i=n(13),c=n.n(i),r=(n(24),n(4)),o=n.n(r),l=n(14),m=n(15),d=n(16),u=n(19),j=n(18),v=(n(26),n(17)),h=n.n(v),b=(n(45),n(0));var p=function(e){e.is;var t=e.year,n=e.title,s=e.summary,a=e.poster,i=e.genres;return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{src:a,alt:n,title:n}),Object(b.jsxs)("div",{className:"movie_data",children:[Object(b.jsx)("h3",{className:"movie_title",children:n}),Object(b.jsx)("h5",{className:"movie_year",children:t}),Object(b.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(b.jsx)("li",{className:"genre",children:e},t)}))}),Object(b.jsxs)("p",{className:"movie_summary",children:[s.slice(0,140),"......"]})]})]})},g=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movie:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var n,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,console.log(s),e.setState({movies:s,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(b.jsx)("section",{className:"container",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(b.jsx)("div",{className:"movies",children:n.map((function(e){return Object(b.jsx)(p,{id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),O()}},[[47,1,2]]]);
//# sourceMappingURL=main.34e1b82e.chunk.js.map