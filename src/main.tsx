import { StyleProvider } from '@ant-design/cssinjs'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StyleProvider layer>
			<App />
		</StyleProvider>
	</StrictMode>
)
