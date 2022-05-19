import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.main,
            format: 'es',
            exports: 'named',
            sourcemap: true,
            strict: true,
        }
    ],
    plugins: [
        sass({insert: true}),
        typescript()
    ],
    external: ['react', 'react-dom']
}