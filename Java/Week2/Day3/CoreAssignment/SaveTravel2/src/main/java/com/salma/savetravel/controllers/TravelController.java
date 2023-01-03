package com.salma.savetravel.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.salma.savetravel.models.Travel;
import com.salma.savetravel.services.TravelService;



@Controller
public class TravelController {
	@Autowired
	  private TravelService travelService;
	

@GetMapping("/")
	  public String newTravelExpense(@ModelAttribute("travel") Travel travel, Model model) {
		List <Travel> allExpense  = travelService.allTravelExpense();
		model.addAttribute("allExpense", allExpense);
	  return "index.jsp"; 
}
@PostMapping("/")
  public String create(@Valid @ModelAttribute("travel") Travel travel, BindingResult result) {
      if (result.hasErrors()) {
          return "index.jsp";
      } else {
      	travelService.createTravelExpense(travel);
          return "redirect:/";
      }
  }
@GetMapping("/show/{id}")
public String showOneExpense(@PathVariable("id") Long id, Model model) {
	Travel travel  = travelService.findTravelExpense(id);
	model.addAttribute("travel", travel);
return "show.jsp"; 
}

@RequestMapping("/edit/{id}")
  public String edit(@PathVariable("id") Long id, Model model) {
      Travel travel = travelService.findTravelExpense(id);
      model.addAttribute("travel", travel);
      return "edit.jsp";
  }
  
  @RequestMapping(value="/expenses/{id}", method=RequestMethod.PUT)
  public String update(@Valid @ModelAttribute("travel") Travel travel, BindingResult result) {
      if (result.hasErrors()) {
          return "edit.jsp";
      } else {
          travelService.editTravelExpense(travel);
          return "redirect:/";
      }
  }

  @DeleteMapping("/expenses/{id}")
  public String destroy(@PathVariable("id") Long id) {
	  travelService.deleteExpense(id);
      return "redirect:/";
  }
}
