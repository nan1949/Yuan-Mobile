import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {useTheme, Avatar} from 'react-native-paper';
import {createStackNavigator} from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons'
import {View} from "react-native-animatable";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (

        <Tab.Navigator initialRouteName="Home" activeColor="#fff">
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009387',
                    tabBarIcon: ({color}) => (
                        <Icon name="ios-home" color={color} size={26} />

                    )
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={DetailsStackScreen}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarColor: '#1f65ff',
                    tabBarIcon: ({color}) => (
                        <Icon name="ios-notifications" color={color} size={26} />

                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#694fad',
                    tabBarIcon: ({color}) => (
                        <Icon name="ios-person" color={color} size={26} />

                    )
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarColor: '#d02860',
                    tabBarIcon: ({color}) => (
                        <Icon name="ios-aperture" color={color} size={26} />

                    )
                }}
            />
        </Tab.Navigator>

)

export default MainTabScreen;


const HomeStackScreen = ({navigation}) => {
    const {colors} = useTheme();

    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroudColor: colors.background,
                    shadowColor: colors.background,
                    elevation: 0,
                },
                headerTintColor: colors.text,
            }}
        >
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: '',
                    headerLeft: () => (
                        <View style={{marginLeft: 10}}>
                            <Icon.Button
                                name="ios-menu"
                                size={25}
                                backgroundColor={colors.background}
                                color={colors.text}
                                onPress={() => navigation.openDrawer()}
                            />
                        </View>
                    )
                }}
            />

        </HomeStack.Navigator>
    )
}

const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()} />
            )
            }} />
    </DetailsStack.Navigator>
);