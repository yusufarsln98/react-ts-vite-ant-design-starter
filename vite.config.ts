import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig, normalizePath } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		viteStaticCopy({
			targets: [
				{
					src: normalizePath(path.resolve('./src/assets/locales')),
					dest: normalizePath(path.resolve('./dist')),
				},
			],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'antd-vendor': ['antd', '@ant-design/icons'],
				},
			},
		},
	},
})
