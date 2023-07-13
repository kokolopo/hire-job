import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import useTalents from "./useTalents";

export default function Example({ totalPage }) {
    const { nextPage } = useTalents()
    const [active, setActive] = React.useState(1);

    const next = () => {
        if (active === totalPage) return;

        setActive(active + 1);
        nextPage(active + 1)
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
        nextPage(active - 1)
    };

    return (
        <div className="flex items-center gap-8">
            <IconButton
                size="sm"
                variant="outlined"
                color="blue-gray"
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="w-4 h-4" />
            </IconButton>
            <Typography color="gray" className="font-normal">
                Page <strong className="text-blue-gray-900">{active}</strong> of{" "}
                <strong className="text-blue-gray-900">{totalPage}</strong>
            </Typography>
            <IconButton
                size="sm"
                variant="outlined"
                color="blue-gray"
                onClick={next}
                disabled={active === totalPage}
            >
                <ArrowRightIcon strokeWidth={2} className="w-4 h-4" />
            </IconButton>
        </div>
    );
}