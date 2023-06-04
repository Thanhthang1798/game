import { ReactNode } from "react";
import Header from "./Header";
import { Container } from "@mui/material";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
