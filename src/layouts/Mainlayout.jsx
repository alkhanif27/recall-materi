import Navbar from "../components/Navbar";

// eslint-disable-next-line react/prop-types
export default function Mainlayout({ children }) {
  return (
    <div>
      <Navbar/> 
      {children}
    </div>
  );
}
