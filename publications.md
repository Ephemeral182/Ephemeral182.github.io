---
layout: fancy_home
permalink: /publications/
title: Publications
---

<div class="pub-container">
  <section class="intro">
    <div class="intro-text">
      <p class="eyebrow">§ Publications — Research Snapshot</p>
      <h1>Agentic Reasoning &amp; <em>Unified Vision Models</em></h1>
      <p>My research centers on <strong>Multi-modal Agentic RL</strong>, <strong>Unified Models</strong>, and <strong>Reward Modeling</strong> — designing large-scale <em>post-training</em> recipes that align unified generation models with human preferences, and building agents that reason, retrieve, and self-evolve by interacting with real-world tools and visual experience. My work has long lived in <strong>visual generation</strong>: <strong>GenEvolve</strong> pushes agentic visual reasoning over unified models; <strong>PosterCraft</strong>, <strong>PosterOmni</strong>, and <strong>PosterReward</strong> turn unified generation and reward-driven post-training into dependable creative tools.</p>
      <div class="intro-tags">
        <span>Agentic RL</span>
        <span>Unified Models</span>
        <span>Reward Modeling</span>
        <span>Post-training</span>
        <span>Image Generation</span>
      </div>
    </div>
    <div class="intro-counters">
      <div class="counter-card">
        <div class="counter-value">11</div>
        <div class="counter-label">CVPR / ICCV / ECCV</div>
      </div>
      <div class="counter-card">
        <div class="counter-value">2</div>
        <div class="counter-label">NeurIPS / ICLR / ICML</div>
      </div>
      <div class="counter-card">
        <div class="counter-value">10</div>
        <div class="counter-label">AAAI / IJCAI / ACM MM</div>
      </div>
    </div>
  </section>

  <section class="highlight-block">
    <div class="section-header">
      <h2>Highlight <em>Research</em></h2>
    </div>

    <div class="highlight-list">
      <article class="highlight-card">
        <div class="highlight-media">
          <img src="/GenEvolve/static/images/teaser_genevolve.jpg" alt="GenEvolve teaser">
          <span class="badge badge-cyan">arXiv 2026</span>
        </div>
        <div class="highlight-content">
          <h3>GenEvolve — Self-Evolving Image Generation Agents via Tool-Orchestrated Visual Experience Distillation</h3>
          <p class="authors"><strong>Sixiang Chen</strong>, Zhaohu Xing, Tian Ye, Xinyu Geng, Yunlong Lin, Jianyu Lai, Xuanhua He, Fuxiang Zhai, Jialin Gao, Lei Zhu✉️</p>
          <p class="summary">A self-evolving image-generation agent that orchestrates external search, visual references, and generation knowledge into prompt-reference programs, then improves through tool-orchestrated visual experience distillation.</p>
          <div class="resource-list">
            <a href="https://ephemeral182.github.io/GenEvolve/">Project</a>
            <a href="https://github.com/MeiGen-AI/GenEvolve" target="_blank" rel="noopener">GitHub</a>
            <a href="https://huggingface.co/MeiGen-AI/GenEvolve">Model</a>
            <a href="https://huggingface.co/datasets/MeiGen-AI/GenEvolve-Data-Bench">Dataset</a>
            <span class="gh-btn-wrap">
              <iframe src="https://ghbtns.com/github-btn.html?user=MeiGen-AI&repo=GenEvolve&type=star&count=true&size=small" frameborder="0" scrolling="0" width="100" height="20" title="GenEvolve GitHub Star"></iframe>
            </span>
            <span class="gh-btn-wrap">
              <iframe src="https://ghbtns.com/github-btn.html?user=MeiGen-AI&repo=GenEvolve&type=fork&count=true&size=small" frameborder="0" scrolling="0" width="98" height="20" title="GenEvolve GitHub Fork"></iframe>
            </span>
          </div>
        </div>
      </article>

      <article class="highlight-card">
        <div class="highlight-media">
          <img src="https://ephemeral182.github.io/images/posteromni/teaser_0209.jpg" alt="PosterOmni teaser">
          <span class="badge badge-cyan">CVPR 2026</span>
        </div>
        <div class="highlight-content">
          <h3>PosterOmni — Generalized Artistic Poster Creation via Task Distillation and Unified Reward Feedback</h3>
          <p class="authors"><strong>Sixiang Chen*</strong>, Jianyu Lai*, Jialin Gao*, Hengyu Shi*, Zhongying Liu*, Tian Ye, Junfeng Luo, Xiaoming Wei, Lei Zhu✉️</p>
          <p class="summary">One model for poster creation—unifying local edits and global design for generalized multi-task image/poster-to-poster generation. Your intelligent assistant for high-quality aesthetic poster creation!</p>
          <div class="resource-list">
            <a href="https://arxiv.org/abs/2602.12127">PDF</a>
            <a href="https://ephemeral182.github.io/PosterOmni/">Project</a>
            <a href="https://huggingface.co/MeiGen-AI/PosterOmni_v1">Model</a>
            <a href="https://github.com/MeiGen-AI/PosterOmni" target="_blank" rel="noopener">GitHub</a>
            <span class="gh-btn-wrap">
              <iframe src="https://ghbtns.com/github-btn.html?user=MeiGen-AI&repo=PosterOmni&type=star&count=true&size=small" frameborder="0" scrolling="0" width="100" height="20" title="PosterOmni GitHub Star"></iframe>
            </span>
            <span class="gh-btn-wrap">
              <iframe src="https://ghbtns.com/github-btn.html?user=MeiGen-AI&repo=PosterOmni&type=fork&count=true&size=small" frameborder="0" scrolling="0" width="98" height="20" title="PosterOmni GitHub Fork"></iframe>
            </span>
          </div>
        </div>
      </article>

      <article class="highlight-card">
        <div class="highlight-media">
          <img src="https://ephemeral182.github.io/images/posterreward/teaser2.png" alt="PosterReward">
          <span class="badge badge-cyan">CVPR 2026</span>
        </div>
        <div class="highlight-content">
          <h3>PosterReward: Unlocking Accurate Evaluation for High-Quality Graphic Design Generation</h3>
          <p class="authors">Jianyu Lai*, <strong>Sixiang Chen*</strong>, Jialin Gao*, Hengyu Shi, Zhongying Liu, Fuxiang Zhai, Junfeng Luo, Xiaoming Wei, Lujia Wang, Lei Zhu✉️</p>
          <p class="summary">A comprehensive reward model for design aesthetics and typography, trained on a automated preference dataset to unlock accurate evaluation for high-quality graphic design generation.</p>
          <div class="resource-list">
            <a href="https://alexlai2860.github.io/PosterReward/">Project</a>
            <a href="https://github.com/MeiGen-AI/PosterReward" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      </article>

      <article class="highlight-card">
        <div class="highlight-media">
          <img src="https://ephemeral182.github.io/images/postercraft/pub/fig1.png" alt="PosterCraft">
          <span class="badge badge-green">ICLR 2026</span>
        </div>
        <div class="highlight-content">
          <h3>PosterCraft — Rethinking High-Quality Aesthetic Poster Generation in a Unified Framework</h3>
          <p class="authors"><strong>Sixiang Chen*</strong>, Jianyu Lai*, Jialin Gao*, Tian Ye, Haoyu Chen, Hengyu Shi, Shitong Shao, Yunlong Lin, Song Fei, Zhaohu Xing, Yeying Jin, Junfeng Luo, Xiaoming Wei, Lei Zhu✉️</p>
          <p class="summary">A new framework for "Rethinking High-Quality Aesthetic Poster Generation in a Unified Framework". From your prompts to high-quality aesthetic posters!</p>
          <div class="resource-list">
            <a href="https://arxiv.org/abs/2506.10741">PDF</a>
            <a href="https://ephemeral182.github.io/PosterCraft/">Project</a>
            <a href="https://huggingface.co/spaces/Ephemeral182/PosterCraft">Demo</a>
            <a href="https://huggingface.co/PosterCraft/PosterCraft-v1_RL">Model</a>
            <a href="https://huggingface.co/PosterCraft">Dataset</a>
            <a href="https://github.com/Ephemeral182/PosterCraft" target="_blank" rel="noopener">GitHub</a>
            <span class="gh-btn-wrap">
              <iframe src="https://ghbtns.com/github-btn.html?user=Ephemeral182&repo=PosterCraft&type=star&count=true&size=small" frameborder="0" scrolling="0" width="100" height="20" title="PosterCraft GitHub Star"></iframe>
            </span>
            <span class="gh-btn-wrap">
              <iframe src="https://ghbtns.com/github-btn.html?user=Ephemeral182&repo=PosterCraft&type=fork&count=true&size=small" frameborder="0" scrolling="0" width="98" height="20" title="PosterCraft GitHub Fork"></iframe>
            </span>
          </div>
        </div>
      </article>

      <article class="highlight-card">
        <div class="highlight-media">
          <img src="https://ephemeral182.github.io/images/cvpr25_jarvisir.png" alt="JarvisIR">
          <span class="badge badge-cyan">CVPR 2025</span>
        </div>
        <div class="highlight-content">
          <h3>JarvisIR — Elevating Autonomous Driving Perception with Intelligent Image Restoration</h3>
          <p class="authors">Yunlong Lin*, Zixu Lin*, Haoyu Chen*, Panwang Pan*, Chenxin Li, <strong>Sixiang Chen</strong>, Kairun Wen, Yeying Jin, Wenbo Li, Xinghao Ding✉️</p>
          <p class="summary">A multimodal agent reasons about adverse scenes, calling specialized restoration experts to stabilize perception stacks for autonomous vehicles.</p>
          <div class="resource-list">
            <a href="https://arxiv.org/abs/2504.04158">PDF</a>
            <a href="https://cvpr2025-jarvisir.github.io/">Project</a>
            <a href="https://huggingface.co/spaces/LYL1015/JarvisIR">Demo</a>
            <a href="https://huggingface.co/LYL1015/JarvisIR">Model</a>
            <a href="https://github.com/LYL1015/JarvisIR" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="timeline-block">
    <div class="timeline-heading">
      <h2>Selected <em>Publications</em></h2>
    </div>
    <div class="timeline-list">
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">May 2026</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[arXiv 2026]</span> GenEvolve — Self-Evolving Image Generation Agents via Tool-Orchestrated Visual Experience Distillation</h3>
          <p class="timeline-authors"><strong>Sixiang Chen</strong>, Zhaohu Xing, Tian Ye, Xinyu Geng, Yunlong Lin, Jianyu Lai, Xuanhua He, Fuxiang Zhai, Jialin Gao, Lei Zhu</p>
          <p>A self-evolving image-generation agent that orchestrates search, visual references, and internal generation knowledge into prompt-reference programs, learning better tool use through visual experience distillation.</p>
          <div class="resource-inline">
            <a href="https://ephemeral182.github.io/GenEvolve/">Project Page</a>
            <a href="https://github.com/MeiGen-AI/GenEvolve">Code</a>
            <a href="https://huggingface.co/MeiGen-AI/GenEvolve">Model</a>
            <a href="https://huggingface.co/datasets/MeiGen-AI/GenEvolve-Data-Bench">Dataset</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Feb 2026</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[CVPR 2026]</span> PosterOmni — Generalized Artistic Poster Creation via Task Distillation and Unified Reward Feedback</h3>
          <p class="timeline-authors"><strong>Sixiang Chen*</strong>, Jianyu Lai*, Jialin Gao*, Hengyu Shi*, Zhongying Liu*, Tian Ye, Junfeng Luo, Xiaoming Wei, Lei Zhu</p>
          <p>One model for poster creation—unifying local edits and global design for generalized multi-task image/poster-to-poster generation. Your intelligent assistant for high-quality aesthetic poster creation!</p>
          <div class="resource-inline">
            <a href="https://ephemeral182.github.io/PosterOmni/">Project Page</a>
            <a href="https://arxiv.org/abs/2602.12127">Paper</a>
            <a href="https://github.com/MeiGen-AI/PosterOmni">Code</a>
            <a href="https://huggingface.co/MeiGen-AI/PosterOmni_v1">Model</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Feb 2026</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[CVPR 2026]</span> PosterReward: Unlocking Accurate Evaluation for High-Quality Graphic Design Generation</h3>
          <p class="timeline-authors">Jianyu Lai*, <strong>Sixiang Chen*</strong>, Jialin Gao*, Hengyu Shi, Zhongying Liu, Fuxiang Zhai, Junfeng Luo, Xiaoming Wei, Lujia Wang, Lei Zhu</p>
          <p>A comprehensive reward model for design aesthetics and typography, trained on automated preference dataset to unlock accurate evaluation for high-quality graphic design generation.</p>
          <div class="resource-inline">
            <a href="https://alexlai2860.github.io/PosterReward/">Project Page</a>
            <a href="https://github.com/MeiGen-AI/PosterReward">Code</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Jun 2025</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[ICLR 2026]</span> PosterCraft — Rethinking High-Quality Aesthetic Poster Generation in a Unified Framework</h3>
          <p class="timeline-authors"><strong>Sixiang Chen*</strong>, Jianyu Lai*, Jialin Gao*, Tian Ye, Haoyu Chen, Hengyu Shi, Shitong Shao, Yunlong Lin, Song Fei, Zhaohu Xing, Yeying Jin, Junfeng Luo, Xiaoming Wei, Lei Zhu</p>
          <p>A new framework for "Rethinking High-Quality Aesthetic Poster Generation in a Unified Framework". From your prompts to high-quality aesthetic posters!</p>
          <div class="resource-inline">
            <a href="https://ephemeral182.github.io/PosterCraft/">Project Page</a>
            <a href="https://arxiv.org/abs/2506.10741">Paper</a>
            <a href="https://github.com/Ephemeral182/PosterCraft">Code</a>
            <a href="https://huggingface.co/PosterCraft/PosterCraft-v1_RL">Model</a>
            <a href="https://huggingface.co/PosterCraft">Dataset</a>
            <a href="https://huggingface.co/spaces/Ephemeral182/PosterCraft">Demo</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Jun 2025</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[ICCV 2025]</span> GenHaze — One-step Controllable Haze Generation for Real-World Dehazing</h3>
          <p class="timeline-authors"><strong>Sixiang Chen</strong>, Tian Ye, Yunlong Lin, Yeying Jin, Yijun Yang, Haoyu Chen, Jianyu Lai, Song Fei, Zhaohu Xing, Fugee Tsung, Lei Zhu</p>
          <p>Proposes a one-step, reference-controllable haze generator that better matches real-world haze complexity than classic physics pipelines, creating high-quality paired data to boost real-world dehazing performance.</p>
          <div class="resource-inline">
            <a href="https://openaccess.thecvf.com/content/ICCV2025/papers/Chen_GenHaze_Pioneering_Controllable_One-Step_Realistic_Haze_Generation_for_Real-World_Dehazing_ICCV_2025_paper.pdf">Paper</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Apr 2025</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[Tech Report 2025]</span> An Empirical Study of GPT-4o Image Generation Capabilities</h3>
          <p class="timeline-authors"><strong>Sixiang Chen*</strong>, Jinbin Bai*, Zhuoran Zhao*, Tian Ye*, Qingyu Shi, Donghao Zhou, Wenhao Chai, Xin Lin, Jianzong Wu, Chao Tang, Shilin Xu, Tao Zhang, Haobo Yuan, Yikang Zhou, Wei Chow, Linfeng Li, Xiangtai Li, Lei Zhu, Lu Qi</p>
          <p>Provides a systematic benchmark study of GPT-4o image generation across 20+ tasks (text-to-image, image-to-image, image-to-3D, image-to-X), summarizing strengths/limitations and what they imply for unified multimodal generation.</p>
          <div class="resource-inline">
            <a href="https://arxiv.org/abs/2504.05979">Paper</a>
            <a href="https://github.com/ephemeral182/empirical-study-of-gpt-4o-image-gen">Code</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Feb 2025</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[CVPR 2025]</span> JarvisIR — Elevating Autonomous Driving Perception with Intelligent Image Restoration</h3>
          <p class="timeline-authors">Yunlong Lin*, Zixu Lin*, Haoyu Chen*, Panwang Pan*, Chenxin Li, <strong>Sixiang Chen</strong>, Kairun Wen, Yeying Jin, Wenbo Li, Xinghao Ding</p>
          <p>A multimodal agent reasons about adverse scenes, calling specialized restoration experts to stabilize perception stacks for autonomous vehicles.</p>
          <div class="resource-inline">
            <a href="https://cvpr2025-jarvisir.github.io/">Project Page</a>
            <a href="https://arxiv.org/abs/2504.04158">Paper</a>
            <a href="https://github.com/LYL1015/JarvisIR">Code</a>
            <a href="https://huggingface.co/LYL1015/JarvisIR">Model</a>
            <a href="https://huggingface.co/spaces/LYL1015/JarvisIR">Demo</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Feb 2025</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[CVPR 2025]</span> SnowMaster — Comprehensive Real-world Image Desnowing via MLLM with Multi-Model Feedback Optimization</h3>
          <p class="timeline-authors">Jianyu Lai*, <strong>Sixiang Chen*</strong>, Yunlong Lin, Tian Ye, Yun Liu, Song Fei, Zhaohu Xing, Hongtao Wu, Wei Wang, Lei Zhu</p>
          <p>Uses an MMPO/DPO-enhanced MLLM as an evaluator to rank/filter pseudo-labels, enabling semi-supervised training that improves real-world desnowing without relying on dense paired GT.</p>
          <div class="resource-inline">
            <a href="https://ephemeral182.github.io">Project Page</a>
            <a href="https://ephemeral182.github.io">Paper</a>
            <a href="https://ephemeral182.github.io">Code</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Feb 2025</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[CVPR 2025]</span> Detect Any Mirrors — Boosting Learning Reliability with an Iterative Data Engine</h3>
          <p class="timeline-authors">Zhaohu Xing, Lihao Liu, Yijun Yang, Hongqiu Wang, Tian Ye, <strong>Sixiang Chen</strong>, Wenxue Li, Guang Liu, Lei Zhu</p>
          <p>Builds an iterative data engine to harvest large-scale unlabeled data and progressively select high-reliability pseudo labels, improving mirror detection robustness and generalization in diverse scenes.</p>
          <div class="resource-inline">
            <a href="https://ephemeral182.github.io">Project Page</a>
            <a href="https://ephemeral182.github.io">Paper</a>
            <a href="https://ephemeral182.github.io">Code</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Jan 2025</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[AAAI 2025]</span> PromptHaze — Prompting Real-world Dehazing via Depth Anything</h3>
          <p class="timeline-authors">Tian Ye, <strong>Sixiang Chen</strong>, Haoyu Chen, Wenhao Chai, Jingjing Ren, Zhaohu Xing, Wenxue Li, Lei Zhu</p>
          <p>Introduces a depth-prompting paradigm: leverages Depth Anything’s stable depth priors as prompts to guide dehazing, aiming for plug-and-play real-world dehazing under complex haze.</p>
          <div class="resource-inline">
            <a href="https://ephemeral182.github.io">Project Page</a>
            <a href="https://ephemeral182.github.io">Paper</a>
            <a href="https://ephemeral182.github.io">Code</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Jan 2025</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[AAAI 2025]</span> AGLLDiff — Guiding Diffusion Models Towards Unsupervised Training-Free Real-World Low-Light Image Enhancement</h3>
          <p class="timeline-authors">Yunlong Lin*, Tian Ye*, <strong>Sixiang Chen*</strong>, Zhenqi Fu, Yingying Wang, Wenhao Chai, Zhaohu Xing, Lei Zhu, Xinghao Ding</p>
          <p>Proposes a training-free, unsupervised diffusion guidance framework that steers a pretrained diffusion model using attribute-based guidance for effective real-world low-light enhancement.</p>
          <div class="resource-inline">
            <a href="https://aglldiff.github.io/">Project Page</a>
            <a href="https://arxiv.org/abs/2407.14900">Paper</a>
            <a href="https://github.com/LYL1015/AGLLDiff">Code</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Jul 2024</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[NeurIPS 2024]</span> RestoreAgent — Autonomous Image Restoration Agent via Multimodal Large Language Models</h3>
          <p class="timeline-authors">Haoyu Chen, Wenbo Li, Jinjin Gu, Jingjing Ren, <strong>Sixiang Chen</strong>, Tian Ye, Renjing Pei, Kaiwen Zhou, Fenglong Song, Lei Zhu</p>
          <p>Proposes an MLLM-driven agent that diagnoses degradations and plans a task sequence + selects expert models from a tool/model pool to restore images.</p>
          <div class="resource-inline">
            <a href="https://ephemeral182.github.io">Project Page</a>
            <a href="https://ephemeral182.github.io">Paper</a>
            <a href="https://ephemeral182.github.io">Code</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Jun 2024</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[ECCV 2024]</span> Teaching Tailored to Talent — Adverse Weather Restoration via Prompt Pool and Depth-Anything Constraint</h3>
          <p class="timeline-authors"><strong>Sixiang Chen</strong>, Tian Ye, Kai Zhang, Zhaohu Xing, Yunlong Lin, Lei Zhu</p>
          <p>Using a prompt pool to compose weather-specific prompts on the fly, plus Depth-Anything–constrained scene prompts to stabilize background reconstruction under unseen adverse-weather combinations.</p>
          <div class="resource-inline">
            <a href="https://ephemeral182.github.io">Project Page</a>
            <a href="https://ephemeral182.github.io">Paper</a>
            <a href="https://ephemeral182.github.io">Code</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Jun 2024</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[CVPR 2024 Highlight]</span> Learning Diffusion Texture Priors for Image Restoration</h3>
          <p class="timeline-authors">Tian Ye, <strong>Sixiang Chen</strong>, Wenhao Chai, Zhaohu Xing, Jing Qin, Ge Lin, Lei Zhu</p>
          <p>Presents DTPM (Diffusion Texture Prior Model) that explicitly models high-quality texture priors to preserve fine details and structure when applying diffusion to restoration.</p>
          <div class="resource-inline">
            <a href="https://ephemeral182.github.io">Project Page</a>
            <a href="https://ephemeral182.github.io">Paper</a>
            <a href="https://ephemeral182.github.io">Code</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Oct 2023</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[ICCV 2023]</span> Adverse Weather Removal with Codebook Priors</h3>
          <p class="timeline-authors">Tian Ye*, <strong>Sixiang Chen*</strong>, Jinbin Bai*, Shi Jun, Chenghao Xue, Jingjia Jiang, Junjie Yin, Erkang Chen, Yun Liu</p>
          <p>Formulates adverse weather removal as matching and fusing degraded features with high-quality priors stored in a learned codebook.</p>
          <div class="resource-inline">
            <a href="https://openaccess.thecvf.com/content/ICCV2023/papers/Ye_Adverse_Weather_Removal_with_Codebook_Priors_ICCV_2023_paper.pdf">Paper</a>
            <a href="https://github.com/Owen718/AWRCP">Code</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Oct 2023</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[ICCV 2023]</span> Sparse Sampling Transformer with Uncertainty-Driven Ranking for Unified Removal of Raindrops and Rain Streaks</h3>
          <p class="timeline-authors"><strong>Sixiang Chen*</strong>, Tian Ye*, Jinbin Bai, Jun Shi, Erkang Chen, Lei Zhu</p>
          <p>A transformer that uses sparse sampling attention to model global rain degradation relations and an uncertainty-driven ranking strategy to focus on hard-to-restore regions for unified deraining.</p>
          <div class="resource-inline">
            <a href="https://ephemeral182.github.io/UDR_S2Former_deraining/">Project Page</a>
            <a href="https://arxiv.org/abs/2308.14153">Paper</a>
            <a href="https://github.com/Ephemeral182/UDR-S2Former_deraining">Code</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Oct 2023</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[ACM MM 2023]</span> Uncertainty-Driven Dynamic Degradation Perceiving and Background Modeling for Efficient Single Image Desnowing</h3>
          <p class="timeline-authors"><strong>Sixiang Chen</strong>, Tian Ye, Chenghao Xue, Haoyu Chen, Yun Liu, Erkang Chen, Lei Zhu</p>
          <p>Proposes an efficient single image desnowing framework by modeling uncertainty in degradation perception and background reconstruction.</p>
          <div class="resource-inline">
            <a href="https://dl.acm.org/doi/10.1145/3581783.3612003">Paper</a>
          </div>
        </div>
      </article>
      <article class="timeline-row">
        <div class="timeline-meta">
          <span class="meta-date">Oct 2022</span>
        </div>
        <div class="timeline-body">
          <h3><span class="pub-prefix">[ECCV 2022 Oral]</span> Perceiving and Modeling Density for Image Dehazing</h3>
          <p class="timeline-authors">Tian Ye*, Yunchen Zhang*, Mingchao Jiang*, Liang Chen, Yun Liu, <strong>Sixiang Chen</strong>, Erkang Chen</p>
          <p>Argues that dehazing hinges on haze density perception, introducing Separable Hybrid Attention and density modeling to handle uneven haze distribution.</p>
          <div class="resource-inline">
            <a href="https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136790126.pdf">Paper</a>
            <a href="https://github.com/Owen718/ECCV22-Perceiving-and-Modeling-Density-for-Image-Dehazing">Code</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</div>

