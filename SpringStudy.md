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



## 스프링 웹 개발: 회원 관리 예제 테스트 케이스 작성

### 테스트 케이스의 필요성

* 개발한 기능이 정상적으로 동작하는지 검증합니다.
* 메인 메서드나 컨트롤러를 통한 테스트는 준비 및 반복 실행이 어렵고, 여러 테스트를 한 번에 실행하기 어렵습니다.
* JUnit 프레임워크를 사용하면 테스트 코드를 작성하고 실행하여 효율적으로 검증할 수 있습니다.

### 테스트 케이스 작성 방법

1. 테스트 클래스 생성: 테스트 대상 클래스와 동일한 패키지에 `클래스명Test` 형식으로 클래스를 생성합니다. (예: `MemoryMemberRepositoryTest`)
2. `@Test` 어노테이션 추가: 테스트 메서드에 `@Test` 어노테이션을 붙여 테스트 메서드임을 명시합니다.
3. 테스트 코드 작성:
    - 테스트 대상 객체 생성 및 데이터 준비
    - 테스트 대상 메서드 실행
    - 예상 결과와 실제 결과 비교 (Assertion)

### 테스트 예시 (MemoryMemberRepositoryTest)

```java
class MemoryMemberRepositoryTest {
    MemoryMemberRepository repository = new MemoryMemberRepository();

    @AfterEach // 각 테스트 메서드 실행 후 실행되는 메서드
    public void afterEach() {
        repository.clearStore(); // 테스트 데이터 초기화
    }

    @Test
    public void save() {
        // given: 데이터 준비
        Member member = new Member();
        member.setName("spring");

        // when: 메서드 실행
        repository.save(member);

        // then: 결과 검증
        Member result = repository.findById(member.getId()).get();
        assertThat(member).isEqualTo(result);
    }

    @Test
    public void findByName() {
        // given
        Member member1 = new Member();
        member1.setName("spring1");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("spring2");
        repository.save(member2);

        // when
        Member result = repository.findByName("spring1").get();

        // then
        assertThat(result).isEqualTo(member1);
    }

    // findAll 테스트 생략
}
```

### 설명

* `@AfterEach`: 각 테스트 메서드 실행 후 저장소를 초기화하여 테스트 간 데이터 의존성을 제거합니다.
* `assertThat`: AssertJ 라이브러리의 Assertion 메서드로, 예상 결과와 실제 결과를 비교합니다.
* `isEqualTo`: 두 객체의 값이 같은지 비교합니다.

### 추가 정보

* TDD(Test-Driven Development): 테스트 코드를 먼저 작성하고 구현하는 개발 방식으로, 코드 품질 향상에 도움이 됩니다.
* 테스트는 순서에 의존하지 않고 독립적으로 실행되어야 합니다.
* 빌드 도구를 통해 여러 테스트를 한 번에 실행하고 결과를 확인할 수 있습니다.





## 스프링 웹 개발: 회원 관리 예제 서비스 클래스 구현

### 서비스 클래스 (`MemberService`)

* 회원 리포지토리를 사용하여 비즈니스 로직을 처리합니다.
* 핵심 비즈니스 로직을 담당하며, 컨트롤러와 리포지토리 사이의 중간 역할을 수행합니다.
* 비즈니스 용어를 사용하여 메서드 이름을 정의합니다. (예: `join`, `findMembers`)

```java
public class MemberService {
    private final MemberRepository memberRepository = new MemoryMemberRepository(); // 실제 구현체 주입

    /**
     * 회원 가입
     */
    public Long join(Member member) {
        validateDuplicateMember(member); // 중복 회원 검증
        memberRepository.save(member);
        return member.getId();
    }

    /**
     * 전체 회원 조회
     */
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    /**
     * ID로 회원 조회
     */
    public Optional<Member> findOne(Long memberId) {
        return memberRepository.findById(memberId);
    }

    /**
     * 중복 회원 검증
     */
    private void validateDuplicateMember(Member member) {
        memberRepository.findByName(member.getName())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }
}
```

### 설명

* `join`: 회원 가입 메서드
    - `validateDuplicateMember` 메서드를 호출하여 중복 회원 검증을 수행합니다.
    - 중복 회원이 없으면 `memberRepository.save`를 호출하여 회원 정보를 저장하고, 저장된 회원 ID를 반환합니다.
    - 중복 회원이 있으면 `IllegalStateException` 예외를 발생시킵니다.
