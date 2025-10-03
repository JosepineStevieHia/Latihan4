type CardProps = {
  img: string;
  title: string;
  desc: string;
  author: string;
};

export default function Card({ img, title, desc, author }: CardProps) {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100">
      <img
        className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={img}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{desc}</p>
        <small className="text-gray-500">by: {author}</small>
      </div>
    </div>
  );
}
