import express from "express";
import {
  orderController,
  productController,
  userController,
} from "../controllers";

const router = express.Router();

router.post("/add-product", productController.addProducts);

router.get("/products", productController.getProducts);

router.get("/product/:id", productController.getProductDetails);

router.post("/order/create", orderController.createOrder);

router.put("/order/:id/edit", orderController.editOrder);

router.post("/user/signup", userController.signUp);

router.post("/user/login", userController.loginUser);

// router.post("/user/signup", userController.getUser);

// router.delete("")

// router.get("/new-user/order", getUserOrder);

module.exports = router;
