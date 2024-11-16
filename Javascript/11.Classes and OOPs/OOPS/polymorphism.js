// Polymosphism in Js :
// 1) Polymorphism is core concept or pillar of oops/
// 2) Polymorphism is derived from 2 words poly and morphism.
// 3) Poly means many and morphism means forms.
// 4) Polymorphism means many forms it means that objects of the same class can have the same methods for handling them according to there needs
// 5) real life example is: parent buyied a laptop and installed a chrome inside it so here chrome is method of parent class and there childrens can access that chrome method according to there needs like one will use for knowledge purpose and one can use for gaming so this knowledge and gaming are the same method as a chrome but both behave differently.
// Example :

class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log('Animal makes a sound')
    }
    
    walk(){
        console.log('Animal can walk')
    }
}

class Cat extends Animal{
    speak(){
        console.log(`${this.name} meows!`)
    }
}

class Dog extends Animal{
    speak(){
        console.log(`${this.name} Barks!`)
    }
}

const cat = new Cat('Cat')
// here what happen is if there are same methods inside object same as class and if we call the method for object then the method of object will be logged that means the method of parent will be overided
// Here, we call the speak() method on the 'cat' object.
// The method defined in the 'Cat' class (which overrides the 'speak()' method from Animal) will be executed.
cat.speak()

const dog = new Dog('Dog')
dog.speak()