import { ExperienceInfo } from "./components/experienceinfo";
import { Header } from "./components/global/header";
import { UserProfile } from "./components/global/userProfile";
import { PersonalInfo } from "./components/personalInfo";

export default function Experience() {
  return (
    <div className="main">
      <div className="left">
        <Header title="გამოცდილება" page="2/3" />
        <div>
          <form>
            <ExperienceInfo />
          </form>
        </div>
      </div>
      <UserProfile />
    </div>
  );
}
