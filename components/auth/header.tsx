import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LockKeyholeIcon } from "lucide-react";

const font = Poppins({
    subsets: ["latin"],
    weight:["600"], 
});

interface HeaderProps {
    label: string;
};

export const Header = ({
    label,
}: HeaderProps) => {
    return (
        <div className="w-full flex-col gaap-y-4 items-center justify-center">
            <h1 className={cn("text-3xl font-semibold",
                font.className,
            )}>
              <div className="flex items-center">
                <LockKeyholeIcon size={40} strokeWidth={1.5} className="text-yellow-300" />
                <span className="ml-2">Auth</span>
              </div>
            </h1>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    );
};
