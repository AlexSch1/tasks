import NextLink from "next/link";
import {FunctionComponent} from "react";

interface Props {
  href: string;
  title: string;
}

const Link: FunctionComponent<Props> = ({href, title}) => {
  return (
        <NextLink className="link border-b-4 border-teal-50" href={href}>{title}</NextLink>
  );
};

export default Link;
