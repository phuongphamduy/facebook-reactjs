import Header from '~/layout/Header';
import classNames from 'classnames/bind';
import style from './HomeLayout.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import Content from '~/layout/Content';
import Message from '../Message/Message';

const cx = classNames.bind(style);
function HomeLayout() {
    return (
        <>
            <Header />
            <div className={cx('content-wrapper')}>
                <div className="row">
                    <div className="col-lg-3 d-md-none d-sm-none d-lg-flex">
                        <Sidebar />
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <Content />
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <Message />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeLayout;
