import { Platform } from "react-native"
import { getDeviceId } from "react-native-device-info"

export const isIos = Platform.OS === "ios"
export const isAndroid = Platform.OS === "android"

// Código para identificação da versão do iPhone para definir o tamanho da statusbar
export const iPhoneXVersion = 10.6
export const iPhoneVersion = parseFloat(
  getDeviceId()
    .replace("iPhone", "")
    .replace(",", "."),
)

export const isNewScreeniPhones = iPhoneVersion >= 10.6
