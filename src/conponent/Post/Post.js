import images from '~/assets/images';
import AccountImage from '../AccountImage/AccountImage';
import style from './Post.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faMessage, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as ReactPublic } from '~/assets/images/public.svg';

const cx = classNames.bind(style);

function Post({ data }) {
    return (
        <>
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
            {data.map((item, index) => {
                let image;
                if (item.image.length > 0) {
                    image = item.image;
                }
                return (
                    <div key={item.id} className={cx('post-wrapper')}>
                        <div className={cx('post-border')}>
                            <div className={cx('post-section')}>
                                <AccountImage src={item.imageAccount} />
                                <div className={cx('post-name-info')}>
                                    <h4 className={cx('post-name')}>{item.name}</h4>
                                    <div className={cx('post-name-more')}>
                                        {/* <span className={cx('post-name-hide')}>Người tham gia ẩn danh</span> */}
                                        <span className={cx('post-time')}>{item.time} giờ</span>
                                        <ReactPublic />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('post-info')}>
                                <p className={cx('text')}>{item.info}</p>
                            </div>
                            {image && (
                                <div className={cx('img-wrapper')}>
                                    <img src={images[image]} width="500px" />
                                </div>
                            )}

                            <div className={cx('post-status')}>
                                <div className={cx('post-status-like-count')}>
                                    <FontAwesomeIcon icon={faThumbsUp} className={cx('icon')} />
                                    <span>{item.likeCount}</span>
                                </div>
                                <div className={cx('post-status-like-count')}>
                                    <FontAwesomeIcon icon={faComment} className={cx('icon')} />
                                    <span>{item.commentCount} bình luận</span>
                                </div>
                            </div>
                            <div className={cx('seperator')}></div>
                            <div className={cx('post-like')}>
                                <div className={cx('post-type-item')}>
                                    <FontAwesomeIcon icon={faThumbsUp} className={cx('icon')} />
                                    <span className={cx('text')}>Thích</span>
                                </div>
                                <div className={cx('post-type-item')}>
                                    <FontAwesomeIcon icon={faMessage} className={cx('icon')} />
                                    <span className={cx('text')}>Bình luận</span>
                                </div>
                                <div className={cx('post-type-item')}>
                                    <FontAwesomeIcon icon={faShare} className={cx('icon')} />
                                    <span className={cx('text')}>Chia sẻ</span>
                                </div>
                            </div>
                            <div className={cx('seperator')}></div>
                            <div className={cx('comment-section')}>
                                <div className={cx('comment-writter')}>
                                    <AccountImage className={cx('img')} />
                                    <input placeholder="Viết bình luận công khai..." className={cx('comment-input')} />
                                </div>
                                <div className={cx('users-comment')}>
                                    {item.commentData.map((comment, cindex) => {
                                        return (
                                            <div key={comment.id} className={cx('user-comment')}>
                                                <AccountImage className={cx('img')} />
                                                <div className={cx('comment-text')}>
                                                    <h5>{comment.name}</h5>
                                                    <p>{comment.comment}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Post;
