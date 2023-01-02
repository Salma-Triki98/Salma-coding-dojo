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
<title>Java</title>
</head>
<body>

<h1 class="text-danger">Fruit Store</h1>

<table class="table table-bordered table-striped container border border-5 border-danger ">
  <thead>
    <tr>
      <th class="text-primary" scope="col">Name</th>
      <th class="text-info" scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  <c:forEach var="fruit" items="${fruit}">
    <tr>
      <td>${fruit.name}</td>
      <td>${fruit.price}</td>
    </tr>
    </c:forEach>
  </tbody>
</table>
</body>
</html>