import {Text} from 'react-native';

function MealDetailScreen({route}) {
    const mealId = route.params.mealId;
    return <Text>this is the meal detail screen ({mealId})</Text>
}

export default MealDetailScreen;