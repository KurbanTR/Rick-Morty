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
       <h1 className={s.text}>{data?.name}  </h1> 
       <div className={s.h1}>
        <h1>Information</h1>
        <h1>Episodes</h1>
       </div>
       <div className={s.h1}>
        <div className={s.allInfo}>
         <h1 className={s.h2}>Gender: <a>{data?.gender}</a></h1>
         <h1 className={s.h2}>Status: <a>{data?.status}</a></h1>
         <h1 className={s.h2}>Specie: <a>{data?.species}</a></h1>
        </div> <div></div>
       </div>
        </>
    )
}
export default DefineRerson