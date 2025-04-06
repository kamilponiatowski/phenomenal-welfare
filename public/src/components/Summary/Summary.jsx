import styles from './Summary.module.scss';

/**
 * Summary component
 * Displays the final summary section of the page
 */
function Summary() {
  return (
    <div class={styles.summary}>
      <h2 data-emoji="🌍">Podsumowanie</h2>
      <p>
        Te pojęcia pokazują, jak różnorodnie kultury na całym świecie postrzegają szczęście, 
        piękno, spokój i relacje. Choć mają różne źródła i formy, wszystkie prowadzą 
        do głębszego przeżywania życia – przez ciszę, muzykę, wspólnotę czy beztroskie nicnierobienie.
      </p>
    </div>
  );
}

export default Summary;