import { loadContent } from '../data';

export default function HrConsultancy() {
  const content = loadContent();
  return (
    <div>
      <h2 className="text-3xl font-bold mb-3">HR Consultancy</h2>
      <p>{content.hr}</p>
      {content.images['hr'] && <img src={content.images['hr']} alt="HR" className="mt-4 rounded max-w-md" />}
    </div>
  );
}
