package com.salma.login.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.salma.login.models.LoginUser;
import com.salma.login.models.User;
import com.salma.login.services.UserService;

@Controller
public class UserController {

	@Autowired
	private UserService userServ;
	
	// Show the authentication page
	@GetMapping("/login")
	public String loginPage(@ModelAttribute("newUser") User newUser,
							@ModelAttribute("newLogin") LoginUser newLogin,
							Model model) {
		
	      model.addAttribute("newUser", new User());
	      model.addAttribute("newLogin", new LoginUser());
		return "auth.jsp";
	}
	
	// Register Process 
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, 
            BindingResult result, Model model, HttpSession session) {
		
        userServ.register(newUser, result);
		
        if(result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "auth.jsp";
        }
        
        session.setAttribute("user_id", newUser.getId());
        session.setAttribute("userName", newUser.getUserName());
        return "redirect:/welcome";
    }
	

	@GetMapping("/welcome")
	public String success(HttpSession s) {
		Long userId = (Long) s.getAttribute("user_id");
		
		if(userId == null) {
			return "redirect:/login";
		}
		String userName = (String) s.getAttribute("userName");
		return "welcome.jsp";
	}
	
	// Login Process 
	@PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
            BindingResult result, Model model, HttpSession session) {
        
 
         User user = userServ.login(newLogin, result);
    
        if(result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "auth.jsp";
        }
    
        session.setAttribute("user_id", user.getId());
       ;
        session.setAttribute("userName", user.getUserName());
        return "redirect:/welcome";
    }
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/login";
		
	}
}