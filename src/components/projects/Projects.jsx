import { useState } from 'react';
import './projects.scss';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function Projects() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: '0',
            title: 'Squawker',
            desc: 'Lorum Ipsum and such. It\'s cool I guess. Better that than making stuff up.',
            img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
        },
        {
            id: '1',
            title: 'Calorie Counter',
            desc: 'Lorum Ipsum and such. It\'s cool I guess. Better that than making stuff up.',
            img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
        },
        {
            id: '2',
            title: 'My Virtual Pantry',
            desc: 'Lorum Ipsum and such. It\'s cool I guess. Better that than making stuff up.',
            img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
        },
        {
            id: '3',
            title: 'Brass Band Demo',
            desc: 'Lorum Ipsum and such. It\'s cool I guess. Better that than making stuff up.',
            img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
        },
    ]

    const handleClick = (way) => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide +1 : 0);
    };

    return (
        <div className='projects' id='projects'>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>View Site</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={data.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <KeyboardArrowLeftIcon className='arrow left' fontSize='large' onClick={()=> handleClick('left')} />
            <KeyboardArrowRightIcon className='arrow right' fontSize='large' onClick={()=> handleClick()} />

        </div>
    )
}
