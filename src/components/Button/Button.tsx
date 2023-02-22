interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ text, disabled, onClick }: ButtonProps) => {

  return (
    <button
      disabled={disabled ?? false}
      onClick={onClick}>
      { text }
    </button>
  );

};

export default Button;
