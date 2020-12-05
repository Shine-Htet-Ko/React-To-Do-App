import { useState } from 'react';
import NavBar from "./components/NavBar";
import ToDoItem from "./components/ToDoItem";
import AddNewItem from "./components/AddNewItem";
import './App.css';

function App() {
    const todoData = localStorage.getItem('todo-data');
    var storagedData = "";
    
    if (todoData == null) {
        storagedData = [];
    } else {
        storagedData = [...JSON.parse(todoData)];
    }
    
	const [items, setItems] = useState(
	    storagedData
	);
    
   	const toggle = (index) => {
		const item = items;
		item[index].status = !item[index].status;
		updateToDoDataToLocalStorage(item);
		setItems([...item]);
	}
	
    const removeItem = (index) => {
        const item = items;
        item.splice(index, 1);
        updateToDoDataToLocalStorage(items);
        setItems([...item]);
    }
    
    const addItem = (subject) => {
        const item = items;
        item.unshift({
            subject,
            modifiedDate: new Date().toLocaleDateString(),
            modifiedTime: new Date().toLocaleTimeString(),
            status : 0
        });
        updateToDoDataToLocalStorage(item)
        setItems([...item]);
    }
   
    const updateToDoDataToLocalStorage = item => localStorage.setItem("todo-data", JSON.stringify([...item]));
	
	return (
	    <div>
	        <NavBar />
    		<div className="wrap">
    		    { (items.length <= 0) ? (
    		        <div>
    		            <h3 align="center">No Item Data!</h3>
    		        </div>
    		    ) : (
    		        <ul>
        		        { items.map((val, index) => (
        		            <ToDoItem
        		                key={ index }
        		                id={ index }
        		                subject={ val.subject }
        		                status={ val.status }
        		                modifiedDate={ val.modifiedDate }
        		                modifiedTime={ val.modifiedTime }
        		                toggle={ toggle }
        		                remove={ removeItem }
        		                />
        		        )) }
    		        </ul>
    		    ) }
    		    <AddNewItem add={ addItem }/>
    		</div>
		</div>
	);
}

export default App;