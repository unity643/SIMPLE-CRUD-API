const bcrypt = require("bcryptjs");
const User = require("./models/user.model");

const createAdmin = async () => {
    try {
        const adminExists = await User.findOne({
            email: process.env.ADMIN_EMAIL
        });

        if (adminExists) {
            console.log("Admin already exists");
            return;
        }

        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

        await User.create({
            name: "Admin",
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword,
            role: "admin"
        });

        console.log("Admin created successfully");
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = createAdmin;