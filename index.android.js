import { AppRegistry, UIManager } from "react-native";
import App from "./app";

//Setting UIManager Flag in order to get LayoutAnimation work on android.
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent("tech_stack", () => App);
