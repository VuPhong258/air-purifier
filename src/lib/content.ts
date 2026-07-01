import {
  Activity,
  AppWindow,
  Gauge,
  Leaf,
  Moon,
  ShieldCheck,
  Sparkles,
  Wind,
  Zap,
} from "lucide-react";

export const navItems = [
  { label: "Tinh nang", href: "#features" },
  { label: "Cong nghe", href: "#technology" },
  { label: "Thong so", href: "#specs" },
  { label: "Tu van", href: "#newsletter" },
];

export const metrics = [
  { value: "8 phut", label: "lam sach phong 25m2" },
  { value: "99.97%", label: "loc hat sieu min" },
  { value: "22 dB", label: "che do ngu yen tinh" },
];

export const features = [
  {
    title: "AI AirSense",
    description:
      "Cam bien doc PM2.5, VOC va do am theo thoi gian thuc de tu dong dieu chinh luong gio.",
    icon: Activity,
  },
  {
    title: "Clean Flow Mapping",
    description:
      "Mo phong dong khi trong phong, giup may phan phoi khong khi sach dong deu hon.",
    icon: Wind,
  },
  {
    title: "Quiet Sleep",
    description:
      "Giam tieng on va anh sang man hinh khi phong toi, giu giac ngu khong bi cat ngang.",
    icon: Moon,
  },
  {
    title: "Smart Filter Care",
    description:
      "Du bao tuoi tho bo loc dua tren muc do o nhiem that, khong chi dua vao thoi gian.",
    icon: ShieldCheck,
  },
];

export const storySteps = [
  {
    title: "Doc chat luong khong khi",
    description:
      "Pure Flow lien tuc lay mau bui min, mui, do am va nhiet do trong phong.",
    icon: Gauge,
  },
  {
    title: "AI chon che do loc",
    description:
      "Thuat toan du doan nhu cau lam sach trong 30 phut tiep theo va toi uu cong suat.",
    icon: Sparkles,
  },
  {
    title: "Tra lai khong gian de tho",
    description:
      "Dong khi sach duoc day len theo vong xoay mem, giam vung tu dong quanh can phong.",
    icon: Leaf,
  },
];

export const specs = [
  { label: "Bo loc", value: "HEPA H13 + than hoat tinh" },
  { label: "Dien tich khuyen nghi", value: "20-45m2" },
  { label: "Cam bien", value: "PM2.5, VOC, nhiet do, do am" },
  { label: "Do on", value: "22-52 dB" },
  { label: "Ket noi", value: "Wi-Fi 2.4GHz, ung dung mobile" },
  { label: "Cong suat", value: "6-42W tuy che do" },
];

export const productModes = [
  {
    name: "Auto",
    detail: "AI tu can bang toc do quat va muc tieu tiet kiem dien.",
    icon: Zap,
  },
  {
    name: "Focus",
    detail: "Tang loc nhanh khi nau an, don nha hoac phong vua dong nguoi.",
    icon: AppWindow,
  },
  {
    name: "Sleep",
    detail: "Giu khong khi sach trong dem voi am thanh gan nhu khong nhan ra.",
    icon: Moon,
  },
];
