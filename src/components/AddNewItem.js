import { useState } from 'react';
import '../App.css';

function AddNewItem(props) {
    const [subject, setSubject] = useState('');

    const handleChange = (evt) => {
        setSubject(evt.target.value);
    }

    const handleAdd = () => {
        if (subject.length <= 0) {
            alert("Enpty!");
        } else {
            props.add(subject);
        }
        setSubject('');
    }

    return (
        <table className="add-item-box">
            <tbody>
                <tr>
                    <td>
                        <input type="text" value={ subject } placeholder="Add new item here ..." onChange={ handleChange } />
                    </td>
                    <td>
                        <button onClick={ handleAdd }>+</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default AddNewItem;