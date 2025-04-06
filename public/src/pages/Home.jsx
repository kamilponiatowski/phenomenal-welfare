import { createSignal, onMount } from 'solid-js';
import CultureList from '../components/CultureList/CultureList';
import ShortList from '../components/ShortList/ShortList';
import Summary from '../components/Summary/Summary';
import cultures from '../data/cultures';

/**
 * Home page component
 * Displays the main content of the application
 */
function Home() {
  const [isLoaded, setIsLoaded] = createSignal(false);
  
  // Simulate loading for smooth transitions
  onMount(() => {
    setTimeout(() => setIsLoaded(true), 300);
  });

  return (
    <div class={`home-page ${isLoaded() ? 'loaded' : ''}`}>
      <h1>Kulturowe Fenomeny Dobrostanu 🌍</h1>
      
      <CultureList cultures={cultures} />
      
      <ShortList cultures={cultures} />
      
      <Summary />
    </div>
  );
}

export default Home;