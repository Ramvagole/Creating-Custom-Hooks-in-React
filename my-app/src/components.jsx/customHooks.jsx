import { useState } from "react";

export function useCustom(a){
    let [count,setVal]=useState(a)
    function inc(){
        setVal(count+1)
    }
    function dec(){
        setVal(count-1)
    }
    return [count,inc,dec]
}