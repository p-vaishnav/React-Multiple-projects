import {useEffect, useState} from 'react';

const ProgressiveImage = (props) => {
    const {height, width, placeholderImg, src} = props;
    const [imgSrc, setImgSrc] = useState(placeholderImg || src);
    const customClass = placeholderImg && imgSrc === placeholderImg ? 'loading' : 'laoded';
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            console.log('Image has been loaded');
            setImgSrc(src);
        };
    }, [src]);

    return (
        <img
            src={imgSrc}
            className={customClass}
            height={height}
            width={width}
        />
    )
}

export default ProgressiveImage;