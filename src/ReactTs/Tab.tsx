type User = {
  id: number;
  name: string;
};

const [users, setUsers] = useState<User[]>([]);

