import classNames from 'classnames/bind';
import style from './Content.module.scss';
import Story from '~/conponent/Story/Story';
import Post from '~/conponent/Post/Post';

const cx = classNames.bind(style);

function Content() {
    const dataPost = [
        {
            id: 1,
            name: 'IFact',
            time: 4,
            imageAccount: 'accountImage1.png',
            info: 'Chạy đi em ơi :)) Giông bão sắp ập tới rùi đó :))',
            image: 'post2.jpg',
            likeCount: 60,
            commentCount: 100,
            commentData: [
                {
                    id: 1,
                    name: 'Phương Phạm',
                    comment: 'Hiển thị nội dung comment',
                },
                {
                    id: 2,
                    name: 'Ngọc Phát',
                    comment: 'Chạy nhanh đi em ơi',
                },
                {
                    id: 3,
                    name: 'Trâm Ngọc',
                    comment: 'Sắp được ăn cơm miễn phí rùi kkk',
                },
                {
                    id: 4,
                    name: 'Thanh Ngọc',
                    comment: 'Sướng nhất là bạn rùi kkk',
                },
            ],
        },
        {
            id: 2,
            name: 'Tuyển dụng thực tập IT',
            time: 8,
            imageAccount: '',
            info: 'Tôi thấy đa số các công ty không tạo các bài test online để lọc ứng viên, ứng viên nào qua đạt yêu cầu thì đến phỏng vấn có phải đỡ mất thời gian không các bạn nhỉ,để ứng viên biết được năng lực mình có phù hợp hay không',
            image: '',
            likeCount: 40,
            commentCount: 1,
            commentData: [
                {
                    id: 1,
                    name: 'Phương Phạm',
                    comment: 'Hiển thị nội dung comment',
                },
            ],
        },
        {
            id: 3,
            name: 'Nhóm giải trí Meme',
            time: 19,
            imageAccount: '',
            info: 'Thì ra mình cx có bồ hihihi',
            image: 'post1.jpg',
            likeCount: 100,
            commentCount: 150,
            commentData: [
                {
                    id: 1,
                    name: 'Phương Phạm',
                    comment: 'Hiển thị nội dung comment',
                },
            ],
        },
    ];

    return (
        <>
            <div className={cx('content-wrapper')}>
                <Story />
                <Post data={dataPost} />
            </div>
        </>
    );
}

export default Content;
