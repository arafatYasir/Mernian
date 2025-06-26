import AboutMe from "../components/AboutMe";
import Photos from "../components/Photos";
import ProfileHeader from "../components/ProfileHeader";
import Videos from "../components/Videos";

const ProfilePage = () => {
    return (
        <div className="mt-8">
            <ProfileHeader />

            <div className="flex gap-4 mt-[33px]">
                <div>
                    <AboutMe />
                    <Photos />
                    <Videos />
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ProfilePage;