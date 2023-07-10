import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

type currencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = (props: currencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },

  flag: {
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 4,
  },

  country: {
    fontSize: 15,
    color: '#2d3436',
  },
});
