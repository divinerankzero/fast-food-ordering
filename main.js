// [x] The object should have a property named orders that is an array. You will need to define this.
// [x] Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// [x] Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// [x] Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        console.log(`Customer orders ${meal.name}`)
        this.orders.push(meal);
    },
    getAllOrders: function () {
        return this.orders;
    }
}

const chickenComboMeal = {
    name: "Chicken Combo Meal",
    sandwichType: "Chicken",
    fries: true,
    drinkSize: "Medium"
}

const burger = {
    name: "Hambuger",
    sandwichType: "Beef",
    fries: false,
    drinkSize: "Medium"
}

// [x] Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(burger);

// [x] Invoke the function to return the list of all orders
let allOrders = restaurant.getAllOrders();
// [x] Output all orders to the console using console.table()
console.table(allOrders);