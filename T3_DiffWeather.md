---
layout: post1
permalink: /T3-DiffWeather/index.html #/publications.html
title: T3_DiffWeather
---

  <link rel="stylesheet" href="assets/css/bulma-carousel.min.css">
  <link rel="stylesheet" href="assets/css/bulma-slider.min.css">
  <link rel="stylesheet" href="assets/css/fontawesome.all.min.css">
  <link rel="stylesheet" href="assets/css/academicons.min.css">
  <link rel="stylesheet" href="assets/css/index.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">
<style>
body {
  background-color: #1a3c6e; /* 深蓝色背景 */
  color: #ffffff; /* 白色文字，确保可读性 */
}
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
.cursor-shadow {
  position: absolute; /* 改为绝对定位 */
  pointer-events: none;
  width: 30px; /* 调整光标宽度 */
  height: 30px; /* 调整光标高度 */
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4); /* 留影效果的颜色 */
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3); /* 增加阴影效果 */
  transform: translate(-50%, -50%);
  transition: background 0.3s ease, transform 0.2s ease; /* 添加变换效果 */
  opacity: 1; /* 确保留影始终可见 */
}
.cursor-shadow:hover {
  background: rgba(255, 255, 255, 0.7);
  transform: translate(-50%, -50%) scale(1.1); /* 鼠标悬停时放大 */
}
</style>

<script>
  // 创建光标元素
  const cursor = document.createElement('div');
  cursor.classList.add('cursor-shadow');
  document.body.appendChild(cursor);

  // 更新光标位置
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px'; // 保持光标位置与鼠标一致
  });
</script>
  <!-- <link rel="icon" href="./static/images/favicon.svg"> -->

<h2 class="post-title" style="line-height: 1.3; margin-bottom: 20px; font-size: 1.6em;">
  <span style="color: #228be6; display: block; text-align: center; margin-bottom: 7px; font-size: 1.2em;">Teaching Tailored to Talent:</span>
  <span style="display: block; text-align: center; font-size: 1.1em;">Adverse Weather Restoration via Prompt Pool and Depth-Anything Constraint</span>
</h2>
<!-- <h2 class="post-title" style="margin-bottom:20px;margin-top:7px;">Unified Removal of Raindrops and Rain Streaks</h2>  -->

<div class="post-authors" style="margin-bottom:5px;">
<a href="https://ephemeral182.github.io" style="color: #228be6;">Sixiang Chen</a><sup>1</sup>&nbsp;&nbsp;&nbsp; <a href="https://owen718.github.io" style="color: #228be6;">Tian Ye</a><sup>1</sup>&nbsp;&nbsp;&nbsp;
Kai Zhang<sup>1</sup>&nbsp;&nbsp;&nbsp;
<a href="https://ge-xing.github.io/" style="color: #228be6;">Zhaohu Xing</a><sup>1</sup>&nbsp;&nbsp;&nbsp;
<a href="https://lyl1015.github.io/" style="color: #228be6;">Yunlong Lin</a><sup>2</sup>&nbsp;&nbsp;&nbsp;
<a href="https://sites.google.com/site/indexlzhu/home" style="color: #228be6;">Lei Zhu</a><sup>1,3 ✉️</sup>&nbsp;&nbsp;&nbsp;
<br>
<sup>1</sup>The Hong Kong University of Science and Technology (Guangzhou)&nbsp;&nbsp;&nbsp;
<sup>2</sup>Xiamen University&nbsp;&nbsp;&nbsp;<br>
<sup>3</sup>The Hong Kong University of Science and Technology&nbsp;&nbsp;&nbsp;         


<div class="post-authors" style="margin-bottom:20px;">

European Conference on Computer Vision <strong>(ECCV)</strong>, 2024, MiCo Milano
</div>


