import classNames from 'classnames/bind';
import style from './Story.module.scss';
import images from '~/assets/images';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccountImage from '~/conponent/AccountImage/AccountImage';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const cx = classNames.bind(style);

function Story() {
    return (
        <>
            <div className={cx('story-wrapper')}>
                <div className={cx('story-list')}>
                    <Splide aria-label="My Favorite Images" options={{ perPage: 4 }}>
                        <SplideSlide>
                            <div className={cx('story-item-create')}>
                                <img src={images.noImageStory} height="200px" width="140px" />
                                <div className={cx('story-name')}>
                                    <span>Tạo tin</span>
                                    <div className={cx('story-create-icon')}>
                                        <div className={cx('wrapper')}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={cx('story-item')}>
                                <img
                                    className={cx('story-img')}
                                    src={images['story1.jpg']}
                                    height="100%"
                                    width="140px"
                                />
                                <div className={cx('story-name')}>
                                    <span>Trần Thư</span>
                                </div>
                                <div className={cx('story-account')}>
                                    <AccountImage className={cx('img')} src={'accountImage.jpg'} />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={cx('story-item')}>
                                <img
                                    className={cx('story-img')}
                                    src={images['story2.jpg']}
                                    height="100%"
                                    width="140px"
                                />
                                <div className={cx('story-name')}>
                                    <span>Nguyễn Thị Như Ý</span>
                                </div>
                                <div className={cx('story-account')}>
                                    <AccountImage className={cx('img')} src={'accountImage.jpg'} />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={cx('story-item')}>
                                <img
                                    className={cx('story-img')}
                                    src={images['story3.jpg']}
                                    height="100%"
                                    width="140px"
                                />
                                <div className={cx('story-name')}>
                                    <span>Trần Thư</span>
                                </div>
                                <div className={cx('story-account')}>
                                    <AccountImage className={cx('img')} src={'accountImage.jpg'} />
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </>
    );
}

export default Story;
