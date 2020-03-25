import express from 'express';
import authRoutes from './auth.route';
import logRoutes from './log.route';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/log', logRoutes);

export default router;