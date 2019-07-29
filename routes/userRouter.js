const routes = function(router) {


    let userController = require('../controller/UserController');

    router.get('/users', userController.getAllUsers);

    // router.post('/users', userController.createUser);
    // router.get('/users/:userId', userController.getUserById);
    // router.put('/users/:userId', userController.updateUser);
    // router.delete('/users/:userId', userController.deleteUser);
};

module.exports = routes;



