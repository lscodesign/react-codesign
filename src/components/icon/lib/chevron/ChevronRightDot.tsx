// https://www.svgrepo.com/svg/533663/chevron-right-dot
import React, { SVGProps } from "react";

export default (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 6L15 12L9 18M9 12H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}