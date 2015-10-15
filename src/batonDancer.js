var makeBatonDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //         why makeDancer._prototype_.step?
  this.oldStep = makeDancer.prototype.step;
  this.$node = $('<span class="baton"></span>');
  makeBatonDancer.prototype.step.call(this);//  why are these lines necessary?
  makeBatonDancer.prototype.setPosition.call(this, top, left);//  

};

makeBatonDancer.prototype = Object.create(makeDancer.prototype);
makeBatonDancer.prototype.constructor = makeBatonDancer;

makeBatonDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
