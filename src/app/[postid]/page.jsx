 async function detailPostPage({params}) {

    const { postid } = await params
    const detailPageResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);
    const postJson = await detailPageResponse.json();

      return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-2xl max-w-2xl w-full p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Post: #{postJson.id}</h1>
            <p className="text-sm text-gray-500 mb-6">User ID: {postJson.userId}</p>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">{postJson.title}</h2>
            <p className="text-gray-600 whitespace-pre-line">{postJson.body}</p>
        </div>
    </div>

  );
}
export default detailPostPage;