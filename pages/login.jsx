import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

// highlight-next-line

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <div className="container mx-auto ">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
      />
    </div>
  );
};

export default Login;
