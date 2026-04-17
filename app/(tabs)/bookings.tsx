import { ScrollView, StyleSheet, Text, View } from 'react-native';

const upcoming = [
  { id: '1', title: 'Vet Check-up', with: 'Dr. Lina Amrani', at: 'Today, 17:00' },
  { id: '2', title: 'Grooming Session', with: 'Groom House', at: 'Mon, 10:30' },
];

export default function BookingsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Appointments</Text>
      <Text style={styles.subtitle}>Manage your pet care schedule and reminders.</Text>

      {upcoming.map((booking) => (
        <View key={booking.id} style={styles.card}>
          <Text style={styles.cardTitle}>{booking.title}</Text>
          <Text style={styles.cardMeta}>With: {booking.with}</Text>
          <Text style={styles.cardMeta}>When: {booking.at}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 20, gap: 10 },
  title: { fontSize: 24, fontWeight: '700', color: '#0f172a' },
  subtitle: { color: '#475569', marginBottom: 10 },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    gap: 4,
  },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#111827' },
  cardMeta: { color: '#334155' },
});
