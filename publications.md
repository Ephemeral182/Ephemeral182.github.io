---
layout: fancy_home
permalink: /publications/
title: Publications
---

<div class="pub-page">
  <header class="pub-hero">
    <div class="hero-text">
      <p class="eyebrow">Research Snapshot</p>
      <h1>Posters, Agents & Reliable Vision Pipelines</h1>
      <p>
        My work spans structured AIGC, multimodal reasoning agents, and low-level restoration. Below is a curated
        mix of highlight systems and a clean timeline of recent publications. Each entry links directly to project
        pages, source code, and datasets so collaborators can dive in quickly.
      </p>
      <div class="hero-tags">
        <span>AIGC Systems</span>
        <span>Vision-Language Agents</span>
        <span>Low-Level Restoration</span>
      </div>
    </div>
    <div class="hero-stats">
      <div class="stat-card">
        <div class="stat-value">11</div>
        <div class="stat-label">CVPR / ICCV / ECCV / NeurIPS</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">9</div>
        <div class="stat-label">AAAI / ACM MM / MICCAI</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">100%+</div>
        <div class="stat-label">Project Release Rate</div>
      </div>
    </div>
  </header>

  <section class="highlight-section">
    <div class="section-title">
      <p class="eyebrow">Highlight Research</p>
      <h2>Signature Systems Shaping Creative Automation</h2>
    </div>

    <div class="highlight-grid">
      <article class="highlight-card">
        <div class="card-media">
          <img src="https://ephemeral182.github.io/images/posteromni/teaser_0209.jpg" alt="PosterOmni teaser">
          <span class="badge">Technical Report 2026</span>
        </div>
        <div class="card-body">
          <h3>PosterOmni — Generalized Artistic Poster Creation</h3>
          <p class="authors">Sixiang Chen*, Jianyu Lai*, Jialin Gao*, Hengyu Shi*, Zhongying Liu*, Tian Ye, Junfeng Luo, Xiaoming Wei, Lei Zhu✉️</p>
          <p class="summary">Unified reward feedback and task distillation power a controllable agent that covers local edits, layout-aware generation, and resource releases (model, dataset, demo).</p>
          <div class="card-links">
            <a href="https://arxiv.org/abs/2602.12127">PDF</a>
            <a href="https://ephemeral182.github.io/PosterOmni/">Project</a>
            <a href="https://github.com/MeiGen-AI/PosterOmni">Code</a>
            <a href="https://huggingface.co/spaces/PosterOmni">Demo</a>
          </div>
        </div>
      </article>

      <article class="highlight-card">
        <div class="card-media">
          <img src="https://ephemeral182.github.io/images/postercraft/pub/fig1.png" alt="PosterCraft overview">
          <span class="badge badge-green">ICLR 2026</span>
        </div>
        <div class="card-body">
          <h3>PosterCraft — Rethinking High-Quality Poster Generation</h3>
          <p class="authors">Sixiang Chen*, Jianyu Lai*, Jialin Gao*, Tian Ye, Haoyu Chen, Hengyu Shi, Shitong Shao, Yunlong Lin, Song Fei, Zhaohu Xing, Yeying Jin, Junfeng Luo, Xiaoming Wei, Lei Zhu✉️</p>
          <p class="summary">A unified diffusion-based workflow that marries composition planning and stylized rendering, translating natural prompts into polished posters accepted to ICLR 2026.</p>
          <div class="card-links">
            <a href="https://arxiv.org/abs/2506.10741">PDF</a>
            <a href="https://ephemeral182.github.io/PosterCraft/">Project</a>
            <a href="https://github.com/Ephemeral182/PosterCraft">Code</a>
            <a href="https://huggingface.co/spaces/Ephemeral182/PosterCraft">Demo</a>
          </div>
        </div>
      </article>

      <article class="highlight-card">
        <div class="card-media">
          <img src="https://ephemeral182.github.io/images/genhaze/teaser2.png" alt="GenHaze teaser">
          <span class="badge badge-purple">ICCV 2025</span>
        </div>
        <div class="card-body">
          <h3>GenHaze — Controllable Haze Generation for Restoration</h3>
          <p class="authors">Sixiang Chen*, Tian Ye, Yunlong Lin, Yeying Jin, Yijun Yang, Haoyu Chen, Jianyu Lai, Song Fei, Zhaohu Xing, Fugee Tsung, Lei Zhu✉️</p>
          <p class="summary">One-step controllable haze synthesis supplies paired data for real-world dehazing and plugs directly into restoration agents handling safety-critical vision.</p>
          <div class="card-links">
            <a href="https://ephemeral182.github.io">PDF</a>
            <a href="https://ephemeral182.github.io">Project</a>
          </div>
        </div>
      </article>

      <article class="highlight-card">
        <div class="card-media">
          <img src="https://ephemeral182.github.io/images/cvpr25_jarvisir.png" alt="JarvisIR teaser">
          <span class="badge badge-blue">CVPR 2025</span>
        </div>
        <div class="card-body">
          <h3>JarvisIR — Intelligent Restoration for Autonomous Driving</h3>
          <p class="authors">Yunlong Lin*, Zixu Lin*, Haoyu Chen*, Panwang Pan*, Chenxin Li, Sixiang Chen, Kairun Wen, Yeying Jin, Wenbo Li, Xinghao Ding✉️</p>
          <p class="summary">A multi-agent MLLM controller reasons about adverse scenes, dispatching restoration tools for robust perception stacks deployed on autonomous vehicles.</p>
          <div class="card-links">
            <a href="https://ephemeral182.github.io">PDF</a>
            <a href="https://ephemeral182.github.io">Project</a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="recent-section">
    <div class="section-title">
      <p class="eyebrow">Recent Projects</p>
      <h2>Concise Timeline of Publications & Benchmarks</h2>
    </div>
    <div class="timeline">
      <article class="timeline-item">
        <div class="timeline-meta">
          <span class="meta-label">Publication</span>
          <span class="meta-date">February 2025</span>
        </div>
        <div class="timeline-content">
          <h3>SnowMaster — Real-world Desnowing via Multi-Model Feedback</h3>
          <p>MLLM-driven controller fuses multiple expert opinions to schedule desnowing operations, achieving state-of-the-art robustness on real driving scenes.</p>
          <div class="timeline-links">
            <a href="https://ephemeral182.github.io">Project Page</a>
            <a href="https://ephemeral182.github.io">Paper</a>
            <a href="https://ephemeral182.github.io">Code</a>
          </div>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-meta">
          <span class="meta-label">Publication</span>
          <span class="meta-date">February 2025</span>
        </div>
        <div class="timeline-content">
          <h3>Detect Any Mirrors — Iterative Data Engine for Mirror Detection</h3>
          <p>Introduces a large-scale pseudo-labeling loop with human-in-the-loop verification, boosting mirror perception reliability for robotics and AR.</p>
          <div class="timeline-links">
            <a href="https://ephemeral182.github.io">Project Page</a>
            <a href="https://ephemeral182.github.io">Paper</a>
            <a href="https://ephemeral182.github.io">Code</a>
          </div>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-meta">
          <span class="meta-label">Publication</span>
          <span class="meta-date">April 2025</span>
        </div>
        <div class="timeline-content">
          <h3>GPT-4o Image Generation Study — Comprehensive Benchmarking</h3>
          <p>Benchmarks fidelity, controllability, and safety of GPT-4o image generation, highlighting strengths and failure modes for industrial deployment.</p>
          <div class="timeline-links">
            <a href="https://arxiv.org/abs/2504.05979">Paper</a>
            <a href="https://ephemeral182.github.io">Code</a>
          </div>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-meta">
          <span class="meta-label">Publication</span>
          <span class="meta-date">January 2025</span>
        </div>
        <div class="timeline-content">
          <h3>PromptHaze — Prompting Real-world Dehazing via Depth Anything</h3>
          <p>Aligns promptable depth priors with restoration modules to deliver plug-and-play dehazing performance in harsh weather.</p>
          <div class="timeline-links">
            <a href="https://ephemeral182.github.io">Project Page</a>
            <a href="https://ephemeral182.github.io">Paper</a>
            <a href="https://ephemeral182.github.io">Code</a>
          </div>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-meta">
          <span class="meta-label">Publication</span>
          <span class="meta-date">September 2024</span>
        </div>
        <div class="timeline-content">
          <h3>T3-DiffWeather — Text-to-Task Diffusion for Adverse Weather</h3>
          <p>Generates diverse, controllable weather degradations for training restoration agents, with ECCV-level benchmarks and open-source pipeline.</p>
          <div class="timeline-links">
            <a href="https://ephemeral182.github.io/T3-DiffWeather/">Project Page</a>
            <a href="https://arxiv.org/abs/2409.15739">Paper</a>
            <a href="https://github.com/Ephemeral182/T3-DiffWeather">Code</a>
          </div>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-meta">
          <span class="meta-label">Publication</span>
          <span class="meta-date">July 2024</span>
        </div>
        <div class="timeline-content">
          <h3>AGLLDiff — Training-free Low-Light Enhancement via Diffusion Guidance</h3>
          <p>Guided diffusion pipeline enhances low-light imagery without paired data, enabling rapid deployment in safety-critical feeds.</p>
          <div class="timeline-links">
            <a href="https://aglldiff.github.io/">Project Page</a>
            <a href="https://arxiv.org/abs/2407.18035">Paper</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</div>

