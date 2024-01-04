import tw from 'twin.macro';

interface ButtonProps {
  label: string;
}

const Btn = tw.button`bg-blue-500 px-2.5 py-1.5 rounded-md`;

function Button({ label }: ButtonProps) {
  return <Btn>{label}</Btn>;
}

export default Button;
