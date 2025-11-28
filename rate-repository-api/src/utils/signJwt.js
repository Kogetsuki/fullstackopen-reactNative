import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

const signJwt = (payload, options) => jwt.sign(payload, JWT_SECRET, options);

export default signJwt;
