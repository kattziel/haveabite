import { createContext} from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});
// in {} we have initial values of the context - here, ids of the favorites

function FavoritesContextProvider({children}) {
    // logic to manage the context
    return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>
};
// this component can wrap other components and hence provide the needed data to other parts of the app

export default FavoritesContextProvider;