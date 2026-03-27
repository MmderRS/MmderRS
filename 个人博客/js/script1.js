// 等待页面DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // ========== 1. 回到顶部功能 ==========
    const backToTopBtn = document.getElementById('back-to-top');
  
    // 监听页面滚动，控制按钮显示隐藏
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        // 滚动超过300px显示按钮
        backToTopBtn.style.display = 'block';
      } else {
        // 回到顶部隐藏按钮
        backToTopBtn.style.display = 'none';
      }
    });
  
    // 点击按钮平滑回到顶部
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动效果
      });
    });
  
    // ========== 2. 明暗主题切换功能 ==========
    const themeToggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement; // 根元素，给它加dark类
  
    // 页面加载时，读取本地保存的主题
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      // 之前是暗色模式，直接应用
      html.classList.add('dark');
      themeToggleBtn.textContent = '☀️'; // 暗色模式显示太阳图标
      themeToggleBtn.setAttribute('aria-label', '切换亮色模式');
    } else {
      // 默认亮色模式
      themeToggleBtn.textContent = '🌙'; // 亮色模式显示月亮图标
      themeToggleBtn.setAttribute('aria-label', '切换暗色模式');
    }
  
    // 点击按钮切换主题
    themeToggleBtn.addEventListener('click', function() {
      // 切换dark类
      const isDark = html.classList.toggle('dark');
  
      if (isDark) {
        // 切换到暗色模式
        this.textContent = '☀️';
        this.setAttribute('aria-label', '切换亮色模式');
        localStorage.setItem('theme', 'dark'); // 保存到本地
      } else {
        // 切换到亮色模式
        this.textContent = '🌙';
        this.setAttribute('aria-label', '切换亮色模式');
        localStorage.setItem('theme', 'light'); // 保存到本地
      }
    });
  });