import React from 'react';
import Link from './Link'
import {connect} from 'react-redux';

const Header = props => {  
    return(  
        <div style={{textAlign:'center'}}>   
            <br />
            <Link loginType="" href="/" className={props.currentLoggedInAs===''?"selected item":"item"}>
                Welcome!!!!
            </Link>
            <Link loginType="user" href="/user" className={props.currentLoggedInAs==='user'?"selected item":"item"}>
                User
            </Link>
            <Link loginType="admin" href="/admin" className={props.currentLoggedInAs==='admin'?"selected item":"item"}>
                Admin
            </Link>
        </div>
    )
}


const mapStateToProps = state => { 
    return {
        currentLoggedInAs: state.currentLoggedInAs
    }
};

export default connect(mapStateToProps)(Header);