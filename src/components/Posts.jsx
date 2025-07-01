import Post from "./Post";

const Posts = () => {
    const posts = [
        {id: 1, hasVideo: false, hasImage: false, hasParticipants: false},
        {id: 2, hasVideo: false, hasImage: false, hasParticipants: true},
        {id: 3, hasVideo: false, hasImage: false, hasParticipants: true},
        {id: 4, hasVideo: true, hasImage: false, hasParticipants: true},
        {id: 5, hasVideo: false, hasImage: true, hasParticipants: true}
    ]
    return (
        <div className="flex flex-col gap-[26px] mb-5">
            {posts.map(post => (
                <Post key={post.id} hasImage={post.hasImage} hasVideo={post.hasVideo} hasParticipants={post.hasParticipants} />
            ))}
        </div>
    );
};

export default Posts;