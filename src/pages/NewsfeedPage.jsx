import AboutMe from "../components/AboutMe";
import Photos from "../components/Photos";
import Posts from "../components/Posts";
import ProfileHeader from "../components/ProfileHeader";
import Upload from "../components/Upload";
import Videos from "../components/Videos";

const NewsfeedPage = () => {
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
                    <Posts />
                </div>
            </div>
        </div>
    );
};

export default NewsfeedPage;