import { Pressable, StyleSheet, Text, View } from "react-native";
import{useNavigation} from'@react-navigation/native';
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";



function CaloriesItem({id,description,amount,date}){
    const navigation = useNavigation();
    function caloriesPressHandler(){
        navigation.navigate('ManageC',{
            caloriesId:id
        });
        
        
       

    }
    return(<Pressable onPress={caloriesPressHandler} 
        style={({pressed}) => pressed && styles.pressed}
    >
        <View style={styles.caloriesItem} >
            <View>
            <Text style={[styles.textBase, styles.description]}>
                {description}
            </Text>
            <Text style={styles.textBase}>
                {getFormattedDate(date)}
            </Text>
            </View>
            <View style={styles.amountContainer}>
            <Text style={styles.amount}>
                {amount}

            </Text>
            </View>
        </View>
    </Pressable>
    );
}
export default CaloriesItem;

const styles=StyleSheet.create({
    pressed:{
        opacity:0.75

    },
    caloriesItem:{
        padding:12,
        marginVertical:8,
        backgroundColor:GlobalStyles.colors.primary500,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:6,
        elevation:3,
        shadowColor:GlobalStyles.colors.primary800,
        shadowRadius:4,
        shadowOffset:{width:1,height:1},
        
       


    },
    textBase:{
        color:GlobalStyles.colors.primary50
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold'
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius:4,
        minWidth:8,
    },
    amount:{
        color:GlobalStyles.colors.primary700,
        fontWeight:'bold',

    }
})