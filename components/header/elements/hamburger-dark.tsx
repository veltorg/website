import { StyleConfig } from "@chakra-ui/theme-tools";
import { FC, SVGProps } from "react";

type Props = StyleConfig & SVGProps<SVGSVGElement>;

export const HamburgerDark: FC<Props> = () => {
  return (
    <svg
      width="29"
      height="21"
      viewBox="0 0 29 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="29" height="3" fill="white" />
      <rect y="9" width="29" height="3" fill="white" />
      <rect y="18" width="29" height="3" fill="white" />
    </svg>
  );
};
