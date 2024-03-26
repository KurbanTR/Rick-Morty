import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
import s from '../styles/Locations.module.css'
import { locationsApi } from '../api/locationsApi'
import { Link } from 'react-router-dom'
// import { flexbox } from "@chakra-ui/react";

const Locations = () => {
    const [data, setData] = useState();
    const [page, setPage] = useState(1)
    const [name, setName] = useState('')
    useEffect(() => {
        const getData = async() =>{

          const data = await locationsApi.getAllLocation({name: name, page: page})
          console.log(data.data); 
          if(data.status !== 200){ 
            setData({error: 'error'})
            return
          }
          setData(data.data)
        }
        getData()
      }, [name, page])
    const onHandleNextPage = () => {
        setPage(page + 1)
    }
    const onHandlePrevPage = () => {
        setPage(page - 1)
    }
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
                    <section className={s.character_row}>
                        {data?.error ? <h1>Not Found</h1> : data?.results.map((item, index) =>
                            <Link to={`/location/${item.id}`} className={s.character_card} key={index}>
                                <img className={s.character_img} src={item.image} alt="" />
                                <div className={s.character_text}>
                                    <h1>{item.name}</h1>
                                    <h5>{item.type}</h5>
                                    <h5>{item.dimension}</h5>
                                </div>
                            </Link>
                        )}
                    </section>

                </div>
                <div className={s.character_btn}>
                    <button className={s.page_button} onClick={onHandlePrevPage} disabled={!data?.info.prev}>Prev Page</button>
                    <button className={s.page_button} onClick={onHandleNextPage} disabled={!data?.info.next}>Next Page</button>
                </div>
            </main>
        </>
      )
}
export default Locations
