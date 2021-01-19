import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getData, selectTableData } from "../slices/tableSlice";

function useGetTableData(url){
    const dispatch = useDispatch();
    const tableData = useSelector(selectTableData)

    useEffect(() => {
        let mounted = true
        if(mounted){
            fetch(url)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("tableData", JSON.stringify(data))
                dispatch(getData(data))
            })
        }else{
            return
        }
        return () => {mounted = false}
    }, [])

    return tableData
}


export default useGetTableData