<style>
/* ============================================================
   Publications — 杂志风（与首页一致）
   ============================================================ */
.pub-container {
  max-width: 1180px;
  margin: 0 auto;
  padding: clamp(20px, 4vw, 40px) clamp(20px, 4vw, 56px) 96px;
  color: var(--ink);
  font-family: var(--font-sans);
}

/* ---------- Intro / Hero ---------- */
.eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 14px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.eyebrow::before {
  content: '';
  width: 28px;
  height: 1px;
  background: var(--accent);
  display: inline-block;
}

.intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: clamp(28px, 4vw, 56px);
  align-items: start;
  padding: clamp(40px, 6vw, 72px) 0 clamp(36px, 5vw, 56px);
  border-bottom: 1px solid var(--rule);
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.intro-text { min-width: 0; }
.intro-text h1 {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin: 0 0 18px;
  color: var(--ink);
}
.intro-text h1 em {
  font-style: italic;
  color: var(--accent);
  font-weight: 400;
}
.intro-text p {
  font-family: var(--font-serif);
  font-size: clamp(16.5px, 1.2vw, 18px);
  line-height: 1.62;
  color: var(--ink-2);
  margin: 0 0 18px;
  max-width: 640px;
  letter-spacing: -0.003em;
}
.intro-text p strong {
  font-weight: 600;
  color: var(--ink);
}

