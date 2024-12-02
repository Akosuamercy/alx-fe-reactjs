import './App.css'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BlogPostDetails from './components/BlogPostDetails'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:id" element={<BlogPostDetails />} />
      </Routes>
    </Router>
  );
}

export default App
