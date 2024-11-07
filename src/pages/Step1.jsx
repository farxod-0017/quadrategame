import React, { useRef, useState } from 'react'
import qbox from '../images/qbox.webp'
import '../Style/step1.css'

function Step1() {

    const headData = [
        {
            text: "Kategoriya"
        },
        {
            text: "Oson"
        },
        {
            text: "O'rtacha"
        },
        {
            text: "Qiyin"
        },

    ]
    const step1Data = [
        {
            text: "20",
            img: 1,
            id: 1,
            read: JSON.parse(localStorage.getItem('c1r1'))
        },
        {
            text: "30",
            img: 1,
            id: 2,
            read: JSON.parse(localStorage.getItem('c2r1'))

        },
        {
            text: "40",
            img: 1,
            id: 3,
            read: JSON.parse(localStorage.getItem('c3r1'))

        },

    ]
    const step2Data = [
        {
            text: "30",
            img: 1,
            id: 4,
            read: JSON.parse(localStorage.getItem('c1r2'))

        },
        {
            text: "40",
            img: 1,
            id: 5,
            read: JSON.parse(localStorage.getItem('c2r2'))

        },
        {
            text: "50",
            img: 1,
            id: 6,
            read: JSON.parse(localStorage.getItem('c3r2'))

        },

    ]
    const step3Data = [
        {
            text: "10",
            img: 1,
            id: 7,
            read: JSON.parse(localStorage.getItem('c1r3'))

        },
        {
            text: "20",
            img: 1,
            id: 8,
            read: JSON.parse(localStorage.getItem('c2r3'))

        },
        {
            text: "30",
            img: 1,
            id: 9,
            read: JSON.parse(localStorage.getItem('c3r3'))

        },

    ]


    const QUESTIONS = [
        {
            id: 1,
            savol: "Mavzuga oid (20 ball) : korxonaning iloji boricha ko’proq miqdorda va yuqori sifatdagi tovar va xizmatlarni ishlab chiqarishga intilishi.",
        },
        {
            id: 2,
            savol: "Mavzuga oid (30 ball) :biznesrejaning qisqacha tavsifi ",
        },
        {
            id: 3,
            savol: "Mavzuga oid (40 ball) : ..... siyosati– bunda  narx qandaydir bir yuqori darajada  belgilanadi, mahsulot esa segmentatsiya natijasida asosiy deb e’tirof etilgan  bozorda sotiladi.",
        },
        {
            id: 4,
            savol: "Juda qiyin (30 ball) :  ...-turli mulk shakllari va har  xil xo'jalik turlarining  yaxlitligidan tashkil topgan iqtisodiyot.",
        },
        {
            savol: "Juda qiyin (40 ball) :  ...-xususiy tarzda tadbirkorlikning biror bir turi bilan shug'ullanishga ruxsat beruvchi guvohnoma, tegishli hujjatlar asosida moliya  organlari tomonidan beriladi; 2) ilmiy kashfiyot va ixtiroga mualliflikni tasdiqlovchi guvohnoma.  ",
            id: 5,
        },
        {
            id: 6,
            savol: "Juda qiyin (50 ball) :..-birja  faoliyatida aksiyaga qo'shib jo'natiladigan hujjat (sertifikat). Ushbu hujjatda aksiyaga tegishli tor doiradagi ba'zi ma'lumotlar (sirkulyasiyaga ruxsat olingan, aksiya konkurent tomonga tegishli emas va boshqalar) keltirilgan bo'ladi.  ",
        },
        {
            id: 7,
            savol: "Iqtisodiy Atamalar (10 ball) : ..........KAPITAL - ishlab chiqarish jarayonida bir necha yil davomida  ishtirok  etuvchi va o'z qiymatini tayyorlanayotgan mahsulotga qisman o'tkazib boruvchi mehnat vositalaridir. ",
        },
        {
            id: 8,
            savol: "Iqtisodiy Atamalar (20 ball) :.....- bu davlat tomonidan korxona va tashkilotlarga muayyan  mahsulot turini  tayyorlash va uni  iste'molchilarga yetkazib berish, ishlab  chiqarish, noishlab  chiqarish  va ilmiy - tadqiqot xarakteridagi ma'lum ishlarni bajarish uchun beriladigan topshiriq.",
        },
        {
            id: 9,
            savol: "Iqtisodiy Atamalar (30 ball) : ......-aksioner, aksiya egasining  daromadi ; aksionerlik jamiyati foydasining bir qismi.    ",
        }
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
            <h1>1-bosqich (1/3) | Banking </h1>
            <div ref={modal} className="modal">
                <button onClick={() => closeModal()} className='modal_btn close_btn' type="button">Close</button>
                <div className="modal_window">
                    <h3>{selected.savol}</h3>
                    <button className='modal_btn' onClick={(e) => fireQues(e)} type="button">Submit</button>
                </div>
            </div>
            <div className="step1_grid">

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
                    <h2>Muhim savol</h2>
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
                {step3Data.map((item) => {
                    return (
                        <div style={{ background: item.read === 1 ? 'red' : 'rgb(4, 255, 0)' }} onClick={() => callModal(item.id)} className="step1_card">
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