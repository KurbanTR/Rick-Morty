import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import s from '../styles/DefineRerson.module.css'
import { locationApi } from '../api/locationApi'

const DefineRerson = () => {
    const params = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        const getData = async() =>{
          const data = await locationApi.getAllLocation(params.id)
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
       <h1 className={s.text}>{data?.name}</h1> 
       <div className={s.h1}>
        <div className={s.allInfo}><p className={s.p_info}>Information</p>
         <div>
          <div className={s.allInfo_1}><h1 ><p className={s.h2}>Gender</p><div className={s.h3}>{data?.gender}</div></h1></div>
          <div className={s.allInfo_1}><h1 ><p className={s.h2}>Status</p><div className={s.h3}>{data?.status}</div></h1></div>
          <div className={s.allInfo_1}><h1 ><p className={s.h2}>Specie</p><div className={s.h3}>{data?.species}</div></h1></div>
          <div className={s.allInfo_1}><h1 ><p className={s.h2}>Origin</p><div className={s.h3}>{data?.origin.name}</div></h1></div>
          <div className={s.allInfo_1}><h1 ><p className={s.h2}>Location</p><div className={s.h3}>{data?.location.name}</div></h1></div>
         </div>
        </div>
        <div className={s.allInfo}><p className={s.p_info}>Episodes</p>
        <div>
          
         </div>
        </div>
       </div>
        </>
    )
}
export default DefineRerson