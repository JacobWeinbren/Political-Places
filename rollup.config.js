import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss'
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/mk/slider/main.js',
    output: {
        dir: 'dist/mk/slider',
        format: 'es',
        sourcemap: false,
    },
    treeshake: false,
    preserveEntrySignatures: false,
    plugins: [
        terser(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }),
        nodeResolve({
            preferBuiltins: false
        }),
        commonjs({
            sourceMap: false
        }),
        scss({
            outputStyle: "compressed",
            output: 'dist/mk/slider/bundle.css',
        })
    ],
};