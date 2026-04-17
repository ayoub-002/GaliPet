import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const professionals = [
    { name: 'Dr. Lina Amrani', role: 'Veterinarian', distance: '1.2 km' },
    { name: 'Paws Academy', role: 'Dog Trainer', distance: '2.4 km' },
    { name: 'Happy Tails Care', role: 'Pet Sitter', distance: '0.9 km' },
    { name: 'Groom House', role: 'Groomer', distance: '1.8 km' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Find trusted pet professionals near you</Text>
      <TextInput
        placeholder="Search vets, groomers, trainers..."
        placeholderTextColor="#6b7280"
        style={styles.searchInput}
      />

      <View style={styles.mapCard}>
        <Text style={styles.mapTitle}>Map Preview</Text>
        <Text style={styles.mapHint}>Interactive geolocation map will be integrated in Sprint 2.</Text>
      </View>

      <Text style={styles.sectionTitle}>Nearby professionals</Text>
      {professionals.map((item) => (
        <View key={item.name} style={styles.card}>
          <Text style={styles.cardName}>{item.name}</Text>
          <Text style={styles.cardMeta}>
            {item.role} - {item.distance}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  mapCard: {
    borderRadius: 16,
    backgroundColor: '#e2e8f0',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  mapTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#0f172a',
  },
  mapHint: {
    color: '#334155',
    marginTop: 6,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  sectionTitle: {
    marginTop: 8,
    fontWeight: '700',
    fontSize: 18,
    color: '#0f172a',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  cardName: {
    fontWeight: '600',
    fontSize: 16,
    color: '#111827',
  },
  cardMeta: {
    marginTop: 2,
    color: '#475569',
  },
});
