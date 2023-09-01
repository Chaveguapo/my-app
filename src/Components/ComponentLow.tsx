export default function ComponentLow(props: any) {
  return (
    <div>
      <h1>You sent: {props.data.toLowerCase()}</h1>
    </div>
  );
}