<div style="margin-bottom: 0.7em;" class="post-authors">
                <div class="col-md-8 col-md-offset-2 text-center">
                    <ul class="nav nav-pills nav-justified">
                        <li>
                            <a href="https://arxiv.org/abs/2409.15739" style="color: #ffffff;">
                            <!-- <a href="https://arxiv.org/abs/2112.05504"> -->
                            <img class="post-logo" src="https://ephemeral182.github.io/images/paper.jpg" height="50px">
                                <h5 style="color: #ffffff;"><strong>arXiv</strong></h5>
                            </a>
                        </li>
                        <li>
                             <a href="https://arxiv.org/abs/2409.15739" style="color: #ffffff;">
                            <img class="post-logo" src="https://ephemeral182.github.io/images/paper.jpg" height="50px">
                                <h5 style="color: #ffffff;"><strong>ECCV 2024</strong></h5>
                            </a>
                        </li>
                        <li>
                             <a href="https://github.com/Ephemeral182/ECCV24_T3-DiffWeather" style="color: #ffffff;">
                            <img class="post-logo" src="https://ephemeral182.github.io/images/datatset.jpg" height="50px">
                                <h5 style="color: #ffffff;"><strong>Dataset</strong></h5>
                            </a>
                        </li>                        
                        <li>
                            <a href="https://github.com/Ephemeral182/ECCV24_T3-DiffWeather" style="color: #ffffff;">
                            <img class="post-logo" src="https://ephemeral182.github.io/images/github.png" height="50px">
                                <h5 style="color: #ffffff;"><strong>Code</strong></h5>
                            </a>
                        </li>
                        <li>
                             <a href="https://arxiv.org/abs/2409.15739" style="color: #ffffff;">
                            <img class="post-logo" src="https://ephemeral182.github.io/images/supplementary.jpg" height="50px">
                                <h5 style="color: #ffffff;"><strong>Supplementery</strong></h5>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>

<div class="post-line"></div>

<!-- <div style="box-shadow:3px 6px 13px 0px  rgba(0,0,0,0.5)">
<div class="post-img-group">
    <img class="post-img" style="left:0;right:0;margin-bottom:0px;max-width:50%" src="https://ephemeral182.github.io/images/real_gif1.gif" alt="Left Image">
    <img class="post-img" style="left:0;right:0;margin-bottom:0px;max-width:50%" src="https://ephemeral182.github.io/images/real_gif2.gif" alt="Right Image">
  </div> 
  <div class="post-img-group">
    <img class="post-img" style="left:0;right:0;margin-bottom:0;width:100%" src="https://ephemeral182.github.io/images/350.gif" alt="Left Image">
  </div> 
  </div>  -->


<div class="fade-in">
  <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">
    <!-- First Image Set -->
    <div style="position: relative; width: 50%; max-width: 400px; height: 300px; overflow: hidden;">
      <img src="https://ephemeral182.github.io/images/eccv_24/ban1_clean.jpg" style="width: 100%; height: 100%; display: block;" alt="Clean Image">
      <div style="position: absolute; top: 0; left: 0; width: 50%; height: 100%; overflow: hidden;">
        <img src="https://ephemeral182.github.io/images/eccv_24/ban1_deg.jpg" style="width: 200%; max-width: none; height: 100%; display: block;" alt="Degraded Image">
      </div>
      <div style="position: absolute; top: 0; left: 50%; width: 4px; height: 100%; background: rgba(255,255,255,0.7);"></div>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 40px; height: 40px; background: rgba(255,255,255,0.7); border-radius: 50%; display: flex; justify-content: center; align-items: center;">
        <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-right: 10px solid #333; margin-right: 5px;"></div>
        <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 10px solid #333; margin-left: 5px;"></div>
      </div>
    </div>

<!-- Second Image Set -->
  <div style="position: relative; width: 50%; max-width: 400px; height: 300px; overflow: hidden;">
      <img src="https://ephemeral182.github.io/images/eccv_24/ban2_clean.jpg" style="width: 100%; height: 100%; display: block;" alt="Clean Image 2">
      <div style="position: absolute; top: 0; left: 0; width: 50%; height: 100%; overflow: hidden;">
        <img src="https://ephemeral182.github.io/images/eccv_24/ban2_deg.jpg" style="width: 200%; max-width: none; height: 100%; display: block;" alt="Degraded Image 2">
      </div>
      <div style="position: absolute; top: 0; left: 50%; width: 4px; height: 100%; background: rgba(255,255,255,0.7);"></div>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 40px; height: 40px; background: rgba(255,255,255,0.7); border-radius: 50%; display: flex; justify-content: center; align-items: center;">
        <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-right: 10px solid #333; margin-right: 5px;"></div>
        <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 10px solid #333; margin-left: 5px;"></div>
      </div>
    </div>
  </div>

  <!-- Caption -->
  <div style="text-align: center; font-style: italic; color: #666; margin-bottom: 20px;">
    Left: Input Image, Right: Our Result
  </div>
