import React from 'react'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import MoreIcon from '@material-ui/icons/More';
import RedeemIcon from '@material-ui/icons/Redeem';

function Recent(props) {
    return (
        <>
          <section className="recent">
            <div className="activity-grid">
            <div className="activity-card">
              <h3>Recent activity</h3>
               <div className="table-responsive">
               <table >
                <thead>
                <tr>
                    <th>Projects</th>
                    <th>Client</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                       <tr>
                         <td>App Development</td>
                         <td>Asare Gideon</td>
                         <td>14 Aug, 2020</td>
                         <td>25 Aug, 2020</td>
                         <td>
                           <span className="badge success">success</span>
                         </td>
                         </tr>
                       <tr>
                         <td>Web Development</td>
                         <td>Asare Tutu</td>
                         <td>14 Oct, 2020</td>
                         <td>25 Dec, 2020</td>
                         <td>
                           <span className="badge warning">Processing</span>
                         </td>
                         </tr>
                       <tr>
                         <td>Software Development</td>
                         <td>Deniel Bryan</td>
                         <td>14 Aug, 2020</td>
                         <td>25 Sept, 2020</td>
                         <td>
                           <span className="badge success">success</span>
                         </td>
                         </tr>
                       <tr>
                         <td>App Development</td>
                         <td>Asare Gideon</td>
                         <td>14 Aug, 2020</td>
                         <td>25 Aug, 2020</td>
                         <td>
                           <span className="badge warning">Processing</span>
                         </td>
                         </tr>
                       <tr>
                         <td>App Development</td>
                         <td>Asare Gideon</td>
                         <td>14 Aug, 2020</td>
                         <td>25 Aug, 2020</td>
                         <td>
                           <span className="badge success">success</span>
                         </td>
                         </tr>
                       
                    
                </tbody>
              </table>
               </div>
            </div>
              
               <div className="summary">
                         
                     <div className="summary-card">
                           <div className="summary-single">
                                  <span> <MoreIcon /> </span>
                                  <div>
                                    <h5>196</h5>
                                    <small>Number of stuff</small>
                                  </div>
                           </div>
                           <div className="summary-single">
                                  <span> <CalendarTodayIcon /> </span>
                                  <div>
                                    <h5>16</h5>
                                    <small>Number of leave</small>
                                  </div>
                           </div>
                           <div className="summary-single">
                                  <span><TagFacesIcon /></span>
                                  <div>
                                    <h5>14</h5>
                                    <small>Profile updates request</small>
                                  </div>
                           </div>
                     </div>

                      <div className="body-card">
                        <div className="body-flex">
                        <div className="body-img"><img src={props.image} alt=""/></div>
                             <div className="body-info">
                               <h5>Denis K. Domfeh</h5>
                               <small>Birthday Today</small>
                                            
                             </div>
                        </div>
                             <div className="text-content">
                                   <button>
                                     <span> <RedeemIcon  style={{fontSize:20 + "px", paddingTop:.3 + "rem"}} /></span>
                                      Wish him 
                                     </button>
                               </div> 
                      </div>
                </div> 

            </div>
          </section>  
        </>
    )
}

export default Recent
