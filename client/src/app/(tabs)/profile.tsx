import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { dummyUser } from "@/assets/assets";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";

export default function Profile() {
  const { user } = { user: dummyUser };
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <Header title="A cunt" showMenu />

      <ScrollView
        className="flex-1 px-4"
        contentContainerStyle={
          !user
            ? { flex: 1, justifyContent: "center", alignItems: "center" }
            : { paddingTop: 16 }
        }
      >
        {!user ? (
          // Guest user screen
          <View className="items-center w-full">
            <View className="w-24 h-24 rounded-full bg-gray-200 items-center justify-center mb-6">
              <Ionicons
                name="person"
                size={40}
                color={COLORS.secondary}
              ></Ionicons>
            </View>
            <Text className="text-primary font-bold text-xl mb-2">cunt</Text>
            <Text className="text-secondary text-base mb-8 text-center w-3/4 px-4">
              U need an account pal...
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/sign-in")}
              className="bg-primary w-3/5 py-3 rounded-full items-center shadow-lg"
            >
              <Text className="text-white font-bold text-lg">
                Login / Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {/* Profile Info */}
            <View className="items-center mb-8">
              <View className="mb-3">
                <Image
                  source={{ uri: user.imageUrl }}
                  className="size-20 border-2 border-white shadow-sm rounded-full"
                />
              </View>
              <Text className="text-xl font-bold text-primary">
                {user.firstName + " " + user.lastName}
              </Text>
              <Text className="text-secondary text-sm">
                {user.emailAddresses[0].emailAddress}
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
