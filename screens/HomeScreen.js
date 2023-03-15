import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-10">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/276232908_1328459797622445_5476406663701217720_n.jpg?stp=dst-jpg_p160x160&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=t213v3gPk2UAX8ImQ-n&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBVLQf2LSIniakFM5PM6-hwarU4qODlBVDDdq3L3d7tNw&oe=6416433B"
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl" >
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row item-centers space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder='Restaurents and cuisines' keyboardType='default' />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >
        <Categories />
        <FeatureRow id="featured" title="Featured" description="Paid placements from our pastners"  />
        <FeatureRow id="discounts" title="Tasty Discounts" description="Paid placements from our pastners"  />
        <FeatureRow id="offers" title="Offers near you!" description="Paid placements from our pastners"  />

      </ScrollView>

    </SafeAreaView>
  );
}

export default HomeScreen;