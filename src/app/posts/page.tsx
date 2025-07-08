import Link from "next/link";

interface ResponseProps {
  posts: PostProps[];
}

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default async function Posts() {
  const handleFetchPosts = async (formData: FormData) => {
    "use server";
    const userId = formData.get("userId");
    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);

    const data: ResponseProps = await response.json();
  };

  const response = await fetch("https://dummyjson.com/posts");
  const data: ResponseProps = await response.json();

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Posts</h1>
      <ul className="flex flex-col gap-4 mx-2"></ul>
      <form className="flex gap-2 my-4" action={handleFetchPosts}>
        <input
          type="text"
          placeholder="Id do usuário"
          className="border border-gray-600 p-2  "
          name="userId"
        />
        <button className="bg-blue-500 text-white p-2" type="submit">
          Buscar usuário
        </button>
      </form>
      <div>
        {data.posts.map((post: PostProps) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <Link className="text-blue-500" href={`/posts/${post.id}`}>
              Ver detalhes
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
