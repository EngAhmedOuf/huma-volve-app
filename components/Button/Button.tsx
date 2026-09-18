type ButtonProps = {
  text: string
  onClick: () => void
  variant: "primary" | "secondary" | "danger"
  disabled?: boolean
}

function Button({ text, onClick, variant, disabled }: ButtonProps) {

  return (
    <button
      onClick={onClick}
      className={variant}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button