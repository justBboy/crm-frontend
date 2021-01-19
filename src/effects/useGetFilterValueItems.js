import { useEffect,  useState } from "react";
import { useSelector } from "react-redux"
import { selectTableData } from "../slices/tableSlice"


function useGetFilterValueItems(value){
    const tableData = useSelector(selectTableData);
    const [filterItems, setFilterItems] = useState([])
    useEffect(() => {
        let mounted = true
        if(mounted){
            if(!tableData.length && !value){
                return
            }else{
                let items = []
                console.log("in filter hook value -->", value)
                tableData.map(td => {
                    items.push(td[value])
                })
                setFilterItems(items)
            }
        }else{
            return
        }

        return () => {mounted = false}
    }, [value])

    console.log(filterItems)
    return filterItems
}

export default useGetFilterValueItems