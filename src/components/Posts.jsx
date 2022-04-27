import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const Posts = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('');

    const fetchPosts = async () => {
        let data = await axios.get(url);
        data = data.data;
        setPosts(data);
    }

    useEffect(() => {
        async function fetchingPosts() {
            await fetchPosts();
        }
        fetchingPosts();
    }, [])

    const handelClick = () => {
        setFilter(input);
    }

  return (
    <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handelClick}>Filter</button>
        <h1>{posts.length}</h1>
        {
            posts.filter(({userId, id, title, body}) => title.includes(filter) || body.includes(filter)).map(({userId, id, title, body}) => <Card key={id} id={id} userId={userId} title={title} body={body}  /> )
        }
    </div>
  )
}

export default Posts;
