(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(64)},35:function(e,t,n){},38:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),o=n.n(c),s=n(66),u=(n(35),n(36),n(37),n(7)),l=n(8),i=n(10),h=n(9),p=n(11),m=n(69),f=n(68),d=n(67),v=(n(38),n(5)),b=n.n(v),g=n(12),y=n(17),E=n(29),k=n(28),j=n.n(k),O="https://romarios1987.github.io/phone-catalog/api",C=function(){var e=Object(g.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(t,".json"));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}();function w(){return S.apply(this,arguments)}function S(){return(S=Object(g.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("".concat(O,"/phones"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function x(e){return P.apply(this,arguments)}function P(){return(P=Object(g.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("".concat(O,"/phones/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var N=n(13),D=n.n(N);var L=function(e){var t=e.value,n=e.onChange;return r.a.createElement("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return n(e.currentTarget.value)}})},A=function(e){var t=e.itemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChange,o=Math.ceil(t/n);if(1===o)return null;var s=D.a.range(1,o+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},s.map(function(e){return r.a.createElement("li",{key:e,className:e===a?"page-item active":"page-item"},r.a.createElement("button",{onClick:function(){return c(e)},className:"page-link"},e))})))},z=n(65),I=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).raiseSort=function(e){var t=Object(y.a)({},n.props.sortColumn);t.path===e?t.order="asc"===t.order?"desc":"asc":(t.path=e,t.order="asc"),n.props.onSort(t)},n.renderSortIcon=function(e){var t=n.props.sortColumn;return e.path!==t.path?null:"asc"===t.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map(function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){return t.sort?e.raiseSort(t.path):null},scope:"col"},t.label," ",e.renderSortIcon(t))})))}}]),t}(a.Component),Q=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).renderCell=function(e,t){return t.content?t.content(e):D.a.get(e,t.path)},n.createKey=function(e,t){return e.id+(t.path||t.key)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.columns;return r.a.createElement("tbody",null,n.map(function(t){return r.a.createElement("tr",{key:t.id},a.map(function(n){return r.a.createElement("td",{key:e.createKey(t,n)},"imageUrl"===n.path?r.a.createElement("img",{src:e.renderCell(t,n),alt:t.name,width:75}):e.renderCell(t,n))}))}))}}]),t}(a.Component),M=function(e){var t=e.columns,n=e.sortColumn,a=e.onSort,c=e.data;return r.a.createElement("table",{className:"table"},r.a.createElement(I,{columns:t,sortColumn:n,onSort:a}),r.a.createElement(Q,{data:c,columns:t}))},T=function(e){var t=e.liked,n=e.onClick,a="fa fa-thumbs-up";return t||(a="fa fa-thumbs-o-up"),r.a.createElement("i",{onClick:n,className:a,style:{cursor:"pointer"}}," ")},B=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).columns=[{path:"imageUrl",label:"Image",sort:!1},{path:"name",label:"Phone name",sort:!0,content:function(e){return r.a.createElement(z.a,{to:"/phones/".concat(e.id)},e.name)}},{path:"age",label:"Age",sort:!0},{key:"like",label:"Like",sort:!1,content:function(e){return r.a.createElement(T,{onClick:function(){return n.props.onLike(e)},liked:e.liked})}}],n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.phones,n=e.sortColumn,a=e.onSort;return r.a.createElement(M,{columns:this.columns,sortColumn:n,onSort:a,data:t})}}]),t}(a.Component),F=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={phones:[],currentPage:1,pageSize:4,searchQuery:"",sortColumn:{path:"name",order:"asc"}},n.handleLike=function(e){var t=Object(E.a)(n.state.phones),a=t.indexOf(e);t[a]=Object(y.a)({},t[a]),t[a].liked=!t[a].liked,n.setState({phones:t})},n.handlePageChange=function(e){n.setState({currentPage:e})},n.handleSort=function(e){n.setState({sortColumn:e})},n.handleSearch=function(e){n.setState({searchQuery:e,currentPage:1})},n.getPagedData=function(){var e=n.state,t=e.phones,a=e.searchQuery,r=e.pageSize,c=e.currentPage,o=e.sortColumn,s=t;a&&(s=t.filter(function(e){return e.name.toLowerCase().startsWith(a.toLowerCase())}));var u=function(e,t,n){var a=(t-1)*n;return D()(e).slice(a).take(n).value()}(D.a.orderBy(s,[o.path],[o.order]),c,r);return{totalCount:s.length,data:u}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark(function e(){var t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,n=t.data,this.setState({phones:n});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.phones.length,t=this.state,n=t.pageSize,a=t.currentPage,c=t.sortColumn,o=t.searchQuery;if(0===e)return r.a.createElement("p",null,"There are no ",r.a.createElement("strong",null,"Phones")," in the database.");var s=this.getPagedData(),u=s.totalCount,l=s.data;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"Showing ",u," ",r.a.createElement("strong",null,"Phones")," in the database"),r.a.createElement(L,{value:o,onChange:this.handleSearch}),r.a.createElement(B,{phones:l,sortColumn:c,onLike:this.handleLike,onSort:this.handleSort}),r.a.createElement(A,{itemsCount:u,pageSize:n,currentPage:a,onPageChange:this.handlePageChange})))}}]),t}(a.Component),J=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={phoneDetails:{},error:""},n.showDetailsPhone=Object(g.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.id,e.prev=1,e.next=4,x(t);case 4:a=e.sent,n.setState({phoneDetails:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n.setState({error:"\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0442\u0430\u0432\u0430\u0440\u0430"});case 11:case"end":return e.stop()}},e,this,[[1,8]])})),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.showDetailsPhone();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.phoneDetails.name,t=this.state.error,n=t||e;return console.log(this.state.phoneDetails),r.a.createElement("div",null,n)}}]),t}(a.Component),K=function(){return r.a.createElement("h1",null,"NotFound")},U=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-center"},"DataTable React Component"),r.a.createElement("main",{className:"container"},r.a.createElement(m.a,null,r.a.createElement(f.a,{path:"/phones/:id",component:J}),r.a.createElement(f.a,{path:"/phones",component:F}),r.a.createElement(f.a,{path:"/not-found",component:K}),r.a.createElement(d.a,{from:"/",exact:!0,to:"/phones"}),r.a.createElement(d.a,{to:"/not-found"}))))}}]),t}(a.Component);o.a.render(r.a.createElement(s.a,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.fde43679.chunk.js.map