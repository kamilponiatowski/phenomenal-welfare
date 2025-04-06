import styles from './CultureCard.module.scss';

/**
 * CultureCard component
 * Displays a single cultural concept with its details
 * 
 * @param {Object} props - Component properties
 * @param {Object} props.culture - Culture data object
 */
function CultureCard(props) {
  const { culture } = props;
  
  if (!culture) return null;
  
  return (
    <section class={styles.card}>
      <h2 data-emoji={culture.emoji}>{culture.title} ({culture.origin})</h2>
      
      <div class={styles.cardContent}>
        <p>
          <strong>Znaczenie:</strong> {culture.meaning}
        </p>
        <p>
          <strong>Emocje:</strong> {culture.emotions}
        </p>
        <p>
          <strong>Forma:</strong> {culture.form}
        </p>
        <p>
          <strong>Przestrzeń:</strong> {culture.space}
        </p>
        <p>
          <strong>Charakter:</strong> {culture.character}
        </p>
      </div>
    </section>
  );
}

export default CultureCard;