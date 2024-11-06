import { createStackNavigator } from '@react-navigation/stack'
const {Screen, Navigator} = createStackNavigator()

import  HomeScreen  from '../screens/Home/HomeScreen';
import  MySkills  from '../screens/Skills/MySkills'

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
            name='Apresentação'
            component={HomeScreen}
            />

            <Screen 
            name='skills'
            component={MySkills}
            />
        </Navigator>
    )
}