.intro-tags {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.intro-tags span {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 3px;
  background: transparent;
  color: var(--ink-3);
  border: 1px solid var(--rule);
  margin: 0;
  transition: all 0.18s ease;
}
.intro-tags span:hover {
  color: var(--accent);
  border-color: var(--accent);
  transform: none;
  background: transparent;
}

.intro-counters {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.counter-card {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: baseline;
  gap: 14px;
  flex: none;
  background: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid var(--rule-2);
  text-align: left;
  padding: 14px 0;
}
.counter-card:last-child { border-bottom: none; }
.counter-value {
  font-family: var(--font-serif);
  font-size: 2.4rem;
  font-weight: 400;
  color: var(--ink);
  line-height: 1;
  letter-spacing: -0.02em;
}
.counter-label {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin: 0;
}

/* ---------- Section header ---------- */
.section-header { margin: clamp(48px, 6vw, 72px) 0 28px; }
.section-header h2,
.timeline-heading h2 {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-transform: none;
  color: var(--ink);
  margin: 0;
}
.section-header h2 em,
.timeline-heading h2 em {
  font-style: italic;
  color: var(--accent);
  font-weight: 400;
}

/* ---------- Highlight cards ---------- */
.highlight-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid var(--rule);
}
.highlight-card {
  position: relative;
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 28px;
  align-items: start;
  padding: 26px 0;
  border-radius: 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--rule-2);
  box-shadow: none;
  backdrop-filter: none;
  overflow: visible;
  transition: background 0.15s ease;
}
.highlight-card:hover { background: var(--paper-2); }
.highlight-card::before,
.highlight-card::after { display: none; }

