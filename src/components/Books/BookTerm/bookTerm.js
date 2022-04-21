import React from 'react';
import {Link} from 'react-router-dom';

const bookTerm = (props) => {



    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
              
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
            
            
                <Link className={"btn btn-info "}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>

                <a title={"Mark as taken"} className={"btn btn-success"}
                      onClick={() => props.onMarkAsTaken(props.term.id)}>
                    Mark as taken
                </a>
                {/* <form onSubmit={onFormSubmit}>
                <button id="submit" type="submit" className="btn btn-success">Mark as taken</button>
                
                </form> */}
              
            </td>
        </tr>
    )
}

export default bookTerm;
