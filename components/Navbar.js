import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";

export function Navbar() {
  const supabase = useSupabaseClient();
  const session = useSession();
  return (
    <nav className="bg-white h-20 flex items-center">
      <div className="mx-auto container flex gap-10">
        <Link href="/">Carbuk</Link>
        {session && (
          <Link href="/servicio/create" className="">
            Crear servicio
          </Link>
        )}
        {session && (
          <Link href="/profile" className="">
            Profile
          </Link>
        )}
        {session && (
          <button
            className="button block"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out{" "}
          </button>
        )}

        {!session && <Link href="/login">Login</Link>}
      </div>
    </nav>
  );
}
