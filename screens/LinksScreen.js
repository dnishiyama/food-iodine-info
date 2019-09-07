import React from 'react';
import { ExpoLinksView } from '@expo/samples';
import { FlatList, ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import Food from '../objects/Food';


export default LinksScreen = ({ navigation }) => {

	_renderItem = ({item}) => {

		// Make the string the right size regardless of digits
		let iodine_dv_string = Number((item.iodine / 200).toFixed(2)).toString() + "%"
		while (iodine_dv_string.length < 5){
			iodine_dv_string += " ";
		}

		// Return the actual render
		return (
			<Touchable
				style={styles.option}
				background={Touchable.Ripple('#ccc', false)}
				onPress={() => navigation.push('FoodDetail', { food: item })}
			>
				<View style={{ flexDirection: 'row' }}>
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
						<Text style={styles.optionText, {textAlign: 'right', paddingRight: 10 }}>{iodine_dv_string} DV</Text>
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

	return (
		<FlatList
			ListHeaderComponent={headerComponent}
			data={Food.getAllFoods()}
			keyExtractor={(item, index) => item.name}
			renderItem={_renderItem}
		>
		</FlatList>
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
});
