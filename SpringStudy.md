### 핵심 라이브러리

* **spring-boot-starter-web**: 톰캣 웹 서버, 스프링 웹 MVC를 포함합니다. 웹 애플리케이션 개발의 핵심 라이브러리입니다.
* **spring-boot-starter-thymeleaf**: 타임리프 템플릿 엔진을 포함합니다. 동적인 웹 페이지를 만들 때 사용됩니다.
* **spring-boot-starter**: 스프링 부트와 스프링 코어를 포함하여 스프링 프레임워크의 핵심 기능을 제공합니다.
* **spring-boot-starter-logging**: SLF4J와 Logback을 포함하여 로깅 기능을 제공합니다. 최근에는 이 조합이 거의 표준처럼 사용됩니다.
* **JUnit**: 자바 진영에서 테스트를 위해 주로 사용하는 라이브러리입니다. 최근에는 JUnit5 버전을 많이 사용합니다.
* **Mockito, AssertJ**: 테스트를 편리하게 하도록 도와주는 라이브러리입니다.
* **spring-test**: 스프링과 통합하여 테스트할 수 있도록 도와주는 라이브러리입니다.

### 의존관계 관리

* **Gradle, Maven**: 최근 빌드 도구들은 라이브러리 간의 의존 관계를 자동으로 관리해 줍니다. 예를 들어, `spring-boot-starter-web`을 사용하면 이 라이브러리가 필요로 하는 다른 라이브러리들 (톰캣, 스프링 웹 MVC 등)도 자동으로 함께 가져옵니다.
* **IntelliJ**: IntelliJ 에디터에서 Gradle 탭을 열면 프로젝트의 의존 관계를 시각적으로 확인할 수 있습니다.

### 임베디드 웹 서버

* 예전에는 톰캣과 같은 웹 서버를 직접 설치하고 관리해야 했지만, 최근에는 스프링 부트와 같은 프레임워크에서 웹 서버를 내장하여 제공합니다. 따라서 별도의 웹 서버 설치 없이 간편하게 웹 애플리케이션을 개발하고 실행할 수 있습니다.

### 로그 라이브러리

* 실무에서는 시스템 아웃 프린트 대신 로그 라이브러리를 사용하여 로그를 남기는 것이 중요합니다. 로그를 통해 에러를 추적하고 시스템 상태를 분석할 수 있습니다.

## View 환경 설정

## 스프링 부트 환경 설정 및 템플릿 엔진 활용

### 웰컴 페이지 만들기

1. **정적 페이지:**
    - `src/main/resources/static` 폴더에 `index.html` 파일을 생성합니다.
    - 웹 브라우저에서 도메인만 입력하면 해당 페이지가 첫 화면으로 나타납니다.
    - 스프링 부트는 기본적으로 `index.html`을 웰컴 페이지로 인식합니다.
    - 정적 페이지는 프로그래밍 로직 없이 파일 내용을 그대로 웹 브라우저에 전달합니다.

2. **템플릿 엔진 (Thymeleaf):**
    - 동적인 웹 페이지를 만들기 위해 템플릿 엔진을 사용합니다.
    - Thymeleaf는 스프링 부트에서 기본적으로 지원하는 템플릿 엔진 중 하나입니다.
    - `src/main/resources/templates` 폴더에 `.html` 파일을 생성하고, Thymeleaf 문법을 사용하여 데이터를 동적으로 표현할 수 있습니다.

### 템플릿 엔진 동작 방식

1. 웹 브라우저에서 특정 URL을 요청합니다. (예: `/hello`)
2. 스프링 부트의 내장 톰캣 웹 서버가 요청을 받아 스프링에게 전달합니다.
3. 스프링은 `@GetMapping` 어노테이션을 사용하여 해당 URL에 매핑된 컨트롤러의 메서드를 실행합니다.
4. 컨트롤러 메서드는 모델 객체에 데이터를 담고, 템플릿 파일의 이름을 반환합니다.
5. 스프링의 뷰 리졸버는 반환된 템플릿 파일 이름을 기반으로 `src/main/resources/templates` 폴더에서 해당 파일을 찾습니다.
6. Thymeleaf 템플릿 엔진이 템플릿 파일을 처리하고, 모델 객체의 데이터를 이용하여 동적으로 HTML을 생성합니다.
7. 생성된 HTML이 웹 브라우저에 응답으로 전달됩니다.

