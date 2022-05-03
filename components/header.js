import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";

const getTime = () => {
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  return `${hr}:${min}:${sec}`;
};
const Header = () => {
  const [date, setDate] = useState(getTime());
  useEffect(() => {
    setInterval(() => {
      setDate(getTime());
    }, 1000);
  }, []);
  return (
    <View style={style.header}>
      <View style={style.titleView}>
        <Text style={style.titleText}>Hello World</Text>
      </View>
      <View style={style.body}>
        <Text style={style.bodyText}>{date}</Text>

        <Text style={style.bodyText2}>Fuck You Toni</Text>
      </View>
    </View>
  );
};

let style = StyleSheet.create({
  header: {
    height: 42,
    width: Dimensions.get("window").width,
    backgroundColor: "#0000",
    marginTop: StatusBar.currentHeight,
  },
  titleView: {
    alignSelf: "center",
    justifyContent: "center",
    height: 42,
  },
  titleText: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height - 42,
  },
  bodyText: {
    fontSize: 64,
    color: "white",
  },
  bodyText2: {
    fontSize: 8,
    color: "white",
  },
});

export default Header;
