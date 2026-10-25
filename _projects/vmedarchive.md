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

- **Tên dự án:** **V-MEDARCHIVE** (*Cơ sở dữ liệu & Cổng tra cứu Y học Việt Nam* / *Vietnamese Medical Research Database & Search Portal*).
- **Mục tiêu:** Cung cấp công cụ tra cứu, tổng hợp, trích dẫn chuẩn học thuật và phân tích thông minh các công trình nghiên cứu từ các tạp chí y học hàng đầu Việt Nam được tính điểm bởi **Hội đồng Giáo sư Nhà nước (HĐGSNN)** (điểm từ 0.75 đến 1.0).
- **Quy mô dữ liệu:** Lưu trữ và quản lý hơn **30.000 bài báo y học** được xuất bản liên tục cùng metadata tác giả, tiêu đề, tóm tắt, ngày phát hành và liên kết toàn văn (HTML/PDF).
- **Đối tượng phục vụ:** Bác sĩ lâm sàng, giảng viên đại học y dược, học viên sau đại học (ThS, CK1, CK2, NCS), sinh viên y khoa và các nhà nghiên cứu y sinh học.

---

### 2. ⚡ Các Tính năng Cốt lõi (Core Features)

#### 🔍 1. Bộ máy Tìm kiếm Học thuật Chuyên sâu (Advanced AST Search Engine)
Ứng dụng xây dựng một bộ phân tích cú pháp hoàn chỉnh (**Lexer $\rightarrow$ Parser $\rightarrow$ Abstract Syntax Tree (AST) $\rightarrow$ Evaluator**):
- **Toán tử Boolean:** Hỗ trợ toán tử logic `AND`, `OR`, `NOT` linh hoạt (hỗ trợ cả ký hiệu `&&`, `||`, `!`).
- **Ngoặc đơn gom nhóm logic:** Xử lý các truy vấn lồng nhau phức tạp, ví dụ: `(ung thư AND dạ dày) OR (nội soi AND sinh thiết)`.
- **Tìm kiếm cụm từ chính xác:** Bọc trong dấu ngoặc kép `"phẫu thuật nội soi"`.
- **Tiền tố trường (Field Prefixes):**
  - Tiêu đề: `tiêu đề:`, `tieude:`, `title:`, `t:`
  - Tác giả: `tác giả:`, `tacgia:`, `author:`, `authors:`, `a:`
  - Tạp chí: `tạp chí:`, `tapchi:`, `journal:`, `j:`
  - Năm xuất bản: `năm:`, `nam:`, `year:`, `date:`, `y:`
- **Khử dấu tiếng Việt thông minh (Accent-insensitive matching):** Người dùng tìm kiếm "ung thu" vẫn khớp chính xác kết quả chứa "ung thư".

#### 🤖 2. Tổng hợp Bằng chứng Khoa học bằng AI (Google Gemini 2.0 Flash)
- Tự động lấy tối đa 20 bài báo nghiên cứu mới nhất phù hợp với truy vấn.
- Prompt học thuật được chuẩn hóa theo tiêu chuẩn y khoa hàn lâm để xuất ra báo cáo tóm tắt Markdown:
  - *Tổng quan & Xu hướng nghiên cứu mới nhất*.
  - *Phương pháp nghiên cứu & Đối tượng bệnh nhân chính*.
  - *Khoảng trống nghiên cứu & Khuyến nghị hướng nghiên cứu lâm sàng tiếp theo*.

#### 📑 3. Xuất Trích dẫn Chuẩn Quốc tế Đa định dạng
- Tự động tạo định dạng trích dẫn chỉ với 1 cú nhấp chuột theo các chuẩn: **Vancouver**, **APA**, **MLA**, **Harvard** và **BibTeX**.
- Hỗ trợ tải tệp `.bib` và xuất dữ liệu danh sách bài báo ra CSV/BibTeX phục vụ phần mềm quản lý tài liệu tham khảo (Zotero, Mendeley, EndNote).

#### 🏛️ 4. Danh mục Tạp chí Uy tín Minh bạch
- Tích hợp danh bạ phân loại các tạp chí y học Việt Nam theo điểm số quy đổi của HĐGSNN, mã ISSN, số lượng ấn phẩm và cơ quan chủ quản xuất bản.

#### 🔐 5. Quản lý Phiên Người dùng & Hạn ngạch (Quota)
- **Đăng nhập Google trực tiếp 1-chạm:** Sử dụng Google Identity Services (GIS) OAuth 2.0 Token Client kết hợp Google One Tap.
- **Cơ chế Fallback Gmail:** Hỗ trợ nhập trực tiếp email trường hợp bị chặn popup hoặc lỗi môi trường mạng.
- **Đồng bộ thời gian thực:** Kết nối Google Apps Script Webhook để lưu trữ hạn ngạch (tải dữ liệu, phân tích AI) an toàn và minh bạch.

---

### 3. 🏗️ Kiến trúc Công nghệ (Tech Stack)

| Tầng Hệ thống | Công nghệ / Dịch vụ | Vai trò / Chi tiết kỹ thuật |
| :--- | :--- | :--- |
| **Frontend SPA** | React 19, TypeScript 5.8+, Vite 6 | Xây dựng giao diện phản hồi tức thì, type-safe toàn diện |
| **Giao diện & UI** | Tailwind CSS CDN, Material Symbols | Bộ Design Tokens y tế chuyên nghiệp (`#002541`, `#006a61`), dark mode |
| **Backend & Proxy** | Google Cloud Run, Node.js ES Module | Phục vụ file tĩnh SPA, bảo mật AI Proxy (`GEMINI_API_KEY`), Sliding Window Rate Limiter (30 req/min/IP) |
| **Hosting & CDN** | Firebase Hosting (`vmed-archieve.web.app`) | Phân phối tài nguyên CDN toàn cầu, tích hợp rewrite liền mạch sang Cloud Run |
| **Trí tuệ Nhân tạo** | Google Gemini (`gemini-2.0-flash`) | Tổng hợp và phân tích chuyên sâu các công trình nghiên cứu |
| **Cơ sở Dữ liệu** | Google Sheets + Client-side In-Memory | Dữ liệu >30.000 bài báo được parse vào RAM để tìm kiếm tức thì độ trễ zero |
| **Xác thực & Quota** | Google Identity Services (GIS) & GAS Webhook | Xác thực OAuth 2.0, kiểm soát hạn mức sử dụng AI và xuất dữ liệu |
| **Đo lường & Phân tích**| Google Analytics 4 (GA4) | Theo dõi hành vi học thuật ẩn danh (Zero PII), virtual pageviews SPA |

---

### 4. 📊 Khám phá Dữ liệu Trực tiếp

Người dùng có thể trải nghiệm trực tiếp bảng dữ liệu hơn 30.000 bài báo y học được nhúng bên dưới hoặc truy cập trực tiếp cổng ứng dụng:

<div class="my-4">
  <iframe width="100%" height="500" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR1BOdbCbRlOHqIY9SaGHXLXoRkc32of2aT_n_dRx_jMhOl9YNM5ILjnXPI6WbuJULx2ZU9-y9eo6zg/pubhtml?widget=true&amp;headers=false" frameborder="0" style="border: 1px solid #e0e0e0; border-radius: 8px;"></iframe>
</div>

<div class="text-center mt-4">
  <a href="https://vmed-archieve.web.app" target="_blank" class="btn btn-outline-primary btn-lg">
    🚀 Mở ứng dụng V-MEDARCHIVE trên Tab Mới
  </a>
</div>
