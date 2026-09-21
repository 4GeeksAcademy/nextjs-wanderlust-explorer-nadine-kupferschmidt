interface ReviewsSectionProps {
  rating: number;
  reviewCount?: number;
}

function ratingLabel(rating: number): string {
  if (rating >= 4.5) return "Fantástico";
  if (rating >= 4.0) return "Muy bueno";
  return "Bueno";
}

const fakeReviews = [
  {
    name: "María García",
    month: "enero de 2026",
    rating: 5,
    text: "Una experiencia increíble. Todo estuvo perfectamente organizado y el guía fue muy amable. Sin duda repetiría.",
  },
  {
    name: "Carlos Mendoza",
    month: "diciembre de 2025",
    rating: 5,
    text: "Superó todas mis expectativas. Los paisajes eran impresionantes y la logística impecable. Muy recomendable.",
  },
  {
    name: "Ana Lucía Romero",
    month: "noviembre de 2025",
    rating: 5,
    text: "Me encantó cada momento. La atención al detalle y la calidez del equipo hicieron que fuera una experiencia inolvidable.",
  },
];

export default function ReviewsSection({
  rating,
  reviewCount,
}: ReviewsSectionProps) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="text-4xl font-bold text-neutral-900">
          {rating.toFixed(1)}
        </span>
        <div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-orange-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-neutral-600">
            {ratingLabel(rating)}
            {reviewCount !== undefined && (
              <span className="text-neutral-400">
                {" "}
                · {reviewCount} {reviewCount === 1 ? "opinión" : "opiniones"}
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {fakeReviews.map((review, index) => (
          <div key={index}>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
                {review.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  {review.name}
                </p>
                <p className="text-xs text-neutral-400">{review.month}</p>
              </div>
            </div>
            <div className="mt-1 flex items-center gap-0.5">
              {Array.from({ length: review.rating }, (_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="mt-1 text-sm leading-relaxed text-neutral-600">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}