import 'styled-components';
import { GlobalToken } from 'antd';

declare module 'styled-components' {
  export interface DefaultTheme extends GlobalToken {
    [key: string]: unknown;
  }
}