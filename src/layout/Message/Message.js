import Menu from '~/conponent/Menu/Menu';
import style from './Message.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(style);

function Message() {
    const pages = [
        {
            id: 1,
            name: 'Học bổng cộng đồng',
            image: 'image1.jpg',
        },
    ];

    const friends = [
        {
            id: 1,
            name: 'Phuong Linh',
            image: 'image1.jpg',
        },
        {
            id: 2,
            name: 'Phuong Pham',
            image: '',
        },
        {
            id: 3,
            name: 'Nha Trang',
            image: 'image2.jpg',
        },
        {
            id: 4,
            name: 'Trần Thư',
            image: 'accountImage.jpg',
        },
        {
            id: 5,
            name: 'Nam Hoài',
            image: 'image3.png',
        },
        {
            id: 6,
            name: 'Lương Hoàng',
            image: 'image5.png',
        },
        {
            id: 7,
            name: 'Trâm Đỗ',
            image: 'image4.jpg',
        },
        {
            id: 8,
            name: 'Vy Thảo',
            image: 'image1.jpg',
        },
        {
            id: 9,
            name: 'Christina',
            image: 'accountImage1.png',
        },
        {
            id: 10,
            name: 'Houinkyoma',
            image: 'image3.png',
        },
    ];

    const groups = [
        {
            id: 1,
            name: 'Làm Giàu Nhanh',
            image: 'image1.jpg',
        },
        {
            id: 2,
            name: 'Nhóm girl xinh, gái đẹp',
            image: '',
        },
        {
            id: 3,
            name: 'Đầu tư chứng khoán',
            image: 'image2.jpg',
        },
        {
            id: 4,
            name: 'Píc cà bu lu chu',
            image: 'accountImage.jpg',
        },
    ];

    return (
        <div className={cx('message-wrapper')}>
            <Menu title="Được tài trợ" />
            <div className={cx('advertise-wrapper')}>
                <img src={images['pnj.jpg']} className={cx('advertise-img')} />
                <div className={cx('advertise-info')}>
                    <h5>PNJ Watch</h5>
                    <p>pnj.com.vn</p>
                </div>
            </div>
            <div className={cx('advertise-wrapper')}>
                <img src={images['watch.jpg']} className={cx('advertise-img')} />
                <div className={cx('advertise-info')}>
                    <h5>Đồng hồ Hải Triều</h5>
                    <p>haitrieu.vn.com</p>
                </div>
            </div>
            <div className={cx('seperator')}></div>
            <Menu title="Trang và trang cá nhân của bạn" data={pages} seperator={true} />
            <Menu title="Người liên hệ" data={friends} seperator={true} />
            <Menu title="Cuộc trò chuyện nhóm" data={groups} />
        </div>
    );
}

export default Message;
