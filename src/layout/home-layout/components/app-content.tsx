import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'

const { Content } = Layout

const StyledContent = styled(Content)`
	margin: ${(props) => props.theme.marginSM}px
		${(props) => props.theme.marginSM}px;
	padding: ${(props) => props.theme.paddingXS}px;
	border-radius: ${(props) => props.theme.borderRadiusLG}px;
	background-color: ${(props) => props.theme.colorBgContainer};
`

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AppContentProps {}

export const AppContent: React.FC<AppContentProps> = () => {
	return <StyledContent>Content</StyledContent>
}
