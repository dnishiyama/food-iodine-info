export default class Food {

	static getAllFoods(){
		let foods = [
			{
				name: 'banana', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-latin-color-fill-16.png'), 
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'avocado', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-latin-color-fill-02.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'fish', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-latin-color-fill-15.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'curry', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-01.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'jasmine rice', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-02.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'rice', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-03.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'red chile', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-04.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'naan', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-05.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'samosa', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-07.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'paratha', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-08.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'roti', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-09.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'yogurt', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-10.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'chickpeas', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-11.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'basmati rice', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-12.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'lentils', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-13.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'paneer', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-14.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
			{
				name: 'ghee', 
				iodine: Math.floor(Math.random()*100), 
				icon: require('../assets/food_icons/MC-foodie-icons-indian-color-fill-15.png'),
				link: 'https://nutritiondata.self.com/facts/fruits-and-fruit-juices/1843/2' 
			},
		]
		return foods.map(item => new Food(item));
	}

	constructor({name, iodine, icon, link}){
		this.name = name; 
		this.iodine = iodine;
		this.icon = icon;
		this.link = link;
	}
}
