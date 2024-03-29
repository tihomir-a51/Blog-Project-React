import { useState } from "react";
import { useHistory } from 'react-router-dom';
import url from "./Path";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('David');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added')
            setIsPending(false)
            history.push('/');
        })
    }


    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    placeholder="Write your blog body..."
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    placeholder="Write your blog body..."
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="David">David</option>
                    <option value="Steven">Steven</option>
                    <option value="Peter">Peter</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}


            </form>
        </div>
    );
}

export default Create;