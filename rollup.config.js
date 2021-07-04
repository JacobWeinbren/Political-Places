import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss'

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
        terser()
    ],
};