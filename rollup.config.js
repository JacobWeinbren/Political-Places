import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss'
import { babel } from '@rollup/plugin-babel';

export default {
    input: 'src/scripts/main.js',
    output: {
        file: 'dist/main.js',
        format: 'cjs'
    },
    plugins: [
        scss({
            outputStyle: "compressed"
        }),
        commonjs(),
        nodeResolve(),
        terser(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
};