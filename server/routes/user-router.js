const router = require('express').Router();
const userCtrl = require('../controllers/user-controller');

router.post('/create-user', userCtrl.createUser);
router.put('/update-user/:id', userCtrl.updateUser);
router.delete('/delete-user/:id', userCtrl.deleteUser);
router.get('/get-user/:id', userCtrl.getUserById);
/**
 * @openapi
 * /users:
 *   get:
 *     description: All users
 *     responses:
 *       '200':
 *         description: Returns all the users
 *         content: 
 *          application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  User:
 *                    type: object
 *                    properties: 
 *                      id:
 *                        type: integer
 *                        format: int64 
 *                      username: 
 *                        type: string 
 *                        example: Toto
 *                      password: 
 *                        type: string 
 *                        description: The user password is crypted.
 *                      email: 
 *                        type: string 
 *                        description: Must be a valid email format.
 *       '400':
 *         description: Invalid status value
 */
router.get('/users', userCtrl.getUsers);
router.post('/login', userCtrl.logIn);

module.exports = router;