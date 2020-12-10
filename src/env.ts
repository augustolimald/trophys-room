import dotenv, { DotenvConfigOutput } from 'dotenv';
import { resolve } from 'path';

class Env {
  constructor() {
    const filename = process.env.NODE_ENV === 'test' ? '.env.testing' : '.env';

    dotenv.config({
      path: resolve(__dirname, '..', filename),
    });
  }

  get(key: string, defaultValue?: string | number): string {
    return eval(`process.env['${key}']`) || defaultValue || '';
  }
}

export default new Env();
