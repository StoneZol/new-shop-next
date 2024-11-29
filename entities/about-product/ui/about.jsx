import styles from './about-product.module.scss'
import ReactMarkdown from 'react-markdown';
export default function About({
    data = ''
}) {
    return (<ReactMarkdown>{data}</ReactMarkdown>)
}