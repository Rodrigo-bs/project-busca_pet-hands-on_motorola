import { Request, Response } from "express";
import jwp from 'jsonwebtoken';
import { decode } from "punycode";

const authMiddleware = (req: any, res: any, next: any) => {
    const authHeader: string = req.headers.authorization as string;

    if (!authHeader) {
        return res.status(401).json({ 'error': 'Token de autenticação inválido' });
    }
    
    const path = authHeader.split(' ');
    
    console.log(path);
    if (path.length != 2) {
        return res.status(401).json({ 'error': 'Token em um formato inválido' });
    }

    const [ scheme, token ] = path;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ 'error': 'Token em um formato inválido' });
    }

    jwp.verify(token, process.env.SECRET_TOKEN_KEY as string, (err, decoded) => {
        if (err) {
            return res.status(401).json({ 'error': 'Token inválido' });
        }

        if (!decoded) {
            return res.status(401).json({ 'error': 'Erro na validação' });
        }

        req.id_user = decoded.id as string;
        return next();
    });
}

export default authMiddleware;