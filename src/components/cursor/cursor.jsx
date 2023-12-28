import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './cursor.css'
import { FaStar } from 'react-icons/fa'

const Cursor = () => {

    console.log(cursorPosition)
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
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

    useEffect(() => {
        const start = new Date().getTime();
        const originPosition = { x: 0, y: 0 };
        let count = 0;
        const config = {
            starAnimationDuration: 1500,
            minimumTimeBetweenStars: 250,
            minimumDistanceBetweenStars: 75,
            glowDuration: 75,
            maximumGlowPointSpacing: 10,
            colors: ["249 146 253", "252 254 255"],
            sizes: ["1.4rem", "1rem", "0.6rem"],
            animations: ["fall-1", "fall-2", "fall-3"]
          }

          const updateCursor = (e) => {
            console.log(e.clientX, e.clientY);
            setCursorPosition({ x: e.clientX, y: e.clientY });
          };

        const calcDistance = (a, b) => {
            const diffX = b.x - a.x,
                  diffY = b.y - a.y;
            
            return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
          }

        const calcElapsedTime = (start, end) => end - start;

        const last = {
            starTimestamp: start,
            starPosition: originPosition,
            mousePosition: originPosition
          }
        const mousemove = (e) => {
            const newDot = { x: e.clientX, y: e.pageY, id: Date.now() };
            setDots((prevDots) => [...prevDots.slice(-49), newDot]);

            const now = new Date().getTime();

        window.addEventListener("mousemove", mousemove);

            window.addEventListener('mousemove', updateCursor);
            window.addEventListener('scroll', updateCursor);

        return () => {
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('scroll', updateCursor);
        };
    }
    },);

    return (
        <>

            {dots.map(dot => (
                <motion.div
                    key={dot.id}
                    style={{ position: 'absolute',     top: `${cursorPosition.y}px`,left: `${cursorPosition.x}px`, zIndex:9999,height:'100%' }}
                    animate={{ scale: 0, transition: { duration: 0.5 } }}
                >
                    <FaStar className='dot' style={{ color: selectColors(colors),boxShadow: `0 0 10px ${selectGlowingColors(glowingColor)}`,borderRadius:'50%' }} />
                </motion.div>
            ))}
        </>
    )
}

export default Cursor;