### 추가 정보

* 스프링 부트는 다양한 기능을 제공하며, 필요한 정보는 스프링 공식 문서에서 검색하여 찾을 수 있습니다.
* `spring-boot-devtools` 라이브러리를 추가하면 서버 재시작 없이 뷰 파일 변경 사항을 확인할 수 있습니다.

## 스프링 부트 프로젝트 빌드 및 실행 방법

### 빌드 방법

1. IntelliJ 종료: IntelliJ 에디터를 완전히 종료합니다. (8080 포트 충돌 방지)
2. 터미널 열기: 프로젝트 폴더 (`~/hello-spring`)에서 터미널을 엽니다.
3. 빌드 명령 실행: 
    - Windows: `gradlew build`
    - Mac: `./gradlew build`
4. 빌드 결과 확인: `build/libs` 폴더에 JAR 파일이 생성됩니다. (예: `hello-spring-0.0.1-SNAPSHOT.jar`)

### 실행 방법

1. 터미널에서 JAR 파일 실행: `java -jar build/libs/hello-spring-0.0.1-SNAPSHOT.jar`
2. 웹 브라우저에서 확인: `localhost:8080` 접속하여 애플리케이션이 정상적으로 실행되는지 확인합니다.

### 추가 정보

* `gradlew clean build`: `build` 폴더를 삭제하고 처음부터 다시 빌드합니다. 빌드 오류 발생 시 유용합니다.
* JAR 파일 배포: JAR 파일만 서버에 복사하고 실행하면 스프링 부트 애플리케이션을 쉽게 배포할 수 있습니다.


## 스프링 웹 개발 기초: 정적 콘텐츠

### 웹 개발 방식

* **정적 콘텐츠:** 서버에서 별도의 처리 없이 파일을 그대로 웹 브라우저에 전달하는 방식
* **MVC와 템플릿 엔진:** 서버에서 프로그래밍 로직을 통해 HTML을 동적으로 생성하여 전달하는 방식 (JSP, Thymeleaf 등)
* **API:** JSON과 같은 데이터 형식으로 클라이언트에게 정보를 제공하는 방식 (모바일 앱, 서버 간 통신 등)

### 스프링 부트의 정적 콘텐츠 처리 방식

1. **기본 설정:** 스프링 부트는 `src/main/resources/static` 폴더에 있는 파일들을 정적 콘텐츠로 자동 제공합니다.
2. **요청 처리 과정:**
    - 웹 브라우저에서 정적 콘텐츠 URL을 요청합니다. (예: `/hello-static.html`)
    - 톰캣 웹 서버가 요청을 받아 스프링에게 전달합니다.
    - 스프링은 해당 URL에 매핑된 컨트롤러가 있는지 확인합니다.
    - 컨트롤러가 없으면 `src/main/resources/static` 폴더에서 해당 파일을 찾아 반환합니다.

### 예시

* `src/main/resources/static` 폴더에 `hello-static.html` 파일을 생성하고 내용을 작성합니다.
* 웹 브라우저에서 `localhost:8080/hello-static.html`에 접속하면 작성한 내용이 그대로 표시됩니다.

### 주의 사항

* 정적 콘텐츠는 서버에서 별도의 처리 없이 제공되므로, 동적인 변경이 필요한 경우에는 MVC와 템플릿 엔진 방식을 사용해야 합니다.



## 스프링 웹 개발 기초: MVC와 템플릿 엔진

### MVC 패턴

* **Model:** 데이터를 담당하는 부분
* **View:** 화면을 그리는 부분
* **Controller:** 비즈니스 로직 처리 및 모델과 뷰 연결

과거에는 JSP 파일 하나에 모든 로직이 섞여있었지만 (Model 1), 현재는 MVC 패턴을 통해 관심사를 분리하고 유지보수성을 높입니다.

### 컨트롤러 예시

```java
@GetMapping("hello-mvc")
public String helloMvc(@RequestParam("name") String name, Model model) {
    model.addAttribute("name", name);
    return "hello-template";
}
```

* `@GetMapping`: HTTP GET 요청을 처리하는 메서드임을 나타냅니다.
* `@RequestParam`: URL 파라미터 값을 받아옵니다.
* `Model`: 뷰에 전달할 데이터를 담는 객체입니다.

