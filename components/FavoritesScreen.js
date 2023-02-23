import { useContext } from 'react';
import MealsList from './MealsList/MealsList';
import {FavoritesContext} from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {

    const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));
    // we check whether id of the meal is included in favoriteMealsCtx.ids; if so - it is shown to the screen;

    return <MealsList items={favoriteMeals}/>

}

export default FavoritesScreen;