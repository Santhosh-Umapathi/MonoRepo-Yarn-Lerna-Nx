"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const WelcomeScreen = (props) => {
    const { text } = props;
    return (<react_native_1.View style={styles.container}>
      <react_native_1.Text>{"Welcome Screen" + text}</react_native_1.Text>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgrey",
        justifyContent: "center",
        alignItems: "center",
    },
});
exports.default = WelcomeScreen;
