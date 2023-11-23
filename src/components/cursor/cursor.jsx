import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './cursor.css'
import { FaStar } from 'react-icons/fa'

const Cursor = () => {
    const [dots, setDots] = useState([]);
    const colors = [
        'rgb(115, 45, 217)',
        'rgb(163, 15, 200)',
        'rgb(196, 0, 181)',
        'rgb(221, 0, 160)',
        'rgb(238, 0, 140)',
        'rgb(250, 0, 121)',
        'rgb(255, 39, 104)',
        'rgb(255, 69, 88)',
        'rgb(255, 93, 74)',
        'rgb(255, 115, 63)']

        const glowingColor=['rgba(115, 45, 217, 0.8)', 'rgba(163, 15, 200, 0.8)', 'rgba(196, 0, 181, 0.8)', 'rgba(221, 0, 160, 0.8)', 'rgba(238, 0, 140, 0.8)', 'rgba(250, 0, 121, 0.8)', 'rgba(255, 39, 104, 0.8)', 'rgba(255, 69, 88, 0.8)', 'rgba(255, 93, 74, 0.8)', 'rgba(255, 115, 63, 0.8)']
        const selectGlowingColors=(glowingColor)=>{
            const randomIndex = Math.floor(Math.random() * glowingColor.length);
        return glowingColor[randomIndex];
        }
    const selectColors = (colors) => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
    console.log(dots)

    useEffect(() => {
        const mousemove = (e) => {
            const newDot = { x: e.clientX, y: e.pageY, id: Date.now() };
            setDots((prevDots) => [...prevDots.slice(-49), newDot]);
        };

        window.addEventListener("mousemove", mousemove);

        return () => {
            window.removeEventListener("mousemove", mousemove);
        };
    }, []);

    return (
        <>

            {dots.map(dot => (
                <motion.div
                    key={dot.id}
                    style={{ position: 'absolute', left: dot.x, top: dot.y, zIndex:9999 }}
                    animate={{ scale: 0, transition: { duration: 0.5 } }}
                >
                    <FaStar className='dot' style={{ color: selectColors(colors),boxShadow: `0 0 10px ${selectGlowingColors(glowingColor)}`,borderRadius:'50%' }} />
                </motion.div>
            ))}
        </>
    )
}

export default Cursor;
