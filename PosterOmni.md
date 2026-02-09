---
layout: posteromni
permalink: /PosterOmni/
title: PosterOmni - Generalized Artistic Poster Creation
---

<div class="hero-section">
    <!-- Logo if available -->
    <img src="/images/posteromni/logo_svg.png" alt="PosterOmni Logo" style="width: 100px; margin-bottom: 2rem; display: none;" onerror="this.style.display='none'">
    
    <h1 class="project-title">
        <span class="title-gradient">PosterOmni</span>: Generalized Artistic Poster Creation via <br> Task Distillation and Unified Reward Feedback
    </h1>

    <div class="authors-container">
        <div class="author-list">
            <span class="author-name">Sixiang Chen<sup class="author-sup">1,2,*</sup></span>,
            <span class="author-name">Jianyu Lai<sup class="author-sup">1,2,*</sup></span>,
            <span class="author-name">Jialin Gao<sup class="author-sup">2,*</sup></span>,
            <span class="author-name">Hengyu Shi<sup class="author-sup">2,*</sup></span>,
            <span class="author-name">Zhongying Liu<sup class="author-sup">2,*</sup></span>,
            <span class="author-name">Tian Ye<sup class="author-sup">1</sup></span>,
            <span class="author-name">Junfeng Luo<sup class="author-sup">2</sup></span>,
            <span class="author-name">Xiaoming Wei<sup class="author-sup">2</sup></span>,
            <span class="author-name">Lei Zhu<sup class="author-sup">1,3,†</sup></span>
        </div>
        
        <div class="affiliations">
            <span><sup class="author-sup">1</sup>HKUST(GZ)</span>
            <span><sup class="author-sup">2</sup>Meituan</span>
            <span><sup class="author-sup">3</sup>HKUST</span>
        </div>
    </div>

    <div style="margin-top: 2rem;">
        <a href="https://arxiv.org/abs/2501.11646" class="btn btn-primary"><span>📄</span> Paper</a>
        <a href="https://github.com/Ephemeral182/PosterOmni" class="btn btn-secondary"><span>💻</span> Code</a>
        <a href="https://huggingface.co/PosterOmni" class="btn btn-secondary"><span>🤗</span> Model</a>
    </div>
</div>

