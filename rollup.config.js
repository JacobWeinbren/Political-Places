import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss'
import { babel } from '@rollup/plugin-babel';

export default {
    input: 'src/js/main.js',
    output: {
        file: 'dist/main.js',
        format: 'esm'
    },
    plugins: [
        scss({
            outputStyle: "compressed"
        }),
        nodeResolve(),
        terser(),
        babel({
            exclude: 'node_modules/**'
        }),
    ],
};