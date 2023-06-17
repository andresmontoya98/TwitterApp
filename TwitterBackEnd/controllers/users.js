const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateError } = require('../helpers');
const { createUser, getUserById, getUserByEmail } = require('../repositories/userRepository');

const newUserController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        //Esto deberia ser sustituido por joi
        if (!email || !password) {
            throw generateError('Debes enviar un email y una password', 400);
        }

        const id = await createUser(email, password);

        res.send({
            status: 'success',
            message: `User created with id: ${id}`,
        });
    } catch (error) {
        next(error);
    }
};

const getUserController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = await getUserById(id);

        res.send({
            status: 'success',
            data: user,
        });
    } catch (error) {
        next(error);
    }
}

const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw generateError('Debes enviar un email y una password', 400);
        }

        // Recojo los datos de la base de datos del usuario con ese mail
        const user = await getUserByEmail(email);

        if (!user) {
            throw generateError('No existe un usuario con ese email y/o password', 401);
        }

        // Compruebo que las contraseñas coinciden
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            throw generateError('No existe un usuario con ese email y/o password', 401);
        }

        // Creo el payload del token
        const payload = { id: user.id };

        // Firmo el token
        const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '30d',
        });

        // Envío el token
        res.send({
            status: 'ok',
            data: token,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    newUserController,
    getUserController,
    loginController,

}