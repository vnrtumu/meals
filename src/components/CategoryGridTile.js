import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

const CategoryGridTile = props => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback onPress={props.onSelect} style={{flex: 1}}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text style={styles.TileText} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    padding: 10,
  },
  TileText: {
    fontSize: 25,
    textAlign: 'right',
  },
});

export default CategoryGridTile;
