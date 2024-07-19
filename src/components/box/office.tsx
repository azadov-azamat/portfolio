import {OfficesDataProps} from "../../interface/redux/variable.interface.ts";
import {Card, CardBody, Typography} from "@material-tailwind/react";
import {LazyLoadImage} from 'react-lazy-load-image-component';

export default function OfficeComponent({id, title, src}: OfficesDataProps) {

    return (
        <div id={String(id)} className={""}>
            <Card>
                <CardBody className={'rounded flex items-center gap-3 p-3'}>
                    <LazyLoadImage effect={"black-and-white"}
                                   className={"w-24 h-auto object-cover object-center"} alt={title}
                                   src={src}
                    />
                    <Typography variant={'h5'} className={'font-bold'}>{title}</Typography>
                </CardBody>
            </Card>
        </div>
    );
}