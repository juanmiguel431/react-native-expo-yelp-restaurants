import { SCREEN } from './index';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';

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
