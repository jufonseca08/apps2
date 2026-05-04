import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Ex02() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header Fixo</Text>
      </View>

      <View style={styles.content}>
        <Text>Conteúdo Principal (flex: 1)</Text>
      </View>

      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.buttonText}>Botão Absoluto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 80,
    backgroundColor: "#059669",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 15,
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footerButton: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    backgroundColor: "#2563eb",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
