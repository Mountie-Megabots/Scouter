//@ts-nocheck
import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './pages/LoginPage.tsx'
import Dashboard from './pages/dashboard/dashboard.tsx'
import Matches from './pages/matches.tsx'
import Teams from './pages/teams/teams.tsx'
import Settings from './pages/settings.tsx'
import CreateComp from './pages/dashboard/createcomp.tsx'
import CreatePitScout from './pages/teams/pitscout.tsx'
import ViewTeams from './pages/teams/ViewTeam.tsx'

if(window.location.pathname == "/" && localStorage.getItem('token') == null){
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <LoginPage />
    </React.StrictMode>,
  )
}
else if(window.location.pathname == "/") {
  window.location.href = "/dashboard"
}

else if(window.location.pathname == "/dashboard" && localStorage.getItem('token') != null){
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Dashboard />
    </React.StrictMode>,
  )
}

else if(window.location.pathname == "/dashboard/matches" && localStorage.getItem('token') != null){
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Matches />
    </React.StrictMode>,
  )
}

else if(window.location.pathname == "/dashboard/teams" && localStorage.getItem('token') != null){
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Teams />
    </React.StrictMode>,
  )
}

else if(window.location.pathname == "/dashboard/settings" && localStorage.getItem('token') != null){
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Settings />
    </React.StrictMode>,
  )
}

else if(window.location.pathname == "/dashboard/addcomp" && localStorage.getItem('token') != null){
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <CreateComp />
    </React.StrictMode>,
  )
}

else if(window.location.pathname == "/dashboard/teams/pitscout" && localStorage.getItem('token') != null){
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <CreatePitScout />
    </React.StrictMode>,
  )
}

else if(window.location.pathname == "/dashboard/teams/view" && localStorage.getItem('token') != null){
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ViewTeams/>
    </React.StrictMode>,
  )
}

else{
  window.location.href = "/"
}