* `findMembers`: 전체 회원 조회 메서드
    - `memberRepository.findAll`을 호출하여 모든 회원 리스트를 반환합니다.
* `findOne`: ID로 회원 조회 메서드
    - `memberRepository.findById`를 호출하여 해당 ID의 회원 정보를 Optional로 반환합니다.
* `validateDuplicateMember`: 중복 회원 검증 메서드 (private)
    - `memberRepository.findByName`으로 동일한 이름의 회원이 있는지 확인합니다.
    - 동일한 이름의 회원이 존재하면 `IllegalStateException` 예외를 발생시킵니다.

### 추가 정보

* `MemberRepository` 인터페이스를 사용하여 데이터 저장소 구현체를 쉽게 변경할 수 있습니다. (예: `MemoryMemberRepository` -> `JpaMemberRepository`)
* `Optional`을 사용하여 null 처리를 안전하게 합니다.
* `ifPresent`: Optional 객체에 값이 있을 경우에만 실행되는 메서드입니다.





## 스프링 웹 개발: 회원 관리 예제 테스트 케이스 개선 및 DI 소개

### 테스트 케이스 자동 생성

* IntelliJ 단축키: `Cmd + Shift + T` (Mac) 또는 `Ctrl + Shift + T` (Windows)를 사용하여 테스트 클래스를 자동으로 생성할 수 있습니다.
* 테스트 클래스 생성 시 JUnit5 라이브러리를 선택하고, 테스트할 메서드를 선택하여 자동으로 테스트 코드 틀을 만들 수 있습니다.

### 테스트 코드 작성 및 개선

* given-when-then 패턴: 테스트 코드의 가독성을 높이기 위해 주석을 활용하여 given (데이터 준비), when (메서드 실행), then (결과 검증) 단계로 구분합니다.
* 테스트 메서드 분리: 각각의 기능을 독립적으로 테스트하기 위해 테스트 메서드를 분리합니다.
* `@AfterEach` 어노테이션: 각 테스트 메서드 실행 후 데이터를 초기화하여 테스트 간의 의존성을 제거합니다.
* 예외 상황 테스트: `assertThrows` 메서드를 사용하여 예외 발생 여부를 검증합니다.

### 의존성 주입 (Dependency Injection, DI)

* 기존 코드: `MemberService` 클래스 내부에서 `MemoryMemberRepository` 객체를 직접 생성했습니다.
* 개선된 코드: `MemberService` 클래스의 생성자를 통해 `MemberRepository` 객체를 외부에서 주입받도록 변경했습니다.

```java
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) { // 생성자를 통한 의존성 주입
        this.memberRepository = memberRepository;
    }

    // ... (나머지 코드는 동일)
}
```

* 테스트 코드에서 `MemoryMemberRepository` 객체를 생성하고, `MemberService` 생성자에 주입하여 테스트합니다.

```java
@BeforeEach
public void beforeEach() {
    memberRepository = new MemoryMemberRepository();
    memberService = new MemberService(memberRepository);
}
```

### DI의 장점

* 객체 간의 결합도를 낮춰 유연하고 확장 가능한 코드를 작성할 수 있습니다.
* 테스트 코드 작성 시 테스트 대상 객체의 의존성을 쉽게 변경하거나 목(Mock) 객체를 주입하여 테스트를 용이하게 합니다.

### 추가 정보

* DI는 스프링 프레임워크의 핵심 개념 중 하나입니다.





## 스프링 웹 개발: 회원 관리 예제 - 스프링 빈과 의존관계 설정

### 스프링 컨테이너와 스프링 빈

* **스프링 컨테이너:** 스프링 빈을 생성하고 관리하는 역할을 합니다.
* **스프링 빈:** 스프링 컨테이너에 등록된 객체로, 스프링의 다양한 기능을 활용할 수 있습니다.
* **@Controller, @Service, @Repository**: 스프링 빈으로 등록될 클래스에 붙이는 어노테이션입니다.

### 컴포넌트 스캔과 자동 의존관계 설정

* **컴포넌트 스캔:** 스프링 부트 애플리케이션 시작 시 특정 패키지 하위의 클래스들을 탐색하여 스프링 빈으로 자동 등록합니다.
* **자동 의존관계 설정:** `@Autowired` 어노테이션을 사용하여 스프링 컨테이너에 등록된 빈을 자동으로 주입합니다.

### 컴포넌트 스캔의 동작 방식

