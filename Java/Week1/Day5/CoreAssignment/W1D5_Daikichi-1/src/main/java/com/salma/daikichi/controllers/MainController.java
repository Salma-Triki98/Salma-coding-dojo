package com.salma.daikichi.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MainController {
	
        @RequestMapping("/daikichi")
        public String index() {
                return "Welcome!";
        }
        
        @RequestMapping("/daikichi/today")
        public String today() {
        	return "Today you will find luck in all your endeavors!";
        }
        
        @RequestMapping("/daikichi/tomorrow")
        public String tomorrow() {
        	return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
        }
        @RequestMapping("/")
        public String index(@RequestParam(value="q", required=false) String searchQuery) {
        	if (searchQuery == null) {
        		return "Hello: Human";
        	}
            return "Hello: " + searchQuery;
        }
        
        @RequestMapping("/daikichi/travel/{kyoto}")
        public String show( @PathVariable("kyoto") String kyoto){
        	return "Congratulations! You will soon travel to "+ kyoto +"!";
        }
        @RequestMapping("/daikichi/lotto/{numb}")
        public String find( @PathVariable("numb") int numb){
        	if (numb % 2 == 0) {
        	return "You will take a grand journey in the near future, but be weary of tempting offers.";
        	}
			return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
        }

        
}


