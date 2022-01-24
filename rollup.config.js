import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  input: "custom-templates/image-grids/flex-dest/dev/js/App.jsx",
  output: {
    file: "custom-templates/image-grids/flex-dest/dev/js/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "custom-templates/image-grids/flex-dest/dev"],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "custom-templates/image-grids/flex-dest/dev/js/bundle.js" }),
  ]
};