</div>




  <!-- <div class="post-img-group">
    <img class="post-img" src="../assets/img/VideoDesnowing/1.gif" alt="Left Image">
    <img class="post-img" src="../assets/img/VideoDesnowing/2.gif" alt="Right Image">
  </div> -->

<!-- <img src="../assets/img/VideoDesnowing/1.gif" class="post-img" role="img"> -->


<div class="fade-in" style="background-color:#f0f1f3a6; margin-bottom: 30px; border-radius: 10px;">
  <h2 class="post-section" style="
      text-align: center;
      margin-bottom: 0px;
      padding-top: 20px;
      color: #333;
      font-weight: 600;
  ">Abstract</h2>
  <p style="
      padding: 25px;
      padding-top: 10px;
      line-height: 1.6;
      color: #444;
      text-align: left;
  ">
    Recent advancements in adverse weather restoration have shown potential, yet the unpredictable and varied combinations of weather degradations in the real world pose significant challenges. Previous methods typically struggle with dynamically handling intricate degradation combinations and carrying on background reconstruction precisely, leading to performance and generalization limitations. Drawing inspiration from prompt learning and the "<u>T</u>eaching <u>T</u>ailored to <u>T</u>alent" concept, we introduce a novel pipeline, <i><strong>T<sup>3</sup>-DiffWeather</strong></i>. Specifically, we employ a prompt pool that allows the network to autonomously combine sub-prompts to construct weather-prompts, harnessing the necessary attributes to adaptively tackle unforeseen weather input. Moreover, from a scene modeling perspective, we incorporate general prompts constrained by Depth-Anything feature to provide the scene-specific condition for the diffusion process. Furthermore, by incorporating contrastive prompt loss, we ensures distinctive representations for both types of prompts by a mutual pushing strategy. Experimental results demonstrate that our method achieves state-of-the-art performance across various synthetic and real-world datasets, markedly outperforming existing diffusion techniques in terms of computational efficiency.
  </p>
</div>


<div class="fade-in">
  <h2 class="post-section" style="
      text-align: center;
      padding-left: 25px;
      color: #228be6;
      margin-bottom: 10px;
      padding-top: 20px;
  ">Observations</h2>
  <div class="post-img-group" style="width: 100%; overflow: hidden;">
    <img class="post-img" style="width: 100%; height: auto; display: block;" src="https://ephemeral182.github.io/images/eccv_24/observation1.png" alt="Method Overview">
  </div>
  <div style="background-color:#f0f1f3a6; margin-bottom: 30px; border-radius: 10px; padding: 20px; text-align: center; font-family: 'Arial', sans-serif; font-size: 14px; color: #444; width: 100%; box-sizing: border-box;">
    <strong>Figure 1. t-SNE visualization of different feature distributions.</strong>  (a). Scenes with different contents also have significant commonalities compared to degradations. And there are some differences and commonalities between degradations and degradations. (b). Degradation residuals can represent degradations to a certain extent and be distinguished from the background. 
  </div>
  
  <!-- {{ edit_1 }} -->
  
  <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">
    <div style="position: relative; width: 70%; max-width: 560px; height: 200px; overflow: hidden;"> <!-- 调整左边图的宽度 -->
      <img src="https://ephemeral182.github.io/images/eccv_24/prompt_pool.png" style="width: 100%; height: 100%; display: block;" alt="Sub-Prompt Selection">
    </div>
    <div style="position: relative; width: 30%; max-width: 240px; height: 200px; overflow: hidden;"> <!-- 调整右边图的宽度 -->
      <img src="https://ephemeral182.github.io/images/eccv_24/depth.png" style="width: 100%; height: 100%; display: block;" alt="Weather-Prompt Visualization">
    </div>
  </div>
  <div style="background-color:#f0f1f3a6; margin-bottom: 20px; border-radius: 10px; padding: 20px; text-align: center; color: #333;"> <!-- 修改字体颜色 --> <!-- 添加背景 -->
     <strong>Left Figure: The selection frequency of sub-prompts.</strong> Some similar selection frequencies reflect the network's ability to adaptively exploit common attributes in some similarity between tasks (e.g. rain and raindrop). At the same time, the unique prompt frequencies highlight the flexibility to adapt to the specific characteristics of each weather condition. <br>
     <strong>Mid Figure: t-SNE visualization of weather-prompts for different weather conditions.</strong>
    <br>
    <strong>Right Figure: Motivation of Depth-Anything as a constraint.</strong> Depth-Anything has degradation-independent performance, and the intermediate features have better robustness than the previous pre-trained network.
  </div>


