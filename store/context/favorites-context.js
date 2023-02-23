import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});
// in {} we have initial values of the context - here, ids of the favorites

function FavoritesContextProvider({children}) {
    // logic to manage the context

    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavoriteFunction(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavoriteFunction(id) {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId.id !== id)
        );
    }


    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavoriteFunction,
        removeFavorite: removeFavoriteFunction
    }
    // we are creating an object named value where we specify particular functions and point at ids which are favoriteMealIds; than we are providing the Context.Provider with the value object, thanks to which components that will have access to the Context, will be able to call the functions from value objects or take advantage od ids / other key - value pairs that will be specified in an value object;


    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
};
// this component can wrap other components and hence provide the needed data to other parts of the app

export default FavoritesContextProvider;