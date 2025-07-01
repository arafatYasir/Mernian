import AboutMe from "../components/AboutMe";
import Photos from "../components/Photos";
import Posts from "../components/Posts";
import ProfileHeader from "../components/ProfileHeader";
import Videos from "../components/Videos";

const ProfilePage = () => {
    const posts = [
        {id: 1, hasVideo: false, hasImage: false, hasParticipants: false},
        {id: 2, hasVideo: false, hasImage: false, hasParticipants: true},
        {id: 3, hasVideo: false, hasImage: false, hasParticipants: true},
        {id: 4, hasVideo: true, hasImage: false, hasParticipants: true},
        {id: 5, hasVideo: false, hasImage: true, hasParticipants: true}
    ]
    return (
        <div className="mt-8">
            <ProfileHeader />

            <div className="flex gap-4 mt-[33px]">
                <div>
                    <AboutMe />
                    <Photos />
                    <Videos />
                </div>
                <div>
                    <Posts posts={posts} />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;