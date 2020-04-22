import { translate } from "~/i18n"

export const resizeOptions = {
  maxWidth: 800,
  maxHeight: 800,
  quality: 38,
}

export const cameraPermissionsOptions = {
  title: translate("camera.permission.title"),
  message: translate("camera.permission.message"),
  buttonPositive: translate("camera.permission.buttonPositive"),
  buttonNegative: translate("camera.permission.buttonNegative"),
}
export const scannerPermissionsOptions = {
  title: translate("camera.scannerPermission.title"),
  message: translate("camera.scannerPermission.message"),
  buttonPositive: translate("camera.scannerPermission.buttonPositive"),
  buttonNegative: translate("camera.scannerPermission.buttonNegative"),
}
