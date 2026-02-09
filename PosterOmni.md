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
    <div style="max-width: 900px; margin: 0 auto 6rem; text-align: center; background: rgba(255,255,255,0.5); padding: 3rem; border-radius: 24px; backdrop-filter: blur(10px);" id="abstract">
        <p style="font-size: 1.2rem; color: var(--text-secondary); line-height: 1.8;">
            PosterOmni is a generalized framework for artistic poster creation that leverages task distillation and unified reward feedback. 
            Unlike previous methods that struggle with complex layouts, PosterOmni automates the process from content understanding to visual composition, 
            achieving superior performance in both aesthetic quality and content fidelity.
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
