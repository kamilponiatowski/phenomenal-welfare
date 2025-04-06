/**
 * Format a string with capitalized first letter
 * @param {string} str - String to format
 * @returns {string} Formatted string
 */
export const capitalize = (str) => {
    if (!str || typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  /**
   * Create a unique ID
   * @param {string} prefix - Optional prefix for the ID
   * @returns {string} Unique ID
   */
  export const uniqueId = (prefix = 'id') => {
    return `${prefix}_${Math.random().toString(36).substring(2, 9)}`;
  };
  
  /**
   * Debounce function to limit execution rate
   * @param {Function} func - Function to debounce
   * @param {number} wait - Time to wait in milliseconds
   * @returns {Function} Debounced function
   */
  export const debounce = (func, wait) => {
    let timeout;
    
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  /**
   * Check if device is mobile
   * @returns {boolean} True if mobile device
   */
  export const isMobile = () => {
    return window.innerWidth < 768;
  };