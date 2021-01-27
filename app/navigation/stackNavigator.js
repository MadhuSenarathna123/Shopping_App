import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import signin from '../screen/signin';
import Home from '../screen/Home';
import Category from '../screen/Category';

const MainNavigator = createStackNavigator(
    {
        signin: {
            screen:signin,
        },
        Home: {
            screen:Home,
        },
        Category: {
            screen:Category,
        },
    },
    {
        initialRouteName: 'signin',
    },
);

const App = createAppContainer(MainNavigator);
export default App;