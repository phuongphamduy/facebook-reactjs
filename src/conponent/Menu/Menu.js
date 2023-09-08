import { Link } from 'react-router-dom';
import style from './Menu.module.scss';
import classNames from 'classnames/bind';
import AccountImage from '../AccountImage/AccountImage';

const cx = classNames.bind(style);

function Menu({ title, data, seperator = false }) {
    return (
        <>
            <h3 className={cx('sidebar-title')}>{title}</h3>
            <ul className={cx('sidebar-list')}>
                {data &&
                    data.map((item, index) => {
                        return (
                            <li key={item.id} className={cx('sidebar-item')}>
                                <Link key={item.id} to="/" className={cx('sidebar-link')}>
                                    <AccountImage className={cx('sidebar-img')} src={item.image} />
                                    <span className={cx('sidebar-item-text')}>{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
            </ul>
            {seperator && <div className={cx('seperator')}></div>}
        </>
    );
}

export default Menu;
