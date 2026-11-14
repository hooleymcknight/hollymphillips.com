import { jsPDF } from "jspdf";
import resumeData from '@/app/data/resume.json';

const contacts = resumeData['Contact Info'];
const summary = resumeData['Summary'];
const work = resumeData['Work Experience'];
const projects = resumeData['Projects'] ?? [];
const skills = resumeData['Skills'];
const education = resumeData['Education'] ?? [];

export const exportPDF = () => {
    const doc = new jsPDF({ unit: 'pt', format: 'letter' });
    doc.setLineHeightFactor(1.35);

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 45;
    const contentWidth = pageWidth - margin * 2;
    const LINK_COLOR = [40, 80, 200];
    let y = margin;

    // Add a new page if we're about to run off the bottom
    const ensureSpace = (needed) => {
        if (y + needed > pageHeight - margin) {
            doc.addPage();
            y = margin;
        }
    };

    // Strip HTML tags — your education entries are HTML strings
    const stripHtml = (html) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = String(html ?? '');
        return tmp.textContent || tmp.innerText || '';
    };

    // write wrapped text starting at (x, y), up y by block's height
    // splitTextToSize is what makes word-wrapping not dogshit
    const write = (text, x = margin, { size = 10, weight = 'normal', url = null } = {}) => {
        doc.setFont('helvetica', weight);
        doc.setFontSize(size);
        const lines = doc.splitTextToSize(String(text), contentWidth - (x - margin));
        const lineHeight = size * 1.35;
        ensureSpace(lines.length * lineHeight);

        if (url) {
            // change color so ppl know it's a link
            doc.setTextColor(...LINK_COLOR);
            // textWithLink sucks at multiline, so render line-by-line (line by line (line by line))
            // someday someone will appreciate my jp saxe reference
            lines.forEach((line, i) => {
                doc.textWithLink(line, x, y + size + (i * lineHeight), { url });
            });
            doc.setTextColor(0, 0, 0);
        } else {
            doc.text(lines, x, y + size);
        }

        y += lines.length * lineHeight;
    };

    // One line built from pieces that each have their own style.
    // parts: [{ text, weight?, size?, url? }] — does NOT wrap, so keep it short.
    const writeParts = (parts, x = margin, { size = 10 } = {}) => {
        const lineHeight = size * 1.35;
        ensureSpace(lineHeight);
        let cx = x;
        parts.forEach(part => {
            if (!part.text) return;
            doc.setFont('helvetica', part.weight ?? 'normal');
            doc.setFontSize(part.size ?? size);
            if (part.url) {
                doc.setTextColor(...LINK_COLOR);
                doc.textWithLink(part.text, cx, y + size, { url: part.url });
                doc.setTextColor(0, 0, 0);
            } else {
                doc.text(part.text, cx, y + size);
            }
            cx += doc.getTextWidth(part.text);
        });
        y += lineHeight;
    };

    // "<em>Game Title</em> (released in 2019)" -> italic title, plain remainder
    const labelParts = (label) => {
        const match = String(label).match(/^(.*?)<(?:em|i)>(.*?)<\/(?:em|i)>(.*)$/);
        if (!match) return [{ text: stripHtml(label), weight: 'bold' }];
        return [
            { text: stripHtml(match[1]), weight: 'bold' },
            { text: stripHtml(match[2]), weight: 'bolditalic' },
            { text: stripHtml(match[3]) },
        ];
    };

    // bullets for work entries AND projects (same shape in the json)
    const writeBullets = (bullets) => {
        if (!Array.isArray(bullets)) return;
        bullets.forEach(b => {
            if (typeof b === 'string') {
                write(`• ${stripHtml(b)}`, margin + 10);
            } else if (b && typeof b === 'object') {
                // comes in as: { "Project title": [ "sub-bullet", "sub-bullet" ] }
                const label = Object.keys(b)[0];
                const subBullets = b[label] || [];

                // Project title — no bullet marker, leeetle more room to breathe
                y += 2;
                writeParts(labelParts(label), margin + 10);

                // sub-bullets
                subBullets.forEach(sub => {
                    write(`• ${stripHtml(sub)}`, margin + 24);
                });
            }
        });
    };

    // Section heading with underline
    const heading = (title) => {
        // 34 for the heading itself + room for a couple of lines under it,
        // so a heading never gets stranded at the bottom of a page
        ensureSpace(34 + 30);
        y += 6;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13);
        doc.text(title.toUpperCase(), margin, y + 13);
        y += 18;
        doc.setDrawColor(180);
        doc.line(margin, y - 4, pageWidth - margin, y - 4);
        y += 6;
    };

    // ===== Name =====
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text(contacts.name, margin, y + 20);
    y += 32; // was 28

    // ===== Contact lines =====
    const SITE = { text: 'hollymphillips.com', url: 'https://hollymphillips.com' };

    const fromContacts = (k) => ({
        text: contacts[k].export?.text ?? contacts[k].text,
        url: contacts[k].export?.href ?? contacts[k].href,
    });

    // location is plain text (no url), so it prints black instead of link-blue
    const LOCATION = contacts.location ? { text: contacts.location, url: null } : null;

    const contactRows = [
        [LOCATION, fromContacts('cell'), fromContacts('email'), SITE].filter(Boolean),
        [fromContacts('linkedin'), fromContacts('github')],
    ];

    contactRows.forEach(row => {
        let cx = margin;
        row.forEach((item, i) => {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);

            if (i > 0) {
                doc.setTextColor(0, 0, 0);
                doc.text('  •  ', cx, y + 10);
                cx += doc.getTextWidth('  •  ');
            }

            if (item.url) {
                doc.setTextColor(...LINK_COLOR);
                doc.textWithLink(item.text, cx, y + 10, { url: item.url });
            } else {
                doc.setTextColor(0, 0, 0);
                doc.text(item.text, cx, y + 10);
            }
            cx += doc.getTextWidth(item.text);
        });
        y += 12 * 1.35; /* was 10 * 1.35 */
    });
    doc.setTextColor(0, 0, 0);

    // ===== Summary =====
    if (summary) {
        heading('Summary');
        write(stripHtml(summary));
    }

    // ===== Skills =====
    heading('Skills');
    if (Array.isArray(skills)) {
        write(skills.join(', '));
    } else if (skills && typeof skills === 'object') {
        // two columns: bold group name on the left, its items wrapping on the right
        const entries = Object.entries(skills);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        const labelWidth = Math.max(...entries.map(([group]) => doc.getTextWidth(`${group}:`))) + 10;

        entries.forEach(([group, items]) => {
            const text = Array.isArray(items) ? items.join(', ') : String(items);

            // make sure the label and its items land on the same page
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);
            const lineCount = doc.splitTextToSize(text, contentWidth - labelWidth).length;
            ensureSpace(lineCount * 10 * 1.35);

            doc.setFont('helvetica', 'bold');
            doc.text(`${group}:`, margin, y + 10);
            write(text, margin + labelWidth);
            y += 2;
        });
    }

    // ===== Work =====
    heading('Work Experience');
    work.forEach(entry => {
        ensureSpace(50);
        const titleLine = entry.company ? `${entry.job} — ${entry.company}` : entry.job;
        write(titleLine, margin, { size: 11, weight: 'bold' });

        const dates = [entry.startDate, entry.endDate].filter(Boolean).join(' – ');
        const meta = [dates, entry.location].filter(Boolean).join('  •  ');
        if (meta) write(meta, margin, { size: 9 });

        writeBullets(entry.impact);
        y += 6;
    });

    // ===== Projects =====
    if (projects.length) {
        heading('Projects');
        projects.forEach(entry => {
            ensureSpace(50);

            // "Name — stack" (name bold, stack regular)
            writeParts([
                { text: entry.name, weight: 'bold', size: 11 },
                { text: entry.stack ? ` — ${entry.stack}` : '', size: 10 },
            ], margin, { size: 11 });

            // Links print as the real URL (minus https://) so they still work on paper.
            // With more than one link, each gets its label in front: "App repo: github.com/..."
            const links = (entry.links ?? []).filter(link => link.url);
            if (links.length) {
                const parts = [];
                links.forEach((link, i) => {
                    if (i > 0) parts.push({ text: '  &  ' });
                    if (links.length > 1) parts.push({ text: `${link.label}: ` });
                    parts.push({ text: link.url.replace(/^https?:\/\/(www\.)?/, ''), url: link.url });
                });
                writeParts(parts, margin, { size: 9 });
            }

            writeBullets(entry.impact);
            y += 6;
        });
    }

    // ===== Education =====
    if (education.length) {
        heading('Education');
        education.forEach(item => {
            write(stripHtml(item));
            y += 4;
        });
    }

    doc.save('HollyMPhillips_Resume.pdf');
};
