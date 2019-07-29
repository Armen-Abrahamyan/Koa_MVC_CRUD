class UserController {

    static async getAllUsers(ctx, next) {
        // try {
        //     let student = await Student.find({});
        //     ctx.body = student;
        // } catch (err) {
        //     ctx.status = err.status || 500;
        //     ctx.body = err.message;
        // }

        try {
            ctx.body = ["1", "2", "3", "Hello world", {
                name: "Aro",
                age: 25
            }];
            console.log("mtelem")
        } catch (e) {
            ctx.status = err.status || 500;
            ctx.body = err.message || 500;
            console.log("error em tmel")
        }

    };

    static async createUser(ctx, next) {
        try {
            let new_student = new Student(ctx.request.body);
            await new_student.save();
            ctx.body = new_student;
        } catch (err) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
        }
    };


    static async getUserById(ctx, next) {
        try {
            let student = await Student.findById(ctx.params.studentId);
            ctx.body = student;
        } catch (error) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
        }
    };

    static async updateUser() {
        try {
            let student = await Student.findOneAndUpdate({_id: ctx.params.studentId}, ctx.request.body, {new: true});
            ctx.body = student;
        } catch (error) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
        }
    }

    static async deleteUser() {
        try {
            let student = await Student.remove({_id: ctx.params.studentId});
            ctx.body = {message: 'Student successfully deleted'};
        } catch (error) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
        }
    }


}

module.exports = UserController;
