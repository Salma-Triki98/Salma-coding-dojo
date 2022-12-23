package com.salma.zookeeper;

public class Gorilla extends Mammal {

	public Gorilla() {
		super();
		// TODO Auto-generated constructor stub
	}
	 
	public int displayEnergy() {
		return super.displayEnergy();
		
	}
	
	// Methods
	public int  throwSomething() {
		this.setEnergyLevel(getEnergyLevel()-5);
		System.out.println("The Gorilla has thrown something");
		return this.displayEnergy();
	}
	public int  eatBananas() {
		this.setEnergyLevel(getEnergyLevel()+10);
		System.out.println("Yummy");
		return this.displayEnergy();
	}
	public int  climb() {
		this.setEnergyLevel(getEnergyLevel()-10);
		System.out.println("The Gorilla has climbed a tree");
		return this.displayEnergy();
	}
}
