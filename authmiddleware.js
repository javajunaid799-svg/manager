
const authMiddleware = (req, res, next) => {
    // 1. Header-la irundhu token edukkurom
    const token = req.headers['authorization'];

    // 2. Token illana, user-a block pannurom
    if (!token) {
        return res.status(401).send("Log-in pannunga boss!");
    }

    // 3. Token valid-ah nu check pannurom (Simple check for example)
    if (token === "valid_secret_token") {
        next(); // Everything okay, adutha step-ku po!
    } else {
        res.status(403).send("Ungalukku permission illa!");
    }
};
