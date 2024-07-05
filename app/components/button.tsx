interface ButtonProps {
  children: React.ReactNode;
  classname: string;
}
export const Button = ({ children, classname }: ButtonProps) => {
  return <button className={classname}>{children}</button>;
};
