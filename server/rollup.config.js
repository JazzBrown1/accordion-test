import typescript from '@rollup/plugin-typescript';

const ex = {
  input: './src/server.ts',
  output: [
    { file: './dist/entry.js', format: 'cjs' },
  ],
  plugins: [
    typescript({ lib: ['es5', 'es6', 'dom'], target: 'es6' }),
  ],
};

export default ex;
