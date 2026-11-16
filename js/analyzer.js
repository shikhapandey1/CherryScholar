/**
 * Paper Analyzer & Heuristic Parser
 * Breaks down uploaded PDFs or pasted academic texts into structured Pinterest-ready insights.
 */
class PaperAnalyzer {
  constructor() {
    this.gapPatterns = [
      /(?:however|nevertheless|nonetheless|despite|although)[^.?!]+(?:limited|lack|remains unclear|unresolved|challenging|bottleneck|precludes|prohibitive)[^.?!]*[.?!]/gi,
      /(?:prior|previous|existing)\s+(?:work|approaches|models|studies|methods)\s+(?:suffer|fail|struggle|overlook|cannot|do not|lack)[^.?!]*[.?!]/gi,
      /(?:to bridge this gap|to address this limitation|to overcome this|motivated by this)[^.?!]*[.?!]/gi,
      /(?:a fundamental challenge|an open problem|a major bottleneck)[^.?!]*[.?!]/gi
    ];

    this.methodPatterns = [
      /(?:we propose|we introduce|we design|we present|in this work we develop)\s+([^.?!]+[.?!])/gi,
      /(?:our approach|our framework|our method|our architecture)\s+([^.?!]+[.?!])/gi,
      /(?:experiments were conducted|we evaluated|we trained|we tested)\s+([^.?!]+[.?!])/gi
    ];

    this.findingsPatterns = [
      /(?:results show|experiments demonstrate|we find that|our model achieves|we observed|statistically significant)\s+([^.?!]+[.?!])/gi,
      /(?:outperforms|improves over|leads to a reduction|yields a state-of-the-art)\s+([^.?!]+[.?!])/gi
    ];

    this.limitationPatterns = [
      /(?:one limitation|a key limitation|limitations of our|caveats include|constrained by|restricted to|future work should|remains an open question)[^.?!]*[.?!]/gi
    ];
  }

  /**
   * Main analysis function taking raw text and metadata
   */
  analyze(rawText, userMeta = {}) {
    if (!rawText || rawText.trim().length < 50) {
      throw new Error("Text is too short for meaningful academic analysis. Please provide at least a few paragraphs or an abstract.");
    }

    const cleanText = rawText.replace(/\r\n/g, '\n').trim();
    const sentences = this.splitSentences(cleanText);
    const paragraphs = cleanText.split(/\n\s*\n/).filter(p => p.trim().length > 30);

    // 1. Title & Authors heuristic if not provided
    const title = userMeta.title || this.guessTitle(cleanText, paragraphs);
    const authors = userMeta.authors || "Extracted Authors / Pre-print";
    const year = userMeta.year || new Date().getFullYear().toString();
    const venue = userMeta.venue || "Academic Preprint / Custom Upload";
    const category = userMeta.category || this.guessCategory(cleanText);

    // 2. Identify Scientific Terms using the Dictionary
    const detectedScientific = findScientificTerms(cleanText);

    // 3. Extract TL;DR Short Note
    const shortNote = this.extractShortNote(paragraphs, sentences);

    // 4. Extract Research Gap
    const researchGap = this.extractResearchGap(cleanText, sentences);

    // 5. Extract Methodology
    const methodology = this.extractMethodology(cleanText, sentences);

    // 6. Extract Key Findings
    const keyFindings = this.extractKeyFindings(cleanText, sentences);

    // 7. Extract Limitations
    const limitations = this.extractLimitations(cleanText, sentences);

    // 8. Generate Top Keywords
    const keywords = this.extractKeywords(cleanText, detectedScientific);

    // 9. Structured Content Sections
    const contentSections = this.createStructuredSections(cleanText, paragraphs);

    const paperId = "custom-" + Date.now();

    return {
      id: paperId,
      title,
      authors,
      year,
      venue,
      category,
      doi: userMeta.doi || "N/A (Local / Uploaded)",
      bibtex: `@article{${paperId},
  title={${title}},
  author={${authors}},
  year={${year}},
  note={Analyzed by CherryScholar}
}`,
      shortNote,
      plainEnglishAnalogy: "This uploaded study addresses: " + (researchGap.problem ? researchGap.problem.slice(0, 150) + "..." : "complex domain challenges by introducing a refined framework."),
      researchGap,
      keywords,
      methodology,
      keyFindings,
      limitations,
      contentSections,
      isCustom: true
    };
  }

  splitSentences(text) {
    return text.match(/[^.!?]+[.!?]+/g) || [text];
  }

