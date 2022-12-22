package com.salma.car;

public class Driver extends Car {

	public Driver(int gas) {
		super(gas);
		// TODO Auto-generated constructor stub
	}
	
	// Methods 
	public void drive() {
		this.setGas(getGas()-1);
		System.out.println("You drive the car.");
		super.status();
	}
	public void boosters() {
		if (this.getGas()<3) {
			System.out.println("You don't have enough gas");
		}
		else {
		this.setGas(getGas()-3);
		System.out.println("You boosted the car.");
		super.status();
		}
	}
	public void Refueling() {
		if (this.getGas()>8) {
			System.out.println("You can't refuel your car!");
		}
		else {
		this.setGas(getGas()+2);
		System.out.println("You refueled the car.");
		super.status();
	
	}
	}

}
