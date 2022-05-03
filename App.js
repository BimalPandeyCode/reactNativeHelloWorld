import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/header.js";
export default function App() {
  const colors = [
    "#00b1f5",
    "#002c8b",
    "#a0ddc1",
    "#0087ff",
    "#002a00",
    "#f8e3ff",
    "#0e1e00",
    "#a7558d",
    "#ad715d",
    "#009c01",
    "#ff14e5",
    "#757168",
    "#00339f",
    "#ff7160",
    "#ffcfff",
    "#560000",
    "#980066",
    "#d50053",
    "#8d005a",
  ];
  const [color, setColor] = useState(0);
  useEffect(() => {}, []);
  setInterval(() => {
    color >= colors.length - 1 ? setColor(0) : setColor(color + 1);
    // setColor(color + 1);
    // console.log(color);
  }, 2000);
  return (
    <View style={styles.container}>
      <StatusBar
        style="inverted"
        backgroundColor={colors[color]}
        animated={true}
      />
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 64,
  },
  text: {
    color: "red",
    fontSize: 32,
    fontFamily: "monospace",
  },
});
