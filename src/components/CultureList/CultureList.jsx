import { For } from 'solid-js';
import CultureCard from '../CultureCard/CultureCard';
import styles from './CultureList.module.scss';

/**
 * CultureList component
 * Renders a list of CultureCard components
 * 
 * @param {Object} props - Component props
 * @param {Array} props.cultures - Array of culture objects to display
 */
function CultureList(props) {
  return (
    <div class={styles.cultureList}>
      <For each={props.cultures}>
        {(culture) => <CultureCard culture={culture} />}
      </For>
    </div>
  );
}

export default CultureList;