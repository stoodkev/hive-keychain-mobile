import React from 'react';
import {Input} from 'react-native-elements';
import {StyleSheet, useWindowDimensions} from 'react-native';

export default (props) => {
  const {backgroundColor, inputColor, textAlign} = props;
  const styles = getDimensionedStyles({
    ...useWindowDimensions(),
    backgroundColor,
    inputColor,
    textAlign,
  });
  return (
    <Input
      placeholderTextColor="#B9C9D6"
      containerStyle={styles.container}
      inputStyle={styles.input}
      leftIconContainerStyle={styles.leftIcon}
      rightIconContainerStyle={styles.rightIcon}
      inputContainerStyle={styles.inputContainer}
      {...props}
    />
  );
};

const getDimensionedStyles = ({
  width,
  height,
  backgroundColor,
  inputColor,
  textAlign,
}) =>
  StyleSheet.create({
    container: {
      backgroundColor: backgroundColor || '#000000',
      display: 'flex',
      borderRadius: 25,
      alignItems: 'baseline',
      height: 50,
    },
    leftIcon: {height: 30, marginRight: 20},
    rightIcon: {height: 30, marginLeft: 20},
    input: {color: inputColor || '#ffffff'},
    inputContainer: {
      borderBottomWidth: 0,
      marginHorizontal: 15,
      textAlign: textAlign || 'left',
    },
  });