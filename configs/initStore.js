import themeConfig from './initTheme';

export default {
  views: {
    drawer: {
      show: 'main',
      open: false
    },
    dialog: {
      show: ''
    },
    fab: {
      show: ''
    },
    theme: {
      native: false,
      device: 'desktop',
      color: themeConfig.defaultTheme,
      language: 'zh-chs'
    },
    popupMenu: {
      show: ''
    },
    popupMessage: {
      messages: []
    },
    server: {
      network: 'connecting',
      database: 'loading'
    }
  },
  data: {
  },
  pages: {
    main: {
    }
  }
};
