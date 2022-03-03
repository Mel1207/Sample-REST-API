import express from "express";
import { createUser, getUser, getSingleUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// GET ALL Users
router.get('/', getUser)

// ADD User
router.post('/', createUser);

// GET SINGLE User
router.get('/:id', getSingleUser);

// DELETE User
router.delete('/:id', deleteUser); 

// UPDATE User
router.patch('/:id', updateUser);


export default router;