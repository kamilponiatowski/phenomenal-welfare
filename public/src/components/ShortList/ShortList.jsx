import { For } from 'solid-js';
import styles from './ShortList.module.scss';

/**
 * ShortList component
 * Displays a condensed list of all cultural phenomena
 * 
 * @param {Object} props - Component props
 * @param {Array} props.cultures - Array of culture objects
 */
function ShortList(props) {
  return (
    <div class={styles.shortlist}>
      <h2 data-emoji="🔍">W skrócie:</h2>
      
      <ul>
        <For each={props.cultures}>
          {(culture) => (
            <li>
              <strong>{culture.title}</strong> – {culture.shortDescription}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}

export default ShortList;