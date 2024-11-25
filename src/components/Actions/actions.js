import { Button } from "../ui/button";

function Actions() {
  return (
    <>
      <Button style={{
        marginLeft: "10px",
        backgroundColor: "blue",
        color: "white",
        borderRadius: "4px",
      }}>Xem</Button>

      <Button style={{
        marginLeft: "10px",
        backgroundColor: "#FFC120",
        color: "white",
        borderRadius: "4px",
      }}>Sửa</Button>

      <Button style={{
        marginLeft: "10px",
        backgroundColor: "red",
        color: "white",
        borderRadius: "4px",
      }}>Xóa</Button>
    </>
  )
}

export default Actions;