1. 스프링 부트 애플리케이션 시작 시 `@SpringBootApplication` 어노테이션이 붙은 클래스를 기준으로 컴포넌트 스캔을 시작합니다.
2. 해당 패키지 및 하위 패키지에서 `@Component`, `@Controller`, `@Service`, `@Repository` 어노테이션이 붙은 클래스를 찾습니다.
3. 찾은 클래스의 인스턴스를 생성하고 스프링 컨테이너에 등록합니다.
4. `@Autowired` 어노테이션이 붙은 필드나 생성자에 스프링 컨테이너에 등록된 빈을 주입합니다.

### 예시 코드

```java
@Controller // 스프링 빈으로 등록
public class MemberController {
    private final MemberService memberService;

    @Autowired // 생성자 주입
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    // ...
}
```

### 싱글톤(Singleton)

* 스프링 빈은 기본적으로 싱글톤으로 등록됩니다.
* 싱글톤: 애플리케이션 전체에서 해당 빈의 인스턴스가 하나만 생성되어 공유됩니다.
* 메모리 사용량을 줄이고, 객체 생성 비용을 절약할 수 있습니다.

### 주의 사항

* `@Component` 어노테이션을 아무 곳에나 사용하면 컴포넌트 스캔 대상이 되어 불필요한 빈이 등록될 수 있습니다.
* 컴포넌트 스캔은 기본적으로 `@SpringBootApplication` 어노테이션이 붙은 클래스의 패키지 및 하위 패키지만 탐색합니다.
* 다른 패키지의 컴포넌트를 스캔하려면 `@ComponentScan` 어노테이션을 사용하여 스캔 범위를 지정해야 합니다.


## 스프링 웹 개발: 회원 관리 예제 - 스프링 빈 등록 방법

### 스프링 빈 등록 방법

* **컴포넌트 스캔 & 자동 의존관계 설정:** `@Component`, `@Controller`, `@Service`, `@Repository` 어노테이션을 사용하여 스프링이 자동으로 빈을 등록하고 의존관계를 설정합니다.
* **자바 코드로 직접 스프링 빈 등록:** `@Configuration` 어노테이션을 사용하여 설정 클래스를 만들고, `@Bean` 어노테이션을 붙인 메서드를 통해 직접 스프링 빈을 등록합니다.

### 자바 코드로 직접 스프링 빈 등록 예시

```java
@Configuration // 설정 클래스
public class SpringConfig {

    @Bean // 스프링 빈 등록
    public MemberService memberService() {
        return new MemberService(memberRepository());
    }

    @Bean
    public MemberRepository memberRepository() {
        return new MemoryMemberRepository();
    }
}
```

### DI (Dependency Injection) 방식

* **생성자 주입:** 생성자를 통해 의존 관계를 주입하는 방식 (권장)
* **필드 주입:** 필드에 `@Autowired` 어노테이션을 사용하여 의존 관계를 주입하는 방식 (권장하지 않음)
* **세터 주입:** 세터 메서드에 `@Autowired` 어노테이션을 사용하여 의존 관계를 주입하는 방식 (권장하지 않음)

### 생성자 주입의 장점

* **불변성:** final 키워드를 사용하여 객체 생성 후 의존 관계를 변경할 수 없도록 합니다.
* **누락 방지:** 의존 관계가 누락되면 컴파일 오류가 발생하여 조기에 문제를 발견할 수 있습니다.
* **테스트 용이성:** 테스트 시 목(Mock) 객체를 쉽게 주입할 수 있습니다.

### 스프링 빈 등록 시 주의 사항

* `@Autowired`는 스프링 컨테이너가 관리하는 빈에만 사용할 수 있습니다.
* 직접 생성한 객체나 스프링 빈이 아닌 객체에는 `@Autowired`를 사용할 수 없습니다.

### 스프링 빈과 싱글톤

* 스프링 빈은 기본적으로 싱글톤으로 등록되어 애플리케이션 전체에서 하나의 인스턴스만 공유됩니다.
* 특별한 경우를 제외하고는 싱글톤 방식을 사용하는 것이 좋습니다.



## 스프링 웹 개발: 회원 관리 예제 - 홈 화면 추가

### 홈 화면 기능

* 회원 가입 페이지로 이동하는 링크 제공
* 회원 목록 페이지로 이동하는 링크 제공

### `HomeController` 클래스

```java
@Controller
public class HomeController {

    @GetMapping("/") // 루트 URL 요청 시 호출
    public String home() {
        return "home"; // home.html 뷰 반환
    }
}
```

