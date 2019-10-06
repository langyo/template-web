import React from 'react';

import Icon from '@mdi/react';
import {
  mdiAccountCircleOutline,
  mdiSettingsOutline,
  mdiInformationOutline,
  mdiPalette,
  mdiHome,
  mdiMessageText
} from '@mdi/js';

export default state => ([
  {
    icon: <Icon path={mdiAccountCircleOutline} size={1} color={'#333'} />,
    badge: 'dot',
    text: {
      primary: '未登录'
    }
  },
  '------',
  {
    icon: <Icon path={mdiHome} size={1} color={'#333'} />,
    page: 'main',
    selected: ['main'],
    text: '主页'
  },
  {
    icon: <Icon path={mdiMessageText} size={1} color={'#333'} />,
    page: 'message',
    selected: ['message'],
    badge: true,
    text: '消息'
  },
  '------',
  {
    icon: <Icon path={mdiPalette} size={1} color={'#333'} />,
    dialog: 'theme',
    text: '主题'
  },
  {
    icon: <Icon path={mdiSettingsOutline} size={1} color={'#333'} />,
    dialog: 'setting',
    text: '设置'
  },
  {
    icon: <Icon path={mdiInformationOutline} size={1} color={'#333'} />,
    dialog: 'about',
    text: '关于'
  }
]);