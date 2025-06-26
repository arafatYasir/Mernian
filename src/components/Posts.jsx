import Post from "./Post";

const Posts = () => {
    const posts = [
        {id: 1, hasVideo: false, hasImage: false},
        {id: 2, hasVideo: false, hasImage: false},
        {id: 3, hasVideo: false, hasImage: false},
        {id: 4, hasVideo: true, hasImage: false},
        {id: 5, hasVideo: false, hasImage: true}
    ]
    return (
        <div className="flex flex-col gap-10">
            {posts.map(post => (
                <Post key={post.id} hasImage={post.hasImage} hasVideo={post.hasVideo} />
            ))}
        </div>
    );
};

export default Posts;