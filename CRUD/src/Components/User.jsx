import { NavLink } from "react-router-dom"

export default function User({id, name, email, onClick, deleteUser}) {
  return (
	<>
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{email}</td>
			<td className="btns">
				<NavLink to='/view'><button onClick={() => onClick(id)}>View</button></NavLink>
				<NavLink to='/edit'><button onClick={() => onClick(id)}>Edit</button></NavLink>
				<button onClick={() => deleteUser(id)}>Delete</button>
			</td>
		</tr>
	</>
  )
}
