// Abstraction in JavaScript:
// Abstraction is the concept of hiding the internal complexities of an object 
// and exposing only the essential features or data to the user. 
// It allows the user to interact with an interface without worrying about the details of its implementation.
// It is one of the core pillars of OOP in JavaScript. 
// A good real-world example is the way a driver interacts with a car. 
// The driver doesn't need to know how the engine works internally, 
// but can use simple controls like the steering wheel, accelerator, and brakes to operate the car.

// example :

class Cars {
    startEngine(){
        console.log('Engine gets started')
    }

    drive(){
        console.log('Car is moving')
    }

    brake(){
        console.log('Car gets stopped')
    }

    stopEngine(){
        console.log('Engine Stopped')
    }
}

const myCar = new Cars();

// here abstratction is done like myCar doenst want to know like how the engine will start drive brake and stop intead myCar can use those methods
myCar.startEngine()
myCar.drive()
myCar.brake()
myCar.stopEngine()