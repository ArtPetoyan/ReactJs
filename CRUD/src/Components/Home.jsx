import { NavLink } from "react-router-dom";
import User from "./User";

function Home({user, onClick, deleteUser}) {
	return (
		<div className="home">
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Username</th>
						<th>email</th>
					</tr>
				</thead>
			<tbody>
				{user.map(el => {
					return (<User 
						name={el.name} 
						key={el.id} 
						email={el.email} 
						id={el.id} 
						onClick={onClick}
						deleteUser={deleteUser}
					/>)
				})}
			</tbody>
		</table>
			<NavLink to='addUser'>
				<button 
					className="add" 
					id="btnAdd"
					>Add User
				</button>
			</NavLink>
		</div>
	)
}
export default Home;