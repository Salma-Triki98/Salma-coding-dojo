package com.salma.car;

public class Car {
	
	// Members Variables
	private int gas;

	//Constructor
	public Car(int gas) {
		this.gas = 10;
	}
	
	// Methods
	public void status() {
		System.out.printf("Remaining Gas %d / 10 %n" , this.getGas());
		if (this.getGas()== 0) {
			System.out.println("Game Over");
		}
	}
	
	

	// Getters and setters
	public int getGas() {
		return gas;
	}

	public void setGas(int gas) {
		this.gas = gas;
	}

}