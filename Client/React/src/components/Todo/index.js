import Todo from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addItem, getItems } from '../../actions/todoActions';
import { fetchUser } from "../../actions/auth0";

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.sessionItems.accessToken,
        items: state.todoReducer.items
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        addItem,
        getItems,
        fetchUser
    }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);