import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FAQ from './app/screens/faq/FAQ';
import About from './app/screens/about/About';
import Home from './app/screens/home/Home';

const MainStack = createNativeStackNavigator()

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName='Home'>
                <MainStack.Screen
                    name='Home'
                    component={Home}>
                </MainStack.Screen>
                <MainStack.Screen
                    name='About'
                    component={About}>
                </MainStack.Screen>
                <MainStack.Screen
                    name='FAQ'
                    component={FAQ}>
                </MainStack.Screen>
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})