import { useParams } from 'react-router-dom'

function BookWall(props) {
    let params = useParams()
    console.log(props.index)
    let book = props.book[props.index]
    return (
        <div>
            <h3>(book.title) </h3>
        </div>
    )
}

export default BookWall