.highlight-media {
  flex: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--paper-2);
  border: 1px solid var(--rule);
  border-radius: 2px;
  overflow: hidden;
  min-height: 160px;
}
.highlight-media img {
  width: 100%;
  height: auto;
  max-height: 320px;
  object-fit: contain;
  border-radius: 0;
  background: var(--paper-2);
  padding: 6px;
  display: block;
}
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 3px 10px;
  border-radius: 2px;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fff;
  background: var(--ink);
  border: none;
}
.badge-blue   { background: var(--ink); }
.badge-green  { background: var(--ink); }
.badge-cyan   { background: var(--accent); }
.badge-purple { background: var(--ink); }

.highlight-content { min-width: 0; }
.highlight-content h3 {
  font-family: var(--font-serif);
  margin: 0 0 8px;
  font-size: 1.25rem;
  line-height: 1.3;
  font-weight: 500;
  color: var(--ink);
  letter-spacing: -0.012em;
}
.authors {
  font-family: var(--font-sans);
  margin: 0 0 10px;
  font-size: 13.5px;
  color: var(--ink-3);
  line-height: 1.5;
}
.summary {
  font-family: var(--font-serif);
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink-2);
  letter-spacing: -0.003em;
}

.resource-list {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  align-items: center;
}
.resource-list a {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink);
  border-bottom: 1px solid var(--accent);
  padding: 1px 1px;
  transition: background 0.15s, color 0.15s;
}
.resource-list a:hover {
  background: var(--accent);
  color: #fff;
  text-decoration: none;
}
.gh-btn-wrap {
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
}
.gh-btn-wrap iframe { border: none; }

