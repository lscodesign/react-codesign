// https://www.svgrepo.com/svg/533655/chevron-down-dot
import React, { SVGProps } from "react";

export default (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6 9L12 15L18 9M12 9H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}