import { resolve } from 'path';

const aliases = {
  '@components': resolve(__dirname, './src/components'),
  '@utils': resolve(__dirname, './src/utils'),
  '@store': resolve(__dirname, './src/store'),
  '@config': resolve(__dirname, './src/config'),
};

export default aliases;
