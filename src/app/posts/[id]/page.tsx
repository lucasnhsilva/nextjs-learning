import { Suspense } from "react";
import { PostInfo } from "./_components/post";
import Loading from "./_loading";

export default async function DetailPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h2>Detalhes do post: {id}</h2>
      <Suspense fallback={<Loading />}>
        <PostInfo id={id} />
      </Suspense>
    </div>
  );
}
