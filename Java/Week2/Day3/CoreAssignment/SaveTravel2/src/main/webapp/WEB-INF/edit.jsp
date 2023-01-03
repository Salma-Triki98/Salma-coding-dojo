<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Travel</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
   <body class="container">
	<div>
	<h1 class="text-info">Edit Expenses</h1>
<form:form action="/expenses/${travel.id}" method="post" modelAttribute="travel">
<input type="hidden" name="_method" value="put">
    <p>
        <form:label path="type"  class="form-label">Expense</form:label>
        <form:errors path="type" class="text-danger"/>
        <form:input path="type" class="form-control"/>
    </p>
    <p>
        <form:label path="vendor"  class="form-label">Vendor</form:label>
        <form:errors path="vendor" class="text-danger"/>
        <form:input path="vendor" class="form-control"/>
    </p>
    <p>
        <form:label path="amount"  class="form-label">Amount</form:label>
        <form:errors path="amount" class="text-danger"/>
        <form:input type="double" path="amount" class="form-control"/>
    </p>
    <p>
        <form:label path="description"  class="form-label">Description</form:label>
        <form:errors path="description" class="text-danger"/>     
        <form:textarea path="description" class="form-control"/>
    </p>    
    <input type="submit" value="Edit" class="btn btn-primary"/>
</form:form>    
	</div>
   
   
</body>
</html>