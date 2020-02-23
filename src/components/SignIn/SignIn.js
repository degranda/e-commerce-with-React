import React from 'react'; 
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';
import FromInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your emailand password</span>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <FromInput 
                            type="email" 
                            name="email" 
                            value={this.state.email} 
                            handleChange={this.handleChange} 
                            label="email"
                            required/> 
                    </div>
                   <div>
                        <FromInput 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            handleChange={this.handleChange} 
                            label="password"
                            required/>
                   </div>
                   <div className="buttons">
                        <CustomButton type="submit" > Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                   </div>

                </form>
            </div>
        )
    }
}

export default SignIn;