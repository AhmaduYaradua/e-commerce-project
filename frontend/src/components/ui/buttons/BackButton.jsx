import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";
function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="font-semibold text-gray-500 underline underline-offset-[10px] hover:text-black flex gap-4 mb-10"
      onClick={() => navigate(-1)}
    >
      <MoveLeft strokeWidth={2.5} />
      <span>Back</span>
    </button>
  );
}
export default BackButton;
