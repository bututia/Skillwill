import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Updates from "./screens/updates";
import Calls from "./screens/calls";
import Communities from "./screens/communities";
import Chats from "./screens/chats";
import Settings from "./screens/settings";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const TabNavigator= () => {
    return (
        <Tab.Navigator 
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                switch(route.name){
                    case 'Updates':
                        iconName = focused ? 'ios-chatbubble' : 'ios-chatbubble-outline';
                        break;
                    case 'Calls':
                        iconName = focused ? 'ios-call' : 'ios-call-outline';
                        break;
                    case 'Communities':
                        iconName = focused ? 'ios-people' : 'ios-people-outline';
                        break;
                    case 'Chats':
                        iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
                        break;
                    case 'Settings':
                        iconName = 'ios-cog'
                        
                }

                return <Ionicons name={iconName} color={color} size={size}/>
            },
            tabBarActiveTintColor: '#34a0ff',
            tabBarInactiveTintColor: 'gray'
          })}
        >
            <Tab.Screen name="Updates" component={Updates}/>
            <Tab.Screen name="Calls" component={Calls}/>
            <Tab.Screen name="Communities" component={Communities}/>
            <Tab.Screen name="Chats" component={Chats}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    )
}


export default TabNavigator