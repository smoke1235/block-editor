import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	root: "./resources",
	plugins: [react(), splitVendorChunkPlugin()],
	loader: { '.js': 'jsx' },
	
	server: {
		hmr: {
            host: 'localhost',
        },
		proxy: {
			'/laraberg': {
				target: 'https://bh.smokenetwork.nl/blockeditor/',
				changeOrigin: true,
				//rewrite: (path) => path.replace(/^\/laraberg/, ''),
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
			'laraberg': {
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
