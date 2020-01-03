import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const MealItem = props => {
  return (
    <View style={styles.MealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={{...styles.mealRow, ...styles.mealHearder}}>
          <ImageBackground source={{uri: props.url}} style={styles.bgImage}>
            <Text style={styles.mealTitle}>{props.title}</Text>
          </ImageBackground>
        </View>
        <View style={{...styles.mealRow, ...styles.mealDetail}}>
          <Text>{props.duration}m</Text>
          <Text>{props.complexity.toUpperCase()}</Text>
          <Text>{props.affordability.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    marginVertical: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHearder: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealTitle: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    textAlign: 'center',
  },
});

export default MealItem;
