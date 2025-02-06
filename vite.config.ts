import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: ["src/main.tsx"], // Adjust path to your entry file
      name: "Vinmin",
      formats: ["es", "cjs"], // Generate both ESM and CommonJS
      fileName: (format) => `vinmin.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Prevent bundling React (important!)
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
})
