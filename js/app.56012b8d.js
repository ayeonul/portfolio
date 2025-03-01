(function(){"use strict";var t={243:function(t,i,s){s(4114);var e=s(6848),a=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"app"}},[i("router-view"),i("Footer")],1)},n=[],r=function(){var t=this,i=t._self._c;return i("div",[i("div",{ref:"cursor",staticClass:"circle-cursor",class:t.cursorTheme})])},o=[],l={data(){return{cursor:null,cursorTheme:""}},mounted(){this.cursor=this.$refs.cursor,this.cursor&&(document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseleave",(()=>{this.cursor.style.opacity="0"})),document.addEventListener("mouseenter",(()=>{this.cursor.style.opacity="1"})),document.addEventListener("mouseover",this.handleMouseOver),document.addEventListener("mouseout",this.handleMouseOut))},beforeUnmount(){document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseleave",this.handleMouseLeave),document.removeEventListener("mouseenter",this.handleMouseEnter),document.removeEventListener("mouseover",this.handleMouseOver),document.removeEventListener("mouseout",this.handleMouseOut)},methods:{handleMouseMove(t){this.cursor.style.left=`${t.clientX}px`,this.cursor.style.top=`${t.clientY}px`},handleMouseOver(t){t.target.classList.contains("clickable")&&this.cursor.classList.add("triangle")},handleMouseOut(t){t.target.classList.contains("clickable")&&this.cursor.classList.remove("triangle")}}},c=l,u=s(1656),d=(0,u.A)(c,r,o,!1,null,"89ec8aea",null),h=d.exports,v=function(){var t=this;t._self._c;return t._m(0)},p=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"footer no-select"},[i("div",{staticClass:"copyright"},[t._v(" 본 사이트는 Chrome, Edge, Whale 등 최신 브라우저에 최적화되어 있습니다."),i("br"),t._v(" Designed and developed by 김동은(ayeonul). All rights reserved. ")])])}],g={},f=g,m=(0,u.A)(f,v,p,!1,null,"531479e4",null),_=m.exports,x={components:{CircleCursor:h,Footer:_},methods:{checkRouter(){if(["home"].includes(this.$route.name))return!0}}},C=x,y=(0,u.A)(C,a,n,!1,null,null,null),w=y.exports,b=s(6178),k=function(){var t=this,i=t._self._c;return i("div",{staticClass:"router-view no-cursor"},[i("div",{ref:"wordContainer",staticClass:"container words no-select"},[i("div",{staticClass:"center-box"},[i("div",{staticClass:"center-hint"},[t._v("Click here!")]),i("div",{staticClass:"center-word clickable",on:{click:function(i){return t.$goRoute("/intro")},mouseover:function(i){return t.isMouseOver()},mouseleave:function(i){return t.isMouseLeave()}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isGoShow,expression:"isGoShow"}],staticClass:"clickable",staticStyle:{"font-size":"4rem"}},[t._v("GO!")]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isGoShow,expression:"!isGoShow"}],staticClass:"clickable"},[t._v("DongEun's")]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isGoShow,expression:"!isGoShow"}],staticClass:"clickable"},[t._v("PortFolio")])])]),i("div",{staticClass:"bg-white"}),t._l(t.displayedWords,(function(s,e){return i("span",{key:e,staticClass:"word",class:"popular"==s?"highlight":""},[t._v(" "+t._s(s)+" ")])}))],2)])},S=[],A={data(){return{wordsPop:["makeover","depressing","beautiful","Galinda","slang","sports","cohorts","hair","shoes","flounce","popular"],displayedWords:[],isGoShow:!1}},mounted(){this.debouncedPopulateWords=this.debounce(this.populateWords,100),this.populateWords(),window.addEventListener("resize",this.debouncedPopulateWords)},beforeUnmount(){window.removeEventListener("resize",this.debouncedPopulateWords)},methods:{debounce(t,i){let s;return(...e)=>{clearTimeout(s),s=setTimeout((()=>t.apply(this,e)),i)}},shuffleArray(t){for(let i=t.length-1;i>0;i--){const s=Math.floor(Math.random()*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t},populateWords(){const t=this.$refs.wordContainer;if(!t)return;const i=t.clientWidth,s=t.clientHeight,e=100,a=50,n=Math.floor(i/e),r=Math.floor(s/a),o=n*r;this.displayedWords=[];let l=this.shuffleArray(this.wordsPop);for(let c=0;c<o;c++)c%this.wordsPop.length===0&&(l=this.shuffleArray(this.wordsPop)),this.displayedWords.push(l[c%l.length])},isMouseOver(){this.isGoShow=!0},isMouseLeave(){this.isGoShow=!1}}},L=A,T=(0,u.A)(L,k,S,!1,null,"dd4e6420",null),O=(T.exports,function(){var t=this,i=t._self._c;return i("div",{staticClass:"router-view"},[i("div",{staticClass:"main-container"},[i("div",{staticClass:"section"},[i("div",{staticClass:"title"},[t._m(0),i("div",{staticClass:"changing-text-container no-select"},[i("span",{staticClass:"changing-text"},[t._v(" "+t._s(t.displayedText)),i("span",{staticClass:"cursor"})]),t._v(" 즐기는 개발자, "),i("a",{staticStyle:{color:"var(--main-pink)"}},[t._v("김동은")]),t._v("입니다. ")])]),t._m(1)]),i("div",{staticClass:"section"},[i("div",{staticClass:"subtitle"},[i("unicon",{attrs:{name:"comment-heart",fill:"var(--highlight-pink)",width:"30px",height:"30px"}}),t._v("즐깁니다 ")],1),i("div",{staticClass:"intro-section"},[i("div",{staticClass:"intro-container"},[i("div",{staticClass:"small-title"},[i("unicon",{attrs:{name:"arrow-growth",fill:"var(--highlight-pink)",width:"25px",height:"25px"}}),i("a",{staticStyle:{color:"var(--highlight-pink)"}},[t._v("성장을")]),t._v(" 즐깁니다. ")],1),t._m(2)]),i("div",{staticClass:"intro-container"},[i("div",{staticClass:"small-title"},[i("unicon",{attrs:{name:"file-copy-alt",fill:"var(--highlight-pink)",width:"25px",height:"25px"}}),i("a",{staticStyle:{color:"var(--highlight-pink)"}},[t._v("카피를")]),t._v(" 즐깁니다. ")],1),t._m(3)]),i("div",{staticClass:"intro-container"},[i("div",{staticClass:"small-title"},[i("unicon",{attrs:{name:"laptop",fill:"var(--highlight-pink)",width:"25px",height:"25px"}}),i("a",{staticStyle:{color:"var(--highlight-pink)"}},[t._v("개발을")]),t._v(" 즐깁니다. ")],1),t._m(4)])])]),i("div",{staticClass:"section"},[i("div",{staticClass:"subtitle"},[i("unicon",{attrs:{name:"user-plus",fill:"var(--highlight-pink)",width:"30px",height:"30px"}}),t._v("할 수 있습니다 ")],1),i("div",{staticClass:"lang-section"},[i("div",{staticClass:"lang-container"},[i("img",{attrs:{src:s(463)}}),i("div",{staticClass:"lang-info"},[i("div",{staticClass:"lang-name"},[t._v(" Python "),i("unicon",{attrs:{name:"thumbs-up",fill:"var(--highlight-pink)",width:"20px",height:"20px"}})],1),i("Stars",{attrs:{rating:4}})],1)]),i("div",{staticClass:"lang-container"},[i("img",{attrs:{src:s(1716)}}),i("div",{staticClass:"lang-info"},[i("div",{staticClass:"lang-name"},[t._v("FastAPI")]),i("Stars",{attrs:{rating:3}})],1)]),i("div",{staticClass:"lang-container"},[i("img",{attrs:{src:s(8770)}}),i("div",{staticClass:"lang-info"},[i("div",{staticClass:"lang-name"},[t._v("Pandas")]),i("Stars",{attrs:{rating:3}})],1)]),i("div",{staticClass:"lang-container"},[i("img",{staticClass:"img_XL",attrs:{src:s(9600)}}),i("div",{staticClass:"lang-info"},[i("div",{staticClass:"lang-name"},[t._v("Streamlit")]),i("Stars",{attrs:{rating:3}})],1)]),i("div",{staticClass:"lang-container"},[i("img",{attrs:{src:s(1022)}}),i("div",{staticClass:"lang-info"},[i("div",{staticClass:"lang-name"},[t._v("Vue2")]),i("Stars",{attrs:{rating:3.5}})],1)]),i("div",{staticClass:"lang-container"},[i("img",{attrs:{src:s(4380)}}),i("div",{staticClass:"lang-info"},[i("div",{staticClass:"lang-name"},[t._v("HTML")]),i("Stars",{attrs:{rating:2.5}})],1)]),i("div",{staticClass:"lang-container"},[i("img",{attrs:{src:s(9034)}}),i("div",{staticClass:"lang-info"},[i("div",{staticClass:"lang-name"},[t._v("CSS")]),i("Stars",{attrs:{rating:1.5}})],1)]),i("div",{staticClass:"lang-container"},[i("img",{staticClass:"img_L",attrs:{src:s(2655)}}),i("div",{staticClass:"lang-info"},[i("div",{staticClass:"lang-name"},[t._v("JavaScript")]),i("Stars",{attrs:{rating:3}})],1)]),i("div",{staticClass:"lang-container"},[i("img",{staticClass:"img_L",attrs:{src:s(7503)}}),i("div",{staticClass:"lang-info"},[i("div",{staticClass:"lang-name"},[t._v("Git")]),i("Stars",{attrs:{rating:3}})],1)])])]),i("div",{staticClass:"section"},[i("div",{staticClass:"subtitle"},[i("unicon",{attrs:{name:"suitcase-alt",fill:"var(--highlight-pink)",width:"30px",height:"30px"}}),t._v(" 다녔습니다 ")],1),i("div",{staticClass:"career-section"},[i("div",{staticClass:"career-container"},[i("div",{staticClass:"small-title"},[i("unicon",{attrs:{name:"building",fill:"var(--highlight-pink)",width:"25px",height:"25px"}}),t._v("(주) 스마트소셜 ")],1),t._m(5)])])]),i("div",{staticClass:"section"},[i("div",{staticClass:"subtitle"},[i("unicon",{attrs:{name:"cube",fill:"var(--highlight-pink)",width:"30px",height:"30px"}}),t._v(" 만들었습니다 ")],1),i("div",{staticClass:"exp-section"},t._l(t.expData,(function(t,s){return i("ExpContainer",{key:`exp${s}`,attrs:{expIdx:s,expData:t}})})),1)]),i("div",{staticClass:"section"},[i("div",{staticClass:"subtitle"},[i("unicon",{attrs:{name:"comments",fill:"var(--highlight-pink)",width:"30px",height:"30px"}}),t._v(" 소통합니다 ")],1),t._m(6),i("div",{staticClass:"contact-section"},[i("div",{staticClass:"contact-container"},[i("unicon",{attrs:{name:"at",fill:"var(--highlight-pink)",width:"25px",height:"25px"}}),t._v(" ayeonul1214@gmail.com ")],1),i("div",{staticClass:"contact-container"},[i("unicon",{attrs:{name:"github",fill:"var(--highlight-pink)",width:"25px",height:"25px"}}),t._v(" ayeonul "),i("span",{staticStyle:{cursor:"pointer"},on:{click:function(i){return t.$linkOpen("https://github.com/ayeonul")}}},[i("unicon",{staticClass:"none-top",attrs:{name:"external-link-alt",fill:"var(--highlight-pink)",width:"15px",height:"15px"}})],1)],1)]),i("div",{staticClass:"text"},[t._v("혹은 인재가 필요한 다른 분께 전달드릴 수도 있죠.")]),i("div",{staticClass:"contact-section"},[i("div",{staticClass:"icon-label",on:{click:t.kakaoShare}},[i("img",{staticClass:"kakao-share-btn",attrs:{src:s(9545)}}),i("span",[t._v("카카오톡으로 공유하기")])])]),i("div",{staticClass:"contact-section"},[i("div",{staticClass:"icon-label",on:{click:function(i){return t.$linkOpen(t.resumeLink)}}},[i("unicon",{attrs:{name:"file-share-alt",fill:"var(--highlight-pink)",width:"25px",height:"25px"}}),i("span",[t._v("이력서 다운받기")])],1)])])])])}),M=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"page-icon"},[i("img",{attrs:{src:s(7073)}})])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"text"},[t._v(" 안녕하세요, 즐거운 성장을 꿈꾸는 "),i("a",{staticClass:"highlight"},[t._v("파이썬 개발자 김동은")]),t._v("입니다. ")])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"text"},[t._v(" '지식은 세상을 조금 더 높은 화질로 볼 수 있게 해준다'는 비유를 참 좋아하고, 공감합니다. 여러 프로젝트를 겪은 뒤 문득 처음 보는 코드가 선명히 잘 읽힐 때의 쾌감을 좋아합니다."),i("br"),t._v("그렇게 성장한 저는 소속 단체를 함께 성장시키고, 성장한 단체는 소속원인 저를 다시 성장시키는 선순환을 많이 좋아합니다. ")])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"text"},[t._v(" 수준 높은, 혹은 취향에 맞는 프로그램을 마주했을 때의 '내가 가진 능력 안에서 어떻게 재구현할 수 있을까' 하는 고민, 그리고 그를 통해 실제로 구현하는 것을 즐깁니다."),i("br"),t._v("예컨대, 프론트엔드 클론 코딩을 시도해보는 것과, 생성형 인공지능의 경우 프롬프트를 어떻게 사용하면 같은 결과물을 낼 수 있을지 고민하는 것을 즐깁니다. ")])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"text"},[t._v(" 아이디어나 문서로만 존재하던 것을 눈앞에 구현해내는 과정, 그리고 그것이 실제로 서비스되었을 때의 성취감을 사랑합니다. "),i("br"),t._v(" 저는 이 성취감을 위해 개발자로 살아가고 있습니다. ")])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"career-list"},[i("ul",[i("li",[t._v("2021.12 ~ 2024.05")]),i("li",[t._v("AI·DX 사업부 AI 연구소")]),i("li",[t._v(" Transformers 계열의 자연어 처리(NLP) 기술 연구 및 응용 서비스를 위한 API 개발 ")]),i("li",[t._v("인천사이버진로교육원 진로추천 AI 개발(2022.03~2023.11)")]),t._v(" 인천사이버진로교육원 내에서 진로검사, 메타버스 게임의 점수 등을 통해 직무, 직업, 진로상담사, 진로체험처 등을 추천해주는 AI 서비스 개발(2차연도) 및 고도화(3차연도) "),i("li",[t._v(" 부산시교육청 PEN AI AI대입설계 서비스 개발(2022.03~2022.11) ")]),t._v(" 사용자의 생활기록부 및 성적을 바탕으로 기 대학 합격자와의 비교분석 레포트를 제공하는 AI 엔진 개발 "),i("li",[t._v(" 이외 자연어 기반 맞춤 정책 추천 엔진, GPT를 이용한 NCS 직무기술서 기반 자기소개서 첨삭 엔진, 웹사이트 크롤링을 통한 챗봇 자동제작 서비스 등 개발 ")])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"text"},[i("a",{staticClass:"highlight"},[t._v("저와 함께 상호 성장")]),t._v(" 할 회사를 찾고 있어요. 아래 메일로 문의 주세요! ")])}],P=s(4373),D=function(){var t=this,i=t._self._c;return i("div",{staticClass:"star-ratings"},[i("StarRating",{attrs:{rating:t.rating,"read-only":!0,"show-rating":!1,"star-size":20,increment:.5,"active-color":"var(--main-pink)"}})],1)},I=[],$=s(8884),E=s.n($),G={components:{StarRating:E()},props:{rating:{type:Number,required:!0}},data(){return{}}},W=G,j=(0,u.A)(W,D,I,!1,null,"042ae4a7",null),N=j.exports,U=function(){var t=this,i=t._self._c;return i("div",{staticClass:"exp-container"},[i("div",{staticClass:"exp-title"},[t._v(t._s(t.expData.title))]),i("div",{staticClass:"exp-list"},[i("div",{staticClass:"exp-tags"},t._l(t.expData.tag,(function(s,e){return i("span",{key:`exp ${t.expIdx}-tag${e}`,staticClass:"no-select",class:s},[t._v(t._s(s))])})),0),i("ul",[i("li",[t._v(t._s(t.expData.term))]),t._l(t.expData.content,(function(s,e){return i("li",{key:`exp ${t.expIdx}-${e}`},[t._v(" "+t._s(s)+" ")])}))],2)]),t.expData.detail?i("div",{staticClass:"exp-detail-btn-container"},t._l(t.expData.detail,(function(s,e){return i("div",{key:`exp ${t.expIdx}- btn${e}`,staticClass:"exp-detail-btn",on:{click:function(i){return t.expBtnAction(s.type,s.content)}}},["git"==s.name?i("div",{staticStyle:{padding:"1px 3px"}},[i("unicon",{attrs:{name:"github",fill:"#fff",width:"23px",height:"23px"}})],1):i("div",{staticStyle:{padding:"5px 9px"}},[t._v(" "+t._s(s.name))])])})),0):t._e()])},F=[],z={props:{expIdx:{type:Number,required:!0},expData:{type:Object,required:!0}},methods:{expBtnAction(t,i){"url"==t&&this.$linkOpen(i)}}},R=z,q=(0,u.A)(R,U,F,!1,null,"186555b5",null),K=q.exports,B={components:{Stars:N,ExpContainer:K},data(){return{whatILike:["성장을","카피를","개발을"],displayedText:"성장을",wordIndex:0,isDeleting:!1,typingSpeed:100,pauseTime:3500,expData:[],resumeLink:"https://drive.google.com/file/d/1riuAtQ8PxeCvzaqcLwduG9LcZD-8P3-N/view?usp=sharing"}},async created(){try{const t="/portfolio/",i=await P.A.get(`${t}data/experience.json`);this.expData=i.data.reverse()}catch(t){console.error("데이터 로딩에 실패했어요.",t)}},mounted(){this.animateText(),Kakao.init("ceaa1b4fa57b2d9600301656d1988ee6")},methods:{animateText(){const t=this.whatILike[this.wordIndex];this.isDeleting?this.displayedText=t.substring(0,this.displayedText.length-1):this.displayedText=t.substring(0,this.displayedText.length+1),this.isDeleting||this.displayedText!==t?(this.isDeleting&&""===this.displayedText&&(this.isDeleting=!1,this.wordIndex=(this.wordIndex+1)%this.whatILike.length),setTimeout(this.animateText,this.isDeleting?this.typingSpeed/2:this.typingSpeed)):setTimeout((()=>{this.isDeleting=!0,this.animateText()}),this.pauseTime)},kakaoShare(){Kakao.Link.sendDefault({objectType:"feed",content:{title:"Portfolio",description:"Popular한 개발자를 꿈꾸는 3년 차 파이썬 개발자 김동은입니다.",imageUrl:"http://ayeonul.github.io/portfolio/imgs/share-img.png",link:{mobileWebUrl:"https://ayeonul.github.io/portfolio/",webUrl:"https://ayeonul.github.io/portfolio/"}}})}}},H=B,X=(0,u.A)(H,O,M,!1,null,"6d422273",null),J=X.exports;e.Ay.use(b.Ay);const Q="/portfolio/",Z=[{path:"/",name:"introduce",component:J}],V=new b.Ay({routes:Z,mode:"history",base:Q});var Y=V,tt=s(3518);e.Ay.use(tt.Ay);var it=new tt.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),st=s(5178),et=s.n(st),at=s(5835);et().add([at.Air,at.L5N,at.rFm,at.xKZ,at.Sdl,at.LLA,at.nsA,at.tOT,at.uSQ,at.eTU,at.tLW,at.Kue,at.ePt,at.N8P,at.vBm]),e.Ay.use(et()),e.Ay.config.productionTip=!1,e.Ay.prototype.$goRoute=t=>{Y.push(t)},e.Ay.prototype.$linkOpen=t=>{window.open(t,"_blank")},new e.Ay({router:Y,store:it,render:t=>t(w)}).$mount("#app")},9034:function(t,i,s){t.exports=s.p+"img/CSS3_logo_and_wordmark.e22c965d.png"},7503:function(t,i,s){t.exports=s.p+"img/Git-Icon-1788C.53cc8917.svg"},4380:function(t,i,s){t.exports=s.p+"img/HTML5_logo_and_wordmark.f04b2436.png"},2655:function(t,i,s){t.exports=s.p+"img/Unofficial_JavaScript_logo_2.4a15f589.png"},1716:function(t,i,s){t.exports=s.p+"img/fastapi-logo.992dac5b.png"},9545:function(t,i,s){t.exports=s.p+"img/kakaotalk_sharing_btn_small_ov.aad22590.png"},8770:function(t,i,s){t.exports=s.p+"img/pandas_mark.35429a1b.svg"},463:function(t,i,s){t.exports=s.p+"img/python-logo-only.00efb6d9.png"},9600:function(t,i,s){t.exports=s.p+"img/streamlit-mark-color.216f2095.svg"},7073:function(t,i,s){t.exports=s.p+"img/undraw_Dev_focus_re_6iwt.611b42c7.png"},1022:function(t,i,s){t.exports=s.p+"img/vue-logo.6c137b82.png"}},i={};function s(e){var a=i[e];if(void 0!==a)return a.exports;var n=i[e]={exports:{}};return t[e].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(i,e,a,n){if(!e){var r=1/0;for(u=0;u<t.length;u++){e=t[u][0],a=t[u][1],n=t[u][2];for(var o=!0,l=0;l<e.length;l++)(!1&n||r>=n)&&Object.keys(s.O).every((function(t){return s.O[t](e[l])}))?e.splice(l--,1):(o=!1,n<r&&(r=n));if(o){t.splice(u--,1);var c=a();void 0!==c&&(i=c)}}return i}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[e,a,n]}}(),function(){s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,{a:i}),i}}(),function(){s.d=function(t,i){for(var e in i)s.o(i,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/portfolio/"}(),function(){var t={524:0};s.O.j=function(i){return 0===t[i]};var i=function(i,e){var a,n,r=e[0],o=e[1],l=e[2],c=0;if(r.some((function(i){return 0!==t[i]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(l)var u=l(s)}for(i&&i(e);c<r.length;c++)n=r[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},e=self["webpackChunkayeonul_pf"]=self["webpackChunkayeonul_pf"]||[];e.forEach(i.bind(null,0)),e.push=i.bind(null,e.push.bind(e))}();var e=s.O(void 0,[504],(function(){return s(243)}));e=s.O(e)})();
//# sourceMappingURL=app.56012b8d.js.map