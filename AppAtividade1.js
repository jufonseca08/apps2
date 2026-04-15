import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Ex01() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/454804/eb1753b129b5e2a24f5ac59f99b1bc28476486936185348005750080356762821282334325351n/147,78,864,516/1206,720,1.68/0/default.jpg' }} 
          style={styles.image} 
        />
        <Text style={styles.title}>Meu Cartão</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra para Android
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});