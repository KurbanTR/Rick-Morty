import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
import s from '../styles/Locations.module.css'
import { locationsApi } from '../api/locationsApi'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd';
import NotData from '../components/NotData'

const Locations = () => {
    const[error, setError] = useState(false)
    const [data, setData] = useState();
    const [page, setPage] = useState(1)
    const [name, setName] = useState('')
    useEffect(() => {
        setError(false)
        const getData = async () => {
            try{
                const data = await locationsApi.getAllLocation({name: name, page: page})
                setData(data.data)
                window.scrollTo({top: 0, behavior: "smooth"})
            }catch(error){
                console.error(error.message)
                setError(true)
            }
        }
        getData()
      }, [name, page])
    const onChange = (page) => setPage(page)
    console.log(data);
      return(
        <>
        <main className={s.character}>
                <div className={s.status_wrapper}>
                    <div className={s.character_status}>
                    <input className={s.text} type="text" value={name} onChange={(b) => setName(b.target.value)} placeholder='Пойск по имени' />
                    </div>
                </div>
 
                <div className={s.characterr_wrapper}>
                    {error ? <NotData/> : <section className={s.character_row}>{data?.results.map((item, index) =>
                        <Link to={`/location/${item.id}`} className={s.character_card} key={index}>
                            <img className={s.character_img} src={item.image} alt="" />
                            <div className={s.character_text}>
                                <h1>{item.name}</h1>
                                <h5>{item.type}</h5>
                                <h5>{item.dimension}</h5>
                            </div>
                        </Link>                          
                    )}</section>}
                </div>
                <div className={s.character_btn}>
                <Pagination  current={page} onChange={onChange} total={data?.info.pages * 10}/> 
                </div>
            </main>
        </>
      )
}
export default Locations
