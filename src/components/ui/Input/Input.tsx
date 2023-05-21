import './Input.scss';
import { HTMLProps } from 'react';

export type InputType = HTMLProps<HTMLInputElement>;

const Input: React.FC<InputType> = (props) => {
  const { type = 'text', ...rest } = props;
  return <input type={type} className="custom__input" {...rest} />;
};

export default Input;
