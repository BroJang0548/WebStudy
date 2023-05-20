<%@ page import="java.util.Calendar" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!Doctype html>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%
    // JSP 특징
    /*
    * 이식성이 좋음
    * 서버 자원 효율성이 좋음
    * MVC 패턴 사용에 유리
    * JSTL, 커스텀 태그를 이용한 개발 가능
    *
    * */

    // Servlet
    /**
     * 웹 서버상에서 실행되는 자바의 클래스 파일
     * 자바 API 그대로 사용 가능
     * javax.servlet.Servlet Interface 사용
     *
     * 입출력을 HTTP Request, Response로 다룬다.
     *
     * Servlet : 서버 사이드 자바 응용 프로그램
     *
     * -> JSP 요청 시 JSP 파일을 컨테이너가 서블릿 형태의 Java 코드로 변환하여 서블릿 라이프 사이클 처리
     *
     * -> 독립적인 쓰레드 기반 서비스.
     *
     * -> 다중 쓰레드 서비스가 기본적으로 제공
     * */

    // 웹 컨테이너
    /*
    * Servlet class, JSP 파일의 실행 요청 처리
    * HTTP 서버에서 클라이언트 요청을 웹 컨테이너에서 처리하라고 넘겨준다.
    *
    * 해당 요청에 맞는 url Servlet Class, JSP 파일 실행 후 해당 결과를 HTTP 서버에 전달
    *
    * */


    // Servlet 동작 원리
    /*
    * Servlet Container 환경에서만 동작
    *
    * 1. 사용자 URL 요청 (웹 서버에 메시지 Get or Post)
    *
    * 2. HTTP 요청 해석 (Request, Response 객체 생성)
    *
    * ※ javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse 객체 생성
    *
    * 3. Servlet Request일 경우 Servlet Container로 request 전달
    *
    * 4. Servlet Container는 Servlet instance 와 Thread를 생성하고, init() 메서드를 호출(Servlet 당 1회 호출)
    *
    * ※ Web Container에서 한 번도 실행된 적이 없거나, 메모리에 생성된 process(instance)가 없을 경우 새 instance 생성(Memory Load) -> init()메서드 호출
    * -> 이미 instance가 존재할 경우 새 instance 생성 대신, 기존 instance에 신규 Thread 1개만 생성
    *
    * 5. init() 메서드 호출해서 초기화 한뒤에는, service() 메서드 호출
    *
    * 6. Servlet에서 service를 수행 -> 결과 페이지를 웹 서버에 전달
    * ※ service() 메서드가 호출 되면 GET, POST 방식에 따라 doGet, doPost() 메서드가 request,response 객체를 인자로 호출(Auto)
    *
    * 7. 웹 서버는 Servlet Container에 전달받은 결과를 HTTP 응답으로 웹 Client에 전달
    * ※ doGet, doPost 메소드로 응답후 웹서버에 전송하고 해당 객체는 소멸
    *
    * */

    Calendar cal = Calendar.getInstance();
    int hour = cal.get(Calendar.HOUR_OF_DAY);
    int minute = cal.get(Calendar.MINUTE);
    int second = cal.get(Calendar.SECOND);
    int millisecond = cal.get(Calendar.MILLISECOND);
%>
<p> 현재 시간 : <%=hour%> : <%=minute%> : <%=second%>.<%=millisecond%></p>
</body>
</html>
