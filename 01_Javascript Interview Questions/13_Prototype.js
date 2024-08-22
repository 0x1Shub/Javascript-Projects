function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

Product.prototype.calculateTotalValue = function () {
  return this.price * this.quantity;
};

const product1 = new Product("iPhone", 100000, 5);

console.log(Product.prototype);
console.log(product1);

const totalValue = product1.calculateTotalValue();
console.log(`Total Value of ${product1.name} is ₹${totalValue}`);
