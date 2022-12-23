package com.salma.zookeeper;

public class Mammal {
	// Members Variables
	private int energyLevel;
	
	//Constructor
	public  Mammal() {
		this.energyLevel= 100;
		
	}
	
	//Methods
	public int displayEnergy() {
		System.out.println("The Energy is:" +this.getEnergyLevel());
		return this.energyLevel;
	}
	
	
	// Getters and Setters

	public int getEnergyLevel() {
		return energyLevel;
	}

	public void setEnergyLevel(int energyLevel) {
		this.energyLevel = energyLevel;
	}

}
