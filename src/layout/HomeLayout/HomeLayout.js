import Header from '~/layout/Header';
import classNames from 'classnames/bind';
import style from './HomeLayout.module.scss';

const cx = classNames.bind(style);
function HomeLayout() {
    return (
        <>
            <Header />
            <div className={cx('content-wrapper')}>
                <div className="col-3">sidebar</div>
                <div className="col-6">content</div>
                <div className="col-3">message</div>
            </div>
            <div>footer</div>
        </>
    );
}

export default HomeLayout;
