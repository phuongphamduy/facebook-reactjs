import { Link } from 'react-router-dom';
import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import AccountImage from '~/conponent/AccountImage/AccountImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCircleUser, faClockRotateLeft, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';
import Menu from '~/conponent/Menu/Menu';

const cx = classNames.bind(style);

function Sidebar() {
    const dataShortCut = [
        {
            id: 1,
            image: 'image1.jpg',
            name: 'Học bổng cộng đồng',
        },
        {
            id: 2,
            image: 'image2.jpg',
            name: 'Tuyển dụng thực tập IT',
        },
        {
            id: 3,
            image: 'image3.png',
            name: 'ReactJS Việt Nam',
        },
        {
            id: 4,
            image: 'image4.jpg',
            name: 'Basketball Stars',
        },
        {
            id: 5,
            image: 'image5.png',
            name: 'GameVH',
        },
        {
            id: 6,
            image: 'image2.jpg',
            name: 'Tuyển dụng thực tập IT',
        },
        {
            id: 7,
            image: 'image3.png',
            name: 'ReactJS Việt Nam',
        },
        {
            id: 8,
            image: 'image3.png',
            name: 'ReactJS Việt Nam',
        },
    ];

    return (
        <>
            <div className={cx('sidebar-wrapper')}>
                <ul className={cx('sidebar-list')}>
                    <li className={cx('sidebar-item')}>
                        <Link to="/" className={cx('sidebar-link')}>
                            <AccountImage className={cx('sidebar-img')} />
                            <span className={cx('sidebar-item-text')}>Phuong Pham</span>
                        </Link>
                    </li>
                    <li className={cx('sidebar-item')}>
                        <Link to="/" className={cx('sidebar-link')}>
                            <FontAwesomeIcon icon={faUsers} className={cx('icon')} />
                            <span className={cx('sidebar-item-text')}>Bạn bè</span>
                        </Link>
                    </li>
                    <li className={cx('sidebar-item')}>
                        <Link to="/" className={cx('sidebar-link')}>
                            <FontAwesomeIcon icon={faClockRotateLeft} className={cx('icon')} />
                            <span className={cx('sidebar-item-text')}>Kỷ niệm</span>
                        </Link>
                    </li>
                    <li className={cx('sidebar-item')}>
                        <Link to="/" className={cx('sidebar-link')}>
                            <FontAwesomeIcon icon={faBookmark} className={cx('icon')} />
                            <span className={cx('sidebar-item-text')}>Đã lưu</span>
                        </Link>
                    </li>
                    <li className={cx('sidebar-item')}>
                        <Link to="/" className={cx('sidebar-link')}>
                            <FontAwesomeIcon icon={faCircleUser} className={cx('icon')} />
                            <span className={cx('sidebar-item-text')}>Nhóm</span>
                        </Link>
                    </li>
                    <li className={cx('sidebar-item')}>
                        <Link to="/" className={cx('sidebar-link')}>
                            <FontAwesomeIcon icon={faVideo} className={cx('icon')} />
                            <span className={cx('sidebar-item-text')}>Video</span>
                        </Link>
                    </li>
                </ul>
                <div className={cx('seperator')}></div>
                <Menu title="Lối tắt của bạn" data={dataShortCut} />
                <div className={cx('sidebar-footer')}>
                    <p>Sản phẩm thiết kế giao diện dựa trên facebook sử dụng reactJS</p>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
