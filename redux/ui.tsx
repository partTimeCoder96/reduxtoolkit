import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import type {RootState } from './store';
import {incrementNumber} from './countReducers'
const UI = () =>{

    const dispatch = useDispatch();
    const countReducer = useSelector((state:RootState )=> state.counter);
    console.log("count reducers",countReducer.number);
    
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>{countReducer.number}</Text>

            <TouchableOpacity
             onPress={()=>dispatch(incrementNumber())}
            >
                <Text>Click</Text>
            </TouchableOpacity>
        </View> 
    )
}

export default UI