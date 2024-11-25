import '../styles/components/Button.scss'
const Button = ({text, color, className}) => {

  const buttonClass = `button ${color} ${className}`

  return (
    <button className={buttonClass}>
      {text}
    </button>
  )
}
export default Button