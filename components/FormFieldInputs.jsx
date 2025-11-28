import { icons } from "@/constants";
import { ms, vs } from "@/utils/globalStyles";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";

const FormFieldInputs = (props) => {
  const [isFocused, setIsFocues] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      style={[
        styles.mainContainer,
        { borderColor: isFocused ? "#FF9C01" : "#232533" },
      ]}
    >
      <TextInput
        style={styles.textInputStyles}
        placeholder={props.placeholder}
        placeholderTextColor="#9E9E9E"
        onFocus={() => setIsFocues(true)}
        secureTextEntry={props.isPasswordField ? !showPassword : false}
      />
      {props.isPasswordField ? (
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={showPassword ? icons.eye : icons.eyeHide}
            resizeMode="contain"
            style={styles.eyeLogoStyle}
          />
        </Pressable>
      ) : null}
    </View>
  );
};

export default FormFieldInputs;

const styles = StyleSheet.create({
  mainContainer: {
    width: ms(327),
    height: vs(58),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(35, 37, 51, 1)",
    paddingHorizontal: ms(16),
    backgroundColor: "#1E1E2D",
    flexDirection: "row",
        justifyContent: "space-between",
    marginTop:ms(2)
  },
  textInputStyles: {
    letterSpacing: 0.2,
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: ms(16),
    color: "white",
    // margin:'auto'
  },
  eyeLogoStyle: {
    width: ms(20), 
    height: ms(20),
    margin: "auto",
  },
});
