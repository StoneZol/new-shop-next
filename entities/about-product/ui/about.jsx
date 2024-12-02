import ReactMarkdown from 'react-markdown';
export default function About({
    data = ''
}) {
    return (<ReactMarkdown>{data}</ReactMarkdown>)
}