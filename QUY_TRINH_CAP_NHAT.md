# 📖 QUY TRÌNH HƯỚNG DẪN CẬP NHẬT NỘI DUNG WEBSITE DHC-VN (dhcvn.github.io)

Tài liệu này hướng dẫn chi tiết quy trình chuẩn để cập nhật, thêm mới hoặc chỉnh sửa nội dung trên website cá nhân và học thuật **dhcvn.github.io**.

---

## 1. 🏗️ Kiến trúc & Cơ chế Hoạt động

- **Nền tảng:** Jekyll với theme học thuật chuyên dụng **al-folio**.
- **Địa chỉ website:** [https://dhcvn.github.io](https://dhcvn.github.io)
- **Cơ chế Triển khai Tự động (CI/CD):**
  - Website được lưu trữ và tự động build thông qua **GitHub Actions** (`.github/workflows/deploy.yml`).
  - Mỗi khi bạn thực hiện `git push` lên nhánh `main`, GitHub Actions sẽ tự động biên dịch toàn bộ mã nguồn Jekyll, tối ưu hóa CSS/JS và phát hành phiên bản mới nhất lên nhánh `gh-pages` trong khoảng **2 - 3 phút**.

---

## 2. 📂 Cấu trúc Thư mục Nội dung Cần Lưu ý

| Thư mục / Tập tin | Loại nội dung | Mô tả chi tiết |
| :--- | :--- | :--- |
| **`_pages/`** | Trang tĩnh chính | Chứa các trang cốt lõi của website: <br>• `about.md`: Giới thiệu bản thân & tiểu sử.<br>• `projects.md`: Trang tổng hợp danh sách các dự án.<br>• `publications.md`: Trang danh mục bài báo khoa học.<br>• `cv.md`: Trang tóm tắt hồ sơ năng lực.<br>• `news.md`: Trang danh sách thông báo & tin tức. |
| **`_projects/`** | Bài viết chi tiết dự án | Chứa các bài viết chi tiết riêng biệt cho từng dự án (ví dụ `_projects/vmedarchive.md`). |
| **`_bibliography/papers.bib`** | Danh mục ấn phẩm | File chuẩn định dạng **BibTeX** chứa toàn bộ các bài báo khoa học được trích dẫn trên trang `publications.md`. |
| **`_news/`** | Tin tức / Thông báo | Các file Markdown dạng `announcement_*.md` chứa các cập nhật ngắn xuất hiện tại trang chủ hoặc trang News. |
| **`_data/`** | Dữ liệu cấu trúc | • `cv.yml`: Cấu hình chi tiết các mục kinh nghiệm, học vấn, kỹ năng cho trang CV.<br>• `coauthors.yml`: Danh sách đồng tác giả. |
| **`assets/img/`** | Hình ảnh | Chứa ảnh đại diện (`prof_pic.jpg`), ảnh minh họa dự án, ảnh bài viết, icon, logo. |
| **`_config.yml`** | Cấu hình toàn trang | Tiêu đề trang, thông tin liên hệ, menu điều hướng, thông số mạng xã hội. |

---

## 3. 🚀 Quy trình 3 Bước Cập nhật Nội dung

### Bước 1: Soạn thảo hoặc Chỉnh sửa Nội dung Cục bộ

#### A. Cập nhật hoặc Thêm mới Dự án (Projects)
1. **Cập nhật danh sách dự án tại `_pages/projects.md`:**
   - Mở file `_pages/projects.md`.
   - Bổ sung hoặc chỉnh sửa các mục dự án với cấu trúc tiêu đề `## Số thứ tự. Tên Dự án`, link truy cập, mô tả tính năng và iframe nhúng (nếu có).
2. **Tạo trang chi tiết cho dự án tại `_projects/`:**
   - Tạo file Markdown mới trong `_projects/`, ví dụ: `_projects/ten-du-an.md`.
   - Khai báo Front Matter ở đầu file:
     ```yaml
     ---
     layout: page
     title: Tên Dự Án
     description: Mô tả ngắn gọn về dự án
     img: assets/img/ten-anh-minh-hoa.png
     importance: 1
     category: work
     related_publications: false
     ---
     ```
   - Soạn thảo nội dung chi tiết bằng Markdown kết hợp HTML components bên dưới.
   - *Lưu ý:* `_config.yml` có cấu hình loại trừ `_projects/?_project.md` (các file mẫu số 1..9), do đó file mới nên đặt tên chữ rõ ràng (ví dụ `vmedarchive.md`, `tb-dashboard.md`).

#### B. Cập nhật Bài báo Khoa học (Publications)
1. Mở file `_bibliography/papers.bib`.
2. Thêm mục bài báo theo định dạng BibTeX chuẩn:
   ```bibtex
   @article{dao2026vmedarchive,
     title={V-MEDARCHIVE: A Comprehensive Vietnamese Medical Research Database and AI Search Engine},
     author={Dao, Cu Huy and Colleagues},
     journal={Journal of Medical Systems},
     year={2026},
     publisher={Springer},
     doi={10.1007/xxxxxx},
     selected={true}
   }
   ```
   *(Nếu đặt `selected={true}`, bài báo sẽ xuất hiện nổi bật ngay tại trang chủ About).*

#### C. Cập nhật Tin tức & Thông báo mới (News)
1. Tạo file mới trong thư mục `_news/` với tên theo cấu trúc: `announcement_YYYY-MM-DD_tieu_de.md`.
2. Nội dung ví dụ:
   ```yaml
   ---
   layout: post
   title: Ra mắt phiên bản chính thức V-MEDARCHIVE
   date: 2026-10-25 10:00:00-0400
   inline: false
   related_posts: false
   ---
   Chúng tôi chính thức phát hành cổng tra cứu y học V-MEDARCHIVE tại https://vmed-archieve.web.app...
   ```

#### D. Thêm Hình ảnh Minh họa
- Đặt file ảnh (.png, .jpg, .svg) vào thư mục `assets/img/`.
- Trong file Markdown, chèn ảnh thông qua Liquid tag chuẩn của al-folio:
  ```liquid
  {% include figure.liquid loading="eager" path="assets/img/ten_anh.png" title="Mô tả ảnh" class="img-fluid rounded z-depth-1" %}
  ```

---

### Bước 2: Lưu và Đẩy (Commit & Push) lên GitHub

Mở PowerShell hoặc Git Bash tại thư mục gốc của repository (`G:\My Drive\000_apps\githubio\dhcvn.github.io`), thực hiện các lệnh sau:

```bash
# 1. Kiểm tra danh sách các file vừa sửa đổi
git status

# 2. Thêm các file thay đổi vào staging
git add _pages/ _projects/ assets/

# (Hoặc thêm toàn bộ thay đổi: git add .)

# 3. Tạo commit với thông điệp rõ ràng
git commit -m "Cập nhật dự án V-MEDARCHIVE và tối ưu giao diện projects"

# 4. Đẩy commit lên nhánh main trên GitHub
git push origin main
```

---

### Bước 3: Theo dõi Triển khai Tự động & Nghiệm thu

1. **Kiểm tra trạng thái Build:**
   - Truy cập vào trang GitHub Actions của repo:
     👉 [https://github.com/dhcvn/dhcvn.github.io/actions](https://github.com/dhcvn/dhcvn.github.io/actions)
   - Bạn sẽ thấy workflow `Deploy site` đang chạy (biểu tượng vòng tròn màu vàng 🟡).
   - Khi chuyển sang biểu tượng tích xanh (🟢 `Deploy site`), quá trình xuất bản đã hoàn tất thành công.
2. **Kiểm tra kết quả trên trang web:**
   - Truy cập website: [https://dhcvn.github.io/projects/](https://dhcvn.github.io/projects/)
   - *Mẹo:* Nếu trình duyệt vẫn hiển thị nội dung cũ, nhấn tổ hợp phím **`Ctrl + F5`** (Windows) hoặc **`Cmd + Shift + R`** (macOS) để xóa bộ nhớ đệm cache và tải lại trang mới nhất.

---

## 4. ⚠️ Các Lưu ý Kỹ thuật Quan trọng

1. **Khối Front Matter:** Tất cả các tệp `.md` trong `_pages/` và `_projects/` phải bắt đầu và kết thúc bằng `---`. Không để khoảng trắng hoặc ký tự lạ trước dòng `---` đầu tiên.
2. **Liên kết Nội bộ (Relative URLs):** Khi liên kết đến trang khác trong website, luôn sử dụng cú pháp:
   ```liquid
   {{ '/projects/vmedarchive/' | relative_url }}
   ```
   Điều này đảm bảo link luôn đúng kể cả khi chạy cục bộ hay trên môi trường production.
3. **Bảo mật Thông tin:** Không commit các token, API key hoặc thông tin bí mật cá nhân vào repository công khai này.
