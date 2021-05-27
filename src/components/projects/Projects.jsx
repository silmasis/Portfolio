import './projects.scss';
import ProjectList from '../projectList/ProjectList';

export default function Projects() {

    const list = [
        {
            id: 'squawker',
            title: 'Squawker',
        },
        {
            id: 'counter',
            title: 'Calorie Counter',
        },
        {
            id: 'mvp',
            title: 'My Virtual Pantry',
        },
        {
            id: 'band',
            title: 'Band Website',
        },
    ];
    return (
        <div className='projects' id='projects'>
            <h1>Projects</h1>
            <div className="container">
            {list.map((item) => (
                    <ProjectList title={item.title} id={item.id} />
                ))}
            </div>
        </div>
    )
}
