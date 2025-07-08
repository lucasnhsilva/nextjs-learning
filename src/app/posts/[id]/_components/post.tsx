import { PostProps } from "../../page";

export async function PostInfo({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  const response = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  const data: PostProps = await response.json();
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}
