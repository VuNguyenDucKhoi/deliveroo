import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeatureRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="Tokyo"
          short_desc="Sushi is the best!"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={2}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="Tokyo"
          short_desc="Sushi is the best!"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={3}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="Tokyo"
          short_desc="Sushi is the best!"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
}

export default FeatureRow;