const commonjs = require("@rollup/plugin-commonjs");
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const builtins = require('rollup-plugin-node-builtins');
const replace = require('rollup-plugin-replace');
const nodePolyfills = require('rollup-plugin-node-polyfills');

let plugins = [
    nodePolyfills(),
    nodeResolve({ preferBuiltins: true }),
    replace({ 'process.env.NODE_ENV': `develop` }),
    builtins(),
    commonjs()
];

module.exports = {
    input: "./index.js",
    plugins: plugins,
    output: {
        name: 'vendor',
        file: '/vendor.js',
        format: 'cjs',
        sourcemap: true
    },
    treeshake: false
};