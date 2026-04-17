import { ScrollView, StyleSheet, Text, View } from 'react-native';

const threads = [
  { id: '1', name: 'Dr. Lina Amrani', lastMessage: 'Bring Luna fasting for 8h.', time: '12:11' },
  { id: '2', name: 'Paws Academy', lastMessage: 'Session confirmed for tomorrow.', time: '09:45' },
  { id: '3', name: 'Happy Tails Care', lastMessage: 'I sent the walk report.', time: 'Yesterday' },
];

export default function MessagesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Messages</Text>
      {threads.map((thread) => (
        <View key={thread.id} style={styles.threadCard}>
          <View>
            <Text style={styles.threadName}>{thread.name}</Text>
            <Text style={styles.threadPreview}>{thread.lastMessage}</Text>
          </View>
          <Text style={styles.threadTime}>{thread.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 20, gap: 12 },
  title: { fontSize: 24, fontWeight: '700', color: '#0f172a' },
  threadCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  threadName: { fontSize: 16, fontWeight: '600', color: '#111827' },
  threadPreview: { marginTop: 4, color: '#475569' },
  threadTime: { color: '#64748b', fontSize: 12 },
});
