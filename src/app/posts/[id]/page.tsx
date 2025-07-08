import { PostProps } from "../page";

export default async function DetailPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: PostProps = await response.json();
  return (
    <div>
      <h2>Detalhes do post: {id}</h2>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}
