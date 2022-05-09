const db = require('./db/models');
const loginUser = (req, res, user) => {
    req.session.auth = {
        userId: user.id,
    };
};

const logoutUser = (req, res) => {
    delete req.session.auth;
};

const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/user/login');
    }
    return next();
};

const restoreUser = async (req, res, next) => {
    // Log the session object to the console
    // to assist with debugging.
    console.log(req.session);

    if (req.session.auth) {
        const { userId } = req.session.auth;

        try {
            const User = await db.user.findByPk(userId);

            if (User) {
                res.locals.authenticated = true;
                res.locals.user = User;
                next();
            }
        } catch (err) {
            res.locals.authenticated = false;
            next(err);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
};

module.exports = {
    loginUser,
    logoutUser,
    restoreUser,
    requireAuth
};
