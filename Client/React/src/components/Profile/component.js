import React, { Component } from 'react';
import { logOut } from '../../utils/auth0';
import './Profile.css';

class Profile extends Component {
    // state={
    //     profileUser: this.props.profile.nickname
    // }

    componentDidMount() {
        this.props.fetchUser(this.props.token)
        // this.state.profileUser
    }

    onLogOut = () => {
        this.props.removeSession();
        logOut();
    }

    profileFinder = () =>{
        return this.props.profile.nickname
    }

    render() {
        // console.log(this.state,"this is profile!")
        return (
            <div>
                { this.props.profile.picture
                ? <img className='profile-img' src={this.props.profile.picture} alt='User Profile'/>
                : null }
                
                { this.props.profile.name
                ? <p>Welcome, {this.props.profile.nickname}</p>
                : null }

                <button className='logout-btn' onClick={this.onLogOut}>Logout</button>
            </div>
        );
    }
}

export default Profile;