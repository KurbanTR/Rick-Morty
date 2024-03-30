import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import s from '../styles/DefineLandE.module.css'
import { locationsApi } from "../api/locationsApi";

const DefineLocation = () => {
    const params = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        const getData = async() =>{
          const data = await locationsApi.getLocation(params.id)
          console.log(data);
          setData(data.data)
        }
        
        getData()
      }, [params.id])
    return(
        <>
       <h1 className={s.text}>{data?.name}  </h1> 

       <div className={s.h1}>
        <div className={s.allInfo}>
         <h1 className={s.allInfo_1}>Type</h1>
         <h2>{data?.type}</h2>
        </div> 
        <div>
          <h1 className={s.allInfo_1}>Dimension</h1>
          <h2>{data?.dimension}</h2>
        </div>
       </div>
        </>
    )
}
export default DefineLocation