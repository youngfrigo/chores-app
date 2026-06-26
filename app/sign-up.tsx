import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { supabase } from '@/lib/supabase';
import { Link } from 'expo-router';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      Alert.alert('Sign up failed', error.message);
      return;
    }

    Alert.alert('Account created', 'You can now log in.');
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        keyboardType='email-address'
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button
          title={loading ? 'Creating account...' : 'Create Account'}
          onPress={handleSignUp}
          disabled={loading}
        />
      </View>

      <Link href="/login" style={styles.link}>
        Already have an account? Log in
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
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