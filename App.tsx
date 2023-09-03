import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN } from './src/models';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import { RootStackParamList } from './src/models/screen';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTitle: 'Business Search', cardStyle: { backgroundColor: '#FFFFFF' } }}
        initialRouteName={SCREEN.Search}>
        <Stack.Screen name={SCREEN.Home} component={HomeScreen}/>
        <Stack.Screen name={SCREEN.Search} component={SearchScreen}/>
        <Stack.Screen name={SCREEN.ResultsShow} component={ResultsShowScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
