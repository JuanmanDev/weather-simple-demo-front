// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// Put here which enviroment variables want to share with the front
const sharedEnvs = [ 'OPENWEATHER_API_KEY' ];

const computedSharedEnvs = sharedEnvs.reduce((o, v) => {
  o[v] = process.env[v];

  return o;
}, {});

const env = {
  ...computedSharedEnvs
};

module.exports.env = env;
