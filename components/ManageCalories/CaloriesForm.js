import { View, Text } from "react-native";
import Input from "./Input";

function CaloriesForm() {
    function amountChangeHnadler(){}
    return <View>

        <Input label="Amount" TextInputConfig={{
            keyboardType:'number-pad',
            onChangeText:amountChangeHnadler,
        }}/>
        <Input label="Date" TextInputConfig={{
            placholder:'YYYY-MM-DD',
            maxLenght:10,
            onChangeText:()=>{}
        }
            
        }/>
        <Input label="Description" TextInputConfig={{
            
        }} />


    </View>
}
export default CaloriesForm;