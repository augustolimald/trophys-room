import { sign, verify, VerifyErrors } from 'jsonwebtoken';
import Env from '../env';

const secret = Env.get('API_KEY', 'nao-tem-key-haha');

/**
 * Generate a token
 * @param id identification of the user
 * @param expiration limit time to be valid
 * @returns a valid JWT token
 */
function generateToken(id: number, expiration?: string): string {
  if (!expiration) {
    return sign({ id }, secret);
  }

  return sign({ id }, secret, {
    expiresIn: expiration,
  });
}

interface ITokenReturn {
  error: VerifyErrors | null;
  decoded: any;
}

/**
 * Validate a given token
 * @param token the token to be validated
 * @returns an object that contains the error or the content of the decoded token
 */
async function validateToken(token: string): Promise<ITokenReturn> {
  return new Promise(resolve => {
    verify(token, secret, (error, decoded) => {
      resolve({ error, decoded });
    });
  });
}

export { generateToken, validateToken };

export default {
  generate: generateToken,
  validate: validateToken,
};
