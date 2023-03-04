import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function View({id}) {
	let [user, setUser] = useState('')
	useEffect(() => {
		fetchData();
	  }, [])
	  const fetchData = async () => {
		await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then(response => {
		  if(!response.ok) {
			throw new Error("Error fetching users");
		  }
		  return response.json();
		})
		.then(json => {setUser(json)})
		.catch(err => {
		  alert(err.message);
		});
	  };
  return (
	<>
	{!user && <div className="divLoad"></div>}
	{!!user && (<>
		<table>
		<tbody>
			<tr>
				<td>Id</td>
				<td>{user.id}</td>
			</tr>
			<tr>
				<td>Name</td>
				<td>{user.name}</td>
			</tr>
			<tr>
				<td>Email</td>
				<td>{user.email}</td>
			</tr>
			<tr>
				<td>Phone</td>
				<td>{user.phone}</td>
			</tr>
			<tr>
				<td>Website</td>
				<td>{user.website}</td>
			</tr>
		</tbody>
	</table>
	<NavLink to='/'>
		<button className="viewAll">View All Users</button>
	</NavLink>
	</>)
	}
</>
  )
}
