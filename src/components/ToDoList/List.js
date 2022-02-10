import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './List.css'



library.add(faTrash);


class List extends React.Component {
   
    render() {
        return (
            <ul>
                {this.props.list.map(({ id, value, isDone }) => {
                    return (
                        <li key={id}>
                             
                            <input type="checkbox" >
                            </input>
                            <span>{value} {  }</span>
                            <button style={{ cursor: "pointer" }} onClick={() => this.props.delItem(id)}>
                                <FontAwesomeIcon icon="trash" />
                            </button>
                        </li>
                    )
                })
                }
            </ul>
        )
    }

}
export default List;