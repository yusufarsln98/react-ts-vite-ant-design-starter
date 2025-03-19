import { Layout } from 'antd'
import React from 'react'
import {
	AppContent,
	AppHeader,
	ResizableSidebar,
	useSidebarState,
} from './layout/home-layout'

interface AppProps {
	defaultSidebarWidth?: number
	minSidebarWidth?: number
	maxSidebarWidth?: number
}

const App: React.FC<AppProps> = ({
	defaultSidebarWidth = 200,
	minSidebarWidth = 120,
	maxSidebarWidth = 600,
}) => {
	const { collapsed, setCollapsed, siderWidth, isDragging, startResizing } =
		useSidebarState({
			defaultWidth: defaultSidebarWidth,
			minWidth: minSidebarWidth,
			maxWidth: maxSidebarWidth,
		})

	return (
		<Layout>
			<Layout style={{ height: '100vh' }}>
				<ResizableSidebar
					collapsed={collapsed}
					siderWidth={siderWidth}
					isDragging={isDragging}
					startResizing={startResizing}
					collapsedWidth={0}
					handleWidth={3}
				/>
				<Layout>
					<AppHeader
						collapsed={collapsed}
						setCollapsed={setCollapsed}
					/>
					<AppContent />
				</Layout>
			</Layout>
		</Layout>
	)
}

export default App
