import './intro.scss'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 50,
            strings: ["Web Developer", "Freelance Musician"]
        });
    }, [])

    return (
        <div className="intro" id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/headshot.png" alt="Me" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello There, I'm</h2>
                    <h1>Silavong</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                    <KeyboardArrowDownIcon className='icon' fontSize='large' />
                </a>
                
            </div>
        
        </div>
    )
}
