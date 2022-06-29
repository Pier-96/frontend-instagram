
import useFetch from "../../hooks/useFetch"
import { useParams } from "react-router"

const OnePost = () => {
    
    const { idPost } = useParams()

    const post = useFetch(`http://localhost:4000/posts/${idPost}`)
    console.log(post)
    if (!post) {
        return <div className='onePost'>Cargando...</div>;
    }

    return (<div className="onePost">
        <h3>{post.username}</h3>
        <img src={`http://localhost:4000/${post.image}`}
            alt='Imagen adjunta'
            sizes='470px' />
        <p>{post.text}</p>

    </div>
    )
}

export default OnePost

