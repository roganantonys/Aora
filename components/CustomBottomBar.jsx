import { icons } from "@/constants";
import { ms, s, vs } from "@/utils/globalStyles";
import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function CustomBottomBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  // Shared values for each icon
  const scales = state.routes.map(() => useSharedValue(1));

  // Fade animation for label
  const textFade = useSharedValue(1);

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scales.value, [0, 1], [0, 1]),
    };
  });

  useEffect(() => {
    // animate all icons
    state.routes.forEach((_, index) => {
      const isActive = state.index === index;

      scales[index].value = withSpring(isActive ? 1.2 : 1, {
        // damping: 2,
        stiffness: 120,
      });
    });

    // animate label fade
    textFade.value = withSpring(1, {
      damping: 10,
      stiffness: 120,
    });
  }, [state.index]);

  const iconsMap = {
    Home: icons.home,
    CreateVideo: icons.plus,
    Bookmark: icons.bookmark,
    Profile: icons.profile,
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <PlatformPressable
              key={route.key}
              href={buildHref(route.name, route.params)}
              onPress={onPress}
              style={{ flex: 1 }}
            >
              <Animated.View
                style={{
                  alignItems: "center",
                  transform: [{ scale: scales[index] }],
                }}
              >
                <Image
                  source={iconsMap[route.name]}
                  resizeMode="contain"
                  style={{
                    width: s(22),
                    height: vs(22),
                    tintColor: isFocused ? "#FFA001" : "#BFC1D3",
                  }}
                />

                <Animated.Text
                  style={[
                    {
                      fontSize: ms(10),
                      marginTop: vs(4),
                      color: isFocused ? "#FFA001" : "#BFC1D3",
                    },
                    animatedTextStyle,
                  ]}
                >
                  {label}
                </Animated.Text>
              </Animated.View>
            </PlatformPressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: s(25),
    left: 0,
    right: 0,
    alignItems: "center",
  },
  tabBar: {
    width: "90%",
    borderRadius: 25,
    paddingVertical: vs(10),
    paddingHorizontal: s(20),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.2)", // glass effect
    backdropFilter: "blur(10px)",
    overflow: "hidden",

    // Shadow
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
  },
});
