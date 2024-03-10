import {useParams} from "react-router-dom";
import {destinationData} from "../utils/data";
import {useEffect, useState} from "react";
import "../assets/styles/destination.css"
import AddDetail from "./AddDetail";


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
        <>
            {data && (
                <div className="m-5">
                    <h1>{data.heading}</h1>
                    <img className="  px-5 py-3 w-100" src={data.imageSrc} alt={data.heading} /> {/* Access imageSrc instead
                     of image */}
                    <p className="p-5">{data.details}</p>
                    <div>

                    </div>

                </div>
            )}
        </>
    )
}