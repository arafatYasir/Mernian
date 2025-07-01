import Post from "./Post";

const Posts = ({posts}) => {
    
    return (
        <div className="flex flex-col gap-[26px] mb-5">
            {posts.map(post => (
                <Post key={post.id} hasImage={post.hasImage} hasVideo={post.hasVideo} hasParticipants={post.hasParticipants} multipleImage={post.multipleImages} />
            ))}
        </div>
    );
};

export default Posts;