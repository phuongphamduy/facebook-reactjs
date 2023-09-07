import classNames from 'classnames/bind';
import style from './Content.module.scss';
import Story from '~/conponent/Story/Story';
import AccountImage from '~/conponent/AccountImage/AccountImage';
import images from '~/assets/images';

const cx = classNames.bind(style);

function Content() {
    return (
        <>
            <div className={cx('content-wrapper')}>
                <Story />
                <div className={cx('post-wrapper')}>
                    <div className={cx('post-border')}>
                        <div className={cx('post-section')}>
                            <AccountImage />
                            <input className={cx('post-input')} placeholder="Phuong ơi, bạn đang nghĩ gì thế?" />
                        </div>
                        <div className={cx('seperator')}></div>
                        <div className={cx('post-type')}>
                            <div className={cx('post-type-item')}>
                                <img src={images.camera} />
                                <span className={cx('text')}>Video trực tiếp</span>
                            </div>
                            <div className={cx('post-type-item')}>
                                <img src={images.img} />
                                <span className={cx('text')}>Ảnh/Video</span>
                            </div>
                            <div className={cx('post-type-item')}>
                                <img src={images.face} />
                                <span className={cx('text')}>Cảm xúc/hoạt động</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;
