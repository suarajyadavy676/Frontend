import Footer1 from "./components/Footer1"
import Navbar from "./components/Navbar"
import AllRoutes from "./routes/AllRoutes"
import SignUp from "./routes/SignUp"

function App() {
  console.log(import.meta.env.REACT_APP_API_URL)
  return (
    <>
      <Navbar/>
      <AllRoutes/>
      <Footer1/>
    </>
  )
}

export default App
