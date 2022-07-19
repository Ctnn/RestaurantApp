import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowscreen';

const navigator = createStackNavigator(
  {
Search: SearchScreen,
ResultShow:ResultShowScreen,
},
{
  initialRouteName:'Search',
  defaultNavigationOptions:{ //Üst kısıımda yazacak isim
    title:'BusinessSearch'
  }
}
);

export default createAppContainer(navigator);


