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
            savol: "Mavzuga oid (20 ball) : Korxonanining ma'lum vaqt oralig'ida yalpi daromadning yalpi sarfga nisbati",
        },
        {
            id: 2,
            savol: "Mavzuga oid (30 ball) : ",
        },
        {
            id: 3,
            savol: "Mavzuga oid (40 ball) : Sug‘urta shartnomasida ko‘rsatilgan summa yoki foiz bo‘lib, sug‘urtalanuvchi zarar ko‘rgan taqdirda, bu summani o‘zi qoplaydi. Ya’ni, sug‘urta kompaniyasi faqat uni miqdoridan oshgan zararni qoplashga majbur bo‘ladi.",
        },
        {
            id: 4,
            savol: "Xisoblang (30 ball) : Import qilinayotgan tovarga davlat narxi belgilandi va unga 10% aksiz solig'i so'ngra 14% QQS solingach qiymati 15 800 400 ga teng boldi. Tovarning dastlab davlat belgilagan narxini toping.",
        },
        {
            savol: "Xisoblang (40 ball) : Korxonaning vaqtga bog'langan daromadlar grafigi quyidagicha bolsa: f(x)=x² −12x+44. Uning minimal erishgan daromadi miqdorini toping",
            id: 5,
        },
        {
            id: 6,
            savol: "Xisoblang (50 ball) : 5 oy muddatga yillik 10% stafkada 1oy imtiyozli muddat bilan malum miqdorda keradit berildi. Uning 5-oydagi foiz to'lovi 20 mingni tashkil etgan bolsa, kredit miqdorini aniqlang",
        },
        {
            id: 7,
            savol: "Iqtisodiy Atamalar (10 ball) : Faoliyati daromad olishga qaratilmagan bank",
        },
        {
            id: 8,
            savol: "Iqtisodiy Atamalar (20 ball) : Bir davlatning o'z fuqarolari tomonidan ma'lum bir vaqt davomida (odatda bir yil) ishlab chiqarilgan barcha tovarlar va xizmatlarning umumiy qiymati.",
        },
        {
            id: 9,
            savol: "Iqtisodiy Atamalar (30 ball) :  foydalanish uchun tayyor korxona, firma yoki mashhur firma mahsulotining savdo markasidan foydalanilgan holda amalga oshiriluvchi biznes yuritish usuli. ",
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