* `@GetMapping("/")`: 루트 URL (`/`)에 대한 GET 요청을 처리합니다.
* `home()`: `home` 문자열을 반환하여 `home.html` 템플릿을 렌더링합니다.

### `home.html` 템플릿

```html
<!DOCTYPE HTML>
<html xmlns:th="http://www.thymeleaf.org">
<body>
<div class="container">
    <div>
        <h1>Hello Spring</h1>
        <p>회원 기능</p>
        <ul>
            <li><a href="/members/new">회원 가입</a></li>
            <li><a href="/members">회원 목록</a></li>
        </ul>
    </div>
</div> </body>
</html>
```

* Thymeleaf 문법을 사용하여 링크를 생성합니다.
* `/members/new`: 회원 가입 페이지 URL
* `/members`: 회원 목록 페이지 URL

### 동작 방식

1. 웹 브라우저에서 `localhost:8080` (루트 URL)에 접속합니다.
2. 스프링 부트는 `HomeController`의 `home()` 메서드를 호출합니다.
3. `home()` 메서드는 `home` 문자열을 반환합니다.
4. 스프링 부트는 `templates/home.html` 파일을 찾아 Thymeleaf 템플릿 엔진을 사용하여 HTML을 생성하고 웹 브라우저에 응답합니다.
5. 웹 브라우저에는 회원 가입, 회원 목록 링크가 포함된 홈 화면이 표시됩니다.

### 추가 정보

* 스프링 부트는 컨트롤러에 매핑된 URL이 있으면 정적 파일보다 우선적으로 처리합니다.
* 따라서 `static/index.html` 파일보다 `HomeController`가 우선적으로 실행됩니다.
* 컨트롤러가 없으면 `static/index.html` 파일이 웰컴 페이지로 사용됩니다.






## 스프링 웹 개발: 회원 관리 예제 - 회원 등록 기능 구현

### 회원 등록 기능 요구사항

* 회원 가입 페이지 제공
* 회원 가입 폼에서 이름 입력 받기
* 입력된 이름으로 회원 등록 후 홈 화면으로 리다이렉트

### 컨트롤러 (`MemberController`)

```java
@Controller
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/members/new") // 회원 가입 페이지
    public String createForm() {
        return "members/createMemberForm"; // 템플릿 파일 경로
    }

    @PostMapping("/members/new") // 회원 등록 처리
    public String create(MemberForm form) {
        Member member = new Member();
        member.setName(form.getName());

        memberService.join(member);

        return "redirect:/"; // 홈 화면으로 리다이렉트
    }
}
```

* `createForm()`: 회원 가입 페이지를 보여주는 메서드 (`members/createMemberForm.html` 템플릿 렌더링)
* `create()`: 회원 등록을 처리하는 메서드
    - `MemberForm` 객체를 사용하여 폼 데이터를 받아옵니다.
    - `Member` 객체를 생성하고 이름을 설정합니다.
    - `memberService.join()` 메서드를 호출하여 회원 가입 로직을 수행합니다.
    - `redirect:/`: 홈 화면으로 리다이렉트합니다.

### 폼 객체 (`MemberForm`)

```java
public class MemberForm {
    private String name;

    // Getter, Setter 생략
}
```

* 회원 가입 폼에서 입력받은 데이터를 저장하는 객체입니다.

### 템플릿 (`members/createMemberForm.html`)

```html
<form action="/members/new" method="post">
    <div class="form-group">
        <label for="name">이름</label>
        <input type="text" id="name" name="name" placeholder="이름을 입력하세요">
    </div>
    <button type="submit">등록</button>
</form>
```

* `<form>` 태그: 데이터를 서버로 전송하는 역할을 합니다.
    - `action`: 데이터를 전송할 URL (`/members/new`)
    - `method`: 데이터 전송 방식 (POST)
* `<input>` 태그: 사용자로부터 데이터를 입력받습니다.
    - `type`: 입력 필드 유형 (text)
    - `id`: 입력 필드의 고유 ID (name)
    - `name`: 서버로 전송될 데이터의 키 (name)
    - `placeholder`: 입력 필드에 표시될 힌트 문구

### 동작 순서

1. `/members/new` GET 요청: 회원 가입 페이지 (`createMemberForm.html`)가 표시됩니다.
2. 회원 가입 폼 작성 후 등록 버튼 클릭: `/members/new` POST 요청이 전송됩니다.
3. `create()` 메서드가 호출되어 회원 등록 로직을 수행합니다.
4. 회원 등록 완료 후 `/` (홈 화면)으로 리다이렉트됩니다.

