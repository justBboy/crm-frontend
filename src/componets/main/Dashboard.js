import React from 'react'
import './dash.css'
import DashboardHeader from './DashboardHeader'
import Card from './Card';
import './medial.css'
import { Grid } from '@material-ui/core';

function Dashboard(props) {
    return (
        <>
        <div className="main-content">
          <DashboardHeader />
          <h3 className="header-title">Recent Data</h3>
          <Grid container justify="center" alignItems="center">
              <Grid item xs={12} md={4} sm={6}>
                <Card title="closer tasks" data={[
                  {
                    title: "create dummy data creator",
                    date: "18th January 2021"
                  },
                  {
                    title: "beaudeo app frontend finish",
                    date: "25th January 2021"
                  }
                ]} />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <Card title="closer events" data={[
                  {
                    title: "React Conference",
                    date: "25th January 2021"
                  },
                  {
                    title: "Django channels conference",
                    date: "28th January 2021"
                  }
                ]} />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <Card title="projects to complete" data={[
                  {
                    title: "crm app",
                    date: "25th January 2021"
                  },
                  {
                    title: "beadeo app",
                    date: "28th January 2021"
                  }
                ]} />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <Card title="recent leads" data={[
                  {
                    title: "Asare Gideon",
                  },
                  {
                    title: "Waja Benjamin",
                  }
                ]} />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <Card title="recent Contacts" data={[
                  {
                    title: "Asare Gideon",
                  },
                  {
                    title: "Waja Benjamin",
                  }
                ]} />
                </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <Card title="recent clients" data={[
                  {
                    title: "Asare Gideon",
                  },
                  {
                    title: "Waja Benjamin",
                  }
                ]} />
              </Grid>
          </Grid>
        </div>  
        </>
        )
    }
    
    export default Dashboard
    