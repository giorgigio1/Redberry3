import "./styles/personal.css";
import { Header } from "./components/global/header";
import { PersonalInfo } from "./components/personalInfo";
import { UserProfile } from "./components/global/userProfile";

export default function Personal() {
  return (
    <div className="main">
      <div className="left">
        <Header title="პირადი ინფო" page="1/3" />
        <div>
          <form>
            <PersonalInfo />
          </form>
        </div>
      </div>
      <UserProfile />
    </div>
  );
}
