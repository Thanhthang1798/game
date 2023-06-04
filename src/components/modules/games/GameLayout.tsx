import { ReactNode } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Outlet } from "react-router-dom";

type Props = {
  children?: ReactNode;
};
export default function GameLayout({ children }: Props) {
  return (
    <MainLayout>
      {/* <div className="flex justify-center aligns-center gap-2 mt-3">
        <Link to="/game/game1">Game1</Link>
        <Link to="/game/game2">Game2</Link>
      </div> */}
      {children}
      <Outlet />
    </MainLayout>
  );
}
