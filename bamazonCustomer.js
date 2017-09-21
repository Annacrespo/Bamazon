// you can include console.table here w/o attaching it to a variable
require("console.table");
const mysql = require("mysql");
const inquirer = require("inquirer");

//You will need your SQL connection code here
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
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
    productSearch();
  });
  // connection.end();
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
    // let id = parseInt(answers.item_id);
    // let qty = parseInt(answers.stock);

    let id = answers.item_id;
    let qty = answers.stock;
    // if (isNaN(id)) {
    //   console.log("Sorry that's not a number");
    //   // productSearch();
    // }
    // if (isNaN(qty)) {
    //   console.log("Sorry that's not a number2");
    // }
    var query = "SELECT * FROM products WHERE ?";
   
      connection.query(query, {item_id: 1010}, function (err, res) {
        let quantity = res[0].stock_quantity;
        if (quantity > answers.stock) {
          quantity = quantity - answers.stock;
          console.log(quantity);
        }
        //  else {
        //   console.log("Insufficient quantity!");
        // }
      })
    
      // productSearch();
      // } else {
      //   startingQty();
      // }
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

      console.log("Thank you for your purchase! Your total comes to...");
      //prevent the order from going through error handling if not a number
      //if the stock quantity is less than 0 insufficient quantity and ask again

      //update the stock quantity This means updating the SQL database to reflect the remaining quantity.
      //delete quantity from stock_quantity

      //Once the update goes through, show the customer the total cost of their purchase.




    
  })
}

// function runSearch() {
//   inquirer
//     .prompt({
//       name: "action",
//       type: "list",
//       message: "What would you like to do?",
//       choices: [
//         "Find songs by artist",
//         "Find all artists who appear more than once",
//         "Find data within a specific range",
//         "Search for a specific song"
//       ]
//     })
//     .then(function(answer) {
//       switch (answer.action) {
//         case "Find songs by artist":
//           artistSearch();
//           break;

//         case "Find all artists who appear more than once":
//           multiSearch();
//           break;

//         case "Find data within a specific range":
//           rangeSearch();
//           break;

//         case "Search for a specific song":
//           songSearch();
//           break;
//       }
//     });
// }

// function artistSearch() {
//   inquirer
//     .prompt({
//       name: "artist",
//       type: "input",
//       message: "What artist would you like to search for?"
//     })
//     .then(function(answer) {
//       var query = "SELECT position, song, year FROM top5000 WHERE ?";
//       connection.query(query, { artist: answer.artist }, function(err, res) {
//         for (var i = 0; i < res.length; i++) {
//           console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
//         }
//         runSearch();
//       });
//     });
// }

// function multiSearch() {
//   var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
//   connection.query(query, function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].artist);
//     }
//     runSearch();
//   });
// }

// function rangeSearch() {
//   inquirer
//     .prompt([
//       {
//         name: "start",
//         type: "input",
//         message: "Enter starting position: ",
//         validate: function(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         }
//       },
//       {
//         name: "end",
//         type: "input",
//         message: "Enter ending position: ",
//         validate: function(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         }
//       }
//     ])
//     .then(function(answer) {
//       var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
//       connection.query(query, [answer.start, answer.end], function(err, res) {
//         for (var i = 0; i < res.length; i++) {
//           console.log(
//             "Position: " +
//               res[i].position +
//               " || Song: " +
//               res[i].song +
//               " || Artist: " +
//               res[i].artist +
//               " || Year: " +
//               res[i].year
//           );
//         }
//         runSearch();
//       });
//     });
// }

// function songSearch() {
//   inquirer
//     .prompt({
//       name: "song",
//       type: "input",
//       message: "What song would you like to look for?"
//     })
//     .then(function(answer) {
//       console.log(answer.song);
//       connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) {
//         console.log(
//           "Position: " +
//             res[0].position +
//             " || Song: " +
//             res[0].song +
//             " || Artist: " +
//             res[0].artist +
//             " || Year: " +
//             res[0].year
//         );
//         runSearch();
//       });
//     });
// }




