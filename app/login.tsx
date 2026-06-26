import { supabase } from "@/lib/supabase";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      Alert.alert("Login failed", error.message);
    }

    router.replace('/(tabs)/profile')
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24, gap: 12 }}>
      <Text style={{ fontSize: 40, textAlign: "center" }}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, padding: 12, borderRadius: 8 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 12, borderRadius: 8 }}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={loading ? "Logging in..." : "Login"}
          onPress={handleLogin}
          disabled={loading}
        />
      </View>

      <Link href="/sign-up" style={styles.link}>
        Don't have an account? Sign up here...
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "center",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 8,
    width: 150,
    marginTop: 12,
  },
  link: {
    textAlign: 'center',
    marginTop: 12,
    borderBottomWidth: 1,
    alignSelf: 'center',
    color: 'blue'
  }
});
