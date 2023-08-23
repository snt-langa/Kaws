import { SafeAreaView, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Stack, useRouter } from 'expo-router';
import { styles } from '../constants';
import { Logo, HeaderMenu, HeaderCart } from '../components';
import Svg, { Path } from 'react-native-svg';


const Home = () => {
    return (
        <SafeAreaView>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: 'white'},
                    headerShadowVisible: false,
                    headerTitle: () => ( 
                                    <Logo/>
                                    ),
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <HeaderMenu />
                    ),
                    headerRight: () => (
                        <HeaderCart />
                    ),
                }}
            />

                <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex:1,
                        padding: 16
                    }}
                >
                    <TouchableOpacity 
                        style={styles.card}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;