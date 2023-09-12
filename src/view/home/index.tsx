// import React from 'react';

import PageTitle from "../../components/page-title";
import {PortfolioDataProps} from "../../interface/redux/variable.interface.ts";
import Portfolio from "../../components/box/portfolio.tsx";
import s_justice from "../../assets/smart-adliya.png";
import depos from "../../assets/depository.png";
import b_advice from "../../assets/b-advice.png";
import dil from "../../assets/dilhush.jpg";
import exim from "../../assets/eximerp.jpg";
import guzarp from "../../assets/guzarpost.jpg";
import modme from "../../assets/modme.png";
import sam from "../../assets/sammi.png";
import top from "../../assets/topilmalar.png";

export default function Home() {

    const portfolioData: PortfolioDataProps[] = [
        {
            id: 3,
            title: "Depository",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet blanditiis commodi deserunt, " +
                "eius esse facilis fugiat, libero magni maiores minus quod repudiandae tenetur veritatis? Commodi consequuntur cupiditate voluptate.",
            src: depos,
            owner: "NAPA Automotive",
            hash: ["react-js", "redux", "socket.io", "bootstrap", "pwa", "zoom", "react-jutsu"],
            position: "Frontend Developer",
            url: "evote-uz.vercel.app",
            start_date: "01/08/2021",
            final_date: "01/01/2022",
            status: false,
            manager: "Umid Abdusattorov"
        },
        {
            id: 9,
            title: "Topilmalar - axborot tizimi",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet blanditiis commodi deserunt, " +
                "eius esse facilis fugiat, libero magni maiores minus quod repudiandae tenetur veritatis? Commodi consequuntur cupiditate voluptate.",
            src: top,
            owner: "Davlat Xizmatlar Agentligi",
            hash: ["react-js", "redux", "redux-toolkit", "bootstrap", "crago", "eslint"],
            position: "Frontend Developer",
            url: "topilmalar.davxizmat.uz",
            start_date: "01/02/2022",
            final_date: "01/01/2023", status: true,
            manager: "Mashrab Mamatqulov"
        },
        {
            id: 1,
            title: "Smart Adliya - axborot tizimi",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet blanditiis commodi deserunt," +
                " eius esse facilis fugiat, libero magni maiores minus quod repudiandae tenetur veritatis? Commodi consequuntur cupiditate voluptate.",
            src: s_justice,
            owner: "Adliya Vazirligi",
            hash: ["java", "oop", "spring", "springboot", "mail"],
            position: "Backend Developer",
            url: "smart.adliya.uz",
            start_date: "01/05/2022",
            final_date: "01/12/2022",
            manager: "Kamoliddin Xojayev",
            status: true
        },
        {
            id: 2,
            title: "B-Advice",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet blanditiis commodi deserunt," +
                " eius esse facilis fugiat, libero magni maiores minus quod repudiandae tenetur veritatis? Commodi consequuntur cupiditate voluptate.",
            src: b_advice,
            owner: "Adliya Vazirligi",
            hash: ["java", "oop", "spring", "springboot", "microservice", "mail"],
            position: "Backend Developer",
            url: "b-advice.uz",
            start_date: "01/07/2022",
            final_date: "01/12/2022",
            status: true,
            manager: "Kamoliddin Xojayev"
        },
        {
            id: 7,
            title: "Modme - clone",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet blanditiis commodi deserunt, " +
                "eius esse facilis fugiat, libero magni maiores minus quod repudiandae tenetur veritatis? Commodi consequuntur cupiditate voluptate.",
            src: modme,
            owner: "Digital Dreams LLC",
            hash: ["react-js", "vite-js", "redux", "redux-toolkit", "material-tailwind", "tailwindcss", "mobiscroll", "sms-shlyuz", "dnd", "typescript"],
            position: "Frontend Developer",
            url: "modme-crm.vercel.app",
            start_date: "01/02/2023",
            final_date: "10/02/2023",
            status: false,
            manager: "Ziyodulla"
        },
        {
            id: 4,
            title: "Dilhush - restorani",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet blanditiis commodi deserunt, " +
                "eius esse facilis fugiat, libero magni maiores minus quod repudiandae tenetur veritatis? Commodi consequuntur cupiditate voluptate.",
            src: dil,
            owner: "Digital Dreams LLC",
            hash: ["react-js", "redux", "redux-toolkit", "socket.io", "material-tailwind", "tailwindcss", "typescript"],
            position: "Frontend Developer",
            url: "dilhush-admin.vercel.app",
            start_date: "01/05/2023",
            final_date: "01/08/2023",
            status: true,
            manager: "Ziyodulla"
        },
        {
            id: 6,
            title: "Guzarpost",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet blanditiis commodi deserunt, " +
                "eius esse facilis fugiat, libero magni maiores minus quod repudiandae tenetur veritatis? Commodi consequuntur cupiditate voluptate.",
            src: guzarp,
            owner: "Kervanyul Technologies",
            hash: ["react-js", "vite-js", "redux", "redux-toolkit", "material-tailwind", "tailwindcss", "typescript"],
            position: "Frontend Developer",
            url: "guzarpost.uz",
            start_date: "20/05/2023",
            final_date: "01/09/2023",
            status: true,
            manager: "Bexruz Muzaffarov"
        },
        {
            id: 5,
            title: "EximERP",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet blanditiis commodi deserunt, " +
                "eius esse facilis fugiat, libero magni maiores minus quod repudiandae tenetur veritatis? Commodi consequuntur cupiditate voluptate.",
            src: exim,
            owner: "Kervanyul Technologies",
            hash: ["react-js", "vite-js", "redux", "redux-toolkit", "socket.io", "material-ui"],
            position: "Texnik yordamchi - Frontend",
            url: "eximerp.uz",
            start_date: "01/06/2023",
            status: true,
            final_date: "01/09/2023",
            manager: "Bexruz Muzaffarov"
        },
        {
            id: 8,
            title: "Blog sayt",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet blanditiis commodi deserunt, " +
                "eius esse facilis fugiat, libero magni maiores minus quod repudiandae tenetur veritatis? Commodi consequuntur cupiditate voluptate.",
            src: sam,
            owner: "Self Study",
            hash: ["react-js", "next-js", "material-ui", "graphql", "sql", "ssr", "seo", "typescript"],
            position: "Frontend Developer",
            url: "nextjs-tutorial-kohl.vercel.app",
            start_date: "10/03/2023",
            final_date: "20/03/2023",
            status: false,
            manager: "Samar Badriddinov"
        }
    ]

    return (
        <div>
            <PageTitle title={"Portfolio"}/>
            <section
                className={'w-full grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 justify-center gap-5 mt-5'}>
                {
                    portfolioData.map(({
                                           id,
                                           title,
                                           desc,
                                           src,
                                           owner,
                                           hash,
                                           position, url,
                                           start_date, final_date, manager, status
                                       }, keys) => <Portfolio key={keys} id={id}
                                                              title={title}
                                                              desc={desc}
                                                              src={src} owner={owner}
                                                              hash={hash} url={url} position={position}
                                                              start_date={start_date} final_date={final_date}
                                                              manager={manager} status={status}
                    />)
                }
            </section>
        </div>
    );
}