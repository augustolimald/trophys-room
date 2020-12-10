import { resolve } from 'path';
import express, { Router } from 'express';

import {
  SessionController,
  UserController,
  GameController,
  PublisherController,
  WishlistController,
  GameDoneController,
  ReviewController,
} from './app/controllers';
import Upload from './lib/Upload';
import { Authentication, Pagination } from './app/middlewares';

const router = Router();

/**
 * Static Files
 */
router.use('/files', express.static(resolve(__dirname, '..', 'tmp')));

/**
 * Open Routes
 */
router.post('/login', SessionController.store);
router.post('/users', Upload.single('image'), UserController.store);

/**
 * Authenticated Routes
 */
router.use(Authentication);
router.post('/logout', SessionController.remove);

/**
 * User Routes
 */
router.get('/users', Pagination, UserController.index);
router.get('/users/:id_user', UserController.show);
router.put('/users/:id_user', UserController.update);
router.delete('/users/:id_user', UserController.remove);
router.patch('/users/:id_user/admin', UserController.changeAdmin);

/**
 * Game Routes
 */
router.get('/games', Pagination, GameController.index);
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
router.get('/genres', PublisherController.index);

/**
 * Wish Game Routes
 */
router.get('/users/:id_user/wish', WishlistController.index);
router.post('/users/:id_user/wish', WishlistController.store);
router.delete('/users/:id_user/wish/:id_game', WishlistController.remove);

/**
 * Played Game Routes
 */
router.get('/users/:id_user/played', GameDoneController.index);
router.post('/users/:id_user/played', GameDoneController.store);
router.delete('/users/:id_user/played/:id_game', GameDoneController.remove);

/**
 * Review Routes
 */
router.get('/games/:id_game/review', ReviewController.store);

export default router;
