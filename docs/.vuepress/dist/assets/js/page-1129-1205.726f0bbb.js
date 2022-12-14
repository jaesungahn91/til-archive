(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{702:function(a,t,_){"use strict";_.r(t);var v=_(2),e=Object(v.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"_1129-1205"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1129-1205"}},[a._v("#")]),a._v(" 1129 - 1205")]),a._v(" "),_("h2",{attrs:{id:"_1129-webhook"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1129-webhook"}},[a._v("#")]),a._v(" 1129 - Webhook")]),a._v(" "),_("h3",{attrs:{id:"webhook-웹훅-이란"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webhook-웹훅-이란"}},[a._v("#")]),a._v(" Webhook(웹훅)이란?")]),a._v(" "),_("p",[a._v('웹훅은 웹페이지 또는 웹앱에서 발생하는 특정 행동(이벤트)들을 커스텀 Callback으로 변환해주는 방법이다. 일반적인 API(Polling)는 클라이언트가 서버를 호출하는 방식이다. 하지만 웹훅의 경우 서버에서 특정 이벤트가 발생했을 때 클라이언트를 호출하는 방식이며 "역방향 API"라고도 부른다.')]),a._v(" "),_("blockquote",[_("p",[a._v("callback URL은 서버측에서 이벤트가 발생했을 때 클라이언트의 어느 URL로 데이터를 보낼지 정해놓은 주소라고 생각하면 된다.")])]),a._v(" "),_("h4",{attrs:{id:"webhook을-사용하는-이유"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webhook을-사용하는-이유"}},[a._v("#")]),a._v(" Webhook을 사용하는 이유")]),a._v(" "),_("p",[a._v("Polling과 비교하여 API 요청 횟수가 적어지기 때문에 효율적")]),a._v(" "),_("h4",{attrs:{id:"webhook-구현시-유의해야할-점"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webhook-구현시-유의해야할-점"}},[a._v("#")]),a._v(" Webhook 구현시 유의해야할 점")]),a._v(" "),_("ul",[_("li",[a._v("웹훅으로부터 오는 데이터가 유실될 경우")]),a._v(" "),_("li",[a._v("웹훅으로 부터 오는 요청에 대하여 처리를 완료하였으나 response를 제대로 보내지 못했을 경우")])]),a._v(" "),_("p",[a._v("와같은 상황을 올바른 예외처리로 해결.")]),a._v(" "),_("h4",{attrs:{id:"webhook-vs-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webhook-vs-api"}},[a._v("#")]),a._v(" Webhook vs API")]),a._v(" "),_("ul",[_("li",[a._v("데이터를 수신하는 방식의 차이\n: 웹훅은 공급자가 데이터를 애플리케이션에 보낼 수 있으며, 푸시라고도 부를 수 있고 역 API라고 부르는 이유이다.")])]),a._v(" "),_("br"),a._v(" "),_("h2",{attrs:{id:"_1201-jcp-jsr-jep"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1201-jcp-jsr-jep"}},[a._v("#")]),a._v(" 1201 - JCP JSR JEP")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("JCP (Java Community Process)"),_("br"),a._v("\n: 자바 기술에 대한 표준 기술 명세를 개발하는 메커니즘.")])]),a._v(" "),_("li",[_("p",[a._v("JSR (Java Specification Requests)"),_("br"),a._v("\n: 자바 요구 사항 상세 명세서")])]),a._v(" "),_("li",[_("p",[a._v("JEP (JDK Enhancement Proposal)"),_("br"),a._v("\n: Java Development Kit와 OpenJDK를 향상된 기능에 대한 제안을 수집하기 위해 오라클이 초안을 작성하는 프로세스. JDK 출시와 장기적인 로드맵 역할을 함")])])]),a._v(" "),_("br"),a._v(" "),_("h2",{attrs:{id:"_1202-동시성과-병렬성"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1202-동시성과-병렬성"}},[a._v("#")]),a._v(" 1202 - 동시성과 병렬성")]),a._v(" "),_("h3",{attrs:{id:"동시성"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#동시성"}},[a._v("#")]),a._v(" 동시성")]),a._v(" "),_("p",[a._v("동시성은 적어도 두 개의 스레드가 진행 중일 때 존재하는 조건이며, 가상 병렬 처리의 한 형태로 시간 분할(time-slicing)을 포함한다. 우리가 흔히 '동시'라고 이야기 하지만 컴퓨터(코어)는 한번에 하나의 명령어만 처리할 수 있따. 즉, 두개 이상의 알고리즘이 하나의 코어내에서 스레드간에 빠르게 교차되면서 실행되기 때문에 '동시'라고 느끼는 것이다. 스레드간 교최더며 실행되는 부분을 Context Switching(문맥교환)이라고 한다.")]),a._v(" "),_("ul",[_("li",[a._v("동시에 실행되는 것 같이 보이는 것")]),a._v(" "),_("li",[a._v("싱글 코어에서 멀티 쓰레드(Multi thread)를 동작 시키는 방식")]),a._v(" "),_("li",[a._v("한번에 많은 것을 처리")]),a._v(" "),_("li",[a._v("논리적인 개념")])]),a._v(" "),_("h3",{attrs:{id:"병렬성"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#병렬성"}},[a._v("#")]),a._v(" 병렬성")]),a._v(" "),_("p",[a._v("병렬성을 이야기하려면 적어도 2개 이상의 코어가 있어야 한다. 병렬성도 동시성을 의미하지만 동시성과의 차이는 각 코어내의 스레드가 실제로 동시에 명령어를 실행할 수 있음을 말한다. 그러므로 두개의 알고리즘이 정확히 같은 시점에 실행될 때 이를 병렬적이라고 말할 수 있다.")]),a._v(" "),_("ul",[_("li",[a._v("실제로 동시에 여러 작업이 처리되는 것")]),a._v(" "),_("li",[a._v("멀티 코어에서 멀티 쓰레드를 동작시키는 방식")]),a._v(" "),_("li",[a._v("한번에 많은 일을 처리")]),a._v(" "),_("li",[a._v("물리적인 개념")])]),a._v(" "),_("p",[a._v("비동기화함께 다시한번 정리할 것")])])}),[],!1,null,null,null);t.default=e.exports}}]);