import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import signin from '../screen/signin';
import category from '../screen/category';

const MainNavigator = createStackNavigator(
    {
        signin: {
            screen:signin,
        },
        category: {
            screen:category,
        },
    },
    {
        initialRouteName: 'category',
    },
);

const App = createAppContainer(MainNavigator);
export default App;