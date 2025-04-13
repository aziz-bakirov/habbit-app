import { Tabs } from "expo-router";
import { AntDesign, Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Animated, Pressable, View, Text } from "react-native";
import { useRef, useState } from "react";

export default function TabLayout() {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  return (
    <>
      <Tabs
        screenOptions={{
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={24}
              color="black"
              style={{ marginRight: 15, marginLeft: 15, color: "#692be0" }}
              onPress={() => setOpenMenu(!openMenu)}
            />
          ),
          headerRight: () => (
            <>
              <Feather
                style={{ marginLeft: 10, marginRight: 10, cursor: "pointer" }}
                name="search"
                size={20}
                color="black"
              />
              <AntDesign
                style={{ marginLeft: 10, marginRight: 10 }}
                name="calendar"
                size={20}
                color="black"
              />
              <AntDesign
                style={{ marginLeft: 10, marginRight: 15 }}
                name="questioncircleo"
                size={20}
                color="black"
              />
            </>
          ),
          
          tabBarStyle: {
            height: 95,
            paddingTop: 15,
            backgroundColor: "#fff",
            borderTopWidth: 0,
            borderBottomWidth: 0,
            elevation: 0,
          },
        }}
      >
        <Tabs.Screen
          name="today"
          options={{
            title: "Today",
            tabBarButton: ({ onPress, accessibilityState }) => {
              const focused = accessibilityState?.selected;
              const scaleValue = useRef(new Animated.Value(1)).current;

              const handlePressIn = () => {
                Animated.spring(scaleValue, {
                  toValue: 0.9,
                  useNativeDriver: true,
                }).start();
              };

              const handlePressOut = () => {
                Animated.spring(scaleValue, {
                  toValue: 1,
                  friction: 3,
                  tension: 40,
                  useNativeDriver: true,
                }).start();
              };

              return (
                <Animated.View
                  style={{
                    transform: [{ scale: scaleValue }],
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    style={{
                      marginLeft: 15,
                    }}
                    onPress={onPress}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                  >
                    <View
                      style={{
                        width: 70,
                        height: 35,
                        borderRadius: 100,
                        backgroundColor: focused ? "#f3eefc" : "transparent",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                      }}
                    >
                      <FontAwesome5
                        name="tasks"
                        size={18}
                        color={focused ? "#692be0" : "#8e8e93"}
                      />
                    </View>

                    <Text
                      style={{
                        color: focused ? "#692be0" : "#8e8e93",
                        fontSize: 12,
                        fontWeight: focused ? "bold" : "normal",
                        marginTop: 3,
                        textAlign: "center",
                      }}
                    >
                      Today
                    </Text>
                  </Pressable>
                </Animated.View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            title: "Tasks",
            tabBarButton: ({ onPress, accessibilityState }) => {
              const focused = accessibilityState?.selected;
              const scaleValue = useRef(new Animated.Value(1)).current;

              const handlePressIn = () => {
                Animated.spring(scaleValue, {
                  toValue: 0.9,
                  useNativeDriver: true,
                }).start();
              };

              const handlePressOut = () => {
                Animated.spring(scaleValue, {
                  toValue: 1,
                  friction: 3,
                  tension: 40,
                  useNativeDriver: true,
                }).start();
              };

              return (
                <Animated.View
                  style={{
                    transform: [{ scale: scaleValue }],
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    onPress={onPress}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                  >
                    <View
                      style={{
                        width: 70,
                        height: 35,
                        borderRadius: 100,
                        backgroundColor: focused ? "#f3eefc" : "transparent",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                      }}
                    >
                      <Ionicons
                        name="checkmark-done-outline"
                        size={18}
                        color={focused ? "#692be0" : "#8e8e93"}
                      />
                    </View>

                    <Text
                      style={{
                        color: focused ? "#692be0" : "#8e8e93",
                        fontSize: 12,
                        fontWeight: focused ? "bold" : "normal",
                        marginTop: 3,
                        textAlign: "center",
                      }}
                    >
                      Tasks
                    </Text>
                  </Pressable>
                </Animated.View>
              );
            },
          }}
        />

        <Tabs.Screen
          name="timer"
          options={{
            title: "Timer",
            tabBarButton: ({ onPress, accessibilityState }) => {
              const focused = accessibilityState?.selected;
              const scaleValue = useRef(new Animated.Value(1)).current;

              const handlePressIn = () => {
                Animated.spring(scaleValue, {
                  toValue: 0.9,
                  useNativeDriver: true,
                }).start();
              };

              const handlePressOut = () => {
                Animated.spring(scaleValue, {
                  toValue: 1,
                  friction: 3,
                  tension: 40,
                  useNativeDriver: true,
                }).start();
              };

              return (
                <Animated.View
                  style={{
                    transform: [{ scale: scaleValue }],
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    onPress={onPress}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                  >
                    <View
                      style={{
                        width: 70,
                        height: 35,
                        borderRadius: 100,
                        backgroundColor: focused ? "#f3eefc" : "transparent",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                      }}
                    >
                      <Ionicons
                        name="timer-outline"
                        size={18}
                        color={focused ? "#692be0" : "#8e8e93"}
                      />
                    </View>

                    <Text
                      style={{
                        color: focused ? "#692be0" : "#8e8e93",
                        fontSize: 12,
                        fontWeight: focused ? "bold" : "normal",
                        marginTop: 3,
                        textAlign: "center",
                      }}
                    >
                      Timer
                    </Text>
                  </Pressable>
                </Animated.View>
              );
            },
          }}
        />

        <Tabs.Screen
          name="categories"
          options={{
            title: "Categories",
            tabBarButton: ({ onPress, accessibilityState }) => {
              const focused = accessibilityState?.selected;
              const scaleValue = useRef(new Animated.Value(1)).current;

              const handlePressIn = () => {
                Animated.spring(scaleValue, {
                  toValue: 0.9,
                  useNativeDriver: true,
                }).start();
              };

              const handlePressOut = () => {
                Animated.spring(scaleValue, {
                  toValue: 1,
                  friction: 3,
                  tension: 40,
                  useNativeDriver: true,
                }).start();
              };

              return (
                <Animated.View
                  style={{
                    transform: [{ scale: scaleValue }],
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    onPress={onPress}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                  >
                    <View
                      style={{
                        width: 70,
                        height: 35,
                        borderRadius: 100,
                        backgroundColor: focused ? "#f3eefc" : "transparent",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                      }}
                    >
                      <Ionicons
                        name="grid-outline"
                        size={18}
                        color={focused ? "#692be0" : "#8e8e93"}
                      />
                    </View>

                    <Text
                      style={{
                        color: focused ? "#692be0" : "#8e8e93",
                        fontSize: 12,
                        fontWeight: focused ? "bold" : "normal",
                        marginTop: 3,
                        textAlign: "center",
                      }}
                    >
                      Categories
                    </Text>
                  </Pressable>
                </Animated.View>
              );
            },
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarButton: ({ onPress, accessibilityState }) => {
              const focused = accessibilityState?.selected;
              const scaleValue = useRef(new Animated.Value(1)).current;

              const handlePressIn = () => {
                Animated.spring(scaleValue, {
                  toValue: 0.9,
                  useNativeDriver: true,
                }).start();
              };

              const handlePressOut = () => {
                Animated.spring(scaleValue, {
                  toValue: 1,
                  friction: 3,
                  tension: 40,
                  useNativeDriver: true,
                }).start();
              };

              return (
                <Animated.View
                  style={{
                    transform: [{ scale: scaleValue }],
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    onPress={onPress}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    style={{
                      marginRight: 15,
                    }}
                  >
                    <View
                      style={{
                        width: 70,
                        height: 35,
                        borderRadius: 100,
                        backgroundColor: focused ? "#f3eefc" : "transparent",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                      }}
                    >
                      <Ionicons
                        name="person-outline"
                        size={18}
                        color={focused ? "#692be0" : "#8e8e93"}
                      />
                    </View>

                    <Text
                      style={{
                        color: focused ? "#692be0" : "#8e8e93",
                        fontSize: 12,
                        fontWeight: focused ? "bold" : "normal",
                        marginTop: 3,
                        textAlign: "center",
                      }}
                    >
                      Profile
                    </Text>
                  </Pressable>
                </Animated.View>
              );
            },
          }}
        />
      </Tabs>
    </>
  );
}
