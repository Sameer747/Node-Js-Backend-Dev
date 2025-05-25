import { Router } from "express";

const userRoute = Router();

// GET / -> get all the users
userRoute.get('/',(req,res)=>{
    res.send({title: 'GET all user'});
});

// GET /:id -> get user by id
userRoute.get('/:id', (req, res) => {
  res.send({ title: "GET a user details" });
});

// POST / -> create a user
userRoute.post('/', (req, res) => {
  res.send({ title: "CREATE a user" });
});

// PUT /:id -> update a user
userRoute.put('/:id', (req, res) => {
  res.send({ title: "UPDATE a user" });
});

// DELETE /:id delete a user
userRoute.delete("/:id", (req, res) => {
  res.send({ title: "DELETE a user" });
});

export default userRoute;