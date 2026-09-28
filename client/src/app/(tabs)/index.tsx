import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { BANNERS } from '@/assets/assets'

export default function Home() {
  return (
    <SafeAreaView className="flex-1 edges={['top']}">
      <Header title='Forever' showMenu showCart showLogo/>
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
      {/* Banner Slider */}
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} className="w-full h-48 rounded-xl" scrollEventThrottle={16}>
        {BANNERS.map((banner, index) => (
          <View key={index} className="w-full h-full">
            
          </View>
        ))}
      </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}