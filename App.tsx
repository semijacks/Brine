import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CarouselScreen,
  HomeScreen,
  CreateAccountScreen,
  LoginScreen,
} from './screens';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  Carousel: undefined;
  CreateAccount: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  let [fontsLoaded] = useFonts({
    Muller: require('./assets/fonts/Muller-Trial-Regular.otf'),
    MullerBold: require('./assets/fonts/Muller-Trial-Bold.otf'),
    ModernAntiqua: require('./assets/fonts/ModernAntiqua_Regular.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Carousel'>
        <Stack.Screen
          name='Carousel'
          component={CarouselScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='CreateAccount'
          component={CreateAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
