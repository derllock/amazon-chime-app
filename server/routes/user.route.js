import express from 'express';

import { createUser,getAllUsers, getUserInfoByID} from '../controllers/user.controller.js';
const router = express.Router();

router.post('/', createUser);
// router.get('/', getAllUsers);

// router.get('/:id', getUserInfoByID);

export default router;