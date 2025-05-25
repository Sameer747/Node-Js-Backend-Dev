import { Router } from "express";

const subscriptionRouter = Router();

// GET / -> get all subscription
subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GET all subscription" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GET subscription details" });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "CREATE subscription" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE subscription by id" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE subscription by id" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "GET all user subscription" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL subscription" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET upcoming subscription renewals" });
});

export default subscriptionRouter;
