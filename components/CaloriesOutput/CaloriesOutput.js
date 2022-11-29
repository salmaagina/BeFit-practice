import{ StyleSheet, View,Text} from'react-native';
import CaloriesSummery from './CaloriesSummery';
import CaloriesList from './CaloriesList';
import { GlobalStyles } from '../../constants/styles';


function CaloriesOutput({calories,CaloriesPeriod,fallbackText}){

    let content=<Text style={styles.infoText}>{fallbackText}</Text>
    if(calories.length>0){
        content=<CaloriesList calories={calories} />
    }
    return(
    <View styles={styles.container}>
    
     <CaloriesSummery calories={calories} periodName={CaloriesPeriod}/>
     
     {content}
    </View>
    );
}
export default CaloriesOutput;
const styles =StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        backgroundColor:GlobalStyles.colors.primary700,
        paddingTop:24,
        paddingBottom:0,



    },
    infoText:{
        color:'white',
        fontSize:16,
        textAlign:'center',
        marginTop:32
    }
});