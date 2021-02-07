import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import signin from '../screen/signin';
import Register from '../screen/Register';
import Home from '../screen/Home';
import Category from '../screen/Category';
import Favorite from '../screen/Favorite';
import Discount from '../screen/Discount';
import Order_Details from '../screen/Order_Details';
import Home_Furniture from '../screen/Home_Furniture';

const MainNavigator = createStackNavigator(
    {
        signin: {
            screen:signin,
        },
        Register: {
            screen:Register,
        },
        Home: {
            screen:Home,
        },
        Category: {
            screen:Category,
        },
        Favorite: {
            screen:Favorite,
        },
        Discount: {
            screen:Discount,
        },
        Order_Details: {
            screen:Order_Details,
        },
        Home_Furniture: {
            screen:Home_Furniture,
        },
    },
    {
        initialRouteName: 'signin',
    },
);

const App = createAppContainer(MainNavigator);
export default App;