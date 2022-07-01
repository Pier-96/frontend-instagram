import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router';
import './OnePost.css';
import { FaRegUser } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';

const OnePost = () => {
  const { idPost } = useParams();

  const post = useFetch(`http://localhost:4000/posts/${idPost}`);
  console.log(post);
  if (!post) {
    return <div className='onePost'>Cargando...</div>;
  }

  return (
    <>
      <Navbar />
      <div className='IdPost'>
        <div className='IdPost-content'>
          <h1>
            <FaRegUser />
            {post.username}
          </h1>
          <div className='IdPost-subcontent'>
            <img src={`http://localhost:4000/${post.image}`} alt='postimage' />
            <p>{post.text}</p>
          </div>
          <footer>
            <div className='like-section'>
              <p>♥ {post.likes}</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default OnePost;
