import React, { useContext, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import DriverView from './DriverView';
import MapPage from './MapPage';
import StartPage from './StartPage';
import SelectUserPage from './SelectUserPage';
import StudentAuthenticationPage from './StudentAuthenticationPage';
import DriverLogin from './DriverLogin';
import AuthStack from './AuthStack';
const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../Context/authenticationContext';


const userTypes = {
    student: "Student",
    driver: "Driver",
    notLoginin: "notLoggedIn"
}

const Navigator = () => {

    const { isLoading, userType } = useContext(AuthContext)

    console.log(userType)


    const renderResult = () => {

        if (isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <ActivityIndicator size={'large'} />
                </View>
            )
        }


        switch (userType) {
            case "notLoggedIn":
                return (
                    <AuthStack />
                )
                break;
            case "Student":
                return (
                    <Stack.Navigator screenOptions={{ headerShown: false }} >
                        <Stack.Screen name="Map Page" component={MapPage} />
                    </Stack.Navigator>
                )
                break;
            case "Driver":
                return (
                    <Stack.Navigator screenOptions={{ headerShown: false }} >
                        <Stack.Screen name="Driver View" component={DriverView} />
                    </Stack.Navigator>
                )
                break;
            default:
                break;
        }
    }

    return (
        <NavigationContainer>
            {userType === userTypes.notLoginin ? <AuthStack /> :  (
                    <Stack.Navigator screenOptions={{ headerShown: false }} >
                        <Stack.Screen name="Map Page" component={MapPage} />
                    </Stack.Navigator>
                ) }
        </NavigationContainer>
    )
}

export default Navigator