'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Actions from "@/components/Actions/actions";
import { Badge } from "@/components/ui/badge";
import { IoSearchSharp } from "react-icons/io5";
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
  },
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

        <div className="flex gap-2">
          <Input placeholder="Tìm kiếm tên ngành..." style={{
            width: "300px",
            marginLeft: "10px"
          }} />
          <Button className="bg-sky-500 hover:bg-sky-400" ><IoSearchSharp/></Button>
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
                <Badge style={{
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "4px",
                }}>Hoạt động</Badge>
              ) : (
                <Badge style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "4px",
                }}>Ngưng</Badge>
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