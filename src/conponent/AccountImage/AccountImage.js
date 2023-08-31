import classNames from 'classnames/bind';
import style from './AccountImage.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(style);

function AccountImage({ src, alt, className }) {
    const cls = cx('image', { [className]: className });
    return (
        <>
            <img src={images.noImage} alt={alt} className={cls} />
        </>
    );
}

export default AccountImage;
