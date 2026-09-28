import { Stack } from "expo-router";

// src/app/_layout.tsx
import "../../global.css";
import { CartProvider } from "../../context/CartContext";
import { WishlistProvider } from "../../context/WishlistContext";
export default function RootLayout() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Stack screenOptions={{ headerShown: false }} />;
      </WishlistProvider>
    </CartProvider>
  );
}

