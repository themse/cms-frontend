import React from 'react';
import { render } from 'react-dom';
import { normalize, schema } from 'normalizr';
// import JSONPretty from "react-json-pretty";

const blogposts = {
    id: 10,
    title: 'My blogpost',
    description: 'Short blogpost description',
    content: 'Hello world',
    comments: [
        {
            id: 1,
            author: [
                {
                    id: 1,
                    name: 'Rob Doe',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                },
            ],
            content: 'Nice post!',
        },
        {
            id: 2,
            author: [
                {
                    id: 2,
                    name: 'Jane Doe',
                },
            ],
            content: 'I totally agree with you',
        },
    ],
    authors: [
        {
            id: 1,
            name: 'Rob Doe',
        },
        {
            id: 2,
            name: 'Jane Doe',
        },
    ],
};

const author = new schema.Entity('author');

const commentSchema = new schema.Entity('comments', {
    author: [author],
});

const postSchema = new schema.Entity('posts', {
    comments: [commentSchema],
    authors: [author],
});

const normalizedBlogposts = normalize(blogposts, postSchema);

const App = () => (
    <div>
        blogposts:
        {/* <JSONPretty json={blogposts} /> */}
        normalized blogposts:
        {/* <JSONPretty json={normalizedBlogposts} /> */}
    </div>
);

render(<App />, document.getElementById('root'));
