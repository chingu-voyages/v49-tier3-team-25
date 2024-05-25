import UserAccountLayout from "../components/user-account/UserAccountLayout";
import Profile from "../components/user-account/Profile";

export default function UserProfile() {
  return (
    <>
      <UserAccountLayout>
        <div>
          <Profile />
        </div>
      </UserAccountLayout>
    </>
  );
}
