import Link from "next/link";

export async function generateMetadata(props: any) {
  return {
    title: "My App | Dashboard",
    description: "This is the Dashboard page of my app.",
  };
}

const Dashboard = (props: any) => {
  console.log("props.params from Dashboard Page", props.params);

  return (
    <div>
      <h1>This is the Dashboard Page</h1>
      <p>
        <strong>props.params</strong> from Dashboard Page:{" "}
        {JSON.stringify(props.params)}
      </p>
      <Link
        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        href="/"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Dashboard;
