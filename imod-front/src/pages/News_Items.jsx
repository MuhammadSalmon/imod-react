
import AnimatedLink from '../components/Button';
const NewsItem = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-transform duration-500 ease-in-out flex flex-col">
      {/* Image Section */}
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
        />
      </div>

      {/* Title and Link */}
      <div className="flex flex-col flex-grow justify-between mt-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{news.title}</h2>
        <div className="mt-auto">
          <AnimatedLink link={`/news/${news.id}`} />
        </div>
      </div>
    </div>
  );
};


export default NewsItem;
