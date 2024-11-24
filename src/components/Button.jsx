import '../styles/components/Button.scss'
const Button = ({text, color}) => {

  const buttonClass = `button ${color}`

  return (
    <button className={buttonClass}>
      {text}
    </button>
  )
}
export default Button