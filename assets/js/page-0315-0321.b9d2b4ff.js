(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{676:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_0315-0321"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0315-0321"}},[t._v("#")]),t._v(" 0315 - 0321")]),t._v(" "),a("h2",{attrs:{id:"_0315-java-stream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0315-java-stream"}},[t._v("#")]),t._v(" 0315 - Java Stream")]),t._v(" "),a("blockquote",[a("p",[t._v("자바 컬렉션이나 배열의 원소를 간결하고 깔끔하게 가공하기 위해 사용.")])]),t._v(" "),a("h4",{attrs:{id:"선언"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#선언"}},[t._v("#")]),t._v(" 선언")]),t._v(" "),a("blockquote",[a("p",[t._v("배열, 컬렉션(list, set, map) 등을 스트림 형태로 만들기")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stream")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dataType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" streamName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arrName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stream")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dataType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" streamName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arrName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stream")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dataType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" streamName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"가공"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#가공"}},[t._v("#")]),t._v(" 가공")]),t._v(" "),a("blockquote",[a("p",[t._v("스트림을 필요한 형태로 가공하기")])]),t._v(" "),a("ul",[a("li",[t._v(".boxed()")]),t._v(" "),a("li",[t._v(".count()")]),t._v(" "),a("li",[t._v(".sorted() *(Comparator.reverseOrder())")]),t._v(" "),a("li",[t._v(".findFirst()")]),t._v(" "),a("li",[t._v(".skip(arrLength - 1).findFirst()")]),t._v(" "),a("li",[t._v(".skip(idx)")]),t._v(" "),a("li",[t._v(".limit(idx)")]),t._v(" "),a("li",[t._v(".distinct()")]),t._v(" "),a("li",[t._v(".max(dataType::compare)")]),t._v(" "),a("li",[t._v(".min(dataType::compare)")]),t._v(" "),a("li",[t._v(".average()")]),t._v(" "),a("li",[t._v(".sum()")]),t._v(" "),a("li",[t._v(".map((param) -> {code})")]),t._v(" "),a("li",[t._v(".forEach((param) -> {code})")]),t._v(" "),a("li",[t._v(".anyMatch((param) -> {code})")]),t._v(" "),a("li",[t._v(".noneMatch((param) -> {code})")]),t._v(" "),a("li",[t._v(".allMatch((param) -> {code})")]),t._v(" "),a("li",[t._v(".filter((param) -> {code})")]),t._v(" "),a("li",[t._v(".reduce(값, 데이터타입::sum)")])]),t._v(" "),a("h4",{attrs:{id:"반환"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#반환"}},[t._v("#")]),t._v(" 반환")]),t._v(" "),a("blockquote",[a("p",[t._v("가공한 값을 원하는 형태로 가져오기")])]),t._v(" "),a("ul",[a("li",[t._v(".toArray();")]),t._v(" "),a("li",[t._v(".collect(Collectors.toList());")]),t._v(" "),a("li",[t._v(".collect(Collectors.counting());")]),t._v(" "),a("li",[t._v('.collect(Collectors.joining("|"));')])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_0316-java-startswith-endswith"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0316-java-startswith-endswith"}},[t._v("#")]),t._v(" 0316 - Java startsWith(), endsWith()")]),t._v(" "),a("h4",{attrs:{id:"startswith-string-prefix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#startswith-string-prefix"}},[t._v("#")]),t._v(" startsWith(String prefix)")]),t._v(" "),a("ul",[a("li",[t._v('str.startsWith("checkStr");')])]),t._v(" "),a("h4",{attrs:{id:"endswith-string-suffix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endswith-string-suffix"}},[t._v("#")]),t._v(" endsWith(String suffix);")]),t._v(" "),a("ul",[a("li",[t._v('str.endsWith("checkStr");')])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_0317-cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0317-cors"}},[t._v("#")]),t._v(" 0317 - CORS")]),t._v(" "),a("blockquote",[a("p",[t._v("교차 출처 리소스 공유(Cross-Origin Resource Sharing)")])]),t._v(" "),a("h4",{attrs:{id:"simple-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-request"}},[t._v("#")]),t._v(" Simple Request")]),t._v(" "),a("p",[t._v("-> 응답 헤더에 "),a("code",[t._v("Access-Control-Allow-Rogin")]),t._v("값만 세팅 해주면 된다")]),t._v(" "),a("h4",{attrs:{id:"preflight-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preflight-request"}},[t._v("#")]),t._v(" Preflight Request")]),t._v(" "),a("blockquote",[a("p",[t._v("OPTIONS 방식으로 먼저 요청을 날리고, 그 이후에 실제 요청을 함.")])]),t._v(" "),a("ul",[a("li",[t._v("응답 헤더에 "),a("code",[t._v("Access-Control-Allow-Methods")]),t._v("에 "),a("code",[t._v("OPTIONS")]),t._v(" 값 설정")]),t._v(" "),a("li",[t._v("응답 헤더에 "),a("code",[t._v("Access-Control-Allow-Headers")]),t._v("에 "),a("code",[t._v("content-type")]),t._v(" 값 설정")]),t._v(" "),a("li",[t._v("추가 적으로 CORS의 성능 효율을 위해서 "),a("code",[t._v("Access-Control-Max-Age")]),t._v(" 값을 설정 할 수 있다")])]),t._v(" "),a("h4",{attrs:{id:"sptring-boot-java-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sptring-boot-java-config"}},[t._v("#")]),t._v(" Sptring boot Java Config")]),t._v(" "),a("ul",[a("li",[t._v("WebMvcConfigurer를 통해 적용 방식")])]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MvcConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebMvcConfigurer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addCorsMappings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsRegistry")]),t._v(" registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/**"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("allowedOrigins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("allowedMethods")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("@CrossOrigin 어노테이션을 통해 적용하는 방식")])]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//해당 컨트롤러의 모든 요청에 대한 접근 허용(아래 도메인 두개에 대해서만..)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@CrossOrigin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("origins "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:18080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8180"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorssampleApplication")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//아래와 같이 특정 메소드에만 적용할수도 있다.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//@CrossOrigin(origins = {"http://localhost:18080", "http://localhost:8180" })')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/my"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("my")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorssampleApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"_0318-filter와-interceptor의-차이"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0318-filter와-interceptor의-차이"}},[t._v("#")]),t._v(" 0318 - Filter와 Interceptor의 차이")]),t._v(" "),a("blockquote",[a("p",[t._v("Filter와 Interceptor는 실행되는 시점이 다르다."),a("br"),t._v("\nFilter는 Web Application에 등록을 하고, Interceptor는 Spring의 Context에 등록을 한다.")])]),t._v(" "),a("h4",{attrs:{id:"interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interface"}},[t._v("#")]),t._v(" Interface")]),t._v(" "),a("ul",[a("li",[t._v("Filter")])]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Filter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterChain")]),t._v(" chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("HandlerInterceptor")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HandlerInterceptor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preHandle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postHandle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),t._v(" mav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterCompletion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServeletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Filter는 Servlert에서 처리하기 전후를 다룰 수 있다."),a("br"),t._v("\nInterceptor는 Handler를 실행하기전, 실행한 후, view를 렌더링한 후 등, Servlert내에서도 메서드에 따라 실행 시점을 다르게 가져간다.")])]),t._v(" "),a("ul",[a("li",[t._v("Interceptor에서만 할 수 있는것\n"),a("ul",[a("li",[t._v("AOP 흉내를 낼 수 있다. "),a("code",[t._v("@RequestMapping")]),t._v(" 선언으로 요청에 대한 "),a("code",[t._v("HandlerMethod(@Controller의 메서드)")]),t._v("가 정해졌다면, handler라는 이름으로 "),a("code",[t._v("HandlerMethod")]),t._v("가 들어온다\n"),a("code",[t._v("HandlerMethod")]),t._v("로 메서드 시그니처 등 추가적인 정보를 파악해서 로직 실행 여부를 판단할 수 있다")]),t._v(" "),a("li",[t._v("View를 렌더링하기 전에 추가 작업을 할 수 있다")])])]),t._v(" "),a("li",[t._v("Filter에서만 할 수 있는 것\n"),a("code",[t._v("ServletRequest")]),t._v(" 혹은 "),a("code",[t._v("ServletResponse")]),t._v("를 교체할 수 있다. 아래와 같은 일이 가능하다")])]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SomeFilter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Filter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterChain")]),t._v(" chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomServletRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("-> 커스터마이징 된 ServletRequest를 사용할 때")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_0319-git-merge와-rebase-차이점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0319-git-merge와-rebase-차이점"}},[t._v("#")]),t._v(" 0319 - Git Merge와 Rebase 차이점")]),t._v(" "),a("blockquote",[a("p",[t._v("Merger는 branch를 통합하는 것이고, Rebase는 branch의 base를 옮긴다는 개념의 차이")])]),t._v(" "),a("img",{attrs:{src:"https://blog.kakaocdn.net/dn/cofZo0/btqBkOJybm6/RshCv0OqsydpuNCRPcIxu1/img.png",width:"300px"}}),t._v(" "),a("h4",{attrs:{id:"rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[t._v("#")]),t._v(" Rebase")]),t._v(" "),a("ul",[a("li",[t._v("해당 branch의 base를 재설정하고 커밋을 새롭게 정렬")]),t._v(" "),a("li",[t._v("commit tree가 달라진다 즉 git history를 정리 할 수 있다")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_0321-call-by-value와-call-by-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0321-call-by-value와-call-by-reference"}},[t._v("#")]),t._v(" 0321 - Call by value와 Call by reference")]),t._v(" "),a("h4",{attrs:{id:"call-by-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-by-value"}},[t._v("#")]),t._v(" call by value")]),t._v(" "),a("blockquote",[a("p",[t._v("값에 의한 호출")])]),t._v(" "),a("p",[t._v("함수가 호출될때, 메모리 공간 안에서는 함수를 위한 별도의 임시공간이 생성됨(종료 시 삭제)"),a("br"),t._v("\ncall by value 호출 방식은 함수 호출 시 전달되는 변수 값을 복사해서 함수 인자로 전달함"),a("br"),t._v("\n이때 복사된 인자는 함수 안에서 지역적으로 사용되기 때문에 local value 속성을 가짐"),a("br"),t._v(" "),a("code",[t._v("따라서, 함수 안에서 인자 값이 변경되더라도, 외부 변수 값은 변경 안됨")])]),t._v(" "),a("h4",{attrs:{id:"call-by-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-by-reference"}},[t._v("#")]),t._v(" call by reference")]),t._v(" "),a("blockquote",[a("p",[t._v("참조에 의한 호출")])]),t._v(" "),a("p",[t._v("call by reference 호출 방식은 함수 호출 시 인자로 전달되는 변수의 레퍼런스를 전달함"),a("br"),t._v("\n따라서 함수 안에서 인자 값이 변경되면, 아규먼트로 전달된 객체의 값도 변경됨")]),t._v(" "),a("h3",{attrs:{id:"java-call-by-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-call-by-reference"}},[t._v("#")]),t._v(" Java call by reference")]),t._v(" "),a("p",[t._v("사실 자바는 Call by value이냐, Call by reference이냐 로 의견이 분분\n더 알아봐야겠다")])])}),[],!1,null,null,null);s.default=e.exports}}]);