import ReactMarkdown from 'react-markdown';
export default function About({
    data = ''
}) {
    console.log(data);
    return (<ReactMarkdown>{data}</ReactMarkdown>)
}