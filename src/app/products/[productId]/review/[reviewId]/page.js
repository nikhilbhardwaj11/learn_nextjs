export default function ReviewDetail({ params }) {
  return (
    <div>
      <h1>
        Review Detail {params.reviewId} for Product {params.productId}
      </h1>
    </div>
  );
}
