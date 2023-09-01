export default function ComponentUpp(props: any) {
  return (
    <div>
      <h1>You sent: {props.data.toUpperCase()}</h1>
    </div>
  );
}
