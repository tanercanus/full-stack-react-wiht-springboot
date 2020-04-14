import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: 'taner',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        
    }

    handleChange(event) {
        // console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({
    //         password: event.target.value
    //     });
    // }

    loginClicked() {
        // if (this.state.username === 'taner' && this.state.password ==='dummy'){
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`);

        //     // console.log('success');
        //     // this.setState({showSuccessMessage: true});
        //     // this.setState({hasLoginFailed: false});
        // } else {
        //     console.log('failed');
        //     this.setState({showSuccessMessage: false});
        //     this.setState({hasLoginFailed: true});
        // }

        // AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        //     .then(
        //         () => {

        //             AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //             this.props.history.push(`/welcome/${this.state.username}`);
        //         }
        //     )
        //     .catch(
        //         () => {
        //             this.setState({showSuccessMessage: false});
        //             this.setState({hasLoginFailed: true});
        //         }
        //     );

        AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then(
                (response) => {

                    AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token);
                    this.props.history.push(`/welcome/${this.state.username}`);
                }
            )
            .catch(
                () => {
                    this.setState({showSuccessMessage: false});
                    this.setState({hasLoginFailed: true});
                }
            );

    }

    render() {
        return (
            <div>
            <h1>Login</h1>
            <div className="container">
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                {this.state.hasLoginFailed && <div class="alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Success</div>}            
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
            </div>
        )
    }

}

export default LoginComponent;