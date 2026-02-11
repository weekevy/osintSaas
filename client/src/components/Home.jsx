
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await fetch("http://localhost:4000/api/login", {
      method: "GET",
      credentials: "include",
    });
    navigate("/");
  };

  return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black ">
            <div className="ml-[10px]">

                <button
                    className="px-7 py-2 border ml-[10px] text-white broder-solid border-white  
                    rounded-full cursor-pointer hover:opacity-50"
                >
                    account
                </button>

                <button
                    onClick={handleLogout}
                    className="px-7 py-2 border text-white broder-solid border-white  
                    rounded-full cursor-pointer ml-[10px] hover:opacity-50 "
                >
                    Logout
                </button>

        </div>
    </div>
  );
};

export default Home;

