Class.js
===============================

#####Class Object

Example:
```js
var Dog = new Class(function (params) {
    this.name  = params.name;
    this.owner = params.owner;
    
    this.bark = function () {
        console.log('Au Au');
    };

    this.greet = function () {
        console.log('Hi, my name is ' + this.name + ', and im ' + this.owner + 's dog');
    };
});

var pluto = new Dog({
    name  : 'pluto',
    owner : 'mickey',
    status: 'born'
});
```

* * *

```js
Class.inherit(ancestor)
```
Examples:

```js
var Animal = new Class(function (params) {
    var status;
    
    this.status = function () {
        return status;
    };
    
    this.born = function () {
        status = 'born';
    };
    
    this.die = function () {
        status = 'dead';
    };
});

var Dog = new Class(function (params) {
    this.inherit(Animal); /*telling Dog to inherit from animal*/
    
    this.name  = params.name;
    this.owner = params.owner;
    
    this.bark = function () {
        console.log('Au Au');
    };
});
```

```js
var Animal = new Class(function (params) {
    var status;
    
    this.status = function () {
        return status;
    };
    
    this.born = function () {
        status = 'born';
    };
    
    this.die = function () {
        status = 'dead';
    };
});

var Dog = new Class(function (params) {
    this.name  = params.name;
    this.owner = params.owner;
    
    this.bark = function () {
        console.log('Au Au');
    };
});
Dog.inherit(Animal); /*telling Dog to inherit from animal*/
```

* * *

```js
Class.extend(attributes)
```
Examples:

```js
var Dog = new Class(function (params) {    
    this.name  = params.name;
    this.owner = params.owner;
    
    this.bark = function () {
        console.log('Au Au');
    };
});

Dog.extend({
    greet : function () {
        console.log('Hi, my name is ' + this.name + ', and im ' + this.owner + 's dog');
    }
});
```

#####Instance Object

```js
Instance.extend(attributes)
```

```js
Instance.instaceOf(Class)
```

```js
Instance.ubber()
```
