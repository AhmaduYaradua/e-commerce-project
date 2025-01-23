export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const BACKEND_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://e-commerce-project-zfdy.onrender.com/api/v1"
    : "http://localhost:3000/api/v1";
