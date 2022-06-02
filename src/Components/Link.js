import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import {selectLoggedIn} from '../actions'; 


const Link = ({ className, loginType, href, children }) => {
  const dispatch = useDispatch();
  const loggedState = useSelector(state => state.currentLoggedInAs) 
  //console.log(`loggedState ${loggedState}`)

  const navigatePage = (event) => { 
    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
    dispatch(selectLoggedIn({type: 'LOGGED_IN', payload: loginType}));
  };

  return (
    <a style={{padding:'5px'}}  onClick={navigatePage} className={className} href={href}>
      {children}
    </a>
  );
};

//getting info?
const mapStateToProps = state => { 
  console.log(state)
  return { loggedInAs: state.loggedInAs };
};

//export default Link;
export default connect(mapStateToProps, {selectLoggedIn} )(Link)
