import Header from './Header/Header';

function SecondLayout() {
    return (
        <>
            <Header />
            <div className="row">
                <div className="col-3">sidebar</div>
                <div className="col-9">content</div>
            </div>
            <div>footer</div>
        </>
    );
}

export default SecondLayout;
