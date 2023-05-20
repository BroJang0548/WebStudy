<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!Doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>로그인 페이지</title>
</head>
<body>
<h1>로그인</h1>
<form action="/login" method="post">
    ID : <input type="text" name="username" placeholder="아이디"><br>
    PW : <input type="password" name="password" placeholder="비밀번호"><br>
    <input type="submit" value="로그인">
</form>
</body>
</html>
