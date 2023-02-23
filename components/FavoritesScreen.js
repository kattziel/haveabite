// import { useContext } from 'react';
import MealsList from './MealsList/MealsList';
import {FavoritesContext} from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-web';
import { useSelector } from 'react-redux';

function FavoritesScreen() {

    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));
    // we check whether id of the meal is included in favoriteMealsCtx.ids; if so - it is shown to the screen;

    if (favoriteMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}> You have no favorites yet ! </Text>
        </View>
    }

    return <MealsList items={favoriteMeals}/>

}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})