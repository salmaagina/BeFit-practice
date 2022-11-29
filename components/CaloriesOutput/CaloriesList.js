import { FlatList,Text } from "react-native";
import CaloriesItem from "./CaloriesItem";

function renderCaloriesItem(itemData){
    return <CaloriesItem {...itemData.item}/>;
}

function CaloriesList({calories}){
    return (
        <FlatList 
        data={calories}
        renderItem={renderCaloriesItem}
        keyExtractor={(item)=>item.id}
        />

    );
}
export default CaloriesList;