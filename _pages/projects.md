---
layout: page
title: projects
permalink: /projects/
nav: true
nav_order: 3
horizontal: false
---

## 1. V-MEDARCHIVE — Vietnamese Medical Research Database & Search Portal

<div class="row align-items-center mb-3">
  <div class="col-md-8">
    <p class="lead mb-2">
      <strong>V-MEDARCHIVE</strong> (<a href="https://vmed-archieve.web.app" target="_blank" rel="noopener noreferrer">vmed-archieve.web.app</a>) là cơ sở dữ liệu và cổng tra cứu y học học thuật toàn diện đầu tiên tại Việt Nam, tập hợp hơn <strong>30.000 bài báo nghiên cứu</strong> từ các tạp chí y học hàng đầu được Hội đồng Giáo sư Nhà nước (HĐGSNN) tính điểm (0.75 - 1.0).
    </p>
    <div class="mb-3">
      <a href="https://vmed-archieve.web.app" target="_blank" class="btn btn-primary btn-sm mr-2 mb-1">
        <i class="fas fa-external-link-alt"></i> Mở Ứng dụng Trực tiếp (Live Web App)
      </a>
      <a href="{{ '/projects/vmedarchive/' | relative_url }}" class="btn btn-outline-secondary btn-sm mb-1">
        <i class="fas fa-info-circle"></i> Xem Chi tiết Kiến trúc Hệ thống
      </a>
    </div>
  </div>
  <div class="col-md-4 text-center">
    {% include figure.liquid loading="eager" path="assets/img/vmedarchive_preview.png" title="V-MEDARCHIVE Preview" class="img-fluid rounded z-depth-1 shadow-sm" %}
  </div>
</div>

**Các tính năng nổi bật:**
- 🔍 **Bộ máy tìm kiếm học thuật chuyên sâu (AST Search Engine):** Hỗ trợ đầy đủ toán tử Boolean (`AND`, `OR`, `NOT`), ngoặc đơn phân cấp, tìm cụm từ chính xác trong ngoặc kép `""`, tiền tố trường (`tiêu đề:`, `tác giả:`, `tạp chí:`, `năm:`) và tự động khử dấu tiếng Việt thông minh.
- 🤖 **Tổng hợp & Phân tích bằng chứng AI (Google Gemini 2.0 Flash):** Tự động phân tích tối đa 20 công trình mới nhất theo truy vấn, tổng hợp phương pháp nghiên cứu, xu hướng điều trị và chỉ ra khoảng trống lâm sàng.
- 📑 **Trích dẫn chuẩn quốc tế:** Xuất tức thì theo 5 chuẩn hàn lâm: **Vancouver**, **APA**, **MLA**, **Harvard** và **BibTeX** (.bib).
- 🏛️ **Minh bạch thông tin tạp chí:** Điểm HĐGSNN, số lượng ấn phẩm, mã ISSN và đường dẫn truy cập bài gốc / toàn văn PDF.
- ⚡ **Công nghệ hiện đại:** Frontend React 19, TypeScript, Vite 6, Tailwind CSS; Backend Google Cloud Run Node.js ES Module bảo vệ Gemini AI Proxy, CDN Firebase Hosting và đồng bộ hạn ngạch thời gian thực qua Google Apps Script.

Dưới đây là cơ sở dữ liệu công khai của hơn 30.000 bài báo y học được xuất bản trên các tạp chí y học uy tín tại Việt Nam:

<iframe width="100%" height="480" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR1BOdbCbRlOHqIY9SaGHXLXoRkc32of2aT_n_dRx_jMhOl9YNM5ILjnXPI6WbuJULx2ZU9-y9eo6zg/pubhtml?widget=true&amp;headers=false" frameborder="0" style="border:1px solid #ddd; border-radius: 8px;"></iframe>

---

## 2. WHO TB Data Summary Page (Vietnam Tuberculosis Profile)

This WHO TB Data Summary Page presents country profile data as reported in 2023 and 2024. Table 1 shows a 5-year trend of TB burden estimates, including TB incidence, HIV(+) TB incidence and mortality, and treatment coverage. Table 2 details the 5-year MDR/RR-TB burden estimate, including incidence numbers and percentages among new and previously treated cases. The report also features visualizations: a line graph illustrating the incidence of new and relapse TB cases, HIV-positive TB incidence (rate per 100,000 population per year) from 2010 to 2022, and a population pyramid showing the incidence of notified TB cases by age group and sex in 2022 (number). Given that the WHO updates global TB data and country profiles every October, this report provides a snapshot of Viet Nam's TB situation as default filtering, which would be useful for Vietnam TB control program to quickly refer to WHO estimates.

<iframe width="100%" height="480" src="https://lookerstudio.google.com/embed/reporting/4ca27bf7-fb8e-45dd-852f-f77524d5061c/page/LjZ2D" frameborder="0" style="border:1px solid #ddd; border-radius: 8px;" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>

---

## 3. Running Races Performance Dashboard 2025

[This interactive dashboard](https://public.tableau.com/views/race_maps/race_map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link) displays summaries for running races in 2025, including the Aikyra Tra Vinh Cross Country Marathon, Dalat Ultra Trail, Quang Binh Discovery Marathon, Thien Cam Half Marathon, and the VnExpress Marathon HCM Midnight. It provides a platform for tracking and reviewing performance across multiple running events with metrics such as race date, distance, finish time, and average pace.
