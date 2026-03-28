const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 
const bcrypt = require('bcryptjs'); // Necesitamos esto para encriptar

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Para que no se repitan correos
        validate: { isEmail: true }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    hooks: {
        // Esto encripta la contraseña AUTOMÁTICAMENTE antes de guardar en la DB
        beforeCreate: async (user) => {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        }
    }
});

module.exports = User;