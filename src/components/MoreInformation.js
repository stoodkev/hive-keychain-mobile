import React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import Information from 'assets/addAccount/icon_info.svg';
import Separator from './Separator';
import IconSlider from './IconSlider';
import {translate} from 'utils/localize';

export default () => {
  const styles = getDimensionedStyles(useWindowDimensions());
  return (
    <IconSlider icon={<Information style={styles.info} />}>
      <Text style={styles.h4}>
        {translate('components.moreInformation.title')}
      </Text>
      <Separator />
      <Text>{translate('components.moreInformation.text1')}</Text>
      <Separator height={10} />
      <Text>
        <Text>{translate('components.moreInformation.text2')}</Text>
        <Text style={styles.bold}>
          {' '}
          {translate('components.moreInformation.text3')}
        </Text>
      </Text>
      <Separator height={10} />
      <Text>{translate('components.moreInformation.text4')}</Text>
    </IconSlider>
  );
};

const getDimensionedStyles = ({width, height}) =>
  StyleSheet.create({
    h4: {fontWeight: 'bold', fontSize: 18},
    bold: {fontWeight: 'bold'},
    modal: {height: height * 0.45, marginTop: height * 0.45},
    info: {marginRight: width * 0.05},
  });
