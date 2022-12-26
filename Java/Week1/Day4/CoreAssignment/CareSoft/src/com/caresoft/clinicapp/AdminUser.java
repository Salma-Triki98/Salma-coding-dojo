package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;



public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {


//... imports class definition...
    
    // Inside class:
    private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents;
    
    // TO DO: Implement a constructor that takes an ID and a role
    public AdminUser(Integer id, String role) {
		super(id);
		this.role= role;
		 this.securityIncidents = new ArrayList<>();
		// TODO Auto-generated constructor stub
	}
    // TO DO: Implement HIPAACompliantUser!
    // TO DO: Implement HIPAACompliantAdmin!
    
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        this.securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        this.securityIncidents.add(report);
        
    }
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		// TODO Auto-generated method stub
		if (this.getSecurityIncidents() != null) {
			return this.getSecurityIncidents();
		}
		return null;
	}
	@Override
	public boolean assignPin(int pin) {
		int length = String.valueOf(pin).length();
		if (length >= 4) {
			return true;
		}
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		// TODO Auto-generated method stub
		
		
		if (this.getId() != confirmedAuthID) {
			
			this.authIncident();
			return false;
		}
		
		return true;
		
	}

	
    // TO DO: Setters & Getters
	
	public Integer getEmployeeID() {
		return employeeID;
	}

	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public ArrayList<String> getSecurityIncidents() {
		return securityIncidents;
	}

	public void setSecurityIncidents(ArrayList<String> securityIncidents) {
		this.securityIncidents = securityIncidents;
	}
    
}
