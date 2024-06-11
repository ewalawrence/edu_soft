import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { LockKeyholeIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md flex items-center justify-center space-x-2">
          <LockKeyholeIcon size={40} strokeWidth={1.5} className="text-yellow-300" />
          <span>Auth</span>
        </h1>
        <p className="text-white text-lg">
          Authentication Section 
        </p>
      </div>
      <div>
        <LoginButton>
           <Button variant="secondary" size="lg">Sign In</Button>
        </LoginButton>
      </div>
    </main>
  );
}
