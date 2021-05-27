import './topbar.scss';
import { Mail } from '@material-ui/icons';

export default function Topbar({ open, setOpen }) {
    return (
        <div className={'topbar ' + (open && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Silavong Sisaleumsak</a>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <span>silmasis@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setOpen(!open)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
