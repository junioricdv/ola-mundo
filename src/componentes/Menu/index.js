import { Link, useLocation } from 'react-router-dom'
import style from './Menu.module.css'
import MenuLink from '../MenuLink/MenuLink';

export default function Menu() {
    return (
        <header>
            <nav className={style.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>

            </nav>
        </header>
    )
}