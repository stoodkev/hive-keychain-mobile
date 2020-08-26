import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';

import Separator from 'components/Separator';
import {addAccount} from 'actions';
import CustomInput from 'components/CustomInput';
import validateNewAccount from 'utils/validateNewAccount';
import {ACCOUNT, KEY} from 'root/.env.json';
import Background from 'components/Background';
import TitleLogo from 'assets/addAccount/img_import.svg';
import UserLogo from 'assets/addAccount/icon_username.svg';
import KeyLogo from 'assets/addAccount/icon_key.svg';
import QRLogo from 'assets/addAccount/icon_scan-qr.svg';
import Button from 'components/EllipticButton';
import {translate} from 'utils/localize';

const AddAccountByKey = ({addAccountConnect, navigation}) => {
  const [account, setAccount] = useState(ACCOUNT || '');
  const [key, setKey] = useState(KEY || '');
  const onImportKeys = async () => {
    const keys = await validateNewAccount(account, key);
    if (keys) {
      addAccountConnect(account, keys);
    } else {
      //TODO: show error popup
    }
  };
  const {height} = useWindowDimensions();

  return (
    <Background>
      <View style={styles.container}>
        <Separator height={height / 7.5} />
        <TitleLogo />
        <Separator height={height / 15} />
        <Text style={styles.text}>{translate('addAccountByKey.text')}</Text>
        <Separator height={height / 15} />
        <CustomInput
          placeholder={translate('common.username').toUpperCase()}
          leftIcon={<UserLogo />}
          value={account}
          onChangeText={setAccount}
        />
        <Separator height={height / 15} />

        <CustomInput
          placeholder={translate('common.privateKey').toUpperCase()}
          leftIcon={<KeyLogo />}
          rightIcon={
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ScanQRScreen');
              }}>
              <QRLogo />
            </TouchableOpacity>
          }
          value={key}
          onChangeText={setKey}
        />
        <Separator height={height / 7.5} />
      </View>
      <Button
        title={translate('common.import').toUpperCase()}
        onPress={onImportKeys}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {display: 'flex', alignItems: 'center'},
  text: {color: 'white', fontWeight: 'bold', fontSize: 16},
});

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps, {addAccountConnect: addAccount})(
  AddAccountByKey,
);
