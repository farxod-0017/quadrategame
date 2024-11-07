import React, { useRef, useState } from 'react'
import qbox from '../images/qbox.webp'
import '../Style/step1.css'
import '../Style/step2.css'

function Step1() {

    const headData = [
        {
            text: "Kategoriya"
        },
        {
            text: "O'rtacha"
        },
    ]
    const step1Data = [
        {
            text: "0.00",
            img: 1,
            id: 1,
            read: JSON.parse(localStorage.getItem('c1r1'))
        },
    ]
    const step2Data = [
        {
            text: "0.00",
            img: 1,
            id: 4,
            read: JSON.parse(localStorage.getItem('c1r2'))

        },
    ]
    const step3Data = [
        {
            text: "0.00",
            img: 1,
            id: 7,
            read: JSON.parse(localStorage.getItem('c1r3'))

        },
    ]

    const QUESTIONS = [
        {
            id: 1,
            savol: "Mavzuga oid (Auksion Savoli) :",
        },

        {
            id: 4,
            savol: "Xisoblang (Auksion Savoli) :",
        },
        {
            id: 7,
            savol: "Iqtisodiy Atamalar (Auksion Savoli) : Chet el tovarlarini kiritish yoki chiqarish, olib chiqib ketishni davlat tomonidan ta'qiqlash yoki chet davlatga qarashli mulkni vaqtincha to'xtatib turish, ta'qiqlash.",
        },
    ]
    const [selected, setSelected] = useState({ savol: 0 });
    let modal = useRef()
    function callModal(e) {
        setSelected(QUESTIONS.find((item) => item.id === e))
        modal.current.classList.add("show_modal")
    }
    function closeModal() {
        modal.current.classList.remove('show_modal')
    }
    function fireQues() {
        if (selected.id === 1) {
            localStorage.setItem('c1r1', '1');
            window.location.reload()
        } else if (selected.id === 2) {
            localStorage.setItem('c2r1', '1');
            window.location.reload()
        } else if (selected.id === 3) {
            localStorage.setItem('c3r1', '1');
            window.location.reload()
        } else if (selected.id === 4) {
            localStorage.setItem('c1r2', '1');
            window.location.reload()
        } else if (selected.id === 5) {
            localStorage.setItem('c2r2', '1');
            window.location.reload()
        } else if (selected.id === 6) {
            localStorage.setItem('c3r2', '1');
            window.location.reload()
        } else if (selected.id === 7) {
            localStorage.setItem('c1r3', '1');
            window.location.reload()
        } else if (selected.id === 8) {
            localStorage.setItem('c2r3', '1');
            window.location.reload()
        } else if (selected.id === 9) {
            localStorage.setItem('c3r3', '1');
            window.location.reload()
        }
    }
    return (
        <div className='step1'>
            <h1>3-bosqich (3/3) | Auksion </h1>
            <div ref={modal} className="modal">
                <button onClick={() => closeModal()} className='modal_btn close_btn' type="button">Close</button>
                <div className="modal_window">
                    <h3>{selected.savol}</h3>
                    <button className='modal_btn' onClick={(e) => fireQues(e)} type="button">Submit</button>
                </div>
            </div>
            <div className="step1_grid step3_grid">

                {headData.map((item, index) => {
                    return (
                        <div key={index + 1} className="step1_card head_table">
                            <h4>{item.text}</h4>
                        </div>
                    )
                })}

                <div className="step1_card_theme">
                    <h2>Mavzuga oid</h2>
                </div>
                {step1Data.map((item, index) => {
                    return (
                        <div key={index + 1} style={{ background: item.read === 1 ? 'red' : 'rgb(4, 255, 0)' }} onClick={() => callModal(item.id)} className="step1_card">
                            <h4>{item.text}</h4>
                            {item.img === 1 ? <img src={qbox} alt="" /> : <noscript></noscript>}

                        </div>
                    )
                })}

                <div className="step1_card_theme">
                    <h2>Xisoblang</h2>
                </div>
                {step2Data.map((item, index) => {
                    return (
                        <div key={index + 1} style={{ background: item.read === 1 ? 'red' : 'rgb(4, 255, 0)' }} onClick={() => callModal(item.id)} className="step1_card">
                            <h4>{item.text}</h4>
                            {item.img === 1 ? <img src={qbox} alt="" /> : <noscript></noscript>}
                        </div>
                    )
                })}

                <div className="step1_card_theme">
                    <h2>Iqtisodiy atamalar</h2>
                </div>
                {step3Data.map((item, index) => {
                    return (
                        <div key={index} style={{ background: item.read === 1 ? 'red' : 'rgb(4, 255, 0)' }} onClick={() => callModal(item.id)} className="step1_card">
                            <h4>{item.text}</h4>
                            {item.img === 1 ? <img src={qbox} alt="" /> : <noscript></noscript>}
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Step1