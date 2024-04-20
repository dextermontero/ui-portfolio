import React, { useEffect, useRef } from "react";
import underMaintenances from '../lotties/under-maintenace.json'
import lottie from "lottie-web"


function OnProgress () {

    const underMaintenance = useRef(null)

    useEffect(() => {
        const under_Maintenance = lottie.loadAnimation({
            // @ts-ignore
            container: underMaintenance.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: underMaintenances
        });

        return () => {
            under_Maintenance.destroy();
          };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-[80vh] overflow-hidden">
            <div className="mb-4 h-96" ref={underMaintenance}></div>
            <h2 className="uppercase xl:text-5xl text-2xl font-montserrat-black font-bold text-gray-400 inline-flex items-center">Page Under Construction</h2>
            <span className="text-gray-400 font-montserrat-regular mt-4 text-sm xl:text-lg">This page is still in progress. Please check back later!</span>
        </div>
    )
}

export default OnProgress