// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeConfigProvider, ThemeProvider } from './features/theme'
import './index.css'
import './lib/utils/i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme='light'>
			<ThemeConfigProvider>
				<App />
			</ThemeConfigProvider>
		</ThemeProvider>
	</React.StrictMode>
)
