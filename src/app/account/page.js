'use client'
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import Actions from "@/components/Actions/actions";

const invoices = [
  {
    email: "khang@gmail.com",
    name: "Quách Thiếu Khang",
    gioiTinh: "Nam",
    trangThai: "active"
  },
  {
    email: "tinh@gmail.com",
    name: "Nguyễn Dương Trọng Tín",
    gioiTinh: "Nam",
    trangThai: "active"
  },
  {
    email: "ngu@gmail.com",
    name: "Phạm Anh Ngữ",
    gioiTinh: "Nam",
    trangThai: "active"
  },
  {
    email: "duy@gmail.com",
    name: "Nguyễn Khánh Duy",
    gioiTinh: "Nữ",
    trangThai: "inactive"
  }
]

function Account() {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        marginBottom: "30px",
        marginTop: "10px"
      }}>
        <Button style={{
          backgroundColor: "green",
          color: "white",
          borderRadius: "4px",
        }}>Thêm</Button>

        <div>
          <Input placeholder="Tìm kiếm tên ngành..." style={{
            width: "300px",
            marginLeft: "10px"
          }} />
        </div>

      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Họ tên</TableHead>
            <TableHead>Giới tính</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.gioiTinh}</TableCell>
              <TableCell>{item.trangThai === "active" ? (
                <Button style={{
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "4px",
                }}>Hoạt động</Button>
              ) : (
                <Button style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "4px",
                }}>Ngưng</Button>
              )}</TableCell>
              <TableCell>
                <Actions />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Account;