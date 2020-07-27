import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {signUp} from '../actions';
import Background from '../components/Background';
import Pincode from '../components/PinCode';
import KeychainLogo from '../assets/keychain.svg';

const Signup = ({signUp, navigation}) => {
  const onSubmitSignup = (pwd) => {
    signUp(pwd);
  };

  return (
    <Background>
      <Pincode
        signup
        navigation={navigation}
        title="Chose your PIN"
        confirm="Confirm your PIN"
        submit={onSubmitSignup}>
        <View style={styles.blackCircle}>
          <KeychainLogo {...styles.image} />
        </View>
      </Pincode>
    </Background>
  );
};

const styles = StyleSheet.create({
  blackCircle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 49, height: 41},
});

export default connect(null, {signUp})(Signup);
