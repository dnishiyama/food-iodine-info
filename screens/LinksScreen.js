import React from 'react';
import { ExpoLinksView } from '@expo/samples';
import { FlatList, ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import Food from '../objects/Food';


export default LinksScreen = ({ navigation }) => {

	_renderItem = ({item}) => {
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
						<Text style={styles.optionText, {textAlign: 'right', paddingRight: 20 }}>{'    '}{item.iodine}</Text>
					</View>
				</View>
			</Touchable>
		)
	}

	headerComponent = (
		<View style={styles.header}>
			<Text style={{fontSize: 20}}>Food</Text>
			<Text style={{fontSize: 20, flexGrow: 1, textAlign: 'right', paddingRight: 15 }}>Iodine</Text>
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
	title: 'Foods',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
	},
	header: {
		backgroundColor: '#fdfdfd',
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderBottomWidth: 2,
		borderBottomColor: '#EDEDED',
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
