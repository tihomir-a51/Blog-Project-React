import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('David');


    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>

            </form>
        </div>
     );
}
 
export default Create;