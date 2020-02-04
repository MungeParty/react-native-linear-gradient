import { Platform } from "react-native";
import LinearGradientIos from "./index.ios.js";
import LinearGradientAndroid from "./index.android.js";
import LinearGradientWindows from "./index.windows.js";

let LinearGradient;
switch (Platform.OS) {
  case "windows":
    LinearGradient = LinearGradientWindows;
    break;
  case "ios":
    LinearGradient = LinearGradientIos;
    break;
  default:
    LinearGradient = LinearGradientAndroid;
}

export default LinearGradient;
