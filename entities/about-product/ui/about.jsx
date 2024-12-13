import ReactMarkdown from 'react-markdown';
export default function About({
    data = ''
}) {
    const formatData = data
        .replace(/!\[.*?\]\(.*?\)/g, '\n\n$&\n')
        .replace(/\n/g, `\n\n`)
    return (<ReactMarkdown>{formatData}</ReactMarkdown>)
}

// .replace(/(\S)\s{2,}(\S)/g, '$1\n\n$2'); // Разделить длинные параграфы на два