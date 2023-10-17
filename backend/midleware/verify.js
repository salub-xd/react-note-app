const jwt = require('jsonwebtoken');

function verify(req, res, next) {
    const authHeader = req.headers.token;
    try {
        if (!authHeader) {
<<<<<<< HEAD
           return res.status(403).json({ error: "Token not found" });
        }
        const token = authHeader;
        //    const data =
            // jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            //     if (err) {
            //        return res.status(404).json({ error: "Token is not valid" });
=======
            res.status(404).json({ error: "Token not found" });
        }
        const token = authHeader.split(" ")[1];
        //    const data =
            // jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            //     if (err) {
            //         res.status(404).json({ error: "Token is not valid" });
>>>>>>> dea058703f705727c670db120d2df91ba5eb1790
            //     }
            //     req.user = user;
        const data = jwt.verify(token, process.env.SECRET_KEY);
        req.user = data.user;
        // })
        next();
    } catch (err) {
<<<<<<< HEAD
        return  res.status(403).json({ error: "Token not found" });
=======
        res.status(404).json({ error: "Token not found" });
>>>>>>> dea058703f705727c670db120d2df91ba5eb1790
    }
}

module.exports = verify;