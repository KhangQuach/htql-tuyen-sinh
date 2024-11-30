import { Button } from "../ui/button";
import { MdDelete } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";
function Actions() {
  return (
    <>
      <Button style={{
        marginLeft: "10px",
        backgroundColor: "blue",
        color: "white",
        borderRadius: "4px",
      }}><FaEye/></Button>

      <Button style={{
        marginLeft: "10px",
        backgroundColor: "#FFC120",
        color: "white",
        borderRadius: "4px",
      }}><IoSettingsSharp/></Button>

      <Button style={{
        marginLeft: "10px",
        backgroundColor: "red",
        color: "white",
        borderRadius: "4px",
      }}><MdDelete /></Button>
    </>
  )
}

export default Actions;