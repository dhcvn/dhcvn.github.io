// Main JavaScript for Cu Huy Dao Portfolio

(function () {
  // Theme Management
  const themeToggleBtns = document.querySelectorAll('.theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDark.matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateThemeIcons();
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons();
  }

  function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon-light').forEach(el => {
      el.style.display = isDark ? 'block' : 'none';
    });
    document.querySelectorAll('.theme-icon-dark').forEach(el => {
      el.style.display = isDark ? 'none' : 'block';
    });
  }

  themeToggleBtns.forEach(btn => btn.addEventListener('click', toggleTheme));
  prefersDark.addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      updateThemeIcons();
    }
  });

  initTheme();

  // Mobile Navigation
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // Active Navigation link detection
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (currentPath.endsWith(href) || (currentPath === '' && href === 'index.html'))) {
      link.classList.add('text-blue-600', 'dark:text-blue-400', 'font-semibold');
      link.classList.remove('text-slate-600', 'dark:text-slate-400');
    }
  });

  // Global Toast function
  window.showToast = function (message) {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>${message}</span>
    `;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  };

  // Copy to clipboard helper
  window.copyTextToClipboard = function (text, successMsg = 'Đã sao chép vào bộ nhớ tạm!') {
    navigator.clipboard.writeText(text).then(() => {
      window.showToast(successMsg);
    }).catch(err => {
      console.error('Copy failed: ', err);
    });
  };
})();
