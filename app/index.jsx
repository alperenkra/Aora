import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App(){
    return(
        <View className="flex-1 items-center justify-center bg-cyan-800">
            <Text className="text-3xl font-pblack">Alperen Kara!</Text>
            <StatusBar style="auto"/>
            <Link href="/profile" style={{color: 'blue'}}>Go to Profile</Link>
        </View>
    );
}


