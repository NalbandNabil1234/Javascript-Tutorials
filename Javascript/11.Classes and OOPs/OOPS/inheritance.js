// Inheritance in Js :
// 1) Inheritance is one of the important pillar of Javascript.
// 2) Inheritance allows one class to inherit or we can say access the properties and methods of the another class.
// 3) extends keyword is used to do so.
// 4) the class which inherit the properties and methods is called the child class or the derived class and the class whos preoperties or methods are inherited is called the parent class.
// 5) Inheritance is used to reuse code and make it easier for programmer to save the time.
// 6) real life example is suppose the parent having home, car and bank balance. child can access those things, such as child can ride the car and child can use there parents money and can stay in home.
// Example:

class Car{
    constructor(name){
        this.name = name;
    }

    engine(){
        console.log('Engine is present')
    }

    start(){
        console.log('Started')
    }

    stop(){
        console.log('Stopped')
    }
}

// here using extends keywords we can give access of the properties and methods of the parent class to the child class
class Ferrari extends Car{
    speed(speed){
        console.log(`Speed of ${this.name} is : ${speed}`)
    }
}

// creating instance of the Ferrari class or we can say the object of Ferari class
const ferrariCar = new Ferrari('Ferari')
// calling the speed method of the Ferrari class
ferrariCar.speed('480')

// calling the inherited methods
ferrariCar.engine() // calling engine method from the Car class 
ferrariCar.start() // calling start method from the Car class
ferrariCar.stop() // calling stop method from the Car class