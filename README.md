Copyright (C) 2013 Rafael Almeida Erthal Hermano

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

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
