import { SCREEN } from './index';
import { NativeStackScreenProps, NativeStackNavigationProp  } from 'react-native-screens/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  [SCREEN.Home]: undefined;
  [SCREEN.Search]: undefined;
  [SCREEN.ResultsShow]: { id: string };
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'>;
export type ResultsShowScreenProps = NativeStackScreenProps<RootStackParamList, 'ResultsShow'>;

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type RouteProps = RouteProp<RootStackParamList>;
