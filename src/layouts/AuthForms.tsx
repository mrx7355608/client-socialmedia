import React from "react";

export default function AuthForms({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-space-between mw-100 mh-100">
            {children}
        </div>
    );
}
