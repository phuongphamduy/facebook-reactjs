import { Link } from 'react-router-dom';
import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import AccountImage from '~/conponent/AccountImage/AccountImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCircleUser, faClockRotateLeft, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Sidebar() {
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
            </div>
        </>
    );
}

export default Sidebar;
