import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { GlobeAsiaAustraliaIcon } from 'react-native-heroicons/outline';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const handlePress = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
  };

  return (
    <View className="flex-row items-center">
      <Text className="font-bold text-gray-600 text-xs mx-2">
        {i18n.language === 'vi' ? 'VI' : 'EN'}
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <GlobeAsiaAustraliaIcon size={35} color="#00CCBB" />
      </TouchableOpacity>
    </View>
  );
};

export default LanguageSwitcher;