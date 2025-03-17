// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeConfigProvider, ThemeProvider } from './features/theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme='light'>
			<ThemeConfigProvider>
				<App />
			</ThemeConfigProvider>
		</ThemeProvider>
	</React.StrictMode>
)
