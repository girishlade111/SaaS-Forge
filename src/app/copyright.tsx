"use client"

import { useEffect, useState } from 'react';
import { Logo } from "@/components/icons";

export function Copyright() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <div className="flex items-center gap-2">
            <Logo />
            <p className="text-sm text-muted-foreground">&copy; {year} SaaS Forge. All rights reserved.</p>
        </div>
    );
}