  guessTitle(text, paragraphs) {
    if (paragraphs.length > 0) {
      const firstLine = paragraphs[0].split('\n')[0].trim();
      if (firstLine.length > 10 && firstLine.length < 160) {
        return firstLine.replace(/^[#\s*]+/, '');
      }
    }
    const match = text.match(/^([^\n]+)/);
    return match ? match[1].slice(0, 100).trim() : "Untitled Research Paper";
  }

  guessCategory(text) {
    const lower = text.toLowerCase();
    if (lower.includes("neural") || lower.includes("machine learning") || lower.includes("deep learning") || lower.includes("attention")) return "Computer Science / AI";
    if (lower.includes("crispr") || lower.includes("gene") || lower.includes("dna") || lower.includes("protein") || lower.includes("cell")) return "Biotechnology & Medicine";
    if (lower.includes("climate") || lower.includes("ocean") || lower.includes("species") || lower.includes("ecological")) return "Environmental Science";
    if (lower.includes("quantum") || lower.includes("particle") || lower.includes("thermodynamic")) return "Physics";
    return "Interdisciplinary Science";
  }

  extractShortNote(paragraphs, sentences) {
    // Abstract or first 2 informative sentences
    if (paragraphs.length > 0) {
      const p = paragraphs[0];
      const match = p.match(/(?:abstract|summary)[:\s]+([^]+)/i);
      if (match) {
        const absSentences = this.splitSentences(match[1]);
        return absSentences.slice(0, 2).join(' ').trim();
      }
      const pSentences = this.splitSentences(p);
      return pSentences.slice(0, 2).join(' ').trim();
    }
    return sentences.slice(0, 2).join(' ').trim();
  }

  extractResearchGap(text, sentences) {
    let problemFound = "";
    let solutionFound = "";

    for (const pattern of this.gapPatterns) {
      const match = text.match(pattern);
      if (match && match.length > 0) {
        problemFound = match[0].trim();
        break;
      }
    }

    for (const pattern of this.methodPatterns) {
      const match = text.match(pattern);
      if (match && match.length > 0) {
        solutionFound = match[0].trim();
        break;
      }
    }

    return {
      problem: problemFound || "Existing approaches in this field faced performance boundaries, manual complexity, or incomplete empirical coverage.",
      missingPiece: "Prior literature lacked unified benchmarks or scalable operational formulations to resolve these underlying bottlenecks.",
      solution: solutionFound || "The authors propose an empirical framework specifically engineered to eliminate these constraints and improve accuracy."
    };
  }

  extractMethodology(text, sentences) {
    const steps = [];
    const approachMatches = [];

    for (const pattern of this.methodPatterns) {
      let m;
      while ((m = pattern.exec(text)) !== null) {
        approachMatches.push(m[0].trim());
        if (approachMatches.length >= 3) break;
      }
    }

    if (approachMatches.length > 0) {
      approachMatches.forEach(item => steps.push(item));
    } else {
      steps.push("Extracted dataset formulation and pre-processing pipeline.");
      steps.push("Engineered custom architecture and baseline comparison benchmarks.");
      steps.push("Evaluated quantitative metrics across standard evaluation splits.");
    }

    return {
      approach: approachMatches[0] || "Empirical quantitative evaluation & iterative architectural optimization",
      steps: steps.slice(0, 4),
      datasetOrSubjects: "Derived from standard academic corpora, empirical observations, or benchmark testbeds described in the paper."
    };
  }

  extractKeyFindings(text, sentences) {
    const findings = [];
    for (const pattern of this.findingsPatterns) {
      let m;
      while ((m = pattern.exec(text)) !== null) {
        findings.push(m[0].trim());
        if (findings.length >= 4) break;
      }
    }

    if (findings.length === 0) {
      findings.push("Demonstrated measurable performance improvements compared to prior existing baselines.");
      findings.push("Validated hypotheses with statistically verifiable empirical observations.");
      findings.push("Provided reproducible experiments detailing configuration and parameter behavior.");
    }

    return findings.slice(0, 4);
  }

  extractLimitations(text, sentences) {
    const limitations = [];
    for (const pattern of this.limitationPatterns) {
      let m;
      while ((m = pattern.exec(text)) !== null) {
        limitations.push(m[0].trim());
        if (limitations.length >= 3) break;
      }
    }

    if (limitations.length === 0) {
      limitations.push("Computational complexity and resource scaling on larger unseen domain targets.");
      limitations.push("Generalization bounds when evaluated outside the primary distribution testbed.");
    }

    return limitations.slice(0, 3);
  }

  extractKeywords(text, detectedScientific) {
    const list = [];
    // Include detected scientific terms first
    detectedScientific.forEach(term => {
      list.push({ name: term.term, score: Math.min(99, 70 + term.occurrences * 5) });
    });

    if (list.length < 5) {
      // Add common high-frequency significant words
      const stopWords = new Set(["this", "that", "with", "from", "have", "were", "which", "their", "these", "between", "through", "using", "paper", "study", "results", "model", "analysis"]);
      const words = text.toLowerCase().match(/\b[a-z]{5,}\b/g) || [];
      const freq = {};
      words.forEach(w => {
        if (!stopWords.has(w)) {
          freq[w] = (freq[w] || 0) + 1;
        }
      });
      const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
      for (const [w, count] of sorted) {
        if (list.length >= 7) break;
        if (!list.some(item => item.name.toLowerCase() === w)) {
          list.push({ name: w.charAt(0).toUpperCase() + w.slice(1), score: Math.min(95, 60 + count * 4) });
        }
      }
    }

    return list.slice(0, 8);
  }

  createStructuredSections(cleanText, paragraphs) {
    // If text already has clear section headings (e.g. Abstract, Introduction, Results)
    const sections = [];
    let currentHeading = "Overview";
    let currentBuffer = [];

    paragraphs.forEach(p => {
      const headingMatch = p.match(/^(abstract|introduction|background|methods|methodology|experiments|results|discussion|conclusion|limitations|related work)[:\s]/i);
      if (headingMatch) {
        if (currentBuffer.length > 0) {
          sections.push({ heading: currentHeading, text: currentBuffer.join('\n\n') });
          currentBuffer = [];
        }
        currentHeading = headingMatch[1].charAt(0).toUpperCase() + headingMatch[1].slice(1);
        currentBuffer.push(p);
      } else {
        currentBuffer.push(p);
      }
    });

    if (currentBuffer.length > 0) {
      sections.push({ heading: currentHeading, text: currentBuffer.join('\n\n') });
    }

    if (sections.length === 0) {
      sections.push({ heading: "Full Paper Text", text: cleanText });
    }

    return sections;
  }
}

window.paperAnalyzer = new PaperAnalyzer();
