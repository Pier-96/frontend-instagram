// import { useEffect, useState } from 'react';
// import { format } from 'date-fns';


// const OnePost = () => {
//     const [loading, setLoading] = useState(false);
//     const [post, setPost] = useState(null);
//     const [update, setUpdate] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(()=>{
        
//     })

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         setLoading(true);
//         setError(null)
//         const idPost = li.getAttribute('data-id');
//         const li = e.target.closest('li');

//         try {
//             const res = await fetch(`http://localhost:4000/posts/${idPost}`
//             )
//             const body = await res.json()
//             console.log(body)

//             if (body.status === 'error') setError(body.message)
//             setPost(body.data.posts)

//         } catch (err) {
//             setError(err.message)

//         } finally {
//             setLoading(false)
//         }
//     }


//     return (
//         <div className='PostsSearch'>
//             <form onSubmit={handleSubmit}>
//                 <input type='text'
//                     name='keyword' onChange={(e) => setKeyword(e.target.value)}
//                 />
//                 <button disabled={loading}>Buscar</button>
//             </form>

//             {error && <p className='Error'>{error}</p>}

//             {post && (
//                 <ul className='postsList'>
//                     {post.map((post) => {
//                         const dataTime = format(
//                             new Date(post.createdAt),
//                             'yyyy-MM-dd'
//                         );
//                         return (
//                             <li key={post.id}  >
//                                 <header>
//                                     <p>{post.username}</p>
//                                     <time dataTime={dataTime}>
//                                         {format(
//                                             new Date(post.createdAt),
//                                             'hh:mm - dd/MM/yyyy'
//                                         )}
//                                     </time>
//                                 </header>
//                                 <div>
//                                     <p>{post.text}</p>
//                                     {post.image && (
//                                         <img
//                                             src={`http://localhost:4000/${post.image}`}
//                                             alt='Imagen adjunta'
//                                         />
//                                     )}
//                                 </div>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             )}
//         </div>
//     );
// }


// export default OnePost;



