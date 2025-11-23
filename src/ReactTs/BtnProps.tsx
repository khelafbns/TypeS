
type BtnProps = {
  title: string;
  onClick: () => void;
};


const Btn: React.FC<BtnProps> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};
