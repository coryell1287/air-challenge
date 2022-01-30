import React from "react";

interface ListSectionProps {
  children: React.ReactNode;
}
export const ListSection = ({ children }: ListSectionProps) => {
  return <section className="list-section">{children}</section>;
};
