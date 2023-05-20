<%@ page import="java.util.Calendar" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!Doctype html>
<html>
<head>
    <title>Servlet Time Test</title>
    <%
        Calendar c = Calendar.getInstance();
        int hour = c.get(Calendar.HOUR_OF_DAY);
        int minute = c.get(Calendar.MINUTE);
        int second = c.get(Calendar.SECOND);
        int millisecond = c.get(Calendar.MILLISECOND);
    %>
</head>
<body>
    <h1>현재 시간 : <%=hour%> : <%=minute%> : <%=second%> : <%=millisecond%>
</h1>
</body>
</html>
