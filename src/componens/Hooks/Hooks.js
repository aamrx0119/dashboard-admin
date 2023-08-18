
import { useState,useEffect } from "react";


const getLocalData = (key)=>{
    let data = localStorage.getItem(key)
    if (data){
        if(data=='true'){
            return true
        }else if (data == 'false'){
            return false
        }
    }
    return ''
}

export default function useLocaleStorage(key,value) {
    const [darkMode,setDarkmode] = useState(()=>{
        return getLocalData(key)
    })

    useEffect(()=>{        
        localStorage.setItem(key,darkMode)
    },[darkMode])



    return [darkMode, setDarkmode]


}