### 추가 정보

* HTTP GET 메서드: 데이터를 조회하는 데 사용됩니다.
* HTTP POST 메서드: 데이터를 서버로 전송하여 등록, 수정, 삭제 등의 작업을 수행하는 데 사용됩니다.
* 스프링 MVC는 폼 데이터를 자동으로 객체에 바인딩해줍니다. (예: `MemberForm` 객체)



## 스프링 웹 개발: 회원 관리 예제 - 회원 목록 조회 기능 구현

### 회원 목록 조회 기능 요구사항

* `/members` URL로 접근 시 회원 목록 출력
* 각 회원의 ID와 이름을 표시

### 컨트롤러 (`MemberController`)

```java
@Controller
public class MemberController {

    // ... (생략)

    @GetMapping("/members") // 회원 목록 조회
    public String list(Model model) {
        List<Member> members = memberService.findMembers(); // 모든 회원 조회
        model.addAttribute("members", members); // 모델에 "members" 속성으로 추가
        return "members/memberList"; // 템플릿 파일 경로
    }
}
```

* `list()`: 회원 목록을 조회하는 메서드
    - `memberService.findMembers()` 메서드를 호출하여 모든 회원 데이터를 가져옵니다.
    - 가져온 회원 데이터를 `members`라는 이름으로 모델에 추가합니다.
    - `members/memberList.html` 템플릿을 렌더링합니다.

### 템플릿 (`members/memberList.html`)

```html
<table>
    <thead>
    <tr>
        <th>#</th>
        <th>이름</th>
    </tr>
    </thead>
    <tbody>
    <tr th:each="member : ${members}">
        <td th:text="${member.id}"></td>
        <td th:text="${member.name}"></td>
    </tr>
    </tbody>
</table>
```

* `th:each`: Thymeleaf 반복문으로, `members` 리스트의 각 요소를 `member` 변수에 할당하여 반복합니다.
* `th:text`: Thymeleaf 문법으로, `member` 객체의 `id`와 `name` 값을 출력합니다.

### 동작 순서

1. `/members` GET 요청: 회원 목록 페이지 요청
2. `list()` 메서드 호출: `MemberService`를 통해 모든 회원 데이터 조회
3. 모델에 `members` 속성 추가
4. `members/memberList.html` 템플릿 렌더링: Thymeleaf 엔진이 반복문을 사용하여 회원 목록을 HTML 테이블 형태로 생성
5. 생성된 HTML 응답 전송: 웹 브라우저에 회원 목록 페이지 표시

### 추가 정보

* Thymeleaf의 `th:each`를 사용하여 컬렉션 데이터를 효과적으로 표현할 수 있습니다.
* 현재 예제는 메모리 기반 저장소를 사용하므로 서버 재시작 시 데이터가 초기화됩니다.


## 스프링 웹 개발: 회원 관리 예제 - H2 데이터베이스 설치 및 테이블 생성

### H2 데이터베이스란?

* 교육용 또는 테스트용으로 적합한 가벼운 데이터베이스입니다.
* 웹 기반 콘솔을 제공하여 쉽게 데이터를 관리할 수 있습니다.
* MySQL, Oracle 등과 같은 실제 데이터베이스를 사용하기 전에 개발 단계에서 활용하기 좋습니다.

### H2 데이터베이스 설치

