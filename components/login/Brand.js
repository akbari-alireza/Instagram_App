import { StyleSheet, Text, View ,Image} from "react-native";
import React from "react";


const Brand = () => {
  return (
    <View >
         <Image
        style={styles.logo}
        source={require("../../assets/instagram.png")}/>

    </View>
  );
}
export default Brand;
const styles = StyleSheet.create({
  logo: {
      width: 70,
      height: 70,
      alignSelf: "center",
      borderRadius: 10,
  },

})