/* ---------- Timeline (Selected Publications) ---------- */
.timeline-block { margin-top: clamp(48px, 6vw, 80px); }
.timeline-heading { margin-bottom: 28px; }

.timeline-list {
  border-top: 1px solid var(--rule);
}
.timeline-row {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 28px;
  padding: 22px 0;
  border-bottom: 1px solid var(--rule-2);
  align-items: baseline;
  transition: background 0.15s ease;
}
.timeline-row:hover { background: var(--paper-2); }
.timeline-meta {
  min-width: 0;
  text-align: left;
  font-family: var(--font-mono);
}
.meta-type {
  display: block;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink-4);
  margin-bottom: 4px;
}
.meta-date {
  margin-top: 0;
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--ink-3);
}

.timeline-body { min-width: 0; }
.timeline-body h3 {
  font-family: var(--font-serif);
  margin: 0 0 6px;
  font-size: 1.1rem;
  line-height: 1.35;
  font-weight: 500;
  color: var(--ink);
  letter-spacing: -0.012em;
}
.timeline-body .pub-prefix {
  font-family: var(--font-mono);
  color: var(--accent);
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-right: 8px;
  vertical-align: 0.1em;
}
.timeline-authors {
  font-family: var(--font-sans);
  margin: 4px 0 6px;
  font-size: 13px;
  color: var(--ink-3);
  line-height: 1.5;
}
.timeline-body p {
  font-family: var(--font-serif);
  margin: 0;
  font-size: 15.5px;
  line-height: 1.55;
  color: var(--ink-2);
}
.resource-inline {
  margin-top: 8px;
  font-size: 12px;
  color: var(--ink-3);
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
}
.resource-inline a {
  font-family: var(--font-mono);
  color: var(--ink);
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid var(--accent);
  padding: 1px 1px;
  transition: background 0.15s, color 0.15s;
}
.resource-inline a:hover {
  background: var(--accent);
  color: #fff;
}
.resource-inline a + a::before {
  content: '';
  margin: 0;
  color: transparent;
}

/* ---------- Author name highlight (subtle) ---------- */
.authors strong,
.timeline-authors strong {
  display: inline;
  background: transparent;
  color: var(--ink);
  padding: 0;
  border-radius: 0;
  font-weight: 700;
  box-shadow: none;
  transition: none;
  margin: 0;
  border-bottom: 1.5px solid var(--accent);
}
.authors strong:hover,
.timeline-authors strong:hover {
  transform: none;
  box-shadow: none;
  background: var(--accent);
  color: #fff;
}

@media (max-width: 900px) {
  .intro {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .intro-counters { width: 100%; }
  .highlight-card {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .highlight-media { width: 100%; }
  .highlight-media img { max-height: 240px; }
  .timeline-row {
    grid-template-columns: 1fr;
    gap: 6px;
  }
  .timeline-meta { text-align: left; }
}
</style>