<div class="fade-in">
  <h2 class="post-section" style="
      text-align: center;
      padding-left: 25px;
      color: #228be6;
      margin-bottom: 10px;
      padding-top: 20px;
  ">Method</h2>
  <div class="post-img-group" style="width: 100%; overflow: hidden;">
    <img class="post-img" style="width: 100%; height: auto; display: block;" src="https://ephemeral182.github.io/images/eccv_24/eccv_adverse_overview.png" alt="Method Overview">
  </div>
  <div style="background-color:#f0f1f3a6; margin-bottom: 30px; border-radius: 10px; padding: 20px; text-align: center; font-family: 'Arial', sans-serif; font-size: 14px; color: #444; width: 100%; box-sizing: border-box;">
    <strong>Figure 3. The overview of proposed method.</strong>  (a) showcases our pipeline, which adopts an innovative strategy focused on learning degradation residual and employs the information-rich condition to guide the diffusion process. (b) illustrates the utilization of our prompt pool, which empowers the network to autonomously select attributes needed to construct adaptive weather-prompts. (c) depicts the general prompts directed by Depth-Anything constraint to supply scene information that aids in reconstructing residuals. (d) shows the contrastive prompt loss, which exerts constraints on prompts driven by two distinct motivations, enhancing their representations.
  </div>
</div>






<div class="fade-in">
<h2 class="post-section" style="
    text-align: center;
    padding-left: 25px;
    color: #228be6;
    margin-bottom: 10px;
    padding-top: 20px;
">Quantitative Comparison</h2>
<!-- <div style="box-shadow:3px 6px 13px 0px  rgba(0,0,0,0.5)"> -->
  <div class="post-img-group">
    <img class="post-img" style="max-width:100%;margin-bottom:0;" src="https://ephemeral182.github.io/images/eccv_24/eccv_adverse_metric.png"  alt="Left Image">
  </div>
  <!-- </div> -->
  <!-- </div> -->

<style>
.scroll-container {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 10px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
  position: relative;
}

.scroll-container::-webkit-scrollbar {
  height: 10px;
}

.scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.scroll-content {
  display: inline-flex;
  padding: 10px 0;
}

.scroll-content img {
  height: 300px;
  margin-right: 20px;
  flex-shrink: 0;
}

.scroll-hint {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}

.scroll-instruction {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-bottom: 20px;
}
</style>

<div class="fade-in">
  <h2 class="post-section" style="
      text-align: center;
      padding-left: 25px;
      color: #228be6;
      margin-bottom: 10px;
      padding-top: 20px;
  ">Visual Comparison</h2>
  <div class="scroll-container">
    <div class="scroll-content">
      <img src="https://ephemeral182.github.io/images/eccv_24/eccv_adverse_syn.png" alt="Image 1">
      <img src="https://ephemeral182.github.io/images/eccv_24/eccv_adverse_real.png" alt="Image 2">
      <img src="https://ephemeral182.github.io/images/eccv_24/visual_real_comparison2.png" alt="Image 3">
      <img src="https://ephemeral182.github.io/images/eccv_24/visual_real_comparison3.png" alt="Image 4">
      <img src="https://ephemeral182.github.io/images/eccv_24/visual_real_comparison4.png" alt="Image 5">
      <img src="https://ephemeral182.github.io/images/eccv_24/visual_real_comparison5.png" alt="Image 6">
    </div>
    <div class="scroll-hint">Scroll ➜</div>
  </div>
  <div class="scroll-instruction">Scroll horizontally to view more images</div>
