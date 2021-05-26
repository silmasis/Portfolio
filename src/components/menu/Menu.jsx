import './Menu.scss';

export default function Menu({ open, setOpen }) {
    return (
        <div className={'menu ' + (open && 'active')}>
            <ul>
                <li onClick={()=>setOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={()=>setOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={()=>setOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
