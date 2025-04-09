import { StyleSheet, Text, View ,Image} from "react-native";
import React from "react";


const Brand = () => {
  return (
    <View >
         <Image
        style={styles.logo}
        source={require("../../assets/instagram-log.jpg")}/>

    </View>
  );
}
export default Brand;
const styles = StyleSheet.create({
  logo: {
      width: 75,
      height: 75,
      alignSelf: "center",
  },

})