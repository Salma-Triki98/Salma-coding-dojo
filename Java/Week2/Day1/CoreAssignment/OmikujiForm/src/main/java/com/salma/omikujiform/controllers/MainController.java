package com.salma.omikujiform.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
	@RequestMapping("/omikuji")
	public String index() {
		
		return "index.jsp";
	}
	
	@RequestMapping(value="/processOkimuji", method=RequestMethod.POST)
	public String processOkimuji(
			@RequestParam(value="number") String number,
	    	@RequestParam(value="cityName") String cityName,
	    	@RequestParam(value="name") String name,
	    	@RequestParam(value="endeavor") String endeavor,
	    	@RequestParam(value="type") String type,
	    	@RequestParam(value="saying") String saying,
	    	HttpSession session) {
				System.out.println(number);
				session.setAttribute("number", number);
				System.out.println(number);
				session.setAttribute("cityName", cityName);
				session.setAttribute("name", name);
				session.setAttribute("endeavor", endeavor);
				session.setAttribute("type", type);
				session.setAttribute("saying", saying);
				
	    
	    return "redirect:/omikuji/show";
	}
	
	@RequestMapping("/omikuji/show")
	public String show(HttpSession session) {
		String numb = (String) session.getAttribute("number");
		session.getAttribute("cityName");
		session.getAttribute("name");
		session.getAttribute("endeavor");
		session.getAttribute("type");
		session.getAttribute("saying");		
		return "ShowOmikuji.jsp";
	}

}
