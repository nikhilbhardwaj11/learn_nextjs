export default function ProductDetails({ params }) {
    console.log("====",params); // it will only show in terminal not in browser
    return (
    <div>
      <h1>Product Details of {params.productId}</h1>
    </div>
  );
}