</div>


<div class="fade-in">
  <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">
    <!-- First Image Set -->
    <div style="position: relative; width: 50%; max-width: 400px; height: 300px; overflow: hidden;">
      <img src="https://ephemeral182.github.io/images/eccv_24/ban3_clean.jpg" style="width: 100%; height: 100%; display: block;" alt="Clean Image">
      <div style="position: absolute; top: 0; left: 0; width: 50%; height: 100%; overflow: hidden;">
        <img src="https://ephemeral182.github.io/images/eccv_24/ban3_deg.jpg" style="width: 200%; max-width: none; height: 100%; display: block;" alt="Degraded Image">
      </div>
      <div style="position: absolute; top: 0; left: 50%; width: 4px; height: 100%; background: rgba(255,255,255,0.7);"></div>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 40px; height: 40px; background: rgba(255,255,255,0.7); border-radius: 50%; display: flex; justify-content: center; align-items: center;">
        <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-right: 10px solid #333; margin-right: 5px;"></div>
        <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 10px solid #333; margin-left: 5px;"></div>
      </div>
    </div>

<!-- Second Image Set -->
  <div style="position: relative; width: 50%; max-width: 400px; height: 300px; overflow: hidden;">
      <img src="https://ephemeral182.github.io/images/eccv_24/ban4_clean.jpg" style="width: 100%; height: 100%; display: block;" alt="Clean Image 2">
      <div style="position: absolute; top: 0; left: 0; width: 50%; height: 100%; overflow: hidden;">
        <img src="https://ephemeral182.github.io/images/eccv_24/ban4_deg.jpg" style="width: 200%; max-width: none; height: 100%; display: block;" alt="Degraded Image 2">
      </div>
      <div style="position: absolute; top: 0; left: 50%; width: 4px; height: 100%; background: rgba(255,255,255,0.7);"></div>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 40px; height: 40px; background: rgba(255,255,255,0.7); border-radius: 50%; display: flex; justify-content: center; align-items: center;">
        <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-right: 10px solid #333; margin-right: 5px;"></div>
        <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 10px solid #333; margin-left: 5px;"></div>
      </div>
    </div>
  </div>

  <!-- Caption -->
  <div style="text-align: center; font-style: italic; color: #666; margin-bottom: 20px;">
    Left: Input Image, Right: Our Result
  </div>
</div>

<div class="fade-in">
  <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">
    <!-- First Image Set -->
    <div style="position: relative; width: 50%; max-width: 400px; height: 300px; overflow: hidden;">
      <img src="https://ephemeral182.github.io/images/eccv_24/ban7_clean.jpg" style="width: 100%; height: 100%; display: block;" alt="Clean Image">
      <div style="position: absolute; top: 0; left: 0; width: 50%; height: 100%; overflow: hidden;">
        <img src="https://ephemeral182.github.io/images/eccv_24/ban7_deg.jpg" style="width: 200%; max-width: none; height: 100%; display: block;" alt="Degraded Image">
      </div>
      <div style="position: absolute; top: 0; left: 50%; width: 4px; height: 100%; background: rgba(255,255,255,0.7);"></div>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 40px; height: 40px; background: rgba(255,255,255,0.7); border-radius: 50%; display: flex; justify-content: center; align-items: center;">
        <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-right: 10px solid #333; margin-right: 5px;"></div>
        <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 10px solid #333; margin-left: 5px;"></div>
      </div>
    </div>

