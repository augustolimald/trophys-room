import multer from 'multer';
import { Router } from 'express';

import {
  SessionController,
  UserController,
  GameController,
  PublisherController,
  WishlistController,
  GameDoneController,
  ReviewController,
  GenreController,
} from './app/controllers';
import { options } from './lib/Upload';
import { Authentication } from './app/middlewares';

const router = Router();

/**
 * Open Routes
 */
router.post('/login', SessionController.store);
router.post('/users', multer(options('users', 'image')).single('image'), UserController.store);

/**
 * Authenticated Routes
 */
router.use(Authentication);
router.post('/logout', SessionController.remove);

/**
 * User Routes
 */
router.get('/users', UserController.index);
router.put('/users/:id_user', UserController.update);
router.delete('/users/:id_user', UserController.remove);
router.patch('/users/:id_user/admin', UserController.changeAdmin);

/**
 * Game Routes
 */
router.get('/games', GameController.index);
router.post('/games', GameController.store);
router.get('/games/:id_game', GameController.show);
router.put('/games/:id_game', GameController.update);
router.delete('/games/:id_game', GameController.remove);

/**
 * Publisher Routes
 */
router.get('/publishers', PublisherController.index);

/**
 * Genre Routes
 */
router.get('/genres', GenreController.index);

/**
 * Wish Game Routes
 */
router.post('/users/:id_user/wish', WishlistController.store);
router.delete('/users/:id_user/wish/:id_game', WishlistController.remove);

/**
 * Played Game Routes
 */
router.post('/users/:id_user/played', GameDoneController.store);
router.delete('/users/:id_user/played/:id_game', GameDoneController.remove);

/**
 * Review Routes
 */
router.post('/games/:id_game/review', ReviewController.store);

export default router;
