import express from 'express';
import * as logCtrl from '../controllers/log.controller';

const logRoutes = express.Router();

logRoutes.route('/:userId')
    .post((req, res) => {
        logCtrl.save(req, res)
    });

logRoutes.route('/:userId')
  .get((req, res) => {
    logCtrl.getAll(req, res);
  });

export default logRoutes;
