const express = require('express');

//import { createUser,getAllUsers, getUserInfoByID} from '../controllers/user.controller.js';
const {createUser,getAllUsers,getUserInfoByID}=require('../controllers/user.controller.js');
const router = express.Router();

router.post('/', createUser);
// router.get('/', getAllUsers);

// router.get('/:id', getUserInfoByID);

module.exports = router;