import { Outlet } from "react-router-dom"
import Menu from "../Components/Menu"

export default function MainLayout() {
  return (
	<>
		<Menu />
		<Outlet />
	</>
  )
}
