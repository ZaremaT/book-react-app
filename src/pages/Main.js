import {useParams} from 'react-router-dom'

function Section(props) {
    return (<div>
        <Link to="/${props.link}">{props.name}</Link>
    </div> )
}

function Main(props) {
return (
    <div>
        <Section link="shop" name="Shop"/>
        <Section link="wall" name="Book Wall"/>
        <Section link="club" name="Book Club"/>
    </div>
)
}

export default Main