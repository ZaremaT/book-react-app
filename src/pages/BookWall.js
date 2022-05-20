import {useParams} from 'react-router-dom'



function BookWall() {
    let params = useParams()
    console.log(index)
    let book = props.book[index]
return (
    <div>
    <h3>(book.title) </h3>
    </div>
)
}

export default BookWall