1. H2 데이터베이스 다운로드: [https://www.h2database.com/html/download.html]([유효하지 않은 URL 삭제됨] "Platform-Independent Zip" 파일을 다운로드합니다.
2. 압축 해제: 다운로드한 파일의 압축을 해제합니다.
3. 실행 파일 실행: 압축 해제된 폴더의 `bin` 디렉토리에서 다음 명령어를 실행합니다.
    - Windows: `h2.bat` 또는 `h2w.bat`
    - Mac: `chmod 755 h2.sh` (최초 실행 시 권한 부여) 후 `./h2.sh`
4. 웹 콘솔 접속: 브라우저에서 `http://localhost:8082`에 접속합니다.
5. 데이터베이스 연결 설정:
    - JDBC URL: `jdbc:h2:~/test` (최초 연결 시)
    - 사용자 이름: `sa`
    - 비밀번호: (빈칸)
    - 연결 버튼 클릭 후 `test.mv.db` 파일 생성 확인

### 테이블 생성 (DDL)

```sql
CREATE TABLE members (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    name VARCHAR(255)
);
```

* `members`: 회원 정보를 저장하는 테이블
* `id`: 회원 고유 ID (Bigint 타입, 자동 증가)
* `name`: 회원 이름 (Varchar 타입)

### 데이터베이스 연결 설정 변경

* 파일 직접 접근 방식은 동시 접근에 제약이 있으므로, 소켓 통신 방식으로 변경합니다.
* JDBC URL: `jdbc:h2:tcp://localhost/~/test`

### 추가 정보

* H2 데이터베이스는 웹 콘솔을 통해 쿼리 실행, 데이터 조회 및 수정 등을 편리하게 할 수 있습니다.
* 테이블 생성 후에는 `SELECT * FROM members;` 쿼리를 실행하여 테이블이 정상적으로 생성되었는지 확인할 수 있습니다.
* 실제 개발 환경에서는 MySQL, Oracle 등의 데이터베이스를 사용하며, H2 데이터베이스는 개발 및 테스트 단계에서 주로 활용됩니다.




## 스프링 웹 개발: 회원 관리 예제 - 순수 JDBC로 회원 저장소 구현 및 데이터베이스 연동

### 순수 JDBC란?

* 자바에서 데이터베이스에 접근하기 위한 표준 API (Java Database Connectivity)
* SQL 쿼리를 직접 작성하고 실행해야 하므로 번거롭고 복잡합니다.
* 과거에는 스프링 프레임워크 없이 순수 JDBC를 사용하여 개발했습니다.

### JDBC 회원 저장소 구현 (`JdbcMemberRepository`)

1. **의존성 추가:** `build.gradle` 파일에 `spring-boot-starter-jdbc`, `com.h2database:h2` 의존성을 추가합니다.
2. **데이터 소스 설정:** `application.properties` 파일에 H2 데이터베이스 연결 정보를 설정합니다.
    ```
    spring.datasource.url=jdbc:h2:tcp://localhost/~/test
    spring.datasource.driver-class-name=org.h2.Driver
    ```
3. **`JdbcMemberRepository` 클래스 생성:** `MemberRepository` 인터페이스를 구현하고, JDBC API를 사용하여 데이터베이스에 접근합니다.
    - `DataSource` 객체를 스프링 빈으로 주입받아 사용합니다.
    - 각 메서드에서 SQL 쿼리를 작성하고 실행합니다.
    - 예외 처리 및 리소스 반환 코드를 포함합니다. (자세한 코드는 강의 자료 참고)
4. **스프링 설정 변경:** `SpringConfig` 클래스에서 `MemberRepository` 빈을 `JdbcMemberRepository`로 변경합니다.
    ```java
    @Bean
    public MemberRepository memberRepository() {
        return new JdbcMemberRepository(dataSource);
    }
    ```

### 스프링 부트의 JDBC 지원

* 스프링 부트는 `spring-boot-starter-jdbc` 의존성을 통해 JDBC 연결 및 트랜잭션 관리를 자동으로 처리합니다.
* `DataSource` 객체를 스프링 빈으로 등록하여 개발자가 편리하게 사용할 수 있도록 제공합니다.
* `JdbcTemplate`과 같은 편리한 추상화 기능을 제공하여 JDBC 코드를 간결하게 작성할 수 있습니다. (다음 강의에서 다룸)

### 개방 폐쇄 원칙 (OCP)

* **확장에는 열려있고, 수정에는 닫혀있어야 한다**는 객체 지향 설계 원칙입니다.
* 인터페이스를 활용하여 구현체를 변경하더라도 기존 코드에 영향을 주지 않도록 설계할 수 있습니다.
* 스프링의 DI(Dependency Injection)는 이러한 개방 폐쇄 원칙을 효과적으로 적용할 수 있도록 도와줍니다.

### 예제 실행 결과

* 회원 등록 및 조회 기능이 정상적으로 동작하며, 데이터는 H2 데이터베이스에 저장됩니다.
* 서버를 재시작해도 데이터베이스에 저장된 데이터는 유지됩니다.

### 추가 정보

* 순수 JDBC는 복잡하고 번거롭지만, 데이터베이스 동작 방식을 이해하는 데 도움이 됩니다.
* 스프링 부트는 JDBC를 더 쉽게 사용할 수 있도록 다양한 기능을 제공합니다.




