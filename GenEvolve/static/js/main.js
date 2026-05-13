// ========== Navbar ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 50); });

// ========== Smooth scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); const t = document.querySelector(a.getAttribute('href')); if (t) t.scrollIntoView({ behavior: 'smooth' }); });
});

// ========== Scroll reveal ==========
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.card, .figure-block, .table-card, .stat-card, .pipeline-step, .code-block, .dp-card, .data-ex-card').forEach(el => {
    el.classList.add('reveal'); obs.observe(el);
});

// ========== Gallery ==========
let galleryData = [];
async function loadGallery() {
    try {
        const r = await fetch('static/eval_cases/gallery_data.json');
        galleryData = await r.json();
        const cats = [...new Set(galleryData.map(c => c.category))];
        const fc = document.getElementById('gallery-filters');
        cats.forEach(cat => {
            const b = document.createElement('button');
            b.className = 'filter-pill'; b.dataset.filter = cat; b.textContent = cat;
            fc.appendChild(b);
        });
        fc.querySelectorAll('.filter-pill').forEach(b => {
            b.addEventListener('click', () => {
                fc.querySelectorAll('.filter-pill').forEach(x => x.classList.remove('active'));
                b.classList.add('active'); renderGallery(b.dataset.filter);
            });
        });
        renderGallery('all');
    } catch(e) { console.error(e); }
}

function renderGallery(filter) {
    const grid = document.getElementById('gallery-grid');
    const items = filter === 'all' ? galleryData : galleryData.filter(c => c.category === filter);
    grid.innerHTML = items.map((c, i) => `
        <div class="gallery-card" data-idx="${galleryData.indexOf(c)}" style="animation:fadeUp .45s ease ${i*.05}s both">
            <div class="gallery-thumb"><img src="static/eval_cases/${c.dir}/nano.jpg" alt="${c.category}"></div>
            <div class="gallery-card-body">
                <div class="gallery-cat">${c.category}</div>
                <p class="gallery-prompt-text">${c.prompt}</p>
                <div class="gallery-skills">
                    ${(c.skills||[]).slice(0,3).map(s=>`<span class="skill-chip">${s.replace(/_/g,' ')}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    grid.querySelectorAll('.gallery-card').forEach(card => {
        card.addEventListener('click', () => openModal(parseInt(card.dataset.idx)));
    });
}

function openModal(idx) {
    const c = galleryData[idx];
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <div class="modal-section">
            <div class="modal-label">📌 Category & Skills</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap">
                <span class="gallery-cat" style="font-size:.78rem;padding:4px 12px">${c.category}</span>
                ${(c.skills||[]).map(s=>`<span class="skill-chip" style="font-size:.72rem;padding:3px 10px">${s.replace(/_/g,' ')}</span>`).join('')}
            </div>
        </div>
        <div class="modal-section"><div class="modal-label">💬 User Request</div><div class="modal-text-block">${c.prompt}</div></div>
        <div class="modal-section"><div class="modal-label">🔍 Retrieved References</div>
            <div class="modal-imgs">${c.refs.map((r,i)=>`<div class="modal-img-wrap"><img src="static/eval_cases/${c.dir}/${r}"><div class="img-label">Ref ${i+1}</div></div>`).join('')}</div>
        </div>
        <div class="modal-section"><div class="modal-label">📝 Generated Program</div><div class="modal-text-block" style="font-size:.85rem">${c.gen_prompt}</div></div>
        <div class="modal-section"><div class="modal-label">🎨 Generated Results</div>
            <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start">
                <div style="text-align:center"><img src="static/eval_cases/${c.dir}/nano.jpg" style="max-width:380px;width:100%;border-radius:10px;border:2px solid var(--green-500)"><div class="img-label" style="margin-top:6px">Nano Banana Pro</div></div>
                <div style="text-align:center"><img src="static/eval_cases/${c.dir}/qwen.jpg" style="max-width:380px;width:100%;border-radius:10px;border:2px solid var(--blue-500)" onerror="this.parentElement.style.display='none'"><div class="img-label" style="margin-top:6px">Qwen-Image-Edit</div></div>
            </div>
        </div>
    `;
    document.getElementById('modal-backdrop').classList.add('active');
    document.body.style.overflow = 'hidden';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-backdrop').addEventListener('click', e => { if(e.target===document.getElementById('modal-backdrop')) closeModal(); });
document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });
function closeModal() { document.getElementById('modal-backdrop').classList.remove('active'); document.body.style.overflow=''; }

// ========== Data Examples ==========
async function loadDataExamples() {
    try {
        const r = await fetch('static/data_cases/data_cases.json');
        const data = await r.json();
        const grid = document.getElementById('data-examples-grid');
        grid.innerHTML = data.map(d => `
            <div class="data-ex-card" onclick='openDataModal(${JSON.stringify(d).replace(/'/g,"&#39;").replace(/\n/g," ")})'>
                <div class="data-ex-imgs">
                    ${d.refs[0]?`<img src="static/data_cases/${d.id}/${d.refs[0]}" alt="ref">`:''}
                    <img src="static/data_cases/${d.id}/gt.jpg" alt="gt">
                </div>
                <div class="data-ex-body">
                    <div class="data-ex-cat">${d.category || d.prompt_type}</div>
                    <p class="data-ex-prompt">${d.prompt}</p>
                </div>
            </div>
        `).join('');
    } catch(e) { console.error(e); }
}

window.openDataModal = function(d) {
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <div class="modal-section"><div class="modal-label">💬 User Prompt</div><div class="modal-text-block">${d.prompt}</div></div>
        <div class="modal-section"><div class="modal-label">🔍 Selected References</div>
            <div class="modal-imgs">${d.refs.map((r,i)=>`<div class="modal-img-wrap"><img src="static/data_cases/${d.id}/${r}"><div class="img-label">Ref ${i+1}</div></div>`).join('')}</div>
        </div>
        <div class="modal-section"><div class="modal-label">📝 Teacher Program</div><div class="modal-text-block" style="font-size:.85rem">${d.gen_prompt}</div></div>
        <div class="modal-section"><div class="modal-label">🎯 GT Image (Rendered by Nano Banana Pro)</div><div style="text-align:center"><img src="static/data_cases/${d.id}/gt.jpg" class="modal-result-img"></div></div>
    `;
    document.getElementById('modal-backdrop').classList.add('active');
    document.body.style.overflow = 'hidden';
};

