import React from "react";

export default function PostList({posts}) {
    return(
        <div>
            {posts.map(post => (
                <>
                <p>{post.content}</p>
                <img>{post.image}</img>
                </>
            ))}
        </div>
    );
};