<div class="content-wrapper">

    <!-- Abstract -->
    <div style="max-width: 1000px; margin: 0 auto 6rem; background: rgba(255,255,255,0.6); padding: 3rem; border-radius: 24px; backdrop-filter: blur(10px); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);" id="abstract">
        <p style="font-size: 1.1rem; color: var(--text-secondary); line-height: 1.8; text-align: justify; margin-bottom: 1.5rem;">
            Image-to-poster generation is a multi-dimensional process coupling <strong>entity-preserving local editing</strong> (such as rescaling, filling, and extending) with <strong>concept-driven global creation</strong> (like layout and style transfer).
        </p>
        <p style="font-size: 1.1rem; color: var(--text-secondary); line-height: 1.8; text-align: justify;">
            We propose <strong>PosterOmni</strong>, a generalized framework that unifies these regimes via an efficient <strong>data–distillation–reward pipeline</strong>. Our approach involves constructing multi-scenario datasets covering six task types, <strong>distilling knowledge</strong> from specialized experts, and applying <strong>Unified Reward Feedback</strong> to align outcomes with aesthetic preferences. Extensive experiments show that PosterOmni significantly outperforms existing baselines in both fidelity and design quality.
        </p>
    </div>

    <!-- Section 1: Capabilities (Left Text, Right Image) -->
    <div class="split-section" id="features">
        <div class="split-text">
            <span class="section-label">Capabilities</span>
            <h2 class="section-title">Diverse Poster Creation Tasks</h2>
            <div class="feature-list">
                <div class="feature-item">
                    <div class="number-badge">1</div>
                    <span class="feature-heading">Local Editing Precision</span>
                    <p class="feature-desc">Performs precise local adjustments including extending, filling, rescaling, and identity-driven generation while preserving the original subject.</p>
                </div>
                <div class="feature-item">
                    <div class="number-badge">2</div>
                    <span class="feature-heading">Global Creation Reasoning</span>
                    <p class="feature-desc">Handles abstract high-level tasks such as layout-driven and style-driven generation, ensuring aesthetic coherence across the entire poster.</p>
                </div>
                <div class="feature-item">
                    <div class="number-badge">3</div>
                    <span class="feature-heading">Unified Framework</span>
                    <p class="feature-desc">Seamlessly integrates multiple editing and generation capabilities into a single model without switching pipelines.</p>
                </div>
            </div>
        </div>
        <div class="split-visual">
            <img src="/images/posteromni/teaser_0209.jpg" alt="PosterOmni Capabilities Teaser">
        </div>
    </div>

    <!-- Section 2: Data Pipeline (Right Text, Left Image - using reverse) -->
    <div class="split-section reverse" id="data">
        <div class="split-text">
            <span class="section-label">Data Engineering</span>
            <h2 class="section-title">Automated Data Construction</h2>
            <div class="feature-list">
                <div class="feature-item">
                    <div class="number-badge">1</div>
                    <span class="feature-heading">Prompt & Image Generation</span>
                    <p class="feature-desc">Leverages GPT-4 and Qwen to generate diverse, structured prompts and initial images covering various themes.</p>
                </div>
                <div class="feature-item">
                    <div class="number-badge">2</div>
                    <span class="feature-heading">Multimodal Filtering</span>
                    <p class="feature-desc">Employs OCR and VLM-based filtering to ensure textual correctness and layout-content consistency.</p>
                </div>
                <div class="feature-item">
                    <div class="number-badge">3</div>
                    <span class="feature-heading">Task-Specific Construction</span>
                    <p class="feature-desc">Automatically synthesizes paired data for 6 specific tasks using tools like SAM-2 and BrushNet.</p>
                </div>
            </div>
        </div>
        <div class="split-visual">
            <img src="/images/posteromni/posteromni_datapipeline.jpg" alt="Data Construction Pipeline">
        </div>
    </div>

    <!-- Section 3: Methodology (Left Text, Right Image) -->
    <div class="split-section" id="method">
        <div class="split-text">
            <span class="section-label">Methodology</span>
            <h2 class="section-title">Progressive Training Pipeline</h2>
            <div class="feature-list">
                <div class="feature-item">
                    <div class="number-badge">1</div>
                    <span class="feature-heading">Task-Specific SFT</span>
                    <p class="feature-desc">Trains specialized experts for local editing and global creation to ensure high fidelity in distinct domains.</p>
                </div>
                <div class="feature-item">
                    <div class="number-badge">2</div>
                    <span class="feature-heading">Task Distillation</span>
                    <p class="feature-desc">Distills knowledge from experts into a unified student model, merging pixel precision with aesthetic understanding.</p>
                </div>
                <div class="feature-item">
                    <div class="number-badge">3</div>
                    <span class="feature-heading">Unified Reward Feedback</span>
                    <p class="feature-desc">Aligns with human preferences using a reward model that evaluates both aesthetic appeal and instruction adherence.</p>
                </div>
                <div class="feature-item">
                    <div class="number-badge">4</div>
                    <span class="feature-heading">Omni-Edit RL</span>
                    <p class="feature-desc">Uses Reinforcement Learning to refine generation quality and align it with professional design standards.</p>
                </div>
            </div>
        </div>
        <div class="split-visual">
            <img src="/images/posteromni/overview.jpg" alt="PosterOmni Methodology Overview">
        </div>
    </div>

    <!-- Results Table -->
    <div class="table-container" id="results">
        <h2 style="text-align: center; margin-bottom: 2rem; font-family: 'Plus Jakarta Sans', sans-serif;">
            Quantitative Comparison <span class="benchmark-badge">PosterOmni-Bench</span>
        </h2>
        <div class="table-scroll-wrapper">
            <table class="results-table">
                <thead>
                    <tr>
                        <th style="width: 20%">Model</th>
                        <th style="width: 11%">Extending</th>
                        <th style="width: 11%">Filling</th>
                        <th style="width: 11%">Rescaling</th>
                        <th style="width: 11%">Id-consis.</th>
                        <th style="width: 11%">Layout-dri.</th>
                        <th style="width: 11%">Style-dri.</th>
                        <th style="width: 11%">Overall</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ICEdit</td>
                        <td>1.99 <span class="sep">/</span> -</td>
                        <td>3.21 <span class="sep">/</span> -</td>
                        <td>1.73 <span class="sep">/</span> -</td>
                        <td>1.59 <span class="sep">/</span> -</td>
                        <td>1.53 <span class="sep">/</span> -</td>
                        <td>1.67 <span class="sep">/</span> -</td>
                        <td>1.95 <span class="sep">/</span> -</td>
                    </tr>
                    <tr>
                        <td>Step1X-Edit</td>
                        <td>3.04 <span class="sep">/</span> 3.67</td>
                        <td>4.35 <span class="sep">/</span> 4.21</td>
                        <td>1.60 <span class="sep">/</span> 1.75</td>
                        <td>1.70 <span class="sep">/</span> 2.14</td>
                        <td>1.63 <span class="sep">/</span> 1.82</td>
                        <td>1.57 <span class="sep">/</span> 1.79</td>
                        <td>2.31 <span class="sep">/</span> 2.56</td>
                    </tr>
                    <tr>
                        <td>BAGEL</td>
                        <td>2.33 <span class="sep">/</span> 2.84</td>
                        <td>2.77 <span class="sep">/</span> 2.67</td>
                        <td>1.77 <span class="sep">/</span> 1.40</td>
                        <td>1.92 <span class="sep">/</span> 2.29</td>
                        <td>2.34 <span class="sep">/</span> 3.03</td>
                        <td>1.85 <span class="sep">/</span> 2.34</td>
                        <td>2.15 <span class="sep">/</span> 2.43</td>
                    </tr>
                    <tr>
                        <td>OmniGen2</td>
                        <td>2.56 <span class="sep">/</span> -</td>
                        <td>2.32 <span class="sep">/</span> -</td>
                        <td>1.61 <span class="sep">/</span> -</td>
                        <td>3.25 <span class="sep">/</span> -</td>
                        <td>2.22 <span class="sep">/</span> -</td>
                        <td>1.84 <span class="sep">/</span> -</td>
                        <td>2.59 <span class="sep">/</span> -</td>
                    </tr>
                    <tr>
                        <td>FLUX.1 Kontext</td>
                        <td>3.12 <span class="sep">/</span> -</td>
                        <td>3.61 <span class="sep">/</span> -</td>
                        <td>3.16 <span class="sep">/</span> -</td>
                        <td>3.39 <span class="sep">/</span> -</td>
                        <td>3.03 <span class="sep">/</span> -</td>
                        <td>2.88 <span class="sep">/</span> -</td>
                        <td>3.20 <span class="sep">/</span> -</td>
                    </tr>
                    <tr>
                        <td>Qwen-Image-Edit</td>
                        <td>4.28 <span class="sep">/</span> 4.24</td>
                        <td>3.95 <span class="sep">/</span> 3.79</td>
                        <td>3.40 <span class="sep">/</span> 3.54</td>
                        <td>3.06 <span class="sep">/</span> 3.37</td>
                        <td>3.44 <span class="sep">/</span> 2.97</td>
                        <td>2.91 <span class="sep">/</span> 2.83</td>
                        <td>3.51 <span class="sep">/</span> 3.46</td>
                    </tr>
                    <tr>
                        <td>UniWorld-V2</td>
                        <td>4.25 <span class="sep">/</span> 4.22</td>
                        <td>3.57 <span class="sep">/</span> 3.18</td>
                        <td>3.07 <span class="sep">/</span> 3.23</td>
                        <td>2.87 <span class="sep">/</span> 3.20</td>
                        <td>3.66 <span class="sep">/</span> 3.79</td>
                        <td>3.14 <span class="sep">/</span> 2.85</td>
                        <td>3.42 <span class="sep">/</span> 3.41</td>
                    </tr>
                    <tr style="border-top: 1px solid rgba(0,0,0,0.1);">
                        <td>Seedream-3.0</td>
                        <td>3.52 <span class="sep">/</span> 3.76</td>
                        <td>3.40 <span class="sep">/</span> 3.52</td>
                        <td>2.38 <span class="sep">/</span> 2.84</td>
                        <td>2.88 <span class="sep">/</span> 3.30</td>
                        <td>2.68 <span class="sep">/</span> 3.04</td>
                        <td>2.32 <span class="sep">/</span> 2.82</td>
                        <td>2.86 <span class="sep">/</span> 3.21</td>
                    </tr>
                    <tr>
                        <td>Seedream-4.0</td>
                        <td><span class="rank-2">4.41</span> <span class="sep">/</span> 4.57</td>
                        <td>4.44 <span class="sep">/</span> 4.64</td>
                        <td><span class="rank-1">4.00</span> <span class="sep">/</span> 3.69</td>
                        <td><span class="rank-1">4.53</span> <span class="sep">/</span> <span class="rank-1">4.62</span></td>
                        <td>4.05 <span class="sep">/</span> 4.22</td>
                        <td><span class="rank-1">4.23</span> <span class="sep">/</span> 4.31</td>
                        <td><span class="rank-1">4.28</span> <span class="sep">/</span> 4.34</td>
                    </tr>
                    <tr class="row-ours">
                        <td>PosterOmni (Ours)</td>
                        <td><span class="rank-1">4.76</span> <span class="sep">/</span> <span class="rank-1">4.72</span></td>
                        <td><span class="rank-1">4.69</span> <span class="sep">/</span> <span class="rank-1">4.77</span></td>
                        <td><span class="rank-2">3.97</span> <span class="sep">/</span> <span class="rank-1">3.81</span></td>
                        <td><span class="rank-2">3.98</span> <span class="sep">/</span> <span class="rank-2">4.23</span></td>
                        <td><span class="rank-1">4.20</span> <span class="sep">/</span> <span class="rank-1">4.35</span></td>
                        <td><span class="rank-2">3.99</span> <span class="sep">/</span> <span class="rank-1">4.36</span></td>
                        <td><span class="rank-2">4.27</span> <span class="sep">/</span> <span class="rank-1">4.37</span></td>
                    </tr>
                    <tr class="row-baseline-diff">
                        <td>vs. Baseline (Qwen)</td>
                        <td>+0.48 <span class="sep">/</span> +0.48</td>
                        <td>+0.74 <span class="sep">/</span> +0.98</td>
                        <td>+0.57 <span class="sep">/</span> +0.27</td>
                        <td>+0.92 <span class="sep">/</span> +0.86</td>
                        <td>+0.76 <span class="sep">/</span> +1.38</td>
                        <td>+1.08 <span class="sep">/</span> +1.53</td>
                        <td>+0.76 <span class="sep">/</span> +0.91</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p style="text-align: center; margin-top: 1.5rem; color: var(--text-secondary); font-size: 0.9rem;">
            Table 1: Quantitative comparison results on PosterOmni-Bench. <span class="rank-1">Gold</span> indicates the best performance, and <span class="rank-2">Blue</span> indicates the second best.
        </p>
    </div>

    <!-- Gallery Section -->
    <div style="margin-top: 8rem;">
        <h2 style="text-align: center; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 2.5rem; margin-bottom: 3rem;">Gallery</h2>
        <div class="gallery-grid">
            <img src="/images/posteromni/case1.png" alt="Case 1" onerror="this.style.display='none'">
            <img src="/images/posteromni/case2.png" alt="Case 2" onerror="this.style.display='none'">
            <img src="/images/posteromni/case3.png" alt="Case 3" onerror="this.style.display='none'">
            <img src="/images/posteromni/case4.png" alt="Case 4" onerror="this.style.display='none'">
        </div>
    </div>

</div>
