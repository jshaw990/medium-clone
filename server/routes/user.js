const userController = require('./../controllers/user.ctrl')

module.exports = (router) => {
    // Get a user
    router
        .route('/user/:id')
        .get(userController.getUser)

    // Get user profile
    router 
        .route('/user/profile.:id')
        .get(userController.getUserProfile)

    // Add user
    router
        .route('/user')
        .post(userController.addUser)

    // Follow user
    router
        .route('/user/follow')
        .post(userController.followUser)
}