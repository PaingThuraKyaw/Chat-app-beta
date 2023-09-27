import Container from "../../components/Container";
import { AiFillWechat } from "react-icons/ai";
import "./Auth.css";

const SignUp = () => {
  return (
    <Container>
      <div className=" flex items-center space-x-1 mt-2 fixed">
        <h1 className="text-3xl font-bold  text-gradient">Room</h1>
        <AiFillWechat className=" text-2xl text-gray-700" />
      </div>
      <div className=" flex items-center h-screen">a</div>
    </Container>
  );
};

export default SignUp;
