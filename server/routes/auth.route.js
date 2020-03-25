import express from 'express';
import * as authCtrl from '../controllers/auth.controller';

const authRoutes = express.Router();

authRoutes.route('/login')
    .post((req, res) => {
        authCtrl.login(req, res)
    })

export default authRoutes;
