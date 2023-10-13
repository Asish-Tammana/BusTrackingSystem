import StartPage from '../StartPage';
import SelectUserPage from '../SelectUserPage';
import StudentAuthenticationPage from '../StudentAuthenticationPage';
import DriverLogin from '../DriverLogin';
import DriverView from '../DriverView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapPage from '../MapPage';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Start Page" component={StartPage} />
            <Stack.Screen name='Select User' component={SelectUserPage} />
            <Stack.Screen name="Driver Login" component={DriverLogin} />
            <Stack.Screen name="Student Login and SignUp" component={StudentAuthenticationPage} />
            <Stack.Screen name="Map Page" component={MapPage} />
            <Stack.Screen name="Driver View" component={DriverView} />
        </Stack.Navigator>
    )
}

export default AuthStack