import { useState } from 'react';
import { Button,  Tabs, Typography } from 'antd';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from 'antd';



// Extract the token from Ant Design and create a styled-components theme
const AntdThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const { token } = theme.useToken();
  
  return (
    <ThemeProvider theme={token}>
      {children}
    </ThemeProvider>
  );
};

// Global styles using the theme
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colorPrimary};
    font-family: ${props => props.theme.fontFamily};
  }
`;

// Styled components using the theme directly with proper typing
const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${props => props.theme.padding}px;
`;

const Card = styled.div`
  background-color: ${props => props.theme.colorBgContainer};
  border-radius: ${props => props.theme.borderRadius}px;
  box-shadow: ${props => props.theme.boxShadow};
  padding: ${props => props.theme.paddingLG}px;
  margin-bottom: ${props => props.theme.margin}px;
`;

const StyledTabs = styled(Tabs)`
  .ant-tabs-tab {
    &:hover {
      color: ${props => props.theme.colorPrimaryActive};
    }
  }
  
  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${props => props.theme.colorPrimary} !important;
    font-weight: ${props => props.theme.fontWeightStrong};
  }
`;

const ActionButton = styled(Button)`
  margin-right: ${props => props.theme.marginSM}px;
  background-color: ${props => props.type === 'primary' ? props.theme.colorPrimary : props.theme.colorBgContainer};
  color: ${props => props.type === 'primary' ? props.theme.colorTextLightSolid : props.theme.colorText};
  
  &:hover {
    background-color: ${props => props.type === 'primary' ? props.theme.colorPrimaryHover : props.theme.colorBgContainerHover};
  }
`;

const Title = styled(Typography.Title)`
  color: ${props => props.theme.colorTextHeading};
  margin-bottom: ${props => props.theme.marginLG}px !important;
`;

// Your component
function ThemeDemo() {
  const [activeTab, setActiveTab] = useState('1');
  
  return (
    <AntdThemeProvider>
      <GlobalStyle />
      <PageContainer>
        <Title level={2}>Theme Token Integration</Title>
        <Card>
          <StyledTabs 
            activeKey={activeTab} 
            onChange={setActiveTab}
            items={[
              {
                key: '1',
                label: 'Profile',
                children: <p>Profile content using theme tokens for consistent styling</p>
              },
              {
                key: '2',
                label: 'Settings',
                children: <p>Settings content with matching design language</p>
              }
            ]}
          />
          <div style={{ marginTop: '20px' }}>
            <ActionButton type='primary'>Save Changes</ActionButton>
            <ActionButton>Cancel</ActionButton>
          </div>
        </Card>
      </PageContainer>
    </AntdThemeProvider>
  );
}

export default ThemeDemo;