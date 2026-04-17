import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.card}>
        <Text style={styles.name}>Ayoub and Luna</Text>
        <Text style={styles.meta}>Premium Plan - Renews on May 17, 2026</Text>
        <Text style={styles.meta}>Payment method: Visa ending 8842</Text>
      </View>

      <Pressable style={styles.button} onPress={() => router.push('/sign-in')}>
        <Text style={styles.buttonText}>Sign out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc', padding: 20, gap: 14 },
  title: { fontSize: 24, fontWeight: '700', color: '#0f172a' },
  card: {
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 14,
    gap: 8,
  },
  name: { fontSize: 17, fontWeight: '600', color: '#111827' },
  meta: { color: '#475569' },
  button: {
    marginTop: 8,
    backgroundColor: '#0f172a',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#ffffff', fontWeight: '600' },
});
