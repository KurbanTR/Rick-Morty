import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import s from '../styles/Header.module.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <header className={s.header}>
                <div className={s.header_container}>

                    <div className={s.header_logo}>
                        <img className={s.logo} src="../public/logo-black 1.png" alt="" />
                    </div>
                    <div className={s.header_nav}>
                        <Link to={'/'}>Персонажи</Link>
                        <Link to={'/episode'}>Эпизоды</Link>
                        <Link to={'/location'}>Локации</Link>
                    </div>
                    <div className={s.header_menu}>

                    <Menu >
                        <MenuButton>
                            Menu
                        </MenuButton>
                        <MenuList>
                            <MenuItem><Link to={'/'}>Персонажи</Link></MenuItem>
                            <MenuItem><Link to={'/episode'}>Эпизоды</Link></MenuItem>
                            <MenuItem><Link to={'/location'}>Локации</Link> </MenuItem>
                        </MenuList>
                    </Menu>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header