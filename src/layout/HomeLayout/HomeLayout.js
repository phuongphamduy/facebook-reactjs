import Header from '~/layout/Header';
import classNames from 'classnames/bind';
import style from './HomeLayout.module.scss';
import Sidebar from '../Sidebar/Sidebar';

const cx = classNames.bind(style);
function HomeLayout() {
    return (
        <>
            <Header />
            <div className={cx('content-wrapper')}>
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-6">content</div>
                    <div className="col-3">message</div>
                </div>
            </div>
            <div>footer</div>
        </>
    );
}

export default HomeLayout;
