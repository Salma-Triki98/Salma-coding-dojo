<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<meta charset="ISO-8859-1">
<title>Omikuji</title>
</head>
<body>
<div class="container judtify-content-center">
	<h1 class="text-center text-info m-4">Here's Your Omikuji!</h1>
	<p class="container card w-25 p-3">In <c:out value="${number}"></c:out>  years, you will live in <c:out value="${cityName}"></c:out> with <c:out value="${name}"></c:out> as your roommate, <c:out value="${endeavor}"></c:out> for living. The next time you see a <c:out value="${type}"></c:out>, you will have good luck. Also, <c:out value="${saying}"></c:out>.  </p>
	<a class="m-5" href="/omikuji">Go Back</a>
</div>
</body>
</html>