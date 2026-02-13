import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  // ✅ NO loading check here - it's handled at a higher level
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
