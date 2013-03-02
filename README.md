Class.js
===============================

## Class Object

Usage example:

```js
var Animal = new Class(function (especies) {
    this.especies = especies;

    this.greet = function () {
        console.log('Hi! I\'m a ' + this.especies);
    };
});

var dog = new Animal('dog');
dog.greet(); //=> Hi! I\'m a dog
```

### Extend

Serves to add new methods to the class after it is created

Usage example:

```js
var Animal = new Class(function (especies) {
    this.especies = especies;

    this.greet = function () {
        console.log('Hi! I\'m a ' + this.especies);
    };
});

Animal.extend({
    breathe : function () {
        console.log('Woow! Fresh air!');
    }
});

var dog = new Animal('dog');
dog.breathe(); //=> Woow! Fresh air!
```

### Inherit

The method is used for the current class inherits the class passed as parameter, note that multiple inheritance is allowed

Usage example:

```js
var Animal = new Class(function (especies) {
    this.especies = especies;

    this.say = function (message) {
        console.log('Hi! I\'m a ' + this.especies + ' and i\'m saying: ' + message);
    };
});

var Dog = new Class(function (especies, name) {
    this.inherit(Animal);

    this.name = name;

    this.bark = function () {
        this.say('Au Au');
    };
});

var pluto = new Dog('dog', 'pluto');
pluto.bark(); //=> Hi! I'm a dog and i'm saying: Au Au
```

### Ubber

Execute the method with the same name in a parent class

Usage example:

```js
var Animal = new Class(function (especies) {
    this.especies = especies;

    this.say = function () {
        console.log('Hi! I\'m a ' + this.especies);
    };
});

var Dog = new Class(function (especies) {
    this.inherit(Animal);

    this.say = function (message) {
        console.log(message);
        this.ubber();
    };
});

var pluto = new Dog('dog');
pluto.say('Au Au'); //=> Au Au \n Hi! I'm a dog
```

## Instance Object

Usage example:

```js
var Animal = new Class(function (especies) {
    this.especies = especies;

    this.greet = function () {
        console.log('Hi! I\'m a ' + this.especies);
    };
});

var dog = new Animal('dog');
dog.greet(); //=> Hi! I\'m a dog
```

### Extend

Serves to add new methods to the object after it is created

Usage example:

```js
var Animal = new Class(function (especies) {
    this.especies = especies;

    this.greet = function () {
        console.log('Hi! I\'m a ' + this.especies);
    };
});

var dog = new Animal('dog');
dog.extend({
    breathe : function () {
        console.log('Woow! Fresh air!');
    }
});

dog.breathe(); //=> Woow! Fresh air!
```

### InstanceOf

Checks whether the class is an instance of the class passed as parameter or her heir

Usage example:

```js
var Animal = new Class(function (especies) {
    this.especies = especies;
});

var Dog = new Class(function (especies) {
    this.inherit(Animal);
});

var pluto = new Dog('dog');
console.log(pluto.instanceOf(Dog)) //=> true
console.log(pluto.instanceOf(Animal)) //=> true
console.log(pluto.instanceOf(Boolean)) //=> false
```
