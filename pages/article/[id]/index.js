import { useRouter } from "next/router";

const article = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return <div>This is article {article.id}</div>;
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/$context.
  parsms.id`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default article;
