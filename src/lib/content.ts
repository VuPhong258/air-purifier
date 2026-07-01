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
  { label: "Tính năng", href: "#features" },
  { label: "Công nghệ", href: "#technology" },
  { label: "Thông số", href: "#specs" },
  { label: "Tư vấn", href: "#newsletter" },
];

export const metrics = [
  { value: "8 phút", label: "làm sạch phòng 25m²" },
  { value: "99.97%", label: "lọc hạt siêu mịn" },
  { value: "22 dB", label: "chế độ ngủ yên tĩnh" },
];

export const features = [
  {
    title: "AI AirSense",
    description:
      "Cảm biến đọc PM2.5, VOC và độ ẩm theo thời gian thực để tự động điều chỉnh lượng gió.",
    icon: Activity,
  },
  {
    title: "Clean Flow Mapping",
    description:
      "Mô phỏng dòng khí trong phòng, giúp máy phân phối không khí sạch đồng đều hơn.",
    icon: Wind,
  },
  {
    title: "Quiet Sleep",
    description:
      "Giảm tiếng ồn và ánh sáng màn hình khi phòng tối, giữ giấc ngủ không bị cắt ngang.",
    icon: Moon,
  },
  {
    title: "Smart Filter Care",
    description:
      "Dự báo tuổi thọ bộ lọc dựa trên mức độ ô nhiễm thật, không chỉ dựa vào thời gian.",
    icon: ShieldCheck,
  },
];

export const storySteps = [
  {
    title: "Đọc chất lượng không khí",
    description:
      "Pure Flow liên tục lấy mẫu bụi mịn, mùi, độ ẩm và nhiệt độ trong phòng.",
    icon: Gauge,
  },
  {
    title: "AI chọn chế độ lọc",
    description:
      "Thuật toán dự đoán nhu cầu làm sạch trong 30 phút tiếp theo và tối ưu công suất.",
    icon: Sparkles,
  },
  {
    title: "Trả lại không gian dễ thở",
    description:
      "Dòng khí sạch được đẩy lên theo vòng xoáy mềm, giảm vùng tù đọng quanh cạnh phòng.",
    icon: Leaf,
  },
];

export const specs = [
  { label: "Bộ lọc", value: "HEPA H13 + than hoạt tính" },
  { label: "Diện tích khuyến nghị", value: "20-45m²" },
  { label: "Cảm biến", value: "PM2.5, VOC, nhiệt độ, độ ẩm" },
  { label: "Độ ồn", value: "22-52 dB" },
  { label: "Kết nối", value: "Wi-Fi 2.4GHz, ứng dụng mobile" },
  { label: "Công suất", value: "6-42W tùy chế độ" },
];

export const productModes = [
  {
    name: "Auto",
    detail: "AI tự cân bằng tốc độ quạt và mục tiêu tiết kiệm điện.",
    icon: Zap,
  },
  {
    name: "Focus",
    detail: "Tăng lọc nhanh khi nấu ăn, dọn nhà hoặc phòng vừa đông người.",
    icon: AppWindow,
  },
  {
    name: "Sleep",
    detail: "Giữ không khí sạch trong đêm với âm thanh gần như không nhận ra.",
    icon: Moon,
  },
];
