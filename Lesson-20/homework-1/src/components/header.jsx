import { useLangContext } from "../contexts/langContext"

const Header = () => {
    const {lang, toggleLang} = useLangContext()

    return (
        <header style={{height: "80px", boxShadow: "0 5px 20px #999999", marginBottom: "30px", display: "flex", alignItems: "center", paddingInline: '20px'}}>
            <button onClick={toggleLang} style={{cursor: "pointer"}}>{lang === 'eng' ? 'Eng' : 'ქართ'}</button>
        </header>
    )
}

export default Header