import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({onPress, title}) => {
  const onPressHandler = () => {
    onPress && onPress();
    console.log('On Press Handler test');
  };

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 40,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
  },
});

export default Button;
