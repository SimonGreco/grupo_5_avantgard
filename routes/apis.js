const express = require("express");
const router = express.Router();
const apiControllers = require("../controllers/apiControllers")

router.get("/users", apiControllers.userList);
router.get("/users/:id", apiControllers.userDetail);
router.get("/products", apiControllers.productsList)




module.exports = router