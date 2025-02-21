import Image from 'next/image';
import styles from './about-product.module.scss'
import parseFormat from '../libs/parse-format';

export default function About({ data = '' }) {
    const parsedData = parseFormat(data);

    return (
        <div>
            {parsedData.map((block, index) => {
                switch (block.type) {
                    case 'heading':
                        return <h2 key={index}>{block.content}</h2>;
                    case 'image':
                        return (
                            <div className={styles.image_block} key={index} style={{aspectRatio: block.aspectRatio}}>
                                <Image
                                    src={block.src}
                                    alt={block.alt}
                                    sizes="(max-width: 770px) 70vw, 100vw"
                                    fill={true}
                                    style={{objectFit: "cover", }}
                                />
                            </div>
                        );

                    case 'paragraph':
                        return <p key={index}>{block.content}</p>;

                    default:
                        return null;
                }
            })}
        </div>
    );
}




