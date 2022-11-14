import React from "react";
import { ActivityIndicator, StyleSheet, View, Modal } from "react-native";

const ActivityLoader = ({ loading }: { loading: boolean }) => (
  <Modal animationType="slide" transparent={true} visible={loading}>
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={"large"} />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default ActivityLoader;
