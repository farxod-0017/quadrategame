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
        {
            text: "O'rtacha"
        },
    ]
    const step1Data = [
        {
            text: "0.00",
            img:1,
            id:1,
            read:JSON.parse(localStorage.getItem('c1r1'))
        },
        {
            text: "0.00",
            img:1,
            id:2,
            read:JSON.parse(localStorage.getItem('c2r1'))

        },

    ]
    const step2Data = [
        {
            text: "0.00",
            img:1,
            id:4,
            read:JSON.parse(localStorage.getItem('c1r2'))

        },
        {
            text: "0.00",
            img:1,
            id:5,
            read:JSON.parse(localStorage.getItem('c2r2'))

        },
    ]
    const step3Data = [
        {
            text: "0.00",
            img:1,
            id:7,
            read:JSON.parse(localStorage.getItem('c1r3'))

        },
        {
            text: "0.00",
            img:1,
            id:8,
            read:JSON.parse(localStorage.getItem('c2r3'))

        },
    ]

    const QUESTIONS = [
        {
            id:1,
            savol:"Mavzuga oid (1-savol) : ",
        },
        {
            id:2,
            savol:"Mavzuga oid (2-savol) :",
        },
        {
            id:4,
            savol:"Xisoblang (1-savol) : Korxona 180 mln yillik 21% stafkada 3oy imtiyozli muddat bilan 1yilga keradit oldi. Korxona uchun 11-oydagi foiz to'lovini hisoblang",
        },
        {
            id:5,
            savol:"Xisoblang (2-savol) : Kompaniyaning Sof foydasi 56 mln ga teng bo'lib, uning Umumiy aktivlar qiymati 280 mlnga teng bolsa, kompaniya uchun Aktivlar rentabelligini (%) xisoblang.",
        },
        {
            id:7,
            savol:"Iqtisodiy Atamalar (1-savol) : Kalendar yilida mamlakatda 183 kundan kam bo’lmagan muddatda yashagan, O’zbekistonda doimiy yashash joyiga ega bolIgan va bo’lmagan soliq to’lovchilar",
        },
        {
            id:8,
            savol:"Iqtisodiy Atamalar (2-savol) : Qonun hujjatlarida nazarda tutilgan tartibda muayyan maqsadlarga sarflash sharti bn yuqori byudjetdan quyi byudjetga qaytarmaslik shartida ajratiladigan pul mablagʻlari",
        },
    ]
    const[selected, setSelected] = useState({savol:0});
    let modal = useRef()
    function callModal(e) {
        setSelected(QUESTIONS.find((item)=> item.id === e))
        modal.current.classList.add("show_modal")
    }
    function closeModal() {
        modal.current.classList.remove('show_modal')
    }
    function fireQues() {
        if(selected.id === 1) {
            localStorage.setItem('c1r1', '1');
            window.location.reload()
        }else if(selected.id === 2) {
            localStorage.setItem('c2r1', '1');
            window.location.reload()
        }else if(selected.id === 3) {
            localStorage.setItem('c3r1', '1');
            window.location.reload()
        }else if(selected.id === 4) {
            localStorage.setItem('c1r2', '1');
            window.location.reload()
        }else if(selected.id === 5) {
            localStorage.setItem('c2r2', '1');
            window.location.reload()
        }else if(selected.id === 6) {
            localStorage.setItem('c3r2', '1');
            window.location.reload()
        }else if(selected.id === 7) {
            localStorage.setItem('c1r3', '1');
            window.location.reload()
        }else if(selected.id === 8) {
            localStorage.setItem('c2r3', '1');
            window.location.reload()
        }else if(selected.id === 9) {
            localStorage.setItem('c3r3', '1');
            window.location.reload()
        }
    }
    return (
        <div className='step1'>
            <h1>2-bosqich (2/3) | Risk </h1>
            <div ref={modal} className="modal">
                <button onClick={()=>closeModal()} className='modal_btn close_btn' type="button">Close</button>
                <div className="modal_window">
                    <h3>{selected.savol}</h3>
                    <button className='modal_btn' onClick={(e)=>fireQues(e)} type="button">Submit</button>
                </div>
            </div>
            <div className="step1_grid step2_grid">

                {headData.map((item, index) => {
                    return (
                        <div key={index+1} className="step1_card head_table">
                            <h4>{item.text}</h4>
                        </div>
                    )
                })}

                <div className="step1_card_theme">
                    <h2>Mavzuga oid</h2>
                </div>
                {step1Data.map((item, index) => {
                    return (
                        <div key={index+1} style={{background: item.read === 1 ? 'red' : 'rgb(4, 255, 0)'}} onClick={()=>callModal(item.id)} className="step1_card">
                            <h4>{item.text}</h4>
                            {item.img === 1 ? <img   src={qbox} alt="" /> : <noscript></noscript>}
                            
                        </div>
                    )
                })}

                <div className="step1_card_theme">
                    <h2>Xisoblang</h2>
                </div>
                {step2Data.map((item, index) => {
                    return (
                        <div key={index+1} style={{background: item.read === 1 ? 'red' : 'rgb(4, 255, 0)'}}  onClick={()=>callModal(item.id)} className="step1_card">
                            <h4>{item.text}</h4>
                            {item.img === 1 ? <img src={qbox} alt="" /> : <noscript></noscript> }
                        </div>
                    )
                })}

                <div className="step1_card_theme">
                    <h2>Iqtisodiy atamalar</h2>
                </div>
                {step3Data.map((item, index) => {
                    return (
                        <div key={index} style={{background: item.read === 1 ? 'red' : 'rgb(4, 255, 0)'}}  onClick={()=>callModal(item.id)} className="step1_card">
                            <h4>{item.text}</h4>
                            {item.img === 1 ? <img src={qbox} alt="" /> : <noscript></noscript> }
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Step1