import React from 'react'
import {Link} from 'react-router-dom';

function Dashboard() {
    return (
        <div>
           <div className="col12 sm4 md8 flexCC c7b">
               <div className="wrapper pa dashboardCanvas flex">
                    <div className="col3 sm4 md8 sideMenu c6b"> 
                        <ul className='col12 sm4 md8 sideNavMenu'>
                            <li>GROWTH PLUG</li>    
                            <li><i class="fas fa-home"></i> Dashboard</li>
                            <li><i class="fas fa-globe"></i> Website</li>
                            <li><i class="fas fa-users"></i> Visitors</li>
                            <li><i class="fas fa-star-half-alt"></i> Reviews</li>
                            <li><i class="fas fa-list-ul"></i> Listings</li>
                            <li><i class="fas fa-calendar-alt"></i> Appointments</li>
                            <li><i class="fas fa-cog"></i> Settings</li>                            
                        </ul>                       
                    </div>
                    <div className="col9 sm4 md8 dashContainer">
                        <div className="headerDash col12 sm4 md8 flexRC pr2">
                            <h6 className='c7t mf ma'>San Jose,CA</h6>
                            <button className='btn3 c3b c1t bn br'><Link to="/" className='c7t'>Logout</Link></button>
                        </div>
                        <div className="containDash col12 sm4 md8 pa">
                            <div className="col12 sm4 md8">
                                <h4 className='mf mb'>Lisiting</h4>
                            </div>
                            <table id="customers">
                                <tr>
                                    <th>Source</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Rating</th>
                                    <th>Listed</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <td>Google</td>
                                    <td>ABC Dental</td>
                                    <td>2101 California St.</td>
                                    <td>111.111.1111</td>
                                    <td>3/5</td>
                                    <td>Yes</td>
                                    <td></td>
                                    <td><button className='btn3 c3b bn c1t br'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Google</td>
                                    <td>ABC Dental</td>
                                    <td>2101 California St.</td>
                                    <td>111.111.1111</td>
                                    <td>3/5</td>
                                    <td>Yes</td>
                                    <td></td>
                                    <td><button className='btn3 c3b bn c1t br'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Google</td>
                                    <td>ABC Dental</td>
                                    <td>2101 California St.</td>
                                    <td>111.111.1111</td>
                                    <td>3/5</td>
                                    <td>Yes</td>
                                    <td></td>
                                    <td><button className='btn3 c3b bn c1t br'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Google</td>
                                    <td>ABC Dental</td>
                                    <td>2101 California St.</td>
                                    <td>111.111.1111</td>
                                    <td>3/5</td>
                                    <td>Yes</td>
                                    <td></td>
                                    <td><button className='btn3 c3b bn c1t br'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Google</td>
                                    <td>ABC Dental</td>
                                    <td>2101 California St.</td>
                                    <td>111.111.1111</td>
                                    <td>3/5</td>
                                    <td>Yes</td>
                                    <td></td>
                                    <td><button className='btn3 c3b bn c1t br'>Update</button></td>
                                </tr>
                                <tr>
                                    <td>Google</td>
                                    <td>ABC Dental</td>
                                    <td>2101 California St.</td>
                                    <td>111.111.1111</td>
                                    <td>3/5</td>
                                    <td>Yes</td>
                                    <td></td>
                                    <td><button className='btn3 c3b bn c1t br'>Update</button></td>
                                </tr>                                                                                                                                                                
                            </table>
                        </div>
                    </div>
               </div>   
            </div>
        </div>
    )
}

export default Dashboard
