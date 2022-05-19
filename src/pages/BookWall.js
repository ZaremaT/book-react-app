import {useParams} from 'react-router-dom'

function BookWall() {
    let params = useParams()
    console.log(params)
return (
    <>
    <h1>“So many books, so little time.” </h1>
    </>
)
}

export default BookWall