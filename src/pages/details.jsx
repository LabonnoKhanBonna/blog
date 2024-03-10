import {useParams} from "react-router-dom";
import {destinationData} from "../utils/data";
import {useEffect, useState} from "react";



export default function BlogDetail () {
    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const filteredData = destinationData.filter((item) => item.id === parseInt(id));
        if (filteredData.length > 0) {
            setData(filteredData[0])
        }
    }, [id]);


    console.log(data)
    return (
        <>{data?.heading}</>
    )
}