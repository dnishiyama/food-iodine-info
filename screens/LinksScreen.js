import React, { useState } from 'react';
import { ExpoLinksView } from '@expo/samples';
import { CheckBox, FlatList, ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import Food from '../objects/Food';

const DV = 200;

const dv_calc = (iodine_content) => {
	let iodine_dv_string = Math.floor(iodine_content / DV * 100).toString() + "%"

	// Make the string the right size regardless of digits
	while (iodine_dv_string.length < 3){
		iodine_dv_string = " " + iodine_dv_string;
	}
	return iodine_dv_string;
}

export default LinksScreen = ({ navigation }) => {

	const [ allFoods, setAllFoods ] = useState( Food.getAllFoods() );
	let initialChecks = Food.getAllFoods().reduce((map, obj) => {
		map[obj.name] = false;
		return map;
	}, {});
	const [ foodChecks, setFoodChecks ] = useState(initialChecks);

	_renderItem = ({item}) => {

		// Return the actual render
		return (
			<Touchable
				style={styles.option}
				background={Touchable.Ripple('#ccc', false)}
				onPress={() => navigation.push('FoodDetail', { food: item })}
			>
				<View style={{ flexDirection: 'row' }}>
					<CheckBox 
						value={foodChecks[item.name]} 
						onChange={() => { setFoodChecks({...foodChecks, [item.name]: !foodChecks[item.name]}); } }
					/>
					<View style={styles.optionIconContainer}>
						<Image
							source={item.icon}
							resizeMode="contain"
							fadeDuration={0}
							style={{ width: 20, height: 20, marginTop: 1 }}
						/>
					</View>
					<View style={styles.optionTextContainer}>
						<Text style={styles.optionText}>{item.name}</Text>
					</View>
					<View style={{flexGrow: 1}}>
						<Text style={styles.optionText, {textAlign: 'right', paddingRight: 10 }}>{item.iodine} mcg</Text>
					</View>
					<View>
						<Text style={styles.optionText, {textAlign: 'right', paddingRight: 10 }}>{dv_calc(item.iodine)} DV</Text>
					</View>
				</View>
			</Touchable>
		)
	}

	headerComponent = (
		<View style={styles.header}>
			<Text style={{fontSize: 20}}>Food</Text>
			<Text style={{fontSize: 20, flexGrow: 1, textAlign: 'right' }}>Iodine</Text>
		</View>
	);

		// Make the summary box if there is anything checked
	let bottomSummary = undefined;
	if (!Object.values(foodChecks).every(item => !item)){
		let foods = Object.entries(foodChecks).filter(item => item[1]).map(item => item[0]); //Get the list of foods (item[0]) that have been checked (item[1]==true)
		let iodine_content = allFoods.reduce((temp_iodine_content, obj) => {
			if (foods.includes(obj.name)){
				temp_iodine_content += obj.iodine;
			}
			return temp_iodine_content;
		}, 0);

		bottomSummary = (
			<View style={styles.tabBarInfoContainer} >
				<Text style={{fontSize: 15}}>
					Total Foods: {foods.length}      Total Iodine: {iodine_content} mcg; {dv_calc(iodine_content)} DV
				</Text>
			</View>
		);
	}

	return (
		<View style={{flex:1}}>
			<FlatList
				style={{flexGrow:1}}
				ListHeaderComponent={headerComponent}
				data={allFoods}
				keyExtractor={(item, index) => item.name}
				renderItem={_renderItem}
			>
			</FlatList>
			{ bottomSummary }
		</View>

	);

}

LinksScreen.navigationOptions = {
	title: 'Food Information',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
	},
	header: {
		backgroundColor: '#fdfdfd',
		paddingTop: 15,
		paddingHorizontal: 30,
		flexDirection: 'row',
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
  tabBarInfoContainer: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
});
