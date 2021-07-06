import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import path from 'path';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/mk/slider/main.js',
    output: [{
        dir: path.resolve('dist/mk/slider'),
        format: 'es',
        chunkFileNames: 'chunks/[name]-[hash].js'
    }],
    treeshake: production,
    preserveEntrySignatures: false,
    plugins: [
        commonjs(),
        resolve(),
        postcss({
            extensions: ['.css'],
            extract: true
        }),
        copy({
            targets: [{
                src: path.resolve(__dirname, 'node_modules/@esri/calcite-components/dist/calcite/assets'),
                dest: path.resolve(__dirname, 'dist/mk/slider')
            }, ]
        }),
        production && terser()
    ]
};