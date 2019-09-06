import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import Food from '../objects/Food';
import Colors from '../constants/Colors';
import * as WebBrowser from 'expo-web-browser';

export default FoodDetailScreen = ({ navigation }) => {

	let food = navigation.getParam('food', {}); 

	return (
		<ScrollView 
			showsHorizontalScrollIndicator={false}
		>
			{ getDetailText(food) }
		</ScrollView>
	)
}

const getDetailText = (detail) => {
	var key = 0; // key for each element in the array
	var returnJWT = []
	var entries = {}

	// NAME & IODINE
	returnJWT.push(
		<Image
			key={key++}
			source={detail.icon}
			resizeMode="contain"
			fadeDuration={0}
			style={{ width: 100, height: 100, marginTop: 1 }}
		/>
	)
	returnJWT.push(<Text style={styles.detailWord} key={key++}>{detail.name}</Text>)
	returnJWT.push(<Text style={styles.detailLanguage} key={key++}>Iodine Conent: {detail.iodine}</Text>)
	returnJWT.push(             
		<Text 
			key={key++}
			style={styles.detailLink}
			onPress={() => { WebBrowser.openBrowserAsync(detail.link) } }
		>
			See More
		</Text>
	);
			//onPress={ () => { WebBrowser.openBrowserAsync('https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2') } }>

	return returnJWT;

	//PRONUNCIATIONS
	if (entries.pronunciations != undefined){
		for (i = 0; i < entries.pronunciations.length; i++){
			returnJWT.push(<Text style={styles.detailPronunciation} key={key++}>{entries.pronunciations[i]}</Text>)
		}

	}
	//ETYMOLOGIES
	if (entryItems.etymology !== null){
		returnJWT.push(<Text style={styles.detailEtymologyTitle} key={key++}>ETYMOLOGY</Text>)
		returnJWT.push(<Text style={styles.detailEtymology} key={key++}>{'• ' + entryItems.etymology}</Text>)
	}

	//POS
	for (i = 0; i < entryItems.pos.length; i++){
		if (entryItems.pos[i].definitions.length > 0){ // Only show the POS if there are definitions
			returnJWT.push(<View style={styles.line} key={key++} />);
			returnJWT.push(<Text style={styles.detailPosName} key={key++}>{entryItems.pos[i].pos_name.toUpperCase()}</Text>)
		}

		for (j = 0; j < Math.min(entryItems.pos[i].definitions.length, 5); j++){ // LIMITING DEFS TO 5
			returnJWT.push(<Text style={styles.detailPos} key={key++}>{'• ' + entryItems.pos[i].definitions[j]}</Text>)
		}
	}

	//DESCENDANT WORDS
	if (entries.descendants.length !== 0){
			returnJWT.push(<Text style={styles.detailDescendantWordTitle} key={key++}>DESCENDANT WORDS</Text>)
	}
	for (i = 0; i < Math.min(entries.descendants.length, 3); i++){
		var node_path = EtymologyObject.get($node.id).paths[0]
		var root_id = EtymologyObject.bases[node_path].id
		var desc_id = entries.descendants[i].id
		var ids = JSON.stringify([root_id, desc_id])
		if (root_id == desc_id){
			console.debug('Not displaying connection for same word as root:', desc_id);
		} else {
			returnJWT.push(<Text style={styles.detailDescendantWord} key={key++}>{entries.descendants[i].word}</Text>)
		}
	}
	
	returnJWT.push(<View key={key++} style={{height: 20}} />)
	return returnJWT;
}

FoodDetailScreen.navigationOptions = ({ navigation }) => ({
	title: navigation.getParam('food', {}).name,
});

const styles = StyleSheet.create({
	scroll: {},
	detailLanguage: {
		color: Colors.leafLanguage,
		fontSize: 15, // 0.6rem,
		fontWeight: 'bold',
		paddingTop: 5,
		marginHorizontal: 20,
	},
	detailWord: {
		color: Colors.leafWord,
		fontSize: 20,
		fontWeight: 'bold',
		marginHorizontal: 20,
	},
	detailLink: {
		color: 'blue',
		fontSize: 15,
		fontWeight: 'bold',
		paddingTop: 5,
		marginHorizontal: 20,
	},
	detailPronunciation: {
		marginHorizontal: 20,
	},
	detailPosName: {
		fontWeight: 'bold',
		color: Colors.leafPosName,
		fontSize: 18, // 0.6rem,
		marginTop: 10,
		marginBottom: 5,
		marginHorizontal: 20,
	},
	detailPos: {
		marginHorizontal: 20,
	},
	detailEtymologyTitle: {
		color: Colors.leafTitle,
		marginTop: 10,
		marginHorizontal: 20,
	},
	detailEtymology: {
		marginVertical: 10,
		marginHorizontal: 20,
	},
	detailDescendantWordTitle: {
		color: Colors.leafTitle,
		marginHorizontal: 20,
	},
	detailDescendantWord: {
		marginHorizontal: 20,
	},
	detailDefinition: {
		color: Colors.leafDefinition,
		fontSize: 17, // 0.6rem,
		fontWeight: 'normal',
		paddingBottom: 5,
	},
	line:{
		borderWidth: StyleSheet.hairlineWidth,
		borderColor:'#ccc',
		margin: 15,
	 },
});
