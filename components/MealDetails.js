import { View, Text, StyleSheet } from "react-native";

function MealDetails({duration, complexity, affordability, style, textStyle}) {
    // function component can take a style property so that it enables "cascading styles through components"
  return (
    <View style={[styles.details, style]}>
        {/* style that is provided through props is utilized here in an array of styles */}
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
