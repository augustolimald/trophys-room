import { sign, verify, VerifyErrors } from 'jsonwebtoken';

const secret = process.env.API_KEY || 'nao-tem-key-haha';

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
