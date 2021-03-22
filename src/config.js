const dotEnvPath = process.env.NODE_ENV ? '.env.production' : '.env';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

dotenv.config({ path: dotEnvPath });

const config = {
  REACT_APP_BE_URI: process.env.REACT_APP_BE_URI,
  isProduction: process.env.REACT_APP_ENV === 'production',
};

module.exports = config;

for (const key of Object.keys(config)) {
  if (!(key in process.env) && key !== 'isProduction') {
    throw new Error(`Missing required config key: ${key}`);
  }
}
