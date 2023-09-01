import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SCREEN } from './src/models';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator({
  [SCREEN.Home]: HomeScreen,
}, {
  initialRouteName: SCREEN.Home,
  defaultNavigationOptions: {
    title: 'App'
  }
});

export default createAppContainer(navigator);
