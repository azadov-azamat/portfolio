
import {PortfolioDataProps} from "../../interface/redux/variable.interface.ts";
import {Card, CardBody, Typography} from "@material-tailwind/react";
import {BiLinkExternal} from "react-icons/bi";
import {LazyLoadImage} from 'react-lazy-load-image-component';

export default function Portfolio({id, title, desc, src, owner, hash, url, manager, position, start_date, final_date, status}: PortfolioDataProps) {

    return (
        <div id={String(id)} className={""}>
            <Card>
                <CardBody className={'rounded flex flex-col p-3 border'}>
                    <LazyLoadImage effect={"black-and-white"}
                                   className={"w-full h-auto object-cover object-center"} alt={title}
                                   src={src}
                    />

                    <div className="my-2 gap-2 overflow-hidden">
                        <div className="flex gap-2 items-center">
                            <Typography variant={'small'} className={'font-bold'}>
                                Nomi:
                            </Typography>
                            <Typography variant={'small'} className={'font-medium'}>
                                {title}
                            </Typography>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Typography variant={'small'} className={'font-bold'}>
                                Loyiha egasi:
                            </Typography>
                            <Typography variant={'small'} className={'font-medium'}>
                                {owner}
                            </Typography>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Typography variant={'small'} className={'font-bold'}>
                                Loyiha manejeri:
                            </Typography>
                            <Typography variant={'small'} className={'font-medium'}>
                                {manager}
                            </Typography>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Typography variant={'small'} className={'font-bold'}>
                                Yo'nalish:
                            </Typography>
                            <Typography variant={'small'} className={'font-medium underline'}>
                                {position}
                            </Typography>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Typography variant={'small'} className={'font-bold'}>
                                Vaqt:
                            </Typography>
                            <Typography variant={'small'} className={'font-medium'}>
                                {start_date} - {final_date}
                            </Typography>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Typography variant={'small'} className={'font-bold'}>
                                Holat:
                            </Typography>
                            <Typography variant={'small'} className={`font-medium text-white rounded px-1 ${status ? 'bg-green-500' : 'bg-red-500'}`}>
                                {status ? 'Aktiv' : "Aktiv emas"}
                            </Typography>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Typography variant={'small'} className={'font-bold'}>
                               Manzili:
                            </Typography>
                            <Typography variant={'small'} className={'flex items-center gap-2 font-medium'}>
                                {url} <a href={`https://${url}`} target={"_blank"}>
                                <BiLinkExternal className={'text-blue-500'}/>
                            </a>
                            </Typography>
                        </div>
                        <div className="flex flex-col mt-2">
                            <Typography variant={'small'} className={'font-bold'}>
                                Loyiha haqida:
                            </Typography>
                            <Typography variant={'small'} className={'flex font-medium'} >
                                {/*{isDesc ? desc : desc.substring(0, 50) + (isDesc ? '' : "...")}*/}
                                {desc}
                            </Typography>
                        </div>
                    </div>

                    <div className="">
                        <Typography variant={'small'} className={'font-bold'}>
                            Texnologiyalar:
                        </Typography>
                        <div className="w-full flex flex-wrap grid-cols-4 gap-2">
                            {
                                hash.map((item, inx) => (
                                    <Typography variant={'small'} key={inx}
                                                className={'flex font-medium border justify-center items-center rounded px-2'}>
                                        {/*{isDesc ? desc : desc.substring(0, 50) + (isDesc ? '' : "...")}*/}
                                        #{item}
                                    </Typography>
                                ))
                            }
                        </div>
                    </div>

                </CardBody>
            </Card>
        </div>
    );
}