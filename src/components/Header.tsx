/* Sempre usar 'componenents' react com a primeira letra Maiuscula*/
import style from './Header.module.css'
import igniteLogo from "../assets/Ignite simbol.svg"

console.log(igniteLogo);

export function Header() {
    return (
            <header className={style.header}>
                <img src={igniteLogo} alt="Logotipo do Ignite"/>
            </header>
               
    );
    
}