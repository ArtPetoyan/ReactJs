import Todo from "./Todo";
import styles from './TodoList.module.css';
function TodoList({value, deleteHandler, check}) {
	return(
		<div className={styles.todoList}>
			{!value.length && <span className={styles.span}>Todo List is empty</span>}
			{value.map((el) => {
				return <Todo 
					value={el} 
					key={el.id} 
					check ={() => check(el.id)}
					deleteHandler={() => deleteHandler(el.id)}
				/>
			})}
		</div>
	)
}
export default TodoList