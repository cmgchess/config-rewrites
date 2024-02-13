
export default function RootLayout(props: any) {
  console.log("props.params from Dashboard Layout", props.params);
  return (
    <>
      <h2>Dashboard layout</h2>
      <p>props.params from Dashboard Layout: {JSON.stringify(props.params)}</p>
      {props.children}
    </>
  );
}
