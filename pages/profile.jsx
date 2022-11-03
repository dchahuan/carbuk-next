import { useSession } from "@supabase/auth-helpers-react";
import Account from "../components/Account";

const Profile = () => {
  const session = useSession();
  console.log(session);
  return (
    <div className="container mx-auto ">
      <Account session={session} />
    </div>
  );
};

export default Profile;
