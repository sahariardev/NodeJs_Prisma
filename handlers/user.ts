import {comparePassword, createJwt, hashPassword} from "../auth/auth";
import prisma from "../db";

export const createNewUser = async (req: any, res: any) => {
    const user = await prisma.user.create({
        data: {
            userName: req.body.userName,
            password: await hashPassword(req.body.userPassword)
        }
    });

    //sign in user
    let token = createJwt(user);
    res.json({token});
}

export const signInUser = async (req: any, res: any) => {
    const user = await prisma.user.findFirst({
        where: {
            userName: req.body.userName
        }
    });

    if (!user) {
        res.status(401);
        res.json({message:"UserName/Password Invalid!"});
        return;
    }

    let isValid : boolean = await comparePassword(req.body.password, user.password);

    if (!isValid) {
        res.status(401);
        res.json({message:"UserName/Password Invalid!"});
        return;
    }
}