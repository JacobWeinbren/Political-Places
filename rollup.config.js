import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import deepcopy from 'deepcopy';
import path from 'path';
import json from '@rollup/plugin-json';

const production = !process.env.ROLLUP_WATCH;
//const production = true;

//MK Template and inputs
var mk_inputs = ['src/mk/mob_dep/main.js', 'src/mk/classification/main.js', 'src/mk/population/main.js', 'src/mk/politics/main.js', ]
var mk_default = {
    output: [{
        format: 'es',
        chunkFileNames: 'chunks/[name]-[hash].js'
    }],
    treeshake: production,
    preserveEntrySignatures: false
}

//MK Plugins (to generate instances of plugins)
function mk_plugins() {
    return [
        commonjs(),
        resolve(),
        postcss({
            extensions: ['.css'],
            extract: true,
            minimize: true
        }),
        json(),
        production && terser()
    ]
}

//Sets current project
var export_list = []
var current_focus = 'src/mk/population/main.js'
var current_template = deepcopy(mk_default);
var current_inputs = mk_inputs;
var result;

//If not production, just build focus
if (!production) {
    current_inputs = [current_focus];
}

for (var i = 0; i < current_inputs.length; i++) {
    //Deep clone
    var temp_item = deepcopy(current_template);

    //Get current file name
    var file_name = current_inputs[i]
    file_name = path.resolve(file_name)
    temp_item.input = file_name

    //Get output
    var dir = path.dirname(file_name);
    dir = dir.replace("src/", "dist/");
    dir = path.resolve(dir);

    //Plugins
    temp_item.plugins = mk_plugins();

    //Add to result list
    temp_item.output[0].dir = dir;
    export_list.push(temp_item);
}
var result = export_list;

export default result;