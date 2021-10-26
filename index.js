const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// open cors middleware
app.use(cors());
// convert stringify to json by default
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From My first node with hafiz nodemon");
});

// all users data
const users = [
  {
    id: 0,
    name: "Shabana",
    email: "Shabana@gmail.com",
    phone: "01788888888",
  },
  {
    id: 1,
    name: "Shabnoor",
    email: "Shabnoor@gmail.com",
    phone: "01788888888",
  },
  {
    id: 2,
    name: "Shrabonti",
    email: "Shrabonti@gmail.com",
    phone: "01788888888",
  },
  {
    id: 3,
    name: "Suchorita",
    email: "Suchorita@gmail.com",
    phone: "01788888888",
  },
  {
    id: 4,
    name: "Soniya",
    email: "Soniya@gmail.com",
    phone: "01788888888",
  },
  {
    id: 5,
    name: "Susmita",
    email: "Susmita@gmail.com",
    phone: "01788888888",
  },
];

// get search result or get all users
app.get("/users", (req, res) => {
  const search = req.query.search;
  // use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(res.send(users));
  }
});

// app.post
app.post("/users", (req, res) => {
  // get the input field value
  const newwUser = req.body;
  // set users length as id (for now only)
  newwUser.id = users.length;
  // push new user
  users.push(newwUser);

  console.log("hitting the post", req.body);
  // send to the client side
  // res.send(JSON.stringify(newwUser));
  res.send(newwUser);
});

// get specific user (dynamic api)
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

// example for another address
app.get("/fruits", (req, res) => {
  res.send(["mango", "oranges", "banana", "apple"]);
});

// example for sub-address
app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("This is a fazli mango");
});

// checking whether port is working or not in cmd
app.listen(port, () => {
  console.log("listening to port", port);
});
