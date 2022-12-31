import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const comparePassword = (password: any, hash: any) => {
    return bcrypt.compare(password, hash);
}

export const hashPassword = (password: any) => {
    return bcrypt.hash(password, 5);
};

export const createJwt = (user: any) => {
    // @ts-ignore
    const token = jwt.sign({id: user.id, username: user.name}, process.env.JWT_SECRET);
    return token;
}

export const protect = (req: any, res: any, next: any) => {
    const bearer = req.header.authorization;

    if (!bearer) {
        res.status(401);
        res.json({message: 'Not Authorized'});
        return;
    }

    const [, token] = bearer.split(' ');

    if (!token) {
        res.status(401);
        res.json({message: 'Not Authorized'});
        return;
    }

    try {
        // @ts-ignore
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (e) {
        if (!token) {
            res.status(401);
            res.json({message: 'Not Authorized'});
            return;
        }
    }
}