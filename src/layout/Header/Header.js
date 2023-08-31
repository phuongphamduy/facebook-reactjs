import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Header.module.scss';
import classNames from 'classnames/bind';
import { ReactComponent as ReactLogo } from '~/assets/images/logo.svg';
import { ReactComponent as ReactHome } from '~/assets/images/home.svg';
import { ReactComponent as ReactUser } from '~/assets/images/users.svg';
import { ReactComponent as ReactTivi } from '~/assets/images/tivi.svg';
import { ReactComponent as ReactStore } from '~/assets/images/store.svg';
import { ReactComponent as ReactConsole } from '~/assets/images/console.svg';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
function Header() {
    return (
        <>
            <div className={cx('header-wrapper')}>
                <div className={cx('row')} style={{ height: '100%' }}>
                    <div className={cx('col-3 d-flex align-items-center')}>
                        <ReactLogo />
                        <div className={cx('header_input_search_wrapper')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon-search')} />
                            <input className={cx('header_input_search')} placeholder="Tìm kiếm trên Facebook" />
                        </div>
                    </div>
                    <div className={cx('col-6')}>
                        <div className={cx('navigate-wrapper')}>
                            <div>
                                <ReactHome />
                            </div>
                            <div>
                                <ReactUser />
                            </div>
                            <div>
                                <ReactTivi />
                            </div>
                            <div>
                                <ReactStore />
                            </div>
                            <div>
                                <ReactConsole />
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-3')}>
                        <ReactLogo />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
