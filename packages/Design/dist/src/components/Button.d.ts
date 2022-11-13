declare type TProps = {
    onPress: () => void;
    title: string;
};
declare const Button: ({ onPress, title }: TProps) => JSX.Element;
export default Button;
