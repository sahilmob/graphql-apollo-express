import React from 'react';

class Signup extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    };

    handelChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const {username, email, password, passwordConfirmation} = this.state;
        return (
            <div className="App">
              <h2 className="App">Signup</h2>
              <form className="form">
                <input type="text" name="username" placeholder="Username" onChange={ this.handelChange } value={ username } />
                <input type="email" name="email" placeholder="Email Address" onChange={ this.handelChange } value={ email } />
                <input type="password" name="password" placeholder="Password" onChange={ this.handelChange } value={ password } />
                <input type="password" name="passwordConfirmation" placeholder="Confirm Password" onChange={ this.handelChange } value={ passwordConfirmation } />
                <button type="submit" className="button-primary">Submit</button>
              </form>
            </div>
        )
    }
}

export default Signup;