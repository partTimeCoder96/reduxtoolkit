import { fetchDataFailed, fetchDataLoading, fetchDataSuccess } from "./countReducers"
import {DispatchProp} from 'react-redux'
export const fetchData = () =>{
    return async (dispatch:any) => {
        dispatch(fetchDataLoading())
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            const data = await response.json()
      
            dispatch(fetchDataSuccess(data))
          } catch (error) {
            dispatch(fetchDataFailed(error))
          }
    }
}