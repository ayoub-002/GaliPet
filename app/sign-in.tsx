import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Gali&apos;Pet</Text>
      <Text style={styles.heading}>Welcome back</Text>
      <Text style={styles.subtitle}>Sign in to manage bookings, messages, and pet care services.</Text>

      <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <Pressable style={styles.button} onPress={() => router.replace('/(tabs)')}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>

      <Text style={styles.footer}>New to Gali&apos;Pet? Account creation will be enabled in Sprint 1.1.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 24,
    justifyContent: 'center',
    gap: 12,
  },
  brand: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0f172a',
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    color: '#475569',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: '#0f172a',
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  footer: {
    marginTop: 8,
    color: '#64748b',
    fontSize: 12,
  },
});
