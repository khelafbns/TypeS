type Product = {
  id: number;
  title: string;
  price: number;
};

const [data, setData] = useState<Product[]>([]);
