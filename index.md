---
layout: page
---
<style>
body {
  background-color: #f0f5fa;  /* 非常淡的蓝色背景 */
  position: relative;
  overflow-x: hidden; /* 防止水平滚动条出现 */
}

/* 页面流光特效 */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(100, 180, 255, 0.2), 
    transparent
  );
  z-index: -1;
  animation: page-flow-light 8s infinite linear;
  pointer-events: none; /* 确保不会干扰页面交互 */
}

/* 页面流光动画 */
@keyframes page-flow-light {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.scrollable-news {
  max-height: 400px; /* 设置容器的最大高度 */
  overflow-y: auto; /* 添加垂直滚动条 */
  border-radius: 12px; /* 圆角边框 */
  padding: 15px; /* 从20px减少到15px */
  background-color: #f8fbff; /* 保留非常浅的蓝色背景 */
  box-shadow: 0 4px 15px rgba(0,0,0,0.05); /* 轻微阴影 */
  margin: 15px 0; /* 从20px减少到15px */
  list-style: none; /* 去除列表标记 */
}

.scrollable-news li {
  margin-bottom: 4px; /* 从10px减少到4px */
  padding: 5px; /* 从10px减少到5px */
  border-bottom: 1px solid #e6f0ff; /* 保留浅蓝色分隔线 */
  line-height: 1.4; /* 添加行高控制 */
}

/* 鼠标悬停效果 */
.scrollable-news li:hover {
  background-color: #e6f2ff; /* 稍深一点的浅蓝色 */
  transition: background-color 0.3s ease;
}

.scrollable-news li:last-child {
  border-bottom: none; /* 最后一个条目不显示分隔线 */
}

/* 美化滚动条样式 (适用于WebKit浏览器，如Chrome和Safari) */
.scrollable-news::-webkit-scrollbar {
  width: 8px;
}

.scrollable-news::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.scrollable-news::-webkit-scrollbar-thumb {
  background: #c0c0c0;
  border-radius: 10px;
}

.scrollable-news::-webkit-scrollbar-thumb:hover {
  background: #a0a0a0;
}

/* 鼠标流光粒子样式 */
.mouse-particle {
  pointer-events: none;
  position: fixed;
  border-radius: 50%;
  background: rgba(255, 215, 0, 0.25); /* 金色背景，增加不透明度到0.25 */
  box-shadow: 0 0 10px rgba(207, 187, 74, 0.3); /* 金色阴影，增加不透明度到0.3 */
  z-index: 10000;
  transform: translate(-50%, -50%);
}
</style>

# About Me

<img src="https://ephemeral182.github.io/csx5.jpg" class="floatpic" style="width: 43%; max-width: 540px; height: auto; float: right; margin-left: 1em;">



My name is **Sixiang Chen (陈思翔)**. I received my bachelor degree in Communication Engineering from the School of Ocean Information Engineering at Jimei University, where I was extremely fortunate to be supervised by ***[Dr. Erkang Chen](https://scholar.google.com.hk/citations?hl=zh-CN&user=hWo1RTsAAAAJ)*** and ***[Dr. Yun Liu](https://scholar.google.com.hk/citations?user=9fjHp-EAAAAJ&hl=zh-CN)*** (Southwest University). My research interests lie in the AIGC and low-level vision. I am currently a first-year PhD student at HKUST@[ROAS](https://www.hkust-gz.edu.cn/academics/hubs-and-thrust-areas/systems-hub/robotics-and-autonomous-systems/), supervised by ***[Prof. Lei Zhu](https://sites.google.com/site/indexlzhu/home?authuser=0)*** and ***[Prof. Fugee Tsung](https://www.ieda.ust.hk/dfaculty/tsung/)***.



<br>

## Education

- **Sept. 2024 - Present: Hong Kong University of Science and Technology (Guangzhou)** (PhD)
- **Aug. 2023 - Aug. 2024: Hong Kong University of Science and Technology (Guangzhou)** (RA)
- **Sept. 2019 - Jun. 2023: Jimei University** (B.Eng.)
<br>

---

## Research Interests

- Explore the applications of AIGC (Artificial Intelligence Generated Content) technology
- Perform image restoration under real-world conditions.
- Multimodal large language models (MLLM) for intelligent visual application.

<br>

---

## News and Updates

<div class="scrollable-news">
 <ul>
  <li><strong>Feb. 2025：</strong>&#127873; Fortunately, three papers have been accepted by <strong>CVPR'2025</strong>.</li>
  <li><strong>Feb. 2025：</strong>&#127752; I start to serve as a reviewer in <strong>NeurIPS'2025</strong> and <strong>ICCV'2025</strong>.</li>
  <li><strong>Jan. 2025：</strong>&#127942; I start to serve as a reviewer in <strong>TIP</strong>.</li>
  <li><strong>Dec. 2024：</strong>&#127881; I start to serve as a reviewer in <strong>CVPR'2025</strong> and <strong>ICML'2025</strong>.</li>
  <li><strong>Dec. 2024：</strong>&#128640; Serendipitously, four papers have been accepted by <strong>AAAI'2025</strong>.</li>
  <li><strong>Sept. 2024：</strong>&#127873; Luckily, one paper has been accepted by <strong>NeurIPS'2024</strong>.</li>
  <li><strong>Jun. 2024：</strong>&#127752; I start to serve as a reviewer in <strong>TITS</strong>.</li>
  <li><strong>Aug. 2024：</strong>&#127752; I start to serve as a reviewer in <strong>ICLR'2025</strong>.</li>
  <li><strong>Jul. 2024：</strong>&#128640; Fortunately, two papers have been accepted by <strong>ECCV'2024</strong>.</li>
  <li><strong>Jun. 2024：</strong>&#127873; Serendipitously, one paper has been accepted by <strong>MICCAI'2024</strong>.</li>
  <li><strong>Jun. 2024：</strong>&#127752; I start to serve as a reviewer in <strong>TCSVT</strong>.</li>
  <li><strong>May 2024：</strong>&#127752; I start to serve as a reviewer in <strong>NeurIPS'2024</strong>.</li>
  <li><strong>Apr. 2024：</strong>&#127942; Luckily, one paper has been accepted by <strong>CVPR'2024</strong> as a <strong>Highlight</strong>.</li>
  <li><strong>Nov. 2023：</strong>&#127881; Serendipitously, one paper has been accepted by <strong>AAAI'2024</strong>.</li>
  <li><strong>Aug. 2023：</strong>&#128640; Serendipitously, one paper has been accepted by <strong>BMVC'2023</strong>.</li>
  <li><strong>Jul. 2023：</strong>&#127881; Luckily, four papers have been accepted by <strong>ACM MM'2023</strong>.</li>
  <li><strong>Jul. 2023：</strong>&#127942; To my good fortune, two papers have been accepted by <strong>ICCV'2023</strong>.</li>
  <li><strong>Jul. 2023：</strong>&#128640; I start to serve as a reviewer in <strong>TMM</strong>.</li>
  <li><strong>Jun. 2023：</strong>&#127881; I am awarded the honor of <strong>outstanding graduate</strong> from Jimei University.</li>
  <li><strong>May 2023：</strong> One paper has been presented in <strong>Arxiv'2023 (Under review)</strong> .</li>
  <li><strong>Feb. 2023：</strong>&#128640; Luckily, two papers are accepted to <strong>ICASSP'2023</strong>.</li>
  <li><strong>Dec. 2022：</strong> One paper submits to <strong>Arxiv'2023 (Under review)</strong> .</li>
  <li><strong>Sept. 2022：</strong>&#127881; Fortunately, one paper has been accepted by <strong>ACCV'2022</strong>.</li>
  <li><strong>Sept. 2022：</strong> One paper has been submited to <strong>Arxiv'2023 (Under review)</strong> .</li>
  <li><strong>Jul. 2022：</strong>&#127752; Fortunately, one paper has been accepted as an <strong>oral presentation</strong> by <strong>ECCV'2022</strong>.</li>
  <li><strong>Jun. 2022：</strong>&#127873; Serendipitously, one paper has been accepted by <strong>CVPRW'2022</strong>.</li>
  </ul>
</div>

---

## Academic Service & Awards

**Program Committee / Reviewer:**
 -  International Conference on Computer Vision (**ICCV'2025**)
 - Conference on Neural Information Processing Systems (**NeurIPS'2025**)
 - IEEE Transactions on Image Processing (**TIP**)
 - International Conference on Machine Learning (**ICML'2025**)
 - Conference on Computer Vision and Pattern Recognition (**CVPR'2025**)
 - International Conference on Learning Representations (**ICLR'2025**)
 - IEEE Transactions on Intelligent Transportation Systems (**TITS**)
 - Conference on Neural Information Processing Systems (**NeurIPS'2024**)
 - European Conference on Computer Vision (**ECCV'2024**)
 - IEEE Transactions on Circuits and Systems for Video Technology (**TCSVT**)
 - IEEE Transactions on Multimedia (**TMM**)
 -  ACM Multimedia (**ACM MM'2023 / 2024**)
 -  International Conference on Computer Vision (**ICCV'2023**)
 -  International Conference on Robotics and Automation (**ICRA'2023**)
 - Asian Conference on Computer Vision (**ACCV'2022**)

**Awards:**
 - **PG Scholarship of HKUST(GZ), 2024.**
 - **Outstanding Graduate in Jimei University, 2023.** 
 - **International Third Price, Team Leader:** Mathematical Contest In Modeling, 2022.
 - **National Second Prize, Team Leader:** China Undergraduate Mathematical Contest in Modeling, 2021.
 - **National Second Prize, Team Leader:** Mathorcup Mathematical Contest in Modeling, 2021.
  
<br>

<script>
// 鼠标流光特效
document.addEventListener('DOMContentLoaded', function() {
  // 创建粒子
  function createParticle(x, y, size) {
    const particle = document.createElement('div');
    particle.className = 'mouse-particle';
    
    // 随机大小变化
    const actualSize = size * (0.5 + Math.random() * 0.5);
    particle.style.width = actualSize + 'px';
    particle.style.height = actualSize + 'px';
    
    // 彩虹渐变效果 - 随机选择一个起始色相
    const hue = Math.floor(Math.random() * 360);
    particle.style.background = `hsla(${hue}, 80%, 60%, 0.25)`;
    particle.style.boxShadow = `0 0 10px hsla(${hue}, 80%, 50%, 0.3)`;
    
    // 设置位置
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    // 添加到页面
    document.body.appendChild(particle);
    
    // 粒子消失动画
    setTimeout(() => {
      particle.style.opacity = '0';
      particle.style.transform = 'translate(-50%, -50%) scale(0.5)';
      particle.style.transition = 'all 0.6s ease-out';
      
      // 移除粒子
      setTimeout(() => {
        document.body.removeChild(particle);
      }, 600);
    }, 10);
  }
  
  // 跟踪鼠标移动
  let lastX = 0;
  let lastY = 0;
  let throttle = false;
  
  document.addEventListener('mousemove', function(e) {
    if (throttle) return;
    throttle = true;
    
    // 限制粒子生成频率
    setTimeout(() => {
      throttle = false;
    }, 10);
    
    const x = e.clientX;
    const y = e.clientY;
    
    // 计算移动速度
    const speed = Math.sqrt(Math.pow(x - lastX, 2) + Math.pow(y - lastY, 2));
    const size = Math.min(16, Math.max(5, speed * 0.4)); // 减小粒子尺寸
    
    // 创建粒子
    createParticle(x, y, size);
    
    lastX = x;
    lastY = y;
  });
});
</script>

---
