# 🌐 Trang Cá nhân & Học thuật: Cù Huy Đào (Cu Huy Dao, MPH)

> **Địa chỉ website chính thức:** [https://dhcvn.github.io](https://dhcvn.github.io)

Repository này chứa toàn bộ mã nguồn của trang web cá nhân và hồ sơ năng lực học thuật của **Cù Huy Đào (Cu Huy Dao, MPH)** — Chuyên gia phân tích dữ liệu y tế công cộng (Public Health Data Analyst & Researcher), Thạc sĩ Y tế Công cộng tốt nghiệp Đại học Y Hà Nội.

---

## 🏗️ Kiến trúc & Công nghệ Mới

Website đã được tái cấu trúc và thiết kế lại theo tiêu chuẩn **Modern Static Web Architecture**:
- **Giao diện & Styling:** HTML5 ngữ nghĩa, Tailwind CSS hiện đại, Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*), Font Awesome Icons.
- **Tính năng nổi bật:**
  - 🌓 **Dark / Light Mode:** Tự động nhận diện thiết lập hệ điều hành và lưu tùy chọn vào `localStorage`.
  - 📱 **Responsive 100%:** Hiển thị mượt mà trên mọi kích cỡ màn hình (Mobile, Tablet, Laptop, Desktop).
  - ⚡ **Tốc độ tải trang siêu tốc:** Tải trang tức thì, 100/100 điểm Google Lighthouse, không phụ thuộc vào máy chủ backend.
  - 🔍 **Tìm kiếm & Lọc bài báo trực tiếp:** Tìm kiếm theo từ khóa, lọc theo năm xuất bản, mở rộng tóm tắt (Abstract) và sao chép BibTeX 1-chạm.
  - 📊 **Tích hợp các Dashboard:** Nhúng báo cáo Looker Studio (Dữ liệu Lao WHO), Google Sheets (>30.000 bài báo) và Tableau Public.
- **Cơ chế Triển khai (CI/CD):**
  - Sử dụng **GitHub Pages Actions chính thức** (`actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v4`).
  - **Thời gian deploy chỉ mất ~15 giây.**
  - **Không phụ thuộc vào Ruby, Bundler, Python, Docker hay Jekyll plugins phức tạp.** Không bao giờ xảy ra lỗi tương thích hệ điều hành runner (Ubuntu).

---

## 📂 Cấu trúc Thư mục

```text
dhcvn.github.io/
├── index.html                 # Trang chủ: Giới thiệu, công cụ chuyên môn, dự án & công bố nổi bật
├── projects.html              # Trang dự án: Chi tiết V-MEDARCHIVE, WHO TB Data, Race Maps Dashboard
├── publications.html          # Trang công bố: 7 bài báo khoa học có tìm kiếm thời gian thực & copy BibTeX
├── cv.html                    # Trang CV: Quá trình học vấn, kinh nghiệm chuyên môn, kỹ năng dữ liệu
├── QUY_TRINH_CAP_NHAT.md      # Hướng dẫn chi tiết quy trình cập nhật nội dung cho tác giả
├── .nojekyll                  # Chỉ thị cho GitHub Pages phân phối trực tiếp file tĩnh
├── .github/
│   └── workflows/
│       └── deploy.yml         # Workflow tự động deploy lên GitHub Pages khi push nhánh main
└── assets/
    ├── css/
    │   └── style.css          # Tùy biến kiểu dáng, hiệu ứng chuyển động và dark mode
    ├── js/
    │   ├── main.js            # Điều khiển giao diện sáng/tối, menu di động, toast thông báo
    │   └── publications-data.js # Cơ sở dữ liệu danh mục bài báo khoa học và mã BibTeX
    └── img/
        ├── prof_pic.jpg       # Ảnh đại diện tác giả
        ├── vmedarchive_preview.png # Ảnh chụp màn hình giao diện V-MEDARCHIVE
        └── vmedarchive_logo.png    # Logo V-MEDARCHIVE
```

---

## 🚀 Hướng dẫn Cập nhật Nội dung

### 1. Thêm hoặc Sửa Bài báo Khoa học
Mở file `assets/js/publications-data.js` và thêm một đối tượng bài báo mới vào mảng `PUBLICATIONS`:
```javascript
{
  id: "id_bai_bao",
  title: "Tên bài báo",
  authors: "Danh sách tác giả",
  journal: "Tên tạp chí",
  year: 2026,
  doi: "10.xxxx/...",
  url: "https://doi.org/10.xxxx/...",
  badge: "Tên hiển thị",
  tags: ["Từ khóa 1", "Từ khóa 2"],
  abstract: "Nội dung tóm tắt...",
  bibtex: `@article{...}`
}
```

### 2. Thêm hoặc Sửa Dự án
Mở file `projects.html` để cập nhật mô tả, hình ảnh hoặc iframe nhúng.

### 3. Đẩy thay đổi lên GitHub
Mở Terminal tại thư mục này và chạy:
```bash
git add .
git commit -m "Cập nhật nội dung..."
git push origin main
```
GitHub Actions sẽ tự động deploy trang mới trong vòng 15 giây!

---

## 💾 Lưu trữ Phiên bản Cũ (Legacy Backup)

Toàn bộ mã nguồn cũ dựa trên theme Jekyll al-folio đã được lưu trữ an toàn tuyệt đối trên nhánh Git:
👉 **`legacy-al-folio`**: [https://github.com/dhcvn/dhcvn.github.io/tree/legacy-al-folio](https://github.com/dhcvn/dhcvn.github.io/tree/legacy-al-folio)
