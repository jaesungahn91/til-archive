(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{416:function(s,t,a){"use strict";a.r(t);var n=a(11),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_0531-0606"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0531-0606"}},[s._v("#")]),s._v(" 0531 - 0606")]),s._v(" "),a("h2",{attrs:{id:"_0531-hal-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0531-hal-json"}},[s._v("#")]),s._v(" 0531 - hal+json")]),s._v(" "),a("h3",{attrs:{id:"hypertext-application-language-hal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hypertext-application-language-hal"}},[s._v("#")]),s._v(" Hypertext Application Language (HAL)")]),s._v(" "),a("blockquote",[a("p",[s._v("HAL은 JSON 또는 XML 코드 내의 외부 리소스에 대한 링크와 같은 하이퍼 미디어를 정의하기위한 인터넷 초안 표준 규칙.")])]),s._v(" "),a("ul",[a("li",[s._v("MIME 유형 media type : "),a("code",[s._v("application/hal+json")])])]),s._v(" "),a("h3",{attrs:{id:"hal-예"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hal-예"}},[s._v("#")]),s._v(" HAL 예")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_links"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"self"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"href"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://example.com/api/book/hal-cookbook"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hal-cookbook"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HAL Cookbook"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("br"),s._v(" "),a("h2",{attrs:{id:"_0601-jmap으로-jvm-heap-상태-확인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0601-jmap으로-jvm-heap-상태-확인"}},[s._v("#")]),s._v(" 0601 - jmap으로 JVM heap 상태 확인")]),s._v(" "),a("p",[s._v("JDK에 포함된 jmap 명령으로 실행 중인 JVM의 heap 상태를 확인해보자.")]),s._v(" "),a("ul",[a("li",[s._v("JVM의 프로세스 ID 확인")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ jps\n또는\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" java\n")])])]),a("ul",[a("li",[s._v("JVM의 heap 상태를 확인할 때는 -heap 옵션을 사용한다.")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ jmap -heap PID\n")])])]),a("ul",[a("li",[s._v("-histo 옵션으로 클래스별 객체 수와 메모리 사용량 확인")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ jmap -histo:live PID "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v("\n")])])]),a("ul",[a("li",[s._v("-dump 옵션으로 heap dump 후, MAT 등으로 분석")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ jmap -dump:format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("b,file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("heap.PID.hprof PID\n")])])]),a("br"),s._v(" "),a("h2",{attrs:{id:"_0602-jenkins를-이용해서-배포하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0602-jenkins를-이용해서-배포하기"}},[s._v("#")]),s._v(" 0602 - jenkins를 이용해서 배포하기")]),s._v(" "),a("h3",{attrs:{id:"젠킨스의-큰-기능-두가지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#젠킨스의-큰-기능-두가지"}},[s._v("#")]),s._v(" 젠킨스의 큰 기능 두가지")]),s._v(" "),a("ul",[a("li",[s._v("Build & Deploy")]),s._v(" "),a("li",[s._v("Batch")])]),s._v(" "),a("h3",{attrs:{id:"젠킨스-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#젠킨스-설치"}},[s._v("#")]),s._v(" 젠킨스 설치")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jenkins")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" maven\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" jenkins\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start jenkins\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status jenkins\n")])])]),a("ul",[a("li",[s._v("초기 비밀번호 확인")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/lib/jenkins/secrets/initialAdminPassword\n")])])]),a("h3",{attrs:{id:"배포시-젠킨스-인스턴스만-접속할-수-있게-하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배포시-젠킨스-인스턴스만-접속할-수-있게-하기"}},[s._v("#")]),s._v(" 배포시 젠킨스 인스턴스만 접속할 수 있게 하기")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Publish over SSH 플러그인 설치(젠킨스 인스턴스)")])]),s._v(" "),a("li",[a("p",[s._v("공개키 & 개인키(젠킨스 인스턴스)")])])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("// 공개키 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 개인키 생성\nssh-keygen -t rsa -f ~/.ssh/id_rsa\n\n// 키 복사\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.ssh/id_rsa.pub    // 해당내용 복사\n")])])]),a("p",[s._v("*** gcp 환경에서는 authorized_keys 수정 불가능")]),s._v(" "),a("ul",[a("li",[s._v("공개키 등록(워커 인스턴스)")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("// authorized_keys 파일 끝에 공개키 복사\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.ssh/authorized_keys \n")])])]),a("ul",[a("li",[s._v("폴더들 권한 변경(워커 인스턴스)")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),s._v(" ~/.ssh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" ~/.ssh/authorized_keys\n")])])]),a("ul",[a("li",[s._v("Publish over SSH 설정 추가\n"),a("ul",[a("li",[s._v("개인키 및 워커 서버정보 추가")])])])]),s._v(" "),a("h3",{attrs:{id:"배포스크립트-관리-및-빌드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배포스크립트-관리-및-빌드"}},[s._v("#")]),s._v(" 배포스크립트 관리 및 빌드")]),s._v(" "),a("ul",[a("li",[s._v("item 추가\n"),a("ul",[a("li",[s._v("item 설정 및 빌드 후 조치 설정")]),s._v(" "),a("li",[s._v("관리 및 빌드 명령어")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" docker run -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":80 sung431/spring-boot-cpu-bound "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])])]),s._v(" "),a("li",[s._v("docker.sock 권한 변경")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("666")]),s._v(" /var/run/docker.sock\n")])])]),a("ul",[a("li",[s._v("build")]),s._v(" "),a("li",[s._v("console 확인")])]),s._v(" "),a("h3",{attrs:{id:"정리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정리"}},[s._v("#")]),s._v(" 정리")]),s._v(" "),a("ol",[a("li",[s._v("소스코드는 GitHub가 가지고 있다.")]),s._v(" "),a("li",[s._v("애플리케이션 실행은 인스턴스에서 되어야 한다.")]),s._v(" "),a("li",[s._v("인스턴스에서 바로 GitHub에 있는 소스코드를 가져와서 빌드 후 실행시킬 수도 있지만, 이러면 매번 인스턴스에 접속해야한다.")]),s._v(" "),a("li",[s._v("인스턴스가 여러개면 여러개의 인스턴스에 각각 다 접속해서 3번을 해야한다. 비효율적")]),s._v(" "),a("li",[s._v("중간에 Jenkins 라는 미들웨어를 두고, GitHub에서 소스코드를 가져와서 빌드하고 인스턴스에 배포/실행 할 수 있다.")]),s._v(" "),a("li",[s._v("5번을 위해 Jenkins에 GitHub 저장소 URL을 등록하고, 빌드 스크립트를 작성하고, 배포될 인스턴스에 SSH로 접속할 수 있도록 세팅한다.")]),s._v(" "),a("li",[s._v("6번까지 완료되었으면 이제 Jenkins에서 간단히 배포할 수 있다.")])]),s._v(" "),a("ul",[a("li",[s._v("명령어 정리")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("// "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". jenkins-instance 서버 명령어\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" maven\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" jenkins\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start jenkins\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status jenkins\n\n// "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". cpu-instance 서버 명령어\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" authorized_keys\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),s._v(" ~/.ssh\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" ~/.ssh/authorized_keys\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("666")]),s._v(" /var/run/docker.sock\n")])])]),a("br"),s._v(" "),a("h2",{attrs:{id:"_0605-bean-과-component-차이"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0605-bean-과-component-차이"}},[s._v("#")]),s._v(" 0605 - @Bean 과 @Component 차이")]),s._v(" "),a("h3",{attrs:{id:"bean-과-component-차이"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bean-과-component-차이"}},[s._v("#")]),s._v(" @Bean 과 @Component 차이")]),s._v(" "),a("ul",[a("li",[s._v("@Component는 Class Level에서, @Bean은 Method Level에서 적용된다.")]),s._v(" "),a("li",[s._v("@Bean의 경우 개발자가 컨트롤이 불가능한 외부 라이브러리들을 Bean으로 등록하고 싶은경우 사용, @Component는 직접 컨트롤이 가능한 Class들의 경우 사용")])]),s._v(" "),a("h3",{attrs:{id:"springbootapplication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springbootapplication"}},[s._v("#")]),s._v(" @SpringBootApplication")]),s._v(" "),a("ul",[a("li",[s._v("@SpringBootApplication은 @Configuration, @ComponentScan을 상속")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ElementType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TYPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RUNTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Documented")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Inherited")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@SpringBootConfiguration")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableAutoConfiguration")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ComponentScan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("excludeFilters "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FilterType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CUSTOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" classes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TypeExcludeFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FilterType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CUSTOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" classes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AutoConfigurationExcludeFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBootApplication")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);