import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps151764Navigator from '../features/Maps151764/navigator';
import Add-Item151763Navigator from '../features/Add-Item151763/navigator';
import Maps151759Navigator from '../features/Maps151759/navigator';
import UserProfile151755Navigator from '../features/UserProfile151755/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps151764: { screen: Maps151764Navigator },
Add-Item151763: { screen: Add-Item151763Navigator },
Maps151759: { screen: Maps151759Navigator },
UserProfile151755: { screen: UserProfile151755Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
