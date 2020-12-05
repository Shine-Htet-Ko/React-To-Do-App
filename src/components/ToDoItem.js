import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import '../App.css';

function ToDoItem(props) {
    const handleChange = () => {
        props.toggle(props.id);
    }

    const handleDelete = () => {
        props.remove(props.id);
    }

    return (
        <li className="_row">
            {/*<input type="checkbox" checked={ props.status } onChange={ handleChange }/> */}
            { (props.status) ? (
                <div>
                    <div className="_row">
                        <span onClick={ handleChange } className="check-icon-container" >
                            <MdCheckBox className="check-icon" />
                        </span>
                        <s><span className="subject">{ props.subject }</span></s>
                    </div>
                    <i className="modified-date">Listed at - { props.modifiedDate }</i>
                </div>
            ) : (
                <div>
                    <div className="_row">
                        <span onClick={ handleChange } className="check-icon-container" >
                            <MdCheckBoxOutlineBlank className="check-icon" />
                        </span>
                        <span className="subject">{ props.subject }</span>
                    </div>
                    <i className="modified-date">Listed at - { props.modifiedDate }</i>
                </div>
            ) }
            <span className="delete-btn" onClick={ handleDelete }>×</span>
        </li>
    );
}

export default ToDoItem;