import { Suspense, lazy } from 'solid-js';
import MainLayout from './layouts/MainLayout';

// Lazy load the Home page for better performance
const Home = lazy(() => import('./pages/Home'));

/**
 * Main App component
 * Wraps the application with the MainLayout component
 */
function App() {
  return (
    <MainLayout>
      <Suspense fallback={<div class="loading">Ładowanie koncepcji szczęścia...</div>}>
        <Home />
      </Suspense>
    </MainLayout>
  );
}

export default App;