Classy.js
===============================

Usage examples:

```js
var Animal = new Class(function (params) {
    //private atributte
    var status = params.status;
    
    //public methods
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

//adding say method in Animal
Animal.extend({
    say : function (phrase) {
        alert(phrase);
    }
});

var Dog = new Class(function (params) {
    //telling Dog to inherit from animal
    this.inherit(Animal);
    
    this.name  = params.name;
    this.owner = params.owner;
    
    this.bark = function () {
        this.say('Au Au');
    };
});

var pluto = new Dog({
    name  : 'pluto',
    owner : 'mickey',
    status: 'born'
});

//adding say method in dog instance
pluto.extend({
    greet : function () {
        this.say('Hi, my name is ' + this.name + ', and im ' + this.owner + ' dog');
    };
});

pluto.bark();
alert(pluto.status());
pluto.greet();
```
* * *
###References:

#####Class Object

```js
Class.inherit(ancestor)
```

```js
Class.extend(attributes)
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
