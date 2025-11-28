import { images } from '@/constants';
import { ms, vs } from '@/utils/globalStyles';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import colors from '../constants/colors';

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={styles.logoStyle}
        />
      </View>
      <View style={styles.landingImageConatiner}>
        <Image
          source={images.cards}
          resizeMode="contain"
          style={styles.landingLogoStyle}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Discover Endless</Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={styles.textStyle}>Possibilities with</Text>
          <View>
            <Text style={styles.aoraTextStyle}>Aora</Text>
            <Image source={images.path} style={styles.pathLogoStyle} />
          </View>
        </View>
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitleText}>
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>
      </View>
      <CustomButton
        buttonTitle="Continue with Email"
        onPress={() => {
          router.push("/(auth)/SignIn");
        }}
      />

    </View>
  );
}

export default index


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
  },
  logoContainer: {
    // flex: 1,
    marginTop: vs(50),
    alignItems: "center",
  },
  logoStyle: {
    width: ms(115),
    height: vs(34.07),
  },
  landingImageConatiner: {
    marginTop: vs(10),
  },
  landingLogoStyle: {
    width: ms(375),
    height: vs(298),
  },
  textContainer: {
   marginTop: vs(20) 
  },
  textStyle: {
    fontFamily: "Poppins-Regular",
    fontSize: ms(30),
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: 600,
    letterSpacing: -1,
    marginTop:vs(-13)
  },
  aoraTextStyle: {
    fontFamily: "Poppins-Regular",
    color: "#FF8E01",
    textAlign: "center",
    fontWeight: "600",
    fontSize: ms(30),
    marginLeft: ms(8),
    marginTop:vs(-13)
  },
  pathLogoStyle: {
    width: ms(80),
    height: vs(15),
    // position: "absolute",
    bottom: vs(19),
    left: ms(2)
  },
  subTitleContainer: {
    width: ms(400),
    alignSelf: "center",
  },
  subTitleText: {
    fontFamily: "Poppins-Regular",
    fontSize: ms(14),
    color: "#CDCDE0",
    lineHeight: vs(21),
    textAlign: "center",
    marginTop: vs(12),
    paddingHorizontal: ms(32),
    fontWeight: 400,
  },
 

});