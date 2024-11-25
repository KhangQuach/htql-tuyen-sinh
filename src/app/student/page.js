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
    tenThiSinh: "Quách Thiếu Khang",
    cccd: "0123455678",
    email: "khang@gmail.com",
    ngaySinh: "25-05-2004",
    gioiTinh: "Nam"
  },
  {
    tenThiSinh: "Nguyễn Dương Trọng Tín",
    cccd: "0987654321",
    email: "tinh@gmail.com",
    ngaySinh: "25-05-2004",
    gioiTinh: "Nam"
  },
  {
    tenThiSinh: "Phạm Anh Ngữ",
    cccd: "0123455678",
    email: "ngu@gmail.com",
    ngaySinh: "25-05-2004",
    gioiTinh: "Nam"
  },
  {
    tenThiSinh: "Nguyễn Khánh Duy",
    cccd: "0123455678",
    email: "duy@gmail.com",
    ngaySinh: "25-05-2004",
    gioiTinh: "Nam"
  }
]

function Student() {
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
            <TableHead>Họ tên</TableHead>
            <TableHead>CCCD</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Ngày sinh</TableHead>
            <TableHead>Giới tính</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.tenThiSinh}</TableCell>
              <TableCell>{item.cccd}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.ngaySinh}</TableCell>
              <TableCell>{item.gioiTinh}</TableCell>
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

export default Student;