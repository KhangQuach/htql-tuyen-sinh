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
import { IoSearchSharp } from "react-icons/io5";

const invoices = [
  {
    tieuDe: "Thông báo khẩn",
    moTa: "Từ ngày mai, thí sinh sẽ không thể đăng kí nguyện vọng nữa"
  },
  {
    tieuDe: "Thông báo khẩn",
    moTa: "Từ ngày mai, thí sinh sẽ không thể đăng kí nguyện vọng nữa"
  },
  {
    tieuDe: "Thông báo khẩn",
    moTa: "Từ ngày mai, thí sinh sẽ không thể đăng kí nguyện vọng nữa"
  },
  {
    tieuDe: "Thông báo khẩn",
    moTa: "Từ ngày mai, thí sinh sẽ không thể đăng kí nguyện vọng nữa"
  },
  {
    tieuDe: "Thông báo khẩn",
    moTa: "Từ ngày mai, thí sinh sẽ không thể đăng kí nguyện vọng nữa"
  },
  {
    tieuDe: "Thông báo khẩn",
    moTa: "Từ ngày mai, thí sinh sẽ không thể đăng kí nguyện vọng nữa"
  },
  {
    tieuDe: "Thông báo khẩn",
    moTa: "Từ ngày mai, thí sinh sẽ không thể đăng kí nguyện vọng nữa"
  },
  {
    tieuDe: "Thông báo khẩn",
    moTa: "Từ ngày mai, thí sinh sẽ không thể đăng kí nguyện vọng nữa"
  },
  {
    tieuDe: "Thông báo khẩn",
    moTa: "Từ ngày mai, thí sinh sẽ không thể đăng kí nguyện vọng nữa"
  },
  {
    tieuDe: "Thông báo khẩn",
    moTa: "Từ ngày mai, thí sinh sẽ không thể đăng kí nguyện vọng nữa"
  },
  {
    tieuDe: "Thông báo khẩn",
    moTa: "Từ ngày mai, thí sinh sẽ không thể đăng kí nguyện vọng nữa"
  },
  {
    tieuDe: "Thông báo khẩn",
    moTa: "Từ ngày mai, thí sinh sẽ không thể đăng kí nguyện vọng nữa"
  },
]

function Announce() {
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
          <Button className="bg-sky-500 hover:bg-sky-400" ><IoSearchSharp /></Button>
        </div>

      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tiêu đề</TableHead>
            <TableHead>Mô tả</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.tieuDe}</TableCell>
              <TableCell>{item.moTa}</TableCell>
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

export default Announce;