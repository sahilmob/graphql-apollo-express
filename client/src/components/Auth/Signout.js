import React from 'react'
import { ApolloConsumer } from 'react-apollo';
import { withRouter } from 'react-router-dom';

const handelSignout = (client, history) => {
    localStorage.setItem('token', '');
    client.resetStore();
    history.push('/');
}

const Signout = ({history}) => {
    return (
        <ApolloConsumer>
          { (client) => {
                console.log(client)
                return (
                    <button onClick={ () => handelSignout(client, history) }>Signout</button>
                )
            } }
        </ApolloConsumer>



    )
}

export default withRouter(Signout);
