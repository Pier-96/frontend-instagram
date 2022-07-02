import React from 'react';
import './Posts.css';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useToken } from '../../TokenContext';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineAddToPhotos } from 'react-icons/md';
import { MdHome } from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';
import { MdOutlineSearch } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';
import { HiExternalLink } from 'react-icons/hi';

const PostsList = () => {
  const [token, setToken] = useToken();
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
        `http://localhost:4000/posts?keyword=${keyword}`,
        params
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

    const idPost = li.getAttribute('data-id');

    try {
      const res = await fetch(`http://localhost:4000/posts/${idPost}/like`, {
        method: 'POST',
        headers: {
          Authorization: token,
        },
      });

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

  const handleDeletePost = async (idPost) => {
    setLoading(true);
    setError(null);

    if (window.confirm('¿Deseas eliminar el tweet?')) {
      try {
        const res = await fetch(`http://localhost:4000/posts/${idPost}`, {
          method: 'DELETE',
          headers: {
            Authorization: token,
          },
        });

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
    }
  };

  useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  if (!token) return <Navigate to='/' />;

  return (
    <>
      <div className='Post-body'>
        <main className='MainPost'>
          <nav className='Nav-search'>
            <img src='minilogo.png' alt='minilogo' />
            <form onSubmit={handleSubmit}>
              <MdOutlineSearch className='lupa' />
              <input
                type='text'
                name='keyword'
                placeholder=' Busca un post'
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button className='searchbutton' disabled={loading}>
                Buscar
              </button>
            </form>
            <div className='icons-main'>
              <a href='/posts'>
                <MdHome className='icon-style' />
              </a>
              <a href='/new'>
                <MdOutlineAddToPhotos className='icon-style' />
              </a>
              {token && (
                <a href='/' onClick={() => setToken(null)}>
                  <TbLogout className='icon-style' />
                </a>
              )}
            </div>
          </nav>
          {error && <p className='Error'>{error}</p>}

          {posts && (
            <ul className='PostList'>
              {posts.map((post) => {
                return (
                  <li key={post.id} data-id={post.id}>
                    <header>
                      <p>
                        <FaRegUser />
                        {post.username}
                      </p>
                      <a href={`posts/${post.id}`} target='_blank'>
                        <HiExternalLink className='link-externo' />
                      </a>
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
                      <div
                        className={`like-section ${
                          token && post.likeByMe && 'IsAnimating'
                        }`}
                        onClick={token && handleLike}
                      >
                        <p>♥ {post.likes}</p>
                      </div>
                    </footer>
                    <div>
                      {token && post.owner === 1 && (
                        <button
                          className='deleteB-post'
                          onClick={() => handleDeletePost(post.id)}
                        >
                          <BsFillTrashFill className='deleteB-post' />
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </main>
      </div>
    </>
  );
};

export default PostsList;
