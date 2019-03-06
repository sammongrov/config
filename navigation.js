import { Colors } from '@ui/theme_default';

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: Colors.BG_HEADER_NAV },
    titleStyle: {
      color: Colors.TEXT_HEADER,
      fontSize: 18,
      textAlign: 'center',
      flex: 1,
      fontWeight: 'normal',
    },
    backButtonTintColor: Colors.TEXT_HEADER,
  },

  tabProps: {
    swipeEnabled: false,
    activeBackgroundColor: Colors.BG_TAB_ACTIVE,
    inactiveBackgroundColor: Colors.BG_TAB_DEFAULT,
    tabBarStyle: {
      backgroundColor: Colors.BG_TAB_DEFAULT,
      height: 50,
      shadowColor: '#3E95FF',
      borderTopWidth: 1,
      // shadowOffset: { width: 0, height: -5 },
      // shadowOpacity: 0.3,
      // shadowRadius: 5,
      borderTopColor: Colors.NAV_BORDER,
    },
    labelStyle: { fontSize: 11, color: Colors.TEXT_TAB, paddingBottom: 3 },
  },

  icons: {
    type: 'material-community',
    size: 26,
    color: 'red',
    // style: { color: Colors.TEXT_NAV_TITLE_AND_ICON, height: 30, width: 30 },
  },
};
