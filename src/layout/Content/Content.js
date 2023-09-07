import classNames from 'classnames/bind';
import style from './Content.module.scss';
import Story from '~/conponent/Story/Story';
import AccountImage from '~/conponent/AccountImage/AccountImage';
import images from '~/assets/images';
import { ReactComponent as ReactPublic } from '~/assets/images/public.svg';
import { faComment, faMessage, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(style);

function Content() {
    const dataPost = [
        {
            id: 1,
            name: 'IFact',
            time: 4,
            imageAccount: 'accountImage1.png',
            info: 'Chạy đi em ơi :)) Giông bão sắp ập tới rùi đó :))',
            image: 'post1.jpg',
            likeCount: 60,
            commentCount: 100,
            commentData: [
                {
                    id: 1,
                    name: 'Phương Phạm',
                    comment: 'Hiển thị nội dung comment',
                },
                {
                    id: 2,

                    name: 'Ngọc Phát',
                    comment: 'Chạy nhanh đi em ơi',
                },
                {
                    id: 3,

                    name: 'Trâm Ngọc',
                    comment: 'Sắp được ăn cơm miễn phí rùi kkk',
                },
                {
                    id: 4,

                    name: 'Thanh Ngọc',
                    comment: 'Sướng nhất là bạn rùi kkk',
                },
            ],
        },
    ];

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
                <div className={cx('post-wrapper')}>
                    <div className={cx('post-border')}>
                        <div className={cx('post-section')}>
                            <AccountImage />
                            <div className={cx('post-name-info')}>
                                <h4 className={cx('post-name')}>Tuyển dụng thực tập IT</h4>
                                <div className={cx('post-name-more')}>
                                    <span className={cx('post-name-hide')}>Người tham gia ẩn danh</span>
                                    <span className={cx('post-time')}>4 giờ</span>
                                    <ReactPublic />
                                </div>
                            </div>
                        </div>
                        <div className={cx('post-info')}>
                            <p className={cx('text')}>
                                Tôi thấy đa số các công ty không tạo các bài test online để lọc ứng viên, ứng viên nào
                                qua đạt yêu cầu thì đến phỏng vấn có phải đỡ mất thời gian không các bạn nhỉ,để ứng viên
                                biết được năng lực mình có phù hợp hay không
                            </p>
                        </div>
                        <div className={cx('post-status')}>
                            <div className={cx('post-status-like-count')}>
                                <FontAwesomeIcon icon={faThumbsUp} className={cx('icon')} />
                                <span>60</span>
                            </div>
                            <div className={cx('post-status-like-count')}>
                                <FontAwesomeIcon icon={faComment} className={cx('icon')} />
                                <span>100 bình luận</span>
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
                                <div className={cx('user-comment')}>
                                    <AccountImage className={cx('img')} />
                                    <div className={cx('comment-text')}>
                                        <h5>Phương Phạm</h5>
                                        <p>Hiện thị nội dung comment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('post-wrapper')}>
                    <div className={cx('post-border')}>
                        <div className={cx('post-section')}>
                            <AccountImage />
                            <div className={cx('post-name-info')}>
                                <h4 className={cx('post-name')}>Nhóm giải trí Meme</h4>
                                <div className={cx('post-name-more')}>
                                    {/* <span className={cx('post-name-hide')}>Người tham gia ẩn danh</span> */}
                                    <span className={cx('post-time')}>4 giờ</span>
                                    <ReactPublic />
                                </div>
                            </div>
                        </div>
                        <div className={cx('post-info')}>
                            <p className={cx('text')}>Thì ra mình cx có bồ hihihi</p>
                        </div>
                        <div className={cx('img-wrapper')}>
                            <img src={images['post1.jpg']} width="500px" />
                        </div>
                        <div className={cx('post-status')}>
                            <div className={cx('post-status-like-count')}>
                                <FontAwesomeIcon icon={faThumbsUp} className={cx('icon')} />
                                <span>60</span>
                            </div>
                            <div className={cx('post-status-like-count')}>
                                <FontAwesomeIcon icon={faComment} className={cx('icon')} />
                                <span>100 bình luận</span>
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
                                <div className={cx('user-comment')}>
                                    <AccountImage className={cx('img')} />
                                    <div className={cx('comment-text')}>
                                        <h5>Phương Phạm</h5>
                                        <p>Hiện thị nội dung comment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {dataPost.map((item, index) => {
                    const image = item.image;
                    return (
                        <>
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
                                    <div className={cx('img-wrapper')}>
                                        <img src={images[image]} width="500px" />
                                    </div>
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
                                            <input
                                                placeholder="Viết bình luận công khai..."
                                                className={cx('comment-input')}
                                            />
                                        </div>
                                        <div className={cx('users-comment')}>
                                            {item.commentData.map((comment, cindex) => {
                                                return (
                                                    <div className={cx('user-comment')}>
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
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default Content;
