import Link from "next/link";

async function Home() {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const photosListJson = await response.json();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-wrap gap-6">
      {photosListJson.map((post, index) => (
        <div key={index} className="bg-violet-400 shadow-md rounded-2xl p-6 w-full md:w-[48%] lg:w-[31%]">
          <h2 className="text-xl font-bold text-white mb-2">
            {post.title}
          </h2>
          <p className="text-white mb-4 text-sm">
            {post.body}
          </p>
          <div className="text-sm text-white">
            User ID: {post.userId} | Post ID: {post.id}
          </div>
          <div className="bg-violet-600 text-white px-4 py-2 rounded-xl hover:bg-violet-700 transition-colors duration-300 shadow-md mt-6 w-28 " target="_blank">
          <Link href={`${post.id}`} >View More</Link>
          </div>
    </div>
  ))}
</div>


  );
}

export default Home;