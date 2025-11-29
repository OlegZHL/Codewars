// Наш прототип счётчика сломан. Можете ли вы определить, что здесь не так?

function Counter() {
    this.value = 0;
}

Counter.prototype.increase() {
    this.value++;
};

Counter.prototype.getValue() {
    return this.value;
};

Counter.prototype.reset() {
    this.value = 0;
};