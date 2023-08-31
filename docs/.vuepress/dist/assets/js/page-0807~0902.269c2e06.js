(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{752:function(a,s,t){"use strict";t.r(s);var n=t(2),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_0807-0902"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0807-0902"}},[a._v("#")]),a._v(" 0807 ~ 0902")]),a._v(" "),t("h2",{attrs:{id:"_0808-spring-boot-설정에-따른-동적-빈-생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0808-spring-boot-설정에-따른-동적-빈-생성"}},[a._v("#")]),a._v(" 0808 - Spring Boot 설정에 따른 동적 빈 생성")]),a._v(" "),t("p",[a._v("스케줄러를 조건부로 등록하기 위해 학습")]),a._v(" "),t("h3",{attrs:{id:"_1-value-boolean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-value-boolean"}},[a._v("#")]),a._v(" 1. @Value boolean")]),a._v(" "),t("p",[a._v("@Value를 통해 properties 값을 주입 받아 처리(동적 빈등록이랑은 무관)")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableScheduling")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScheduledJobs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${jobs.enabled:true}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" isEnabled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Scheduled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fixedDelay "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("60000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cleanTempDirectory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("isEnabled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// do work here")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("h3",{attrs:{id:"_2-conditionalonproperty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-conditionalonproperty"}},[a._v("#")]),a._v(" 2. @ConditionalOnProperty")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableScheduling")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScheduledJobs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ConditionalOnProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"jobs.enabled"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" matchIfMissing "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" havingValue "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScheduledJob")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scheduledJob")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScheduledJob")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("h3",{attrs:{id:"_3-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-profile"}},[a._v("#")]),a._v(" 3. @Profile")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Profile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"prod"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// or @Profile("!prod")')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScheduledJob")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scheduledJob")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScheduledJob")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"_4-conditional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-conditional"}},[a._v("#")]),a._v(" 4. @Conditional")]),a._v(" "),t("p",[a._v("@Profile 은 내부적으로 @Conditional을 사용")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CustomCondition")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Condition")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("matches")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConditionContext")]),a._v(" context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AnnotatedTypeMetadata")]),a._v(" metadata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" property "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getEnvironment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"jobs.enabled"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"prod"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("property"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("ul",[t("li",[a._v('property에 "jobs.enabled"의 key가 "prod"이라면 빈 등록')])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Conditional")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CustomCondition")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScheduledJob")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scheduledJob")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScheduledJob")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("br"),a._v(" "),t("h2",{attrs:{id:"_0829-load-average"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0829-load-average"}},[a._v("#")]),a._v(" 0829 - Load Average")]),a._v(" "),t("h4",{attrs:{id:"load-average란"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-average란"}},[a._v("#")]),a._v(" Load Average란")]),a._v(" "),t("p",[a._v("Load Average란 얼마나 많은 프로세스가 실행 중 혹은 실행 대기중인지 의미하는 수치이다. 조금더 자세히 말해 프로세스 상태 중에서 R(Running)과 D(Uninterruptible waiting)상태 프로세스 개수를 1분, 5분, 15분마다 평균낸 값을 말한다. 즉, 시스템의 부하를 평균치로 알려주는 값이다. 일반적으로 1분 값보다는 5분, 15분의 값을 많이 사용한다.")]),a._v(" "),t("h4",{attrs:{id:"프로세스-상태-r-running-이란"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-상태-r-running-이란"}},[a._v("#")]),a._v(" 프로세스 상태 R(Running)이란?")]),a._v(" "),t("ul",[t("li",[a._v("CPU에서 수행이되고 있거나 실행가능한 상태를 말한다.")])]),a._v(" "),t("h4",{attrs:{id:"프로세스-상태-d-uninterruptible-waiting-이란"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-상태-d-uninterruptible-waiting-이란"}},[a._v("#")]),a._v(" 프로세스 상태 D(Uninterruptible waiting)이란?")]),a._v(" "),t("ul",[t("li",[a._v("I/O에 대해 대기하는 상태로 다른 어떤일도 할 수 없음을 의미한다.")])]),a._v(" "),t("h4",{attrs:{id:"load-average-확인-명령어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-average-확인-명령어"}},[a._v("#")]),a._v(" Load Average 확인 명령어")]),a._v(" "),t("ul",[t("li",[a._v("Load Average는 "),t("code",[a._v("uptime")]),a._v(" 명령어로 확인 가능하며 이는 /proc/loadavg 파일을 열어서 그 파일의 내용을 읽고 화면에 출력해주는 명령어이다. Load Average 값을 직접 계산하는것은 아니고 커널이 미리 준비해둔 /proc/loadavg 파일을 읽어서 보여주는 명령어이다.")]),a._v(" "),t("li",[t("code",[a._v("uptime")]),a._v(" 뿐만아니라 "),t("code",[a._v("top")]),a._v(", "),t("code",[a._v("cat /proc/loadavg")]),a._v(" 으로 확인 가능하다.")]),a._v(" "),t("li",[t("code",[a._v("uptime")]),a._v(" command")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ uptime 10:23:10 up 3 days, 12:06, 1 user, load average: 1.41, 1.37, 1.35\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("첫번째 값 : 1분 동안의 평균값")]),a._v(" "),t("li",[a._v("두번째 값 : 5분 동안의 평균값")]),a._v(" "),t("li",[a._v("세번째 값 : 15분 동안의 평균값")])]),a._v(" "),t("h4",{attrs:{id:"load-average-값의-의미"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-average-값의-의미"}},[a._v("#")]),a._v(" Load Average 값의 의미")]),a._v(" "),t("ul",[t("li",[a._v("Load Average 값은 CPU의 코어수에 따라서 숫자가 달라지며 각 CPU 코어가 100% Load가 발생할 경우, 1코어는 값 1, 2코어는 2, 4코어는 값 4로 표현이 된다. 만약 Load Average가 4라면, 시스템이 CPU 코어 4개를 100% 사용하고 있거나, CPU 코어 1개를 400% 사용하고 있다는 의미이다.")]),a._v(" "),t("li",[a._v("시스템 운영시 권장하는 에버리지는 70%인 0.7 이하이며 그 이상일 경우 시스템에 이상이 없는지 반드시 체크해야 한다.")])]),a._v(" "),t("br"),a._v(" "),t("h2",{attrs:{id:"_0831"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0831"}},[a._v("#")]),a._v(" 0831 -")]),a._v(" "),t("h4",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])])])}),[],!1,null,null,null);s.default=e.exports}}]);