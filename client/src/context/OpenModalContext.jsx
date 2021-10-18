import React, {createContext, useContext, useState} from 'react'
const OpenModalContext = createContext(undefined)
const OpenModalProvider =({children})=>{
    const [openModal, setOpenModal]=useState(false)
    const [enabled, setEnabled]=useState(true)
    const [create, setCreate] = useState(false)
    const [show, setShow] = useState(false)
    return(
        <OpenModalContext.Provider value={{
            openModal,
            enabled,
            show,
            handleEnabled:()=>{
                setEnabled(!enabled)
            },
            handleOpenModal:()=>{
                setCreate(!create)
                setOpenModal(!openModal)
            },

            handleSubmitOffcanvas:()=>{
                setShow(!show)
            },


        }}>
            {children}
        </OpenModalContext.Provider>
    )
}

const useOpenModal=()=>{
    const context = useContext(OpenModalContext)
    if (context === undefined){
        throw new Error('OpenModalContext mus be used within a OpenModalProvider')
    }
    return context
}
export{OpenModalProvider,useOpenModal}