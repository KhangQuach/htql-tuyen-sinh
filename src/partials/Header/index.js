import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#f5f5f5",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        fontFamily: "Poppins, sans-serif",
        fontSize: "16px",
        fontWeight: "bold",
        letterSpacing: "0.5px",
        color: "#333",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}>
        <div style={{
          flex: 1
        }}>
          <Link href="/" style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            <img
              src="https://th.bing.com/th/id/R.d91e958e97159535b665ed4a04e0594b?rik=iJSI%2bA1Pk3tkZg&riu=http%3a%2f%2fqlcvcet.ctu.edu.vn%2fimg%2flogo_ctu.png&ehk=qB4IoQilsFbB3xOUo6GV4BTHvJWCbynz%2b8EfuT06V2A%3d&risl=&pid=ImgRaw&r=0"
              alt="Logo"
              style={{
                width: "50px",
                objectFit: "contain",
                borderRadius: "50%"
              }}
            />
            <h2>CTU ADMIN</h2>
          </Link>
        </div>

        <div className="auth" style={{
          width: "15%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center"
        }}>
          <Button variant="destructive">Đăng xuất</Button>
        </div>
      </div>
    </>
  )
}

export default Header;