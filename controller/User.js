const { comparePassword } = require('../helper/bcrypt');
const { User } = require('../models/');

class UserController {

    static async register(req, res) {
        const { email, password } = req.body;
        try {
            const data = await User.findAll();
            for (var key in data) {
                if (email == data[key].email) {
                    return res.status(500).json({
                        message: 'This email is already in use '
                    })
                }
            }
            await User.create(
                {
                    email,
                    password,
                }
            )
            return res.status(201).json(
                {
                    message: 'Success create data user'
                }
            );
        } catch (error) {
            console.log(req.body.email);
            console.log(req.body.password);
            return res.status(500).json(error);
        }

    }

    static async login(req, res) {
        const { email, password } = req.body;
        try {
            const dataLogin = await User.findOne({
                where: {
                    email: email
                }
            });

            if (dataLogin) {
                const isCorrect = comparePassword(password, dataLogin.password);
                if (isCorrect) {
                    return res.json({
                        message: 'BISA NIH'
                    })
                }

            }
        } catch (error) {

        }
    }
}

module.exports = UserController;