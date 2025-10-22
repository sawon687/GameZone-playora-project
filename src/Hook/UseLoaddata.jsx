import axios from "axios"
import { useEffect, useState } from "react"

const UseLoadData=()=>{
    const [data,SetData]=useState([])
    const [loading,SetLoading]=useState(true)

    useEffect(()=>
        {
            axios('/gameData.json').then(res=> SetData(res.data)).catch(error=> console.log(error)).finally(()=> SetLoading(false))
        },[])

     return   {data,loading}
}

export default UseLoadData