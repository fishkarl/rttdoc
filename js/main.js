// 主要JavaScript功能
import { initLanguageSelector, updatePageContent } from './i18n.js';

document.addEventListener('DOMContentLoaded', function() {
    // 高亮当前页面导航
    highlightCurrentPage();
    
    // 添加平滑滚动效果
    setupSmoothScroll();
    
    // 初始化代码高亮（如果有代码块）
    initializeCodeHighlight();
    
    // 初始化语言选择器
    initLanguageSelector();
    
    // 更新页面内容为当前语言
    updatePageContent();
});

// 高亮当前页面的导航链接
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
}

// 设置平滑滚动效果
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 初始化代码高亮
function initializeCodeHighlight() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    if (codeBlocks.length > 0) {
        // 这里可以添加代码高亮库的初始化代码
        // 例如，如果将来添加了Prism.js或Highlight.js
        console.log('代码块已准备好进行高亮显示');
    }
}

// 响应式导航菜单（如果将来需要）
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}