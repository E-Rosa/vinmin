import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import postcss from "rollup-plugin-postcss"

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ["src/entry.ts"], // Adjust path to your entry file
      name: "Vinmin",
      formats: ["es"], // Generate both ESM and CommonJS
      fileName: "vinmin"
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Prevent bundling React (important!)
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      plugins: [postcss()]
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true,
      copyDtsFiles: true, // Ensures all .d.ts files are included
    }),
  ],
});