### 템플릿 엔진 (Thymeleaf) 예시

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Hello</title>
</head>
<body>
Hello <span th:text="${name}">name</span>!
</body>
</html>
```

* `th:text`: Thymeleaf 문법으로, 모델 객체의 데이터를 HTML에 삽입합니다.

### 동작 방식

1. 웹 브라우저에서 `/hello-mvc?name=스프링` URL을 요청합니다.
2. 톰캣 서버는 요청을 스프링에게 전달합니다.
3. 스프링은 `helloMvc` 메서드를 실행하고, `name` 파라미터 값을 가져옵니다.
4. 모델 객체에 `name` 속성을 추가하고, `hello-template` 뷰 이름을 반환합니다.
5. 뷰 리졸버는 `templates/hello-template.html` 파일을 찾아 Thymeleaf 엔진에게 전달합니다.
6. Thymeleaf 엔진은 모델 객체의 데이터를 사용하여 HTML을 생성하고 웹 브라우저에 전달합니다.
7. 웹 브라우저에는 "Hello 스프링!"이 표시됩니다.

### 추가 정보

* Thymeleaf는 HTML 파일을 직접 열어도 템플릿 구조를 확인할 수 있도록 도와줍니다.
* 템플릿 엔진을 사용하면 데이터를 동적으로 표현하고, 코드의 재사용성을 높일 수 있습니다.


## 스프링 웹 개발 기초: API 방식

### API 방식의 특징

* HTML을 반환하는 대신 JSON과 같은 데이터 형식으로 정보를 제공합니다.
* 뷰(View) 없이 데이터만 반환하므로, 프론트엔드와 백엔드의 역할 분리가 명확해집니다.
* 모바일 앱, SPA(Single Page Application), 서버 간 통신 등에 주로 사용됩니다.

### @ResponseBody 어노테이션

* 컨트롤러 메서드에 `@ResponseBody` 어노테이션을 붙이면, 반환 값이 HTTP 응답 본문(body)에 직접 포함됩니다.
* 문자열을 반환하면 해당 문자열이 그대로 응답으로 전송됩니다.
* 객체를 반환하면 기본적으로 JSON 형태로 변환되어 응답으로 전송됩니다.

### 컨트롤러 예시

```java
@GetMapping("hello-api")
@ResponseBody
public Hello helloApi(@RequestParam("name") String name) {
    Hello hello = new Hello();
    hello.setName(name + "!");
    return hello;
}
```

* `Hello` 클래스는 `name` 필드와 getter/setter 메서드를 가진 간단한 DTO(Data Transfer Object)입니다.

### 동작 방식

1. 웹 브라우저에서 `/hello-api?name=스프링` URL을 요청합니다.
2. 톰캣 서버는 요청을 스프링에게 전달합니다.
3. 스프링은 `helloApi` 메서드를 실행하고, `name` 파라미터 값을 가져옵니다.
4. `Hello` 객체를 생성하고, `name` 필드에 값을 설정합니다.
5. `@ResponseBody` 어노테이션 때문에 HTTP 메시지 컨버터가 동작합니다.
6. `Hello` 객체가 JSON 형태 (예: `{"name":"스프링!"}`)로 변환되어 웹 브라우저에 응답으로 전달됩니다.

### HTTP 메시지 컨버터

* 스프링 부트는 다양한 HTTP 메시지 컨버터를 제공하며, 요청의 `Accept` 헤더와 컨트롤러의 반환 타입에 따라 적절한 컨버터를 선택합니다.
* 기본적으로 JSON 처리는 Jackson 라이브러리를 사용합니다. (Gson 등 다른 라이브러리로 변경 가능)
* XML, YAML 등 다른 형식도 지원하며, 필요에 따라 커스터마이징할 수 있습니다.

### 정리

* 스프링 웹 개발에는 정적 콘텐츠, MVC/템플릿 엔진, API 방식이 있습니다.
* API 방식은 데이터만 주고받는 방식으로, 프론트엔드와 백엔드의 역할을 명확히 분리할 수 있습니다.
* `@ResponseBody` 어노테이션을 사용하여 객체를 JSON 형태로 쉽게 반환할 수 있습니다.
* 스프링 부트는 HTTP 메시지 컨버터를 통해 다양한 데이터 형식을 지원합니다.




## 스프링 웹 개발: 회원 관리 예제 비즈니스 요구사항 및 설계

### 비즈니스 요구사항

* **데이터:** 회원 ID, 이름
* **기능:** 회원 등록, 회원 조회
* **가정:** 데이터 저장소는 아직 미정 (RDB, NoSQL 등 다양한 옵션 고려 중)

### 개발 방향

* **단순성:** 스프링 생태계 학습을 위한 예제이므로, 최대한 단순한 비즈니스 로직으로 구성합니다.
* **확장성:** 데이터 저장소를 유연하게 변경할 수 있도록 인터페이스 기반으로 설계합니다.
* **테스트 주도 개발 (TDD):** JUnit 테스트 케이스를 먼저 작성하고, 기능 구현 및 검증을 반복합니다.

### 시스템 계층 구조

* **Controller:** 웹 MVC 컨트롤러나 API 제공
* **Service:** 핵심 비즈니스 로직 구현 (예: 회원 중복 가입 방지)
* **Repository:** 데이터 저장 및 조회 (인터페이스 기반 설계)
* **Domain:** 회원 정보를 담는 도메인 객체

### 클래스 의존 관계

* `MemberService` -> `MemberRepository` (인터페이스)
* `MemberRepository` -> `MemoryMemberRepository` (초기 개발 단계 구현체)

### 초기 개발 단계

* 데이터 저장소를 메모리 기반으로 구현하여 개발 속도를 높입니다.
* 데이터베이스 선정 후, `MemberRepository` 인터페이스를 구현하는 다른 클래스 (예: `JpaMemberRepository`)로 교체하여 실제 데이터베이스와 연동합니다.



## 회원 관리 예제 구현: 회원 도메인 및 리포지토리

### 회원 도메인 (`Member`)

* `id`: 시스템에서 관리하는 고유 ID (Long 타입)
* `name`: 회원 이름 (String 타입)
* Getter/Setter 메서드: 필드 값을 안전하게 접근하고 수정하기 위한 메서드

```java
public class Member {
    private Long id;
    private String name;

