package com.salma.savetravel.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salma.savetravel.models.Travel;
import com.salma.savetravel.repositories.TravelRepository;

@Service


public class TravelService {

	@Autowired
	private TravelRepository travelepository;
	
	public List<Travel> allTravelExpense() {
        return travelepository.findAll();
    }
    // creates a travel expense
    public Travel createTravelExpense(Travel b) {
        return travelepository.save(b);
    }
    // retrieves a travel expense
    public Travel findTravelExpense(Long id) {
        Optional<Travel> optionalExpense = travelepository.findById(id);
        if(optionalExpense.isPresent()) {
            return optionalExpense.get();
        } else {
            return null;
        }
    }
    
    public Travel editTravelExpense (Travel t) {
    	return travelepository.save(t);
    	
    }
    public void deleteExpense(Long id) {
    	travelepository.deleteById(id);
      }
}
