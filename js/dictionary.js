/**
 * Comprehensive Scientific & Academic Terminology Dictionary
 * Provides plain-English definitions, pronunciations, field taxonomy, and contextual examples.
 */
const SCIENTIFIC_DICTIONARY = {
  // Machine Learning & Computer Science
  "attention mechanism": {
    term: "Attention Mechanism",
    pronunciation: "uh-TEN-shun MEK-uh-niz-um",
    field: "Computer Science / AI",
    plainEnglish: "A technique that allows an algorithm to focus dynamically on the most relevant parts of input data (like specific words in a sentence) rather than treating everything equally.",
    contextExample: "The self-attention mechanism enables the model to weigh dependencies between tokens regardless of distance.",
    difficulty: "Intermediate",
    color: "#D2143A"
  },
  "transformer": {
    term: "Transformer",
    pronunciation: "trans-FOR-mer",
    field: "Machine Learning",
    plainEnglish: "A neural network architecture that processes sequences in parallel using self-attention instead of step-by-step recurrence, powering modern LLMs.",
    contextExample: "We propose the Transformer, a model architecture eschewing recurrence and entirely relying on attention mechanisms.",
    difficulty: "Core",
    color: "#990024"
  },
  "backpropagation": {
    term: "Backpropagation",
    pronunciation: "bak-prop-uh-GAY-shun",
    field: "Deep Learning",
    plainEnglish: "The mathematical recipe used to train neural networks: it calculates how much each artificial neuron contributed to an error and updates its weights in reverse.",
    contextExample: "Gradients were computed via backpropagation and optimized using Adam with warm-up scheduling.",
    difficulty: "Intermediate",
    color: "#C2185B"
  },
  "stochastic": {
    term: "Stochastic",
    pronunciation: "stuh-KAS-tik",
    field: "Statistics & Math",
    plainEnglish: "Random or probabilistic. A stochastic process involves chance or random variables rather than being strictly predetermined.",
    contextExample: "Stochastic gradient descent updates network weights using a randomly sampled mini-batch of training examples.",
    difficulty: "Core",
    color: "#E63946"
  },
  "latent space": {
    term: "Latent Space",
    pronunciation: "LAY-tunt spaces",
    field: "Machine Learning",
    plainEnglish: "A compressed, mathematical multidimensional space where an AI arranges concepts so that similar items (e.g. photos of cats) sit close to each other.",
    contextExample: "The encoder maps input sequences to a continuous representation in a 512-dimensional latent space.",
    difficulty: "Advanced",
    color: "#990024"
  },
  "ablation study": {
    term: "Ablation Study",
    pronunciation: "ab-LAY-shun STUH-dee",
    field: "Experimental CS",
    plainEnglish: "A test where scientists deliberately remove or disable specific parts of an AI model to prove whether that specific part was actually necessary for its success.",
    contextExample: "In our ablation study, removing multi-head attention degraded translation performance by 1.3 BLEU points.",
    difficulty: "Core",
    color: "#D2143A"
  },
  "inductive bias": {
    term: "Inductive Bias",
    pronunciation: "in-DUK-tiv BY-us",
    field: "Machine Learning",
    plainEnglish: "The prior assumptions built into a learning algorithm that help it generalize to new unseen data rather than just memorizing training examples.",
    contextExample: "Convolutional networks possess strong inductive biases regarding spatial translation invariance.",
    difficulty: "Advanced",
    color: "#B7094C"
  },
  "overfitting": {
    term: "Overfitting",
    pronunciation: "oh-ver-FIT-ing",
    field: "Data Science",
    plainEnglish: "When a model memorizes the training data too closely, including random noise, causing it to fail when presented with fresh, unseen data.",
    contextExample: "Dropout and weight decay were introduced as regularizers to mitigate catastrophic overfitting.",
    difficulty: "Core",
    color: "#E63946"
  },
  "gradient vanishing": {
    term: "Vanishing Gradient",
    pronunciation: "VAN-ish-ing GRAY-dee-unt",
    field: "Deep Learning",
    plainEnglish: "A problem in deep networks where learning signals shrink to near zero as they travel backward, stopping earlier layers from learning anything.",
    contextExample: "Residual connections prevent gradient vanishing across 100+ layer architectures.",
    difficulty: "Intermediate",
    color: "#990024"
  },
  "heuristic": {
    term: "Heuristic",
    pronunciation: "hyoo-RIS-tik",
    field: "Methodology / Logic",
    plainEnglish: "A practical 'rule of thumb' or mental shortcut that yields an acceptable solution quickly, even if it is not mathematically guaranteed to be optimal.",
    contextExample: "We utilized an empirical greedy heuristic to prune redundant branch explorations during beam search.",
    difficulty: "Core",
    color: "#C2185B"
  },

  // Biology, Genetics, Medicine
  "crispr-cas9": {
    term: "CRISPR-Cas9",
    pronunciation: "KRIS-per kas-NINE",
    field: "Biotechnology & Genetics",
    plainEnglish: "A molecular scissors technology borrowed from bacterial immune systems that allows scientists to snip and edit DNA sequences at exact genomic locations.",
    contextExample: "The dual-RNA-guided CRISPR-Cas9 endonuclease mediates site-specific double-stranded DNA breaks in target genes.",
    difficulty: "Core",
    color: "#D2143A"
  },
  "endonuclease": {
    term: "Endonuclease",
    pronunciation: "en-doh-NOO-klee-ays",
    field: "Molecular Biology",
    plainEnglish: "An enzyme that cuts the bonds within a DNA or RNA molecule from the inside, like precision surgical clippers.",
    contextExample: "Cas9 functions as an RNA-programmed endonuclease cleaving invading viral DNA.",
    difficulty: "Intermediate",
    color: "#990024"
  },
  "ribonucleoprotein": {
    term: "Ribonucleoprotein (RNP)",
    pronunciation: "RY-boh-NOO-klee-oh-proh-teen",
    field: "Biochemistry",
    plainEnglish: "A molecular complex made of RNA bound together with protein, acting as a functional biological machine.",
    contextExample: "Direct electroporation of Cas9-gRNA ribonucleoprotein complexes reduced off-target genomic cleavage.",
    difficulty: "Advanced",
    color: "#8B0021"
  },
  "phenotype": {
    term: "Phenotype",
    pronunciation: "FEE-noh-type",
    field: "Genetics",
    plainEnglish: "The observable physical traits, biochemical properties, or behaviors of an organism resulting from both its genes and its environment.",
    contextExample: "The knockout mice exhibited a distinct phenotype characterized by impaired lipid metabolism.",
    difficulty: "Core",
    color: "#C2185B"
  },
  "chromatin": {
    term: "Chromatin",
    pronunciation: "KROH-muh-tin",
    field: "Cellular Biology",
    plainEnglish: "The condensed package of DNA wrapped around histone proteins inside cell nuclei that prevents DNA damage and regulates gene expression.",
    contextExample: "Dense heterochromatin structures often impede Cas9 access to the target genomic locus.",
    difficulty: "Intermediate",
    color: "#E63946"
  },
  "homology": {
    term: "Homology",
    pronunciation: "huh-MOL-uh-jee",
    field: "Evolutionary Biology",
    plainEnglish: "Similarity in structure, physiology, or DNA sequence between organisms due to shared ancestry.",
    contextExample: "Homology-directed repair (HDR) utilizes donor templates to incorporate exact genetic modifications.",
    difficulty: "Core",
    color: "#990024"
  },
  "alphafold": {
    term: "AlphaFold",
    pronunciation: "AL-fuh-fold",
    field: "Computational Biology",
    plainEnglish: "An AI system that predicts the 3D atomic structure of a protein directly from its 1D amino acid sequence with atomic-level accuracy.",
    contextExample: "AlphaFold predicts 3D coordinates using an Evoformer module and structural relaxation via AMBER force fields.",
    difficulty: "Core",
    color: "#D2143A"
  },
  "msa": {
    term: "Multiple Sequence Alignment (MSA)",
    pronunciation: "M-S-A",
    field: "Bioinformatics",
    plainEnglish: "Lining up homologous DNA or protein sequences from many different species to spot evolutionary patterns and preserved residues.",
    contextExample: "The model extracts co-evolutionary signals directly from multiple sequence alignments.",
    difficulty: "Intermediate",
    color: "#C2185B"
  },

  // Statistics, Research Methods & Philosophy
  "p-value": {
    term: "p-value",
    pronunciation: "PEE-val-yoo",
    field: "Inferential Statistics",
    plainEnglish: "A calculation showing the probability that your experimental results could have occurred entirely by random coincidence (lower is generally better, e.g. p < 0.05).",
    contextExample: "The difference in clinical outcomes was statistically significant (p = 0.003, two-tailed t-test).",
    difficulty: "Core",
    color: "#D2143A"
  },
  "empirical": {
    term: "Empirical",
    pronunciation: "em-PEER-ih-kul",
    field: "Scientific Method",
    plainEnglish: "Based on real-world observation, verifiable data, and experiments, rather than pure theory or logical speculation.",
    contextExample: "We provide comprehensive empirical evidence across four standard translation benchmarks.",
    difficulty: "Core",
    color: "#990024"
  },
  "orthogonal": {
    term: "Orthogonal",
    pronunciation: "or-THOG-uh-nul",
    field: "Math / Methodology",
    plainEnglish: "Statistically independent or unrelated; a change in one factor produces zero effect on the other.",
    contextExample: "Our data augmentation method is orthogonal to architecture modifications and can be combined with them.",
    difficulty: "Intermediate",
    color: "#8B0021"
  },
  "epistemological": {
    term: "Epistemological",
    pronunciation: "eh-pis-tuh-muh-LOJ-ih-kul",
    field: "Philosophy of Science",
    plainEnglish: "Relating to the theory of knowledge—how we know what is true, what counts as evidence, and the limits of understanding.",
    contextExample: "The study challenges prevailing epistemological frameworks regarding automated scientific discovery.",
    difficulty: "Advanced",
    color: "#B7094C"
  },
  "confounding variable": {
    term: "Confounding Variable",
    pronunciation: "kon-FOWND-ing VAIR-ee-uh-bul",
    field: "Study Design",
    plainEnglish: "An extra, hidden factor that influences both the cause and the effect, creating a false illusion that two things are directly linked.",
    contextExample: "Socioeconomic status acted as a major confounding variable in initial observational cohorts.",
    difficulty: "Core",
    color: "#E63946"
  },
  "null hypothesis": {
    term: "Null Hypothesis",
    pronunciation: "NUL hy-POTH-eh-sis",
    field: "Statistics",
    plainEnglish: "The default assumption that there is no real effect, difference, or relationship between the things being tested until strong evidence says otherwise.",
    contextExample: "We rejected the null hypothesis at the 99% confidence interval.",
    difficulty: "Core",
    color: "#990024"
  },
  "double-blind": {
    term: "Double-Blind",
    pronunciation: "DUB-ul-blynd",
    field: "Experimental Design",
    plainEnglish: "A research trial where neither the participants nor the administering researchers know who is getting the real treatment versus a placebo.",
    contextExample: "A randomized, double-blind, placebo-controlled trial was conducted across twelve medical centers.",
    difficulty: "Core",
    color: "#D2143A"
  },
  "statistically significant": {
    term: "Statistically Significant",
    pronunciation: "stuh-TIS-tik-lee sig-NIF-ih-kunt",
    field: "Statistics",
    plainEnglish: "A finding that is very unlikely to have happened by pure chance or luck based on mathematical thresholds.",
    contextExample: "The experimental group showed a statistically significant reduction in latency (p < 0.01).",
    difficulty: "Core",
    color: "#990024"
  },

  // Environmental Science & Climate
  "ocean acidification": {
    term: "Ocean Acidification",
    pronunciation: "OH-shun uh-sid-uh-fih-KAY-shun",
    field: "Marine Science / Climate",
    plainEnglish: "The ongoing decrease in seawater pH caused by absorbing excess human-produced carbon dioxide ($CO_2$) from the atmosphere.",
    contextExample: "Ocean acidification reduces carbonate ion availability, inhibiting calcification in stony corals.",
    difficulty: "Core",
    color: "#D2143A"
  },
  "calcification": {
    term: "Calcification",
    pronunciation: "kal-sih-fih-KAY-shun",
    field: "Marine Biology",
    plainEnglish: "The biological process where marine organisms build rigid shells and skeletons by combining calcium with carbonate ions.",
    contextExample: "Skeletal calcification rates plummeted by 34% under elevated carbon dioxide partial pressures.",
    difficulty: "Intermediate",
    color: "#C2185B"
  },
  "symbiosis": {
    term: "Symbiosis",
    pronunciation: "sim-bye-OH-sis",
    field: "Ecology",
    plainEnglish: "A close, long-term biological interaction between two different biological organisms, often mutually beneficial.",
    contextExample: "Thermal stress disrupts the delicate endosymbiosis between coral hosts and dinoflagellate algae.",
    difficulty: "Core",
    color: "#E63946"
  },
  "anthropogenic": {
    term: "Anthropogenic",
    pronunciation: "an-thruh-puh-JEN-ik",
    field: "Environmental Science",
    plainEnglish: "Caused or produced by human activity, especially greenhouse gas emissions or habitat destruction.",
    contextExample: "Global coral bleaching frequency has quadrupled due to anthropogenic atmospheric warming.",
    difficulty: "Core",
    color: "#990024"
  },
  "resilience": {
    term: "Ecological Resilience",
    pronunciation: "ee-kuh-LOJ-ih-kul reh-ZIL-yuns",
    field: "Ecology",
    plainEnglish: "The capacity of an ecosystem to absorb disturbances, adapt, and reorganize while retaining essentially the same function and structure.",
    contextExample: "Protected marine reserves exhibited substantially enhanced demographic resilience.",
    difficulty: "Core",
    color: "#D2143A"
  }
};

