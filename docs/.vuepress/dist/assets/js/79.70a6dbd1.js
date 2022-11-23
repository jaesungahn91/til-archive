(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{431:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1114-1120"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1114-1120"}},[t._v("#")]),t._v(" 1114 ~ 1120")]),t._v(" "),s("h2",{attrs:{id:"_1114-도메인-주도-설계의-모듈-구성-패키지-구성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1114-도메인-주도-설계의-모듈-구성-패키지-구성"}},[t._v("#")]),t._v(" 1114 - 도메인 주도 설계의 모듈 구성(패키지 구성)")]),t._v(" "),s("h3",{attrs:{id:"계층-기반-패키지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#계층-기반-패키지"}},[t._v("#")]),t._v(" 계층 기반 패키지")]),t._v(" "),s("p",[t._v("가장 단순한 첫번째 설계원칙인 수평 계층형 아키텍처"),s("br"),t._v(" "),s("img",{attrs:{src:"https://gocheat.github.io/assets/images/2021-03-02-clean-arc-package/1.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[t._v("기술적인 관점에서 해당 코드가 하는 일에 기반해 그 코드를 분할. 보통 웹베이스 코딩을 하게 되면 "),s("code",[t._v("MVC")]),t._v(", "),s("code",[t._v("MVP")]),t._v(" 패턴으로 개발을 하게 되는데 이도 "),s("code",[t._v("계층 기반 패키지")]),t._v("라고 부르며 각 계층은 유사한 종류의 것들을 묶는 도구로 사용")]),t._v(" "),s("li",[t._v("이 전형적인 아키텍처에서는 "),s("code",[t._v("사용 인터페이스")]),t._v(", "),s("code",[t._v("업무규칙")]),t._v(", "),s("code",[t._v("영속성코드")]),t._v("를 계층이 각각 하나씩 존재하며, 임의의 N계층은 반드시 N+1계층에만 의존 해야한다.")])]),t._v(" "),s("h3",{attrs:{id:"기능-도메인-기반-패키지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기능-도메인-기반-패키지"}},[t._v("#")]),t._v(" 기능(도메인) 기반 패키지")]),t._v(" "),s("p",[t._v("기능 기반 패키지는 서로 연관된 기능, 도메인 개념 또는 Aggregate Root에 기반하여 수직의 얇은 조각으로 코드를 나누는 방식."),s("br"),t._v("\n특정 기능을 지칭하는 하나의 패키지 내에 모든 타입과, 개념을 반영해서 구현."),s("br"),t._v(" "),s("img",{attrs:{src:"https://gocheat.github.io/assets/images/2021-03-02-clean-arc-package/2.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[t._v("인터페이스와 클래스가 모두 단 하나의 패키지에 속한다. 이로 인해 코드의 상위 수준 구조가 업무 도메인에 대해 무언가를 알려주게 된다. 따라서 이 코드베이스가 계층단위(웹, 서비스, 리포지토리)가 아니라 주문(업무 도메인)과 관련된 무언가를 한다는 것을 볼 수 있다.")]),t._v(" "),s("li",[t._v("변경시 변경해야 할 코드가 모두 한 패키지 내에 응집력을 갖고 있기때문에 유리하다.")])]),t._v(" "),s("h3",{attrs:{id:"포트와-어댑터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#포트와-어댑터"}},[t._v("#")]),t._v(" 포트와 어댑터")]),t._v(" "),s("p",[t._v("엉클 밥에 따르면 "),s("code",[t._v("포트와 어댑터")]),t._v(" 혹은 "),s("code",[t._v("육각형 아키텍처")]),t._v(", "),s("code",[t._v("경계, 컨트롤러, 엔티티")]),t._v(" 등의 방식으로 접근하는 이유는 업무/도메인에 초점을 둔 코드가 기술적인 세부 구현과 독립적이며 분리된 아키텍처를 만들기 위해서이다."),s("br"),t._v(" "),s("img",{attrs:{src:"https://gocheat.github.io/assets/images/2021-03-02-clean-arc-package/3.png",alt:"image"}}),t._v("\n'내부' 영역은 도메인 개념을 모두 포함하는 반면, '외부'영역은 UI, 데이터베이스, 서드파티등과의 상호작용을 포함한다. 여기서 중요한 규칙은 '외부'가 '내부'에 의존하며, 그 반대는 불가능하다."),s("br"),t._v(" "),s("img",{attrs:{src:"https://gocheat.github.io/assets/images/2021-03-02-clean-arc-package/3-2.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[t._v("도메인 주도 설계에서는 OrderRepository는 Orders라는 명칭으로 바꿔줘야 한다. 그 이유는 도메인에 대해 논의할때 '주문'에 대해 말하는것이지 '주문 리포지토리'에 대해 말하는 것이 아니기 때문이다.")])]),t._v(" "),s("h3",{attrs:{id:"컴포넌트-기반-패키지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컴포넌트-기반-패키지"}},[t._v("#")]),t._v(" 컴포넌트 기반 패키지")]),t._v(" "),s("p",[t._v("컴포넌트 기반 패키지는 마틴 파울러가 제시하는 방법으로, 지금까지 방식을 혼합한 것으로 큰 단위의 단일 컴포넌트와 관련된 모든 책임을 하나의 패키지로 묶는데 주안점을 두고 있다."),s("br"),t._v("\n이 접근법은 서비스 중심적인 시각으로 소프트웨어 시스템을 바라 보며, 마이크로서비스 아키텍처가 가진 시각과도 동일하다."),s("br"),t._v(" "),s("img",{attrs:{src:"https://gocheat.github.io/assets/images/2021-03-02-clean-arc-package/4.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[t._v("여기서 말하는 '컴포넌트'에 대해 마틴파울러는 \"컴포넌트는 멋지고 깔끔한 인터페이스로 감싸진 연관된 기능들의 묶음으로, 애플리케이션과 같은 실행 환경 내부에 존재한다.\"로 정의하고 있다.")]),t._v(" "),s("li",[t._v("컴포넌트 기반 패키지 접근법의 주된 이점은 주문과 관련된 무언가를 코딩해야 할 때 오직, OrdersComponent만 둘러보면 된다는 점이다. 이 컴포넌트 내부에서 관심사의 분리는 여전히 유효하며, 컴포넌트 구현과 관련된 세부사항은 사용자가 알 필요가 없다.")]),t._v(" "),s("li",[t._v("이는 마이크로 서비스나 서비스 지향 아키텍처를 적용했을 때 얻는 이점과도 유사하다. 따라서 모노리틱 애플리케이션에서 컴포넌트를 잘 정의하면 결합 분리 모드를 통해 마이크로 서비스 아키텍처로 가기 위한 발판으로 삼을 수 있다.")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_1116-spring-security-without-the-websecurityconfigureradapter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1116-spring-security-without-the-websecurityconfigureradapter"}},[t._v("#")]),t._v(" 1116 - Spring Security without the WebSecurityConfigurerAdapter")]),t._v(" "),s("p",[t._v("Spring Security 5.7.0-M2 부터는 구성 요소 기반 보안 설정으로 변경된다. 따라서 "),s("code",[t._v("WebSecurityConfigurerAdapter")]),t._v(" 상속 후, configure 메소드를 오버라이딩 하여 설정하는 방식에서 "),s("code",[t._v("SecurityFilterChain")]),t._v("를 빈으로 등록하는 방식을 권장한다.")]),t._v(" "),s("h3",{attrs:{id:"httpsecurity-구성-비교"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httpsecurity-구성-비교"}},[t._v("#")]),t._v(" HttpSecurity 구성 비교")]),t._v(" "),s("ul",[s("li",[t._v("WebSecurityConfigurerAdapter의 configure 메소드를 오버라이딩")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecurityConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebSecurityConfigurerAdapter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpSecurity")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        http\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("authorizeHttpRequests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" authz\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("anyRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("authenticated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("httpBasic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withDefaults")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("SecurityFilterChain 빈 등록")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecurityConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecurityFilterChain")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filterChain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpSecurity")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        http\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("authorizeHttpRequests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" authz\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("anyRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("authenticated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("httpBasic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withDefaults")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"ldap란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ldap란"}},[t._v("#")]),t._v(" LDAP란?")]),t._v(" "),s("p",[t._v("LDAP(Lightweight Directory Access Protocol)란, 네트워크 상에서 조직이나 개인정보 혹은 파일이나 디바이스 정보 등을 찾아보는 것을 가능하게 만든 소프트웨어 프로토콜이다.")]),t._v(" "),s("h3",{attrs:{id:"jdbc-인증-설정-비교"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdbc-인증-설정-비교"}},[t._v("#")]),t._v(" JDBC 인증 설정 비교")]),t._v(" "),s("ul",[s("li",[t._v("WebSecurityConfigurerAdapter 상속, configure(AuthenticationManagerBuilder auth) 메소드 오버라이딩하여 설정")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecurityConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebSecurityConfigurerAdapter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSource")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dataSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmbeddedDatabaseBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmbeddedDatabaseType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("H2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticationManagerBuilder")]),t._v(" auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDetails")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withDefaultPasswordEncoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("roles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USER"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("jdbcAuthentication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withDefaultSchema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dataSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dataSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("JdbcUserDetailsManager 빈을 등록하는 방식")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecurityConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSource")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dataSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmbeddedDatabaseBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmbeddedDatabaseType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("H2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addScript")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JdbcDaoImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEFAULT_USER_SCHEMA_DDL_LOCATION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDetailsManager")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("users")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSource")]),t._v(" dataSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이 예에서는 User.withDefaultPasswordEncoder()가독성을 위해 방법을 사용")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDetails")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withDefaultPasswordEncoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("roles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USER"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JdbcUserDetailsManager")]),t._v(" users "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JdbcUserDetailsManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("https://blog.naver.com/PostView.naver?blogId=h850415&logNo=222755455272&parentCategoryNo=&categoryNo=37&viewDate=&isShowPopularPosts=true&from=search"),s("br"),t._v("\nhttps://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_1117"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1117"}},[t._v("#")]),t._v(" 1117 -")]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);a.default=e.exports}}]);