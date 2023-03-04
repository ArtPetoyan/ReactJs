import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function AddUser({onClick}) {
	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [phone, setPhone] = useState('');
	let [web, setWeb] = useState('');
  return (
	<div className='addUser'>
		<h3>If you want add new user, please fill every fields and then you see button for add</h3>
		Username: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
		Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
		Phone: <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
		Website: <input type="text" value={web} onChange={(e) => setWeb(e.target.value)} />
		<NavLink to='/'>
			<button 
				style={name.trim() && email.trim() && phone.trim() && web.trim() ? {display: 'block'} : {display: 'none'}} 
				onClick={() => onClick({name, email, phone, web})}
				>Add User
			</button>
		</NavLink>
	</div>
  )
}
