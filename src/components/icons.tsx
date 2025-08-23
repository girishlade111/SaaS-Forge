import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="32" height="32" rx="8" className="fill-primary" />
      <path
        d="M12 11.5C12 11.5 13.5 15 13.5 17C13.5 18.2426 12.4926 19.25 11.25 19.25C10.0074 19.25 9 18.2426 9 17C9 15.5 12 11.5 12 11.5Z"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.1568 9.34315C19.6568 11.3431 20.75 14 20.75 17C20.75 19.8995 18.6495 22.25 16 22.25C14.0284 22.25 12.3333 21.0314 11.5 19.25"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GoogleIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885C11.973 15.45 10.322 16 8 16s-3.973-.55-5.29-1.932C1.388 12.658.52 10.6.52 8.174c0-2.426.868-4.484 2.373-5.873C4.027.913 5.678.36 8 .36c1.928 0 3.57.545 4.84 1.636l-1.92 1.918c-.76-.72-1.766-1.15-3.033-1.15-1.405 0-2.61.486-3.53 1.455-.92.97-.137 2.27-.137 3.96h7.206c.05.31.077.625.077.942z"/>
        </svg>
    )
}
