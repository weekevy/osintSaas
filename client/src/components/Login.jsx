
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Username and password cannot be empty");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Login failed");

      navigate("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-12 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] w-96 space-y-8"
      >
        <h2 className="text-white text-3xl text-center font-bold mb-6">
          Login
        </h2>

        <div className="space-y-8">
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full pb-3 border-b-2 border-white bg-transparent text-white outline-none text-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pb-3 border-b-2 border-white bg-transparent text-white outline-none text-lg"
          />
        </div>

        {/* Reserved space for error messages */}
        <p className="text-red-500 text-sm h-6">{error || "\u00A0"}</p>

        <button
          type="submit"
          disabled={loading}
          className={`w-full relative overflow-hidden px-6 py-3 rounded-full text-white border border-white
            bg-gradient-to-r   transition-all duration-300
            `}
        >
          <span
            className={`absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-full`}
          ></span>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

