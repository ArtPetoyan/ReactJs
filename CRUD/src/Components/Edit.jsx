import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Edit({id, onClick}) {
	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [phone, setPhone] = useState('');
	let [website, setWebsite] = useState('');
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
		.then(json => {
			setName(json.name)
			setEmail(json.email)
			setPhone(json.phone)
			setWebsite(json.website)
		})
		.catch(err => {
			alert(err.message);
		});
	};
	  
  return (
	<div className="editDiv">	
		UserName: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
		Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
		Phone: <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
		Website: <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)}/>
		<br />
		<NavLink to='/'>
			<button 
				className="editBtn" 
				onClick={() => onClick(id, {id, name, email, phone, website})}
				>Edit
			</button>
		</NavLink>
	</div>
  )
}