<style>
.pub-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  color: #0f172a;
}
.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  margin: 0;
  color: #dc2626;
}
.pub-hero {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2.5rem;
  background: #f8fafc;
  border-radius: 32px;
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.08);
}
.pub-hero h1 {margin: 0.5rem 0 1rem; font-size: 2.4rem;}
.hero-tags span {
  display: inline-block;
  padding: 0.35rem 0.9rem;
  border: 1px solid rgba(15, 23, 42, 0.2);
  border-radius: 999px;
  font-size: 0.85rem;
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
}
.hero-stats {display: flex; gap: 1rem; flex: 1 1 250px; align-items: stretch;}
.stat-card {
  flex: 1;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 20px;
  padding: 1.2rem;
  text-align: center;
  background: white;
}
.stat-value {font-size: 2rem; font-weight: 700; color: #1d4ed8;}
.stat-label {font-size: 0.9rem; color: #475569; margin-top: 0.4rem;}
.section-title {margin: 3rem 0 1rem;}
.section-title h2 {margin: 0.2rem 0 0; font-size: 1.9rem;}
.highlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.8rem;
}
.highlight-card {
  display: flex;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 24px;
  background: #fff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
}
.highlight-card .card-media {
  flex: 0 0 180px;
  position: relative;
}
.highlight-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 16px;
}
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #2563eb;
  color: white;
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.badge-green {background: #16a34a;}
.badge-purple {background: #9333ea;}
.badge-blue {background: #0ea5e9;}
.card-body h3 {margin: 0 0 0.4rem; font-size: 1.2rem;}
.authors {font-size: 0.85rem; color: #475569; margin: 0 0 0.6rem;}
.summary {font-size: 0.95rem; color: #1e293b;}
.card-links, .timeline-links {
  margin-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.card-links a, .timeline-links a {
  text-decoration: none;
  font-size: 0.85rem;
  color: #b91c1c;
  font-weight: 600;
}
.card-links a::after, .timeline-links a::after {
  content: '';
  display: inline-block;
  margin-left: 0.3rem;
  width: 4px;
  height: 4px;
  background: #b91c1c;
  border-radius: 999px;
}
.card-links a:last-child::after, .timeline-links a:last-child::after {display: none;}
.recent-section {margin-top: 4rem;}
.timeline {border-top: 1px solid #e2e8f0;}
.timeline-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e2e8f0;
}
.timeline-meta {min-width: 160px; text-align: right;}
.meta-label {display: block; font-size: 0.8rem; font-weight: 600; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.12em;}
.meta-date {font-size: 1rem; font-weight: 600; color: #111827;}
.timeline-content h3 {margin: 0 0 0.3rem; font-size: 1.2rem;}
.timeline-content p {margin: 0; color: #475569;}
@media (max-width: 900px) {
  .pub-hero {flex-direction: column;}
  .hero-stats {width: 100%;}
  .highlight-card {flex-direction: column;}
  .highlight-card .card-media {width: 100%;}
  .timeline-item {flex-direction: column;}
  .timeline-meta {text-align: left;}
}
</style>
