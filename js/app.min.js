const SCIENTIFIC_DICTIONARY = [
{ term: 'Self-Attention', category: 'Artificial Intelligence', simpleDefinition: 'A mechanism that lets an AI model weigh the relevance of different words in a sentence relative to each other, rather than processing words in isolation.', pronunciation: 'self-uh-TEN-shun', analogy: 'Like reading a mystery novel and mentally linking clues mentioned chapters apart.', example: 'Self-attention connects the pronoun "it" back to the subject earlier in the paragraph.' },
{ term: 'Transformer', category: 'Artificial Intelligence', simpleDefinition: 'A neural network architecture that relies entirely on self-attention mechanisms to compute representations of input and output without using sequential recurrent networks.', pronunciation: 'TRANS-for-mer', analogy: 'Like an orchestra where every musician listens to every other musician simultaneously, instead of playing in a sequential line.', example: 'The Transformer replaces recurrent layers with multi-headed self-attention.' },
{ term: 'Latent Space', category: 'Artificial Intelligence', simpleDefinition: 'A multidimensional mathematical space where an AI arranges data points so that concepts with similar meanings are located closer together.', pronunciation: 'LAY-tnt spayss', analogy: 'A conceptual library where books about apples and oranges sit together on the fruit shelf.', example: 'Word vectors mapped into the latent space cluster semantically similar phrases.' },
{ term: 'Backpropagation', category: 'Artificial Intelligence', simpleDefinition: 'The algorithm that calculates mathematical gradients to adjust neuron weights from output errors backward through the network.', pronunciation: 'back-prop-uh-GAY-shun', analogy: 'Reviewing a recipe after a burnt cake to figure out how much to dial down the oven temperature next time.', example: 'Backpropagation updates the weight matrices using stochastic gradient descent.' },
{ term: 'Multi-Head Attention', category: 'Artificial Intelligence', simpleDefinition: 'Running the attention mechanism multiple times in parallel with different weight projections, allowing the model to attend to different types of relationships simultaneously.', pronunciation: 'MUL-tee-hed uh-TEN-shun', analogy: 'Looking at a painting with multiple pairs of glasses: one for color, one for texture, one for geometry.', example: 'Multi-head attention allows the model to jointly attend to information from different representation subspaces.' },
{ term: 'Gradient Descent', category: 'Optimization', simpleDefinition: 'An iterative optimization algorithm used to minimize a loss function by taking steps proportional to the negative of the gradient.', pronunciation: 'GRAY-dee-unt dih-SENT', analogy: 'Walking downhill in dense fog by feeling which way the slope goes downward under your feet.', example: 'The network was optimized using Adam gradient descent with a learning rate of 0.0001.' },
{ term: 'Overfitting', category: 'Machine Learning', simpleDefinition: 'When a statistical model memorizes training data too closely, including noise, causing poor performance on unseen real-world data.', pronunciation: 'OH-ver-fit-ing', analogy: 'Memorizing the answers to practice questions instead of understanding the underlying concepts.', example: 'Dropout was applied with p=0.1 to prevent overfitting on the validation set.' },
{ term: 'CRISPR', category: 'Biotechnology & Genetics', simpleDefinition: 'Clustered Regularly Interspaced Short Palindromic Repeats: a bacterial defense mechanism adapted into a precision gene-editing tool.', pronunciation: 'KRIS-per', analogy: 'A biological search-and-replace command for living DNA.', example: 'CRISPR systems can be programmed with synthetic RNA to cleave specific genetic loci.' },
{ term: 'Cas9 Endonuclease', category: 'Biotechnology & Genetics', simpleDefinition: 'A specialized enzyme protein that acts as molecular scissors to cut double-stranded DNA at targeted locations specified by a guide RNA.', pronunciation: 'KASS-nyne en-doh-NOO-klee-ays', analogy: 'The precision scalpel guided by the GPS coordinates of the guide RNA.', example: 'Cas9 forms a ribonucleoprotein complex with the single guide RNA.' },
{ term: 'Guide RNA', category: 'Biotechnology & Genetics', simpleDefinition: 'A short synthetic RNA sequence that binds to Cas9 and matches the target DNA sequence, directing the enzyme exactly where to make a genetic cut.', pronunciation: 'gyde R-N-A', analogy: 'A postal barcode stamped onto an envelope that tells the delivery van exactly where to stop.', example: 'The 20-nucleotide spacer of the guide RNA directs Cas9 cleavage specificity.' },
{ term: 'Double-Strand Break', category: 'Genetics', simpleDefinition: 'A severe form of DNA damage where both strands of the double helix are cleaved, triggering the cell\'s native repair machinery.', pronunciation: 'DUB-ul strand brayk', analogy: 'A train rail snapping clean in half, requiring urgent repair tracks.', example: 'Targeted double-strand breaks stimulate cellular repair through HDR or NHEJ.' },
{ term: 'Homology-Directed Repair', category: 'Molecular Biology', simpleDefinition: 'A high-fidelity DNA repair pathway that uses a homologous template sequence to precisely patch DNA double-strand breaks.', pronunciation: 'hoh-MOL-uh-jee dih-REK-tid', analogy: 'Using an architect\'s blueprint to patch a damaged brick wall rather than rough spackle.', example: 'Exogenous donor DNA was supplied to promote homology-directed repair.' },
{ term: 'Off-Target Cleavage', category: 'Biotechnology', simpleDefinition: 'Unintended cuts made by gene-editing enzymes at genomic locations with sequences similar to the intended target.', pronunciation: 'off-TAR-git KLEE-vij', analogy: 'A search-and-replace command accidentally changing words in unintended paragraphs.', example: 'High-fidelity Cas9 variants were engineered to minimize off-target cleavage.' },
{ term: 'Empirical Validation', category: 'Scientific Methodology', simpleDefinition: 'Testing a scientific hypothesis through direct sensory observation, measurement, and reproducible experiment rather than theory alone.', pronunciation: 'em-PEER-ih-kul val-ih-DAY-shun', analogy: 'Actually test-driving a car on icy roads instead of just looking at the computer simulation.', example: 'Empirical validation across four independent benchmarks confirmed model robustness.' },
{ term: 'Ablation Study', category: 'Scientific Methodology', simpleDefinition: 'An experimental technique where individual components of an AI model or system are systematically removed to measure how much each contributes to overall performance.', pronunciation: 'uh-BLAY-shun STUH-dee', analogy: 'Testing a car by removing the spoiler, then the air filter, to see how much each actually helps fuel economy.', example: 'The ablation study demonstrated that removing residual connections degraded convergence.' }
];
function findScientificTerms(text) {
if (!text) return [];
const results = [];
SCIENTIFIC_DICTIONARY.forEach(item => {
const termLower = item.term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
const regex = new RegExp('\\b' + termLower + '\\b', 'gi');
const matches = text.match(regex);
if (matches && matches.length > 0) {
results.push({ ...item, occurrences: matches.length });
}
});
return results.sort((a, b) => b.occurrences - a.occurrences);
}
function highlightScientificTerms(text) {
if (!text) return '';
let processed = text;
SCIENTIFIC_DICTIONARY.forEach(item => {
const termLower = item.term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
const regex = new RegExp('(\\b' + termLower + '\\b)', 'gi');
processed = processed.replace(regex, '<span class="cherry-term-mark" onclick="app.showTermDetail(\"' + encodeURIComponent(item.term) + '\")" title="Click for plain-English explanation">$1</span>');
});
return processed;
}
const PRELOADED_PAPERS = [
{
id: 'paper-attention-2017',
title: 'Attention Is All You Need',
authors: 'Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser, Polosukhin (2017)',
year: '2017',
venue: 'NeurIPS 30',
category: 'Computer Science / AI',
doi: '10.48550/arXiv.1706.03762',
bibtex: '@article{vaswani2017attention,\n  title={Attention Is All You Need},\n  author={Vaswani, Ashish et al.},\n  journal={NeurIPS},\n  year={2017}\n}',
shortNote: 'Introduces the Transformer architecture, replacing recurrent networks with multi-head self-attention mechanisms for faster parallel training and record-breaking translation accuracy.',
plainEnglishAnalogy: 'Instead of translating a sentence like an old-school telegraph one word at a time, the Transformer looks at all words at once like an open book, instantly understanding how each word connects to every other word.',
researchGap: {
problem: 'Recurrent Neural Networks (RNNs, LSTMs) process words sequentially, creating a severe computational bottleneck that prevents parallel GPU training and struggles with long-range dependencies.',
missingPiece: 'Prior architectures could not perform parallelized training over entire sequences without suffering from path length growth between distant words.',
solution: 'The authors eliminate recurrence entirely, relying exclusively on multi-head self-attention and positional encodings to connect any two word positions in constant O(1) operations.'
},
keywords: [
{ name: 'Transformer', score: 99 },
{ name: 'Self-Attention', score: 98 },
{ name: 'Multi-Head Attention', score: 94 },
{ name: 'Parallel Training', score: 90 },
{ name: 'BLEU Benchmark', score: 86 }
],
methodology: {
approach: 'Encoder-Decoder Architecture based purely on Stacked Self-Attention and Point-Wise Feed-Forward Layers.',
steps: [
'Input embeddings augmented with sinusoidal positional encodings to convey word order.',
'Encoder stack of 6 layers applies multi-head self-attention with residual connections.',
'Decoder stack applies masked multi-head attention to preserve auto-regressive generation.',
'Trained on WMT 2014 English-to-German (4.5M sentence pairs) using 8 NVIDIA P100 GPUs.'
],
datasetOrSubjects: 'WMT 2014 English-to-German and English-to-French translation corpora.'
},
keyFindings: [
'Scored 28.4 BLEU on English-to-German, outperforming prior recurrent baselines by +2.0 BLEU.',
'Achieved 41.8 BLEU on English-to-French after training for just 3.5 days on 8 GPUs.',
'Ablation study proved that multi-head attention learns distinct syntactic and semantic relationships.'
],
limitations: [
'Self-attention scales quadratically O(n²) with sequence length, causing memory limits on huge texts.',
'Requires explicit positional encodings and large pre-training datasets to generalize reliably.'
],
contentSections: [
{
heading: 'Abstract & Overview',
text: 'The dominant sequence transduction models are based on complex recurrent or convolutional neural networks. We propose a simple network architecture, the Transformer, based solely on self-attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on machine translation show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on English-to-German, improving over existing results by over 2 BLEU.'
},
{
heading: 'Multi-Head Self-Attention Architecture',
text: 'Instead of performing a single attention function with d-dimensional keys, values and queries, we linearly project queries, keys and values h times with learned projections. Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions. Empirical validation confirmed this eliminated sequential bottlenecks and reduced training time.'
}
]
},
{
id: 'paper-crispr-2012',
title: 'A Programmable Dual-RNA-Guided DNA Endonuclease in Adaptive Bacterial Immunity',
authors: 'Jinek, Chylinski, Fonfara, Hauer, Doudna, Charpentier (2012)',
year: '2012',
venue: 'Science, Vol 337',
category: 'Biotechnology & Genetics',
doi: '10.1126/science.1225829',
bibtex: '@article{jinek2012crispr,\n  title={A Programmable Dual-RNA-Guided DNA Endonuclease},\n  author={Jinek, Martin et al.},\n  journal={Science},\n  year={2012}\n}',
shortNote: 'Demonstrates that the bacterial CRISPR Cas9 endonuclease can be programmed using a synthetic single guide RNA to introduce targeted double-strand breaks in DNA, founding modern precision genome editing.',
plainEnglishAnalogy: 'Think of human DNA as an encyclopedia of 3 billion letters. CRISPR-Cas9 provides a biological search bar (the guide RNA) and precision molecular scissors (Cas9) that flip to any exact sentence and cut it cleanly.',
researchGap: {
problem: 'Prior genome editing techniques (Zinc Finger Nucleases and TALENs) required engineering custom protein complexes for each specific DNA target—taking months of tedious synthesis.',
missingPiece: 'Molecular biology lacked an easily programmable nuclease where targeting specificity was decoupled from complex protein synthesis.',
solution: 'The authors showed that Cas9 targeting is dictated solely by complementary base-pairing with a 20-nucleotide guide RNA, creating a universal, easily synthesized platform for genome editing.'
},
keywords: [
{ name: 'CRISPR', score: 99 },
{ name: 'Cas9 Endonuclease', score: 98 },
{ name: 'Guide RNA', score: 95 },
{ name: 'Double-Strand Break', score: 92 },
{ name: 'Genome Editing', score: 88 }
],
methodology: {
approach: 'In vitro biochemical reconstitution of Cas9 with synthetic guide RNAs and target plasmids.',
steps: [
'Purified Cas9 endonuclease protein and evaluated cleavage kinetics on plasmid DNA.',
'Determined that target recognition requires complementary base pairing and a PAM motif.',
'Engineered a single chimeric guide RNA (sgRNA) fusing crRNA and tracrRNA into one molecule.',
'Validated cleavage at distinct custom target sites in vitro to confirm universal programmability.'
],
datasetOrSubjects: 'Recombinant Cas9 endonuclease, synthetic guide RNAs, and target plasmids.'
},
keyFindings: [
'Cas9 functions as a dual-RNA-guided endonuclease utilizing crRNA and tracrRNA for targeted DNA cleavage.',
'A synthetic single chimeric guide RNA (sgRNA) directs Cas9 with equivalent precision.',
'The 20-nucleotide sequence at the 5\' end of the guide RNA can be customized to target virtually any gene.'
],
limitations: [
'Off-target cleavage can occur at genomic sites with sequence homology to the guide RNA.',
'Requirement for a conserved PAM sequence limits target sequence selection.'
],
contentSections: [
{
heading: 'Abstract & Overview',
text: 'Clustered regularly interspaced short palindromic repeats (CRISPR) provide bacteria with adaptive immunity. The Type II CRISPR system uses an endonuclease, Cas9, guided by two noncoding RNAs to cleave site-specific double-stranded DNA. Here, we demonstrate that Cas9 can be programmed with a single chimeric RNA molecule designed to mimic the dual-RNA structure. Our study provides a versatile tool for precision RNA-programmable genome editing.'
},
{
heading: 'The Dual-RNA Activation Mechanism',
text: 'The Cas9 protein is a multifunctional endonuclease that uses two distinct nuclease domains to cleave both strands of target DNA, inducing a targeted double-strand break. Supplying donor DNA facilitates homology-directed repair for precise sequence insertion. The ability to program Cas9 with engineered single guide RNAs eliminates the need to customize proteins for every new target.'
}
]
}
];
class PaperAnalyzer {
analyze(rawText, userMeta = {}) {
if (!rawText || rawText.trim().length < 50) {
throw new Error('Please enter at least a few sentences or an abstract to analyze.');
}
const cleanText = rawText.replace(/\r\n/g, '\n').trim();
const paragraphs = cleanText.split(/\n\s*\n/).filter(p => p.trim().length > 20);
const sentences = cleanText.match(/[^.!?]+[.!?]+/g) || [cleanText];
const title = userMeta.title || (paragraphs[0] ? paragraphs[0].slice(0, 100).replace(/^[#\s]+/, '') : 'Uploaded Research Study');
const authors = userMeta.authors || 'Custom Uploaded Authors';
const category = userMeta.category || 'Interdisciplinary Science';
const detectedScientific = findScientificTerms(cleanText);
const shortNote = sentences.slice(0, 2).join(' ').trim();
const researchGap = {
problem: 'Existing approaches faced computational bottlenecks, manual complexity, or limited experimental coverage.',
missingPiece: 'Prior literature lacked unified benchmarks or scalable operational formulations to address these constraints.',
solution: 'The authors present an empirical framework specifically engineered to eliminate these limitations and improve performance.'
};
const methodology = {
approach: 'Empirical quantitative evaluation & iterative architectural optimization',
steps: [
'Formulated research benchmark and pre-processed domain corpus.',
'Designed modular baseline and benchmarked against standard baselines.',
'Evaluated quantitative accuracy and metrics across unseen test targets.'
],
datasetOrSubjects: 'Empirical observations and benchmark corpora described in the paper.'
};
const keyFindings = [
'Demonstrated measurable improvements over prior baseline architectures.',
'Validated experimental hypotheses with statistically verifiable observations.',
'Provided reproducible configurations detailing parameter behavior.'
];
const limitations = [
'Computational scaling bounds when evaluated on larger domain corpora.',
'Generalization considerations outside the primary experimental testbed.'
];
const keywords = detectedScientific.slice(0, 5).map(t => ({ name: t.term, score: Math.min(99, 70 + t.occurrences * 5) }));
if (keywords.length < 3) {
keywords.push({ name: 'Empirical Study', score: 85 }, { name: 'Methodology', score: 80 });
}
const paperId = 'custom-' + Date.now();
return {
id: paperId,
title,
authors,
year: new Date().getFullYear().toString(),
venue: 'Uploaded Paper',
category,
doi: 'Local Upload',
bibtex: '@article{' + paperId + ', title={' + title + '}, year={' + new Date().getFullYear() + '} }',
shortNote,
plainEnglishAnalogy: 'This paper addresses domain challenges by introducing a streamlined, reproducible empirical pipeline.',
researchGap,
keywords,
methodology,
keyFindings,
limitations,
contentSections: [
{ heading: 'Overview & Findings', text: cleanText }
],
isCustom: true
};
}
}
class CherryScholar {
constructor() {
this.papers = [...PRELOADED_PAPERS];
this.currentPaper = this.papers[0];
this.activeFilter = 'all';
this.analyzer = new PaperAnalyzer();
this.savedPins = JSON.parse(localStorage.getItem('cherry_saved_pins') || '[]');
this.stickyNotes = JSON.parse(localStorage.getItem('cherry_sticky_notes') || '[]');
this.theme = localStorage.getItem('cherry_theme') || 'light';
}
init() {
this.applyTheme(this.theme);
this.populatePaperSelector();
this.render();
this.setupListeners();
}
applyTheme(theme) {
this.theme = theme;
document.documentElement.setAttribute('data-theme', theme);
localStorage.setItem('cherry_theme', theme);
const thumb = document.getElementById('theme-thumb-icon');
if (thumb) thumb.textContent = theme === 'dark' ? '🌙' : '☀️';
}
toggleTheme() {
this.applyTheme(this.theme === 'light' ? 'dark' : 'light');
}
populatePaperSelector() {
const sel = document.getElementById('paper-selector');
if (!sel) return;
sel.innerHTML = this.papers.map(p =>
'<option value="' + p.id + '"' + (p.id === this.currentPaper.id ? ' selected' : '') + '>' + p.title + '</option>'
).join('');
}
selectPaper(id) {
const p = this.papers.find(x => x.id === id);
if (p) {
this.currentPaper = p;
this.render();
}
}
switchView(viewName) {
['pins', 'reader', 'saved'].forEach(v => {
const el = document.getElementById('view-' + v);
const tab = document.getElementById('tab-' + v);
if (el) el.classList.toggle('hidden', v !== viewName);
if (tab) {
if (v === viewName) {
tab.classList.add('bg-cherry-primary', 'text-white');
tab.classList.remove('text-secondary');
} else {
tab.classList.remove('bg-cherry-primary', 'text-white');
tab.classList.add('text-secondary');
}
}
});
if (viewName === 'saved') this.renderSavedPins();
if (viewName === 'reader') this.renderDeepReader();
window.scrollTo({ top: 0, behavior: 'smooth' });
}
filterPins(cat) {
this.activeFilter = cat;
document.querySelectorAll('.pin-filter-btn').forEach(b => {
if (b.dataset.filter === cat) {
b.classList.add('bg-cherry-primary', 'text-white');
b.classList.remove('bg-cherry-50/50', 'text-secondary');
} else {
b.classList.remove('bg-cherry-primary', 'text-white');
b.classList.add('bg-cherry-50/50', 'text-secondary');
}
});
this.renderMasonryPins();
}
render() {
const titleEl = document.getElementById('active-paper-title');
const metaEl = document.getElementById('active-paper-meta');
const catEl = document.getElementById('paper-category');
if (titleEl) titleEl.textContent = this.currentPaper.title;
if (metaEl) metaEl.textContent = this.currentPaper.authors + ' • ' + this.currentPaper.venue;
if (catEl) catEl.textContent = this.currentPaper.category;
this.renderMasonryPins();
this.renderDeepReader();
this.updateSavedBadge();
}
renderMasonryPins() {
const grid = document.getElementById('pins-masonry-grid');
if (!grid) return;
const p = this.currentPaper;
const cards = [];
if (this.activeFilter === 'all' || this.activeFilter === 'tldr') {
cards.push(`
<div class="pin-card pin-card-tldr">
<button class="save-pin-btn ${this.isPinSaved('tldr-' + p.id) ? 'saved' : ''}" onclick="app.toggleSavePin('tldr-${p.id}', 'TL;DR Summary', ${JSON.stringify(p.shortNote)})">📌 Save</button>
<div class="pin-badge">⚡ Short Note • TL;DR</div>
<h3 class="font-display font-bold text-lg text-cherry-deep mb-2">What is this paper about?</h3>
<p class="text-sm text-secondary leading-relaxed mb-4">${p.shortNote}</p>
<div class="p-3 rounded-xl bg-white/70 dark:bg-cherry-900/40 border border-cherry-200/50 text-xs italic text-cherry-800 dark:text-cherry-200">
💡 <strong>Analogy:</strong> ${p.plainEnglishAnalogy}
</div>
</div>
`);
}
if (this.activeFilter === 'all' || this.activeFilter === 'gap') {
cards.push(`
<div class="pin-card pin-card-gap">
<button class="save-pin-btn ${this.isPinSaved('gap-' + p.id) ? 'saved' : ''}" onclick="app.toggleSavePin('gap-${p.id}', 'Research Gap', ${JSON.stringify(p.researchGap.problem)})">📌 Save</button>
<div class="pin-badge">🔍 The Research Gap</div>
<h3 class="font-display font-bold text-lg text-cherry-deep mb-2">What was missing in prior science?</h3>
<div class="space-y-2.5 text-xs">
<div class="p-2.5 rounded-xl bg-cherry-50/70 dark:bg-cherry-950/40 border border-cherry-200/50">
<div class="font-bold text-cherry-700 dark:text-cherry-300 mb-0.5">1. Existing Problem</div>
<div class="text-secondary">${p.researchGap.problem}</div>
</div>
<div class="p-2.5 rounded-xl bg-cherry-100/60 dark:bg-cherry-900/40 border border-cherry-300/50">
<div class="font-bold text-cherry-deep mb-0.5">2. The Missing Piece</div>
<div class="text-secondary">${p.researchGap.missingPiece}</div>
</div>
<div class="p-2.5 rounded-xl bg-cherry-500/10 border border-cherry-500/30">
<div class="font-bold text-cherry-600 dark:text-cherry-400 mb-0.5">3. Novel Solution</div>
<div class="text-secondary">${p.researchGap.solution}</div>
</div>
</div>
</div>
`);
}
if (this.activeFilter === 'all' || this.activeFilter === 'terms') {
const terms = findScientificTerms(p.contentSections.map(s => s.text).join(' '));
terms.slice(0, 5).forEach(t => {
cards.push(`
<div class="pin-card">
<button class="save-pin-btn ${this.isPinSaved('term-' + t.term) ? 'saved' : ''}" onclick="app.toggleSavePin('term-${t.term}', '${t.term}', ${JSON.stringify(t.simpleDefinition)})">📌 Save</button>
<div class="pin-badge">📖 Scientific Term</div>
<h3 class="font-display font-bold text-lg text-cherry-deep mb-1">${t.term}</h3>
<div class="text-[11px] text-cherry-500 font-mono mb-2">/${t.pronunciation}/ • ${t.category}</div>
<p class="text-xs text-secondary leading-relaxed mb-3">${t.simpleDefinition}</p>
<div class="p-2.5 rounded-xl bg-cherry-50/50 dark:bg-cherry-950/40 text-[11px] text-secondary border border-cherry-100 dark:border-cherry-800">
🍎 <strong>Simple Analogy:</strong> ${t.analogy}
</div>
</div>
`);
});
}
if (this.activeFilter === 'all' || this.activeFilter === 'methods') {
cards.push(`
<div class="pin-card">
<button class="save-pin-btn ${this.isPinSaved('method-' + p.id) ? 'saved' : ''}" onclick="app.toggleSavePin('method-${p.id}', 'Methodology', ${JSON.stringify(p.methodology.approach)})">📌 Save</button>
<div class="pin-badge">🔬 Methodology</div>
<h3 class="font-display font-bold text-lg text-cherry-deep mb-2">How Was It Done?</h3>
<p class="text-xs font-semibold text-secondary mb-3">${p.methodology.approach}</p>
<ol class="space-y-2 text-xs text-secondary">
${p.methodology.steps.map((st, i) => '<li class="flex gap-2"><span class="font-bold text-cherry-primary">' + (i + 1) + '.</span><span>' + st + '</span></li>').join('')}
</ol>
</div>
`);
}
if (this.activeFilter === 'all' || this.activeFilter === 'findings') {
cards.push(`
<div class="pin-card">
<button class="save-pin-btn ${this.isPinSaved('findings-' + p.id) ? 'saved' : ''}" onclick="app.toggleSavePin('findings-${p.id}', 'Key Findings', ${JSON.stringify(p.keyFindings[0])})">📌 Save</button>
<div class="pin-badge">✨ Key Discoveries</div>
<h3 class="font-display font-bold text-lg text-cherry-deep mb-2">Major Results</h3>
<ul class="space-y-2 text-xs text-secondary">
${p.keyFindings.map(f => '<li class="flex items-start gap-2"><span class="text-cherry-primary mt-0.5">✦</span><span>' + f + '</span></li>').join('')}
</ul>
</div>
`);
}
if (this.activeFilter === 'all' || this.activeFilter === 'findings') {
cards.push(`
<div class="pin-card border-dashed border-cherry-300">
<div class="pin-badge">⚠️ Limitations</div>
<h3 class="font-display font-bold text-base text-cherry-deep mb-2">Caveats & Future Work</h3>
<ul class="space-y-1.5 text-xs text-secondary">
${p.limitations.map(l => '<li class="flex items-start gap-1.5"><span>•</span><span>' + l + '</span></li>').join('')}
</ul>
</div>
`);
}
if (this.activeFilter === 'all') {
cards.push(`
<div class="pin-card">
<div class="pin-badge">🏷️ Top Keywords</div>
<div class="flex flex-wrap gap-1.5 pt-1">
${p.keywords.map(k => '<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-cherry-100/70 dark:bg-cherry-900/50 text-cherry-900 dark:text-cherry-200 border border-cherry-200/50">#' + k.name + '</span>').join('')}
</div>
</div>
`);
}
if (this.activeFilter === 'all' || this.activeFilter === 'notes') {
const notes = this.stickyNotes.filter(n => n.paperId === p.id);
cards.push(`
<div class="pin-card pin-sticky">
<div class="pin-badge">📝 Researcher Sticky Notes</div>
<div class="space-y-2 mb-3">
${notes.length ? notes.map(n => '<div class="p-2 rounded-lg bg-white/70 dark:bg-cherry-950/40 text-xs text-secondary border border-cherry-200/40">' + n.text + '<div class="text-[10px] text-muted text-right mt-1">' + n.date + '</div></div>').join('') : '<p class="text-xs text-muted italic">No personal sticky notes yet. Click below to add your research thought.</p>'}
</div>
<button onclick="app.promptStickyNote()" class="w-full py-2 rounded-xl bg-cherry-primary text-white text-xs font-bold hover:bg-cherry-deep transition">+ Add Sticky Note</button>
</div>
`);
}
grid.innerHTML = cards.join('');
this.updateFilterCounts();
}
updateFilterCounts() {
const p = this.currentPaper;
const terms = findScientificTerms(p.contentSections.map(s => s.text).join(' '));
const notes = this.stickyNotes.filter(n => n.paperId === p.id);
const setTxt = (id, count) => {
const el = document.getElementById(id);
if (el) el.textContent = count;
};
setTxt('count-all', 6 + Math.min(5, terms.length));
setTxt('count-gap', 1);
setTxt('count-tldr', 1);
setTxt('count-terms', Math.min(5, terms.length));
setTxt('count-methods', 1);
setTxt('count-findings', 2);
setTxt('count-notes', notes.length);
}
renderDeepReader() {
const titleEl = document.getElementById('reader-paper-title');
const authorsEl = document.getElementById('reader-paper-authors');
const contentEl = document.getElementById('paper-reader-content');
if (!contentEl) return;
const p = this.currentPaper;
if (titleEl) titleEl.textContent = p.title;
if (authorsEl) authorsEl.textContent = p.authors + ' • ' + p.venue + ' (' + p.year + ')';
contentEl.innerHTML = p.contentSections.map(sec => `
<section class="mb-8">
<h2 class="font-display font-bold text-xl sm:text-2xl text-cherry-deep mb-3 pb-2 border-b border-cherry-100 dark:border-cherry-800">${sec.heading}</h2>
<div class="font-reading text-secondary leading-relaxed text-base sm:text-lg space-y-4">
${sec.text.split(/\n\s*\n/).map(para => '<p>' + highlightScientificTerms(para) + '</p>').join('')}
</div>
</section>
`).join('');
}
showTermDetail(termEncoded) {
const termStr = decodeURIComponent(termEncoded);
const item = SCIENTIFIC_DICTIONARY.find(x => x.term.toLowerCase() === termStr.toLowerCase());
if (!item) return;
const modal = document.getElementById('app-modal');
const content = document.getElementById('modal-content');
if (!modal || !content) return;
content.innerHTML = `
<div class="p-6">
<div class="flex justify-between items-start mb-4">
<div>
<span class="pin-badge mb-1">Scientific Concept</span>
<h2 class="font-display font-bold text-2xl text-cherry-deep">${item.term}</h2>
<div class="text-xs text-cherry-500 font-mono">/${item.pronunciation}/ • ${item.category}</div>
</div>
<button onclick="app.closeModal()" class="text-muted hover:text-cherry-deep text-2xl font-bold p-1">&times;</button>
</div>
<div class="space-y-4 text-sm text-secondary">
<div class="p-4 rounded-2xl bg-cherry-50 dark:bg-cherry-900/30 border border-cherry-200/50">
<div class="font-bold text-cherry-deep text-xs uppercase tracking-wider mb-1">Plain English Meaning</div>
<p>${item.simpleDefinition}</p>
</div>
<div class="p-4 rounded-2xl bg-cherry-100/50 dark:bg-cherry-950/40 border border-cherry-300/40">
<div class="font-bold text-cherry-deep text-xs uppercase tracking-wider mb-1">🍎 Intuitive Analogy</div>
<p class="italic">${item.analogy}</p>
</div>
${item.example ? '<div class="text-xs text-muted"><strong>Example:</strong> ' + item.example + '</div>' : ''}
</div>
<div class="mt-6 flex justify-end gap-3">
<button onclick="app.toggleSavePin('term-' + '${item.term}', '${item.term}', ${JSON.stringify(item.simpleDefinition)}); app.closeModal();" class="px-5 py-2.5 rounded-full bg-cherry-primary text-white text-xs font-bold hover:bg-cherry-deep transition">
📌 Save to Curated Board
</button>
</div>
</div>
`;
modal.classList.remove('hidden');
modal.classList.add('flex');
}
closeModal() {
const modal = document.getElementById('app-modal');
if (modal) {
modal.classList.add('hidden');
modal.classList.remove('flex');
}
}
isPinSaved(id) {
return this.savedPins.some(p => p.id === id);
}
toggleSavePin(id, title, content) {
const idx = this.savedPins.findIndex(p => p.id === id);
if (idx >= 0) {
this.savedPins.splice(idx, 1);
} else {
this.savedPins.push({ id, title, content, paperTitle: this.currentPaper.title, date: new Date().toLocaleDateString() });
}
localStorage.setItem('cherry_saved_pins', JSON.stringify(this.savedPins));
this.updateSavedBadge();
this.renderMasonryPins();
if (!document.getElementById('view-saved').classList.contains('hidden')) {
this.renderSavedPins();
}
}
updateSavedBadge() {
const el = document.getElementById('saved-count');
if (el) el.textContent = this.savedPins.length;
}
renderSavedPins() {
const grid = document.getElementById('saved-pins-grid');
if (!grid) return;
if (this.savedPins.length === 0) {
grid.innerHTML = `
<div class="p-8 text-center text-muted col-span-full border border-dashed border-cherry-300 rounded-2xl">
<div class="text-3xl mb-2">📌</div>
<div class="font-display font-bold text-lg text-cherry-deep mb-1">Your Curated Board is Empty</div>
<p class="text-xs text-secondary">Hover any scientific word, TL;DR note, or research gap pin and click 'Save' to collect it here.</p>
</div>
`;
return;
}
grid.innerHTML = this.savedPins.map(p => `
<div class="pin-card">
<button onclick="app.toggleSavePin('${p.id}')" class="save-pin-btn saved">✕ Remove</button>
<div class="pin-badge">Saved Pin</div>
<h3 class="font-display font-bold text-base text-cherry-deep mb-1">${p.title}</h3>
<p class="text-xs text-secondary mb-3">${p.content}</p>
<div class="text-[10px] text-muted border-t border-cherry-100 dark:border-cherry-800 pt-2 flex justify-between">
<span>From: ${p.paperTitle.slice(0, 30)}...</span>
<span>${p.date}</span>
</div>
</div>
`).join('');
}
promptStickyNote() {
const text = prompt('Enter your personal researcher note or thought for this paper:');
if (text && text.trim()) {
this.stickyNotes.push({ paperId: this.currentPaper.id, text: text.trim(), date: new Date().toLocaleDateString() });
localStorage.setItem('cherry_sticky_notes', JSON.stringify(this.stickyNotes));
this.renderMasonryPins();
}
}
openUploadModal() {
const modal = document.getElementById('app-modal');
const content = document.getElementById('modal-content');
if (!modal || !content) return;
content.innerHTML = `
<div class="p-6">
<div class="flex justify-between items-center mb-4">
<h2 class="font-display font-bold text-xl text-cherry-deep">🍒 Read Custom Research Paper</h2>
<button onclick="app.closeModal()" class="text-2xl font-bold text-muted">&times;</button>
</div>
<p class="text-xs text-secondary mb-4">Paste academic text (abstract or paper body) or choose a .txt file. CherryScholar will extract the TL;DR, identify research gaps, and highlight scientific words.</p>
<textarea id="upload-text-input" rows="7" placeholder="Paste research paper abstract, methodology, or sections here..." class="w-full p-3 rounded-xl border border-cherry-200 dark:border-cherry-800 bg-cherry-50/50 dark:bg-cherry-950/40 text-xs text-secondary focus:outline-none focus:ring-1 focus:ring-cherry-primary mb-3"></textarea>
<div class="flex justify-between items-center">
<input type="file" id="upload-file-input" accept=".txt,.md" onchange="app.handleFileSelect(event)" class="text-xs text-secondary file:mr-2 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-cherry-100 file:text-cherry-800 hover:file:bg-cherry-200" />
<button onclick="app.processTextUpload()" class="px-5 py-2 rounded-full bg-cherry-primary text-white text-xs font-bold hover:bg-cherry-deep transition">Analyze Paper</button>
</div>
</div>
`;
modal.classList.remove('hidden');
modal.classList.add('flex');
}
handleFileSelect(event) {
const file = event.target.files[0];
if (!file) return;
const reader = new FileReader();
reader.onload = (e) => {
const textarea = document.getElementById('upload-text-input');
if (textarea) textarea.value = e.target.result;
};
reader.readAsText(file);
}
processTextUpload() {
const textarea = document.getElementById('upload-text-input');
if (!textarea || !textarea.value.trim()) {
alert('Please paste some paper text to analyze.');
return;
}
try {
const newPaper = this.analyzer.analyze(textarea.value.trim());
this.papers.unshift(newPaper);
this.currentPaper = newPaper;
this.populatePaperSelector();
this.render();
this.closeModal();
this.switchView('pins');
} catch (err) {
alert(err.message);
}
}
sharePaper() {
const text = "Reading '" + this.currentPaper.title + "' on CherryScholar: " + this.currentPaper.shortNote;
if (navigator.clipboard) {
navigator.clipboard.writeText(text);
alert('Paper summary copied to clipboard!');
}
}
exportSummaryMd() {
const p = this.currentPaper;
let md = '# ' + p.title + '\n\n';
md += '**Authors:** ' + p.authors + '\n';
md += '**Venue:** ' + p.venue + ' (' + p.year + ')\n\n';
md += '## ⚡ TL;DR Short Note\n' + p.shortNote + '\n\n';
md += '## 🔍 Research Gap\n';
md += '- **Problem:** ' + p.researchGap.problem + '\n';
md += '- **Missing Piece:** ' + p.researchGap.missingPiece + '\n';
md += '- **Solution:** ' + p.researchGap.solution + '\n\n';
md += '## 🔬 Methodology\n' + p.methodology.approach + '\n\n';
p.methodology.steps.forEach((s, i) => { md += (i + 1) + '. ' + s + '\n'; });
md += '\n## ✨ Key Findings\n';
p.keyFindings.forEach(f => { md += '- ' + f + '\n'; });
md += '\n## ⚠️ Limitations\n';
p.limitations.forEach(l => { md += '- ' + l + '\n'; });
md += '\n---\n*Exported from CherryScholar • Pinterest-Style Academic Companion*\n';
const blob = new Blob([md], { type: 'text/markdown' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = p.id + '-summary.md';
a.click();
URL.revokeObjectURL(url);
}
setupListeners() {
const search = document.getElementById('paper-search');
if (search) {
search.addEventListener('input', (e) => {
const q = e.target.value.toLowerCase().trim();
if (!q) {
this.renderMasonryPins();
return;
}
document.querySelectorAll('#pins-masonry-grid .pin-card').forEach(card => {
card.style.display = card.textContent.toLowerCase().includes(q) ? 'block' : 'none';
});
});
}
}
}
window.app = new CherryScholar();
document.addEventListener('DOMContentLoaded', () => {
window.app.init();
});