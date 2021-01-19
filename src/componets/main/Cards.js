import React from 'react'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CachedIcon from '@material-ui/icons/Cached';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';

function Cards() {
    return (
        <>
          
          <div className="dash-cards">
              <div className="card-single">
                  <div className="card-body">
                      <span> <AccountBalanceWalletIcon /> </span>
                      <div>
                          <h5>Account balance</h5>
                          <h4>$30,500.00</h4>
                      </div>
                  </div>
                  <div className="card-footer">
                      <a href="#">View all</a>
                  </div>
              </div>
              <div className="card-single">
                  <div className="card-body">
                      <span> <CachedIcon /> </span>
                      <div>
                          <h5>Pending</h5>
                          <h4>$16,500.00</h4>
                      </div>
                  </div>
                  <div className="card-footer">
                      <a href="#">View all</a>
                  </div>
              </div>
              <div className="card-single">
                  <div className="card-body">
                      <span> <MarkunreadMailboxIcon  /> </span>
                      <div>
                          <h5>Received</h5>
                          <h4>$10,500.00</h4>
                      </div>
                  </div>
                  <div className="card-footer">
                      <a href="#">View all</a>
                  </div>
              </div>
          </div> 
        </>
    )
}

export default Cards
