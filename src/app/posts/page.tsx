import { Button } from "@/components/button";

interface ResponseProps {
  posts: PostProps[];
}

interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default async function Posts() {
  const response = await fetch("https://dummyjson.com/posts");
  const data: ResponseProps = await response.json();

  return (
    <div>
      <Button />
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Posts</h1>
      <ul className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <li key={post.id} className="bg-gray-700 p-4 rounded-md ">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
