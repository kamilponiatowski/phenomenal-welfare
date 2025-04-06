import { createSignal, onMount } from 'solid-js';

/**
 * Main layout component wrapping all pages
 */
function MainLayout(props) {
  const [loaded, setLoaded] = createSignal(false);
  
  onMount(() => {
    setTimeout(() => setLoaded(true), 300);
  });

  return (
    <div class={`layout ${loaded() ? 'layout--loaded' : ''}`}>
      <div class="layout__content">
        {props.children}
      </div>
    </div>
  );
}

export default MainLayout;