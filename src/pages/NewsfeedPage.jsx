import AboutMe from "../components/AboutMe";
import Photos from "../components/Photos";
import Posts from "../components/Posts";
import ProfileHeader from "../components/ProfileHeader";
import Upload from "../components/Upload";
import Videos from "../components/Videos";

const NewsfeedPage = () => {
    const posts = [
        {id: 1, hasVideo: false, hasImage: false, hasParticipants: false, multipleImages: false},
        {id: 2, hasVideo: false, hasImage: false, hasParticipants: true, multipleImages: false},
        {id: 3, hasVideo: false, hasImage: false, hasParticipants: true, multipleImages: false},
        {id: 4, hasVideo: true, hasImage: false, hasParticipants: true, multipleImages: false},
        {id: 5, hasVideo: false, hasImage: true, hasParticipants: true, multipleImages: false },
        {id: 5, hasVideo: false, hasImage: true, hasParticipants: true, multipleImages: true},
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
                    <Upload />
                    <Posts posts={posts} />
                </div>
            </div>
        </div>
    );
};

export default NewsfeedPage;