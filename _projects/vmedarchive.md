---
layout: page
title: V-MEDARCHIVE
description: Cơ sở dữ liệu & Cổng tra cứu Y học Việt Nam (Vietnamese Medical Research Database & Search Portal)
img: assets/img/vmedarchive_preview.png
importance: 1
category: work
related_publications: false
---

<div class="project-header text-center my-4">
  <span class="badge badge-primary bg-primary text-white p-2">Production Live</span>
  <span class="badge badge-success bg-success text-white p-2">React 19 & TypeScript</span>
  <span class="badge badge-info bg-info text-white p-2">Google Cloud Run</span>
  <span class="badge badge-warning bg-warning text-dark p-2">Google Gemini AI</span>
</div>

<p class="lead text-center">
  <strong>V-MEDARCHIVE</strong> là nền tảng cơ sở dữ liệu và cổng tra cứu y học học thuật đầu tiên tại Việt Nam tích hợp trí tuệ nhân tạo, cung cấp công cụ tìm kiếm tốc độ cao, tổng hợp bằng chứng khoa học và trích dẫn chuẩn mực cho cộng đồng y khoa.
</p>

<div class="text-center mb-4">
  <a href="https://vmed-archieve.web.app" target="_blank" class="btn btn-primary btn-lg shadow-sm">
    <i class="fas fa-external-link-alt"></i> Truy cập V-MEDARCHIVE (Live App)
  </a>
</div>

<div class="row justify-content-center mb-4">
  <div class="col-12">
    {% include figure.liquid loading="eager" path="assets/img/vmedarchive_preview.png" title="Giao diện Cổng tra cứu Y học V-MEDARCHIVE" class="img-fluid rounded z-depth-1 shadow" %}
  </div>
</div>

---

### 1. 🎯 Tổng quan & Mục tiêu Dự án

- **Tên dự án:** **V-MEDARCHIVE** (*Cơ sở dữ liệu danh mục & cổng tra cứu Y học Việt Nam*).
- **Mục tiêu:** Cung cấp công cụ tra cứu, tổng hợp, trích dẫn chuẩn học thuật và phân tích thông minh các công trình nghiên cứu từ các tạp chí y học hàng đầu Việt Nam được tính điểm bởi **Hội đồng Giáo sư Nhà nước (HĐGSNN)**.
- **Quy mô dữ liệu:** Lưu trữ và quản lý hơn **45.000 danh mục bài báo y học** được xuất bản liên tục cùng metadata tác giả, tiêu đề, tóm tắt, ngày phát hành và liên kết toàn văn (HTML/PDF).
- **Đối tượng hướng đến:** Bác sĩ lâm sàng, giảng viên đại học y dược, học viên sau đại học (ThS, CK1, CK2, NCS), sinh viên y khoa và các nhà nghiên cứu y sinh học.

---

### 2. ⚡ Các tính năng cốt lõi (Core Features)

#### 🔍 1. Bộ máy tìm kiếm chuyên sâu cho các nghiên cứu y học tại Việt Nam
Ứng dụng xây dựng một bộ phân tích cú pháp hoàn chỉnh :
- **Toán tử Boolean:** Hỗ trợ toán tử logic `AND`, `OR`, `NOT` linh hoạt (hỗ trợ cả ký hiệu `&&`, `||`, `!`).
- **Ngoặc đơn gom nhóm logic:** Xử lý các truy vấn lồng nhau phức tạp, ví dụ: `(ung thư AND dạ dày) OR (nội soi AND sinh thiết)`.
- **Tìm kiếm cụm từ chính xác:** Bọc trong dấu ngoặc kép `"phẫu thuật nội soi"`.
- **Tìm kiếm nâng cao:** Theo từng trường thông tin cụ thể trong danh mục.


#### 🤖 2. Tổng hợp bằng chứng khoa học bằng AI (Google Gemini 2.0 Flash)
- Tự động lấy tối đa 20 bài báo nghiên cứu mới nhất phù hợp với truy vấn.
- Prompt học thuật được chuẩn hóa theo tiêu chuẩn y khoa hàn lâm để xuất ra báo cáo tóm tắt Markdown:
  - *Tổng quan & Xu hướng nghiên cứu mới nhất*.
  - *Phương pháp nghiên cứu & Đối tượng chính*.
  - *Khoảng trống nghiên cứu & Khuyến nghị hướng nghiên cứu tiếp theo*.

#### 📑 3. Xuất trích dẫn chuẩn quốc tế đa định dạng
- Tự động tạo định dạng trích dẫn chỉ với 1 cú nhấp chuột theo các chuẩn: **Vancouver**, **APA**, và **BibTeX**.
- Hỗ trợ tải tệp `.bib` và xuất dữ liệu danh sách bài báo ra CSV/BibTeX phục vụ phần mềm quản lý tài liệu tham khảo (Zotero, Mendeley, EndNote).

#### 🏛️ 4. Danh mục Tạp chí uy tín
- Tích hợp danh bạ phân loại các tạp chí y học Việt Nam theo điểm số quy đổi của HĐGSNN, mã ISSN, số lượng ấn phẩm và cơ quan chủ quản xuất bản.

#### 🔐 5. Quản lý người dùng
- **Đăng nhập Google trực tiếp 1-chạm:** Sử dụng Google Identity Services (GIS) OAuth 2.0 Token Client kết hợp Google One Tap.

---

---

### 3. 📊 Khám phá dứng dụng

<div class="text-center mt-4">
  <a href="https://vmed-archieve.web.app" target="_blank" class="btn btn-outline-primary btn-lg">
    🚀 Mở ứng dụng V-MEDARCHIVE trên Tab Mới
  </a>
</div>
