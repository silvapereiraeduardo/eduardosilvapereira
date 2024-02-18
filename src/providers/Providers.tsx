"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[];
};

export const Providers = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};
