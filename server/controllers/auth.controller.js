import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import logger from '../config/winston';

export function login(req, res) {
    const { userid, password } = req.body;
    User.query({
        where: {userid: userid},
    }).fetch().then(user => {
        if (user) {
            if (password === user.get('password')) {

                const token = jwt.sign({
                    id: user.get('id'),
                    userid: user.get('userid')
                }, process.env.TOKEN_SECRET_KEY);

                res.send({
                    success: true,
                    token,
                    userid:  user.get('userid'),
                    username: user.get('username')
                });
            } else {
                logger.log('error', 'Authentication failed. Invalid password.');

                res.status(HttpStatus.UNAUTHORIZED).send({
                    success: false,
                    message: 'Authentication failed. Invalid password.'
                });
            }
        } else {
            logger.log('error', 'Invalid userID or password.');

            res.status(HttpStatus.UNAUTHORIZED).send({
                success: false, message: 'Invalid userID or password.'
            });
        }
    });
}