<!-- Second Image Set -->
  <div style="position: relative; width: 50%; max-width: 400px; height: 300px; overflow: hidden;">
      <img src="https://ephemeral182.github.io/images/eccv_24/ban6_clean.jpg" style="width: 100%; height: 100%; display: block;" alt="Clean Image 2">
      <div style="position: absolute; top: 0; left: 0; width: 50%; height: 100%; overflow: hidden;">
        <img src="https://ephemeral182.github.io/images/eccv_24/ban6_deg.jpg" style="width: 200%; max-width: none; height: 100%; display: block;" alt="Degraded Image 2">
      </div>
      <div style="position: absolute; top: 0; left: 50%; width: 4px; height: 100%; background: rgba(255,255,255,0.7);"></div>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 40px; height: 40px; background: rgba(255,255,255,0.7); border-radius: 50%; display: flex; justify-content: center; align-items: center;">
        <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-right: 10px solid #333; margin-right: 5px;"></div>
        <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 10px solid #333; margin-left: 5px;"></div>
      </div>
    </div>
  </div>

  <!-- Caption -->
  <div style="text-align: center; font-style: italic; color: #666; margin-bottom: 20px;">
    Left: Input Image, Right: Our Result
  </div>
</div>

<!-- </div> -->
<!-- </div> -->

<!-- <div style="box-shadow:3px 6px 13px 0px  rgba(0,0,0,0.5)">
<div class="post-img-group">
<img style="padding: 10px; width: 450;text-align: left;" frameborder="0" class="juxtapose" height="455" width="600" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=ae97ac46-3ea2-11ee-b5bd-6595d9b17862">
<img style="padding: 10px; width: 450;text-align: right;" frameborder="0" class="juxtapose" height="455" width="600" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=5b6cf096-3e7d-11ee-b5bd-6595d9b17862">
</div> 
</div>  -->

<!-- <div style="box-shadow:3px 6px 13px 0px  rgba(0,0,0,0.5)">
<div class="post-img-group">
    <img class="post-img" style="left:0;right:0;margin-bottom:0px;max-width:50%;height:70" src="https://ephemeral182.github.io/images/real3.gif" alt="Left Image"><!--&nbsp;&nbsp;
    <img class="post-img" style="left:0;right:0;margin-bottom:0px;max-width:50%;height:70" src="https://ephemeral182.github.io/images/real4.gif" alt="Right Image">
  </div> 
</div>  -->

<!-- <h2 class="post-section"  style="font-weight:300;"><strong>R</strong>ealistic <strong>V</strong>ideo De<strong>S</strong>nowing <strong>D</strong>ataset</h2>

- <strong>RVSD</strong> contains a total of 110 pairs of videos. 
- Each pair contains <strong>snowy</strong> and  <strong>hazy</strong> videos and corresponding snow-free and haze-free ground truth videos. 
- We use a rendering engine (Unreal Engine 5) and various augmentation techniques to generate snow and haze with diverse and realistic physical properties. This results in more realistic and varied synthesized videos, which improve the model's performance on real-world data. 



<div class="post-section"  style="font-weight:700;">Download</div>
<!-- <div style="font-weight:300;">Train (100 videos):  [Google Drive]  [Baidu Netdisk (password: 7t74)]</div>
<div style="font-weight:300;">Test (20 videos):  [Google Drive]  [Baidu Netdisk (password: 7t74)] </div> -->



<!-- - **Train (80 videos):**  
    [Google Drive]  [Baidu Netdisk (password: 7t74)]
- **Test (30 videos):**  
    [Google Drive]  [Baidu Netdisk (password: 7t74)] --> 

<h2 class="post-section" style="color:#228be6;">Citation</h2>

<pre style="text-align: left;">
@InProceedings{chen2024teaching,
    title     = {Teaching Tailored to Talent: Adverse Weather Restoration via Prompt Pool and Depth-Anything Constraint},
    author    = {Chen, Sixiang and Ye, Tian and Zhang, Kai and Xing, Zhaohu and Lin, Yunlong and Zhu, Lei}, 
    booktitle = {European conference on computer vision},
    year      = {2024},
    organization={Springer}
}
</pre>

<script>
  function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight * 0.75) {
        element.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
</script>