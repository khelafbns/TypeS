type User = {
  name: string;
  age: number;
};

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.age} years</p>
    </div>
  );
};

export default UserCard;
