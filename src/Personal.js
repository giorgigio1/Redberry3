import "./styles/personal.css";
import { Header } from "./comonents/global/header";
import { PersonalInfo } from "./comonents/personalInfo";
import { UserProfile } from "./comonents/global/userProfile";

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