    // Getter, Setter 생략
}
```

### 회원 리포지토리 인터페이스 (`MemberRepository`)

* `save(Member member)`: 회원 저장 후 저장된 회원 객체 반환
* `findById(Long id)`: ID로 회원 검색 (Optional 반환)
* `findByName(String name)`: 이름으로 회원 검색 (Optional 반환)
* `findAll()`: 모든 회원 리스트 반환

```java
public interface MemberRepository {
    Member save(Member member);
    Optional<Member> findById(Long id);
    Optional<Member> findByName(String name);
    List<Member> findAll();
}
```

### 회원 리포지토리 구현체 (MemoryMemberRepository)

* `store`: 회원 정보를 저장하는 HashMap
* `sequence`: 회원 ID 생성을 위한 AtomicLong

```java
public class MemoryMemberRepository implements MemberRepository {
    private static Map<Long, Member> store = new HashMap<>();
    private static AtomicLong sequence = new AtomicLong(1);

    @Override
    public Member save(Member member) {
        member.setId(sequence.incrementAndGet()); // ID 증가 후 저장
        store.put(member.getId(), member);
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        return Optional.ofNullable(store.get(id)); // null 처리를 위한 Optional 사용
    }

    @Override
    public Optional<Member> findByName(String name) {
        return store.values().stream()
                .filter(member -> member.getName().equals(name)) // 이름으로 필터링
                .findAny(); // 일치하는 회원 반환 (Optional)
    }

    @Override
    public List<Member> findAll() {
        return new ArrayList<>(store.values()); // 모든 회원 리스트 반환
    }
}
```

### 설명

* `save`: 회원 ID를 자동 생성하고, HashMap에 저장합니다.
* `findById`, `findByName`: Optional을 사용하여 null 처리를 안전하게 합니다.
* `findAll`: HashMap의 모든 값을 리스트로 변환하여 반환합니다.

### 추가 정보

* 자바 8의 Optional: null 처리를 위한 기능으로, NullPointerException 예방에 효과적입니다.
* 자바 8의 Stream/Lambda: 간결하고 효율적인 코드 작성을 가능하게 합니다.
* 실제 프로젝트에서는 동시성 문제를 고려하여 ConcurrentHashMap, AtomicLong 등을 사용해야 합니다.



