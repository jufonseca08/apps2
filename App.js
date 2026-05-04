import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';

export default function Ex06() {
  const { width, height } = useWindowDimensions();
 
  const isLandscape = width > height;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.grid, { flexDirection: isLandscape ? 'row' : 'column' }]}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <View
            key={item}
            style={[
              styles.card,
              { 
                width: isLandscape ? '48%' : '100%', 
                marginHorizontal: isLandscape ? '1%' : 0 
              }
            ]}
          >
            <Text>Card {item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  grid: {
    width: '100%',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    padding: 30,
    marginBottom: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});