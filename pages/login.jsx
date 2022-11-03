import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

// highlight-next-line

import Account from "../components/Account";

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <div className="container mx-auto ">
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <h1>You are already logged in</h1>
      )}
    </div>
  );
};

export default Login;
