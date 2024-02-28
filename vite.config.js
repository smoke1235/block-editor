import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import http from "https";

// https://vitejs.dev/config/
/*export default defineConfig({
  plugins: [react()],
  loader: { '.js': 'jsx' },
  server: {
    proxy: {
      '/api': {
        target: "https://bh.smokenetwork.nl",
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace('/api', ''),
      }
    }
  
  }
    
})*/


export default defineConfig({
  root: "./playground",
  plugins: [react()],
  loader: { '.js': 'jsx' },
  server: {
    proxy: {
      
      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      '/laraberg': {
        target: 'https://bh.smokenetwork.nl/blockeditor/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/laraberg/, ''),
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      },
      
      
      
    },
  },
})
