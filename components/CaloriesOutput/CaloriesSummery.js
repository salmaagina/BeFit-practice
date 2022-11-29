import{StyleSheet, Text, View} from 'react-native'
import { GlobalStyles } from '../../constants/styles';

function CaloriesSummery({calories,periodName}){
    const caloriesSum= calories.reduce((sum,calories)=>{
        return sum+calories.amount
    },0);

    return(
        <View style={styles.container}>
    <Text style={styles.period}>{periodName}</Text>
    <Text >{caloriesSum}</Text>
    
    <Text></Text>

    </View>
    );

}
export default CaloriesSummery;
 const styles=StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:GlobalStyles.colors.primary50,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

        
    },
    period:{
        fontSize:12,
        color:GlobalStyles.colors.primary400
    },
    sum:{
        fontSize:16,
        fontWeight:'bold',
        color:GlobalStyles.colors.primary500
    }
 })