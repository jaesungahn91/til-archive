(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{680:function(a,t,e){"use strict";e.r(t);var s=e(2),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_0510-0516"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0510-0516"}},[a._v("#")]),a._v(" 0510 - 0516")]),a._v(" "),e("h2",{attrs:{id:"_0510-mac-java-여러버전-설치-jenv-관리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0510-mac-java-여러버전-설치-jenv-관리"}},[a._v("#")]),a._v(" 0510 - (Mac) Java 여러버전 설치 + jenv 관리")]),a._v(" "),e("h3",{attrs:{id:"homebrew-자바-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-자바-설치"}},[a._v("#")]),a._v(" homebrew 자바 설치")]),a._v(" "),e("ol",[e("li",[a._v("homebrew 업데이트")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ brew update\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("java 설치")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("// 공식 저장소 외에 다른 저장소 사용\n$ brew tap adoptopenjdk/openjdk\n// --cask 옵션으로 변경\n$ brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" adoptopenjdk11 --cask\n// 확인\n$ brew list --cask\n")])])]),e("p",[a._v("설치경로 : "),e("code",[a._v("/Library/Java/JavaVirtualMachines/")]),e("br"),a._v("\n설치되어 있는 자바 버전 확인하기 : "),e("code",[a._v("/usr/libexec/java_home -V")])]),a._v(" "),e("h3",{attrs:{id:"jenv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenv"}},[a._v("#")]),a._v(" Jenv")]),a._v(" "),e("h4",{attrs:{id:"jenv-커맨드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenv-커맨드"}},[a._v("#")]),a._v(" Jenv 커맨드")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ jenv versions\n$ jenv "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v("\n$ jenv global\n$ jenv "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" /Library/Java/JavaVirtualMachines/adoptopenjdk-10.jdk/Contents/Home\n")])])]),e("br"),a._v(" "),e("h2",{attrs:{id:"_0511-mac-postgressql-설치-및-실행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0511-mac-postgressql-설치-및-실행"}},[a._v("#")]),a._v(" 0511 - (Mac) PostgresSQL 설치 및 실행")]),a._v(" "),e("h3",{attrs:{id:"설치-및-실행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설치-및-실행"}},[a._v("#")]),a._v(" 설치 및 실행")]),a._v(" "),e("ol",[e("li",[a._v("homebrew 설치")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("brew install postgresql\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("실행")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pg_ctl -D /usr/local/var/postgres start && brew services start postgresql\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("확인")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("postgres -V\n")])])]),e("br"),a._v(" "),e("h2",{attrs:{id:"_0512-오늘-배운-몇가지-intellij-단축키"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0512-오늘-배운-몇가지-intellij-단축키"}},[a._v("#")]),a._v(" 0512 - 오늘 배운 몇가지 IntelliJ 단축키")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("command + option + m")]),a._v(" : 일부 코드 메서드로 변환")]),a._v(" "),e("li",[e("code",[a._v("command + n")]),a._v(" : generate")]),a._v(" "),e("li",[e("code",[a._v("control + option + O")]),a._v(": import문 정리")]),a._v(" "),e("li",[e("code",[a._v("cmmand + option + L")]),a._v(": 코드 자동 정렬")])]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"_0516-spring-security"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0516-spring-security"}},[a._v("#")]),a._v(" 0516 - Spring Security")]),a._v(" "),e("blockquote",[e("p",[a._v("애플리케이션의 보안(인증과 권한, 인가 등)을 담당하는 스프링 하위 프레임워크"),e("br"),a._v("\n'인증'과 '권한'에 대한 부분을 Filter 흐름에 따라 처리")])]),a._v(" "),e("h3",{attrs:{id:"인증과-인가"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#인증과-인가"}},[a._v("#")]),a._v(" 인증과 인가")]),a._v(" "),e("ul",[e("li",[a._v("인증(Authentication): 해당 사용자가 본인이 맞는지 확인 절차")]),a._v(" "),e("li",[a._v("인가(Authorization): 인증된 사용자가 요청한 자원에 접근 가능한지를 결정하는 절차")])]),a._v(" "),e("p",[a._v("* 인증과 인가를 위해 Principal, Credential을 사용")]),a._v(" "),e("ul",[e("li",[a._v("Principal(접근 주체): 보호받는 Resource에 접근하는 대상")]),a._v(" "),e("li",[a._v("Credential(비밀번호): Resource에 접근하는 대상의 비밀번호")])]),a._v(" "),e("h3",{attrs:{id:"주요-모듈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#주요-모듈"}},[a._v("#")]),a._v(" 주요 모듈")]),a._v(" "),e("ul",[e("li",[a._v("Authentication")]),a._v(" "),e("li",[a._v("SecurityContext")]),a._v(" "),e("li",[a._v("SecurityContextHolder")]),a._v(" "),e("li",[a._v("UsernamePasswordAuthenticationToken")]),a._v(" "),e("li",[a._v("AuthenticationProvider")]),a._v(" "),e("li",[a._v("AuthenticatonManager")]),a._v(" "),e("li",[a._v("UserDetails")]),a._v(" "),e("li",[a._v("UserDetailsService")]),a._v(" "),e("li",[a._v("Password Encoding")]),a._v(" "),e("li",[a._v("GrantedAuthority")])])])}),[],!1,null,null,null);t.default=r.exports}}]);