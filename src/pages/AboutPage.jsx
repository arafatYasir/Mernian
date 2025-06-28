import AboutMe from "../components/AboutMe";
import Activities from "../components/Activities";
import Interests from "../components/Interests";
import PersonalInfo from "../components/PersonalInfo";
import ProfileHeader from "../components/ProfileHeader"

const AboutPage = () => {
    return (
        <div className="mt-8 mb-[130px]">
            <ProfileHeader />

            <div className="mt-[33px] flex gap-[18px]">
                <div className="flex flex-col gap-4">
                    <AboutMe />
                    <PersonalInfo />
                </div>
                <div className="flex flex-col gap-4">
                    <Interests />
                    <Activities />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;