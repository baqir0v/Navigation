import { NavigationProp, useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type RootStackParamList = {
    Home: undefined;
    About: undefined;
    FAQ: undefined
};

const Home = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    return (
        <View style={styles.Home}>
            <TouchableOpacity style={styles.MyTouchableOpacity} onPress={() => navigation.navigate("About")}>
                <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MyTouchableOpacity} onPress={() => navigation.navigate("FAQ")}>
                <Text>FAQ</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Home: {
        flex: 1
    },
    MyTouchableOpacity: {
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        borderWidth: 1,
        borderColor: "black"
    }
})