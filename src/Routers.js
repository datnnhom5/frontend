import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,

} from 'react-router-dom';
import LayoutAdmin from './layout/admin';
import AdminListBooking from './pages/booking';
import Addbooking from './pages/booking/add';
import AddDoctor from './pages/doctor/add';

import HomePage from './pages/home';


import tintucpage from './pages/tintuc';
import addTinTuc from './pages/tintuc/add';
import editTinTuc from './pages/tintuc/edit';
import login from './user/login';
import signUp from './user/signup';
const Routers=(props)=>{
    return(
        
        <Router>
            <Switch>
            <Route exact path="/admin/:path?/:path?/:path?">
                <LayoutAdmin>
                    <Switch>
                        <Route exact path="/admin/listbooking">
                            <AdminListBooking {...props}/>
                        </Route>    
                        <Route exact path="/admin/addbooking">
                            <Addbooking {...props}/>
                        </Route>
                        <Route exact path='/admin/adddoctor'>
                            <AddDoctor {...props}/>
                        </Route>
                    </Switch>     
                </LayoutAdmin>
            </Route>
                <Route path="/" exact component={HomePage}/>
                <Route path="/tintuc" exact component={tintucpage}/>
                <Route  path="/addtintuc" exact component={addTinTuc}/>   
                <Route  path="/edittintuc" exact component={editTinTuc}/>   
                <Route path="/login" exact component={login}/>  
                <Route path="/signup" exact component={signUp}/> 
            </Switch>
        </Router>
        
       
    )
}
export default Routers;