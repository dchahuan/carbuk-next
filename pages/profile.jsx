import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useSession } from "@supabase/auth-helpers-react";
import Account from "../components/Account";

const Profile = () => {
  const session = useSession();
  return (
    <div className="container mx-auto ">
      <Account session={session} />
    </div>
  );
};

export default Profile;

export const getServerSideProps = withPageAuth({
  redirect: "/login",
});
