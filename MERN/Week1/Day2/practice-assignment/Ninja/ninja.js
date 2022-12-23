class Ninja{
    constructor(name, health, speed=3, strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    sayName(){
        console.log(this.name); 
    }
    showStats(){
        console.log('My name is', this.name, 'my strenght ' ,this.strength, 'myspeed', this.speed, 'and my health', this.health);
    }
    drinkSake(){
        this.health += 10;
        console.log(this.health);
    }

}

const ninja1 = new Ninja("Hyabusa", 20);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();