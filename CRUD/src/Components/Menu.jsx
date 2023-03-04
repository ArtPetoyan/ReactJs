import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
	<nav>
		<NavLink to='.' end >Home</NavLink>
		<NavLink to='about' >About</NavLink>
		<NavLink to='contacts' >Contacts</NavLink>
	</nav>
  )
}
