(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{27:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__32QnB",close:"Drawer_close__2Z-Ay",active:"Drawer_active__2oJCV"}},28:function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__30keh",fack:"FinishedQuiz_fack__3SS46",error:"FinishedQuiz_error__2Uh9s",success:"FinishedQuiz_success__2kPt9"}},30:function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__2nqJO",open:"MenuToggle_open__14len"}},35:function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__RAGpO",Question:"ActiveQuiz_Question__3y8RS"}},36:function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__rAo7u",success:"AnswerItem_success__qc5CR",error:"AnswerItem_error__1V531"}},37:function(e,t,n){e.exports={Button:"Button_Button__1ViIb",error:"Button_error__u4DQM",success:"Button_success__2xjYG",primary:"Button_primary__2kiGF"}},38:function(e,t,n){e.exports={Louder:"Louder_Louder__3hA5p","lds-ripple":"Louder_lds-ripple__9yzEI",Louderdiv:"Louder_Louderdiv__SRc0e",Center:"Louder_Center__HzrgD"}},39:function(e,t,n){e.exports={Quiz:"Quiz_Quiz__1DKhm",QuizWrapper:"Quiz_QuizWrapper__25zas"}},40:function(e,t,n){e.exports={Auth:"Auth_Auth__7E_6I",AuthForm:"Auth_AuthForm__1SsQY"}},51:function(e,t,n){e.exports={Layout:"Layout_Layout__OSvyn"}},52:function(e,t,n){e.exports={BackDrops:"BackDrops_BackDrops__1QBp6"}},55:function(e,t,n){e.exports={AnswerList:"AnswerList_AnswerList__1WMTn"}},56:function(e,t,n){e.exports={QiuzList:"QiuzList_QiuzList__3QPto"}},57:function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__1Doiq"}},58:function(e,t,n){e.exports={Input:"Input_Input__1aqBu",invalid:"Input_invalid__3DmDF"}},59:function(e,t,n){e.exports={Select:"Select_Select__1Tw55"}},63:function(e,t,n){e.exports=n(93)},68:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(25),o=n.n(i),s=(n(68),n(4)),u=n(5),c=n(7),l=n(8),p=n(19),m=n(51),d=n.n(m),h=n(30),f=n.n(h),v=n(22),_=n(17),b=function(e){var t=[f.a.MenuToggle];return e.isOpen&&t.push(f.a.open),a.a.createElement(v.a,{onClick:e.onToggle,className:t.join(" "),icon:e.isOpen?_.c:_.a})},g=n(27),z=n.n(g),y=n(52),w=n.n(y),E=function(e){return a.a.createElement("div",{className:w.a.BackDrops,onClick:e.dropsHandlerClose})},O=n(14),C=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderLinks",value:function(e){var t=this;return e.map((function(e,n){return a.a.createElement("li",{key:n},a.a.createElement(O.c,{to:e.to,exact:e.exact,activeClassName:z.a.active,onClick:t.props.dropsHandlerClose},e.label))}))}},{key:"render",value:function(){console.log("auth",this.props.isAuthenticated);var e=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a",exact:!0}];this.props.isAuthenticated?e.push({to:"/quiz-creator",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!1},{to:"/logout",label:"\u0412\u044b\u0439\u0442\u0438",exact:!1}):e.push({to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!1});var t=[z.a.Drawer];return this.props.isOpen||t.push(z.a.close),a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:t.join(" ")},a.a.createElement("ul",null,this.renderLinks(e))),this.props.isOpen?a.a.createElement(E,{dropsHandlerClose:this.props.dropsHandlerClose}):null)}}]),n}(r.Component),Q=n(6),k=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={menuOpen:!1},e.onToggle=function(){e.setState({menuOpen:!e.state.menuOpen})},e.dropsHandlerClose=function(){e.setState({menuOpen:!1})},e}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:d.a.Layout},a.a.createElement(C,{isOpen:this.state.menuOpen,dropsHandlerClose:this.dropsHandlerClose,isAuthenticated:this.props.isAuthenticated}),a.a.createElement(b,{isOpen:this.state.menuOpen,onToggle:this.onToggle}),a.a.createElement("main",null,this.props.children))}}]),n}(r.Component);var j=Object(Q.b)((function(e){return{isAuthenticated:!!e.auth.token}}))(k),q=n(35),A=n.n(q),x=n(55),S=n.n(x),I=n(36),D=n.n(I),L=function(e){var t=[D.a.AnswerItem];return e.state&&t.push(D.a[e.state]),a.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},F=function(e){return a.a.createElement("ul",{className:S.a.AnswerList},e.answers.map((function(t,n){return a.a.createElement(L,{onAnswerClick:e.onAnswerClick,key:n,answer:t,state:e.state?e.state[t.id]:null})})))},M=function(e){return a.a.createElement("div",{className:A.a.ActiveQuiz},a.a.createElement("p",{className:A.a.Question},a.a.createElement("span",null,a.a.createElement("strong",null,e.answerNumber,"."),"\xa0",e.question),a.a.createElement("small",null,e.answerNumber," \u0438\u0437 ",e.quizLength)),a.a.createElement(F,{onAnswerClick:e.onAnswerClick,answers:e.answers,state:e.state}))},N=n(28),H=n.n(N),T=n(37),B=n.n(T),V=function(e){var t=[B.a.Button,B.a[e.type]];return a.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},W=function(e){var t=Object.keys(e.resalts).reduce((function(t,n){return"success"===e.resalts[n]&&t++,t}),0);return a.a.createElement("div",{className:H.a.FinishedQuiz},a.a.createElement("ul",null,e.quiz.map((function(t,n){var r="success"===e.resalts[t.id]?a.a.createElement(v.a,{className:H.a.success,style:{marginLeft:10},icon:_.b}):a.a.createElement(v.a,{className:H.a.error,style:{marginLeft:10},icon:_.c});return a.a.createElement("li",{key:n},a.a.createElement("strong",null,n+1,"."),"\xa0",t.question,r)})),a.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length),a.a.createElement("div",null,a.a.createElement(V,{onClick:e.retry,type:"primary"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),a.a.createElement(O.b,{to:"/"},a.a.createElement(V,{onClick:e.retry,type:"success"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432")))))},R=n(38),J=n.n(R),P=function(e){return a.a.createElement("div",{className:J.a.Center},a.a.createElement("div",{className:J.a.Louder},a.a.createElement("div",null),a.a.createElement("div",null)))},G=n(39),K=n.n(G),U=n(24),Z=n(10),X=n.n(Z),Y=n(16),$=n(20),ee=n.n($);function te(e){return{type:"fetch_Quizes_Success",quizes:e}}function ne(e){return{type:"fetch_Quizes_Error",error:e}}function re(e){return{type:"fetch_Quiz_Success",quiz:e}}function ae(e){return function(t,n){var r=n().quiz;if(r.answerState){var a=Object.keys(r.answerState);if("success"===r.answerState[a])return}var i=r.quiz[r.activeQuestion],o=r.resalts;if(i.rightAnswer===e){o[i.id]||(o[i.id]="success"),t(ie(Object(U.a)({},e,"success"),o));var s=window.setTimeout((function(){!function(e){return e.activeQuestion+1===e.quiz.length}(r)?t({type:"quiz_Next_Question",activeQuestion:r.activeQuestion+1}):t({type:"finish_Quiz"}),window.clearTimeout(s)}),1e3)}else o[i.id]="error",t(ie(Object(U.a)({},e,"error"),o))}}function ie(e,t){return{type:"quiz_Set_State",answerState:e,resalts:t}}var oe=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchQuizById(this.props.match.params.id)}},{key:"componentWillUnmount",value:function(){this.props.retryQuiz()}},{key:"render",value:function(){return a.a.createElement("div",{className:K.a.Quiz},a.a.createElement("div",{className:K.a.QuizWrapper},a.a.createElement("h1",null,"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),this.props.loading||!this.props.quiz?a.a.createElement(P,null):this.props.isFinished?a.a.createElement(W,{retry:this.props.retryQuiz,resalts:this.props.resalts,quiz:this.props.quiz}):a.a.createElement(M,{question:this.props.quiz[this.props.activeQuestion].question,answers:this.props.quiz[this.props.activeQuestion].answers,onAnswerClick:this.props.qiuzAnswerClick,quizLength:this.props.quiz.length,answerNumber:this.props.activeQuestion+1,state:this.props.answerState})))}}]),n}(r.Component);var se=Object(Q.b)((function(e){return{resalts:e.quiz.resalts,isFinished:e.quiz.isFinished,activeQuestion:e.quiz.activeQuestion,answerState:e.quiz.answerState,quiz:e.quiz.quiz,loading:e.quiz.loading}}),(function(e){return{fetchQuizById:function(t){return e((n=t,function(){var e=Object(Y.a)(X.a.mark((function e(t){var r,a;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"fetch_Quizes_Start"}),e.prev=1,e.next=4,ee.a.get("https://react-quiz-6002a.firebaseio.com/quizes/".concat(n,".json"));case 4:r=e.sent,a=r.data,t(re(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(ne(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()));var n},qiuzAnswerClick:function(t){return e(ae(t))},retryQuiz:function(){return e({type:"retry_Quiz"})}}}))(oe),ue=n(56),ce=n.n(ue),le=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderQuiz",value:function(){return this.props.quizes.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(O.c,{to:"/quiz/"+e.id},e.name))}))}},{key:"componentDidMount",value:function(){this.props.fetchQuizes()}},{key:"render",value:function(){return a.a.createElement("div",{className:ce.a.QiuzList},a.a.createElement("div",null,a.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"),this.props.loading&&0!==this.props.quizes.length?a.a.createElement(P,null):a.a.createElement("ul",null,this.renderQuiz())))}}]),n}(r.Component);var pe=Object(Q.b)((function(e){return{quizes:e.quiz.quizes,loading:e.quiz.loading}}),(function(e){return{fetchQuizes:function(){return e(function(){var e=Object(Y.a)(X.a.mark((function e(t){var n,r;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"fetch_Quizes_Start"}),e.prev=1,e.next=4,ee.a.get("https://react-quiz-6002a.firebaseio.com/quizes.json");case 4:n=e.sent,r=[],Object.keys(n.data).map((function(e,t){r.push({id:e,name:"\u0422\u0435\u0441\u0442 ".concat(t+1)})})),t(te(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(ne(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))(le),me=n(3),de=n(57),he=n.n(de);function fe(e,t){return Object(me.a)({},e,{validation:t,valid:!t,touched:!0,value:""})}function ve(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}function _e(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}var be=n(58),ge=n.n(be),ze=function(e){var t=e.type||"text",n=[ge.a.Input],r="".concat(t," - ").concat(Math.random());return a.a.createElement("div",{className:n.join(" ")},a.a.createElement("label",{htmlFor:r},e.label),a.a.createElement("input",{id:r,value:e.value,type:t,onChange:e.onChange}),e.errorMessage?a.a.createElement("span",null,e.errorMessage):null)},ye=n(59),we=n.n(ye),Ee=function(e){var t="".concat(e.label," - ").concat(Math.random());return a.a.createElement("div",{className:we.a.Select},a.a.createElement("label",{htmlFor:t},e.label),a.a.createElement("select",{value:e.value,onChange:e.onChange,id:t},e.options.map((function(e,t){return a.a.createElement("option",{key:t,value:e.value},e.text)}))))};function Oe(e){return fe({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e),errorMessage:"",id:e},{required:!0})}function Ce(){return{question:fe({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:""},{required:!0}),option1:Oe(1),option2:Oe(2),option3:Oe(3),option4:Oe(4)}}var Qe=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isValidForm:!1,rightAnswerId:1,formControls:Ce()},e.addQuestionHandler=function(t){t.preventDefault();var n={question:e.state.formControls.question.value,id:e.props.length+1,rightAnswer:e.state.rightAnswerId,answers:[{text:e.state.formControls.option1.value,id:e.state.formControls.option1.id},{text:e.state.formControls.option2.value,id:e.state.formControls.option2.id},{text:e.state.formControls.option3.value,id:e.state.formControls.option3.id},{text:e.state.formControls.option4.value,id:e.state.formControls.option4.id}]};e.props.createQuizQuestion(n),e.setState({isValidForm:!1,rightAnswerId:1,formControls:Ce()})},e.createQuizHandler=function(){var t=Object(Y.a)(X.a.mark((function t(n){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.props.finishCreateQuiz(),e.setState({isValidForm:!1,rightAnswerId:1,formControls:Ce()});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.changeHandler=function(t,n){var r=Object(me.a)({},e.state.formControls),a=Object(me.a)({},r[n]);a.touched=!0,a.value=t,a.valid=ve(a.value,a.validation),a.errorMessage=n&&""!==t?"":"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",r[n]=a,e.setState({formControls:r,isValidForm:_e(r)})},e.renderControls=function(){return Object.keys(e.state.formControls).map((function(t,n){var r=e.state.formControls[t];return a.a.createElement(a.a.Fragment,{key:n},a.a.createElement(ze,{label:r.label,value:r.value,errorMessage:r.errorMessage,onChange:function(n){return e.changeHandler(n.target.value,t)}}),0===n?a.a.createElement("hr",null):null)}))},e.selectChangeHandler=function(t){e.setState({rightAnswerId:+t.target.value})},e}return Object(u.a)(n,[{key:"submitHandler",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=a.a.createElement(Ee,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:this.state.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return a.a.createElement("div",{className:he.a.QuizCreator},a.a.createElement("div",null,a.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"),a.a.createElement("form",{onSubmit:this.submitHandler},this.renderControls(),e,a.a.createElement(V,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isValidForm},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"),a.a.createElement(V,{type:"success",onClick:this.createQuizHandler,disabled:0===this.props.quiz.length},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"))))}}]),n}(r.Component);var ke=Object(Q.b)((function(e){return{quiz:e.create.quiz}}),(function(e){return{createQuizQuestion:function(t){return e(function(e){return{type:"create_Quiz_Question",question:e}}(t))},finishCreateQuiz:function(){return e(function(){var e=Object(Y.a)(X.a.mark((function e(t,n){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.a.post("https://react-quiz-6002a.firebaseio.com/quizes.json",n().create.quiz);case 2:t({type:"reset_Quiz_Creation"});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))(Qe),je=n(40),qe=n.n(je);function Ae(e){return{type:"auth_success",token:e}}function xe(e){return function(t){setTimeout((function(){t(Se())}),1e3*e)}}function Se(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),{type:"auth_Logout"}}function Ie(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}var De=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isFormValid:!1,formControls:{email:{value:"",type:"c",errorMessage:"",label:"email",valid:!1},password:{value:"",type:"password",errorMessage:"",label:"\u041f\u0430\u0440\u043e\u043b\u044c",valid:!1}}},e.loginHandler=function(){e.props.auth(e.state.formControls.email.value,e.state.formControls.password.value,!0)},e.registerHandler=function(){e.props.auth(e.state.formControls.email.value,e.state.formControls.password.value,!1)},e.onChange=function(t,n){var r=t.target.value.trim(),a=Object(me.a)({},e.state.formControls),i=Object(me.a)({},a[n]);i.value=r,"email"===n&&(Ie(r)?(i.errorMessage="",i.valid=!0):(i.errorMessage="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 ".concat(n),i.valid=!1)),"password"===n&&(Number(r)&&r.length>5?(i.errorMessage="",i.valid=!0):(i.errorMessage="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 ".concat(n),i.valid=!1)),a[n]=i;var o=!0;Object.keys(a).map((function(e){o=a[e].valid&&o})),e.setState({isFormValid:o,formControls:a})},e}return Object(u.a)(n,[{key:"submitHandler",value:function(e){e.preventDefault()}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var r=e.state.formControls[t];return a.a.createElement(ze,{key:n,label:r.label,type:r.type,value:r.value,errorMessage:r.errorMessage,onChange:function(n){return e.onChange(n,t)}})}))}},{key:"render",value:function(){return a.a.createElement("div",{className:qe.a.Auth},a.a.createElement("div",null,a.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),a.a.createElement("form",{onSubmit:this.submitHandler,className:qe.a.AuthForm},this.renderInputs(),a.a.createElement(V,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid},"\u0412\u043e\u0439\u0442\u0438"),a.a.createElement(V,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid},"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))}}]),n}(r.Component);var Le=Object(Q.b)(null,(function(e){return{auth:function(t,n,r){return e(function(e,t,n){return function(){var r=Object(Y.a)(X.a.mark((function r(a){var i,o,s,u,c;return X.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA8i-6oxv97BjCiEbiQfymKXbOyt8e1hCo",n&&(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA8i-6oxv97BjCiEbiQfymKXbOyt8e1hCo"),r.next=5,ee.a.post(o,i);case 5:s=r.sent,u=s.data,console.log(u),c=new Date((new Date).getTime()+1e3*u.expiresIn),console.log("expirationDate: ",c),localStorage.setItem("token",u.idToken),localStorage.setItem("userId",u.localId),localStorage.setItem("expirationDate",c),a(Ae(u.idToken)),a(xe(u.expiresIn));case 15:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(t,n,r))}}}))(De),Fe=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return a.a.createElement(p.a,{to:"/"})}}]),n}(r.Component);var Me=Object(Q.b)(null,(function(e){return{logout:function(){return e(Se())}}}))(Fe),Ne=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){var e=a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/auth",component:Le}),a.a.createElement(p.b,{path:"/quiz-creator",component:ke}),a.a.createElement(p.b,{path:"/quiz/:id",component:se}),a.a.createElement(p.b,{path:"/",exact:!0,component:pe}),a.a.createElement(p.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/quiz-creator",component:ke}),a.a.createElement(p.b,{path:"/quiz/:id",component:se}),a.a.createElement(p.b,{path:"/logout",component:Me}),a.a.createElement(p.b,{path:"/",exact:!0,component:pe}),a.a.createElement(p.a,{to:"/"}))),a.a.createElement(j,null,e)}}]),n}(r.Component);var He=Object(p.g)(Object(Q.b)((function(e){return{isAuthenticated:!!e.auth.token}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(Se()):(e(Ae(t)),e(xe((n.getTime()-(new Date).getTime())/1e3)))}else e(Se())}))}}}))(Ne));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=n(18),Be={quizes:[],loading:!1,error:null,resalts:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:null};var Ve=n(62),We={quiz:[]};var Re={token:!1};var Je=Object(Te.combineReducers)({quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_Quizes_Start":return Object(me.a)({},e,{loading:!0});case"fetch_Quizes_Success":return Object(me.a)({},e,{loading:!1,quizes:t.quizes});case"fetch_Quizes_Error":return Object(me.a)({},e,{loading:!1,error:t.error});case"fetch_Quiz_Success":return Object(me.a)({},e,{loading:!1,quiz:t.quiz});case"quiz_Set_State":return Object(me.a)({},e,{answerState:t.answerState,resalts:t.resalts});case"finish_Quiz":return Object(me.a)({},e,{isFinished:!0});case"quiz_Next_Question":return Object(me.a)({},e,{answerState:null,activeQuestion:t.activeQuestion});case"retry_Quiz":return Object(me.a)({},e,{resalts:{},isFinished:!1,activeQuestion:0,answerState:null});default:return e}},create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"create_Quiz_Question":return Object(me.a)({},e,{quiz:[].concat(Object(Ve.a)(e.quiz),[t.question])});case"reset_Quiz_Creation":return Object(me.a)({},e,{quiz:[]});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth_success":return Object(me.a)({},e,{token:t.token});case"auth_Logout":return Object(me.a)({},e,{token:null});default:return e}}}),Pe=n(60),Ge=n(61),Ke=Object(Te.createStore)(Je,Object(Pe.composeWithDevTools)(Object(Te.applyMiddleware)(Ge.a)));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Q.a,{store:Ke},a.a.createElement(O.a,null,a.a.createElement(He,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.8a448fc2.chunk.js.map