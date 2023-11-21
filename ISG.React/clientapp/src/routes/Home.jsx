import { redirect } from "react-router-dom";
function Home() {
  //   const params = useParams();
  //   console.log(params);
  return <div>Home Page</div>;
}

export default Home;

export const Loader = async ({ params }) => {
  console.log({ params });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const data = await response.json();
  if (data.userId) {
    return redirect("/darbare");
  }
  return null;
};
