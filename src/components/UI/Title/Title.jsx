import styles from './Title.module.scss';

function Title({ title, text, className = '' }) {
  return (
    <div className={`${styles.title} ${className}`}>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Title