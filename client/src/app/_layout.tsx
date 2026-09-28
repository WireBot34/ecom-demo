import { Stack } from "expo-router";

// src/app/_layout.tsx
import '../../global.css';   
export default function RootLayout() {
  return <Stack  screenOptions={{headerShown: false}} />;
}
