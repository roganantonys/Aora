import CustomButton from '@/components/CustomButton';
import FormFieldInputs from '@/components/FormFieldInputs';
import { images } from '@/constants';
import colors from '@/constants/colors';
import { ms, vs } from '@/utils/globalStyles';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.imageStyle}
            source={images.logo}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.signUpTextStyle}>Sign up</Text>
        </View>
        <View>
          <Text style={styles.formFieldLableStyle}>Username</Text>
          <FormFieldInputs
            placeholder={"Your unique username"}
            isPasswordField={false}
          />
        </View>
        <View>
          <Text style={styles.formFieldLableStyle}>Email</Text>
          <FormFieldInputs
            placeholder={"Enter your email"}
            isPasswordField={false}
          />
        </View>
        <View>
          <Text style={styles.formFieldLableStyle}>Password</Text>
          <FormFieldInputs
            placeholder={"Enter your password"}
            isPasswordField={true}
          />
        </View>
        <CustomButton
          buttonTitle="Sign Up"
          onPress={() => {
            // router.push("/SignIn");
          }}
        />
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "auto",
            marginTop: ms(20),
          }}
        >
          <Text style={[styles.textStyle, { color: "#CDCDE0" }]}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/SignIn");
            }}
          >
            <Text style={[styles.textStyle, { color: "#FF9001" }]}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SignUp

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
  },
  innerContainer: {
    width: ms(327),
    height: vs(568),
    marginTop: vs(40),
    marginHorizontal: "auto",
  },
  logoContainer: {},
  imageStyle: {
    width: ms(115),
    height: vs(34),
  },
  signUpTextStyle: {
    fontFamily: "Poppins-SemiBold",
    color: "white",
    fontWeight: 600,
    fontSize: ms(22),
    marginTop: ms(40),
  },
  formFieldLableStyle: {
    fontFamily: "Poppins-Regular",
    fontWeight: 500,
    fontSize: ms(16),
    color: "white",
    marginTop: vs(20),
  },
  forgetPasswordTextView: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: ms(15),
  },
  forgotPasswordTextStyle: {
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: ms(14),
    color: "#CDCDE0",
  },
  textStyle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: ms(14),
    fontWeight: "600",
  },
});