const router = require('express').Router();
const userCtrl = require('../controllers/user-controller');

/**
 * @openapi
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required: 
 *              - username
 *              - password
 *              - email
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the user
 *              username:
 *                  type: string
 *                  description: The user username
 *              password: 
 *                  type: password
 *                  description: The user password
 *              email:
 *                  type: email
 *                  description: The user email
 *          example: 
 *              id: d5fE_asz
 *              username: Toto
 *              password: toto123
 *              email: toto@toto.fr
 */

router.post('/user', userCtrl.createUser);
router.put('/user/:id', userCtrl.updateUser);
router.put('/add-score/:id', userCtrl.addScore);
router.delete('/user/:id', userCtrl.deleteUser);
router.delete('/user-username/:username', userCtrl.deleteUserByUsername);

/**
 * @openapi
 * /api/user/{id}:
 *  get:
 *      summary: Get the user by id
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: The user id
 *      responses:
 *          200:
 *              description: The user description by id 
 *          contents:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *          400:
 *              description: The user was not found
 */
router.get('/user/:id', userCtrl.getUserById);
router.get('/user-username/:username', userCtrl.getUserByUsername);

/**
 * @openapi
 * tags:
 *  name: Users
 *  description: The users managing API
 */

/**
 * @openapi
 * /api/users:
 *  get:
 *      summary: Returns the list of all the users
 *      tags: [Users]
 *      responses: 
 *          200:
 *              description: The list of the users
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 */
router.get('/users', userCtrl.getUsers);
router.post('/login', userCtrl.logIn);

module.exports = router;