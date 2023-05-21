import { HTMLProps } from 'react';
import './Button.scss';

type ButtonType = {
  type?: 'button' | 'submit' | 'reset';
} & HTMLProps<HTMLButtonElement>;

const Button: React.FC<ButtonType> = (props) => {
  const { type = 'button', children, ...rest } = props;
  return <button className="custom__button" type={type} {...rest}>
    {children}
  </button>;
};

export default Button;
