import React from "react"
import { createNativeStackNavigator } from "react-native-screens/native-stack"

import { MainScreen, VideoPlayerScreen } from "~/screens"
import { translate } from "~/i18n"
import { color } from "~/theme"

import { PrimaryParamList } from "./types"

const Stack = createNativeStackNavigator<PrimaryParamList>()

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerBackTitle: "Back",
        headerStyle: { backgroundColor: color.palette.primary },
        headerTintColor: color.palette.white,
        headerTitleStyle: { fontFamily: "Montserrat-Medium" }
      }}
    >
      <Stack.Screen
        name="main"
        component={MainScreen}
        options={{
          title: translate("mainScreen.title")
        }}
      />
      <Stack.Screen
        name="videoPlayer"
        component={VideoPlayerScreen}
        options={{
          title: translate("videoPlayer.title")
        }}
      />
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["main"]
