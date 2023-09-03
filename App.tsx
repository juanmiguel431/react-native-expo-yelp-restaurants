import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SCREEN } from './src/models';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  [SCREEN.Home]: HomeScreen,
  [SCREEN.Search]: SearchScreen,
}, {
  initialRouteName: SCREEN.Search,
  defaultNavigationOptions: {
    title: 'Business Search',
    // cardStyle: { backgroundColor: "#FFFFFF" },
  }
});

export default createAppContainer(navigator);
