import {LayoutProps} from "./layout.props";

function Layout({children}: LayoutProps): JSX.Element {

    return (
        <div className={'flex w-full h-screen flex-col'}>
            <main
                className={'w-full h-auto transition-transform duration-500'}>{children}</main>
            {/* <Footer/> */}
        </div>
    );
}

export default Layout;