import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";

library.add(faPlus);

class Icon extends React.Component {
    render() {
        return (
            <FontAwesomeIcon icon={this.props.type} />
        );
    }
}
export default Icon;