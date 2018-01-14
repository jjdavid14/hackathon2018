import React from 'react';
import './SignIn.css';

const SignIn = ({ onRouteChange }) => {
    return (
        <article style={{ height: '500px' }} className="br1 ba b--transparent bg-white-40 mv2 w-60-m w-70-l mw10 shadow-5 center grow">
            <main className="pa5">
                <div className="measure">
                    <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                        <legend className="pb2 f1 fw5 ttu ph0 mh0 pt4-ns">Login</legend>
                        <div className="mt3">
                            <label className="db fw5 lh-copy f9" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset bg-white-30 w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw5 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-white-30 hover-bg-dim hover-white w-100" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            id="signin-button"
                            onClick={() => onRouteChange('home')}
                            className="b ph3 pv2 input-reset pointer f6 dib dim pl3"
                            type="submit"
                            value="Login"
                        />
                        <p onClick={() => onRouteChange('register')} className="f6 link dim db pointer dib pl4">New User?</p>
                    </div>                    
                </div>
            </main>
        </article>
    );
}

export default SignIn;