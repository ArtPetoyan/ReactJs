import styles from './TodoForm.module.css'
function TodoForm({value, onClick, onChange}) {
	return (
		<form className={styles.form} >
			<input 
				type="text" 
				placeholder="Create Tasks..." 
				className={styles.input} 
				value={value} 
				onChange={onChange}
			/>
			<button className={styles.addBtn} onClick={onClick}>Add</button>
		</form>
	)
}
export default TodoForm;
