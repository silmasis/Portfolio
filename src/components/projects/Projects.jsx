import './Projects.scss'

export default function Projects() {
    return (
        <div className='projects' id='projects'>
            <h1>Projects</h1>
            <ul>
                <li className='active'>Featured</li>
                <li>Squawker</li>
                <li>Calorie Counter</li>
                <li>My Virtual Pantry</li>
                <li>Brass Band of Central Florida</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://picsum.photos/200" alt="" />
                    <h3>Squawker</h3>
                </div>
                <div className="item">
                    <img src="https://picsum.photos/200" alt="" />
                    <h3>Squawker</h3>
                </div>
                <div className="item">
                    <img src="https://picsum.photos/200" alt="" />
                    <h3>Squawker</h3>
                </div>
                <div className="item">
                    <img src="https://picsum.photos/200" alt="" />
                    <h3>Squawker</h3>
                </div>
            </div>
        </div>
    )
}
