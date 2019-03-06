import { Colors } from '@ui/theme_default';
import DefaultProps from '../navigation';

it('navbar props test', () => {
  console.log(DefaultProps.navbarProps);
  const navBar = {
    navigationBarStyle: { backgroundColor: Colors.BG_NAVBAR },
    titleStyle: {
      color: Colors.TEXT_NAV_TITLE_AND_ICON,
      alignSelf: 'center',
      letterSpacing: 2,
      fontSize: 12,
    },
    backButtonTintColor: Colors.TEXT_NAV_TITLE_AND_ICON,
  };
  expect(DefaultProps.navbarProps).toMatchObject(navBar);
});
