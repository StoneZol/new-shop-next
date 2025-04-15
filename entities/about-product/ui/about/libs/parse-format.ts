type ParsedBlock =
  | { type: "heading"; content: string }
  | { type: "image"; alt: string; aspectRatio: string; src: string }
  | { type: "paragraph"; content: string };

  export default function parseFormat(text: string): ParsedBlock[] {
    const regex = /#(.*?)#|!\[(.*?)\]\((\d+\/\d+)\)\((.*?)\)|([^#\n!]+)/g;
    const matches = [...text.matchAll(regex)];

    return matches.map((match) => {
        if (match[1]) {
            return { type: "heading", content: match[1].trim() };
        }
        if (match[2] && match[3] && match[4]) {
            return {
                type: "image",
                alt: match[2],
                aspectRatio: match[3],
                src: match[4],
            };
        }
        if (match[5]) {
            return { type: "paragraph", content: match[5].trim() };
        }
        return null;
    }).filter(Boolean) as ParsedBlock[];
}

// #Заголовок#
// /n Новый абзац
// ![alt img](link img) изображение