
import './App.css'
import StationApp from './containers/StationApp/StationApp'

function App() {
 

  return (
    <>
     <h1>Demo 06</h1>
     <h2>Requête AJAX</h2>

     {/* Formulaire pour chercher le nom d'une gare */}
     <StationApp />
     {/* Dashboard de la gare recherchée */}
     {/*  Composant : 
            - SearchForm
            - Dashboard
            - Loading
          Container :
            - StationApp
      */}
    </>
  )
}

export default App
