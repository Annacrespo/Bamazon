// you can include console.table here w/o attaching it to a variable
require("console.table");
const mysql = require("mysql");
const inquirer = require("inquirer");
var query = "SELECT * FROM products WHERE ?";
//You will need your SQL connection code here
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

loadProducts();

function productSearch() {

  inquirer.prompt([
    {
      name: "item_id",
      type: "choices",
      message: "What is the id of the product you would like to buy?"
    },
    {
      name: "stock",
      type: "input",
      message: "Enter the quantity."
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
        var quantity = res[0].stock_quantity;
        if (quantity >= answers.stock) {
          quantity = quantity - answers.stock;
          console.log(`There is ${quantity} remaining.`);
          console.log(`Thanks for purchasing! Your total is...`);
          connection.query(queryUpdate,[{stock_quantity: quantity},{item_id: id}], function(err) {
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


      // function startingQty() {
      //   // Selects all of the data from the MySQL products table
      //   connection.query(`SELECT stock_quantity FROM products WHERE item_id = ${id};`, function(err, res) {
      //     if (err) throw err;
      //     console.log(res);
      //   });
      // connection.end();
      // }


      //.then function concatenate id and update from mysql workbench

      //get quantity where item_id is equal to user input id


      // console.log(id);


      //prevent the order from going through error handling if not a number
      //if the stock quantity is less than 0 insufficient quantity and ask again

      //update the stock quantity This means updating the SQL database to reflect the remaining quantity.
      //delete quantity from stock_quantity

      //Once the update goes through, show the customer the total cost of their purchase.