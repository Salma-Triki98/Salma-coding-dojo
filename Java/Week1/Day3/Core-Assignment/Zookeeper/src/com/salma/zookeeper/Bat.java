package com.salma.zookeeper;

public class Bat extends Mammal {

	public Bat() {
	this.setEnergyLevel(300);
		// TODO Auto-generated constructor stub
	}
	
	//Methods
	public int fly() {
		this.setEnergyLevel(getEnergyLevel()-50);
		System.out.println("pings");
		return displayEnergy();
		}
	public int eatHumans() {
		this.setEnergyLevel(getEnergyLevel()+25);
		return displayEnergy();
	}
	public int attackTown() {
		this.setEnergyLevel(getEnergyLevel()-100);
		System.out.println("Whoosh");
		return displayEnergy();
	}

}
