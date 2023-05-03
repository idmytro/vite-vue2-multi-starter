import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import babel from "vite4-plugin-babel";

export default defineConfig({
  plugins: [
    vue(),
    babel(),
  ],
});
