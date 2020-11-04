var EventEmitter = require('events').EventEmitter,
 util = require('util');
 var Foo = function(){ }
 util.inherits(Foo, EventEmitter);
 Foo.prototype.someMethod = function() {
 this.emit('customEvent', 'Data from Some Method');
 }
 var fooObj = new Foo();
 fooObj.on('customEvent',function(arg){
console.log('Custom Event Occurred : '+arg);
 });
 fooObj.someMethod();