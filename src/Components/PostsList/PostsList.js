import React from 'react';
import './Posts.css';
import { useEffect, useState } from 'react';
import { useToken } from '../../TokenContext';
import { FaRegUser } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';

const PostsList = () => {
  const [token] = useToken();
  const [keyword, setKeyword] = useState('');

  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  const getAllPosts = async () => {
    setLoading(true);
    setError(null);

    const params = token
      ? {
        headers: {
          Authorization: token,
        },
      }
      : {};

    try {
      const response = await fetch(
        `http://localhost:4000/posts?keyword=${keyword}`
      );

      const body = await response.json();
      if (body.status === 'error') {
        setPosts(null);
        setError(body.message);

      } else {
        setPosts(body.data.posts);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getAllPosts();
  };



  const handleLike = async (e) => {
    setLoading(true);
    setError(null);

    e.target.classList.toggle('IsAnimating');

    const li = e.target.closest('li');

    const idPost = li.getAttribute('post-id');

    try {
      const res = await fetch(
        `http://localhost:4000/posts/${idPost}/like`,
        {
          method: 'POST',
          headers: {
            Authorization: token,
          },
        }
      );

      const body = await res.json();

      if (body.status === 'error') {
        setError(body.message);
      } else {
        setUpdate(!update);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getAllPosts();
  }, [update]);

  return (
    <>
      <Navbar />
      <main className='MainPost'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='keyword'
            placeholder=' Busca un post'
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button disabled={loading}>Buscar</button>
        </form>

        {error && <p className='Error'>{error}</p>}

        {posts && (
          <ul className='PostList'>
            {posts.map((post) => {
              return (
                <li key={post.id} post-id={post.id}>
                  <header>
                    <p>
                      <FaRegUser />
                      {post.username}
                    </p>
                  </header>
                  <div>
                    {post.image && (
                      <img
                        src={`http://localhost:4000/${post.image}`}
                        alt='Imagen adjunta'
                        sizes='470px'
                      />
                    )}
                    <p>{post.text}</p>
                  </div>
                  <footer>
                    <div className='like-section' onClick={handleLike}>
                      <p>♥ {post.likes}</p>
                    </div>
                  </footer>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </>
  );
};

export default PostsList;
