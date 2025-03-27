require('dotenv').config();

const config = {
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID
    },
    session: {
        secret: process.env.SESSION_SECRET
    },
    admin: {
        username: process.env.ADMIN_USERNAME,
        password: process.env.ADMIN_PASSWORD
    },
    email: {
        service: process.env.EMAIL_SERVICE,
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASSWORD,
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO
    }
};

module.exports = config; 