"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const Button = (props) => {
    const { onPress, title } = props;
    const onPressHandler = () => {
        onPress();
        console.log("Package On Press");
    };
    return (<react_native_1.TouchableOpacity onPress={onPressHandler} style={styles.container}>
      <react_native_1.Text>{title}</react_native_1.Text>
    </react_native_1.TouchableOpacity>);
};
const styles = react_native_1.StyleSheet.create({ container: { width: "100%", height: 50 } });
exports.default = Button;
