'use client';

interface AISummaryLinksProps {
  title: string;
  url: string;
}

interface AIPlatform {
  name: string;
  baseUrl: string;
  promptParam: string;
  color: string;
}

const aiPlatforms: AIPlatform[] = [
  {
    name: 'ChatGPT',
    baseUrl: 'https://chat.openai.com/',
    promptParam: 'q',
    color: '#10A37F',
  },
  {
    name: 'Claude',
    baseUrl: 'https://claude.ai/new',
    promptParam: 'q',
    color: '#D97706',
  },
  {
    name: 'Gemini',
    baseUrl: 'https://gemini.google.com/app',
    promptParam: 'q',
    color: '#4285F4',
  },
  {
    name: 'Perplexity',
    baseUrl: 'https://www.perplexity.ai/',
    promptParam: 'q',
    color: '#20808D',
  },
  {
    name: 'Grok',
    baseUrl: 'https://grok.x.ai/',
    promptParam: 'q',
    color: '#000000',
  },
];

function getLogo(name: string) {
  switch (name) {
    case 'ChatGPT':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
        </svg>
      );
    case 'Claude':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M4.709 15.955l4.72-2.647.08-.08v-.16l-.08-.08-2.2-.96c-.96-.4-1.84-.8-2.64-1.28l-.24-.16c-.56-.48-.8-1.04-.72-1.68.08-.48.32-.88.72-1.2.88-.72 2.16-1.04 3.84-.96 1.28.08 2.4.4 3.44.96l.08.08.08-.08 1.68-3.28.08-.16c0-.08-.04-.12-.08-.16C12.189 3.395 10.829 3.035 9.309 3.035c-2.24 0-4.08.56-5.52 1.68-1.36 1.04-2.08 2.4-2.16 4.08-.08 1.6.48 2.96 1.68 4.08.32.32.72.6 1.12.88l.24.16zm14.64-7.92l-4.72 2.64-.08.08v.16l.08.08 2.2.96c.96.4 1.84.8 2.64 1.28l.24.16c.56.48.8 1.04.72 1.68-.08.48-.32.88-.72 1.2-.88.72-2.16 1.04-3.84.96-1.28-.08-2.4-.4-3.44-.96l-.08-.08-.08.08-1.68 3.28-.08.16c0 .08.04.12.08.16 1.2.8 2.56 1.16 4.08 1.16 2.24 0 4.08-.56 5.52-1.68 1.36-1.04 2.08-2.4 2.16-4.08.08-1.6-.48-2.96-1.68-4.08-.32-.32-.72-.6-1.12-.88l-.24-.16z" />
        </svg>
      );
    case 'Gemini':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12" />
        </svg>
      );
    case 'Perplexity':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.25L20.25 7.5v9L12 21.75 3.75 16.5v-9L12 2.25zM12 6L6 9.75v4.5L12 18l6-3.75v-4.5L12 6zm0 2.25l3.75 2.25v3L12 15.75 8.25 13.5v-3L12 8.25z" />
        </svg>
      );
    case 'Grok':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.868 21H21.5l-7.518-10.378Zm-2.128 2.474-.697-.997-5.543-7.93H8l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AISummaryLinks({ title, url }: AISummaryLinksProps) {
  const prompt = `Résume cet article de blog : "${title}" - ${url}`;

  const getAIUrl = (platform: AIPlatform) => {
    const encodedPrompt = encodeURIComponent(prompt);
    return `${platform.baseUrl}?${platform.promptParam}=${encodedPrompt}`;
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mb-8 py-4 px-5 bg-[#2C2E34]/50 rounded-xl border border-white/5">
      <span className="text-gray-400 text-sm">Résumer avec :</span>
      <div className="flex items-center gap-2">
        {aiPlatforms.map((platform) => (
          <a
            key={platform.name}
            href={getAIUrl(platform)}
            target="_blank"
            rel="noopener noreferrer"
            title={`Résumer avec ${platform.name}`}
            className="group p-2 rounded-lg bg-[#1a1a1a]/50 hover:bg-[#1a1a1a] transition-all duration-300"
          >
            <span
              className="text-gray-500 transition-colors duration-300 block"
              style={{
                color: undefined
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = platform.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = '';
              }}
            >
              {getLogo(platform.name)}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
