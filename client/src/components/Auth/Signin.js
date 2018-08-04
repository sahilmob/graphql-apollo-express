import React from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { SIGNIN_USER } from '../../queries'
import Error from '../Error.js';

const initialState = {
    username: '',
    password: '',

};

class Signin extends React.Component {
    state = {
        ...initialState
    };


    clearState = () => {
        this.setState({
            ...initialState
        });
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event, signinUser) => {
        event.preventDefault();
        signinUser().then(async ({data}) => {
            localStorage.setItem('token', data.signinUser.token);
            await this.props.refetch();
            this.clearState();
            this.props.history.push('/');
        })
    }

    validateForm = () => {
        const {username, password} = this.state;
        const isInvalid = !username || !password;
        return isInvalid;
    }

    render() {
        const {username, password} = this.state;
        return (
            <div className="App">
              <h2 className="App">Signin</h2>
              <Mutation mutation={ SIGNIN_USER } variables={ { username, password } }>
                { (signinUser, {data, loading, error}) => {
                      return (
                          <form className="form" onSubmit={ event => this.handleSubmit(event, signinUser) }>
                            <input type="text" name="username" placeholder="Username" onChange={ this.handleChange } value={ username } />
                            <input type="password" name="password" placeholder="Password" onChange={ this.handleChange } value={ password } />
                            <button type="submit" className="button-primary" disabled={ loading || this.validateForm() }>Submit</button>
                            { error && <Error error={ error } /> }
                          </form>
                      )
                  } }
              </Mutation>
            </div>
        )
    }
}

export default withRouter(Signin);