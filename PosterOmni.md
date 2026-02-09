---
layout: posteromni
permalink: /PosterOmni/
title: PosterOmni - Generalized Artistic Poster Creation
---

<div class="hero-section">
    <!-- Logo if available, otherwise omitted or use placeholder -->
    <img src="/images/posteromni/logo_svg.png" alt="PosterOmni Logo" class="hero-logo" onerror="this.style.display='none'">
    
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
            <span class="affiliation-item"><sup class="author-sup">1</sup>The Hong Kong University of Science and Technology (Guangzhou)</span>
            <span class="affiliation-item"><sup class="author-sup">2</sup>Meituan</span>
            <span class="affiliation-item"><sup class="author-sup">3</sup>The Hong Kong University of Science and Technology</span>
        </div>
        
        <div class="contribution-note">
            *Core Contribution, †Corresponding Author
        </div>
    </div>

    <div class="action-buttons">
        <a href="https://arxiv.org/abs/2501.11646" class="btn btn-primary">
            <span>📄</span> Paper
        </a>
        <a href="https://github.com/Ephemeral182/PosterOmni" class="btn btn-secondary">
            <span>💻</span> Code
        </a>
        <a href="https://huggingface.co/PosterOmni" class="btn btn-secondary">
            <span>🤗</span> Model
        </a>
        <a href="#demo" class="btn btn-secondary">
            <span>🚀</span> Demo
        </a>
    </div>
</div>

<div class="content-wrapper">
    <div class="glass-container" id="abstract">
        <h2 style="margin-top: 0;">Abstract</h2>
        <p style="text-align: justify;">
            PosterOmni is a generalized framework for artistic poster creation that leverages task distillation and unified reward feedback. 
            Unlike previous methods that struggle with complex layouts or require manual intervention, PosterOmni automates the entire process 
            from content understanding to visual composition. By integrating Multi-modal Large Language Models (MLLM) with a specialized 
            layout generation and refinement pipeline, we achieve superior performance in both aesthetic quality and content fidelity.
            Support for multi-language (Chinese/English), cross-style generation, and editable layers makes it a versatile tool for designers.
        </p>
    </div>

    <!-- More sections can be added here following the glass-container style or others -->
    
    <section class="why-choose glass-container" id="features">
        <h2>Key Features</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; text-align: center;">
            <div>
                <div style="font-size: 2.5rem; margin-bottom: 1rem;">🧠</div>
                <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--text-main);">Content Understanding</h3>
                <p style="font-size: 0.95rem;">MLLM analyzes tone, scene, and emotion to generate precise visual instructions.</p>
            </div>
            <div>
                <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎨</div>
                <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--text-main);">Diverse Styles</h3>
                <p style="font-size: 0.95rem;">Built-in templates for modern, business, minimalist, and tech styles with custom color palettes.</p>
            </div>
            <div>
                <div style="font-size: 2.5rem; margin-bottom: 1rem;">📐</div>
                <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--text-main);">Smart Layout</h3>
                <p style="font-size: 0.95rem;">Automatic hierarchy, spacing, and alignment for visual balance.</p>
            </div>
            <div>
                <div style="font-size: 2.5rem; margin-bottom: 1rem;">🛠️</div>
                <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--text-main);">Editable</h3>
                <p style="font-size: 0.95rem;">Layer-based generation allowing for easy modification of text, images, and layout.</p>
            </div>
        </div>
    </section>

    <section class="gallery glass-container" id="gallery">
        <h2>Gallery</h2>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
            <img src="/images/posteromni/case1.png" alt="Case 1" style="width: 100%; border-radius: 12px;" onerror="this.style.display='none'">
            <img src="/images/posteromni/case2.png" alt="Case 2" style="width: 100%; border-radius: 12px;" onerror="this.style.display='none'">
            <img src="/images/posteromni/case3.png" alt="Case 3" style="width: 100%; border-radius: 12px;" onerror="this.style.display='none'">
            <img src="/images/posteromni/case4.png" alt="Case 4" style="width: 100%; border-radius: 12px;" onerror="this.style.display='none'">
        </div>
    </section>
</div>
