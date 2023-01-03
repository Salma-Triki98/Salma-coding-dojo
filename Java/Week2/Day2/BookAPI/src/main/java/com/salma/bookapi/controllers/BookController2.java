package com.salma.bookapi.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.salma.bookapi.models.Book;
import com.salma.bookapi.services.BookService;

@Controller
public class BookController2 {
	 private final BookService bookService;
	    public BookController2(BookService bookService){
	        this.bookService = bookService;
	    }
	    // Show one book
	    @RequestMapping("/api/book/{id}")
	    public String show(@PathVariable("id") Long id, Model model) {
	        Book book = bookService.findBook(id);
	        model.addAttribute("book", book);
	        return "show.jsp";
	    }
	    @RequestMapping("/books")
	    public String index(Model model) {
	        List<Book> books = bookService.allBooks();
	        model.addAttribute("books", books);
	        return "index.jsp";
	    }
	    
	    

}
