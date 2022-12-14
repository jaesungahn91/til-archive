(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{456:function(t,a,s){"use strict";s.r(a);var n=s(11),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_0418-0424"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0418-0424"}},[t._v("#")]),t._v(" 0418 ~ 0424")]),t._v(" "),s("h2",{attrs:{id:"_0418-퍼사드-패턴-facade-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0418-퍼사드-패턴-facade-pattern"}},[t._v("#")]),t._v(" 0418 - 퍼사드 패턴(Facade Pattern)")]),t._v(" "),s("h3",{attrs:{id:"퍼사드-패턴이란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#퍼사드-패턴이란"}},[t._v("#")]),t._v(" 퍼사드 패턴이란")]),t._v(" "),s("blockquote",[s("p",[t._v("서브시스템의 인터페이스 집합에 대한 하나의 상위 수준 인터페이스를 정의하는 패턴")])]),t._v(" "),s("p",[t._v("퍼사드 패턴(Facade Pattern)은 구조패턴(Structural Pattern)의 한 종류로, 서브시스템들의 공통적인 기능을 정의하는 단순화된 상위 수준의 인터페이스를 정의하는 패턴이다. 서브시스템들 사이의 종속성을 줄일 수 있다.")]),t._v(" "),s("h4",{attrs:{id:"구조-패턴-structural-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#구조-패턴-structural-pattern"}},[t._v("#")]),t._v(" 구조 패턴(Structural Pattern)")]),t._v(" "),s("p",[t._v("구조패턴이란 작은 클래스들의 상속과 합성을 통해 더 큰 클래스를 생성하는 방법을 제공하는 패턴으로, 독립적으로 개발한 클래스들을 마치 하나인 것 처럼 사용할 수 있다.")]),t._v(" "),s("ul",[s("li",[t._v("적응자 패턴(Adapter)")]),t._v(" "),s("li",[t._v("가교 패턴(Bridge)")]),t._v(" "),s("li",[t._v("복합체 패턴(Composite)")]),t._v(" "),s("li",[t._v("장식자 패턴(Decorator)")]),t._v(" "),s("li",[t._v("퍼사드 패턴(Facade)")]),t._v(" "),s("li",[t._v("플라이급 패턴(Flyweight)")]),t._v(" "),s("li",[t._v("프록시 패턴(Proxy)")])]),t._v(" "),s("h3",{attrs:{id:"구성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#구성"}},[t._v("#")]),t._v(" 구성")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dev-aiden.com/assets/images/2021-08-26-Facade-Pattern/1.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[t._v("Facade : 사용자의 요청을 서브시스템 객체에 전달하는 단순하고 일관된 통합 인터페이스")]),t._v(" "),s("li",[t._v("Subsystem Classes : Facade에 대해 정보를 가지지 않고, 서브시스템의 기능을 구현하는 클래스")])]),t._v(" "),s("h3",{attrs:{id:"퍼사드-패턴-예제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#퍼사드-패턴-예제"}},[t._v("#")]),t._v(" 퍼사드 패턴 예제")]),t._v(" "),s("p",[t._v("우리가 아침에 일어나서 사무실에 출근하기까지를 여러 과정으로 나눠볼 수 있다. 예를 들어 씻고, 아침을 먹고, 대중교통을 타서 출근을 하는데, 퍼사드 패턴을 이용하여 각각의 동작들을 서브클래스로 구현하고, 서브클래스들의 공통 기능을 정의하는 상위 수준의 인터페이스를 정의할 수 있다.")]),t._v(" "),s("h4",{attrs:{id:"facade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#facade"}},[t._v("#")]),t._v(" Facade")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoOffice")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("goToWork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wash")]),t._v(" wash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Breakfast")]),t._v(" breakfast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Breakfast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Move")]),t._v(" move "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Move")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        wash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("brushTeeth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        wash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shower")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        breakfast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        breakfast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("water")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        move"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"subsystem-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subsystem-classes"}},[t._v("#")]),t._v(" Subsystem Classes")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wash")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("brushTeeth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Brush my teeth"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shower")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Take a shower"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Breakfast")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Have breakfast"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("water")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Drink water"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Move")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Take the bus"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"특징"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#특징"}},[t._v("#")]),t._v(" 특징")]),t._v(" "),s("ul",[s("li",[t._v("낮은 결합도 : 클라이언트가 서브시스템의 코드를 모르더라고 Facade 클래스를 통해 사용 가능")]),t._v(" "),s("li",[t._v("서브 클래스 직접 접근 가능 : Facade 클래스를 통해 서브클래스를 사용할지, 서브클래스를 직접 사용할지 선택 가능")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_0422-애플리케이션-컨텍스트-application-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0422-애플리케이션-컨텍스트-application-context"}},[t._v("#")]),t._v(" 0422 - 애플리케이션 컨텍스트(Application Context)")]),t._v(" "),s("h3",{attrs:{id:"applicationcontext란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#applicationcontext란"}},[t._v("#")]),t._v(" ApplicationContext란?")]),t._v(" "),s("p",[t._v("Spring에서는 빈의 생성과 관계설정 같은 제어를 담당하는 IoC(Inversion of Control) 컨테이너인 빈 팩토리(Bean Factory)가 존재한다. 하지만 실제로는 빈의 생성과 관계설정 외에 추가적인 기능이 필요하다. 이러한 이유로 빈 팩토리를 상속받아 확장한 애플리케이션 컨텍스트를 주로 사용한다."),s("br"),t._v("\n애플리케이션 컨텍스트는 별도의 설정 정보를 참고하고 IoC를 적용하여 빈의 생성, 관계설정 등의 제어 작업을 총괄한다. 애플리케이션 컨텍스트에는 직접 오브젝트를 생성하고 관계를 맺어주는 코드가 없고, 그런 생성 정보와 연관관계 정보에 대한 설정을 읽어 처리한다. 예를 들어 @Configuration과 같은 어노테이션이 대표적인 IoC의 설정정보이다.")]),t._v(" "),s("p",[t._v("ApplicationContext를 스프링 컨테이너라고 한다. ApplicationContext는 BeanFactory 인터페이스의 하위 인터페이스이다. 즉, ApplicationContext는 BeanFactory에 부가기능을 추가한 것이다.\nBeanFactory는 스프링 컨테이너의 최상위 인터페이스이다. 스프링 빈을 관리하고 조회하는 역할을 한다. ApplicationContext는 BeanFactory + 부가 기능(국제화 기능, 환경 변수 관련 처리, 애플리케이션 이벤트, 리소스 조회)을 가진다.\n정확히는 스프링 컨테이너를 부를 때, BeanFactory, ApplicationContext를 구분해서 말하지만, BeanFactory를 직접적으로 사용하는 경우는 거의 없다. 왜냐하면 ApplicationContext가 BeanFactory의 모든 기능을 가지고 있기 때문이다.\nApplicationContext의 구현체가 여러가지 있는데, 구현체에 따라 스프링 컨테이너를 XML을 기반으로 만들 수도 있고, 자바 클래스로 만들 수도 있다. 이게 가능한 이유는 빈 등록을 BeanDefinition으로 추상화해서 생성 하기 때문이다. XML로 하든, 자바로 하든 BeanDefinition이 생성된다.\n스프링 컨테이너 내부에는 빈 저장소가 존재한다. 빈 저장소는 key로 빈 이름을 가지고 있으며, value로 실제 빈 객체를 가지고 있다.\n스프링 컨테이너는 기본적으로 빈을 싱글톤으로 관리해준다. 따라서 싱글톤 컨테이너라고 불리기도 한다. 스프링 컨테이너가 빈을 싱글톤으로 관리해주면서 기존 싱글턴 패턴의 문제점(싱글톤 패턴 구현을 위한 코드가 추가되어야함, 구체 클래스에 의존, 유연성이 떨어짐 etc)은 없어지고, 싱글톤의 장점(매번 인스턴스를 생성할 필요없이 단 하나만 생성해서 비용을 줄일 수 있다.)만 가져갈 수 있다.")]),t._v(" "),s("h3",{attrs:{id:"빈-bean-요청-시-처리-과정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#빈-bean-요청-시-처리-과정"}},[t._v("#")]),t._v(" 빈(Bean) 요청 시 처리 과정")]),t._v(" "),s("p",[t._v("클라이언트에서 해당 빈을 요청하면 애플리케이션 컨텍스트는 다음과 같은 과정을 거쳐 빈을 반환한다.")]),t._v(" "),s("ol",[s("li",[t._v("ApplicationContext는 @Configuration이 붙은 클래스들을 설정 정보로 등록해두고, @Bean이 붙은 메소드의 이름으로 빈 목록을 생성한다.")]),t._v(" "),s("li",[t._v("클라이언트가 해당 빈을 요청한다.")]),t._v(" "),s("li",[t._v("ApplicationContext는 자신의 빈 목록에서 요청한 이름이 있는지 찾는다.")]),t._v(" "),s("li",[t._v("ApplicationContext는 설정 클래스로부터 빈 생성을 요청하고, 생성된 빈을 돌려준다.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FLuLhA%2Fbtq4squITMm%2FmqqtgMfiiahkAFBuPLMaLk%2Fimg.png",alt:"image"}})]),t._v(" "),s("p",[t._v("애플리케이션 컨택스트는 @Configuration이 붙은 클래스들을 설정 정보로 등록해두고, @Bean이 붙은 메소드의 이름으로 빈 목록을 생성한다. 그리고 클라이언트가 해당 빈을 요청한다면 애플리케이션 컨텍스트는 자신의 빈 목록에서 요청한 이름이 있는지 찾고, 있다면 해당 빈 생성 메소드(@Bean)을 호출하여 객체를 생성하고 돌려준다. (구체적으로는 Spring 내부에서 Reflection API를 이용해 빈 정의에 나오는 클래스 이름을 이용하거나 또는 빈 팩토리를 통해 빈을 생성한다.)")]),t._v(" "),s("h3",{attrs:{id:"애플리케이션-컨텍스트의-장점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#애플리케이션-컨텍스트의-장점"}},[t._v("#")]),t._v(" 애플리케이션 컨텍스트의 장점")]),t._v(" "),s("h4",{attrs:{id:"클라이언트는-configuration이-붙은-구체적인-팩토리-클래스를-알-필요가-없다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#클라이언트는-configuration이-붙은-구체적인-팩토리-클래스를-알-필요가-없다"}},[t._v("#")]),t._v(" - 클라이언트는 @Configuration이 붙은 구체적인 팩토리 클래스를 알 필요가 없다.")]),t._v(" "),s("p",[t._v("애플리케이션이 발전하면 팩토리 클래스가 계속해서 증가할 것이다. 애플리케이션 컨텍스트가 없다면 클라이언트는 원하는 객체를 가져오려면 어떤 팩토리 클래스에 접근해야 하는지 알아야 하는 번거로움이 생긴다. 반면에 애플리케이션 컨텍스트를 사용하면 팩토리가 아무리 많아져도 이에 직접 접근할 필요가 없어진다. 즉, 일관된 방식으로 원하는 빈을 가져올 수 있다.")]),t._v(" "),s("h4",{attrs:{id:"애플리케이션-컨텍스트는-종합-ioc-서비스를-제공해준다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#애플리케이션-컨텍스트는-종합-ioc-서비스를-제공해준다"}},[t._v("#")]),t._v(" - 애플리케이션 컨텍스트는 종합 IoC 서비스를 제공해준다.")]),t._v(" "),s("p",[t._v("애플리케이션 컨텍스트는 객체의 생성과 관계 설정이 다가 아니다. 객체가 만들어지는 방식과 시점 및 전략 등을 다르게 가져갈 수 있고, 그 외에에도 후처리나 정보의 조합 인터셉트 등과 같은 다양한 기능이 존재한다.")]),t._v(" "),s("h4",{attrs:{id:"애플리케이션-컨텍스트를-통해-다양한-빈-검색-방법을-제공할-수-있다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#애플리케이션-컨텍스트를-통해-다양한-빈-검색-방법을-제공할-수-있다"}},[t._v("#")]),t._v(" - 애플리케이션 컨텍스트를 통해 다양한 빈 검색 방법을 제공할 수 있다.")]),t._v(" "),s("p",[t._v("애플리케이션 컨텍스트에서 빈 목록을 관리하여, 빈의 이름이나 타입 또는 어노테이션 설정 등으로 빈을 찾을 수 있다. 이러한 빈을 직접 찾는 방식은 의존성 검색(dependency lookup)으로 불린다.")]),t._v(" "),s("h3",{attrs:{id:"자바-설정-클래스로-스프링-컨테이너-생성하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#자바-설정-클래스로-스프링-컨테이너-생성하기"}},[t._v("#")]),t._v(" 자바 설정 클래스로 스프링 컨테이너 생성하기")]),t._v(" "),s("p",[t._v("어노테이션 기반의 자바 크래스로 스프링 컨테이너를 만든 예시이다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StationService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stationService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StationServiceImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stationRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StationRepository")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stationRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemoryStationRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("new AnnotationConfigApplicationContext()")]),t._v("를 통헤 자바 기반 스프링 컨테이너를 만들어 준다. 그럼 비어있는 빈 저장소가 생긴다. 이때 만들어 둔 자바 설정 크래스를 파라미터로 넘겨줘서 생성한다. 그럼 자바 설정 클래스 내부의 @Bean 어노테이션이 붙은 메서드들을 실행하면서 빈 저장소에 실제 빈을 등록한다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationContext")]),t._v(" applicationContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationConfigApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("사용할 땐, 빈 등록 메서드 이름을 통해 객체를 가져올 수 있다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StationService")]),t._v(" stationService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" applicationContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stationService"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StationService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"_0424-스프링-spring-의-싱글톤-singleton"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0424-스프링-spring-의-싱글톤-singleton"}},[t._v("#")]),t._v(" 0424 - 스프링(Spring)의 싱글톤(Singleton)")]),t._v(" "),s("h3",{attrs:{id:"스프링에서-싱글톤을-사용하는-이유"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#스프링에서-싱글톤을-사용하는-이유"}},[t._v("#")]),t._v(" 스프링에서 싱글톤을 사용하는 이유")]),t._v(" "),s("p",[t._v("애플리케이션 컨텍스트에 의해 등록된 빈은 기본적으로 싱글톤으로 관리된다. 즉, 스프링에 여러 번을 요청하더라도 매번 동일한 객체를 돌려준다. 애플리케이션 컨테긋트가 싱글톤으로 빈을 관리하는 이유는 대규모 트래픽을 처리할 수 있도록 하기 위함이다."),s("br"),t._v("\n스프링은 최초에 설계될 때 부터 대규모의 엔터프라이즈 환경에서 요청을 처리할 수 있도록 고안되었다. 그리고 그에따라 계층적으로 처리 구조(Controller, Service, Repository 등)가 나뉘어지게 되었다."),s("br"),t._v("\n그런데 매번 클라이언트에서 요청이 올 때무다 각 로직을 처리하는 빈을 새로 만들어서 사용한다고 생각해보자. 요청 1번에 5개의 객체가 만들어 진다고 하고, 1초에 500번 요청이 온다고 하면 초당 2500개의 새로운 객체가 생성된다. 아무리 GC의 성능이 좋아졌다 하더라도 부하가 걸리면 감당이 힘들 것이다."),s("br"),t._v("\n그래서 이러한 문제를 해결하고자 빈을 싱글톤 스코프로 관리하여 1개의 요청이 왔을 때 여러 쓰레드가 빈을 공유해 처리하도록 하였다.")]),t._v(" "),s("h3",{attrs:{id:"스프링ᄋ에서-관리하는-싱글톤의-장점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#스프링ᄋ에서-관리하는-싱글톤의-장점"}},[t._v("#")]),t._v(" 스프링ㅇ에서 관리하는 싱글톤의 장점")]),t._v(" "),s("ul",[s("li",[t._v("private 생성자를 갖고 있어 상속이 불가능하다.")]),t._v(" "),s("li",[t._v("테스트하기 힘들다.")]),t._v(" "),s("li",[t._v("서버 환경에서는 싱글톤이 1개만 생성됨을 보장하지 못한다.")]),t._v(" "),s("li",[t._v("전역 상태를 만들 수 있기 때문에 바람직하지 못하다.")])]),t._v(" "),s("p",[t._v("그래서 스프링은 직접 싱글톤 형태의 오브젝트를 만들고 관리하는 기능을 제공하는데, 그것이 바로 싱글톤 레지스트리(Singleton Registry)이다. 스프링 컨테이너는 싱글톤을 생성하고, 관리하고 공급하는 컨테이너기이기도 하다. 싱긅톤 레지스트리의 장점은 다음과 같다.")]),t._v(" "),s("ul",[s("li",[t._v("static 메소드나 private 생성자 등을 사용하지 않아 객체지향적 개발을 할 수 있다.")]),t._v(" "),s("li",[t._v("테스트를 하기 편리하다.")])]),t._v(" "),s("p",[t._v("기본적으로 싱글톤이 멀티쓰레드 환경에서 서비스 형태 객체로 사용되기 위해서는 내부에 상태정보를 갖지 않는 무상태(Stateless) 방식으로 만들어져야 한다. 만약 여러 쓰레드드들이 동시에 상태를 접근하여 수정한다면 상당히 위험하기 때문이다."),s("br"),t._v("\n직접 싱글톤을 구현한다면 상당히 많은 단점들이 있겠지만, 스프링 프레임워크에서 직접 싱글톤으로 객체를 관리해주므로,ㅡ 우리는 더욱 객체지향적인 개발을 할 수 있게 된다.")])])}),[],!1,null,null,null);a.default=e.exports}}]);