import { useNavigate } from "react-router-dom";

export default function BacktoButton({text}) {
    const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 absolute text-white font-bold my-2 z-50 rounded shadow-md hover:bg-blue-500 transition"
        >
          {text}
    </button>
  );
}