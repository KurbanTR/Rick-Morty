import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import s from '../styles/DefineRerson.module.css'
import { episodeApi } from "../api/episodeApi";

const DefineEpison = () => {
    const params = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        const getData = async() =>{
          const data = await episodeApi.getEpisode(params.id)
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
         <h1>Episode</h1>
         <h2>{data?.episode}</h2>
        </div> 
        <div>
          <h1>Date</h1>
          <h2>{data?.air_date}</h2>
        </div>
       </div>
        </>
    )
}
export default DefineEpison