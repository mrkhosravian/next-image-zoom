import React, {CSSProperties, useRef, useState} from "react";
import {default as Image, ImageProps} from "next/image";

export const Zoom = (props: ImageProps) => {

    const containerRef = useRef<HTMLDivElement>(null);

    const [clicked, setClicked] = useState(false);

    const handleImageZoom = () => {
        if (!containerRef.current || clicked) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        let clientHeight = containerRect.height;
        let clientWidth = containerRect.width;

        const wPrim = (window.innerWidth - containerRect.width) / 2;
        const hPrim = (window.innerHeight - containerRect.height) / 2;
        const cL = containerRect.left;
        const cT = containerRect.top;

        if (((window.innerHeight * .9) / clientHeight) * clientWidth >= window.innerWidth) {
            containerRef.current.style.transform = `translate(${wPrim - cL}px,${hPrim - cT}px) scale(${(window.innerWidth * .9) / clientWidth})`;
        } else {
            containerRef.current.style.transform = `translate(${wPrim - cL}px,${hPrim - cT}px) scale(${(window.innerHeight * .9) / clientHeight})`;
        }

        if (clientWidth <= clientHeight) {
        } else {
        }

        window.document.addEventListener("scroll", closeWrapper, {once: true});

        setClicked(true);
    };

    const closeWrapper = () => {
        if (!containerRef.current) return;

        containerRef.current.style.transform = `scale(1)`;
        setClicked(false);
    };

    const styles: CSSProperties = {
        position: "relative",
        transition: "transform 300ms",
        display: props.layout === "fixed" ? "inline-block" : "block",
        width: props.layout === "fixed" ? "max-content" : "100%",
        height: props.layout === "fixed" ? "max-content" : "100%",
        zIndex: clicked ? 50 : 0,
        overflow: "hidden",
        backgroundColor: clicked ? "rgba(0,0,0,.3)" : "transparent"
    }

    return (
        <>
            {clicked
                ? <div style={{
                    backgroundColor: "white",
                    opacity: .8,
                    position: "fixed",
                    zIndex: 40,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
                       onClick={closeWrapper}
                />
                : null}
            <div
                style={styles}
                ref={containerRef}
                onClick={handleImageZoom}
            >
                <Image {...props}/>
            </div>

        </>
    );
};

export default Zoom;