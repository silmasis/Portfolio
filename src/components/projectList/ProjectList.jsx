import './projectList.scss'

export default function ProjectList({ id, title }) {
    return (
        <div className='item'>
            <img src="https://picsum.photos/200" alt="" />
            <h3>{title}</h3>
        </div>
    )
}
