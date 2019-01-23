import React, { Component } from 'react';
import './todo.css';
import { REACT_UNIVERSAL_REPO_URL } from '../../config';
import { fetchUser } from "../../actions/auth0";
import TodoItem from '../TodoItem';
import Profile from '../Profile';

class Todo extends Component {
    // state={
    //     userProfile: Profile
    // }

    componentDidMount() {
        this.props.getItems(this.props.token);
        this.props.fetchUser(this.props.token);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.props.token, {title: this.input.value.trim()});
        this.input.value = '';
        
    }

    renderTodos = () => {
        // console.log(this.props.items,"12312312312");
        const items = this.props.items.map(item => (
            <div key={item._id}>
                <TodoItem id={item._id} title={item.title} completed={item.completed} user={item.user_id} />
            </div>
        ))
        return items;
    }

    render() {
        console.log(this)
        // console.log(this.props.profile.name, "=-=-=--==--=")
        return (
            <div>
                <h1 className="site-header">Todos</h1>
                <p className="app-description">
                    Universal, cross platform todos app built from <a href={REACT_UNIVERSAL_REPO_URL} target="_blank">React Universal</a> starter kit
                </p>
                <div className="todo-container">
                    <h1>Todo List</h1>
                    <TodoItem></TodoItem>
                        {this.renderTodos()}
                    </div>
                <div className="row">
                    <div className="col-md-3"></div>
                        <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input
                                    id="input-title"
                                    className="input-title"
                                    type="text"
                                    autoComplete="off"
                                    ref={input => {this.input = input}}
                                    placeholder="Add a todo..."/>

                                <button type="submit" >Submit</button>
                            </div>
                        </form>
                        
                        </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}

export default Todo;