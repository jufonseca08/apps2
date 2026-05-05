import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable, useColorScheme, Platform, SafeAreaView, useWindowDimensions } from 'react-native';

const USER = {
  name: 'Profa. Helena Morais',
  role: 'Professora de Literatura & Viajante',
  bio: 'Amante de Machado de Assis, cafés fortes e finais de tarde na praia. 📚☕🌊',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  stats: { posts: 128, followers: '4.5k', following: 342 }
};

const POSTS = [
  { id: '1', uri: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400' }, { id: '2', uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400' },
  { id: '3', uri: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400' }, { id: '4', uri: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400' },
  { id: '5', uri: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400' }, { id: '6', uri: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400' },
  { id: '7', uri: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400' }, { id: '8', uri: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=400' },
  { id: '9', uri: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400' }
];

export default function ProfileScreen() {
  const { width } = useWindowDimensions();
  const isDark = useColorScheme() === 'dark';
  const [following, setFollowing] = useState(false);
  
  const c = { 
    bg: isDark ? '#121212' : '#F5F7FA', text: isDark ? '#F0F0F0' : '#111', 
    sub: isDark ? '#A0A0A0' : '#666', primary: '#2D6A4F', surf: isDark ? '#1E1E1E' : '#FFF' 
  };

  const Stat = ({ label, value }) => (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: c.text }}>{value}</Text>
      <Text style={{ fontSize: 13, color: c.sub }}>{label}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={[styles.head, { backgroundColor: c.surf, ...Platform.select({ ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 }, android: { elevation: 4 } }) }]}>
        <Image source={{ uri: USER.avatar }} style={styles.avt} />
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: c.text }}>{USER.name}</Text>
        <Text style={{ color: c.primary, fontWeight: '600', marginVertical: 4 }}>{USER.role}</Text>
        <Text style={{ textAlign: 'center', color: c.sub, marginBottom: 15 }}>{USER.bio}</Text>
        
        <View style={{ flexDirection: 'row', width: '100%', marginBottom: 20 }}>
          <Stat label="Posts" value={USER.stats.posts} />
          <Stat label="Seguidores" value={USER.stats.followers} />
          <Stat label="Seguindo" value={USER.stats.following} />
        </View>

        <Pressable onPress={() => setFollowing(!following)} style={[styles.btn, { backgroundColor: following ? 'transparent' : c.primary, borderColor: c.primary }]}>
          <Text style={{ color: following ? c.primary : '#FFF', fontWeight: 'bold' }}>{following ? 'Seguindo' : 'Seguir'}</Text>
        </Pressable>
      </View>

      <FlatList
        data={POSTS} numColumns={3} keyExtractor={item => item.id}
        renderItem={({ item }) => <Image source={{ uri: item.uri }} style={{ width: width / 3, height: width / 3, borderWidth: 0.5, borderColor: c.bg }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  head: { alignItems: 'center', padding: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginBottom: 5 },
  avt: { width: 90, height: 90, borderRadius: 45, marginBottom: 10 },
  btn: { width: '80%', padding: 12, borderRadius: 8, alignItems: 'center', borderWidth: 2 }
});