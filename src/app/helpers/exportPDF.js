import { jsPDF } from "jspdf";
import resumeData from '@/app/data/resume.json';

const contacts = resumeData['Contact Info'];
const work = resumeData['Work Experience'];
const skills = resumeData['Skills'];
const education = resumeData['Education & Certifications'];

export const exportPDF = () => {
    const doc = new jsPDF({ unit: 'pt', format: 'letter' });
    doc.setLineHeightFactor(1.35);

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 50;
    const contentWidth = pageWidth - margin * 2;
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
            doc.setTextColor(40, 80, 200);
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

    // Section heading with underline
    const heading = (title) => {
        ensureSpace(34);
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

    // ===== Contact line =====
    const contactItems = Object.keys(contacts)
        .filter(k => typeof contacts[k] === 'object' && contacts[k]?.text);

    let cx = margin;
    contactItems.forEach((k, i) => {
        const item = contacts[k];
        const text = item.export?.text ?? item.text;
        const url = item.export?.href ?? item.href;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);

        if (i > 0) {
            doc.text('  •  ', cx, y + 10);
            cx += doc.getTextWidth('  •  ');
        }

        doc.setTextColor(40, 80, 200);
        doc.textWithLink(text, cx, y + 10, { url });
        cx += doc.getTextWidth(text);
    });
    doc.setTextColor(0, 0, 0);
    y += 12 * 1.35; /* was 10 * 1.35 */

    // ===== Skills =====
    heading('Skills');
    if (Array.isArray(skills)) {
        write(skills.join(', '));
    } else if (skills && typeof skills === 'object') {
        Object.entries(skills).forEach(([group, items]) => {
            write(group, margin, { weight: 'bold' });
            write(Array.isArray(items) ? items.join(', ') : items, margin + 10);
            y += 4;
        });
    }

    // ===== Work =====
    heading('Work Experience');
    work.forEach(entry => {
        ensureSpace(50);
        const titleLine = entry.company ? `${entry.job} — ${entry.company}` : entry.job;
        write(titleLine, margin, { size: 11, weight: 'bold' });

        const meta = [entry.dates, entry.location].filter(Boolean).join('  •  ');
        if (meta) write(meta, margin, { size: 9 });

        const bullets = entry.impact;
        if (Array.isArray(bullets)) {
            bullets.forEach(b => {
                if (typeof b === 'string') {
                    write(`• ${stripHtml(b)}`, margin + 10);
                } else if (b && typeof b === 'object') {
                    // comes in as: { "Project title": [ "sub-bullet", "sub-bullet" ] }
                    const label = Object.keys(b)[0];
                    const subBullets = b[label] || [];

                    // Project title — bold, no bullet marker, leeetle more room to breathe
                    y += 2;
                    write(stripHtml(label), margin + 10, { weight: 'bold' });

                    // sub-bullets
                    subBullets.forEach(sub => {
                        write(`• ${stripHtml(sub)}`, margin + 24);
                    });
                }
            });
        }
        y += 8;
    });

    // ===== Education =====
    heading('Education & Certifications');
    education.forEach(item => {
        write(stripHtml(item));
        y += 4;
    });

    doc.save('resume.pdf');
};

/** for underlining */

/*
// After writing the label, draw an underline beneath it
const labelText = stripHtml(label);
doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
const textWidth = doc.getTextWidth(labelText);
write(labelText, margin + 10, { weight: 'bold' });
doc.setDrawColor(0);
doc.line(margin + 10, y - 4, margin + 10 + textWidth, y - 4);
*/