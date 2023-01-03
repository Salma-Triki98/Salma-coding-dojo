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
<title>Show All</title>
</head>
<body>
<div class="container">
<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Language</th>
      <th scope="col">#Pages</th>
    </tr>
  </thead>
  <tbody>
      <c:forEach var="book" items="${books}">
      <tr>
      <td><c:out value="${book.id}"></c:out></td>
      <td><c:out value="${book.title}"></c:out></td>
      <td><c:out value="${book.language}"></c:out></td>
      <td><c:out value="${book.numberOfPages}"></c:out></td>
     </tr>
     </c:forEach>
    </tbody>
   </table>
   </div>
   </body>
</html>

