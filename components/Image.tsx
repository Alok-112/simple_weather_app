import {View, Dimensions, Image, StyleSheet} from 'react-native';
import React from 'react';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const BackgroundImage = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../images/background.jpeg')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: deviceWidth,
    height: deviceHeight,
  },
});

export default BackgroundImage;
