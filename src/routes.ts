import { resolve } from 'path';
import express, { Router } from 'express';
import Upload from './lib/Upload';
import { Authentication, Pagination } from './app/middlewares';
import { SessionController, UserController, GameController, PublisherController, WishlistController, GameDoneController, ReviewController } from './app/controllers';

const router = Router();

/**
 * Static Files
 */
router.use('/files', express.static(resolve(__dirname, '..', 'tmp')));

/**
 * Session Routes
 */
router.post('/login', SessionController.store);
router.use(Authentication);
router.post('/logout', Authentication, SessionController.remove);

/**
 * User Routes
 */
router.get('/users', Pagination, UserController.index);
router.post('/users', Upload.single('image'), UserController.store);
router.get('/users/:id_user', UserController.show);
router.put('/users/:id_user', UserController.update);
router.delete('/users/:id_user', UserController.remove);

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
 * Wishlist Routes
 */
router.get('/users/:id_user/wishlist', WishlistController.index);
router.post('/users/:id_user/wishlist', WishlistController.store);
router.delete('/users/:id_user/wishlist/:id_game', WishlistController.remove);

/**
 * Game Done Routes
 */
router.get('/users/:id_user/gamedone', GameDoneController.index);
router.post('/users/:id_user/gamedone', GameDoneController.store);
router.delete('/users/:id_user/gamedone/:id_game', GameDoneController.remove);

/**
 * Review Routes
 */
router.get('/games/:id_game/review', ReviewController.store);

export default router;