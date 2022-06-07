import React from 'react';
import Link from './Link'

const Header = () => {
    return(
        <div>
            <Link loginType="" href="/" className="item">
                Welcome
            </Link>
            <Link loginType="user" href="/" className="item">
                User
            </Link>
            <Link loginType="admin" href="/" className="item">
                Admin
            </Link>
        </div>
    )
}

export default Header;