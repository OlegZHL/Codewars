// Наш прототип счётчика сломан. Можете ли вы определить, что здесь не так?

function Counter() {
    this.value = 0;
}

Counter.prototype.increase = function() {
    this.value++;
};

Counter.prototype.getValue = function() {
    return this.value;
};

Counter.prototype.reset = function() {
    this.value = 0;
};