# 📖 QUY TRÌNH HƯỚNG DẪN CẬP NHẬT NỘI DUNG WEBSITE DHC-VN (dhcvn.github.io)

Tài liệu này hướng dẫn chi tiết quy trình chuẩn để cập nhật, thêm mới hoặc chỉnh sửa nội dung trên website **dhcvn.github.io** phiên bản mới (Modern Static Web).

---

## 1. 🏗️ Tổng quan về Kiến trúc Mới

- **Nền tảng:** Modern Static Web Architecture (HTML5 + Tailwind CSS + Vanilla JS).
- **Địa chỉ website:** [https://dhcvn.github.io](https://dhcvn.github.io)
- **Ưu điểm vượt trội so với phiên bản Jekyll cũ:**
  - **Tốc độ build:** Triển khai qua GitHub Actions chỉ mất khoảng **10 - 15 giây** (thay vì 3 - 5 phút).
  - **Độ tin cậy:** Không bao giờ bị lỗi do nâng cấp hệ điều hành (Ubuntu), deprecation của Ruby, Gemfile hay Node.js.
  - **Dễ chỉnh sửa:** Bạn có thể mở trực tiếp các file `index.html`, `projects.html`, `publications.html`, `cv.html` trên máy tính bằng bất kỳ trình duyệt nào để xem trước kết quả ngay lập tức (không cần cài đặt Ruby hay Docker).

---

## 2. 📂 Vị trí Cập nhật theo Từng Loại Nội dung

| Bạn muốn cập nhật | Tệp tin cần chỉnh sửa | Hướng dẫn thao tác |
| :--- | :--- | :--- |
| **Tiểu sử, Giới thiệu, Kỹ năng** | `index.html` | Mở `index.html`, sửa nội dung văn bản trong các thẻ `<p>`, `<h1>` hoặc phần công cụ chuyên môn. |
| **Dự án (V-MEDARCHIVE, Dashboard...)** | `projects.html` | Mở `projects.html`, sửa phần mô tả, thêm hình ảnh vào `assets/img/` hoặc thay đổi link iframe nhúng. |
| **Danh mục Bài báo Khoa học** | `assets/js/publications-data.js` | Thêm bài báo mới vào danh sách `PUBLICATIONS` với đầy đủ tiêu đề, tác giả, tạp chí, năm, link DOI, tóm tắt và BibTeX. Trang `publications.html` sẽ tự động hiển thị và hỗ trợ tìm kiếm ngay! |
| **Hồ sơ Năng lực (CV)** | `cv.html` | Mở `cv.html`, cập nhật học vấn, kinh nghiệm làm việc, giải thưởng hoặc liên kết. |
| **Ảnh đại diện hoặc ảnh minh họa** | `assets/img/` | Thêm ảnh mới vào thư mục `assets/img/` (ví dụ `assets/img/anh_moi.png`). |

---

## 3. 🚀 Quy trình 3 Bước Cập nhật và Xuất bản

### Bước 1: Chỉnh sửa và Xem trước Cục bộ
- Mở file `.html` tương ứng bằng VS Code, Notepad hoặc trình soạn thảo bất kỳ.
- Lưu lại (`Ctrl + S`).
- Nhấp đúp chuột vào file `.html` để mở trên trình duyệt (Chrome, Edge...) kiểm tra giao diện xem trước.

### Bước 2: Commit và Đẩy (Push) lên GitHub
Mở PowerShell hoặc Git Bash tại thư mục `dhcvn.github.io`, thực hiện:

```bash
# 1. Kiểm tra trạng thái các file vừa sửa
git status

# 2. Thêm toàn bộ thay đổi vào staging
git add .

# 3. Tạo commit với thông điệp rõ ràng
git commit -m "Cập nhật bài báo mới năm 2026"

# 4. Đẩy lên nhánh main trên GitHub
git push origin main
```

### Bước 3: Kiểm tra Kết quả Triển khai
1. Mở trang GitHub Actions: 👉 [https://github.com/dhcvn/dhcvn.github.io/actions](https://github.com/dhcvn/dhcvn.github.io/actions)
2. Workflow **`Deploy to GitHub Pages`** sẽ hoàn thành chỉ sau khoảng **15 giây** với tích xanh (🟢).
3. Truy cập [https://dhcvn.github.io](https://dhcvn.github.io) để nghiệm thu (nhấn `Ctrl + F5` để làm mới bộ nhớ cache nếu cần).

---

## 4. 💾 Xem lại Mã nguồn Cũ (Legacy Backup)

Toàn bộ phiên bản Jekyll / al-folio trước đây đã được lưu trữ vĩnh viễn và an toàn trên nhánh Git:
👉 **[Nhánh `legacy-al-folio` trên GitHub](https://github.com/dhcvn/dhcvn.github.io/tree/legacy-al-folio)**
