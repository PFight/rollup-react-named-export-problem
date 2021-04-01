Repro:

    npm install
    npm run build

Result:

    Error: 'typeOf' is not exported by node_modules\react-is\index.js, imported by node_modules\styled-components\dist\styled-components.esm.js


If you comment row `nodePolyfills(),` in rollup.config.js, then problem dissapeared.
