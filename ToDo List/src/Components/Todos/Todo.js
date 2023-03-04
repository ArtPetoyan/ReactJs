import { useEffect, useState } from 'react';
import { RiTodoFill, RiDeleteBin2Line, RiCheckboxCircleLine, RiCheckboxBlankCircleLine } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({value, check, deleteHandler}) {
	let [str, setStr] = useState('');
	let [i, setI] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			setStr(str + value.text[i]);
			if(i < value.text.length - 1) setI(i + 1);
		}, 150);
	}, [i]);
	return (
	  <div className={value.isCompleted ? `${styles.todo} ${styles.completed}` : styles.todo} >
	  	<RiTodoFill className={styles.RiTodoFill}/>
	  	<span className={styles.span}>{str}</span>
	  	<span className={styles.icons}>
			<RiDeleteBin2Line className={styles.deleteIcon} onClick={deleteHandler}/>
			{value.isCompleted ? <RiCheckboxCircleLine onClick={check} className={styles.checkIcon}/> : <RiCheckboxBlankCircleLine onClick={check} className={styles.checkIcon}/>}
	  	</span>
	  </div>
	)
}
export default Todo;