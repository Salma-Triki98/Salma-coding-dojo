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
<h1 class="text-center text-info m-4">Send an Omikuji!</h1>
<form action='/processOkimuji' method='POST' class="container d-grid card">
	<div class="card-body">
		<label class="form-label">Pick any number from 5 to 25</label>
	    	<input class="form-control" type="number" name='number'> <br>
		<label class="form-label">Enter the name of any city</label>
	    	<input class="form-control" type="text" name='cityName'><br>
	    <label class="form-label">Enter the name of any real person</label>
	    	<input class="form-control" type="text" name='name'><br>
		<label class="form-label">Enter the professional endeavor or hobby</label>
	    	<input class="form-control" type="text" name='endeavor'><br>
	    <label class="form-label">Enter any type of living thing.</label>
	    	<input class="form-control" type="text" name='type'><br>
	    <label class="form-label">Say something nice to someone</label>
	    	<textarea class="form-control" name='saying'> </textarea><br>
	    	<div class="d-flex justify-content-between  align-items-center">
	     	<p>Send and show a friend</p>
	    	<input class="btn btn-primary "  type='submit' value='Send'>
	    	</div>
    	</div>
    </form>
    

</body>
</html>