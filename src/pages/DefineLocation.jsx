import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import s from '../styles/DefineRerson.module.css'
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
        <div className={s.big}>
            <img className={s.img} src={data?.image} alt="" />
            
        </div>
       <h1 className={s.text}>{data?.name}  </h1> 

       <div className={s.h1}>
        <div className={s.allInfo}>
         <h1>Type</h1>
         <h2>{data?.type}</h2>
        </div> 
        <div>
          <h1>Dimension</h1>
          <h2>{data?.dimension}</h2>
        </div>
       </div>
        </>
    )
}
export default DefineLocation