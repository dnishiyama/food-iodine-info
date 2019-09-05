import React from 'react';
import { ExpoLinksView } from '@expo/samples';
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';


export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <FoodView />
    </ScrollView>
  );
}

class FoodView extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.optionsTitleText}>
          Resources
        </Text>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={ () => { WebBrowser.openBrowserAsync('https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2') } }>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../assets/food_icons/MC-foodie-icons-latin-color-fill-02.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 20, height: 20, marginTop: 1 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Avocado
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          background={Touchable.Ripple('#ccc', false)}
          style={styles.option}
          onPress={ () => { WebBrowser.openBrowserAsync('https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1846/2') } }>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../assets/food_icons/MC-foodie-icons-latin-color-fill-16.png')}
                fadeDuration={0}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Banana
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={ () => { WebBrowser.openBrowserAsync('https://nutritiondata.self.com/facts/finfish-and-shellfish-products/4030/2') } }>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../assets/food_icons/MC-foodie-icons-latin-color-fill-15.png')}
                fadeDuration={0}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Fish
              </Text>
            </View>
          </View>
        </Touchable>
      </View>
    );
  }

  _handlePressSlack = () => { };

  _handlePressDocs = () => { };

  _handlePressForums = () => {
    
  };
}

LinksScreen.navigationOptions = {
  title: 'Foods',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
