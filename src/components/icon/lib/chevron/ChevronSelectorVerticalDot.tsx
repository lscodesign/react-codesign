// https://www.svgrepo.com/svg/533669/chevron-selector-vertical-dot
import React, { SVGProps } from "react";

export default (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 15L12 20L17 15M7 9L12 4L17 9M12 12H12.01M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}