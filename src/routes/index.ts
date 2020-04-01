import {Router} from 'express';
const router = Router();

import {getUsers, getUserByID, createUser, updateUser, deleteUser} from '../controllers/index.controllers';

router.get('/users', getUsers);
router.get('/users/:id', getUserByID);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;