import { Layout, Typography, Space, Card, Button, Divider } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { ThemeSwitcher } from './features/theme'

const { Header, Content, Footer } = Layout
const { Title, Paragraph } = Typography

// Styled components example that can adapt to theme
const StyledHeader = styled(Header)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 24px;
	height: 64px;
	background-color: ${(props) => props.theme.colorBgContainer};
`

const App: React.FC = () => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<StyledHeader>
				<Title
					level={4}
					style={{
						padding: 0,
						margin: 0,
					}}
				>
					Ant Design Theme Demo
				</Title>
				<ThemeSwitcher />
			</StyledHeader>

			<Content style={{ padding: '50px' }}>
				<Space
					direction='vertical'
					size='large'
					style={{ width: '100%' }}
				>
					<Card title='Theme Demo'>
						<Paragraph>
							This is a demonstration of different theme configurations with Ant
							Design. Try switching between the available themes using the
							selector in the header.
						</Paragraph>

						<Divider />

						<Space wrap>
							<Button type='primary'>Primary Button</Button>
							<Button>Default Button</Button>
							<Button type='dashed'>Dashed Button</Button>
							<Button type='text'>Text Button</Button>
							<Button type='link'>Link Button</Button>
						</Space>

						<Divider />

						<Space direction='vertical'>
							<Card
								size='small'
								title='Nested Card'
								style={{ width: 300 }}
							>
								This is a nested card with the current theme applied.
							</Card>
						</Space>
					</Card>
				</Space>
			</Content>

			<Footer style={{ textAlign: 'center' }}>
				Ant Design Theme Configuration Demo ©{new Date().getFullYear()}
			</Footer>
		</Layout>
	)
}

export default App
