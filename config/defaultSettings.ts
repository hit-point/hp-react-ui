import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#13c2c2',
  // layout: 'top',
  // contentWidth: 'Fluid', // 需在top菜单模式下打开，Fluid流式，Fixed定宽
  fixedHeader: true,
  fixSiderbar: true,
  // splitMenus: true, // 需在mix菜单模式下打开
  colorWeak: false,
  title: 'hp-react-ui',
  pwa: true,
  logo: '/icons/byLogoMini.png',
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
    sider: {
      // 收起展开图标颜色
      colorBgCollapsedButton: '#fff',
      // 收起展开图标hover内嵌颜色
      colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
      // 收起展开图标内嵌颜色
      colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
      // 侧边栏背景颜色，!important是为了让侧边栏收起时hover的列表背景颜色生效
      colorMenuBackground: '#001529 !important',
      // 菜单头部和body连接线颜色
      colorMenuItemDivider: 'rgba(255,255,255,0.15)',
      // 菜单项hover颜色
      colorBgMenuItemHover: '#13a8a8',
      // 菜单项选中背景颜色
      colorBgMenuItemSelected: '#13a8a8',
      // 菜单项选中字体颜色
      colorTextMenuSelected: '#fff',
      // 菜单项hover字体颜色
      colorTextMenuItemHover: 'rgba(255,255,255,0.75)',
      // 侧边栏字体颜色
      colorTextMenu: 'rgba(255,255,255,0.75)',
      // 菜单头部字体颜色
      colorTextMenuTitle: 'rgba(255,255,255,0.95)',
      // 菜单项点击的颜色
      colorBgMenuItemActive: '#13a8a8',
    },
    header: {
      // header背景颜色，!important是为了让侧边栏收起时hover的列表背景颜色生效
      colorBgHeader: '#001529 !important',
      // header logo字体颜色
      colorHeaderTitle: '#fff',
      // header菜单hover背景颜色
      colorBgMenuItemHover: '#13a8a8',
      // header菜单点击字体颜色
      colorTextMenuActive: '#fff',
      // header菜单项选中项背景颜色
      colorBgMenuItemSelected: '#13a8a8',
      // header菜单项选中项字体颜色
      colorTextMenuSelected: '#fff',
      // header菜单项字体颜色
      colorTextMenu: 'rgba(255,255,255,0.75)',
    },
  },
};

export default Settings;
