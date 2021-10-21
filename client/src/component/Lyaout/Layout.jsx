import React from 'react';

import { useOpenModal} from "../../context/OpenModalContext";
import Menu from "./Menu/Menu";
import BookOfCanvas from "../Book/BookOfCanvas";


const Layout = ({children}) => {
    document.title ='Climatique'
            const {show,handleSubmitOffcanvas}=useOpenModal()
    return (
        <>


            <header>

            </header>

            <Menu/>
            <main>
                <div className='container-fluid'>
                    {children}
                    <BookOfCanvas show={show}
                                  handleClose={handleSubmitOffcanvas}
                    />
                </div>

            </main>
            <footer>

            </footer>

        </>
    );
};

export default Layout;