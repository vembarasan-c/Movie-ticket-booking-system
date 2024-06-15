import {
  BrowserRouter as Router,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Login from "./components/Login.jsx";

import Signup from "./components/Signup.jsx";
import AddNewMovie from "./components/AddNewMovie.jsx";
import { DisplayMovie } from "./components/DisplayMovie.jsx";
import { MovieBooking } from "./components/MovieBooking.jsx";

import { AuthProvider } from "./components/AuthContext.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />

          <Route path="/display-movies"  
          element={
            <ProtectedRoute>
              <DisplayMovie />
            </ProtectedRoute>            
          }
          >
          </Route>

          <Route path="/addmovie"  
          element={
            <ProtectedRoute>
              <AddNewMovie />
            </ProtectedRoute>            
          }
          >
          </Route>
          <Route path="/bookmovie"  
          element={
            <ProtectedRoute>
              <MovieBooking />
            </ProtectedRoute>            
          }
          >
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
