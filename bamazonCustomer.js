//console.table here w/o attaching it to a variable
require("console.table");
const mysql = require("mysql");
const inquirer = require("inquirer");
var query = "SELECT * FROM products WHERE ?";
//SQL connection code here
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "shperuby098",
  database: "bamazon_db"
});
// Function to load the products table from the database and print results to the console
function loadProducts() {
  // Selects all of the data from the MySQL products table
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // Draw the table in the terminal using the response
    console.table(res);
    //load inquirer prompts
    productSearch();
  });
}
//loads product table
loadProducts();
function productSearch() {
  inquirer.prompt([
    {
      name: "item_id",
      type: "choices",
      message: "Welcome to Bamazon! What is the id of the product you would like to buy?",
      validate: function (value) {
        if (isNaN(value) === false) {
          return true;
        }
        console.log("Please enter a item ID!");
        return false;
      }
    },
    {
      name: "stock",
      type: "input",
      message: "Enter the quantity.",
      validate: function (value) {
        if (isNaN(value) === false) {
          return true;
        }
        console.log("Please enter a item ID!");
        return false;
      }
    }
  ]).then(function (answers) {
    //variables that stores user inputs from question prompt
    let id = answers.item_id;
    let qty = answers.stock;
    updateStock();
    //connects to database and updates stock_quantity when user purchases items
    function updateStock() {
      var query = "SELECT * FROM products WHERE ?";
      var queryUpdate = "UPDATE products SET ? WHERE ?";
      connection.query(query, { item_id: id }, function (err, res) {
        var price = res[0].price;
        var quantity = res[0].stock_quantity;
        if (quantity >= answers.stock) {
          quantity = quantity - answers.stock;
          console.log(`${quantity} remaining.`);
          var total = (answers.stock * price);
          console.log(`Thanks for purchasing! Your total is $${total}`);
          connection.query(queryUpdate, [{ stock_quantity: quantity }, { item_id: id }], function (err) {
            if (err) throw err;
            loadProducts();
          })
        } else {
          console.log("Insufficient quantity!");
          productSearch();
        }
      })
    }
  })
}