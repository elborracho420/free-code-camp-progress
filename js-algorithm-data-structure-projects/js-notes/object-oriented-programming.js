/*Create a Basic JavaScript Object
Think about things people see every day, like cars, shops, and birds. These are all 
objects: tangible things people can observe and interact with.

What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.

These qualities, or properties, define what makes up an object. Note that similar objects share
the same properties, but may have different values for those properties. For example, all cars
have wheels, but not all cars have the same number of wheels.

Objects in JavaScript are used to model real-world objects, giving them properties and behavior
just like their real-world counterparts. Here's an example using these concepts to create a duck
object:*/

let duck = {
  name: "Aflac",
  numLegs: 2
};

/*This duck object has two property/value pairs: a name of Aflac and a numLegs of 2.

Create a dog object with name and numLegs properties, and set them to a string and a number,
respectively.*/

let dog = {

};

//SOLUTION:

let dog = {
  name: "Doggo",
  numLegs: 4
};

//--------------------------------------------------------------

/*Use Dot Notation to Access the Properties of an Object
The last challenge created an object with various properties. Now you'll see how to access the values of those properties. Here's an example:*/

let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);

/*Dot notation is used on the object name, duck, followed by the name of the property, name, to access the value of Aflac.

Print both properties of the dog object to your console.*/

let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line

//SOLUTION:

let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
console.log(dog.name, dog.numLegs);

//-------------------------------------------------------------------

/*Create a Method on an Object
Objects can have a special type of property, called a method.

Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:*/

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();

/*The example adds the sayName method, which is a function that returns a sentence giving the name of the duck. Notice that the method accessed the name property in the return statement using duck.name. The next challenge will cover another way to do this.

Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.*/

let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();

//SOLUTION:

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();

//------------------------------------------------------------------------

/*Make Code More Reusable with the this Keyword
The last challenge introduced a method to the duck object. It used duck.name dot notation to access the value for the name property within the return statement:*/

sayName: function() {return "The name of this duck is " + duck.name + ".";}

/*While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.

A way to avoid these issues is with the this keyword:*/

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};

/*this is a deep topic, and the above example is only one way to use it. In the current context, this refers to the object that the method is associated with: duck. If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read.

Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.*/

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();

//SOLUTION:

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

//----------------------------------------------------------------

/*Define a Constructor Function
Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:*/

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

/*This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
Constructors define properties and behaviors instead of returning a value as other functions might.
Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.*/

//SOLUTION:

function Dog() {
  this.name = "Tucker";
  this.color = "White";
  this.numLegs = 3;
}

//-------------------------------------------------------------------------

//Use a Constructor to Create Objects
//Here's the Bird constructor from the previous challenge:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();

/*NOTE: this inside the constructor always refers to the object being created.

Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:*/

blueBird.name;
blueBird.color;
blueBird.numLegs;
Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name;

/*Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.*/

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line

//SOLUTION:

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line

let hound = new Dog();

//---------------------------------------------------------------------

/*Extend Constructors to Receive Arguments
The Bird and Dog constructors from the last challenge worked well. However, notice that all Birds that are created with the Bird constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work:*/

let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";

/*Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different Bird objects, you can design your Bird constructor to accept parameters:*/

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

/*Then pass in the values as arguments to define each unique bird into the Bird constructor: let cardinal = new Bird("Bruce", "red"); This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. The numLegs property is still set to 2. The cardinal has these properties:*/

cardinal.name
cardinal.color
cardinal.numLegs

/*The constructor is more flexible. It's now possible to define the properties for each Bird at the time it is created, which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.

Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.*/

function Dog() {

}

//SOLUTION:

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Luto", "brendel");

//----------------------------------------------------------------

/*Verify an Object's Constructor with instanceof
Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:*/

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;

/*This instanceof method would return true.

If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:*/

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;

/*This instanceof method would return false.

Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.*/

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

//SOLUTION:

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(5);

myHouse instanceof House;

//------------------------------------------------------------

/*Understand Own Properties
In the following example, the Bird constructor defines two properties: name and numLegs:*/

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

/*name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:*/

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

/*The console would display the value ["name", "numLegs"].

Add the own properties of canary to the array ownProps.*/

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

//SOLUTION:

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

//------------------------------------------------------------------------------

/*Use Prototype Properties to Reduce Duplicate Code
Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:*/

Bird.prototype.numLegs = 2;

//Now all instances of Bird have the numLegs property.

console.log(duck.numLegs);
console.log(canary.numLegs);

/*Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.

Add a numLegs property to the prototype of Dog*/

function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");

//SOLUTION:

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 2;

// Only change code above this line
let beagle = new Dog("Snoopy");

//-----------------------------------------------------------------------

/*Iterate Over All Properties
You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.*/

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

/*Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:*/

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
console.log(ownProps) would display ["name"] in the console, and console.log(prototypeProps) would display ["numLegs"].

/*Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

//SOLUTION:

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(beagle);
console.log(prototypeProps);

//------------------------------------------------------------

/*Understand the Constructor Property
There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:*/

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);

/*Both of these console.log calls would display true in the console.

Note that the constructor property is a reference to the constructor function that created the instance. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:*/

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

/*Note: Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.

Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.*/

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {

}

//SOLUTION:

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

//---------------------------------------------------------------------------

/*Change the Prototype to a New Object
Up until now you have been adding properties to the prototype individually:*/

Bird.prototype.numLegs = 2;
This becomes tedious after more than a few properties.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}

/*A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:*/

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

/*Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.*/

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};

//SOLUTION:

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//-------------------------------------------------------------------

/*Remember to Set the Constructor Property when Changing the Prototype
There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:*/

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;

/*In order, these expressions would evaluate to false, true, and true.

To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:*/

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

//Define the constructor property on the Dog prototype.

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//SOLUTION:

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//------------------------------------------------------------------------------

/*Understand Where an Object’s Prototype Comes From
Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:*/

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");

/*duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:*/

Bird.prototype.isPrototypeOf(duck);

/*This would return true.

Use isPrototypeOf to check the prototype of beagle.*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line

//SOLUTION:

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line

Dog.prototype.isPrototypeOf(beagle);

//------------------------------------------------------------------------

/*Understand the Prototype Chain
All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.*/

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;

/*Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);
How is this useful? You may recall the hasOwnProperty method from a previous challenge:*/

let duck = new Bird("Donald");
duck.hasOwnProperty("name");

/*The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

Modify the code to show the correct prototype chain.*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);

//SOLUTION:

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

//--------------------------------------------------------------------

/*Use Inheritance So You Don't Repeat Yourself
There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:*/

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

/*The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:*/

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//Since Animal includes the describe method, you can remove it from Bird and Dog:

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};

/*The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.*/

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};

//SOLUTION:

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

//-------------------------------------------------------

/*Inherit Behaviors from a Supertype
In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:*/

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

/*This and the next challenge will cover how to reuse the methods of Animal inside Bird and Dog without defining them again. It uses a technique called inheritance. This challenge covers the first step: make an instance of the supertype (or parent). You already know one way to create an instance of Animal using the new operator:*/

let animal = new Animal();

/*There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:*/

let animal = Object.create(Animal.prototype);

/*Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be the prototype of Animal, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.*/

animal.eat();
animal instanceof Animal;

/*The instanceof method here would return true.

Use Object.create to make two instances of Animal named duck and beagle.*/

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line

//SOLUTION:

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

//-------------------------------------------------------------------------