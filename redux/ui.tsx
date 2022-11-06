import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import type {RootState } from './store';
import {incrementNumber} from './countReducers'
import { fetchData } from './apiActions';
import {useAppSelector, useAppDispatch} from './reduxHooks'
const UI = () =>{

    const dispatch = useAppDispatch();
    const countReducer = useAppSelector((state:RootState )=> state.counter);
    const dataLoading = useAppSelector((state:RootState )=> state.counter.loading);
    const Data = useAppSelector((state:RootState )=> state.counter.data);
    console.log("count reducers",countReducer);
    
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>{countReducer.number}</Text>

            <TouchableOpacity
             onPress={()=>{
                dispatch(fetchData())
                dispatch(incrementNumber())
                
             }}
            >
                <Text>Click</Text>
            </TouchableOpacity>
        </View> 
    )
}

export default UI