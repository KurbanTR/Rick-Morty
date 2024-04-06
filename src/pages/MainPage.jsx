import { useEffect, useState } from 'react'
import s from '../styles/MainPage.module.css'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import { pageApi } from '../api/pageApi'
import { Pagination } from 'antd'
import Logo from '../components/Logo'
import NotData from '../components/NotData'

const MainPage = () => {
    const[error, setError] = useState(false)
    const [data, setData] = useState()
    const [page, setPage] = useState(1)
    const [status, setStatus] = useState('')
    const [gender, setGender] = useState('')
    const [species, setSpecies] = useState('')
    const [name, setName] = useState('')
    const options = [
        { value: 'alive', label: 'Alive' },
        { value: 'dead', label: 'Dead' },
        { value: 'unknown', label: 'Unknown' }
    ]
    const options3 = [
        { value: 'human', label: 'Human' },
        { value: 'alien', label: 'Alien' },
        { value: 'animal', label: 'Animal' },
        { value: 'poopybutthole', label: 'Poopybutthole' },
        { value: 'humanoid', label: 'Humanoid' },
        { value: 'unknown', label: 'Unknown' },
        { value: 'mythological creature', label: 'Mythological Creature' },
        { value: 'cronenberg', label: 'Cronenberg' },
        { value: 'gazorpian', label: 'Gazorpian' },
        { value: 'robot', label: 'Robot' },
    ]
    const options2 = [
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' },
    ]
    
    useEffect(() => {
        setError(false)
        const getData = async () => {
            try{
                const data = await pageApi.getAllPages({page:page, status: status, gender: gender, species: species, name: name})
                setData(data.data)
                window.scrollTo({top: 0, behavior: "smooth"})
            }catch(error){
                console.error(error.message)
                setError(true)
            }
        }
        getData()
        
    }, [page, status, gender, species, name])
    
    const onHandleChangeSelect = (e) => {
        setStatus(e.value)

    }
    const onHandleChangeSelect2 = (e) => {
        setGender(e.value)

    }
    const onHandleChangeSelect3 = (e) => {
        setSpecies(e.value)

    }

    const onStatus = (status)=>{
        const color = ((status == "Alive") ? 'chartreuse' : ((status == "Dead") ? 'red' : ((status == "unknown") ? 'grey' : null)))
        return <div style={{background: color}} className={s.character_text_krug}></div>
    }
    const onChange = (page) => setPage(page)

    return (
        <>
            <main className={s.character}>
                <Logo/>
                <div className={s.status_wrapper}>
                    <div className={s.character_status}>
                        <input className={s.text} type="text" value={name} onChange={(b) => setName(b.target.value)} placeholder='Пойск по имени' />
                        <Select className={s.select} onChange={onHandleChangeSelect} placeholder='Статус' options={options} />
                        <Select className={s.select} onChange={onHandleChangeSelect2} placeholder='Гендер' options={options2} />
                        <Select className={s.select} onChange={onHandleChangeSelect3} placeholder='Раса' options={options3} />
                    </div>
                </div>

                <div className={s.characterr_wrapper}>
                    
                        {error ? <NotData/> : <section className={s.character_row}>{data?.results.map((item, index) =>
                            <Link to={`/charackter/${item.id} `} className={s.character_card} key={index}>
                                <img className={s.character_img} src={item.image} alt="" />
                                <div className={s.character_text}>
                                    <h1 className={s.character_text_name}>{item.name}</h1>
                                    <div className={s.character_text_info}>{onStatus(item.status)}{item.status} - {item.species}</div>
                                </div>                                
                            </Link>                            
                        )}</section>}
                    

                </div>
                <div className={s.character_btn}>
                    <Pagination current={+page} onChange={onChange} total={data && data.info.pages ? data.info.pages * 10 : 0} />
                </div>
            </main>
        </>
    )
}

export default MainPage