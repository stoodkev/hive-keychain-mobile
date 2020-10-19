import React, {useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {loadTokens, loadUserTokens, loadTokensMarket} from 'actions';
import {connect} from 'react-redux';
import EngineTokenDisplay from 'components/hive/EngineTokenDisplay';
import Separator from 'components/ui/Separator';
import {translate} from 'utils/localize';

const Tokens = ({
  user,
  loadTokensConnect,
  loadUserTokensConnect,
  loadTokensMarketConnect,
  tokens,
  userTokens,
  tokensMarket,
}) => {
  useEffect(() => {
    loadTokensConnect();
    loadTokensMarketConnect();
  }, [loadTokensConnect, loadTokensMarketConnect]);
  useEffect(() => {
    loadUserTokensConnect(user.name);
  }, [loadUserTokensConnect, user.name]);
  console.log(userTokens);
  return (
    <View style={styles.container}>
      <Separator />
      {userTokens.length ? (
        <FlatList
          style={[styles.half]}
          data={userTokens}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={() => <Separator height={10} />}
          renderItem={({item}) => (
            <EngineTokenDisplay
              token={item}
              tokensList={tokens}
              market={tokensMarket}
            />
          )}
        />
      ) : (
        <Text style={styles.no_tokens}>{translate('wallet.no_tokens')}</Text>
      )}
      <View style={[styles.half]}>
        <Text>Tokens</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  half: {flex: 0.5},
  no_tokens: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    marginVertical: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.activeAccount,
    tokens: state.tokens,
    userTokens: state.userTokens,
    tokensMarket: state.tokensMarket,
  };
};

export default connect(mapStateToProps, {
  loadTokensConnect: loadTokens,
  loadUserTokensConnect: loadUserTokens,
  loadTokensMarketConnect: loadTokensMarket,
})(Tokens);
