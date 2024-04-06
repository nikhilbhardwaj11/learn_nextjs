export default function Docs({ params }) {
  if (params && params.slug && params.slug.length === 2) {
    return (
      <h1>
        Viewing Docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params && params.slug && params.slug.length === 1) {
    return <h1>Viewing Docs for feature {params.slug[0]}</h1>;
  }
  return (
    <div>
      <h1>Docs Home Page!</h1>
    </div>
  );
}
