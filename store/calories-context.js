import { createContext, useReducer } from 'react';


const Dummy_calories=[
    {
        id:'e1',
        description:'Calories intake',
        amount:120,
      date:new Date('2022-10-12')
      
        
    },
    
    {
        id:'e2',
        description:'NOT A CALORIES',
        amount:170,
      date: new Date('2022-11-11')
        
    },
    {
        id:'e3',
        description:'Calories ',
        amount:100,
       date: new Date('2020-12-12')
    },
    {
        id:'e4',
        description:'Ca',
        amount:30,
      date: new Date('2022-11-18')
        
    },
    
];



export const CaloriesContext=createContext({
    expense:[],
    addCalories:({description,amount,date})=>{},
    deleteCalories:(id)=>{},
    updateCalories:(id,{description,amount,date})=>{},
});


function caloriesReducer(state,action){
    switch(action.type){
        case'ADD':
         const id=new Date().toString()+Math.random().toString();
         return[{...action.payload,id:id},...state]
        case'Update':
         const updatableCaloriesIndex=state.findIndex(
            (calories)=>calories.id === action.payload.id);
            const updatableCalories=state[updatableCaloriesIndex];
            const updatedItem={...updatableCalories,...action.payload.data };
            const updatedCalories=[...state];
            updatedCalories[updatableCaloriesIndex]= updatedItem;
            return updatedCalories;
        case'DELETE':
          return state.filter((calories)=>calories.id !==action.payload);
        default:
            return state;
    }
}


function CaloriesContextProvider({children}){
    const [caloriesState,dispatch]=useReducer(caloriesReducer,Dummy_calories);

    function addCalories(caloriesData){
        dispatch({type:'ADD',payload:caloriesData});
    }

    function deleteCalories(id){
        dispatch({type:'DELETE',payload:id});
    }

    function updateCalories(id,caloriesData){
        dispatch({type:"Update",payload:{id:id,data:caloriesData}});

    }

    const value={
        calories:caloriesState,
        addCalories:addCalories,
        deleteCalories:deleteCalories,
        updateCalories:updateCalories,
    };


     
    return<CaloriesContext.Provider value={value}>{children}</CaloriesContext.Provider>

}

export default CaloriesContextProvider;


 



 