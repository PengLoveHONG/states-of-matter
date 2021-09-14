import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import cssOnly from "rollup-plugin-css-only";
import svelte from "rollup-plugin-svelte";
import {terser} from "rollup-plugin-terser";
import preprocess from "svelte-preprocess";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "dist/build/bundle.js"
  },
  plugins: [
    commonjs(),
    cssOnly({
      output: "bundle.css"
    }),
    nodeResolve({
      browser: true,
      dedupe: ["svelte"]
    }),
    typescript({
      sourceMap: !production,
      inlineSources: !production
    }),
    svelte({
      preprocess: preprocess({
        sourceMap: !production
      }),
      compilerOptions: {
        dev: !production
      }
    }),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};