import '../styles/components/Title.scss'

const Title = ({title, text, className}) => {

  const titleClass = `title-container ${className}`

  return (
    <div className={titleClass}>
        <h4>{title}</h4>
        <p>{text}</p>
    </div>
  )
}

export default Title
