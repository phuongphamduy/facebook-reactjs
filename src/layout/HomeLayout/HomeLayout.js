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
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-6">
                        <Content />
                    </div>
                    <div className="col-3">
                        <Message />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeLayout;
