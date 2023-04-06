import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import defineCliConfig from '../sanity';
import RestaurantCard from './RestaurantCard';

const FeatureRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    defineCliConfig.fetch(
      `
        *[_type == "featured" && _id == $id] {
          ...,
          restaurants[]->{
            ...,
            dishes[] ->,
            type-> {
              name
            }
          },
        }[0]
      `, { id }
    ).then((data) => {
      setRestaurants(data.restaurants);
    });
  }, [id]);

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
        {restaurants?.map(restaurant => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_desc={restaurant.short_desc}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default FeatureRow;