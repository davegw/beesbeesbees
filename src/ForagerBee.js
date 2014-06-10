var ForagerBee = function() {
  Bee.apply(this, arguments);
  this.age = 10;
  this.job = "find pollen";
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forrage = function(value) {
  this.treasureChest.push(value);
}
