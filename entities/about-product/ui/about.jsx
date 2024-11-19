import styles from './about-product.module.scss'
import ReactMarkdown from 'react-markdown';
export default function About({
    data = ''
}) {
    const test = '**Эбоут**  \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et elemen' +
            'tum dolor.  \nSuspendisse potenti. Mauris est eros, ultricies dictum nibh+porta, ' +
            'tincidunt accumsan nunc. Nunc eget vehicula dui, vel eleifend tortor.Fusce et ' +
            'metus turpis.  \nPhasellu Phasellus  \net vestibulum urna. Nullam imperdiet enim qui' +
            ' dui arcu, imperdiet in iaculis consectetur, ultricies eleifend odio.'
    return (<ReactMarkdown>{test}</ReactMarkdown>)
}