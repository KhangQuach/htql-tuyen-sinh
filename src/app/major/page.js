'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Actions from "@/components/Actions/actions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    maNganh: "7480104",
    tenNganh: "Hệ thống thông tin"
  },
  {
    maNganh: "7480103",
    tenNganh: "Kỹ thuật phần mềm"
  },
  {
    maNganh: "7480201",
    tenNganh: "Công nghệ thông tin"
  },
  {
    maNganh: "7480101",
    tenNganh: "Khoa học máy tính"
  }
]

function Major() {
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
            <TableHead className="w-[100px]">Mã ngành</TableHead>
            <TableHead>Tên ngành</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.maNganh}</TableCell>
              <TableCell>{item.tenNganh}</TableCell>
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

export default Major;