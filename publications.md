---
layout: page
permalink: /publications/index.html #/publications.html
title: Publications
---

<style>
/* 整体背景色 */
body {
  background-color: #f0f5fa;  /* 非常淡的蓝色背景 */
  position: relative;
  overflow-x: hidden;
}

/* 摘要部分样式 */
.summary-section {
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 40px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  font-size: 1em; /* 保持原始大小 */
}

.summary-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
}

.stat-item {
  background: #fff;
  padding: 15px 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

/* 年份分隔样式 */
.year-section {
  margin: 50px 0;
}

.year-divider {
  display: flex;
  align-items: center;
  margin: 40px 0;
}
.year-2025 { color: #4169E1; }
.year-2024 { color: #2196F3; }  /* 蓝色 */
.year-2023 { color: #00BCD4; }  /* 青色 */
.year-2022 { color: #4CAF50; }  /* 绿色 */

.year-divider::after {
  content: '';
  flex: 1;
  height: 2px;
  margin-left: 20px;
  background: linear-gradient(90deg, currentColor, transparent);
}

/* 论文类型标签样式优化 */
.paper-tag {
  display: inline-block;
  padding: 3px 10px; /* 调整标签内边距以匹配较小的字体 */
  border-radius: 12px;
  font-size: 0.8em; /* 减小标签字体 */
  margin: 5px;
}

.tag-top { 
  background: rgba(33,150,243,0.1);
  color: #2196F3;
}

.tag-conference {
  background: rgba(0,188,212,0.1);
  color: #00BCD4;
}

.tag-workshop {
  background: rgba(76,175,80,0.1);
  color: #4CAF50;
}

/* 完全重写图片容器样式 */
.image-wrapper {
  position: relative;
  overflow: visible; /* 允许阴影可见 */
  border-radius: 0;
  transition: all 0.3s ease;
  width: 100%;
  box-shadow: none;
  padding: 0;
  margin: 0;
  line-height: 0;
  font-size: 0; /* 消除可能的空白 */
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  /* 调整阴影大小，使其更贴近图片边缘 */
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  margin: 0;
}

.image-wrapper:hover img {
  transform: translateY(-5px);
  /* 调整悬停时的阴影，使其更贴近图片边缘 */
  box-shadow: 0 8px 8px 0 rgba(0,0,0,0.1);
}

/* 解决右侧空白问题 */
td.image-wrapper {
  padding: 0 !important;
  margin: 0 !important;
}

/* 移除可能的右侧内边距 */
.image-wrapper img {
  padding-right: 0 !important;
  margin-right: 0 !important;
}

/* 修复表格单元格样式 */
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

td {
  padding: 10px;
  vertical-align: top;
}

/* 确保没有额外的边距 */
* {
  box-sizing: border-box;
}

/* 论文条目样式优化 */
.publication-item {
  background: white;
  border-radius: 16px;
  margin-bottom: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  font-size: 0.95em; /* 略微减小字体 */
}

.publication-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

/* 链接样式美化 */
.custom-link {
  display: inline-block;
  padding: 5px 10px; /* 调整按钮内边距 */
  border-radius: 6px;
  text-decoration: none;
  margin: 0 5px;
  transition: all 0.3s ease;
  font-size: 0.85em; /* 减小链接按钮字体 */
}

.custom-link—paper {
  color: #2196F3;
  background: rgba(33,150,243,0.1);
}

.custom-link—code {
  color: #4CAF50;
  background: rgba(76,175,80,0.1);
}

.custom-link—project {
  color: #9C27B0;
  background: rgba(156,39,176,0.1);
}

.custom-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* 更新摘要统计部分的样式 */
.stat-item {
  background: #fff;
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.stat-number {
  font-size: 2.5em;
  font-weight: 700;
  background: linear-gradient(135deg, #2196F3, #00BCD4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9em;
  color: #666;
}

/* 统计项悬浮提示 */
.stat-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-size: 0.9em;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  width: max-content;
  max-width: 300px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  z-index: 1000;
}

.stat-item:hover .stat-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/* 添加动画效果 */
@keyframes countUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.stat-number {
  animation: countUp 1s ease-out forwards;
}

/* 论文标签样式优化 */
.paper-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  margin: 4px;
  font-size: 0.85em;
  font-weight: 500;
  border-radius: 20px;
  transition: all 0.3s ease;
  cursor: default;
}

/* 不同类型的标签使用不同的颜色主题 */
.tag-method {
  background: linear-gradient(135deg, rgba(33,150,243,0.1), rgba(33,150,243,0.2));
  color: #2196F3;
  border: 1px solid rgba(33,150,243,0.3);
}

.tag-domain {
  background: linear-gradient(135deg, rgba(156,39,176,0.1), rgba(156,39,176,0.2));
  color: #9C27B0;
  border: 1px solid rgba(156,39,176,0.3);
}

.tag-application {
  background: linear-gradient(135deg, rgba(76,175,80,0.1), rgba(76,175,80,0.2));
  color: #4CAF50;
  border: 1px solid rgba(76,175,80,0.3);
}

/* 悬停效果 */
.paper-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* 添加图标支持 */
.paper-tag::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  background-size: contain;
  background-repeat: no-repeat;
  vertical-align: middle;
  opacity: 0.7;
}

.tag-method::before {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%232196F3"><path d="M12 3L1 9l11 6l11-6z"/></svg>');
}

.tag-domain::before {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%239C27B0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2z"/></svg>');
}

.tag-application::before {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234CAF50"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>');
}

/* 研究方向专用标签样式 */
.research-tag {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  margin: 5px;
  font-size: 0.9em;
  font-weight: 500;
  border-radius: 25px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

/* 核心领域标签 */
.tag-core {
  background: linear-gradient(135deg, #1a237e10, #1a237e20);
  color: #1a237e;
  border: 1.5px solid #1a237e40;
}

/* 技术方法标签 */
.tag-tech {
  background: linear-gradient(135deg, #00695c10, #00695c20);
  color: #00695c;
  border: 1.5px solid #00695c40;
}

/* 应用领域标签 */
.tag-focus {
  background: linear-gradient(135deg, #bf360c10, #bf360c20);
  color: #bf360c;
  border: 1.5px solid #bf360c40;
}

/* 发光效果 */
.research-tag::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: inherit;
  filter: blur(10px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.research-tag:hover {
  transform: translateY(-2px);
}

.research-tag:hover::before {
  opacity: 0.7;
}

/* 标签组容器 */
.research-tags-container {
  margin: 25px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-start;
}

/* 移除元素之间的空白 */
.tag-container, .author-info {
  margin: 0;
  padding: 0;
}

.tag-container + .author-info {
  margin-top: -10px; /* 负边距可以拉近两个元素 */
}

/* 或者使用这种方法 */
.tag-container {
  margin-bottom: -10px;
}

/* 调整文章标题字体大小 */
.text-wrapper papertitle {
  font-size: 1.05em; /* 保持标题稍大 */
}

/* 调整作者名字和其他信息的字体大小 */
.text-wrapper {
  font-size: 0.9em; /* 减小作者和其他信息的字体 */
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

/* 动态背景效果 - 科技连线网络 */
.dynamic-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

/* 科技网格背景 */
.tech-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 40px 40px;
  opacity: 0.2;
  background-image: 
    radial-gradient(circle, rgba(33, 150, 243, 0.1) 1px, transparent 1px);
}

/* 连接线容器 */
#nodes-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 节点样式 */
.node {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: rgba(33, 150, 243, 0.5);
  border-radius: 50%;
  transition: transform 0.3s ease;
}

/* 动态背景效果 */
.dynamic-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.05), rgba(0, 188, 212, 0.05));
  filter: blur(40px);
  opacity: 0.6;
  animation: float 15s infinite ease-in-out;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(5%, 5%); }
  50% { transform: translate(0, 10%); }
  75% { transform: translate(-5%, 5%); }
}

/* 渐变网格背景 */
.grid-pattern {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: -1;
  opacity: 0.4;
  pointer-events: none;
}
</style>

<!-- 动态背景元素 -->
<div class="dynamic-bg">
  <div class="grid-pattern"></div>
  <div id="nodes-container"></div>
</div>

<!-- 添加摘要部分 -->
<div class="summary-section">
  <h1>Publications</h1>
  My research focuses on AIGC and image restoration:
<br>
(1) Advancing AIGC (AI-Generated Content) technology through various generative paradigms (e.g., Diffusion Models, Auto-Regressive Models, VAR) for intelligent image generation;<br><br>
(2) Developing robust and generalizable solutions for real-world image restoration, particularly in adverse conditions;<br><br>
(3) Exploring multimodal large language models (MLLM) for intelligent visual application.

  
  <div class="research-tags-container">
    <!-- <span class="research-tag tag-core">Computer Vision</span>
    <span class="research-tag tag-core">Deep Learning</span> -->
    <span class="research-tag tag-tech">Diffusion Models</span>
    <span class="research-tag tag-tech">AIGC</span>
    <span class="research-tag tag-tech">MLLM</span>
    <span class="research-tag tag-focus">Image Generation</span>
    <span class="research-tag tag-focus">Real-world Image Restoration</span>
  </div>

  
<div class="summary-stats">
    <div class="stat-item">
      <div class="stat-number">10</div>
      <div class="stat-label">CVPR/ICCV/ECCV/NeurIPS</div>
      <div class="stat-tooltip">
        <strong>Main list:</strong><br>
        • CVPR'25 (3 papers)<br>
        • NeurIPS'24<br>
        • ECCV'24 (2 papers)<br>
        • CVPR'24 (Highlight)<br>
        • ICCV'23 (2 papers)<br>
        • ECCV'22 (Oral)
      </div>
    </div>
    <div class="stat-item">
      <div class="stat-number">9</div>
      <div class="stat-label">AAAI/IJCAI/ACM MM/MICCAI</div>
      <div class="stat-tooltip">
        <strong>Main list:</strong><br>
        • AAAI'25 (4 papers)<br>
        • ACM MM'23 (4 papers)<br>
        • MICCAI'24
      </div>
    </div>
     <div class="stat-item">
      <div class="stat-number">4</div>
      <div class="stat-label">Other Conferences</div>
      <div class="stat-tooltip">
        <strong>Main list:</strong><br>
        • BMVC'23<br>
        • ACCV'22<br>
        • ICASSP'23 (2 papers)
      </div>
    </div>
  </div>
</div>

<!-- Selected Papers -->
  <h1>Selected Papers</h1>
  
<!-- 符号说明 -->
<div class="symbols-legend" style="margin: 15px 0; font-size: 1em; color: #555;">
  <span style="margin-right: 20px;"><strong>*</strong> - Equal Contribution</span>
  <span style="margin-right: 20px;"><strong><sup>&#9828;</sup></strong> - Project Lead</span>
  <span><strong><sup>✉️</sup></strong> - Corresponding Author</span>
</div>

<!-- 2025年论文 -->
<div class="year-section">
  <div class="year-divider">
    <h2 class="year-2025">2025</h2>
  </div>

  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="margin:5px;padding:5px;width:35%;max-width:90%" align="center" class="image-wrapper"  data-description="CVPR'2025">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/cvpr_snowmaster.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
          <papertitle>
            <strong>
              SnowMaster: Comprehensive Real-world Image Desnowing via MLLM with Multi-Model Feedback Optimization
            </strong>
          </papertitle><br>
          <div>
          <span class="paper-tag tag-method">MLLM for Image Restoration</span>
          <span class="paper-tag tag-application">Intelligent Evaluation, Multi-Model Feedback Optimization</span>
          </div>
          Jianyu Lai*, <strong><u>Sixiang Chen*<sup>&#9828;</sup></u></strong>, Yunlong Lin, Tian Ye, Yun Liu, Song Fei, Zhaohu Xing, Hongtao Wu, Weiming Wang, and Lei Zhu<sup>✉️</sup>.
          <br>  
          <em>Computer Vision and Pattern Recognition <strong>(CVPR)</strong></em>, 2025
          <br>
          <a href="Ephemeral182.github.io" class="custom-link—paper">[Paper]</a>
          <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
          <a href="Ephemeral182.github.io" class="custom-link—project">[Project]</a>
      </td>
    </tr>
  </tbody>
  </table>

  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="margin:5px;padding:5px;width:35%;max-width:90%" align="center" class="image-wrapper"  data-description="CVPR'2025">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/cvpr25_jarvisir.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
          <papertitle>
            <strong>
              JarvisIR: Elevating Autonomous Driving Perception with Intelligent Image Restoration
            </strong>
          </papertitle><br>
          <div>
          <span class="paper-tag tag-method">MLLM for Image Restoration</span>
          <span class="paper-tag tag-application">Intelligent Agent, Ranking Feedback Optimization</span>
          </div>
          Yunlong Lin*, Zixu Lin*, Haoyu Chen*, Panwang Pan*, Chenxin Li, <strong><u>Sixiang Chen</u></strong>, Kairun Wen, Yeying Jin, Wenbo Li, Xinghao Ding<sup>✉️</sup>.
          <br>  
          <em>Computer Vision and Pattern Recognition <strong>(CVPR)</strong></em>, 2025
          <br>
          <a href="Ephemeral182.github.io" class="custom-link—paper">[Paper]</a>
          <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
          <a href="Ephemeral182.github.io" class="custom-link—project">[Project]</a>
      </td>
    </tr>
  </tbody>
  </table>

    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="margin:5px;padding:5px;width:35%;max-width:90%" align="center" class="image-wrapper"  data-description="CVPR'2025">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/cvpr25_mirror_detec.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
          <papertitle>
            <strong>
              Detect Any Mirrors: Boosting Learning Reliability on Large-Scale Unlabeled Data with an Iterative Data Engine
            </strong>
          </papertitle><br>
          <div>
          <span class="paper-tag tag-method">MLLM for Mirror Detection</span>
          <span class="paper-tag tag-application">Iterative Data Engine, Large-Scale Unlabeled Data</span>
          </div>
          Zhaohu Xing, Lihao Liu, Yijun Yang, Hongqiu Wang, Tian Ye, <strong><u>Sixiang Chen</u></strong>, Wenxue Li, Guang Liu, and Lei Zhu<sup>✉️</sup>.
          <br>  
          <em>Computer Vision and Pattern Recognition <strong>(CVPR)</strong></em>, 2025
          <br>
          <a href="Ephemeral182.github.io" class="custom-link—paper">[Paper]</a>
          <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
          <a href="Ephemeral182.github.io" class="custom-link—project">[Project]</a>
      </td>
    </tr>
  </tbody>
  </table>


  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="margin:5px;padding:5px;width:35%;max-width:90%" align="center" class="image-wrapper"  data-description="AAAI'2025">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/aaai25_prompthaze.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
          <papertitle>
            <strong>
              PromptHaze: Prompting Real-world Dehazing via Depth Anything Model
            </strong>
          </papertitle><br>
          <div>
          <span class="paper-tag tag-method">Prompt Learning for Image Restoration</span>
          <span class="paper-tag tag-application">Real-world Generalization, Depth Anything Model</span>
          </div>
          Tian Ye, <strong><u>Sixiang Chen</u></strong>, Haoyu Chen, Wenhao Chai, Jingjing Ren, Zhaohu Xing, Wenxue Li, Lei Zhu<sup>✉️</sup>.
          <br>  
          <em>Conference on Artificial Intelligence <strong>(AAAI)</strong></em>, 2025
          <br>
          <a href="Ephemeral182.github.io" class="custom-link—paper">[Paper]</a>
          <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
          <a href="Ephemeral182.github.io" class="custom-link—project">[Project]</a>
      </td>
    </tr>
  </tbody>
  </table>


  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="margin:5px;padding:5px;width:35%;max-width:90%" align="center" class="image-wrapper"  data-description="AAAI'2025">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/aglldiff.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
          <papertitle>
            <strong>
              AGLLDiff: Guiding Diffusion Models Towards Unsupervised Training-free Real-world Low-light Image Enhancement
            </strong>
          </papertitle><br>
          <div>
          <span class="paper-tag tag-method">Generative Model for Image Restoration</span>
          <span class="paper-tag tag-application">Unsupervised Training-free, Real-world Generalization</span>
          </div>
          Yunlong Lin* ,Tian Ye*, <strong><u>Sixiang Chen*</u></strong> ,Zhenqi Fu, Yingying Wang, Wenhao Chai, Zhaohu Xing, Lei Zhu, Xinghao Ding<sup>✉️</sup>.
          <br>  
          <em>Conference on Artificial Intelligence <strong>(AAAI)</strong></em>, 2025
          <br>
          <a href="https://arxiv.org/abs/2407.14900" class="custom-link—paper">[Paper]</a>
          <a href="https://aglldiff.github.io/" class="custom-link—code">[Code]</a>
          <a href="https://aglldiff.github.io/" class="custom-link—project">[Project]</a>
      </td>
    </tr>
    </tbody>
  </table>


<!-- 2024年论文 -->
<div class="year-section">
  <div class="year-divider">
    <h2 class="year-2024">2024</h2>
  </div>
  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="margin:5px;padding:5px;width:35%;max-width:90%" align="center" class="image-wrapper"  data-description="NeurIPS'2024">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/nips2024/overview.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
          <papertitle>
            <strong>
              RestoreAgent: Autonomous Image Restoration Agent via Multimodal Large Language Models
            </strong>
          </papertitle><br>
          <div>
          <span class="paper-tag tag-method">MLLM for Image Restoration</span>
          <span class="paper-tag tag-application">Intelligent Agent</span>
          </div>
          Haoyu Chen, Wenbo Li, Jinjin Gu, Jingjing Ren, <strong><u>Sixiang Chen</u></strong>, Tian Ye, Renjing Pei, Kaiwen Zhou, Fenglong Song, Lei Zhu<sup>✉️</sup>.
          <br>  
          <em>Conference on Neural Information Processing Systems <strong>(NeurIPS)</strong></em>, 2024
          <br>
          <a href="https://arxiv.org/abs/2407.18035" class="custom-link—paper">[Paper]</a>
          <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
          <a href="https://haoyuchen.com/RestoreAgent" class="custom-link—project">[Project]</a>
      </td>
    </tr>
  </tbody>
  </table>



<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="margin:5px;padding:5px;width:35%;max-width:90%" align="center" class="image-wrapper"  data-description="ECCV'2024">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/eccv_24/eccv_adverse.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
          <papertitle>
            <strong>
              Teaching Tailored to Talent: Adverse Weather Restoration via Prompt Pool and Depth-Anything Constraint
            </strong>
          </papertitle><br>
          <div>
          <span class="paper-tag tag-method">Generative Model for Image Restoration</span>
          <span class="paper-tag tag-application">Real-world Generalization, Prompt Learning</span>
          </div>
          <strong><u>Sixiang Chen</u></strong>, Tian Ye, Kai Zhang, Zhaohu Xing, Yunlong Lin, Lei Zhu<sup>✉️</sup>.
          <br>  
          <em>European Conference on Computer Vision <strong>(ECCV)</strong></em>, 2024
          <br>
          <a href="https://arxiv.org/abs/2409.15739" class="custom-link—paper">[Paper]</a>
          <a href="https://github.com/Ephemeral182/ECCV24_T3-DiffWeather" class="custom-link—code">[Code]</a>
          <a href="https://ephemeral182.github.io/T3-DiffWeather/" class="custom-link—project">[Project]</a>
      </td>
    </tr>
  </tbody>
  </table>

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="margin:5px;padding:5px;width:35%;max-width:90%" align="center" class="image-wrapper"  data-description="ECCV'2024">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/eccv_snow.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
          <papertitle>
            <strong>
              Semi-Supervised Video Desnowing Network via Temporal Decoupling Experts and Distribution-Driven Contrastive Regularization
            </strong>
          </papertitle><br>
          <div>
          <span class="paper-tag tag-method">MoE for Video Restoration</span>
          <span class="paper-tag tag-application">Semi-Supervised Learning, New Benchmark</span>
          </div>
          Hongtao Wu, Yijun Yang, Angelica Aviles-Rivero, Jingjing Ren, <strong><u>Sixiang Chen</u></strong>, Haoyu Chen, Lei Zhu<sup>✉️</sup>.
          <br>  
          <em>European Conference on Computer Vision <strong>(ECCV)</strong></em>, 2024
          <br>
          <a href="https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/01500.pdf" class="custom-link—paper">[Paper]</a>
          <a href="https://github.com/TonyHongtaoWu/SemiVDN
          " class="custom-link—code">[Code]</a>
      </td>
    </tr>
  </tbody>
  </table>

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="margin:5px;padding:5px;width:35%;max-width:90%" align="center" class="image-wrapper"  data-description="MICCAI'2024">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/miccai24.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
          <papertitle>
            <strong>
              Cross-conditioned Diffusion Model for medical image-to-image translation
            </strong>
          </papertitle><br>
          <div>
          <span class="paper-tag tag-method">Generative Model for  Medical Image Translation</span>
          <span class="paper-tag tag-application">Conditional Generation</span>
          </div>
          Zhaohu Xing, Sicheng Yang, <strong><u>Sixiang Chen</u></strong>, Tian Ye, Lei Zhu<sup>✉️</sup>.
          <br>  
          <em>Medical Image Computing and Computer Assisted Intervention <strong>(MICCAI)</strong></em>, 2024
          <br>
          <a href="https://link.springer.com/chapter/10.1007/978-3-031-72104-5_20" class="custom-link—paper">[Paper]</a>
          <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
      </td>
    </tr>
  </tbody>
  </table>


<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="margin:5px;padding:5px;width:35%;max-width:90%" align="center" class="image-wrapper" data-description="CVPR'2024 (Highlight)">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/CVPR24.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
          <papertitle>
            <strong>
              Learning Diffusion Texture Priors for Image Restoration
            </strong>
          </papertitle><br>
          <div>
          <span class="paper-tag tag-method">Generative Model for Image Restoration</span>
          <span class="paper-tag tag-application">Diffusion Model for Textural Learning</span>
          </div>
          Tian Ye, <strong><u>Sixiang Chen</u></strong>, Wenhao Chai, Zhaohu Xing, Jing Qin, Ge Lin, Lei Zhu<sup>✉️</sup>.
          <br>  
          <em>Computer Vision and Pattern Recognition <strong>(CVPR Highlight)</strong></em>, 2024
          <br>
          <a href="https://openaccess.thecvf.com/content/CVPR2024/html/Ye_Learning_Diffusion_Texture_Priors_for_Image_Restoration_CVPR_2024_paper.html" class="custom-link—paper">[Paper]</a>
          <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
      </td>
    </tr>
    </tbody>
  </table>
<!-- </div> -->

<!-- 2023年论文 -->
<div class="year-section">
  <div class="year-divider">
    <h2 class="year-2023">2023</h2>
  </div>
  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="margin:5px;padding:5px;width:35%;max-width:90%" align="center" class="image-wrapper" data-description="ICCV'2023">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/udrs2former.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
          <papertitle>
            <strong>
              Sparse Sampling Transformer with Uncertainty-Driven Ranking for Unified Removal of Raindrops and Rain Streaks
            </strong>
          </papertitle><br>
          <div>
          <span class="paper-tag tag-method">Uncertainty for Image Restoration</span>
          <span class="paper-tag tag-application">Uncertainty-Driven Consideration, Sparse Sampling</span>
          </div>
          <strong><u>Sixiang Chen*</u></strong>, Tian Ye*, Jinbin Bai, Jun Shi, Erkang Chen, Lei Zhu<sup>✉️</sup>.
          <br>  
          <em>International Conference on Computer Vision <strong>(ICCV)</strong></em>, 2023
          <br>
          <a href="https://arxiv.org/abs/2308.14153" class="custom-link—paper">[Paper]</a>
          <a href="https://github.com/Ephemeral182/UDR-S2Former_deraining" class="custom-link—code">[Code]</a>
          <a href="https://ephemeral182.github.io/UDR_S2Former_deraining/" class="custom-link—project">[Project]</a>
      </td>
    </tr>
  </tbody>
  </table>


  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
  <tr>
        <td style="margin:5px;padding:5px;width:35%;max-width:40%" align="center" class="image-wrapper" data-description="ICCV'2023">
          <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/AWRCP_framework.jpg" alt="dise"> 
        </td>
      <td width="75%" valign="center" class="text-wrapper"> 
        <papertitle>
        <strong>
        Adverse Weather Removal with Codebook Priors
        </strong>
        </papertitle><br>
        <div>
          <span class="paper-tag tag-method">Generative Model for Image Restoration</span>
          <span class="paper-tag tag-application">Codebook Priors</span>
        </div>
        Tian Ye*,<strong><u>Sixiang Chen*</u></strong>, Jinbin Bai, Jun Shi, Chenghao Xue, Jingjia Jiang, Junjie Yin, Erkang Chen, Yun Liu<sup>✉️</sup>.
        <br>  
        <em>International Conference on Computer Vision <strong>(ICCV)</strong></em>, 2023
        <br>
        <a href="Ephemeral182.github.io" class="custom-link—paper">[Paper]</a>
        <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
      </td>
      </tr>
  </tbody>
  </table>

      
  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
  <tr>
        <td style="margin:5px;padding:5px;width:35%;max-width:40%" align="center" class="image-wrapper" data-description="ACM MM'2023">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/Uncertainty_MM.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
        <papertitle>
        <strong>
          Uncertainty-Driven Dynamic Degradation Perceiving and Background Modeling for Efficient Single Image Desnowing
        </strong>
        </papertitle><br>
        <div>
          <span class="paper-tag tag-method">Uncertainty for Image Restoration</span>
          <span class="paper-tag tag-application">Novel Perspective for Desnowing</span>
        </div>
        <strong><u>Sixiang Chen*</u></strong>, Tian Ye*, Chenghao Xue*, Haoyu Chen, Yun Liu, Erkang Chen, Lei Zhu<sup>✉️</sup>.
        <br>  
        <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023
        <br>
        <a href="Ephemeral182.github.io" class="custom-link—paper">[Paper]</a>
        <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
      </td>
      </tr>
  </tbody>
  </table>

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="margin:5px;padding:5px;width:35%;max-width:40%" align="center" class="image-wrapper" data-description="ACM MM'2023">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/cpl.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
        <papertitle>
        <strong>
          CPLFormer: Cross-scale Prototype Learning Transformer for Image Snow Removal
        </strong>
        </papertitle><br>
        <div>
          <span class="paper-tag tag-method">Prototype Learning for Image Restoration</span>
          <span class="paper-tag tag-application">Cross-scale Prototype </span>
        </div>
        <strong><u>Sixiang Chen*</u></strong>, Tian Ye*, Yun Liu, Jinbin Bai, Haoyu Chen, Yunlong Lin, Jun Shi, Erkang Chen<sup>✉️</sup>.
        <br>  
        <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023
        <br>
        <a href="Ephemeral182.github.io" class="custom-link—paper">[Paper]</a>
       <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
      </td>
      </tr>
  </tbody>
  </table>


  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
  <tr>
        <td style="margin:5px;padding:5px;width:35%;max-width:40%" align="center" class="image-wrapper" data-description="ACM MM'2023">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/video.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
        <papertitle>
        <strong>
          Sequential Affinity Learning for Video Restoration
        </strong>
        </papertitle><br>
        <div>
          <span class="paper-tag tag-method">Sequential Affinity for Video Restoration</span>
          <span class="paper-tag tag-application">Sequential Affinity Learning</span>
        </div>
        Tian Ye*,<strong><u>Sixiang Chen*</u></strong>, Yun Liu<sup>✉️</sup>, Wenhao Chai, Jinbin Bai, Wenbin Zou, Yunchen Zhang, jiang mingchao, Erkang Chen, Chenghao Xue.
        <br>  
        <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023
        <br>
        <a href="Ephemeral182.github.io" class="custom-link—paper">[Paper]</a>
        <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
      </td>
      </tr>


  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
  <tr>
        <td style="margin:5px;padding:5px;width:35%;max-width:40%" align="center" class="image-wrapper" data-description="ACM MM'2023">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/Nightformer.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
        <papertitle>
        <strong>
          NightHazeFormer: Single Nighttime Haze Removal Using Prior Query Transformer
        </strong>
        </papertitle><br>
        <div>
          <span class="paper-tag tag-method">Prior Query Transformer for Image Restoration</span>
          <span class="paper-tag tag-application">Physical Prior, New Benchmark</span>
        </div>
        Yun Liu, Zhongsheng Yan, <strong><u>Sixiang Chen</u><sup>✉️</sup></strong>, Tian Ye<sup>✉️</sup>, Wenqi Ren, Erkang Chen.
        <br>  
        <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023
        <br>
        <a href="http://export.arxiv.org/abs/2305.09533#:~:text=propose%20an%20end-to-end%20transformer-based%20framework%20for%20nighttime%20haze,we%20introduce%20two%20powerful%20priors%20into%20the%20transformer" class="custom-link—paper">[Paper]</a>
        <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
      </td>
      </tr>


  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
  <tr>
        <td style="margin:5px;padding:5px;width:35%;max-width:40%" align="center" class="image-wrapper" data-description="BMVC'2023">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/BMVC.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
        <papertitle>
        <strong>
          Five A+ Network: You Only Need 9K Parameters for Underwater Image Enhancement
        </strong>
        </papertitle><br>
        <div>
        <span class="paper-tag tag-method">Efficient Image Restoration</span>
        <span class="paper-tag tag-application">Only 9K Parameters</span>
        </div>
        Jingxia Jiang*, Tian Ye*, Jinbin Bai*, <strong><u>Sixiang Chen</u></strong>, Wenhao Chai, Jun Shi, Yun Liu, Erkang Chen<sup>✉️</sup>.
        <br>  
        <em>British Machine Vision Conference (BMVC)</em>, 2023
        <br>
        <a href="https://arxiv.org/abs/2305.08824#:~:text=In%20this%20work%2C%20we%20propose%20the%20Five%20A,The%20FA%20Net%20employs%20a%20two-stage%20enhancement%20structure." class="custom-link—paper">[Paper]</a>
        <a href="https://github.com/Owen718/FiveAPlus-Network" class="custom-link—code">[Code]</a>
      </td>
      </tr>


  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
  <tr>
        <td style="margin:5px;padding:5px;width:35%;max-width:40%" align="center" class="image-wrapper" data-description="ICASSP'2023" >
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/dehrformer_00.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
        <papertitle>
        <strong>
          DEHRFormer: Real-time Transformer for Depth Estimation and Haze Removal from Varicolored Haze Scenes
        </strong>
        </papertitle><br>
        <div>
          <span class="paper-tag tag-method">Vision Transformer for Image Restoration</span>
          <span class="paper-tag tag-application">Real-time, New Benchmark for Vari-color Haze</span>
        </div>
        <strong><u>Sixiang Chen*</u></strong>, Tian Ye*, Jun Shi, Yun Liu, JingXia Jiang, Erkang Chen, Peng Chen<sup>✉️</sup>.
        <br>  
        <em>International Conference on Acoustics, Speech, and Signal Processing <strong>(ICASSP)</strong></em>, 2023
        <br>
        <a href="https://ieeexplore.ieee.org/abstract/document/10096828" class="custom-link—paper">[Paper]</a>
        <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
      </td>
      </tr>


  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
  <tr>
        <td style="margin:5px;padding:5px;width:35%;max-width:40%" align="center" class="image-wrapper" data-description="ICASSP'2023" >
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/MSP-Former_00.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
        <papertitle>
        <strong>
          MSP-Former: Multi-Scale Projection Transformer for Single Image Desnowing
        </strong>
        </papertitle><br>
        <div>
        <span class="paper-tag tag-method">Vision Transformer for Image Restoration</span>
        <span class="paper-tag tag-application">Multi-Scale Projection, First Vision Transformer for Desnowing</span>
        </div>
        <strong><u>Sixiang Chen*</u></strong>, Tian Ye*, Yun Liu, Taodong Liao, Jingxia Jiang, Erkang Chen, Peng Chen<sup>✉️</sup>.
        <br>  
        <em>International Conference on Acoustics, Speech, and Signal Processing <strong>(ICASSP)</strong></em>, 2023
        <br>
        <a href="https://ieeexplore.ieee.org/abstract/document/10095605" class="custom-link—paper">[Paper]</a>
        <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
      </td>
      </tr>
    </tbody>
  </table>
<!-- </div> -->

<!-- 2022年论文 -->
<div class="year-section">
  <div class="year-divider">
    <h2 class="year-2022">2022</h2>
  </div>
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
  <tr>
        <td style="margin:5px;padding:5px;width:35%;max-width:40%" align="center" class="image-wrapper" data-description="Arxiv'2022">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/snowformer.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
        <papertitle>
        <strong>
          SnowFormer: Context Interaction Transformer with Scale-awareness for Single Image Desnowing
        </strong>
        </papertitle><br>
        <div>
        <span class="paper-tag tag-method">Vision Transformer for Image Restoration</span>
        <span class="paper-tag tag-application">SOTA Desnowing, Significant Performance Improvement</span>
        </div>
        <strong><u>Sixiang Chen*</u></strong>, Tian Ye*, Yun Liu, Erkang Chen<sup>✉️</sup>.
        <br>  
        <em>Arxiv (Under review)</em>, 2022
        <br>
        <a href="https://arxiv.org/abs/2208.09703#:~:text=SnowFormer%3A%20Context%20Interaction%20Transformer%20with%20Scale-awareness%20for%20Single,image%20desnowing%20is%20a%20challenging%20image%20restoration%20task." class="custom-link—paper">[Paper]</a>
        <a href="https://github.com/Ephemeral182/SnowFormer" class="custom-link—code">[Code]</a>
      </td>
      </tr>


  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
  <tr>
        <td style="margin:5px;padding:5px;width:35%;max-width:40%" align="center" class="image-wrapper" data-description="ACCV'2022">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/ACCV.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
        <papertitle>
        <strong>
          Towards Real-time High-Definition Image Snow Removal: Efficient Pyramid Network with Asymmetrical Encoder-decoder Architecture
        </strong>
        </papertitle><br>
        <div>
        <span class="paper-tag tag-method">Efficient Image Restoration</span>
        <span class="paper-tag tag-application">Real-time, High-Definition</span>
        </div>
        Tian Ye*, <strong><u>Sixiang Chen*</u></strong>, Yun Liu, Yi Ye, Erkang Chen<sup>✉️</sup>.
        <br>  
        <em>Asian Conference on Computer Vision <strong>(ACCV)</strong></em>, 2022
        <br>
        <a href="Ephemeral182.github.io" class="custom-link—paper">[Paper]</a>
        <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
      </td>
      </tr>


  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
  <tr>
        <td style="margin:5px;padding:5px;width:35%;max-width:40%" align="center" class="image-wrapper" data-description="Digital Signal Processing">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/dualformer.png" alt="dise"> 
      </td>
      <td width="75%" valign="center" class="text-wrapper"> 
        <papertitle>
        <strong>
          Dual-former: Hybrid Self-attention Transformer for
          Efficient Image Restoration
        </strong>
        </papertitle><br>
        <div>
        <span class="paper-tag tag-method">Vision Transformer for Image Restoration</span>
        <span class="paper-tag tag-application">Latent-based Self-attention</span>
        </div>
        <strong><u>Sixiang Chen</u></strong>, Tian Ye, Yun Liu, Erkang Chen<sup>✉️</sup>.
        <br>  
        <em>Digital Signal Processing</em>, 2024
        <br>
        <a href="https://www.sciencedirect.com/science/article/pii/S1051200424001106" class="custom-link—paper">[Paper]</a>
        <a href="Ephemeral182.github.io" class="custom-link—code">[Code]</a>
      </td>
      </tr>


  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
  <tr>
        <td style="margin:5px;padding:5px;width:35%;max-width:40%" align="center" class="image-wrapper" data-description="ECCV'2022 (Oral)">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/ECCV.png" alt="dise"> 
        </td>
      <td width="75%" valign="center" class="text-wrapper"> 
        <papertitle>
        <strong>
          Perceiving and Modeling Density for Image Dehazing
        </strong>
        </papertitle><br>
        <div>
        <span class="paper-tag tag-method">Novel Attention for Image Restoration</span>
        <span class="paper-tag tag-application">New Perspective for Image Dehazing</span>
        </div>
        Tian Ye*, Mingchao Jiang*, Yunchen Zhang*, Liang Chen, Yun Liu, <strong><u>Sixiang Chen</u></strong>, Erkang Chen<sup>✉️</sup>.
        <br>  
        <em>European Conference on Computer Vision <strong>(ECCV Oral)</strong></em>, 2022
        <br>
        <a href="https://link.springer.com/chapter/10.1007/978-3-031-19800-7_8" class="custom-link—paper">[Paper]</a>
        <a href="https://github.com/Owen718/ECCV22-Perceiving-and-Modeling-Density-for-Image-Dehazing" class="custom-link—code">[Code]</a>
      </td>
      </tr>

  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
  <tr>
        <td style="margin:5px;padding:5px;width:35%;max-width:40%" align="center" class="image-wrapper" data-description="CVPRW'2022">
        <img style="margin:1px;padding-right:20px;width:100%;max-width:100%" src="https://ephemeral182.github.io/images/CVPRW.png" alt="dise"> 
        </td>
      <td width="75%" valign="center" class="text-wrapper"> 
        <papertitle>
        <strong>
          Underwater Light Field Retention: Neural Rendering for Underwater Imaging
        </strong>
        </papertitle><br>
        <div>
        <span class="paper-tag tag-method">Neural Rendering for Image Generation</span>
        <span class="paper-tag tag-application">Light Field Retention, New Benchmark</span>
        </div>
        Tian Ye*, <strong><u>Sixiang Chen*</u></strong>, Yun Liu, Yi Ye, Erkang Chen<sup>✉️</sup>, Yuche Li.
        <br>  
        <em>Conference on Computer Vision and Pattern Recognition Workshop <strong>(CVPRW)</strong></em>, 2022
        <br>
        <a href="https://ieeexplore.ieee.org/document/9857150" class="custom-link—paper">[Paper]</a>
        <a href="https://github.com/Ephemeral182/UWNR" class="custom-link—code">[Code]</a>
      </td>
      </tr>
  </tbody>
</table>
<!-- </div> -->

<!-- # Publications -->

<!-- 7&nbsp; ***CVPR*** / ***ICCV*** / ***ECCV*** /  ***NeurIPS*** &nbsp;&nbsp;&nbsp;5&nbsp; ***AAAI*** / ***IJCAI*** / ***ACM MM*** &nbsp;&nbsp;&nbsp; 1&nbsp; ***MICCAI*** &nbsp;&nbsp;&nbsp; 1&nbsp; ***CVPRW*** / ***ICCVW*** / ***ECCVW*** &nbsp;&nbsp;&nbsp;2&nbsp; ***ACCV*** / ***BMVC*** &nbsp;&nbsp;&nbsp;2&nbsp; ***ICME*** / ***ICASSP*** &nbsp;&nbsp;&nbsp; -->

<!-- =================================================================================== -->







<!-- =================================================================================== -->



<!-- --- -->

<script>
// 鼠标流光特效
document.addEventListener('DOMContentLoaded', function() {
  // 创建粒子
  function createParticle(x, y, size) {
    const particle = document.createElement('div');
    particle.className = 'mouse-particle'; // 确保 CSS 中有 .mouse-particle 样式

    // 随机大小变化
    const actualSize = size * (0.5 + Math.random() * 0.5);
    particle.style.width = actualSize + 'px';
    particle.style.height = actualSize + 'px';

    // 彩虹渐变效果 - 随机选择一个起始色相 (如果需要，可以改回原来的金色)
    const hue = Math.floor(Math.random() * 360);
    particle.style.background = `hsla(${hue}, 80%, 60%, 0.25)`;
    particle.style.boxShadow = `0 0 10px hsla(${hue}, 80%, 50%, 0.3)`;
    // 或者使用原来的金色:
    // particle.style.background = 'rgba(255, 215, 0, 0.25)';
    // particle.style.boxShadow = '0 0 10px rgba(207, 187, 74, 0.3)';


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
        // 安全移除，检查父节点是否存在
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
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
    }, 10); // 可以调整这个值来改变粒子密度

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

  // 创建动态背景圆形
  function createBackgroundCircles() {
    const bg = document.querySelector('.dynamic-bg');
    const colors = [
      'rgba(33, 150, 243, 0.03)',  // 蓝色
      'rgba(0, 188, 212, 0.03)',   // 青色
      'rgba(76, 175, 80, 0.03)',   // 绿色
      'rgba(156, 39, 176, 0.03)'   // 紫色
    ];
    
    for (let i = 0; i < 6; i++) {
      const circle = document.createElement('div');
      circle.className = 'bg-circle';
      
      // 随机大小和位置
      const size = Math.random() * 30 + 20;
      circle.style.width = size + 'vw';
      circle.style.height = size + 'vw';
      circle.style.left = Math.random() * 100 + 'vw';
      circle.style.top = Math.random() * 100 + 'vh';
      
      // 随机颜色
      circle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      // 随机动画延迟
      circle.style.animationDelay = (Math.random() * 5) + 's';
      circle.style.animationDuration = (Math.random() * 10 + 15) + 's';
      
      bg.appendChild(circle);
    }
  }
  
  createBackgroundCircles();
  
  // 页面滚动时添加视差效果
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const circles = document.querySelectorAll('.bg-circle');
    
    circles.forEach((circle, index) => {
      const speed = 0.05 + (index % 3) * 0.02;
      circle.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
});

// 添加到页面底部的脚本
document.addEventListener('DOMContentLoaded', function() {
  // 创建科技连线网络背景
  function createTechNetwork() {
    const container = document.createElement('div');
    container.className = 'dynamic-bg';
    
    // 添加网格
    const grid = document.createElement('div');
    grid.className = 'tech-grid';
    container.appendChild(grid);
    
    // 添加节点容器
    const nodesContainer = document.createElement('div');
    nodesContainer.id = 'nodes-container';
    container.appendChild(nodesContainer);
    
    document.body.prepend(container);
    
    // 创建节点和连线
    initNodes();
  }
  
  function initNodes() {
    const container = document.getElementById('nodes-container');
    if (!container) {
      console.error('节点容器未找到');
      return;
    }

    const nodeCount = 30; // 节点数量
    const nodes = [];
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);
    
    // 创建节点
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      node.className = 'node';
      
      // 随机位置
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      node.style.left = x + 'px';
      node.style.top = y + 'px';
      
      // 随机速度
      const vx = (Math.random() - 0.5) * 0.5;
      const vy = (Math.random() - 0.5) * 0.5;
      
      nodes.push({
        element: node,
        x: x,
        y: y,
        vx: vx,
        vy: vy
      });
      
      container.appendChild(node);
    }
    
    // 动画循环
    function animate() {
      // 清除画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 更新节点位置
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // 边界检测
        if (node.x < 0 || node.x > window.innerWidth) node.vx *= -1;
        if (node.y < 0 || node.y > window.innerHeight) node.vy *= -1;
        
        // 更新DOM位置
        node.element.style.transform = `translate(${node.x}px, ${node.y}px)`;
        
        // 绘制连线
        nodes.forEach(otherNode => {
          if (node === otherNode) return;
          
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // 只连接一定距离内的节点
          if (distance < 200) {
            // 距离越远，线越透明
            const opacity = 1 - distance / 200;
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(33, 150, 243, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // 响应窗口大小变化
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    
    // 鼠标交互 - 靠近鼠标的节点会被吸引
    document.addEventListener('mousemove', (e) => { // 注意：这里也有一个 mousemove 监听器
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      nodes.forEach(node => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          // 计算吸引力
          const force = 0.2 * (1 - distance / 150);
          // 稍微减弱吸引力，避免与粒子效果冲突感太强
          node.vx += dx * force * 0.005;
          node.vy += dy * force * 0.005;
          
          // 限制最大速度
          const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
          if (speed > 1) { // 减小最大速度
            node.vx = (node.vx / speed) * 1;
            node.vy = (node.vy / speed) * 1;
          }
        }
      });
    }); // 结束 tech network 的 mousemove 监听器
  }
  
  // 初始化背景
  createTechNetwork();
  
  // 滚动时添加视差效果
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const container = document.querySelector('.dynamic-bg');
    
    if (container) {
      container.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
  });
});
</script>


