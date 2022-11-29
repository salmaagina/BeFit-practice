
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import CaloriesOutput from '../components/CaloriesOutput/CaloriesOutput';
import { CaloriesContext } from '../store/calories-context';
function AllCalories(){
   const CaloriesCtx=useContext(CaloriesContext);
    return(<View styles={style.container}>
    <CaloriesOutput calories={CaloriesCtx.calories} CaloriesPeriod="Total" fallbackText="No registered found"/>
   </View >);
}
export default AllCalories;
const style=StyleSheet.create({
    container:{
        backgroundColor:'black'
    }
})