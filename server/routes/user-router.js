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
 *              scores: 
 *                  type: object
 *                  properties:
 *                      distancePays:
 *                          type: array
 *                          items: 
 *                              type: integer
 *                              description: The score for the quizz of distance between countries
 *                      distanceVilles:
 *                          type: array 
 *                          items: 
 *                              type: integer
 *                              description: The score for the quizz of distance between cities
 *                      populationPays: 
 *                          type: array
 *                          items: 
 *                              type: integer
 *                              description: The score for the quizz of population between countries
 *                      populationVilles:
 *                          type: array
 *                          items: 
 *                              type: integer
 *                              description: The score for the quizz of population between cities
 *          example: 
 *              id: d5fE_asz
 *              username: Toto
 *              password: toto123
 *              email: toto@toto.fr
 *              scores:
 *                  distancePays: [100, 200, 963]
 *                  distanceVilles: [0]
 *                  populationPays: []
 *                  populationVilles: [1000,120,165]
 */

/**
 * @openapi
 * /api/user:
 *  post:
 *      summary: Create a new user 
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          email: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses: 
 *          200:
 *              description: User created successfully
 *          404:
 *              description: The user was not found
 *          500:
 *              description: Some error server
 */
router.post('/user', userCtrl.createUser);

/**
 * @openapi
 * /api/login:
 *  post:
 *      summary: Log a user 
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses: 
 *          200:
 *              description: Logged successfully
 *          404:
 *              description: The user was not found
 *          500:
 *              description: Some error server
 */
router.post('/login', userCtrl.logIn);

/**
 * @openapi
 * /api/user/{id}:
 *  put:
 *      summary: Update the user by the id 
 *      tags: [Users]
 *      parameters: 
 *        - in: path
 *          name: id
 *          schema: 
 *              type: string
 *          required: true
 *          description: The user id
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: The user was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: The user was not found
 *          500:
 *              description: Some error server
 */
router.put('/user/:id', userCtrl.updateUser);

router.put('/user/compare-password/:id', userCtrl.comparePassword);

/**
 * @openapi
 * /api/add-score/{id}:
 *  put:
 *      summary: Update the user score by the id 
 *      tags: [Users]
 *      parameters: 
 *        - in: path
 *          name: id
 *          schema: 
 *              type: string
 *          required: true
 *          description: The user id
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: The user score was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: The user was not found
 *          500:
 *              description: Some error server
 */
router.put('/add-score/:id', userCtrl.addScore);

/**
 * @openapi
 * /api/user/{id}:
 *  delete:
 *      summary: Delete the user by id
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
 *              description: The delete user by id 
 *          contents:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *          400:
 *              description: The user was not delete by id
 */
router.delete('/user/:id', userCtrl.deleteUser);

/**
 * @openapi
 * /api/user-username/{username}:
 *  delete:
 *      summary: Delete the user by username
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: username
 *            schema: 
 *              type: string
 *            required: true
 *            description: The user username
 *      responses:
 *          200:
 *              description: Delete the user by username
 *          contents:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *          400:
 *              description: The delete user by username failed
 */
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
/**
 * @openapi
 * /api/user-username/{username}:
 *  get:
 *      summary: Get the user by username
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: username
 *            schema: 
 *              type: string
 *            required: true
 *            description: The user username
 *      responses:
 *          200:
 *              description: The user description by username 
 *          contents:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *          400:
 *              description: The user was not found by username
 */
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

module.exports = router;