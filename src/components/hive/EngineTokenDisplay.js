import React from 'react';
import {Image, StyleSheet, useWindowDimensions} from 'react-native';
import TokenDisplay from './TokenDisplay';
import {withCommas} from 'utils/format';
import HiveEngine from 'assets/wallet/hive_engine.png';

const EngineTokenDisplay = ({token, tokensList, market}) => {
  const styles = getDimensionedStyles(useWindowDimensions());
  const tokenInfo = tokensList.find((t) => t.symbol === token.symbol);
  const tokenMarket = market.find((t) => t.symbol === token.symbol);
  console.log(tokenInfo);
  if (!tokenInfo) {
    return null;
  }
  const metadata = JSON.parse(tokenInfo.metadata);
  console.log(market);
  return (
    <TokenDisplay
      name={tokenInfo.name}
      currency={token.symbol}
      color="grey"
      value={parseFloat(token.balance)}
      price={{
        Usd: withCommas(tokenMarket.lastPrice),
        DailyUsd: parseFloat(tokenMarket.priceChangePercent),
      }}
      logo={
        <Image
          style={styles.icon}
          source={{
            uri: metadata.icon || Image.resolveAssetSource(HiveEngine).uri,
          }}
        />
      }
    />
  );
};
const getDimensionedStyles = ({height, width}) =>
  StyleSheet.create({icon: {width: width / 15, height: width / 15}});
export default EngineTokenDisplay;