// ========== Trajectory Viewer (loads real structured data) ==========
const trajCache = {};

async function loadTrajectory(caseId) {
    const viewer = document.getElementById('traj-viewer');
    
    if (!trajCache[caseId]) {
        try {
            const r = await fetch(`static/eval_cases/${caseId}/trajectory_structured.json`);
            trajCache[caseId] = await r.json();
        } catch(e) {
            viewer.innerHTML = '<p style="color:var(--gray-500)">Failed to load trajectory.</p>';
            return;
        }
    }
    
    const traj = trajCache[caseId];
    
    let timelineHTML = '';
    for (const step of traj.steps) {
        if (step.type === 'think') {
            // Thinking step with action
            const actionLabel = step.action === 'FINAL_ANSWER' 
                ? '→ <span style="color:var(--green-600);font-weight:700">Output Final Program</span>'
                : step.action ? `→ <code>${escapeHtml(step.action)}</code>` : '';
            
            timelineHTML += `
                <div class="traj-step">
                    <div class="traj-dot dot-think"><i class="fas fa-lightbulb"></i></div>
                    <div class="traj-step-label label-think">🧠 Agent Thinking</div>
                    <div class="traj-step-content">
                        <div class="think-bubble">${escapeHtml(step.content)}</div>
                        ${actionLabel ? `<div class="think-action">${actionLabel}</div>` : ''}
                    </div>
                </div>`;
        } else if (step.type === 'search_result') {
            timelineHTML += `
                <div class="traj-step">
                    <div class="traj-dot dot-search"><i class="fas fa-search"></i></div>
                    <div class="traj-step-label label-search">🔍 Image Search Result</div>
                    <div class="traj-step-content">
                        <div style="margin-bottom:8px"><strong>Query:</strong> <code>${escapeHtml(step.query)}</code></div>
                        <div class="search-results-list">
                            ${step.results.map(r => `<div class="search-result-item"><span class="sr-id">${r.id}</span> ${escapeHtml(r.title)}</div>`).join('')}
                        </div>
                    </div>
                </div>`;
        } else if (step.type === 'skill_result') {
            timelineHTML += `
                <div class="traj-step">
                    <div class="traj-dot dot-skill"><i class="fas fa-bolt"></i></div>
                    <div class="traj-step-label label-skill">⚡ Skill: ${step.skill_name.replace(/_/g, ' ')}</div>
                    <div class="traj-step-content">
                        <div class="skill-points">
                            ${step.key_points.map(p => `<div class="skill-point">• <strong>${escapeHtml(p)}</strong></div>`).join('')}
                        </div>
                    </div>
                </div>`;
        }
    }
    
    // Final result
    timelineHTML += `
        <div class="traj-step">
            <div class="traj-dot dot-result"><i class="fas fa-check"></i></div>
            <div class="traj-step-label label-result">✅ Final Prompt-Reference Program</div>
            <div class="traj-step-content">
                <div class="gen-prompt-final">${escapeHtml(traj.gen_prompt)}</div>
                <div class="traj-result-row">
                    <img src="static/eval_cases/${caseId}/nano.jpg" alt="Generated Result">
                    <div>
                        <div style="font-size:.72rem;font-weight:700;color:var(--purple-600);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">References Used</div>
                        <div class="traj-refs">
                            <img src="static/eval_cases/${caseId}/ref_01.jpg" onerror="this.style.display='none'">
                            <img src="static/eval_cases/${caseId}/ref_02.jpg" onerror="this.style.display='none'">
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    
    viewer.innerHTML = `
        <div class="traj-header">
            <div class="traj-prompt-box">
                <div class="label">💬 User Request</div>
                ${escapeHtml(traj.user_prompt)}
            </div>
        </div>
        <div class="traj-timeline">${timelineHTML}</div>
    `;
}

function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

document.querySelectorAll('.traj-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.traj-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        loadTrajectory(tab.dataset.case);
    });
});

// ========== BibTeX copy ==========
document.getElementById('copy-bibtex').addEventListener('click', () => {
    const code = document.querySelector('.code-block code').textContent;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById('copy-bibtex');
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => { btn.innerHTML = '<i class="fas fa-copy"></i> Copy'; }, 2000);
    });
});

// ========== Init ==========
loadGallery();
loadDataExamples();
loadTrajectory('case_0003');
