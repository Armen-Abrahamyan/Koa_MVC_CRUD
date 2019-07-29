const users = [
    {
        id: 1,
        firstName: "Poxos",
        lastName: "Poxosyan ",
        age: 10
    },
    {
        id: 2,
        firstName: "Petros",
        lastName: "Petrosyan",
        age: 30
    }
];

class UserController {

    static async getAllUsers(ctx, next) {

        try {
            ctx.body = users;
        } catch (e) {
            ctx.status = 500;
            ctx.body = 500;
        }
    };

    static async createUser(ctx, next) {
        try {
            users.push(ctx.request.body);
            ctx.body = users;
        } catch (err) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
        }
    };

    static async getUserById(ctx, err, next) {
        try {
            const userId = parseInt(ctx.params.id);
            const theUser = users.filter(user => user.id === userId)[0];
            if (theUser) {
                ctx.body = theUser;
            }
        } catch (error) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
        }
    };

    static async updateUser(ctx, err, next) {
        try {
            const userId = parseInt(ctx.params.id);
            const theUser = users.filter(user => user.id === userId)[0];
            if (theUser) {
                const newUser = ctx.request.body;
                theUser.firstName = newUser.firstName;
                theUser.lastName = newUser.lastName;
                theUser.age = newUser.age;
                ctx.body = theUser;
            }
        } catch (error) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
        }
    }

    static async deleteUser(ctx, err, next) {
        try {
            const userId = parseInt(ctx.params.id);
            const currentUser = users.filter(user => user.id === userId)[0];
            if (currentUser) {
                users.splice(userId, 1);
                ctx.body = ("User successfully deleted");
            } else {
                ctx.body = "Not deleted";
            }
        } catch (error) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
        }
    }
}

module.exports = UserController;
