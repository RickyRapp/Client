import React from 'react';
import Link from './Link'
import {connect} from 'react-redux'; 

const Header = props => {   
    const currentPath = window.location.pathname.slice(1)
    return(  
        <div style={{textAlign:'center'}}>   
            <br />
            <Link loginType="" href="/" className={props.currentLoggedInAs===''||currentPath===''?"selected item":"item"}>
                Home
            </Link>
            <Link loginType="user" href="/user" className={props.currentLoggedInAs==='user'||currentPath==='user'?"selected item":"item"}>
                User
            </Link>
            <Link loginType="admin" href="/admin" className={props.currentLoggedInAs==='admin'||currentPath==='admin'?"selected item":"item"}>
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