import React from "react";

interface Props {
  children: React.ReactNode;
}
export const ListWrapper = ({ children }: Props) => {
  return <section className="list-wrapper">{children}</section>;
};
