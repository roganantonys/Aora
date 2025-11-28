import { ms, vs } from "@/utils/globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <LinearGradient
        colors={["#FF8E01", "#FFA001"]}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{props.buttonTitle}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: ms(327),
    height: vs(58),
    alignSelf: "center",
    marginTop: vs(20),
    borderRadius: ms(6),
  },
  buttonText: {
    fontFamily: "Poppins-SemiBold",
    fontWeight: 600,
    fontSize: ms(16),
    textAlign: "center",
    marginVertical: "auto",
  },
});
