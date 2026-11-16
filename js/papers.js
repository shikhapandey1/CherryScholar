/**
 * Pre-curated Research Papers Database
 * Includes comprehensive sections, metadata, research gap analysis, methodology, and plain-English summaries.
 */
const PRELOADED_PAPERS = [
  {
    id: "transformer-attention",
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin",
    institution: "Google Brain & Google Research",
    year: "2017",
    venue: "NeurIPS 2017 (Neural Information Processing Systems)",
    category: "Artificial Intelligence",
    doi: "10.48550/arXiv.1706.03762",
    bibtex: `@inproceedings{vaswani2017attention,
  title={Attention is all you need},
  author={Vaswani, Ashish and Shazeer, Noam and Parmar, Niki and Uszkoreit, Jakob and Jones, Llion and Gomez, Aidan N and Kaiser, {\\L}ukasz and Polosukhin, Illia},
  booktitle={Advances in Neural Information Processing Systems (NeurIPS)},
  volume={30},
  year={2017}
}`,
    shortNote: "This landmark paper replaced slow, sequential recurrent networks (RNNs/LSTMs) with the 'Transformer' architecture. By relying entirely on parallel self-attention mechanisms, it allowed computers to read and understand entire sentences at once, unlocking modern ChatGPT-scale AI.",
    plainEnglishAnalogy: "Imagine a classroom reading a book. Previous AI (RNNs) forced students to pass a single notepad from desk to desk one word at a time, forgetting earlier words by the end. The Transformer lets everyone in the room look at every other word simultaneously, drawing lines connecting words that relate to each other.",
    researchGap: {
      problem: "Sequential Recurrent Networks (RNNs, LSTMs) processed text step-by-step from left to right. This sequential dependency fundamentally prevented parallel computing across GPUs and caused gradient vanishing on long passages.",
      missingPiece: "No prior model could compute relationships between distant words without passing through all intermediate words, losing context and making training on massive internet datasets prohibitively slow.",
      solution: "Eliminated recurrence and convolutions entirely. Built a pure feed-forward architecture powered by Multi-Head Self-Attention that computes token relationships simultaneously in constant O(1) sequential operations."
    },
    keywords: [
      { name: "Transformer", score: 99 },
      { name: "Attention Mechanism", score: 98 },
      { name: "Self-Attention", score: 95 },
      { name: "Natural Language Processing", score: 92 },
      { name: "Backpropagation", score: 85 },
      { name: "Parallel Computing", score: 84 },
      { name: "Ablation Study", score: 80 }
    ],
    methodology: {
      approach: "Multi-Head Scaled Dot-Product Attention + Positional Encoding",
      steps: [
        "Embed input tokens into 512-dimensional continuous latent space representations.",
        "Inject fixed sinusoidal positional encodings to preserve word order without recurrence.",
        "Pass through 6 identical encoder layers with Multi-Head Attention and Layer Normalization.",
        "Pass decoder representations through cross-attention to autoregressively predict target tokens."
      ],
      datasetOrSubjects: "WMT 2014 English-to-German (4.5M sentence pairs) and English-to-French (36M sentence pairs) translation benchmarks."
    },
    keyFindings: [
      "Achieved a state-of-the-art BLEU score of 28.4 on English-to-German, improving over the best existing ensemble models by more than 2.0 BLEU.",
      "Established a new single-model BLEU score of 41.8 on English-to-French after training for only 3.5 days on 8 NVIDIA P100 GPUs.",
      "Trained at a fraction of the computational training cost of previous recurrent and convolutional architectures.",
      "Generalized successfully to English constituency parsing with little task-specific tuning."
    ],
    limitations: [
      "Standard self-attention memory requirements scale quadratically O(N²) with sequence length, making very long documents challenging.",
      "Lacks innate inductive bias for temporal sequences, necessitating engineered positional embeddings.",
      "Requires massive datasets to overcome the lack of built-in structural priors compared to CNNs."
    ],
    contentSections: [
      {
        heading: "Abstract",
        text: "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.8 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature."
      },
      {
        heading: "Introduction & Research Gap",
        text: "Recurrent models generate a sequence of hidden states h_t, as a function of the previous hidden state h_{t-1} and the input for position t. This inherently sequential nature precludes parallelization within training examples, which becomes critical at longer sequence lengths, as memory constraints limit batching across examples. Attention mechanisms have become an integral part of compelling sequence modeling, yet in almost all cases they are used in conjunction with a recurrent network. In this work we propose the Transformer, an architecture eschewing recurrence and instead relying entirely on self-attention to compute representations of its input and output without using sequence-aligned RNNs or convolution."
      },
      {
        heading: "Attention Architecture & Latent Space",
        text: "An attention function can be described as mapping a query and a set of key-value pairs to an output, where the query, keys, values, and output are all vectors. In our approach, scaled dot-product attention computes the dot products of the query with all keys, divides each by the square root of the dimension of keys, and applies a softmax function to obtain weights on values. Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions. This overcomes the gradient vanishing problem found in deep recurrent units and preserves rich contextual representations inside the latent space."
      },
      {
        heading: "Ablation Study and Empirical Validations",
        text: "We evaluated the importance of different components of the Transformer by varying parameters. In our ablation study, we measured translation quality while varying attention heads, key dimensions, and dropout rates. We observed that when multi-head attention was removed, performance dropped by 1.3 BLEU points. Stochastic gradient descent with Adam was applied with a warm-up learning schedule. The empirical results confirm that removing recurrence does not compromise expressive capacity, while yielding tremendous training efficiency."
      }
    ]
  },

  {
    id: "crispr-cas9-endonuclease",
    title: "A Programmable Dual-RNA-Guided DNA Endonuclease in Adaptive Bacterial Immunity",
    authors: "Martin Jinek, Krzysztof Chylinski, Ines Fonfara, Michael Hauer, Jennifer A. Doudna, Emmanuelle Charpentier",
    institution: "University of California, Berkeley & Umeå University",
    year: "2012",
    venue: "Science (Vol. 337, Issue 6096)",
    category: "Biotechnology & Genetics",
    doi: "10.1126/science.1225829",
    bibtex: `@article{jinek2012programmable,
  title={A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity},
  author={Jinek, Martin and Chylinski, Krzysztof and Fonfara, Ines and Hauer, Michael and Doudna, Jennifer A and Charpentier, Emmanuelle},
  journal={Science},
  volume={337},
  number={6096},
  pages={816--821},
  year={2012},
  publisher={American Association for the Advancement of Science}
}`,
    shortNote: "This historic paper revealed how the bacterial immune system uses CRISPR-Cas9 as molecular scissors. The researchers engineered a single chimeric guide RNA that can program the Cas9 protein to cut any specified double-stranded DNA target, establishing modern gene editing.",
    plainEnglishAnalogy: "Before CRISPR, editing DNA was like building a brand new custom hardware tool every time you wanted to turn a screw (like custom Zinc Finger proteins). CRISPR-Cas9 turned DNA editing into a word processor with a 'Find and Replace' cursor: you just type the 20 letters you want to find (the guide RNA), and the Cas9 scissors go cut that exact sentence.",
    researchGap: {
      problem: "Traditional genome editing tools (Zinc Finger Nucleases and TALENs) required cumbersome, bespoke protein engineering for every single target DNA sequence, requiring months of synthesis and high failure rates.",
      missingPiece: "Scientists lacked a simple, universally programmable molecular platform where target recognition was dictated by easily synthesizable RNA sequences rather than re-engineering complex DNA-binding protein structures.",
      solution: "Discovered that the Streptococcus pyogenes Cas9 endonuclease relies on a two-RNA complex (crRNA and tracrRNA) and engineered them into a single chimeric guide RNA (sgRNA) that directs Cas9 cleavage with surgical precision."
    },
    keywords: [
      { name: "CRISPR-Cas9", score: 99 },
      { name: "Endonuclease", score: 96 },
      { name: "Ribonucleoprotein", score: 91 },
      { name: "Gene Editing", score: 90 },
      { name: "Homology", score: 86 },
      { name: "Phenotype", score: 82 },
      { name: "Chromatin", score: 79 }
    ],
    methodology: {
      approach: "Biochemical reconstitution of Type II CRISPR system & Single Guide RNA (sgRNA) engineering",
      steps: [
        "Purified Cas9 protein and synthesized crRNA and tracrRNA in vitro.",
        "Demonstrated that Cas9 requires both crRNA (for sequence specificity) and tracrRNA (for structural activation) to cleave double-stranded DNA.",
        "Identified the Protospacer Adjacent Motif (PAM) sequence requirement (5'-NGG-3').",
        "Engineered a single chimeric guide RNA (sgRNA) fusing crRNA and tracrRNA into one functional molecule."
      ],
      datasetOrSubjects: "Streptococcus pyogenes bacterial immune components, plasmid targets (pUC19), and electrophoretic mobility shift assays."
    },
    keyFindings: [
      "Proved that Cas9 is an RNA-guided endonuclease containing two catalytic nuclease domains (HNH and RuvC-like) that each cleave one strand of DNA.",
      "Engineered a single-guide RNA (sgRNA) that completely maintains cleavage efficiency while halving synthesis complexity.",
      "Showed that changing just 20 nucleotides in the guide RNA sequence directs Cas9 to cleave an entirely novel DNA target.",
      "Opened the door to targetable genome editing across plants, animals, and human cells."
    ],
    limitations: [
      "Potential for off-target cleavage at genomic sites that have few mismatched base pairs to the guide sequence.",
      "Constrained by the requirement for a specific Protospacer Adjacent Motif (PAM sequence 'NGG') adjacent to the target site.",
      "Efficient delivery of the ribonucleoprotein complex into dense eukaryotic chromatin remains non-trivial."
    ],
    contentSections: [
      {
        heading: "Abstract",
        text: "Clustered regularly interspaced short palindromic repeats (CRISPR)/CRISPR-associated (Cas) systems provide bacteria and archaea with adaptive immunity against viruses and plasmids by using CRISPR-associated RNA (crRNA) to guide the silencing of invading nucleic acids. We show here that in a subset of these systems, the mature crRNA that is base-paired to trans-activating crRNA (tracrRNA) forms a two-RNA structure that directs the CRISPR-associated protein Cas9 to introduce double-stranded breaks in target DNA. At sites complementary to the crRNA-guide sequence, the Cas9 HNH nuclease domain cleaves the complementary strand, whereas the Cas9 RuvC-like domain cleaves the noncomplementary strand. Dual-RNA-programmed Cas9 can be engineered as a single-chain chimeric guide RNA that directs site-specific DNA cleavage by combining the structural features of crRNA and tracrRNA."
      },
      {
        heading: "The Mechanism of Dual-RNA Endonuclease Cleavage",
        text: "The CRISPR-Cas9 system functions through a sophisticated ribonucleoprotein complex. When an invading bacteriophage injects foreign DNA, the bacterial endonuclease recognizes a short protospacer adjacent motif (PAM) and pairs the guide sequence with the target locus. Upon binding, Cas9 induces a double-strand break three nucleotides upstream of the PAM. This targeted cleavage triggers host repair pathways, either non-homologous end joining (NHEJ) which disrupts the gene to study phenotype alterations, or homology-directed repair (HDR) for precise sequence insertion."
      },
      {
        heading: "Single-Guide RNA Engineering",
        text: "Recognizing that the natural system relies on separate crRNA and tracrRNA molecules, we designed a single chimeric RNA containing a hairpin loop connecting the 3' end of crRNA to the 5' end of tracrRNA. This single-guide RNA (sgRNA) mimics the natural dual-RNA architecture. In vitro cleavage assays demonstrated that the engineered sgRNA programmed Cas9 just as efficiently as the native complex, providing a versatile two-component system for targeted genome manipulation."
      }
    ]
  },

  {
    id: "alphafold-protein-prediction",
    title: "Highly Accurate Protein Structure Prediction with AlphaFold",
    authors: "John Jumper, Richard Evans, Alexander Pritzel, Tim Green, Michael Figurnov, Olaf Ronneberger, Kathryn Tunyasuvunakool, Demis Hassabis, et al.",
    institution: "DeepMind & EMBL-EBI",
    year: "2021",
    venue: "Nature (Vol. 596, Pages 583–589)",
    category: "Computational Biology",
    doi: "10.1038/s41586-021-03819-2",
    bibtex: `@article{jumper2021highly,
  title={Highly accurate protein structure prediction with AlphaFold},
  author={Jumper, John and Evans, Richard and Pritzel, Alexander and Green, Tim and Figurnov, Michael and Ronneberger, Olaf and Tunyasuvunakool, Kathryn and Hassabis, Demis and others},
  journal={Nature},
  volume={596},
  number={7873},
  pages={583--589},
  year={2021},
  publisher={Nature Publishing Group}
}`,
    shortNote: "AlphaFold solved the 50-year-old 'protein folding grand challenge' in biology. Using deep evolutionary attention and geometric spatial reasoning, it predicts the 3D atomic coordinates of proteins from their raw amino acid sequences with accuracy competitive with slow experimental methods.",
    plainEnglishAnalogy: "A protein is like a microscopic origami sculpture folded from a single ribbon of amino acids. Before AlphaFold, figuring out how the ribbon folds required millions of dollars in cryogenic electron microscopes and years of lab trial-and-error. AlphaFold acts like a master origami solver that instantly computes the exact atomic folding folds in seconds.",
    researchGap: {
      problem: "For 50 years, predicting how a 1D sequence of amino acids folds into a complex 3D shape (Levinthal's paradox) required months of costly crystallography or cryo-EM experiments, leaving millions of known proteins structurally uncharted.",
      missingPiece: "Previous computational predictors treated sequence co-evolution and spatial geometry as disjoint tasks, failing when homologs were scarce or when predicting non-local backbone contacts.",
      solution: "Created an end-to-end differentiable neural network featuring the 'Evoformer' module, which continuously exchanges information between evolutionary sequence alignments and 3D residue-pair representations."
    },
    keywords: [
      { name: "AlphaFold", score: 99 },
      { name: "MSA", score: 95 },
      { name: "Attention Mechanism", score: 92 },
      { name: "Protein Folding", score: 90 },
      { name: "End-to-End Differentiable", score: 86 },
      { name: "Statistically Significant", score: 82 }
    ],
    methodology: {
      approach: "Evoformer Architecture + Invariant Point Attention (IPA) 3D Module",
      steps: [
        "Construct multiple sequence alignments (MSAs) from large genetic databases (UniRef90, BFD).",
        "Process MSA representations and pairwise geometric distances simultaneously through 48 Evoformer blocks.",
        "Refine 3D backbone frames and side-chain dihedral angles directly in Euclidean space using Invariant Point Attention.",
        "Perform iterative recycling of structural outputs back through the network to refine predictions."
      ],
      datasetOrSubjects: "CASP14 (Critical Assessment of Structure Prediction) blind evaluation benchmark and the Protein Data Bank (PDB)."
    },
    keyFindings: [
      "Achieved a median global distance test (GDT) score of 92.4 out of 100 on CASP14 targets, where scores above 90 are considered competitive with experimental crystallography.",
      "Predicted all-atom coordinates with median root mean square deviation (RMSD) under 1.5 Ångströms on core backbone residues.",
      "Generated reliable per-residue confidence estimates (pLDDT) and predicted aligned errors (PAE) to signal trustworthy domains.",
      "Predicted accurate structures even when multiple sequence alignments contained fewer than 30 homologous sequences."
    ],
    limitations: [
      "Does not model dynamic structural conformations or allosteric transitions between active/inactive states.",
      "Does not directly account for post-translational modifications, bound cofactors, or environmental pH variations.",
      "Multi-protein complex interactions and disordered regions require specialized multi-chain extensions."
    ],
    contentSections: [
      {
        heading: "Abstract",
        text: "Proteins are essential to life, and understanding their structure can facilitate a mechanistic understanding of their function. Through an enormous experimental effort, the structures of around 100,000 unique proteins have been determined, but this represents a tiny fraction of the billions of known protein sequences. Accurate computational approaches are needed to bridge this gap and enable large-scale structural bioinformatics. Here we present AlphaFold, a novel machine learning approach that incorporates physical and biological knowledge about protein structure, leveraging multi-sequence alignments, into the design of the deep learning algorithm. In the 14th Critical Assessment of protein Structure Prediction (CASP14), AlphaFold was blindly assessed and demonstrated unprecedented accuracy with a median backbone accuracy of 0.96 Å r.m.s.d.95, providing a dramatic breakthrough in structural biology."
      },
      {
        heading: "Evoformer & Spatial Attention",
        text: "AlphaFold operates on multiple sequence alignments (MSAs) to infer co-evolutionary constraints. When two amino acid residues mutate together across millions of years, they are almost certainly in physical contact inside the folded 3D core. The Evoformer treats this evolutionary relationship as a graph, passing attention updates between sequence alignments and spatial residue-pair representations. This continuous information exchange overcomes traditional vanishing gradient hurdles and preserves geometric consistency."
      },
      {
        heading: "Empirical Results at CASP14",
        text: "In the rigorous, blind CASP14 competition, AlphaFold achieved a median GDT_TS score of 92.4 across all free-modeling targets. This performance is statistically significant compared to all alternative methods. Furthermore, the structural relaxation step using molecular mechanics force fields resolved steric clashes, yielding stereochemically viable structures ready for drug discovery and biochemical inquiry."
      }
    ]
  },

  {
    id: "coral-reef-climate-resilience",
    title: "Anthropogenic Climate Change and Coral Reef Ecosystem Resilience",
    authors: "Terry P. Hughes, James T. Kerry, Andrew H. Baird, et al.",
    institution: "ARC Centre of Excellence for Coral Reef Studies, James Cook University",
    year: "2018",
    venue: "Nature (Vol. 556, Pages 492–496)",
    category: "Environmental Science",
    doi: "10.1038/s41586-018-0041-2",
    bibtex: `@article{hughes2018global,
  title={Global warming transforms coral reef assemblages},
  author={Hughes, Terry P and Kerry, James T and Baird, Andrew H and Connolly, Sean R and Dietzel, Andreas and Eakin, C Mark and Heron, Scott F and Hoey, Andrew S and Hoogenboom, Mia O and Liu, Gang and others},
  journal={Nature},
  volume={556},
  number={7702},
  pages={492--496},
  year={2018},
  publisher={Nature Publishing Group}
}`,
    shortNote: "This study documented the unprecedented back-to-back coral bleaching events along Australia's Great Barrier Reef caused by anthropogenic marine heatwaves, demonstrating how ocean acidification and thermal stress are permanently restructuring marine biodiversity.",
    plainEnglishAnalogy: "Corals live in a symbiotic roommate agreement with tiny colorful algae: the algae pay rent with food (sugars from photosynthesis), and the coral provides shelter. When the water gets too hot, the algae produce toxins; the stressed coral panics and evicts its roommates, turning ghostly white. Without their food source, the corals starve to death unless waters cool rapidly.",
    researchGap: {
      problem: "Ecologists previously assumed that marine protected areas and strict fishing regulations could buffer coral reefs against climate-induced bleaching through local ecological resilience.",
      missingPiece: "There was a lack of basin-scale empirical tracking linking degree heating weeks directly to mortality thresholds across fast-growing vs. stress-tolerant coral species.",
      solution: "Conducted high-resolution aerial surveys across the entire 2,300 km Great Barrier Reef combined with underwater ecological assessments during back-to-back bleaching events, proving local management cannot safeguard against extreme thermal stress."
    },
    keywords: [
      { name: "Ocean Acidification", score: 98 },
      { name: "Anthropogenic", score: 95 },
      { name: "Symbiosis", score: 94 },
      { name: "Resilience", score: 92 },
      { name: "Calcification", score: 88 },
      { name: "Empirical", score: 85 },
      { name: "P-value", score: 80 }
    ],
    methodology: {
      approach: "Satellite Remote Sensing (NOAA Coral Reef Watch) + Aerial Visual Surveys + In-Situ Dive Transects",
      steps: [
        "Monitored sea surface temperature anomalies and accumulated Degree Heating Weeks (DHW) via satellite.",
        "Scored bleaching severity across 1,156 individual reefs along the 2,300 km length of the Great Barrier Reef.",
        "Conducted underwater dive surveys at 61 representative reefs to quantify immediate mortality vs. delayed mortality.",
        "Modelled species-specific survival trajectories using generalized linear mixed-effects regression."
      ],
      datasetOrSubjects: "Great Barrier Reef Marine Park, Australia (1,156 surveyed coral reefs across 2,300 km)."
    },
    keyFindings: [
      "More than 60% of surveyed reefs suffered severe bleaching (>30% of corals bleached) during the peak of the 2016 heatwave.",
      "Mortality was highly selective: dominant tabular and branching corals (Acropora) suffered catastrophic die-offs within weeks, transforming complex habitats into algal turf.",
      "Local water quality protection and no-take marine reserves provided zero protection against thermal mortality (p > 0.05).",
      "Concluded that maintaining the ecological function of global coral reefs requires urgent reduction of greenhouse gas emissions."
    ],
    limitations: [
      "Long-term adaptation via symbiont shuffling (transitioning to heat-tolerant Symbiodiniaceae) could not be tracked across decadal timescales in this snapshot.",
      "Mesophotic deep-reef refugia (below 30 meters) were not comprehensively covered by aerial surveillance.",
      "Synergistic interactions with crown-of-thorns starfish outbreaks were difficult to isolate from thermal mortality."
    ],
    contentSections: [
      {
        heading: "Abstract",
        text: "Global warming is transforming coral reefs through unprecedented mass bleaching events. During the record marine heatwave of 2016, temperatures exceeded local historical maxima across the northern two-thirds of the Great Barrier Reef. Here we show that the severity of coral bleaching was tightly coupled to satellite-derived metrics of accumulated thermal stress. Fast-growing staghorn and tabular species (Acropora) collapsed first, altering the taxonomic composition of the coral assemblage. Local management efforts, including marine protected zones and terrestrial runoff reduction, failed to buffer corals from thermal mortality, underscoring that mitigating global warming is paramount."
      },
      {
        heading: "Thermal Stress and Calcification Disruption",
        text: "Sustained temperature anomalies disrupt the essential symbiosis between scleractinian corals and their endosymbiotic dinoflagellates. Under excessive irradiance and heat, photosystem II degrades, generating damaging reactive oxygen species that induce the expulsion of symbionts. Concurrently, anthropogenic ocean acidification impairs the calcification necessary for skeletal accretion. In our empirical survey, reefs experiencing more than 8 Degree Heating Weeks (DHW) suffered greater than 50% immediate coral mortality."
      },
      {
        heading: "Ecological Resilience and Future Assemblages",
        text: "The collapse of structural ecosystem engineers has cascading ramifications for reef biodiversity. While slow-growing poritid corals displayed higher survival, the loss of complex branching architecture drastically diminished juvenile fish recruitment. These empirical results demonstrate that current climate trajectories exceed the historical resilience limits of tropical marine biomes."
      }
    ]
  }
];