/**
 * Helper to match scientific terms in raw text
 */
function findScientificTerms(text) {
  if (!text) return [];
  const found = [];
  const lower = text.toLowerCase();

  for (const [key, meta] of Object.entries(SCIENTIFIC_DICTIONARY)) {
    // Escape regex special chars
    const escaped = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
    let match;
    let count = 0;
    while ((match = regex.exec(text)) !== null) {
      count++;
    }
    if (count > 0) {
      found.push({
        key,
        ...meta,
        occurrences: count
      });
    }
  }

  // Sort by occurrence count descending
  return found.sort((a, b) => b.occurrences - a.occurrences);
}

/**
 * Wrap words in text with cherry interactive highlighter tags
 */
function highlightScientificTerms(text) {
  if (!text) return "";
  let result = text;

  // Sort terms by length descending so multi-word terms like "attention mechanism" get matched before "attention"
  const sortedKeys = Object.keys(SCIENTIFIC_DICTIONARY).sort((a, b) => b.length - a.length);

  sortedKeys.forEach(key => {
    const escaped = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`\\b(${escaped})\\b`, 'gi');
    result = result.replace(regex, (match) => {
      return `<mark class="cherry-term-mark" data-term="${key.toLowerCase()}">${match}</mark>`;
    });
  });

  return result;
}
