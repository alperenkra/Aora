import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants';
import CustomButton from '../components/CustomButton';

export default function App(){
    return(
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className="w-full flex justify-start items-center min-h-[85vh] px-4">
                    <Image
                        source={images.logo}
                        className="w-[120px] h-[76px] mt-4"
                        resizeMode='contain'                    
                    />

                    <Image
                        source={images.cards}
                        className="max-w--[380px] w-full h-[300px] mt-2"
                        resizeMode='contain'

                    />

                    <View className="mt-6">
                        <Text className="text-3xl text-white font-bold text-center">
                             Discover Endless
                        </Text>
                    </View>

                    <View className="mt-4">
                        <Text className="text-3xl text-white font-bold text-center">
                            Possibilities with {' '}
                            <Text className="text-secondary-200">Aora</Text>
                            
                        </Text>
                    </View>

                    <Text className="text-md font-pregular text-gray-100 mt-7 text-center">
                     Where creativity meets Innovation:
                     Embark on journey with limitless 
                     exploration with Aora</Text>


                    <CustomButton 
                        title="Continue with Email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7"

                    />

                </View>


            </ScrollView>

            <StatusBar backgroundColor='#161222' style='light'/>

        </SafeAreaView>
    );
}


