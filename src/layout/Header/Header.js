import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Header.module.scss';
import classNames from 'classnames/bind';
import { ReactComponent as ReactLogo } from '~/assets/images/logo.svg';
import { ReactComponent as ReactHome } from '~/assets/images/home.svg';
import { ReactComponent as ReactHomeNot } from '~/assets/images/homenotactive.svg';
import { ReactComponent as ReactUser } from '~/assets/images/users.svg';
import { ReactComponent as ReactUserNot } from '~/assets/images/usersnotactive.svg';
import { ReactComponent as ReactTivi } from '~/assets/images/tivi.svg';
import { ReactComponent as ReactTiviNot } from '~/assets/images/tivinotactive.svg';
import { ReactComponent as ReactStore } from '~/assets/images/store.svg';
import { ReactComponent as ReactStoreNot } from '~/assets/images/storenotactive.svg';
import { ReactComponent as ReactConsole } from '~/assets/images/console.svg';
import { ReactComponent as ReactConsoleNot } from '~/assets/images/consolenotactive.svg';
import { ReactComponent as ReactMenu } from '~/assets/images/menu.svg';
import { ReactComponent as ReactMessage } from '~/assets/images/message.svg';
import { ReactComponent as ReactNotify } from '~/assets/images/notify.svg';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import AccountImage from '~/conponent/AccountImage/AccountImage';
import Tippy from '@tippyjs/react';
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
                            <Tippy content="Home" delay="500">
                                <NavLink
                                    to="/"
                                    className={(nav) => {
                                        return cx('navigate-link', { active: nav.isActive });
                                    }}
                                >
                                    <ReactHome className={cx('active')} />
                                    <ReactHomeNot className={cx('none-active')} />
                                    <div className={cx('border-bottom')}></div>
                                </NavLink>
                            </Tippy>
                            <Tippy content="Friends" delay="500">
                                <NavLink
                                    to="/friends"
                                    className={(nav) => {
                                        return cx('navigate-link', { active: nav.isActive });
                                    }}
                                >
                                    <ReactUser className={cx('active')} />
                                    <ReactUserNot className={cx('none-active')} />
                                    <div className={cx('border-bottom')}></div>
                                </NavLink>
                            </Tippy>
                            <Tippy content="Video" delay="500">
                                <Link to="/video" className={cx('navigate-link')}>
                                    <ReactTivi className={cx('active')} />
                                    <ReactTiviNot className={cx('none-active')} />
                                    <div className={cx('border-bottom')}></div>
                                </Link>
                            </Tippy>
                            <Tippy content="Marketplace" delay="500">
                                <Link to="/store" className={cx('navigate-link')}>
                                    <ReactStore className={cx('active')} />
                                    <ReactStoreNot className={cx('none-active')} />
                                    <div className={cx('border-bottom')}></div>
                                </Link>
                            </Tippy>
                            <Tippy content="Games" delay="500">
                                <Link to="/game" className={cx('navigate-link')}>
                                    <ReactConsole className={cx('active')} />
                                    <ReactConsoleNot className={cx('none-active')} />
                                    <div className={cx('border-bottom')}></div>
                                </Link>
                            </Tippy>
                        </div>
                    </div>
                    <div className={cx('col-3')}>
                        <div className={cx('info-wrapper')}>
                            <Tippy content="Menu" delay="500">
                                <div className={cx('info-border')}>
                                    <ReactMenu />
                                </div>
                            </Tippy>
                            <Tippy content="Messenger" delay="500">
                                <div className={cx('info-border')}>
                                    <ReactMessage />
                                </div>
                            </Tippy>
                            <Tippy content="Notify" delay="500">
                                <div className={cx('info-border')}>
                                    <ReactNotify />
                                </div>
                            </Tippy>
                            <Tippy content="Account" delay="500" placement="bottom">
                                <div>
                                    <AccountImage alt={'no-image'} className={cx('info-image')} />
                                </div>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
