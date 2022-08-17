import express from 'express';
import UserController from '../controllers/UserController';
const router = express.Router();

// CREATE
router.post('/users', UserController.create);

// READ
router.get('/users', UserController.findAll);

router.get('/users/:userId', UserController.findOne);

// UPDATE 
router.put('/users/:userId', UserController.update);

// DELETE
router.delete('/users/:userId', UserController.destroy);

export { router };