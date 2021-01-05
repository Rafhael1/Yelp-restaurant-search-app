import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchLocationScreen from './src/screens/SearchLocationScreen';



const navigator = createStackNavigator(
  {
  Location: SearchLocationScreen,
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }
}
);

export default createAppContainer(navigator);