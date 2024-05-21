export const BookCard = ({
  title,
  price,
}: {
  title: string;
  price: number;
}) => {
  console.log("BOOK CARD")
  return (
    <div className="w-56 h-72">
      <div className="rounded-md border bg-black">
        <img src="https://i.ibb.co/B3s7v4h/2.png" className="w-40 h-60" />
      </div>
      <div className="">
        <h1>{title}</h1>
        <h2>${price}</h2>
      </div>
    </div>
  );
};
